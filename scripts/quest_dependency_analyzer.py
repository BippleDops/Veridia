#!/usr/bin/env python3
"""
Quest Dependency Analyzer
Analyzes quest dependencies and progression paths using Pydantic models.
"""

import os
import re
import json
import networkx as nx
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Optional, Any, Set, Tuple
from collections import defaultdict, Counter

# Import our Pydantic models  
import sys
sys.path.append('../data')
from models import Quest, BaseVaultContent, ContentType, WorldRealm

class QuestDependencyAnalyzer:
    """Analyzes quest dependencies and progression paths."""
    
    def __init__(self, vault_path: str):
        self.vault_path = Path(vault_path)
        self.quests: Dict[str, Quest] = {}
        self.dependency_graph = nx.DiGraph()
        self.progression_paths: List[List[str]] = []
        self.quest_clusters: Dict[str, List[str]] = {}
        
    def extract_quest_data(self, file_path: Path) -> Optional[Quest]:
        """Extract quest data from markdown file."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            return None
            
        title = file_path.stem
        
        # Extract quest components
        objective = self.extract_objective(content)
        quest_giver = self.extract_quest_giver(content)
        prerequisites = self.extract_prerequisites(content)
        related_quests = self.extract_related_quests(content)
        key_locations = self.extract_key_locations(content)
        key_npcs = self.extract_key_npcs(content)
        rewards = self.extract_rewards(content)
        consequences = self.extract_consequences(content)
        faction_involvement = self.extract_faction_involvement(content)
        
        quest = Quest(
            title=title,
            objective=objective or "Objective not specified",
            quest_giver=quest_giver,
            prerequisites=prerequisites,
            related_quests=related_quests,
            key_locations=key_locations,
            key_npcs=key_npcs,
            rewards=rewards,
            consequences=consequences,
            faction_involvement=faction_involvement,
            world=self.determine_world_realm(content),
            content_type=ContentType.quest
        )
        
        return quest
        
    def extract_objective(self, content: str) -> Optional[str]:
        """Extract quest objective from content."""
        objective_patterns = [
            r'objective:?\s*([^.\n]+)',
            r'goal:?\s*([^.\n]+)',
            r'mission:?\s*([^.\n]+)',
            r'task:?\s*([^.\n]+)'
        ]
        
        for pattern in objective_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
        # Try to extract from first paragraph
        paragraphs = content.split('\n\n')
        for para in paragraphs[:3]:  # Check first 3 paragraphs
            if len(para.strip()) > 50:  # Substantial paragraph
                return para.strip()[:200] + "..." if len(para) > 200 else para.strip()
                
        return None
        
    def extract_quest_giver(self, content: str) -> Optional[str]:
        """Extract quest giver from content."""
        giver_patterns = [
            r'quest\s+giver:?\s*(?:\[\[)?([^.\n\]]+)',
            r'given\s+by:?\s*(?:\[\[)?([^.\n\]]+)',
            r'contact:?\s*(?:\[\[)?([^.\n\]]+)',
            r'employer:?\s*(?:\[\[)?([^.\n\]]+)'
        ]
        
        for pattern in giver_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
        return None
        
    def extract_prerequisites(self, content: str) -> List[str]:
        """Extract quest prerequisites from content."""
        prerequisites = []
        
        prereq_patterns = [
            r'prerequisites?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'requirements?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'requires?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'must\s+have:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in prereq_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                prereq_text = match.group(1)
                prereq_items = re.findall(r'[-*]\s*([^\n]+)', prereq_text)
                prerequisites.extend([item.strip() for item in prereq_items])
                break
                
        # Also look for "after completing" patterns
        completion_patterns = [
            r'after\s+completing\s+(?:\[\[)?([^.\n\]]+)',
            r'requires\s+completion\s+of\s+(?:\[\[)?([^.\n\]]+)',
            r'unlocked\s+by\s+(?:\[\[)?([^.\n\]]+)'
        ]
        
        for pattern in completion_patterns:
            matches = re.findall(pattern, content, re.IGNORECASE)
            prerequisites.extend([match.strip() for match in matches])
            
        return list(set(prerequisites))  # Remove duplicates
        
    def extract_related_quests(self, content: str) -> List[str]:
        """Extract related quests from content."""
        related = []
        
        related_patterns = [
            r'related\s+quests?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'connected\s+to:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'part\s+of\s+series:?\s*([^.\n]+)',
            r'questline:?\s*([^.\n]+)'
        ]
        
        for pattern in related_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                if '[-*]' in match.group(1):
                    # List format
                    related_items = re.findall(r'[-*]\s*([^\n]+)', match.group(1))
                    related.extend([item.strip() for item in related_items])
                else:
                    # Single line format
                    related.append(match.group(1).strip())
                break
                
        # Look for quest wikilinks in content
        wikilink_pattern = r'\[\[([^]]+(?:Quest|Mission|Task)[^]]*)\]\]'
        quest_links = re.findall(wikilink_pattern, content, re.IGNORECASE)
        related.extend([link.strip() for link in quest_links])
        
        return list(set(related))
        
    def extract_key_locations(self, content: str) -> List[str]:
        """Extract key locations from content."""
        locations = []
        
        location_patterns = [
            r'locations?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'takes?\s+place\s+(?:in|at):?\s*([^.\n]+)',
            r'destination:?\s*([^.\n]+)',
            r'where:?\s*([^.\n]+)'
        ]
        
        for pattern in location_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                if '[-*]' in match.group(1):
                    loc_items = re.findall(r'[-*]\s*([^\n]+)', match.group(1))
                    locations.extend([item.strip() for item in loc_items])
                else:
                    locations.append(match.group(1).strip())
                break
                
        # Extract location wikilinks
        location_indicators = ['hall', 'chamber', 'temple', 'palace', 'city', 'town', 'district']
        wikilinks = re.findall(r'\[\[([^]]+)\]\]', content)
        
        for link in wikilinks:
            clean_link = link.split('|')[0].split('#')[0].strip()
            if any(indicator in clean_link.lower() for indicator in location_indicators):
                locations.append(clean_link)
                
        return list(set(locations))
        
    def extract_key_npcs(self, content: str) -> List[str]:
        """Extract key NPCs from content."""
        npcs = []
        
        npc_patterns = [
            r'(?:key\s+)?(?:NPCs?|characters?):?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'involves?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'important\s+people:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in npc_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                if '[-*]' in match.group(1):
                    npc_items = re.findall(r'[-*]\s*([^\n]+)', match.group(1))
                    npcs.extend([item.strip() for item in npc_items])
                else:
                    npcs.append(match.group(1).strip())
                break
                
        # Extract likely character names from wikilinks
        wikilinks = re.findall(r'\[\[([^]]+)\]\]', content)
        
        for link in wikilinks:
            clean_link = link.split('|')[0].split('#')[0].strip()
            # Check if it looks like a person's name
            if (clean_link and clean_link[0].isupper() and 
                len(clean_link.split()) <= 3 and 
                not any(indicator in clean_link.lower() 
                       for indicator in ['hall', 'temple', 'guild', 'academy'])):
                npcs.append(clean_link)
                
        return list(set(npcs))
        
    def extract_rewards(self, content: str) -> Dict[str, Any]:
        """Extract quest rewards from content."""
        rewards = {}
        
        reward_patterns = [
            r'rewards?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'payment:?\s*([^.\n]+)',
            r'compensation:?\s*([^.\n]+)',
            r'treasure:?\s*([^.\n]+)'
        ]
        
        for pattern in reward_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                reward_text = match.group(1)
                if '[-*]' in reward_text:
                    reward_items = re.findall(r'[-*]\s*([^\n]+)', reward_text)
                    rewards['items'] = [item.strip() for item in reward_items]
                else:
                    rewards['general'] = reward_text.strip()
                break
                
        # Look for specific reward types
        gold_pattern = r'(\d+)\s*(?:gold|gp|coins?)'
        gold_matches = re.findall(gold_pattern, content, re.IGNORECASE)
        if gold_matches:
            rewards['gold'] = int(gold_matches[0])
            
        xp_pattern = r'(\d+)\s*(?:xp|experience|exp)'
        xp_matches = re.findall(xp_pattern, content, re.IGNORECASE)
        if xp_matches:
            rewards['experience'] = int(xp_matches[0])
            
        return rewards
        
    def extract_consequences(self, content: str) -> List[str]:
        """Extract quest consequences from content."""
        consequences = []
        
        consequence_patterns = [
            r'consequences?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'results?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'outcomes?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'effects?:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in consequence_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                consequence_text = match.group(1)
                consequence_items = re.findall(r'[-*]\s*([^\n]+)', consequence_text)
                consequences.extend([item.strip() for item in consequence_items])
                break
                
        return consequences
        
    def extract_faction_involvement(self, content: str) -> List[str]:
        """Extract faction involvement from content."""
        factions = []
        
        faction_patterns = [
            r'factions?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'involves?\s+factions?:?\s*([^.\n]+)',
            r'organizations?:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in faction_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                faction_text = match.group(1)
                if '[-*]' in faction_text:
                    faction_items = re.findall(r'[-*]\s*([^\n]+)', faction_text)
                    factions.extend([item.strip() for item in faction_items])
                else:
                    factions.append(faction_text.strip())
                break
                
        # Look for faction-like wikilinks
        faction_indicators = ['guild', 'academy', 'order', 'consortium', 'syndicate', 'company']
        wikilinks = re.findall(r'\[\[([^]]+)\]\]', content)
        
        for link in wikilinks:
            clean_link = link.split('|')[0].split('#')[0].strip()
            if any(indicator in clean_link.lower() for indicator in faction_indicators):
                factions.append(clean_link)
                
        return list(set(factions))
        
    def determine_world_realm(self, content: str) -> WorldRealm:
        """Determine quest's primary realm."""
        content_lower = content.lower()
        
        aquabyssos_score = sum(1 for word in ['aquabyssos', 'depth', 'pressure', 'underwater'] 
                              if word in content_lower)
        aethermoor_score = sum(1 for word in ['aethermoor', 'sky', 'wind', 'altitude'] 
                              if word in content_lower)
        
        if aquabyssos_score > aethermoor_score:
            return WorldRealm.aquabyssos
        elif aethermoor_score > aquabyssos_score:
            return WorldRealm.aethermoor
        else:
            return WorldRealm.both
            
    def build_dependency_graph(self) -> None:
        """Build dependency graph from quest relationships."""
        # Add all quests as nodes
        for quest_name, quest in self.quests.items():
            self.dependency_graph.add_node(quest_name, **quest.dict())
            
        # Add dependency edges
        for quest_name, quest in self.quests.items():
            # Prerequisites create incoming edges
            for prereq in quest.prerequisites:
                # Try to match prerequisite to existing quest
                for other_quest in self.quests.keys():
                    if prereq.lower() in other_quest.lower() or other_quest.lower() in prereq.lower():
                        self.dependency_graph.add_edge(other_quest, quest_name, 
                                                     relationship='prerequisite')
                        
            # Related quests create undirected relationships
            for related in quest.related_quests:
                for other_quest in self.quests.keys():
                    if related.lower() in other_quest.lower() or other_quest.lower() in related.lower():
                        if not self.dependency_graph.has_edge(other_quest, quest_name):
                            self.dependency_graph.add_edge(quest_name, other_quest, 
                                                         relationship='related')
                            
    def find_progression_paths(self) -> None:
        """Find logical quest progression paths."""
        # Find quests with no prerequisites (starting points)
        starting_quests = [quest for quest, in_degree in self.dependency_graph.in_degree() 
                          if in_degree == 0]
        
        # Find paths from each starting quest
        for start_quest in starting_quests:
            paths = []
            
            # Use DFS to find all paths
            def find_paths_dfs(current, path):
                path.append(current)
                
                successors = list(self.dependency_graph.successors(current))
                if not successors:
                    # End of path
                    paths.append(path.copy())
                else:
                    for successor in successors:
                        if successor not in path:  # Avoid cycles
                            find_paths_dfs(successor, path)
                            
                path.pop()
                
            find_paths_dfs(start_quest, [])
            self.progression_paths.extend(paths)
            
    def identify_quest_clusters(self) -> None:
        """Identify clusters of related quests."""
        # Use connected components on undirected version
        undirected_graph = self.dependency_graph.to_undirected()
        
        try:
            communities = nx.community.greedy_modularity_communities(undirected_graph)
            
            for i, community in enumerate(communities):
                cluster_name = f"Cluster_{i+1}"
                self.quest_clusters[cluster_name] = list(community)
                
        except:
            # Fallback to simple connected components
            components = nx.connected_components(undirected_graph)
            for i, component in enumerate(components):
                cluster_name = f"Component_{i+1}"
                self.quest_clusters[cluster_name] = list(component)
                
    def analyze_quest_complexity(self) -> Dict[str, Any]:
        """Analyze quest complexity and dependencies."""
        analysis = {
            "total_quests": len(self.quests),
            "dependency_stats": {},
            "progression_analysis": {},
            "complexity_metrics": {},
            "bottleneck_quests": [],
            "orphaned_quests": [],
            "quest_clusters": self.quest_clusters
        }
        
        # Dependency statistics
        in_degrees = dict(self.dependency_graph.in_degree())
        out_degrees = dict(self.dependency_graph.out_degree())
        
        analysis["dependency_stats"] = {
            "avg_prerequisites": sum(in_degrees.values()) / len(in_degrees) if in_degrees else 0,
            "avg_unlocks": sum(out_degrees.values()) / len(out_degrees) if out_degrees else 0,
            "most_dependencies": max(in_degrees.items(), key=lambda x: x[1]) if in_degrees else None,
            "unlocks_most": max(out_degrees.items(), key=lambda x: x[1]) if out_degrees else None
        }
        
        # Progression analysis
        analysis["progression_analysis"] = {
            "total_paths": len(self.progression_paths),
            "avg_path_length": sum(len(path) for path in self.progression_paths) / len(self.progression_paths) if self.progression_paths else 0,
            "longest_path": max(self.progression_paths, key=len) if self.progression_paths else [],
            "starting_quests": [quest for quest in self.quests.keys() if in_degrees.get(quest, 0) == 0]
        }
        
        # Complexity metrics
        world_distribution = Counter([quest.world.value for quest in self.quests.values()])
        
        analysis["complexity_metrics"] = {
            "world_distribution": dict(world_distribution),
            "avg_locations_per_quest": sum(len(q.key_locations) for q in self.quests.values()) / len(self.quests),
            "avg_npcs_per_quest": sum(len(q.key_npcs) for q in self.quests.values()) / len(self.quests),
            "faction_involvement": sum(len(q.faction_involvement) for q in self.quests.values())
        }
        
        # Find bottleneck quests (high in-degree and out-degree)
        bottlenecks = [(quest, in_degrees.get(quest, 0) + out_degrees.get(quest, 0)) 
                      for quest in self.quests.keys()]
        bottlenecks.sort(key=lambda x: x[1], reverse=True)
        analysis["bottleneck_quests"] = bottlenecks[:5]
        
        # Find orphaned quests (no connections)
        analysis["orphaned_quests"] = [quest for quest in self.quests.keys() 
                                     if self.dependency_graph.degree(quest) == 0]
        
        return analysis
        
    def load_quests(self) -> None:
        """Load all quest files from vault."""
        quest_files = []
        
        # Look in Adventures and related directories
        search_paths = [
            self.vault_path / "01_Adventures",
            self.vault_path / "02_Worldbuilding" / "Quests"
        ]
        
        for search_path in search_paths:
            if search_path.exists():
                quest_files.extend(search_path.rglob("*.md"))
                
        # Also look for files with "quest" in the name
        all_files = list(self.vault_path.rglob("*.md"))
        quest_files.extend([f for f in all_files if 'quest' in f.name.lower()])
        
        # Remove duplicates
        quest_files = list(set(quest_files))
        
        print(f"Found {len(quest_files)} potential quest files")
        
        for file_path in quest_files:
            # Skip non-quest files
            if any(skip in file_path.name.lower() 
                   for skip in ['index', 'template', 'guide']):
                continue
                
            quest = self.extract_quest_data(file_path)
            if quest:
                self.quests[quest.title] = quest
                
        print(f"Loaded {len(self.quests)} quests")
        
    def export_results(self, analysis: Dict[str, Any], output_dir: str) -> None:
        """Export analysis results."""
        output_path = Path(output_dir)
        output_path.mkdir(exist_ok=True)
        
        # Export main analysis
        with open(output_path / 'quest_dependency_analysis.json', 'w') as f:
            json.dump(analysis, f, indent=2, default=str)
            
        # Export quest data
        quest_data = {name: quest.dict() for name, quest in self.quests.items()}
        with open(output_path / 'quests.json', 'w') as f:
            json.dump(quest_data, f, indent=2, default=str)
            
        # Export dependency graph
        graph_data = nx.node_link_data(self.dependency_graph)
        with open(output_path / 'dependency_graph.json', 'w') as f:
            json.dump(graph_data, f, indent=2, default=str)
            
        print(f"Results exported to {output_path}")
        
def main():
    """Main function."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Analyze quest dependencies in Cordelia vault")
    parser.add_argument("vault_path", help="Path to vault directory")
    parser.add_argument("--output", "-o", help="Output directory for results", 
                       default="quest_analysis")
    
    args = parser.parse_args()
    
    analyzer = QuestDependencyAnalyzer(args.vault_path)
    
    print("Loading quests...")
    analyzer.load_quests()
    
    print("Building dependency graph...")
    analyzer.build_dependency_graph()
    
    print("Finding progression paths...")
    analyzer.find_progression_paths()
    
    print("Identifying quest clusters...")
    analyzer.identify_quest_clusters()
    
    analysis = analyzer.analyze_quest_complexity()
    
    print("Quest Dependency Analysis:")
    print(f"Total quests: {analysis['total_quests']}")
    print(f"Progression paths: {analysis['progression_analysis']['total_paths']}")
    print(f"Quest clusters: {len(analysis['quest_clusters'])}")
    print(f"Orphaned quests: {len(analysis['orphaned_quests'])}")
    
    analyzer.export_results(analysis, args.output)
    
if __name__ == "__main__":
    main()