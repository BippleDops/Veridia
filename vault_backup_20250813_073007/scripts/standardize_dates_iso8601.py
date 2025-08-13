#!/usr/bin/env python3
"""
ISO 8601 Date Standardization Script for Obsidian TTRPG Vault
Converts all date formats to ISO 8601 standard (YYYY-MM-DD for dates, YYYY-MM-DDTHH:MM:SS.ssssss+00:00 for timestamps)
"""

import os
import re
import yaml
from datetime import datetime, timezone
from pathlib import Path
import argparse

# Define vault paths
VAULT_ROOT = Path(__file__).parent.parent
BACKUP_DIR = VAULT_ROOT / "08_Archive" / "date_standardization_backup"

# Date format patterns to recognize and convert
DATE_PATTERNS = [
    # Existing formats found in vault
    r'(\d{4}-\d{2}-\d{2})',  # Already ISO format
    r'(\d{1,2}/\d{1,2}/\d{4})',  # US format MM/DD/YYYY
    r'(\d{1,2}-\d{1,2}-\d{4})',  # US format MM-DD-YYYY
    r'(\d{4}/\d{1,2}/\d{1,2})',  # ISO-like format YYYY/MM/DD
    r'(\d{1,2}\.\d{1,2}\.\d{4})',  # European format DD.MM.YYYY
    r'(\d{1,2} \w+ \d{4})',  # Long format "15 August 2024"
    r'(\w+ \d{1,2}, \d{4})',  # Long format "August 15, 2024"
]

# Timestamp patterns
TIMESTAMP_PATTERNS = [
    r'(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}\+00:00)',  # Already correct
    r'(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2})',  # Missing timezone
    r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2})',  # Space instead of T
    r'(\d{1,2}/\d{1,2}/\d{4} \d{1,2}:\d{2})',  # US datetime
]

def parse_date_string(date_str):
    """Parse various date formats and return ISO 8601 date"""
    date_str = str(date_str).strip().strip("'\"")
    
    # If already ISO format, return as-is
    if re.match(r'^\d{4}-\d{2}-\d{2}$', date_str):
        return date_str
    
    # Parse various formats
    try:
        # Try MM/DD/YYYY
        if re.match(r'^\d{1,2}/\d{1,2}/\d{4}$', date_str):
            return datetime.strptime(date_str, '%m/%d/%Y').strftime('%Y-%m-%d')
        
        # Try MM-DD-YYYY
        if re.match(r'^\d{1,2}-\d{1,2}-\d{4}$', date_str):
            return datetime.strptime(date_str, '%m-%d-%Y').strftime('%Y-%m-%d')
        
        # Try YYYY/MM/DD
        if re.match(r'^\d{4}/\d{1,2}/\d{1,2}$', date_str):
            return datetime.strptime(date_str, '%Y/%m/%d').strftime('%Y-%m-%d')
        
        # Try DD.MM.YYYY
        if re.match(r'^\d{1,2}\.\d{1,2}\.\d{4}$', date_str):
            return datetime.strptime(date_str, '%d.%m.%Y').strftime('%Y-%m-%d')
        
        # Try long formats
        if re.match(r'^\d{1,2} \w+ \d{4}$', date_str):
            return datetime.strptime(date_str, '%d %B %Y').strftime('%Y-%m-%d')
        
        if re.match(r'^\w+ \d{1,2}, \d{4}$', date_str):
            return datetime.strptime(date_str, '%B %d, %Y').strftime('%Y-%m-%d')
        
    except ValueError:
        pass
    
    return date_str  # Return original if can't parse

def parse_timestamp_string(timestamp_str):
    """Parse various timestamp formats and return ISO 8601 timestamp"""
    timestamp_str = str(timestamp_str).strip().strip("'\"")
    
    # If already correct ISO format, return as-is
    if re.match(r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{6}\+00:00$', timestamp_str):
        return timestamp_str
    
    try:
        # Parse various formats and convert to ISO 8601
        if re.match(r'^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$', timestamp_str):
            dt = datetime.fromisoformat(timestamp_str)
            return dt.replace(tzinfo=timezone.utc).isoformat()
        
        if re.match(r'^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$', timestamp_str):
            dt = datetime.strptime(timestamp_str, '%Y-%m-%d %H:%M:%S')
            return dt.replace(tzinfo=timezone.utc).isoformat()
        
        if re.match(r'^\d{1,2}/\d{1,2}/\d{4} \d{1,2}:\d{2}$', timestamp_str):
            dt = datetime.strptime(timestamp_str, '%m/%d/%Y %H:%M')
            return dt.replace(tzinfo=timezone.utc).isoformat()
        
    except ValueError:
        pass
    
    return timestamp_str  # Return original if can't parse

def standardize_frontmatter_dates(content):
    """Standardize dates in YAML frontmatter"""
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
        
        # Standardize date fields
        date_fields = ['created', 'updated', 'date', 'publish_date', 'last_modified']
        timestamp_fields = ['updated', 'last_modified', 'published_at']
        
        for field in date_fields:
            if field in frontmatter and frontmatter[field]:
                if field in timestamp_fields:
                    frontmatter[field] = parse_timestamp_string(frontmatter[field])
                else:
                    frontmatter[field] = parse_date_string(frontmatter[field])
        
        # Handle special timestamp field with microseconds
        if 'updated' in frontmatter and frontmatter['updated']:
            # If it's just a date, convert to full timestamp
            updated_val = str(frontmatter['updated'])
            if re.match(r'^\d{4}-\d{2}-\d{2}$', updated_val):
                dt = datetime.strptime(updated_val, '%Y-%m-%d')
                frontmatter['updated'] = dt.replace(tzinfo=timezone.utc).isoformat()
            else:
                frontmatter['updated'] = parse_timestamp_string(updated_val)
        
        # Reconstruct content
        new_frontmatter = yaml.dump(frontmatter, default_flow_style=False, sort_keys=False)
        return f"---\n{new_frontmatter}---{body}"
        
    except yaml.YAMLError:
        return content

def process_file(file_path):
    """Process a single markdown file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Standardize frontmatter dates
        new_content = standardize_frontmatter_dates(content)
        
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

def main():
    parser = argparse.ArgumentParser(description='Standardize dates to ISO 8601 format')
    parser.add_argument('--dry-run', action='store_true', help='Show what would be changed without making changes')
    parser.add_argument('--no-backup', action='store_true', help='Skip backup creation')
    args = parser.parse_args()
    
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
            new_content = standardize_frontmatter_dates(content)
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
    
    if changed_files:
        print("\nChanged files:")
        for file_path in changed_files:
            print(f"  {file_path}")

if __name__ == "__main__":
    main()