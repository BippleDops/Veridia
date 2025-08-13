#!/usr/bin/env python3
"""
Restore Content from Backup - Fix Empty Directories
This script identifies content that was moved to backups and restores it properly
"""

import os
import shutil
import argparse
from typing import List, Dict, Set
from common import ROOT_DIR, list_markdown_files

class BackupRestorer:
    def __init__(self, vault_path: str = None):
        self.vault_path = vault_path or ROOT_DIR
        self.backup_dirs = self._find_backup_directories()
        
    def _find_backup_directories(self) -> List[str]:
        """Find all backup directories in vault"""
        backup_dirs = []
        for item in os.listdir(self.vault_path):
            full_path = os.path.join(self.vault_path, item)
            if (os.path.isdir(full_path) and 
                ('backup' in item.lower() or 'vault_backup' in item.lower())):
                backup_dirs.append(full_path)
        return backup_dirs
    
    def analyze_missing_content(self) -> Dict[str, any]:
        """Analyze what content is missing from main vault vs backups"""
        main_files = set(list_markdown_files(self.vault_path))
        backup_files = set()
        
        # Collect all files from backups
        for backup_dir in self.backup_dirs:
            backup_files.update(list_markdown_files(backup_dir))
        
        # Find directories that are empty in main but have content in backup
        empty_dirs = self._find_empty_content_directories()
        restorable_content = {}
        
        for backup_dir in self.backup_dirs:
            for backup_file in list_markdown_files(backup_dir):
                # Determine where this file should go in main vault
                relative_path = os.path.relpath(backup_file, backup_dir)
                expected_main_path = os.path.join(self.vault_path, relative_path)
                
                # Skip if file already exists in main vault
                if os.path.exists(expected_main_path):
                    continue
                
                # Check if the directory exists but is empty
                expected_dir = os.path.dirname(expected_main_path)
                if (os.path.exists(expected_dir) and 
                    not list_markdown_files(expected_dir)):
                    
                    if expected_dir not in restorable_content:
                        restorable_content[expected_dir] = []
                    restorable_content[expected_dir].append({
                        'backup_file': backup_file,
                        'target_file': expected_main_path,
                        'backup_source': backup_dir
                    })
        
        return {
            'empty_dirs_with_backup_content': restorable_content,
            'total_empty_dirs': len(empty_dirs),
            'total_restorable_files': sum(len(files) for files in restorable_content.values())
        }
    
    def _find_empty_content_directories(self) -> List[str]:
        """Find directories that should contain content but are empty"""
        empty_dirs = []
        content_dirs = [
            '02_Worldbuilding/Groups',
            '02_Worldbuilding/People', 
            '02_Worldbuilding/Places',
            '02_Worldbuilding/Lore',
            '02_Worldbuilding/Items',
            '01_Adventures',
            '03_Mechanics'
        ]
        
        for content_dir in content_dirs:
            full_dir = os.path.join(self.vault_path, content_dir)
            if os.path.exists(full_dir):
                for subdir in os.listdir(full_dir):
                    subdir_path = os.path.join(full_dir, subdir)
                    if os.path.isdir(subdir_path):
                        if not list_markdown_files(subdir_path):
                            empty_dirs.append(subdir_path)
        
        return empty_dirs
    
    def restore_content(self, dry_run: bool = True) -> Dict[str, any]:
        """Restore missing content from backups"""
        analysis = self.analyze_missing_content()
        restoration_log = []
        
        for target_dir, files_to_restore in analysis['empty_dirs_with_backup_content'].items():
            print(f"\nRestoring to: {target_dir}")
            
            for file_info in files_to_restore:
                backup_file = file_info['backup_file']
                target_file = file_info['target_file']
                
                print(f"  Restoring: {os.path.basename(backup_file)}")
                
                if not dry_run:
                    # Ensure target directory exists
                    os.makedirs(os.path.dirname(target_file), exist_ok=True)
                    
                    # Copy file from backup
                    shutil.copy2(backup_file, target_file)
                    
                restoration_log.append({
                    'source': backup_file,
                    'target': target_file,
                    'success': not dry_run
                })
        
        return {
            'files_restored': len(restoration_log),
            'dry_run': dry_run,
            'restoration_log': restoration_log
        }
    
    def clean_empty_directories(self, dry_run: bool = True) -> List[str]:
        """Remove truly empty directories (no content, no subdirs with content)"""
        empty_dirs = []
        
        # Find all empty directories
        for root, dirs, files in os.walk(self.vault_path, topdown=False):
            # Skip backup and system directories  
            if any(skip in root for skip in ['backup', '.git', '.obsidian', 'node_modules']):
                continue
                
            # Check if directory is empty (no files, no subdirectories with content)
            if not files and not dirs:
                empty_dirs.append(root)
                if not dry_run:
                    try:
                        os.rmdir(root)
                        print(f"Removed empty directory: {root}")
                    except OSError:
                        print(f"Could not remove directory: {root}")
        
        return empty_dirs

def main():
    parser = argparse.ArgumentParser(description='Restore Content from Backup')
    parser.add_argument('action', choices=['analyze', 'restore', 'clean'])
    parser.add_argument('--dry-run', action='store_true', 
                       help='Show what would be done without making changes')
    
    args = parser.parse_args()
    
    restorer = BackupRestorer()
    
    if args.action == 'analyze':
        analysis = restorer.analyze_missing_content()
        print(f"Analysis Results:")
        print(f"Empty directories: {analysis['total_empty_dirs']}")
        print(f"Restorable files: {analysis['total_restorable_files']}")
        
        for target_dir, files in analysis['empty_dirs_with_backup_content'].items():
            print(f"\n{target_dir}: {len(files)} files can be restored")
            for file_info in files[:5]:  # Show first 5 files
                print(f"  - {os.path.basename(file_info['target_file'])}")
            if len(files) > 5:
                print(f"  ... and {len(files) - 5} more")
    
    elif args.action == 'restore':
        result = restorer.restore_content(dry_run=args.dry_run)
        print(f"Restoration {'would restore' if result['dry_run'] else 'restored'} {result['files_restored']} files")
    
    elif args.action == 'clean':
        empty_dirs = restorer.clean_empty_directories(dry_run=args.dry_run)
        print(f"{'Would remove' if args.dry_run else 'Removed'} {len(empty_dirs)} empty directories")

if __name__ == "__main__":
    main()