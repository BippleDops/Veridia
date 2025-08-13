#!/usr/bin/env python3
"""
Restore files from backups folder to their correct locations
"""

import os
import shutil
from pathlib import Path

def restore_files():
    """Restore all files from backups to their original locations"""
    vault_path = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
    backups_path = vault_path / "backups"
    
    restored_count = 0
    errors = []
    
    # Find all markdown files in backups
    for backup_file in backups_path.glob("**/*.md"):
        try:
            # Get the relative path from backups folder
            relative_path = backup_file.relative_to(backups_path)
            
            # Determine target location
            target_path = vault_path / relative_path
            
            # Create target directory if it doesn't exist
            target_path.parent.mkdir(parents=True, exist_ok=True)
            
            # Move the file back
            shutil.move(str(backup_file), str(target_path))
            restored_count += 1
            
            if restored_count % 100 == 0:
                print(f"  Restored {restored_count} files...")
                
        except Exception as e:
            errors.append(f"Error restoring {backup_file}: {e}")
    
    print(f"\n✅ Successfully restored {restored_count} files")
    
    if errors:
        print(f"\n⚠️ {len(errors)} errors occurred:")
        for error in errors[:10]:  # Show first 10 errors
            print(f"  - {error}")
    
    # Clean up empty directories in backups
    print("\n🧹 Cleaning up empty directories in backups...")
    for dirpath, dirnames, filenames in os.walk(backups_path, topdown=False):
        if not dirnames and not filenames and dirpath != str(backups_path):
            try:
                os.rmdir(dirpath)
                print(f"  Removed empty: {Path(dirpath).relative_to(backups_path)}")
            except:
                pass
    
    return restored_count

def verify_restoration():
    """Verify folders now have content"""
    vault_path = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
    
    folders_to_check = [
        "01_Adventures",
        "02_Worldbuilding/People", 
        "02_Worldbuilding/Places",
        "02_Worldbuilding/Groups",
        "03_Mechanics",
        "06_GM_Resources",
        "07_Player_Resources",
        "09_Performance"
    ]
    
    print("\n📊 Folder Status After Restoration:")
    print("-" * 50)
    
    for folder in folders_to_check:
        folder_path = vault_path / folder
        if folder_path.exists():
            md_files = list(folder_path.glob("*.md"))
            status = "✅" if len(md_files) >= 10 else "⚠️" if len(md_files) > 0 else "❌"
            print(f"{status} {folder}: {len(md_files)} files")
        else:
            print(f"❌ {folder}: MISSING")

def main():
    print("🔄 Restoring Files from Backups Folder")
    print("=" * 50)
    
    # Restore files
    count = restore_files()
    
    # Verify restoration
    verify_restoration()
    
    print("\n" + "=" * 50)
    print("✨ Restoration Complete!")
    print(f"Total files restored: {count}")

if __name__ == "__main__":
    main()