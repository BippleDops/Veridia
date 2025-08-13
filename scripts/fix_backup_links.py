#!/usr/bin/env python3
"""
Fix all links pointing to backup folders in the vault.
Replaces backup folder references with correct paths.
"""

import re
import os
from pathlib import Path
from collections import defaultdict
import json

class BackupLinkFixer:
    def __init__(self, vault_path):
        self.vault_path = Path(vault_path)
        self.fixes_made = defaultdict(int)
        self.files_fixed = []
        self.errors = []
        
        # Patterns to match various backup folder references
        self.backup_patterns = [
            # Wikilinks with backup paths
            (r'\[\[vault_backup_\d{8}_\d{6}/', '[['),
            (r'\[\[backups/vault_backup_\d{8}_\d{6}/', '[['),
            (r'\[\[08_Archive/backups/vault_backup_\d{8}_\d{6}/', '[['),
            
            # Embedded files with backup paths
            (r'!\[\[vault_backup_\d{8}_\d{6}/', '![['),
            (r'!\[\[backups/vault_backup_\d{8}_\d{6}/', '![['),
            (r'!\[\[08_Archive/backups/vault_backup_\d{8}_\d{6}/', '![['),
            
            # Direct path references
            (r'vault_backup_\d{8}_\d{6}/', ''),
            (r'backups/vault_backup_\d{8}_\d{6}/', ''),
            (r'08_Archive/backups/vault_backup_\d{8}_\d{6}/', ''),
            
            # Links with pipe aliases pointing to backups
            (r'\[\[vault_backup_\d{8}_\d{6}/([^|]+)\|', r'[[\1|'),
            (r'\[\[backups/vault_backup_\d{8}_\d{6}/([^|]+)\|', r'[[\1|'),
            
            # File naming and hierarchical tags backup references
            (r'file_naming_backup_\d{8}_\d{6}/', ''),
            (r'hierarchical_tags_backup_\d{8}_\d{6}/', ''),
            
            # Any remaining backup folder patterns
            (r'/backups/[^/]+/', '/'),
            (r'\[\[backups/', '[['),
            (r'!\[\[backups/', '![['),
        ]
    
    def fix_file(self, file_path):
        """Fix backup references in a single file"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            fixes_in_file = 0
            
            # Apply all pattern fixes
            for pattern, replacement in self.backup_patterns:
                new_content, count = re.subn(pattern, replacement, content)
                if count > 0:
                    fixes_in_file += count
                    self.fixes_made[pattern] += count
                    content = new_content
            
            # Only write if changes were made
            if fixes_in_file > 0:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                self.files_fixed.append(str(file_path))
                return fixes_in_file
            
            return 0
            
        except Exception as e:
            self.errors.append(f"Error processing {file_path}: {e}")
            return 0
    
    def scan_vault(self):
        """Scan entire vault for files with backup references"""
        files_to_fix = []
        
        print("🔍 Scanning vault for backup references...")
        
        for md_file in self.vault_path.rglob("*.md"):
            # Skip actual backup folders
            if "backups" in str(md_file.parent):
                continue
                
            try:
                with open(md_file, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                # Check if file contains backup references
                if any(re.search(pattern, content) for pattern, _ in self.backup_patterns):
                    files_to_fix.append(md_file)
                    
            except Exception as e:
                self.errors.append(f"Error scanning {md_file}: {e}")
        
        return files_to_fix
    
    def fix_all(self):
        """Fix all backup references in the vault"""
        print("🔧 Backup Link Fixer")
        print("=" * 50)
        
        # Find files needing fixes
        files_to_fix = self.scan_vault()
        
        if not files_to_fix:
            print("✅ No backup references found!")
            return
        
        print(f"Found {len(files_to_fix)} files with backup references")
        print("Fixing links...")
        print("-" * 50)
        
        total_fixes = 0
        for i, file_path in enumerate(files_to_fix, 1):
            fixes = self.fix_file(file_path)
            total_fixes += fixes
            
            if i % 100 == 0:
                print(f"  Processed {i}/{len(files_to_fix)} files...")
        
        print("-" * 50)
        print(f"✅ Fixed {total_fixes} backup references in {len(self.files_fixed)} files")
        
        # Show fix statistics
        if self.fixes_made:
            print("\n📊 Fix Statistics:")
            for pattern, count in sorted(self.fixes_made.items(), key=lambda x: x[1], reverse=True):
                # Show readable pattern description
                if 'vault_backup' in pattern:
                    desc = "Vault backup folder references"
                elif 'file_naming' in pattern:
                    desc = "File naming backup references"
                elif 'hierarchical' in pattern:
                    desc = "Hierarchical tags backup references"
                else:
                    desc = "Other backup references"
                print(f"  - {desc}: {count}")
        
        # Show errors if any
        if self.errors:
            print(f"\n⚠️ {len(self.errors)} errors occurred:")
            for error in self.errors[:10]:
                print(f"  - {error}")
        
        # Save report
        self.save_report()
    
    def save_report(self):
        """Save a detailed report of fixes made"""
        report_path = self.vault_path / "reports" / "backup_link_fixes_report.md"
        report_path.parent.mkdir(exist_ok=True)
        
        with open(report_path, 'w', encoding='utf-8') as f:
            f.write("# Backup Link Fixes Report\n\n")
            f.write(f"**Date**: {Path.cwd()}\n")
            f.write(f"**Total Fixes**: {sum(self.fixes_made.values())}\n")
            f.write(f"**Files Fixed**: {len(self.files_fixed)}\n\n")
            
            f.write("## Fix Statistics\n\n")
            for pattern, count in sorted(self.fixes_made.items(), key=lambda x: x[1], reverse=True):
                f.write(f"- Pattern `{pattern}`: {count} fixes\n")
            
            if self.files_fixed:
                f.write("\n## Files Fixed\n\n")
                for file_path in sorted(self.files_fixed)[:100]:  # First 100
                    rel_path = Path(file_path).relative_to(self.vault_path)
                    f.write(f"- {rel_path}\n")
                
                if len(self.files_fixed) > 100:
                    f.write(f"\n... and {len(self.files_fixed) - 100} more files\n")
            
            if self.errors:
                f.write("\n## Errors\n\n")
                for error in self.errors:
                    f.write(f"- {error}\n")
        
        print(f"\n📄 Report saved to: {report_path.relative_to(self.vault_path)}")

def verify_fixes(vault_path):
    """Verify no backup references remain"""
    vault_path = Path(vault_path)
    remaining = 0
    
    print("\n🔍 Verifying fixes...")
    
    for md_file in vault_path.rglob("*.md"):
        if "backups" in str(md_file.parent):
            continue
            
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Check for any remaining backup references
            if re.search(r'\[\[.*backup.*\d{6}/', content) or re.search(r'backups/', content):
                remaining += 1
                
        except:
            pass
    
    if remaining == 0:
        print("✅ No backup references remain!")
    else:
        print(f"⚠️ {remaining} files may still contain backup references")
    
    return remaining == 0

def main():
    vault_path = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    print("🔄 Fixing Backup Folder References")
    print("=" * 50)
    print("This will fix all links pointing to backup folders")
    print("Original file paths will be restored")
    print("=" * 50)
    
    # Create fixer and run
    fixer = BackupLinkFixer(vault_path)
    fixer.fix_all()
    
    # Verify fixes
    verify_fixes(vault_path)
    
    print("\n✨ Backup link fixing complete!")

if __name__ == "__main__":
    main()