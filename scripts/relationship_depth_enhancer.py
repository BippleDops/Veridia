#!/usr/bin/env python3
"""
Phase 3 Step 42: Relationship Depth Enhancement
Adds emotional layers, histories, and timelines to character relationships
"""

import os
import re
import json
import random
from datetime import datetime, timedelta
from collections import defaultdict

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY_RUN = os.environ.get('DRY_RUN', '0') == '1'

# Relationship types with emotional depth templates
RELATIONSHIP_TYPES = {
    'family': {
        'bonds': ['blood', 'adoption', 'marriage', 'clan'],
        'emotions': ['love', 'duty', 'protection', 'disappointment', 'pride', 'resentment'],
        'dynamics': ['supportive', 'strained', 'competitive', 'protective', 'distant', 'complex'],
        'history_events': ['childhood shared experiences', 'family crisis', 'inheritance dispute', 'protective sacrifice', 'long separation', 'reunion']
    },
    'professional': {
        'bonds': ['colleague', 'mentor-student', 'superior-subordinate', 'rival', 'partner'],
        'emotions': ['respect', 'ambition', 'jealousy', 'admiration', 'frustration', 'loyalty'],
        'dynamics': ['collaborative', 'competitive', 'hierarchical', 'mentor-focused', 'tension-filled', 'mutually beneficial'],
        'history_events': ['joint mission success', 'professional betrayal', 'promotion conflict', 'shared failure', 'mentoring period', 'career advancement']
    },
    'romantic': {
        'bonds': ['current partners', 'former lovers', 'unrequited attraction', 'forbidden love', 'arranged match'],
        'emotions': ['passion', 'heartbreak', 'longing', 'jealousy', 'devotion', 'regret'],
        'dynamics': ['passionate', 'complicated', 'secretive', 'star-crossed', 'stable', 'turbulent'],
        'history_events': ['first meeting', 'courtship period', 'breakup/separation', 'reunion', 'betrayal discovery', 'commitment ceremony']
    },
    'friendship': {
        'bonds': ['childhood friends', 'war companions', 'chosen family', 'unlikely allies', 'social circle'],
        'emotions': ['loyalty', 'trust', 'concern', 'disappointment', 'joy', 'protective'],
        'dynamics': ['steadfast', 'conditional', 'growing', 'tested', 'casual', 'deep'],
        'history_events': ['shared adventure', 'rescue/saved', 'mutual support during crisis', 'betrayal and forgiveness', 'long separation', 'loyalty test']
    },
    'adversarial': {
        'bonds': ['enemies', 'rivals', 'opposites', 'grudge holders', 'ideological opponents'],
        'emotions': ['hatred', 'respect', 'fear', 'disdain', 'anger', 'grudging admiration'],
        'dynamics': ['hostile', 'competitive', 'wary', 'escalating', 'cold war', 'begrudging respect'],
        'history_events': ['initial conflict', 'major confrontation', 'betrayal', 'defeat/victory', 'temporary alliance', 'ongoing feud']
    }
}

# Emotional progression patterns
EMOTIONAL_ARCS = [
    'growing closer over time',
    'drifting apart due to circumstances',
    'recovering from past betrayal',
    'deepening mutual respect',
    'struggling with changing dynamics',
    'navigating new responsibilities',
    'healing old wounds',
    'facing external pressures together'
]

def find_npc_files():
    """Find all NPC files in the vault"""
    npc_files = []
    
    for root, dirs, files in os.walk(ROOT_DIR):
        # Skip certain directories
        if any(skip_dir in root for skip_dir in ['/.git', '/08_Archive', '/09_Performance', '/vault_backup']):
            continue
            
        for file in files:
            if file.endswith('.md'):
                filepath = os.path.join(root, file)
                try:
                    with open(filepath, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    # Check if file has type: NPC or similar
                    if re.search(r'^type:\s*(NPC|Person|Character)\s*$', content, re.MULTILINE | re.IGNORECASE):
                        npc_files.append(filepath)
                        
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
    
    return npc_files

def extract_relationships(content):
    """Extract existing relationships from NPC file"""
    relationships = []
    
    # Look for Relationships section
    rel_section = re.search(r'^##\s*Relationships?\s*$.*?(?=^##|\Z)', content, re.MULTILINE | re.DOTALL)
    if rel_section:
        section_content = rel_section.group(0)
        
        # Find wiki links and relationship descriptions
        wiki_links = re.findall(r'\[\[([^\]]+)\]\]', section_content)
        
        for link in wiki_links:
            # Extract relationship context around the link
            link_pattern = re.escape(f'[[{link}]]')
            context_match = re.search(f'.*{link_pattern}.*', section_content)
            if context_match:
                context = context_match.group(0).strip()
                relationships.append({
                    'target': link,
                    'context': context,
                    'original': True
                })
    
    return relationships

def generate_relationship_history(rel_type, target_name):
    """Generate emotional history for a relationship"""
    template = RELATIONSHIP_TYPES.get(rel_type, RELATIONSHIP_TYPES['professional'])
    
    # Select random elements
    bond = random.choice(template['bonds'])
    primary_emotion = random.choice(template['emotions'])
    secondary_emotion = random.choice(template['emotions'])
    dynamic = random.choice(template['dynamics'])
    key_event = random.choice(template['history_events'])
    arc = random.choice(EMOTIONAL_ARCS)
    
    # Generate timeline
    current_year = 2024  # Campaign current year
    relationship_start = random.randint(1, 15)  # Years ago relationship started
    key_event_year = random.randint(1, relationship_start)  # Key event timing
    
    history = {
        'bond_type': bond,
        'primary_emotion': primary_emotion,
        'secondary_emotion': secondary_emotion,
        'dynamic': dynamic,
        'key_event': key_event,
        'emotional_arc': arc,
        'timeline': {
            'relationship_start': f"{current_year - relationship_start} CE",
            'key_event': f"{current_year - key_event_year} CE",
            'current_status': f"{current_year} CE"
        }
    }
    
    return history

def categorize_relationship(context):
    """Determine relationship type from context"""
    context_lower = context.lower()
    
    # Family keywords
    if any(word in context_lower for word in ['family', 'father', 'mother', 'brother', 'sister', 'cousin', 'aunt', 'uncle', 'parent', 'child', 'spouse', 'wife', 'husband']):
        return 'family'
    
    # Romantic keywords
    if any(word in context_lower for word in ['lover', 'beloved', 'romantic', 'courtship', 'marriage', 'betrothed', 'paramour']):
        return 'romantic'
    
    # Adversarial keywords
    if any(word in context_lower for word in ['enemy', 'rival', 'opponent', 'adversary', 'foe', 'nemesis', 'conflict', 'oppose']):
        return 'adversarial'
    
    # Professional keywords
    if any(word in context_lower for word in ['colleague', 'superior', 'subordinate', 'mentor', 'student', 'partner', 'commander', 'lieutenant', 'guild', 'work']):
        return 'professional'
    
    # Default to friendship
    return 'friendship'

def enhance_relationship_section(content, relationships):
    """Add emotional depth to the relationships section"""
    enhanced_relationships = []
    
    for rel in relationships:
        rel_type = categorize_relationship(rel['context'])
        history = generate_relationship_history(rel_type, rel['target'])
        
        # Create enhanced description
        target_name = rel['target'].split('/')[-1]  # Get just the name from path
        
        enhanced_desc = f"**[[{rel['target']}]]** - {history['bond_type'].title()}\n"
        enhanced_desc += f"  - *Emotional Dynamic*: {history['dynamic'].title()} relationship characterized by {history['primary_emotion']} and {history['secondary_emotion']}\n"
        enhanced_desc += f"  - *Key History*: {history['key_event'].title()} in {history['timeline']['key_event']}, relationship {history['emotional_arc']}\n"
        enhanced_desc += f"  - *Current Status ({history['timeline']['current_status']})*: {rel['context'] if rel['original'] else 'Developing connection'}\n"
        
        enhanced_relationships.append(enhanced_desc)
    
    # Create enhanced section content
    if enhanced_relationships:
        section_content = "## Relationships\n\n"
        section_content += "### Personal Connections\n\n"
        section_content += "\n".join(enhanced_relationships)
        section_content += "\n\n### Relationship Timeline\n\n"
        section_content += "*Key relationship developments and emotional turning points that shaped current dynamics*\n\n"
        section_content += "- **Early Connections**: Formation of primary relationships and initial impressions\n"
        section_content += "- **Defining Moments**: Critical events that strengthened or strained bonds\n"
        section_content += "- **Recent Developments**: Current relationship status and ongoing dynamics\n"
        section_content += "- **Future Potential**: How relationships might evolve based on character actions\n"
        
        return section_content
    
    return ""

def enhance_npc_relationships(filepath):
    """Add relationship depth to an NPC file"""
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract existing relationships
        relationships = extract_relationships(content)
        
        if not relationships:
            print(f"No relationships found in {os.path.basename(filepath)}")
            return False
        
        # Check if already enhanced
        if 'Emotional Dynamic' in content:
            print(f"Relationships already enhanced in {os.path.basename(filepath)}")
            return False
        
        # Generate enhanced section
        enhanced_section = enhance_relationship_section(content, relationships)
        
        # Replace or add relationships section
        rel_pattern = r'^##\s*Relationships?\s*$.*?(?=^##|\Z)'
        if re.search(rel_pattern, content, re.MULTILINE | re.DOTALL):
            # Replace existing section
            new_content = re.sub(rel_pattern, enhanced_section, content, flags=re.MULTILINE | re.DOTALL)
        else:
            # Add new section before ## Adventure Hooks or at end
            if '## Adventure Hooks' in content:
                new_content = content.replace('## Adventure Hooks', f"{enhanced_section}\n\n## Adventure Hooks")
            else:
                # Add at end before final notes
                if '---' in content:
                    new_content = content.replace('---', f"{enhanced_section}\n\n---")
                else:
                    new_content = content + f"\n\n{enhanced_section}"
        
        # Write enhanced content
        if not DRY_RUN:
            # Create backup
            backup_path = filepath + '.backup'
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Write enhanced content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
        
        return True
        
    except Exception as e:
        print(f"Error enhancing relationships in {filepath}: {e}")
        return False

def create_relationship_matrix():
    """Create a relationship matrix showing all NPC connections"""
    
    npc_files = find_npc_files()
    matrix_data = {}
    
    print(f"Analyzing relationships across {len(npc_files)} NPCs...")
    
    for filepath in npc_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            npc_name = os.path.basename(filepath)[:-3]
            relationships = extract_relationships(content)
            
            if relationships:
                matrix_data[npc_name] = {
                    'file_path': filepath,
                    'connections': [rel['target'] for rel in relationships],
                    'relationship_count': len(relationships)
                }
                
        except Exception as e:
            print(f"Error analyzing {filepath}: {e}")
    
    return matrix_data

def main():
    print("=== Phase 3 Step 42: Relationship Depth Enhancement ===")
    print(f"Working directory: {ROOT_DIR}")
    print(f"Dry run mode: {DRY_RUN}")
    
    # Find NPC files
    print("\nFinding NPC files...")
    npc_files = find_npc_files()
    print(f"Found {len(npc_files)} NPC files")
    
    # Create relationship matrix
    print("\nCreating relationship matrix...")
    matrix = create_relationship_matrix()
    
    # Sort by relationship count (most connected first)
    sorted_npcs = sorted(matrix.items(), key=lambda x: x[1]['relationship_count'], reverse=True)
    
    print(f"\nTop 10 most connected NPCs:")
    for i, (npc_name, data) in enumerate(sorted_npcs[:10]):
        count = data['relationship_count']
        print(f"  {i+1:2d}. {npc_name} ({count} relationships)")
    
    # Enhance relationships for highly connected NPCs
    enhanced_count = 0
    target_count = min(15, len(sorted_npcs))  # Process up to 15 NPCs
    
    print(f"\nEnhancing relationships for top {target_count} connected NPCs...")
    
    for npc_name, data in sorted_npcs[:target_count]:
        if data['relationship_count'] >= 2:  # Only enhance NPCs with multiple relationships
            print(f"Processing {npc_name} ({data['relationship_count']} relationships)...")
            
            if enhance_npc_relationships(data['file_path']):
                enhanced_count += 1
    
    # Generate relationship network report
    network_data = {
        'total_npcs': len(npc_files),
        'npcs_with_relationships': len(matrix),
        'enhanced_count': enhanced_count,
        'relationship_matrix': matrix,
        'enhancement_timestamp': datetime.now().isoformat(),
        'dry_run': DRY_RUN
    }
    
    report_path = os.path.join(ROOT_DIR, 'reports', 'relationship_depth_report.json')
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(network_data, f, indent=2)
    
    # Create human-readable relationship matrix
    matrix_md_path = os.path.join(ROOT_DIR, 'reports', 'relationship_network.md')
    with open(matrix_md_path, 'w', encoding='utf-8') as f:
        f.write("# NPC Relationship Network\n\n")
        f.write(f"Generated: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}\n\n")
        f.write("## Highly Connected NPCs\n\n")
        
        for npc_name, data in sorted_npcs[:20]:
            f.write(f"### {npc_name} ({data['relationship_count']} connections)\n\n")
            for connection in data['connections']:
                clean_name = connection.split('/')[-1]
                f.write(f"- [[{connection}]]\n")
            f.write("\n")
    
    print(f"\n=== Enhancement Report ===")
    print(f"Total NPCs found: {len(npc_files)}")
    print(f"NPCs with relationships: {len(matrix)}")
    print(f"Relationships enhanced: {enhanced_count}")
    print(f"Report saved to: reports/relationship_depth_report.json")
    print(f"Network matrix saved to: reports/relationship_network.md")
    
    if DRY_RUN:
        print("\nDry run mode - no files were modified")
    else:
        print(f"\n{enhanced_count} NPC files enhanced with emotional relationship depth")

if __name__ == '__main__':
    main()