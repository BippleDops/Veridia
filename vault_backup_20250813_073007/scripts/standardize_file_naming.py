#!/usr/bin/env python3
"""
File Naming Standardization Script for Vault Standardization
Applies consistent naming standards across all markdown files
"""

import os
import re
import shutil
from pathlib import Path
from datetime import datetime
import json
import yaml

def backup_file(file_path, backup_dir):
    """Create backup of file before renaming"""
    relative_path = os.path.relpath(file_path, os.path.dirname(backup_dir))
    backup_path = os.path.join(backup_dir, relative_path)
    os.makedirs(os.path.dirname(backup_path), exist_ok=True)
    shutil.copy2(file_path, backup_path)

def clean_filename(filename):
    """Clean and standardize a filename"""
    # Remove .md extension for processing
    name = filename[:-3] if filename.endswith('.md') else filename
    
    # Replace underscores with spaces (normalize separators)
    name = name.replace('_', ' ')
    
    # Replace multiple hyphens with single hyphens
    name = re.sub(r'-+', '-', name)
    
    # Replace hyphens with spaces except in specific contexts
    # Keep hyphens in compound words and between numbers
    name = re.sub(r'(?<![A-Z])-(?![A-Z])', ' ', name)
    name = re.sub(r'(?<!\d)-(?!\d)', ' ', name)
    
    # Clean up multiple spaces
    name = re.sub(r'\s+', ' ', name)
    
    # Remove special characters except safe ones
    name = re.sub(r'[^a-zA-Z0-9\s\-\'&]', '', name)
    
    # Convert to Title Case
    name = title_case_smart(name)
    
    # Clean up again after title casing
    name = name.strip()
    
    # Limit length while preserving important words
    if len(name) > 45:
        name = truncate_smart(name, 45)
    
    return name + '.md'

def title_case_smart(text):
    """Apply smart title case that handles special words correctly"""
    # Words that should remain lowercase in titles
    lowercase_words = {
        'a', 'an', 'and', 'as', 'at', 'but', 'by', 'for', 'if', 'in', 'nor', 
        'of', 'on', 'or', 'so', 'the', 'to', 'up', 'yet', 'vs', 'via'
    }
    
    # Split into words
    words = text.split()
    result = []
    
    for i, word in enumerate(words):
        # Always capitalize first and last word
        if i == 0 or i == len(words) - 1:
            result.append(word.capitalize())
        # Keep lowercase articles/prepositions in middle
        elif word.lower() in lowercase_words:
            result.append(word.lower())
        # Handle special cases
        elif word.upper() in ['NPC', 'PC', 'DM', 'GM', 'HP', 'AC', 'CR']:
            result.append(word.upper())
        # Roman numerals
        elif re.match(r'^[IVX]+$', word.upper()):
            result.append(word.upper())
        else:
            result.append(word.capitalize())
    
    return ' '.join(result)

def truncate_smart(text, max_length):
    """Intelligently truncate filename while preserving meaning"""
    if len(text) <= max_length:
        return text
    
    # Try to truncate at word boundaries
    words = text.split()
    result = []
    length = 0
    
    for word in words:
        if length + len(word) + 1 > max_length:
            break
        result.append(word)
        length += len(word) + 1
    
    # If we got at least 2 words, use that
    if len(result) >= 2:
        return ' '.join(result)
    
    # Otherwise, truncate at character boundary
    return text[:max_length].rstrip()

def should_rename_file(current_name, content_type=None):
    """Determine if a file should be renamed based on current standards"""
    # Remove .md extension
    name = current_name[:-3] if current_name.endswith('.md') else current_name
    
    # Check for problems that require renaming
    problems = []
    
    # Length issues
    if len(name) < 5:
        problems.append("too_short")
    elif len(name) > 50:
        problems.append("too_long")
    
    # Separator issues
    if '_' in name:
        problems.append("underscores")
    
    # Multiple consecutive hyphens or spaces
    if '--' in name or '  ' in name:
        problems.append("multiple_separators")
    
    # Special characters
    if re.search(r'[^a-zA-Z0-9\s\-\'&]', name):
        problems.append("special_characters")
    
    # Case issues (not proper title case)
    if name.isupper() or name.islower():
        problems.append("case_issues")
    
    # Numbers at start (usually not good)
    if re.match(r'^\d', name):
        problems.append("starts_with_number")
    
    return len(problems) > 0, problems

def detect_content_type(file_path):
    """Detect content type from file path"""
    path_str = str(file_path).lower()
    
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
    elif '/03_mechanics/' in path_str:
        return 'mechanics'
    elif '/05_templates/' in path_str:
        return 'template'
    else:
        return 'unknown'

def update_internal_links(vault_path, old_filename, new_filename):
    """Update internal links when a file is renamed"""
    old_name_no_ext = old_filename[:-3] if old_filename.endswith('.md') else old_filename
    new_name_no_ext = new_filename[:-3] if new_filename.endswith('.md') else new_filename
    
    # Skip if names are the same
    if old_name_no_ext == new_name_no_ext:
        return []
    
    # Search for links to the old file
    link_patterns = [
        f'[[{old_name_no_ext}]]',
        f'[[{old_name_no_ext}|',
        f']({old_filename})',
        f']({old_name_no_ext}.md)'
    ]
    
    updated_files = []
    
    for root, dirs, files in os.walk(vault_path):
        if 'backup' in root.lower() or 'script' in root.lower():
            continue
            
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Update all link patterns
                    for pattern in link_patterns:
                        if pattern in content:
                            if pattern.startswith('[['):
                                if pattern.endswith(']]'):
                                    content = content.replace(pattern, f'[[{new_name_no_ext}]]')
                                else:  # Has display text
                                    content = content.replace(pattern, f'[[{new_name_no_ext}|')
                            else:  # Markdown links
                                if pattern.endswith(')'):
                                    if old_filename in pattern:
                                        content = content.replace(pattern, f']({new_filename})')
                                    else:
                                        content = content.replace(pattern, f']({new_name_no_ext}.md)')
                    
                    # Save if changed
                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        updated_files.append(os.path.relpath(file_path, vault_path))
                        
                except Exception as e:
                    print(f"Error updating links in {file_path}: {e}")
    
    return updated_files

def process_file(file_path, backup_dir, dry_run=False, update_links=True):
    """Process a single file for renaming"""
    try:
        directory = os.path.dirname(file_path)
        old_filename = os.path.basename(file_path)
        
        # Check if file needs renaming
        needs_rename, problems = should_rename_file(old_filename)
        
        if not needs_rename:
            return False, "No changes needed", None, None
        
        # Generate new filename
        new_filename = clean_filename(old_filename)
        
        # If the cleaned name is the same, no need to rename
        if new_filename == old_filename:
            return False, "No changes needed after cleaning", None, None
        
        new_file_path = os.path.join(directory, new_filename)
        
        # Check if target file already exists
        if os.path.exists(new_file_path):
            return False, f"Target file already exists: {new_filename}", None, None
        
        if dry_run:
            return True, f"Would rename to: {new_filename} (problems: {', '.join(problems)})", old_filename, new_filename
        
        # Backup original file
        backup_file(file_path, backup_dir)
        
        # Rename the file
        os.rename(file_path, new_file_path)
        
        # Update internal links if requested
        updated_links = []
        if update_links:
            vault_path = os.path.dirname(backup_dir)
            updated_links = update_internal_links(vault_path, old_filename, new_filename)
        
        return True, f"Renamed to: {new_filename} (updated {len(updated_links)} files with links)", old_filename, new_filename
        
    except Exception as e:
        return False, f"Error: {e}", None, None

def main():
    vault_path = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    backup_dir = os.path.join(vault_path, "backups", f"file_naming_backup_{datetime.now().strftime('%Y%m%d_%H%M%S')}")
    
    import sys
    dry_run = '--dry-run' in sys.argv
    update_links = '--no-links' not in sys.argv
    
    print("File Naming Standardization Script")
    print("=================================")
    print(f"Vault path: {vault_path}")
    print(f"Dry run: {dry_run}")
    print(f"Update links: {update_links}")
    print()
    
    # Create backup directory
    if not dry_run:
        os.makedirs(backup_dir, exist_ok=True)
        print(f"Backup directory: {backup_dir}")
    
    # Process files
    total_files = 0
    renamed_files = 0
    errors = []
    rename_log = []
    
    for root, dirs, files in os.walk(vault_path):
        # Skip backup and script directories
        if 'backup' in root.lower() or 'script' in root.lower():
            continue
            
        for file in files:
            if file.endswith('.md'):
                file_path = os.path.join(root, file)
                relative_path = os.path.relpath(file_path, vault_path)
                
                total_files += 1
                success, message, old_name, new_name = process_file(file_path, backup_dir, dry_run, update_links)
                
                if success:
                    renamed_files += 1
                    rename_log.append({
                        'path': relative_path,
                        'old_name': old_name,
                        'new_name': new_name,
                        'message': message
                    })
                    if total_files % 50 == 0:
                        print(f"Processed {total_files} files, renamed {renamed_files}")
                elif "No changes needed" not in message and "Target file already exists" not in message:
                    errors.append(f"{relative_path}: {message}")
    
    print(f"\nProcessing complete!")
    print(f"Total files processed: {total_files}")
    print(f"Files renamed: {renamed_files}")
    print(f"Files skipped: {total_files - renamed_files}")
    
    if errors:
        print(f"\nErrors encountered ({len(errors)}):")
        for error in errors[:10]:  # Show first 10 errors
            print(f"  {error}")
        if len(errors) > 10:
            print(f"  ... and {len(errors) - 10} more errors")
    
    # Show some rename examples
    if rename_log:
        print(f"\nExample renames:")
        for entry in rename_log[:10]:
            print(f"  {entry['old_name']} → {entry['new_name']}")
        if len(rename_log) > 10:
            print(f"  ... and {len(rename_log) - 10} more renames")
    
    # Save rename report
    report_data = {
        'timestamp': datetime.now().isoformat(),
        'dry_run': dry_run,
        'update_links': update_links,
        'total_files': total_files,
        'renamed_files': renamed_files,
        'errors': errors,
        'rename_log': rename_log
    }
    
    report_file = os.path.join(vault_path, "scripts", "file_naming_report.json")
    with open(report_file, 'w', encoding='utf-8') as f:
        json.dump(report_data, f, indent=2, ensure_ascii=False)
    
    print(f"\nRename report saved to: {report_file}")
    
    if dry_run:
        print("\nThis was a dry run. No files were actually renamed.")
        print("Remove --dry-run flag to perform the actual renaming.")
        print("Add --no-links flag to skip updating internal links.")
    else:
        print(f"\nBackup created at: {backup_dir}")
        print("File naming standardization complete!")

if __name__ == "__main__":
    main()