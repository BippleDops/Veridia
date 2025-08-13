#!/usr/bin/env python3
"""
Status Field Standardization Script for Obsidian TTRPG Vault
Implements consistent status values across all content according to the Vault Standardization Schema
"""

import os
import re
import yaml
from pathlib import Path
import argparse

# Define vault paths
VAULT_ROOT = Path(__file__).parent.parent
BACKUP_DIR = VAULT_ROOT / "08_Archive" / "status_standardization_backup"

# Standard status values according to schema
UNIVERSAL_STATUS_VALUES = {
    'draft', 'in-progress', 'review', 'complete', 'published', 
    'archived', 'deprecated', 'stub'
}

# Content-specific status mappings
CONTENT_SPECIFIC_STATUS = {
    'adventure': {'outlined', 'written', 'playtested', 'polished'},
    'npc': {'concept', 'detailed', 'in-play', 'retired'},
    'location': {'mapped', 'described', 'populated', 'active'},
    'mechanics': {'concept', 'drafted', 'tested', 'balanced'}
}

# Status value mappings to standardize variations
STATUS_MAPPINGS = {
    # Universal variations
    'active': 'complete',
    'finished': 'complete',
    'done': 'complete',
    'ready': 'complete',
    'todo': 'draft',
    'wip': 'in-progress',
    'work-in-progress': 'in-progress',
    'needs-review': 'review',
    'reviewed': 'complete',
    'final': 'complete',
    'old': 'archived',
    'inactive': 'archived',
    'unused': 'archived',
    'placeholder': 'stub',
    'template': 'stub',
    'outline': 'stub',
    
    # Adventure-specific variations
    'planned': 'outlined',
    'scripted': 'written',
    'tested': 'playtested',
    'finalized': 'polished',
    
    # NPC-specific variations
    'idea': 'concept',
    'stats': 'detailed',
    'playing': 'in-play',
    'dead': 'retired',
    
    # Location-specific variations
    'sketched': 'mapped',
    'written': 'described',
    'inhabited': 'populated',
    'current': 'active',
    
    # Mechanics-specific variations
    'theory': 'concept',
    'written': 'drafted',
    'playtested': 'tested',
    'approved': 'balanced'
}

def detect_content_type(frontmatter):
    """Detect content type from frontmatter"""
    if 'type' in frontmatter:
        content_type = str(frontmatter['type']).lower()
        return content_type
    
    # Try to infer from tags
    if 'tags' in frontmatter:
        tags = frontmatter['tags']
        if isinstance(tags, list):
            for tag in tags:
                tag = str(tag).lower()
                if tag in ['adventure', 'npc', 'location', 'mechanics']:
                    return tag
    
    return None

def standardize_status_value(status_value, content_type=None):
    """Standardize a status value according to schema"""
    if not status_value:
        return 'draft'  # Default status
    
    status_str = str(status_value).lower().strip()
    
    # Check direct mappings first
    if status_str in STATUS_MAPPINGS:
        mapped_status = STATUS_MAPPINGS[status_str]
        
        # Verify content-specific status is appropriate
        if content_type and content_type in CONTENT_SPECIFIC_STATUS:
            if mapped_status in CONTENT_SPECIFIC_STATUS[content_type]:
                return mapped_status
            # If mapped status is not content-specific, check if it's universal
            elif mapped_status in UNIVERSAL_STATUS_VALUES:
                return mapped_status
        else:
            return mapped_status
    
    # Check if it's already a valid status
    if status_str in UNIVERSAL_STATUS_VALUES:
        return status_str
    
    if content_type and content_type in CONTENT_SPECIFIC_STATUS:
        if status_str in CONTENT_SPECIFIC_STATUS[content_type]:
            return status_str
    
    # Try partial matching for complex status strings
    for mapping_key, mapping_value in STATUS_MAPPINGS.items():
        if mapping_key in status_str or status_str in mapping_key:
            return mapping_value
    
    # Default fallback
    return 'draft'

def standardize_frontmatter_status(content):
    """Standardize status field in YAML frontmatter"""
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
        
        # Detect content type
        content_type = detect_content_type(frontmatter)
        
        # Standardize status field
        if 'status' in frontmatter:
            old_status = frontmatter['status']
            new_status = standardize_status_value(old_status, content_type)
            frontmatter['status'] = new_status
        else:
            # Add default status if missing
            frontmatter['status'] = 'draft'
        
        # Ensure status is positioned appropriately in frontmatter
        if 'title' in frontmatter:
            # Reorder fields with status near the top
            ordered_frontmatter = {}
            
            # Core fields first
            for key in ['title', 'type', 'status']:
                if key in frontmatter:
                    ordered_frontmatter[key] = frontmatter[key]
            
            # Add remaining fields
            for key, value in frontmatter.items():
                if key not in ordered_frontmatter:
                    ordered_frontmatter[key] = value
            
            frontmatter = ordered_frontmatter
        
        # Reconstruct content
        new_frontmatter = yaml.dump(frontmatter, default_flow_style=False, sort_keys=False)
        return f"---\n{new_frontmatter}---{body}"
        
    except yaml.YAMLError as e:
        print(f"YAML parsing error: {e}")
        return content

def process_file(file_path):
    """Process a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Standardize status in frontmatter
        new_content = standardize_frontmatter_status(content)
        
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

def analyze_current_status_values():
    """Analyze current status values in the vault"""
    status_counts = {}
    content_type_status = {}
    
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
            
            content_type = detect_content_type(frontmatter)
            status = frontmatter.get('status', 'missing')
            
            # Count overall status values
            status_counts[status] = status_counts.get(status, 0) + 1
            
            # Track by content type
            if content_type:
                if content_type not in content_type_status:
                    content_type_status[content_type] = {}
                content_type_status[content_type][status] = content_type_status[content_type].get(status, 0) + 1
        
        except Exception as e:
            continue
    
    return status_counts, content_type_status

def main():
    parser = argparse.ArgumentParser(description='Standardize status fields across vault')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be changed without making changes')
    parser.add_argument('--no-backup', action='store_true', help='Skip backup creation')
    parser.add_argument('--analyze', action='store_true', help='Analyze current status values without making changes')
    args = parser.parse_args()
    
    if args.analyze:
        print("Analyzing current status values in vault...")
        status_counts, content_type_status = analyze_current_status_values()
        
        print("\nOverall Status Distribution:")
        for status, count in sorted(status_counts.items(), key=lambda x: x[1], reverse=True):
            print(f"  {status}: {count}")
        
        print("\nStatus by Content Type:")
        for content_type, statuses in content_type_status.items():
            print(f"\n{content_type.title()}:")
            for status, count in sorted(statuses.items(), key=lambda x: x[1], reverse=True):
                print(f"  {status}: {count}")
        
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
            new_content = standardize_frontmatter_status(content)
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