#!/usr/bin/env python3
"""
Remove numbered duplicate files (ending with " 2.md", " 3.md", " 4.md", etc.)
Checks that the original file exists before removing duplicates.
"""

import os
import re
from pathlib import Path
import shutil
from datetime import datetime

# Vault root
VAULT_ROOT = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")

# Pattern to match numbered duplicates
DUPLICATE_PATTERN = re.compile(r'^(.+) (\d+)(\.md)$')

def find_duplicates():
    """Find all numbered duplicate files"""
    duplicates = []
    originals_exist = []
    orphaned = []
    
    for root, dirs, files in os.walk(VAULT_ROOT):
        # Skip backup directories
        if 'backup' in root.lower() or 'vault_backup' in root:
            continue
            
        for file in files:
            match = DUPLICATE_PATTERN.match(file)
            if match:
                base_name = match.group(1)
                number = match.group(2)
                extension = match.group(3)
                
                original_name = f"{base_name}{extension}"
                original_path = Path(root) / original_name
                duplicate_path = Path(root) / file
                
                if original_path.exists():
                    duplicates.append((duplicate_path, original_path))
                    originals_exist.append(duplicate_path)
                else:
                    # No original exists - this might be the only copy
                    orphaned.append(duplicate_path)
    
    return originals_exist, orphaned

def remove_duplicates(duplicates, dry_run=True):
    """Remove duplicate files"""
    removed_count = 0
    
    for dup_path in duplicates:
        try:
            if dry_run:
                print(f"Would remove: {dup_path.relative_to(VAULT_ROOT)}")
            else:
                dup_path.unlink()
                print(f"Removed: {dup_path.relative_to(VAULT_ROOT)}")
            removed_count += 1
        except Exception as e:
            print(f"Error removing {dup_path}: {e}")
    
    return removed_count

def main():
    print("Finding numbered duplicate files...")
    
    duplicates_with_originals, orphaned = find_duplicates()
    
    print(f"\nFound {len(duplicates_with_originals)} duplicates with existing originals")
    print(f"Found {len(orphaned)} potential duplicates without originals (will not remove)")
    
    if orphaned:
        print("\nOrphaned files (no original exists - keeping these):")
        for path in orphaned[:10]:  # Show first 10
            print(f"  - {path.relative_to(VAULT_ROOT)}")
        if len(orphaned) > 10:
            print(f"  ... and {len(orphaned) - 10} more")
    
    if not duplicates_with_originals:
        print("No safe duplicates to remove!")
        return
    
    # Show sample of what will be removed
    print("\nSample of duplicates to remove:")
    for path in duplicates_with_originals[:10]:
        print(f"  - {path.relative_to(VAULT_ROOT)}")
    if len(duplicates_with_originals) > 10:
        print(f"  ... and {len(duplicates_with_originals) - 10} more")
    
    # Dry run first
    print("\n--- DRY RUN ---")
    dry_count = remove_duplicates(duplicates_with_originals[:5], dry_run=True)
    
    # Auto-confirm in non-interactive mode
    print(f"\nRemoving {len(duplicates_with_originals)} duplicate files...")
    removed = remove_duplicates(duplicates_with_originals, dry_run=False)
    print(f"\nSuccessfully removed {removed} duplicate files!")

if __name__ == "__main__":
    main()