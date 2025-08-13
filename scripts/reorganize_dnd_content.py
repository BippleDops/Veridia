#!/usr/bin/env python3
"""
Reorganize D&D Sourcebook content into properly indexed categories.
Creates organized Bestiary, Player Options, DM Resources, and Rules Reference sections.
"""

import os
import re
import shutil
from pathlib import Path
from datetime import datetime
import json

# Base paths
VAULT_ROOT = Path("/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental")
DND_DIR = VAULT_ROOT / "12_Research" / "D&D_Sourcebooks"
CLI_DIR = DND_DIR / "CLI_Reference"

# New organization structure
ORGANIZED_DIR = DND_DIR / "Organized_5e_Content"
BESTIARY_DIR = ORGANIZED_DIR / "Bestiary"
PLAYER_OPTIONS_DIR = ORGANIZED_DIR / "Player_Options"
DM_RESOURCES_DIR = ORGANIZED_DIR / "DM_Resources"
RULES_REF_DIR = ORGANIZED_DIR / "Rules_Reference"
ADVENTURES_DIR = ORGANIZED_DIR / "Published_Adventures"

def create_directory_structure():
    """Create the new organized directory structure"""
    
    # Main categories
    directories = [
        ORGANIZED_DIR,
        BESTIARY_DIR,
        PLAYER_OPTIONS_DIR,
        DM_RESOURCES_DIR,
        RULES_REF_DIR,
        ADVENTURES_DIR,
        
        # Bestiary subcategories
        BESTIARY_DIR / "By_Type",
        BESTIARY_DIR / "By_CR",
        BESTIARY_DIR / "By_Source",
        BESTIARY_DIR / "Legendary_Creatures",
        BESTIARY_DIR / "NPCs",
        
        # Player Options subcategories
        PLAYER_OPTIONS_DIR / "Classes",
        PLAYER_OPTIONS_DIR / "Subclasses",
        PLAYER_OPTIONS_DIR / "Races",
        PLAYER_OPTIONS_DIR / "Backgrounds",
        PLAYER_OPTIONS_DIR / "Feats",
        PLAYER_OPTIONS_DIR / "Spells",
        PLAYER_OPTIONS_DIR / "Equipment",
        PLAYER_OPTIONS_DIR / "Magic_Items",
        
        # DM Resources subcategories
        DM_RESOURCES_DIR / "Tables",
        DM_RESOURCES_DIR / "Encounter_Building",
        DM_RESOURCES_DIR / "Treasure",
        DM_RESOURCES_DIR / "NPCs",
        DM_RESOURCES_DIR / "Locations",
        DM_RESOURCES_DIR / "Traps_Hazards",
        DM_RESOURCES_DIR / "Variant_Rules",
        
        # Rules Reference subcategories
        RULES_REF_DIR / "Core_Mechanics",
        RULES_REF_DIR / "Conditions",
        RULES_REF_DIR / "Actions",
        RULES_REF_DIR / "Environment",
        RULES_REF_DIR / "Travel",
        RULES_REF_DIR / "Downtime",
        
        # Adventures subcategories (for published modules)
        ADVENTURES_DIR / "Starter_Adventures",
        ADVENTURES_DIR / "Campaign_Books",
        ADVENTURES_DIR / "Anthology_Adventures",
        ADVENTURES_DIR / "Setting_Books",
    ]
    
    for dir_path in directories:
        dir_path.mkdir(parents=True, exist_ok=True)
        print(f"Created: {dir_path.relative_to(VAULT_ROOT)}")

def categorize_file(file_path):
    """Determine the category for a file based on its content and location"""
    
    file_name = file_path.name.lower()
    parent_dir = file_path.parent.name.lower()
    
    # Read file content for better categorization
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
            lines = content.split('\n')
    except:
        content = ""
        lines = []
    
    # Check for creature/monster files
    if parent_dir == 'bestiary' or 'creature' in file_name or 'monster' in file_name:
        if any(dir_name in str(file_path) for dir_name in ['aberration', 'beast', 'celestial', 'construct', 
                                                             'dragon', 'elemental', 'fey', 'fiend', 'giant',
                                                             'humanoid', 'monstrosity', 'ooze', 'plant', 'undead']):
            return ('bestiary', file_path.parent.name)
    
    # Check for class files
    if parent_dir == 'classes' or 'class-' in file_name:
        return ('player_options', 'classes')
    
    # Check for subclass files
    if 'subclass' in file_name or any(x in file_name for x in ['domain', 'oath', 'college', 'school', 'archetype']):
        return ('player_options', 'subclasses')
    
    # Check for race files
    if parent_dir == 'races' or 'race-' in file_name:
        return ('player_options', 'races')
    
    # Check for background files
    if parent_dir == 'backgrounds' or 'background-' in file_name:
        return ('player_options', 'backgrounds')
    
    # Check for feat files
    if parent_dir == 'feats' or 'feat-' in file_name:
        return ('player_options', 'feats')
    
    # Check for spell files
    if parent_dir == 'spells' or 'spell-' in file_name or 'spells' in parent_dir:
        return ('player_options', 'spells')
    
    # Check for item files
    if parent_dir == 'items' or 'item-' in file_name or 'equipment' in file_name:
        if 'magic' in content.lower() or '+1' in content or '+2' in content or '+3' in content:
            return ('player_options', 'magic_items')
        return ('player_options', 'equipment')
    
    # Check for tables
    if parent_dir == 'tables' or 'table' in file_name:
        return ('dm_resources', 'tables')
    
    # Check for adventure content
    if parent_dir == 'adventures' or any(x in str(file_path) for x in ['Strahd', 'Avernus', 'Saltmarsh', 'Waterdeep', 'Tomb_of']):
        return ('adventures', parent_dir)
    
    # Check for rules and conditions
    if file_name in ['conditions.md', 'actions.md', 'senses.md', 'skills.md', 'diseases.md']:
        return ('rules_reference', 'core_mechanics')
    
    # Default categorization based on content analysis
    if 'CR' in content or 'challenge rating' in content.lower():
        return ('bestiary', 'by_cr')
    
    if 'background:' in content.lower() or 'skill proficiencies:' in content.lower():
        return ('player_options', 'backgrounds')
    
    if 'spell level' in content.lower() or 'casting time:' in content.lower():
        return ('player_options', 'spells')
    
    # Default to DM resources if unclear
    return ('dm_resources', 'general')

def update_file_frontmatter(file_path, new_category, new_subcategory):
    """Update the frontmatter of a file to reflect its new organization"""
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file has frontmatter
        if content.startswith('---'):
            # Extract frontmatter
            parts = content.split('---', 2)
            if len(parts) >= 3:
                frontmatter = parts[1]
                body = parts[2]
                
                # Update or add category tags
                if 'tags:' in frontmatter:
                    # Add new tags
                    frontmatter = re.sub(
                        r'tags:\s*\n',
                        f'tags:\n- 5e/{new_category}\n- 5e/{new_category}/{new_subcategory}\n',
                        frontmatter
                    )
                else:
                    # Add tags section
                    frontmatter += f'\ntags:\n- 5e/{new_category}\n- 5e/{new_category}/{new_subcategory}'
                
                # Add category and type fields
                if 'category:' not in frontmatter:
                    frontmatter += f'\ncategory: {new_category}'
                if 'subcategory:' not in frontmatter:
                    frontmatter += f'\nsubcategory: {new_subcategory}'
                
                # Reassemble content
                content = f'---{frontmatter}---{body}'
        else:
            # Add frontmatter if it doesn't exist
            frontmatter = f"""---
created: '{datetime.now().strftime('%Y-%m-%d')}'
tags:
- 5e/{new_category}
- 5e/{new_category}/{new_subcategory}
category: {new_category}
subcategory: {new_subcategory}
type: D&D_5e_Reference
---

"""
            content = frontmatter + content
        
        return content
    except Exception as e:
        print(f"Error updating frontmatter for {file_path}: {e}")
        return None

def reorganize_content():
    """Main reorganization function"""
    
    print("Starting D&D content reorganization...")
    
    # Create new directory structure
    create_directory_structure()
    
    # Track file movements for reference updates
    file_movements = {}
    
    # Process CLI Reference content
    if CLI_DIR.exists():
        for root, dirs, files in os.walk(CLI_DIR):
            # Skip backup directories
            if 'backup' in root.lower():
                continue
                
            for file in files:
                if file.endswith('.md'):
                    file_path = Path(root) / file
                    
                    # Categorize the file
                    category, subcategory = categorize_file(file_path)
                    
                    # Determine destination
                    if category == 'bestiary':
                        if subcategory in ['aberration', 'beast', 'celestial', 'construct', 
                                          'dragon', 'elemental', 'fey', 'fiend', 'giant',
                                          'humanoid', 'monstrosity', 'ooze', 'plant', 'undead']:
                            dest_dir = BESTIARY_DIR / "By_Type" / subcategory.title()
                        elif subcategory == 'by_cr':
                            dest_dir = BESTIARY_DIR / "By_CR"
                        else:
                            dest_dir = BESTIARY_DIR / "By_Type" / "Miscellaneous"
                    elif category == 'player_options':
                        dest_dir = PLAYER_OPTIONS_DIR / subcategory.replace('_', ' ').title().replace(' ', '_')
                    elif category == 'dm_resources':
                        dest_dir = DM_RESOURCES_DIR / subcategory.replace('_', ' ').title().replace(' ', '_')
                    elif category == 'rules_reference':
                        dest_dir = RULES_REF_DIR / subcategory.replace('_', ' ').title().replace(' ', '_')
                    elif category == 'adventures':
                        dest_dir = ADVENTURES_DIR / "Campaign_Books"
                    else:
                        dest_dir = DM_RESOURCES_DIR / "General"
                    
                    # Create destination directory if needed
                    dest_dir.mkdir(parents=True, exist_ok=True)
                    
                    # Update file content with new frontmatter
                    updated_content = update_file_frontmatter(file_path, category, subcategory)
                    
                    if updated_content:
                        # Write to new location
                        new_path = dest_dir / file
                        with open(new_path, 'w', encoding='utf-8') as f:
                            f.write(updated_content)
                        
                        # Track movement
                        file_movements[str(file_path.relative_to(VAULT_ROOT))] = str(new_path.relative_to(VAULT_ROOT))
                        
                        print(f"Moved: {file} -> {dest_dir.relative_to(DND_DIR)}")
    
    # Process published adventure modules
    for adventure_dir in DND_DIR.iterdir():
        if adventure_dir.is_dir() and adventure_dir.name not in ['CLI_Reference', 'Organized_5e_Content']:
            # Move entire adventure directory
            dest = ADVENTURES_DIR / "Campaign_Books" / adventure_dir.name
            if not dest.exists():
                shutil.copytree(adventure_dir, dest)
                print(f"Moved adventure: {adventure_dir.name}")
                
                # Update frontmatter in adventure files
                for root, dirs, files in os.walk(dest):
                    for file in files:
                        if file.endswith('.md'):
                            file_path = Path(root) / file
                            update_file_frontmatter(file_path, 'adventures', adventure_dir.name)
    
    return file_movements

def create_index_files():
    """Create comprehensive index files for each category"""
    
    # Bestiary Index
    bestiary_index = """---
created: '2025-08-13'
tags:
- 5e/bestiary
- index
type: Index
---

# D&D 5e Bestiary Index

## By Creature Type
"""
    
    for type_dir in (BESTIARY_DIR / "By_Type").iterdir():
        if type_dir.is_dir():
            creatures = list(type_dir.glob("*.md"))
            if creatures:
                bestiary_index += f"\n### {type_dir.name}\n"
                for creature in sorted(creatures):
                    bestiary_index += f"- [[{creature.stem}]]\n"
    
    with open(BESTIARY_DIR / "Bestiary_Index.md", 'w') as f:
        f.write(bestiary_index)
    
    # Player Options Index
    player_index = """---
created: '2025-08-13'
tags:
- 5e/player_options
- index
type: Index
---

# D&D 5e Player Options Index

## Character Creation Resources
"""
    
    for category_dir in PLAYER_OPTIONS_DIR.iterdir():
        if category_dir.is_dir():
            options = list(category_dir.glob("*.md"))
            if options:
                player_index += f"\n### {category_dir.name.replace('_', ' ')}\n"
                for option in sorted(options):
                    player_index += f"- [[{option.stem}]]\n"
    
    with open(PLAYER_OPTIONS_DIR / "Player_Options_Index.md", 'w') as f:
        f.write(player_index)
    
    print("Created index files")

def update_vault_references(file_movements):
    """Update all references to moved files throughout the vault"""
    
    print(f"Updating {len(file_movements)} file references throughout vault...")
    
    updated_files = 0
    for root, dirs, files in os.walk(VAULT_ROOT):
        # Skip backup directories
        if 'backup' in root.lower() or 'vault_backup' in root:
            continue
            
        for file in files:
            if file.endswith('.md'):
                file_path = Path(root) / file
                
                try:
                    with open(file_path, 'r', encoding='utf-8') as f:
                        content = f.read()
                    
                    original_content = content
                    
                    # Update references
                    for old_path, new_path in file_movements.items():
                        old_name = Path(old_path).stem
                        new_name = Path(new_path).stem
                        
                        # Update wikilinks
                        content = content.replace(f"[[{old_name}]]", f"[[{new_name}]]")
                        content = content.replace(f"[[{old_path}]]", f"[[{new_path}]]")
                    
                    if content != original_content:
                        with open(file_path, 'w', encoding='utf-8') as f:
                            f.write(content)
                        updated_files += 1
                
                except Exception as e:
                    print(f"Error updating {file_path}: {e}")
    
    print(f"Updated references in {updated_files} files")

def main():
    """Main execution function"""
    
    print("D&D Sourcebook Reorganization Tool")
    print("=" * 50)
    
    # Step 1: Reorganize content
    file_movements = reorganize_content()
    
    # Step 2: Create index files
    create_index_files()
    
    # Step 3: Update references
    update_vault_references(file_movements)
    
    # Step 4: Clean up old CLI_Reference directory (optional)
    # Note: Keeping original for now as backup
    
    print(f"\nReorganization complete!")
    print(f"Files moved: {len(file_movements)}")
    print(f"New structure created at: {ORGANIZED_DIR.relative_to(VAULT_ROOT)}")

if __name__ == "__main__":
    main()