#!/usr/bin/env python3
"""
Merge Conflict Resolver for Obsidian Vault

This script resolves merge conflicts by choosing the newer kebab-case naming convention
and removing the older camelCase structure.
"""

import os
import re
import glob
from pathlib import Path

def resolve_bestiary_conflicts(file_path):
    """Resolve merge conflicts in bestiary files."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD:.*?\n(.*?)=======\n(.*?)>>>>>>> [a-f0-9]+:.*?\n'
    
    def replace_conflict(match):
        head_content = match.group(1)
        other_content = match.group(2)
        
        # Choose the newer structure (usually the one with more fields or kebab-case)
        if 'obsidian-u-i-mode' in other_content or 'cssclasses' in other_content:
            return other_content
        elif 'obsidian-u-i-mode' in head_content or 'cssclasses' in head_content:
            return head_content
        else:
            # Default to the other content (usually newer)
            return other_content
    
    # Replace all conflicts
    new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
    
    # Write back if changed
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def resolve_items_conflicts(file_path):
    """Resolve merge conflicts in items files."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD:.*?\n(.*?)=======\n(.*?)>>>>>>> [a-f0-9]+:.*?\n'
    
    def replace_conflict(match):
        head_content = match.group(1)
        other_content = match.group(2)
        
        # For items, prefer the structure with more metadata fields
        head_fields = len(re.findall(r'^[a-zA-Z-]+:', head_content, re.MULTILINE))
        other_fields = len(re.findall(r'^[a-zA-Z-]+:', other_content, re.MULTILINE))
        
        if other_fields >= head_fields:
            return other_content
        else:
            return head_content
    
    # Replace all conflicts
    new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
    
    # Write back if changed
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def resolve_general_conflicts(file_path):
    """Resolve general merge conflicts."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match merge conflict markers
    conflict_pattern = r'<<<<<<< HEAD:.*?\n(.*?)=======\n(.*?)>>>>>>> [a-f0-9]+:.*?\n'
    
    def replace_conflict(match):
        head_content = match.group(1)
        other_content = match.group(2)
        
        # Prefer kebab-case naming convention
        if re.search(r'[a-z]+-[a-z]+', other_content):
            return other_content
        elif re.search(r'[a-z]+-[a-z]+', head_content):
            return head_content
        else:
            # Default to other content
            return other_content
    
    # Replace all conflicts
    new_content = re.sub(conflict_pattern, replace_conflict, content, flags=re.DOTALL)
    
    # Write back if changed
    if new_content != content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(new_content)
        return True
    return False

def main():
    """Main function to resolve all merge conflicts."""
    resolved_count = 0
    
    # Find all markdown files with merge conflicts
    md_files = glob.glob('**/*.md', recursive=True)
    
    for file_path in md_files:
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            if '<<<<<<< HEAD' in content:
                print(f"Resolving conflicts in: {file_path}")
                
                # Choose appropriate resolver based on file path
                if 'bestiary' in file_path:
                    if resolve_bestiary_conflicts(file_path):
                        resolved_count += 1
                elif 'items' in file_path:
                    if resolve_items_conflicts(file_path):
                        resolved_count += 1
                else:
                    if resolve_general_conflicts(file_path):
                        resolved_count += 1
                        
        except Exception as e:
            print(f"Error processing {file_path}: {e}")
    
    print(f"\nResolved conflicts in {resolved_count} files.")

if __name__ == "__main__":
    main()
