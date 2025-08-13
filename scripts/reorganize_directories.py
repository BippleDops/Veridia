#!/usr/bin/env python3
"""
Reorganize vault directories to fix numbering and move CLI reference materials
"""

import os
import shutil
from pathlib import Path
import re

def reorganize_vault():
    """Main reorganization function"""
    vault_path = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
    
    print("🔧 Vault Directory Reorganization")
    print("=" * 60)
    
    # Step 1: Rename 09_Performance to 13_Performance
    print("\n1️⃣ Fixing duplicate 09 directories...")
    
    performance_old = vault_path / "09_Performance"
    performance_new = vault_path / "13_Performance"
    
    if performance_old.exists() and not performance_new.exists():
        shutil.move(str(performance_old), str(performance_new))
        print(f"  ✅ Renamed 09_Performance → 13_Performance")
    elif performance_new.exists():
        print(f"  ⚠️ 13_Performance already exists")
    
    # Step 2: Move CLI reference materials to 12_Research/D&D_Sourcebooks
    print("\n2️⃣ Moving CLI reference materials...")
    
    cli_source = vault_path / "08_Archive" / "CLI_reference_materials"
    cli_dest = vault_path / "12_Research" / "D&D_Sourcebooks" / "CLI_Reference"
    
    if cli_source.exists():
        # Create destination directory
        cli_dest.parent.mkdir(parents=True, exist_ok=True)
        
        if cli_dest.exists():
            # Merge if destination exists
            print(f"  ⚠️ Merging with existing {cli_dest.name}")
            for item in cli_source.iterdir():
                dest_item = cli_dest / item.name
                if not dest_item.exists():
                    shutil.move(str(item), str(dest_item))
                    print(f"    Moved: {item.name}")
            # Remove empty source
            if not list(cli_source.iterdir()):
                cli_source.rmdir()
        else:
            # Move entire directory
            shutil.move(str(cli_source), str(cli_dest))
            print(f"  ✅ Moved CLI_reference_materials → 12_Research/D&D_Sourcebooks/CLI_Reference")
    else:
        print(f"  ⚠️ CLI_reference_materials not found in 08_Archive")
    
    # Step 3: Verify directory structure
    print("\n3️⃣ Verifying directory structure...")
    
    expected_dirs = {
        "00_Indexes": "Master navigation indexes",
        "01_Adventures": "Campaign modules and sessions",
        "02_Worldbuilding": "Lore, NPCs, locations",
        "03_Mechanics": "Game rules and systems",
        "04_Resources": "Tools and references",
        "05_Templates": "Reusable templates",
        "06_GM_Resources": "Game master tools",
        "07_Player_Resources": "Player materials",
        "08_Archive": "Historical content",
        "09_Documentation": "Manuals and guides",
        "10_Community": "Community content",
        "11_Professional": "Publishing and VTT",
        "12_Research": "Research and sourcebooks",
        "13_Performance": "Performance metrics and logs"
    }
    
    for dir_name, description in expected_dirs.items():
        dir_path = vault_path / dir_name
        if dir_path.exists():
            print(f"  ✅ {dir_name}: {description}")
        else:
            print(f"  ❌ {dir_name}: MISSING")
    
    return True

def fix_archive_links():
    """Fix links pointing to 08_Archive"""
    vault_path = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
    
    print("\n4️⃣ Fixing links to archive directories...")
    
    fixes_made = 0
    files_fixed = []
    
    # Pattern to find archive links
    archive_patterns = [
        # Remove 08_Archive from CLI reference links
        (r'\[\[08_Archive/CLI_reference_materials/([^\]]+)\]\]', 
         r'[[12_Research/D&D_Sourcebooks/CLI_Reference/\1]]'),
        
        # Remove absolute paths with archive
        (r'\[\[/Users/[^/]+/[^/]+/[^/]+/[^/]+/[^/]+/[^/]+/[^/]+/08_Archive/([^\]]+)\]\]',
         r'[[08_Archive/\1]]'),
         
        # Fix embedded archive files
        (r'!\[\[08_Archive/CLI_reference_materials/([^\]]+)\]\]',
         r'![[12_Research/D&D_Sourcebooks/CLI_Reference/\1]]'),
    ]
    
    # Process all markdown files
    for md_file in vault_path.rglob("*.md"):
        # Skip files in archive itself
        if "08_Archive" in str(md_file):
            continue
            
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Apply fixes
            for pattern, replacement in archive_patterns:
                content = re.sub(pattern, replacement, content)
            
            # Write back if changed
            if content != original_content:
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_fixed.append(md_file)
                fixes_made += content.count('[[') - original_content.count('[[08_Archive')
                
        except Exception as e:
            print(f"  ⚠️ Error processing {md_file.name}: {e}")
    
    print(f"  ✅ Fixed {fixes_made} archive links in {len(files_fixed)} files")
    
    return fixes_made

def update_all_links():
    """Update all links to use new directory structure"""
    vault_path = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
    
    print("\n5️⃣ Updating links for new directory structure...")
    
    link_updates = [
        # Update Performance links from 09 to 13
        (r'\[\[09_Performance/([^\]]+)\]\]', r'[[13_Performance/\1]]'),
        (r'!\[\[09_Performance/([^\]]+)\]\]', r'![[13_Performance/\1]]'),
        
        # Update CLI reference links
        (r'\[\[CLI_reference_materials/([^\]]+)\]\]', 
         r'[[12_Research/D&D_Sourcebooks/CLI_Reference/\1]]'),
    ]
    
    files_updated = 0
    
    for md_file in vault_path.rglob("*.md"):
        try:
            with open(md_file, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            for pattern, replacement in link_updates:
                content = re.sub(pattern, replacement, content)
            
            if content != original_content:
                with open(md_file, 'w', encoding='utf-8') as f:
                    f.write(content)
                files_updated += 1
                
        except Exception as e:
            pass
    
    print(f"  ✅ Updated links in {files_updated} files")
    
    return files_updated

def create_directory_index():
    """Create an index file explaining the directory structure"""
    vault_path = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
    
    index_content = """# Vault Directory Structure
*Official directory organization and purpose*

## Directory Overview

| Number | Directory | Purpose | File Count |
|--------|-----------|---------|------------|
| 00 | Indexes | Master navigation and indexes | - |
| 01 | Adventures | Campaign modules and sessions | - |
| 02 | Worldbuilding | Lore, NPCs, locations, factions | 4,000+ |
| 03 | Mechanics | Game rules and systems | 100+ |
| 04 | Resources | Tools and references | 50+ |
| 05 | Templates | Reusable templates | 35+ |
| 06 | GM_Resources | Game master tools | - |
| 07 | Player_Resources | Player materials | - |
| 08 | Archive | Historical content (DO NOT LINK TO) | - |
| 09 | Documentation | Manuals and guides | 10+ |
| 10 | Community | Community content and sharing | - |
| 11 | Professional | Publishing and VTT integration | - |
| 12 | Research | D&D sourcebooks and research | - |
| 13 | Performance | Metrics, logs, and optimization | - |

## Important Notes

### DO NOT Link To:
- `/08_Archive/` - Historical content only
- `/backups/` - Backup storage only
- Absolute paths starting with `/Users/`

### Proper Link Format:
```markdown
Good: [[02_Worldbuilding/People/Queen Seraphina]]
Bad: [[08_Archive/old_files/Queen Seraphina]]
Bad: [[/Users/.../Queen Seraphina]]
```

## Directory Details

### 00_Indexes
Central navigation hub for the entire vault.

### 01_Adventures
Active campaign content and adventure modules.

### 02_Worldbuilding
The heart of the vault - all lore, characters, and locations.

### 03_Mechanics
Game systems, rules, and mechanical content.

### 04_Resources
Tools, assets, and reference materials.

### 05_Templates
Reusable templates for content creation.

### 06_GM_Resources
Game master specific tools and references.

### 07_Player_Resources
Player handouts, character options, and guides.

### 08_Archive ⚠️
Historical content - DO NOT create new links here!

### 09_Documentation
User manuals, technical docs, and guides.

### 10_Community
Shared content and community contributions.

### 11_Professional
Publishing tools and VTT integration.

### 12_Research
D&D sourcebooks (including CLI reference) and research.

### 13_Performance
Vault metrics, logs, and performance data.

---
*Last Updated: 2025-08-13*
"""
    
    index_path = vault_path / "00_Indexes" / "DIRECTORY_STRUCTURE.md"
    index_path.parent.mkdir(exist_ok=True)
    
    with open(index_path, 'w', encoding='utf-8') as f:
        f.write(index_content)
    
    print(f"\n✅ Created directory structure index")

def main():
    print("🚀 Starting Vault Reorganization")
    print("=" * 60)
    
    # Run reorganization
    reorganize_vault()
    
    # Fix archive links
    fix_archive_links()
    
    # Update all links
    update_all_links()
    
    # Create index
    create_directory_index()
    
    print("\n" + "=" * 60)
    print("✨ Reorganization Complete!")
    print("\nKey Changes:")
    print("  • 09_Performance → 13_Performance")
    print("  • CLI_reference_materials → 12_Research/D&D_Sourcebooks/")
    print("  • Archive links updated")
    print("  • Directory structure documented")

if __name__ == "__main__":
    main()