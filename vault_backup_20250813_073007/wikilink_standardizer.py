#!/usr/bin/env python3
"""
Wikilink Standardization Script
Converts old-style wikilinks to full-path format for better cross-referencing.

Pattern conversion:
OLD: [[Link Name]]
NEW: [[02_Worldbuilding/Category/Link Name|Link Name]]
"""

import os
import re
import shutil
from pathlib import Path
from typing import Dict, List, Set, Tuple
from datetime import datetime
import argparse


class WikilinkStandardizer:
    def __init__(self, vault_path: str, dry_run: bool = True):
        self.vault_path = Path(vault_path)
        self.dry_run = dry_run
        self.file_map = {}  # Maps display names to full paths
        self.processed_files = 0
        self.total_links_updated = 0
        self.errors = []
        
        # Patterns to match wikilinks
        # Matches [[Link]] but not [[Path/Link|Display]] or [[Path/Link]]
        self.simple_wikilink_pattern = re.compile(r'\[\[([^|\]]+)\]\]')
        # Matches [[Path|Display]] format to avoid re-processing
        self.full_wikilink_pattern = re.compile(r'\[\[([^|\]]+\|[^|\]]+)\]\]')
        
    def build_file_map(self):
        """Build a mapping of file display names to their full paths."""
        print("Building file map...")
        
        for md_file in self.vault_path.rglob("*.md"):
            if md_file.is_file():
                # Get relative path from vault root
                rel_path = md_file.relative_to(self.vault_path)
                
                # Skip backup directories
                if 'backup' in str(rel_path).lower():
                    continue
                
                # File name without extension becomes the key
                file_stem = md_file.stem
                
                # Store the path without .md extension for wikilink format
                path_without_ext = str(rel_path.with_suffix(''))
                
                self.file_map[file_stem] = path_without_ext
                
                # Also map any title variations (handle spaces, etc.)
                variants = self._get_title_variants(file_stem)
                for variant in variants:
                    if variant not in self.file_map:
                        self.file_map[variant] = path_without_ext
        
        print(f"Found {len(self.file_map)} files to map")
        
    def _get_title_variants(self, title: str) -> List[str]:
        """Generate common variations of a title that might be used in wikilinks."""
        variants = [title]
        
        # Handle underscores vs spaces
        if '_' in title:
            variants.append(title.replace('_', ' '))
        if ' ' in title:
            variants.append(title.replace(' ', '_'))
            
        return variants
    
    def _is_already_full_path(self, link_text: str) -> bool:
        """Check if a wikilink already uses full path format."""
        # If it contains a pipe or a forward slash, it's likely already formatted
        return '|' in link_text or '/' in link_text
    
    def _extract_simple_wikilinks(self, content: str) -> List[Tuple[str, str]]:
        """Extract simple wikilinks that need conversion."""
        matches = []
        
        for match in self.simple_wikilink_pattern.finditer(content):
            link_text = match.group(1).strip()
            full_match = match.group(0)
            
            # Skip if already has full path format
            if self._is_already_full_path(link_text):
                continue
                
            matches.append((full_match, link_text))
            
        return matches
    
    def _convert_wikilink(self, link_text: str) -> str:
        """Convert a simple wikilink to full path format."""
        # Clean up the link text
        clean_text = link_text.strip()
        
        # Try to find the file in our map
        if clean_text in self.file_map:
            full_path = self.file_map[clean_text]
            return f"[[{full_path}|{clean_text}]]"
        else:
            # If we can't find it, leave it as is but log it
            self.errors.append(f"Could not find file for wikilink: {clean_text}")
            return f"[[{clean_text}]]"  # Return original format
    
    def process_file(self, file_path: Path) -> Tuple[int, List[str]]:
        """Process a single file and convert its wikilinks."""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
        except Exception as e:
            return 0, [f"Error reading {file_path}: {str(e)}"]
        
        # Extract simple wikilinks that need conversion
        simple_links = self._extract_simple_wikilinks(content)
        
        if not simple_links:
            return 0, []  # No links to convert
        
        # Convert each link
        updated_content = content
        conversions = 0
        file_errors = []
        
        for full_match, link_text in simple_links:
            new_link = self._convert_wikilink(link_text)
            if new_link != full_match:
                updated_content = updated_content.replace(full_match, new_link, 1)
                conversions += 1
                print(f"  {full_match} -> {new_link}")
        
        # Write back if we made changes and not in dry run mode
        if conversions > 0 and not self.dry_run:
            try:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(updated_content)
            except Exception as e:
                file_errors.append(f"Error writing {file_path}: {str(e)}")
        
        return conversions, file_errors
    
    def create_backup(self):
        """Create a backup of the vault before processing."""
        if self.dry_run:
            return
            
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        backup_name = f"vault_backup_{timestamp}"
        backup_path = self.vault_path.parent / backup_name
        
        print(f"Creating backup at {backup_path}...")
        shutil.copytree(self.vault_path, backup_path)
        print(f"Backup created successfully")
        
    def run(self, test_limit: int = None):
        """Run the wikilink standardization process."""
        print(f"Starting wikilink standardization...")
        print(f"Vault path: {self.vault_path}")
        print(f"Dry run: {self.dry_run}")
        
        # Create backup if not dry run
        if not self.dry_run:
            self.create_backup()
        
        # Build file mapping
        self.build_file_map()
        
        # Process all markdown files
        md_files = list(self.vault_path.rglob("*.md"))
        
        if test_limit:
            md_files = md_files[:test_limit]
            print(f"Testing on first {test_limit} files only")
        
        print(f"Processing {len(md_files)} markdown files...")
        
        for file_path in md_files:
            if file_path.is_file():
                print(f"Processing: {file_path.relative_to(self.vault_path)}")
                
                conversions, file_errors = self.process_file(file_path)
                
                if conversions > 0:
                    self.processed_files += 1
                    self.total_links_updated += conversions
                
                self.errors.extend(file_errors)
        
        # Report results
        self.print_summary()
    
    def print_summary(self):
        """Print a summary of the processing results."""
        print("\n" + "="*60)
        print("WIKILINK STANDARDIZATION SUMMARY")
        print("="*60)
        print(f"Files processed with changes: {self.processed_files}")
        print(f"Total wikilinks updated: {self.total_links_updated}")
        print(f"Files mapped: {len(self.file_map)}")
        
        if self.errors:
            print(f"\nErrors encountered: {len(self.errors)}")
            for error in self.errors[:10]:  # Show first 10 errors
                print(f"  - {error}")
            if len(self.errors) > 10:
                print(f"  ... and {len(self.errors) - 10} more errors")
        
        if self.dry_run:
            print("\n** DRY RUN - No files were actually modified **")
        else:
            print(f"\n** Files have been updated with standardized wikilinks **")


def main():
    parser = argparse.ArgumentParser(description='Standardize wikilinks in Obsidian vault')
    parser.add_argument('vault_path', help='Path to the Obsidian vault')
    parser.add_argument('--dry-run', action='store_true', default=True,
                        help='Run in dry-run mode (default: True)')
    parser.add_argument('--execute', action='store_true',
                        help='Actually execute the changes (overrides dry-run)')
    parser.add_argument('--test', type=int, metavar='N',
                        help='Test on first N files only')
    
    args = parser.parse_args()
    
    # If --execute is specified, turn off dry run
    dry_run = args.dry_run and not args.execute
    
    standardizer = WikilinkStandardizer(args.vault_path, dry_run=dry_run)
    standardizer.run(test_limit=args.test)


if __name__ == "__main__":
    main()