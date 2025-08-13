#!/usr/bin/env python3
"""
Phase 3 Step 41: Stub File Completion Tool
Identifies high-traffic stubs and provides minimum viable content templates
"""

import os
import re
import json
import sys
from collections import defaultdict
from pathlib import Path

ROOT_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DRY_RUN = os.environ.get('DRY_RUN', '0') == '1'

# Content templates for different entity types
TEMPLATES = {
    'NPC': {
        'sections': ['Overview', 'Appearance', 'Personality', 'Background', 'Current Role', 'Relationships', 'Goals & Motivations', 'Adventure Hooks'],
        'overview_template': 'A {role} operating within {world}, {name} serves as {function} with connections to {faction_type}.',
        'hooks_template': [
            'Information broker: {name} possesses crucial knowledge about local events',
            'Quest giver: Needs assistance with personal or professional matters',
            'Social connection: Can introduce characters to other important figures',
            'Obstacle: May oppose party goals depending on circumstances'
        ]
    },
    'Location': {
        'sections': ['Overview', 'History', 'Geography', 'Notable Features', 'Inhabitants', 'Politics & Governance', 'Economy & Trade', 'Culture & Daily Life', 'Threats & Dangers', 'Adventure Hooks'],
        'overview_template': 'A {location_type} in {world}, {name} is characterized by {primary_feature} and serves as {function}.',
        'hooks_template': [
            'Investigation: Mysterious events require character attention',
            'Social intrigue: Political tensions provide roleplay opportunities',
            'Resource acquisition: Characters may need local goods or services',
            'Safe haven: Could serve as rest point or base of operations'
        ]
    },
    'Faction': {
        'sections': ['Overview', 'History', 'Structure & Organization', 'Goals & Motivations', 'Resources & Assets', 'Relationships', 'Current Operations', 'Weaknesses', 'Adventure Hooks'],
        'overview_template': 'A {faction_type} operating in {world}, {name} pursues {primary_goal} through {methods}.',
        'hooks_template': [
            'Employment: Faction needs external agents for sensitive operations',
            'Opposition: Party goals conflict with faction interests',
            'Alliance opportunity: Mutual benefits possible through cooperation',
            'Internal conflict: Faction schism creates opportunities and dangers'
        ]
    },
    'Item': {
        'sections': ['Overview', 'Description', 'Properties', 'History', 'Current Location', 'Significance', 'Adventure Hooks'],
        'overview_template': 'A {item_type} of {significance}, {name} is notable for {primary_property}.',
        'hooks_template': [
            'Quest objective: Item is needed for important purpose',
            'Plot device: Reveals crucial information or opens new paths',
            'Reward: Valuable compensation for character actions',
            'Curse/Burden: Item creates complications for possessor'
        ]
    }
}

def find_stub_files():
    """Find all files marked as status: stub"""
    stub_files = []
    
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
                    
                    # Check if file has status: stub
                    if re.search(r'^status:\s*stub\s*$', content, re.MULTILINE):
                        stub_files.append(filepath)
                        
                except Exception as e:
                    print(f"Error reading {filepath}: {e}")
    
    return stub_files

def analyze_link_references(stub_files):
    """Count how many times each stub is referenced by other files"""
    reference_counts = defaultdict(int)
    
    # Get all markdown files
    all_files = []
    for root, dirs, files in os.walk(ROOT_DIR):
        if any(skip_dir in root for skip_dir in ['/.git', '/08_Archive', '/09_Performance', '/vault_backup']):
            continue
        for file in files:
            if file.endswith('.md'):
                all_files.append(os.path.join(root, file))
    
    print(f"Analyzing link references in {len(all_files)} files...")
    
    for filepath in all_files:
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find all wiki links [[...]]
            wiki_links = re.findall(r'\[\[([^\]]+)\]\]', content)
            
            for link in wiki_links:
                # Clean up link (remove aliases, paths, etc.)
                clean_link = link.split('|')[0].strip()
                
                # Check if this link points to any of our stub files
                for stub_file in stub_files:
                    stub_name = os.path.basename(stub_file)[:-3]  # Remove .md
                    if clean_link.endswith(stub_name) or stub_name in clean_link:
                        reference_counts[stub_file] += 1
                        
        except Exception as e:
            print(f"Error analyzing {filepath}: {e}")
    
    return reference_counts

def extract_metadata(filepath):
    """Extract metadata from file frontmatter"""
    metadata = {}
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Extract frontmatter
        fm_match = re.match(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
        if fm_match:
            fm_content = fm_match.group(1)
            
            # Extract key fields
            for line in fm_content.split('\n'):
                if ':' in line:
                    key, value = line.split(':', 1)
                    key = key.strip()
                    value = value.strip().strip('\'"')
                    
                    if key in ['type', 'world', 'faction_type', 'tags']:
                        if key == 'tags':
                            # Handle tag arrays
                            if value.startswith('['):
                                # Remove brackets and split
                                value = value.strip('[]').split(',')
                                value = [tag.strip().strip('\'"') for tag in value]
                        metadata[key] = value
        
        # Extract title from filename
        metadata['name'] = os.path.basename(filepath)[:-3]
        
    except Exception as e:
        print(f"Error extracting metadata from {filepath}: {e}")
    
    return metadata

def generate_content_template(metadata):
    """Generate appropriate content template based on metadata"""
    entity_type = metadata.get('type', '').strip()
    
    if entity_type not in TEMPLATES:
        # Default template for unknown types
        return {
            'sections': ['Overview', 'Details', 'Significance', 'Adventure Hooks'],
            'content': f"## Overview\n\n{metadata.get('name', 'This entity')} is a significant element within the world of {metadata.get('world', 'the setting')}.\n\n## Details\n\n*[Expand with specific details about appearance, function, or characteristics]*\n\n## Significance\n\n*[Describe why this entity matters to the world and story]*\n\n## Adventure Hooks\n\n1. *[Hook involving direct interaction]*\n2. *[Hook involving indirect influence]*\n3. *[Hook involving conflict or problem]*"
        }
    
    template = TEMPLATES[entity_type]
    content_parts = []
    
    # Generate overview
    overview_template = template['overview_template']
    overview = overview_template.format(
        name=metadata.get('name', 'This entity'),
        world=metadata.get('world', 'the realm'),
        role=metadata.get('faction_type', 'entity').lower(),
        function='an important role',
        faction_type=metadata.get('faction_type', 'organization').lower(),
        location_type='location',
        primary_feature='distinctive characteristics',
        primary_goal='their objectives',
        methods='various means',
        item_type='artifact',
        significance='importance',
        primary_property='unique qualities'
    )
    
    content_parts.append(f"## Overview\n\n{overview}\n")
    
    # Add placeholder sections
    for section in template['sections'][1:]:  # Skip Overview since we just added it
        if section == 'Adventure Hooks':
            content_parts.append(f"## {section}\n")
            for i, hook in enumerate(template['hooks_template'], 1):
                formatted_hook = hook.format(name=metadata.get('name', 'This entity'))
                content_parts.append(f"{i}. {formatted_hook}")
            content_parts.append("")
        else:
            content_parts.append(f"## {section}\n\n*[Content needed - expand with relevant details for {section.lower()}]*\n")
    
    return {
        'sections': template['sections'],
        'content': '\n'.join(content_parts)
    }

def enhance_stub_file(filepath, reference_count):
    """Add minimum viable content to a stub file"""
    
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            original_content = f.read()
        
        # Extract metadata
        metadata = extract_metadata(filepath)
        
        # Generate template content
        template_data = generate_content_template(metadata)
        
        # Parse existing file structure
        fm_match = re.match(r'^(---\s*\n.*?\n---\s*\n)', original_content, re.DOTALL)
        if fm_match:
            frontmatter = fm_match.group(1)
            body = original_content[fm_match.end():]
        else:
            frontmatter = ""
            body = original_content
        
        # Check if file already has substantial content
        word_count = len(re.findall(r'\b\w+\b', body))
        if word_count > 100:  # Skip files with substantial content
            print(f"Skipping {os.path.basename(filepath)} - already has {word_count} words")
            return False
        
        # Update frontmatter to change status from stub to draft
        updated_fm = re.sub(r'^status:\s*stub\s*$', 'status: draft', frontmatter, flags=re.MULTILINE)
        
        # Add reference count if significant
        if reference_count > 3:
            updated_fm = updated_fm.replace('---\n', f'reference_count: {reference_count}\n---\n')
        
        # Create enhanced content
        title = metadata.get('name', os.path.basename(filepath)[:-3])
        
        enhanced_content = f"{updated_fm}\n# {title}\n\n{template_data['content']}\n\n## Connected Elements\n\n*[Add connections to related NPCs, locations, factions, or items]*\n\n---\n\n*Enhanced from stub with minimum viable content. Expand sections as needed for campaign use.*"
        
        # Write enhanced file
        if not DRY_RUN:
            # Create backup
            backup_path = filepath + '.backup'
            with open(backup_path, 'w', encoding='utf-8') as f:
                f.write(original_content)
            
            # Write enhanced content
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(enhanced_content)
        
        return True
        
    except Exception as e:
        print(f"Error enhancing {filepath}: {e}")
        return False

def main():
    print("=== Phase 3 Step 41: Stub File Completion ===")
    print(f"Working directory: {ROOT_DIR}")
    print(f"Dry run mode: {DRY_RUN}")
    
    # Find all stub files
    print("\nFinding stub files...")
    stub_files = find_stub_files()
    print(f"Found {len(stub_files)} stub files")
    
    # Analyze reference counts
    print("\nAnalyzing link references...")
    reference_counts = analyze_link_references(stub_files)
    
    # Sort by reference count (high-traffic first)
    sorted_stubs = sorted(stub_files, key=lambda f: reference_counts[f], reverse=True)
    
    print(f"\nTop 20 most referenced stubs:")
    for i, stub_file in enumerate(sorted_stubs[:20]):
        count = reference_counts[stub_file]
        name = os.path.basename(stub_file)[:-3]
        print(f"  {i+1:2d}. {name} ({count} references)")
    
    # Process high-traffic stubs first
    processed = 0
    high_traffic_threshold = 2
    
    print(f"\nEnhancing stubs with {high_traffic_threshold}+ references...")
    
    for stub_file in sorted_stubs:
        ref_count = reference_counts[stub_file]
        if ref_count >= high_traffic_threshold:
            print(f"Processing {os.path.basename(stub_file)} ({ref_count} refs)...")
            
            if enhance_stub_file(stub_file, ref_count):
                processed += 1
                
            # Limit processing in single run
            if processed >= 20:
                print("Reached processing limit for this run")
                break
    
    # Generate report
    report_data = {
        'total_stubs_found': len(stub_files),
        'stubs_processed': processed,
        'high_traffic_threshold': high_traffic_threshold,
        'reference_counts': {os.path.basename(f)[:-3]: count for f, count in reference_counts.items()},
        'dry_run': DRY_RUN
    }
    
    report_path = os.path.join(ROOT_DIR, 'reports', 'stub_completion_report.json')
    os.makedirs(os.path.dirname(report_path), exist_ok=True)
    
    with open(report_path, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, indent=2)
    
    print(f"\n=== Completion Report ===")
    print(f"Total stubs found: {len(stub_files)}")
    print(f"High-traffic stubs processed: {processed}")
    print(f"Report saved to: reports/stub_completion_report.json")
    
    if DRY_RUN:
        print("\nDry run mode - no files were modified")
    else:
        print(f"\n{processed} stub files enhanced with minimum viable content")

if __name__ == '__main__':
    main()