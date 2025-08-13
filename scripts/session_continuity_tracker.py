#!/usr/bin/env python3
"""
Session Continuity Tracker
Tracks narrative continuity across campaign sessions using Pydantic models.
"""

import os
import re
import json
from pathlib import Path
from datetime import datetime, date
from typing import Dict, List, Optional, Any, Set
from collections import defaultdict, Counter

# Import our Pydantic models  
import sys
sys.path.append('../data')
from models import Session, Character, Location, Faction, ContentType, WorldRealm

class SessionContinuityTracker:
    """Tracks continuity across campaign sessions."""
    
    def __init__(self, vault_path: str):
        self.vault_path = Path(vault_path)
        self.sessions: Dict[int, Session] = {}
        self.session_files: Dict[int, Path] = {}
        self.character_arcs: Dict[str, List[Dict]] = defaultdict(list)
        self.plot_threads: Dict[str, List[Dict]] = defaultdict(list)
        self.location_visits: Dict[str, List[int]] = defaultdict(list)
        self.continuity_issues: List[Dict] = []
        
    def extract_session_data(self, file_path: Path) -> Optional[Session]:
        """Extract session data from markdown file."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception:
            return None
            
        # Extract session number
        session_num = self.extract_session_number(file_path.name, content)
        if session_num is None:
            return None
            
        # Extract basic info
        title = file_path.stem
        campaign = self.extract_campaign_name(file_path, content)
        
        # Extract participants
        dm = self.extract_dm(content)
        players = self.extract_players(content)
        characters = self.extract_characters_present(content)
        
        # Extract session content
        key_events = self.extract_key_events(content)
        locations_visited = self.extract_locations_visited(content)
        npcs_encountered = self.extract_npcs_encountered(content)
        
        # Extract progression
        plot_advancement = self.extract_plot_advancement(content)
        world_changes = self.extract_world_changes(content)
        character_development = self.extract_character_development(content)
        
        session = Session(
            title=title,
            session_number=session_num,
            campaign=campaign,
            dm=dm or "Unknown DM",
            players=players,
            characters=characters,
            key_events=key_events,
            locations_visited=locations_visited,
            npcs_encountered=npcs_encountered,
            plot_advancement=plot_advancement,
            world_changes=world_changes,
            character_development=character_development,
            content_type=ContentType.session,
            world=self.determine_world_realm(content)
        )
        
        return session
        
    def extract_session_number(self, filename: str, content: str) -> Optional[int]:
        """Extract session number from filename or content."""
        # Try filename first
        filename_patterns = [
            r'session[_\s]*(\d+)',
            r'session[_\s]*0*(\d+)',
            r's(\d+)',
            r'(\d+)'
        ]
        
        for pattern in filename_patterns:
            match = re.search(pattern, filename.lower())
            if match:
                return int(match.group(1))
                
        # Try content
        content_patterns = [
            r'session\s*#?(\d+)',
            r'session\s*number:?\s*(\d+)',
            r'session\s*(\d+)'
        ]
        
        for pattern in content_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                return int(match.group(1))
                
        return None
        
    def extract_campaign_name(self, file_path: Path, content: str) -> str:
        """Extract campaign name from path or content."""
        # Check parent directory names
        path_parts = file_path.parts
        for part in path_parts:
            if 'campaign' in part.lower():
                return part
                
        # Check content
        campaign_patterns = [
            r'campaign:?\s*([^.\n]+)',
            r'story:?\s*([^.\n]+)'
        ]
        
        for pattern in campaign_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
        return "Unknown Campaign"
        
    def extract_dm(self, content: str) -> Optional[str]:
        """Extract DM name from content."""
        dm_patterns = [
            r'DM:?\s*([^.\n]+)',
            r'Dungeon Master:?\s*([^.\n]+)',
            r'Game Master:?\s*([^.\n]+)',
            r'GM:?\s*([^.\n]+)'
        ]
        
        for pattern in dm_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                return match.group(1).strip()
                
        return None
        
    def extract_players(self, content: str) -> List[str]:
        """Extract player names from content."""
        players = []
        
        player_patterns = [
            r'Players?:?\s*([^.\n]+)',
            r'Participants:?\s*([^.\n]+)'
        ]
        
        for pattern in player_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                player_list = match.group(1)
                players.extend([p.strip() for p in player_list.split(',') if p.strip()])
                break
                
        return players
        
    def extract_characters_present(self, content: str) -> List[str]:
        """Extract character names from content."""
        characters = []
        
        # Look for character section
        char_patterns = [
            r'Characters?:?\s*([^.\n]+)',
            r'Party:?\s*([^.\n]+)',
            r'Player Characters?:?\s*([^.\n]+)'
        ]
        
        for pattern in char_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                char_list = match.group(1)
                characters.extend([c.strip() for c in char_list.split(',') if c.strip()])
                break
                
        # Also look for character names in wikilinks
        wikilink_pattern = r'\[\[([^]]+)\]\]'
        wikilinks = re.findall(wikilink_pattern, content)
        
        # Filter for likely character names (proper nouns)
        for link in wikilinks:
            clean_name = link.split('|')[0].split('#')[0].strip()
            if clean_name and clean_name[0].isupper() and len(clean_name.split()) <= 3:
                characters.append(clean_name)
                
        return list(set(characters))  # Remove duplicates
        
    def extract_key_events(self, content: str) -> List[str]:
        """Extract key events from content."""
        events = []
        
        # Look for event sections
        event_sections = [
            r'(?:key\s+)?events?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'summary:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'what\s+happened:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in event_sections:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                event_text = match.group(1)
                event_items = re.findall(r'[-*]\s*([^\n]+)', event_text)
                events.extend([event.strip() for event in event_items])
                break
                
        # If no structured events found, extract from narrative
        if not events:
            sentences = re.split(r'[.!?]+', content)
            action_sentences = [s.strip() for s in sentences 
                              if any(word in s.lower() for word in 
                                   ['fought', 'discovered', 'met', 'traveled', 'found', 'defeated'])]
            events.extend(action_sentences[:10])  # Limit to 10
            
        return events
        
    def extract_locations_visited(self, content: str) -> List[str]:
        """Extract locations visited from content."""
        locations = []
        
        # Look for location section
        loc_patterns = [
            r'locations?:?\s*([^.\n]+)',
            r'places?\s+visited:?\s*([^.\n]+)',
            r'where:?\s*([^.\n]+)'
        ]
        
        for pattern in loc_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                loc_list = match.group(1)
                locations.extend([l.strip() for l in loc_list.split(',') if l.strip()])
                break
                
        # Extract from wikilinks that look like places
        wikilink_pattern = r'\[\[([^]]+)\]\]'
        wikilinks = re.findall(wikilink_pattern, content)
        
        place_indicators = ['hall', 'chamber', 'room', 'temple', 'palace', 'city', 'town', 'village']
        for link in wikilinks:
            clean_name = link.split('|')[0].split('#')[0].strip()
            if any(indicator in clean_name.lower() for indicator in place_indicators):
                locations.append(clean_name)
                
        return list(set(locations))
        
    def extract_npcs_encountered(self, content: str) -> List[str]:
        """Extract NPCs encountered from content."""
        npcs = []
        
        # Look for NPC section
        npc_patterns = [
            r'NPCs?:?\s*([^.\n]+)',
            r'characters?\s+met:?\s*([^.\n]+)',
            r'people:?\s*([^.\n]+)'
        ]
        
        for pattern in npc_patterns:
            match = re.search(pattern, content, re.IGNORECASE)
            if match:
                npc_list = match.group(1)
                npcs.extend([n.strip() for n in npc_list.split(',') if n.strip()])
                break
                
        return list(set(npcs))
        
    def extract_plot_advancement(self, content: str) -> List[str]:
        """Extract plot advancement from content."""
        advancement = []
        
        plot_patterns = [
            r'plot:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'story\s+progress:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'advancement:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in plot_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                plot_text = match.group(1)
                plot_items = re.findall(r'[-*]\s*([^\n]+)', plot_text)
                advancement.extend([item.strip() for item in plot_items])
                break
                
        return advancement
        
    def extract_world_changes(self, content: str) -> List[str]:
        """Extract world state changes from content."""
        changes = []
        
        change_patterns = [
            r'world\s+changes?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'consequences?:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'aftermath:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in change_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                change_text = match.group(1)
                change_items = re.findall(r'[-*]\s*([^\n]+)', change_text)
                changes.extend([item.strip() for item in change_items])
                break
                
        return changes
        
    def extract_character_development(self, content: str) -> List[str]:
        """Extract character development from content."""
        development = []
        
        dev_patterns = [
            r'character\s+development:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'character\s+growth:?\s*((?:[-*]\s*[^\n]+\n?)+)',
            r'development:?\s*((?:[-*]\s*[^\n]+\n?)+)'
        ]
        
        for pattern in dev_patterns:
            match = re.search(pattern, content, re.IGNORECASE | re.MULTILINE)
            if match:
                dev_text = match.group(1)
                dev_items = re.findall(r'[-*]\s*([^\n]+)', dev_text)
                development.extend([item.strip() for item in dev_items])
                break
                
        return development
        
    def determine_world_realm(self, content: str) -> WorldRealm:
        """Determine primary world realm for session."""
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
            
    def load_sessions(self) -> None:
        """Load all session files from vault."""
        session_dirs = [
            self.vault_path / "01_Adventures",
            self.vault_path / "1-Session Journals"
        ]
        
        session_files = []
        for sess_dir in session_dirs:
            if sess_dir.exists():
                session_files.extend(sess_dir.rglob("*.md"))
                
        print(f"Found {len(session_files)} potential session files")
        
        for file_path in session_files:
            session = self.extract_session_data(file_path)
            if session:
                self.sessions[session.session_number] = session
                self.session_files[session.session_number] = file_path
                
        print(f"Loaded {len(self.sessions)} sessions")
        
    def track_character_arcs(self) -> None:
        """Track character development across sessions."""
        for session_num, session in sorted(self.sessions.items()):
            for char_name in session.characters:
                arc_entry = {
                    "session": session_num,
                    "development": [dev for dev in session.character_development 
                                  if char_name.lower() in dev.lower()],
                    "events": [event for event in session.key_events 
                             if char_name.lower() in event.lower()]
                }
                self.character_arcs[char_name].append(arc_entry)
                
    def track_plot_threads(self) -> None:
        """Track plot threads across sessions."""
        # Extract recurring themes and plot elements
        all_plot_items = []
        for session in self.sessions.values():
            all_plot_items.extend(session.plot_advancement)
            
        # Group related plot items
        plot_keywords = defaultdict(list)
        for session_num, session in sorted(self.sessions.items()):
            for plot_item in session.plot_advancement:
                # Extract key words from plot item
                words = re.findall(r'\b[A-Z][a-z]+\b', plot_item)
                for word in words:
                    plot_keywords[word].append({
                        "session": session_num,
                        "item": plot_item
                    })
                    
        # Identify threads that appear in multiple sessions
        for keyword, appearances in plot_keywords.items():
            if len(appearances) >= 2:
                self.plot_threads[keyword] = appearances
                
    def check_continuity_issues(self) -> None:
        """Check for continuity issues between sessions."""
        session_numbers = sorted(self.sessions.keys())
        
        # Check for missing sessions
        for i in range(min(session_numbers), max(session_numbers)):
            if i not in session_numbers:
                self.continuity_issues.append({
                    "type": "missing_session",
                    "description": f"Session {i} appears to be missing",
                    "severity": "moderate",
                    "sessions_affected": []
                })
                
        # Check character consistency
        all_characters = set()
        for session in self.sessions.values():
            all_characters.update(session.characters)
            
        for char_name in all_characters:
            appearances = [num for num, session in self.sessions.items() 
                          if char_name in session.characters]
            
            # Check for gaps in character appearances
            if len(appearances) > 1:
                gaps = []
                for i in range(len(appearances) - 1):
                    if appearances[i+1] - appearances[i] > 3:  # Missing for 3+ sessions
                        gaps.append((appearances[i], appearances[i+1]))
                        
                if gaps:
                    self.continuity_issues.append({
                        "type": "character_gap",
                        "description": f"Character {char_name} has gaps in appearances: {gaps}",
                        "severity": "low",
                        "sessions_affected": appearances
                    })
                    
        # Check location consistency
        for session_num, session in self.sessions.items():
            for location in session.locations_visited:
                self.location_visits[location].append(session_num)
                
    def generate_continuity_report(self) -> Dict[str, Any]:
        """Generate comprehensive continuity report."""
        return {
            "timestamp": datetime.now().isoformat(),
            "campaign_overview": {
                "total_sessions": len(self.sessions),
                "session_range": f"{min(self.sessions.keys())}-{max(self.sessions.keys())}" if self.sessions else "N/A",
                "total_characters": len(self.character_arcs),
                "total_locations": len(self.location_visits),
                "plot_threads": len(self.plot_threads)
            },
            "character_arcs": dict(self.character_arcs),
            "plot_threads": dict(self.plot_threads),
            "location_visits": dict(self.location_visits),
            "continuity_issues": self.continuity_issues,
            "session_summary": {
                num: {
                    "title": session.title,
                    "characters": session.characters,
                    "locations": session.locations_visited,
                    "key_events": session.key_events[:3],  # Top 3 events
                    "world": session.world.value
                }
                for num, session in sorted(self.sessions.items())
            }
        }
        
    def export_results(self, report: Dict[str, Any], output_path: str) -> None:
        """Export continuity report."""
        with open(output_path, 'w') as f:
            json.dump(report, f, indent=2, default=str)
            
        print(f"Continuity report exported to: {output_path}")
        
def main():
    """Main function."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Track session continuity in Cordelia vault")
    parser.add_argument("vault_path", help="Path to vault directory")
    parser.add_argument("--output", "-o", help="Output path for continuity report", 
                       default="session_continuity_report.json")
    
    args = parser.parse_args()
    
    tracker = SessionContinuityTracker(args.vault_path)
    
    print("Loading sessions...")
    tracker.load_sessions()
    
    print("Tracking character arcs...")
    tracker.track_character_arcs()
    
    print("Tracking plot threads...")
    tracker.track_plot_threads()
    
    print("Checking continuity issues...")
    tracker.check_continuity_issues()
    
    report = tracker.generate_continuity_report()
    
    print(f"\nContinuity Report:")
    print(f"Sessions: {report['campaign_overview']['total_sessions']}")
    print(f"Characters: {report['campaign_overview']['total_characters']}")
    print(f"Plot threads: {report['campaign_overview']['plot_threads']}")
    print(f"Continuity issues: {len(report['continuity_issues'])}")
    
    tracker.export_results(report, args.output)
    
if __name__ == "__main__":
    main()