#!/usr/bin/env python3
"""
Content Type Standardization Script for Obsidian TTRPG Vault
Applies consistent content type classification according to the Vault Standardization Schema
"""

import os
import re
import yaml
from pathlib import Path
import argparse

# Define vault paths
VAULT_ROOT = Path(__file__).parent.parent
BACKUP_DIR = VAULT_ROOT / "08_Archive" / "content_type_standardization_backup"

# Standard content types according to schema
STANDARD_CONTENT_TYPES = {
    'adventure', 'npc', 'location', 'faction', 'lore', 'item', 'mechanics', 'template'
}

# Content type mappings to standardize variations
CONTENT_TYPE_MAPPINGS = {
    # Adventure variations
    'adventure-introduction': 'adventure',
    'epic finale adventure': 'adventure',
    'epic adventure introduction': 'adventure',
    'comprehensive analysis': 'adventure',
    'session': 'adventure',
    'campaign': 'adventure',
    'oneshot': 'adventure',
    'module': 'adventure',
    
    # NPC variations
    'person': 'npc',
    'people': 'npc',
    'character': 'npc',
    
    # Location variations
    'place': 'location',
    'places': 'location',
    'region': 'location',
    'city': 'location',
    'building': 'location',
    'landmark': 'location',
    
    # Faction variations
    'group': 'faction',
    'organization': 'faction',
    'guild': 'faction',
    'faction': 'faction',
    
    # Lore variations
    'note': 'lore',
    'documentation': 'lore',
    'guide': 'lore',
    'reference': 'lore',
    'index': 'lore',
    'report': 'lore',
    'meta': 'lore',
    'standards': 'lore',
    'master reference': 'lore',
    'professional_reference': 'lore',
    'cultural_reference': 'lore',
    'cultural guide': 'lore',
    'cultural_system': 'lore',
    'social guide': 'lore',
    'relationship guide': 'lore',
    'gm_resource': 'lore',
    'gm_tool': 'lore',
    'handout': 'lore',
    'session_packet': 'lore',
    'session_packet_template': 'template',
    
    # Item variations
    'items': 'item',
    'treasure_catalog': 'item',
    'equipment': 'item',
    'weapon': 'item',
    'armor': 'item',
    'treasure': 'item',
    
    # Mechanics variations
    'mechanic': 'mechanics',
    'rules': 'mechanics',
    'system': 'mechanics',
    'subsystem': 'mechanics',
    'character-option': 'mechanics',
    'transformation': 'mechanics',
    'hazard': 'mechanics',
    'resource': 'mechanics',
    
    # Template variations
    'templates': 'template',
}

def detect_content_type_from_path(file_path):
    """Detect content type from file path structure"""
    path_str = str(file_path).lower()
    
    # Check folder structure
    if '/01_adventures/' in path_str:
        return 'adventure'
    elif '/02_worldbuilding/people/' in path_str:
        return 'npc'
    elif '/02_worldbuilding/places/' in path_str:
        return 'location'
    elif '/02_worldbuilding/groups/' in path_str:
        return 'faction'
    elif '/02_worldbuilding/lore/' in path_str:
        return 'lore'
    elif '/02_worldbuilding/items/' in path_str:
        return 'item'
    elif '/02_worldbuilding/quests/' in path_str:
        return 'adventure'
    elif '/03_mechanics/' in path_str:
        return 'mechanics'
    elif '/05_templates/' in path_str:
        return 'template'
    elif '/06_gm_resources/' in path_str:
        return 'lore'
    elif '/07_player_resources/' in path_str:
        return 'lore'
    elif '/1-session journals/' in path_str:
        return 'adventure'
    elif '/09_performance/' in path_str:
        return 'lore'
    
    return None

def detect_content_type_from_tags(tags):
    """Detect content type from tags"""
    if not tags:
        return None
    
    tag_list = []
    if isinstance(tags, list):
        tag_list = [str(tag).lower() for tag in tags]
    elif isinstance(tags, str):
        tag_list = [tags.lower()]
    
    # Look for direct content type matches
    for tag in tag_list:
        if tag in STANDARD_CONTENT_TYPES:
            return tag
        if tag in CONTENT_TYPE_MAPPINGS:
            return CONTENT_TYPE_MAPPINGS[tag]
    
    return None

def standardize_content_type(type_value):
    """Standardize a content type value"""
    if not type_value:
        return None
    
    type_str = str(type_value).lower().strip()
    
    # Check if already standard
    if type_str in STANDARD_CONTENT_TYPES:
        return type_str
    
    # Check mappings
    if type_str in CONTENT_TYPE_MAPPINGS:
        return CONTENT_TYPE_MAPPINGS[type_str]
    
    # Handle compound types
    for mapping_key, mapping_value in CONTENT_TYPE_MAPPINGS.items():
        if mapping_key in type_str or type_str in mapping_key:
            return mapping_value
    
    return None

def standardize_frontmatter_content_type(content, file_path):
    """Standardize content type in YAML frontmatter"""
    if not content.startswith('---'):
        return content
    
    try:
        # Split frontmatter from content
        parts = content.split('---', 2)
        if len(parts) < 3:
            return content
        
        frontmatter_str = parts[1]
        body = parts[2]
        
        # Parse YAML
        frontmatter = yaml.safe_load(frontmatter_str)
        if not frontmatter:
            return content
        
        # Determine content type
        current_type = frontmatter.get('type')
        detected_type = None
        
        # Try to standardize existing type
        if current_type:
            detected_type = standardize_content_type(current_type)
        
        # If no valid type, detect from path
        if not detected_type:
            detected_type = detect_content_type_from_path(file_path)
        
        # If still no type, detect from tags
        if not detected_type:
            detected_type = detect_content_type_from_tags(frontmatter.get('tags'))
        
        # Default fallback
        if not detected_type:
            detected_type = 'lore'
        
        # Update type field
        frontmatter['type'] = detected_type.title()
        
        # Ensure proper field ordering
        ordered_frontmatter = {}
        
        # Core fields first
        for key in ['title', 'type', 'status']:
            if key in frontmatter:
                ordered_frontmatter[key] = frontmatter[key]
        
        # Add remaining fields
        for key, value in frontmatter.items():
            if key not in ordered_frontmatter:
                ordered_frontmatter[key] = value
        
        # Reconstruct content
        new_frontmatter = yaml.dump(ordered_frontmatter, default_flow_style=False, sort_keys=False)
        return f"---\n{new_frontmatter}---{body}"
        
    except yaml.YAMLError as e:
        print(f"YAML parsing error in {file_path}: {e}")
        return content

def process_file(file_path):
    """Process a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Standardize content type in frontmatter
        new_content = standardize_frontmatter_content_type(content, file_path)
        
        # Only write if content changed
        if new_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            return True
        
        return False
        
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return False

def create_backup():
    """Create backup before making changes"""
    from datetime import datetime
    backup_dir = BACKUP_DIR / datetime.now().strftime("%Y%m%d_%H%M%S")
    backup_dir.mkdir(parents=True, exist_ok=True)
    
    # Copy all markdown files to backup
    for file_path in VAULT_ROOT.rglob("*.md"):
        if "08_Archive" in str(file_path):
            continue
        
        relative_path = file_path.relative_to(VAULT_ROOT)
        backup_file = backup_dir / relative_path
        backup_file.parent.mkdir(parents=True, exist_ok=True)
        
        with open(file_path, 'r', encoding='utf-8') as src:
            with open(backup_file, 'w', encoding='utf-8') as dst:
                dst.write(src.read())
    
    print(f"Backup created at: {backup_dir}")
    return backup_dir

def analyze_current_content_types():
    """Analyze current content types in the vault"""
    type_counts = {}
    path_type_mapping = {}
    
    for file_path in VAULT_ROOT.rglob("*.md"):
        if "08_Archive" in str(file_path):
            continue
        
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if not content.startswith('---'):
                continue
            
            parts = content.split('---', 2)
            if len(parts) < 3:
                continue
            
            frontmatter = yaml.safe_load(parts[1])
            if not frontmatter:
                continue
            
            current_type = frontmatter.get('type', 'missing')
            type_counts[current_type] = type_counts.get(current_type, 0) + 1
            
            # Track path-based distribution
            folder = str(file_path.parent.relative_to(VAULT_ROOT))
            if folder not in path_type_mapping:
                path_type_mapping[folder] = {}
            path_type_mapping[folder][current_type] = path_type_mapping[folder].get(current_type, 0) + 1
        
        except Exception as e:
            continue
    
    return type_counts, path_type_mapping

def main():
    parser = argparse.ArgumentParser(description='Standardize content types across vault')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be changed without making changes')
    parser.add_argument('--no-backup', action='store_true', help='Skip backup creation')
    parser.add_argument('--analyze', action='store_true', help='Analyze current content types without making changes')
    args = parser.parse_args()
    
    if args.analyze:
        print("Analyzing current content types in vault...")
        type_counts, path_type_mapping = analyze_current_content_types()
        
        print("\nOverall Content Type Distribution:")
        for content_type, count in sorted(type_counts.items(), key=lambda x: x[1], reverse=True):
            print(f"  {content_type}: {count}")
        
        print("\nContent Types by Folder:")
        for folder, types in sorted(path_type_mapping.items()):
            print(f"\n{folder}:")
            for content_type, count in sorted(types.items(), key=lambda x: x[1], reverse=True):
                print(f"  {content_type}: {count}")
        
        return
    
    if not args.no_backup and not args.dry_run:
        create_backup()
    
    changed_files = []
    total_files = 0
    
    # Process all markdown files
    for file_path in VAULT_ROOT.rglob("*.md"):
        # Skip archive directory
        if "08_Archive" in str(file_path):
            continue
        
        total_files += 1
        
        if args.dry_run:
            # Just check what would change
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            new_content = standardize_frontmatter_content_type(content, file_path)
            if new_content != content:
                changed_files.append(file_path)
                print(f"Would change: {file_path}")
        else:
            # Actually process the file
            if process_file(file_path):
                changed_files.append(file_path)
                print(f"Updated: {file_path}")
    
    print(f"\nProcessed {total_files} files")
    print(f"{'Would change' if args.dry_run else 'Changed'}: {len(changed_files)} files")
    
    if args.dry_run:
        print("\nRun without --dry-run to apply changes")

if __name__ == "__main__":
    main()