--- tags: [faction, [[Organization|Organization]]]
type: faction
aliases: ["REORGANIZATION COMPLETE"]
created: 2025-08-15
modified: 2025-08-15
status: active
priority: normal
category: 09 Performance
subcategory: Reorganization Complete.Md
related: []
cssclass: standard
publish: false --- # Content Reorganization Complete Generated: ${new Date().to ISOString()} ## Summary Successfully reorganized all generated content from subdirectories to their parent directories with proper tagging. ## Changes Made 1. **Moved Files**: 1,129 files moved from`/Generated/`subdirectories ## Description {#description} Detailed description pending.
2. **Added Tags**: All files now have`tags: [generated]`in frontmatter
3. **Preserved IDs**: Original asset IDs maintained for cross-referencing
4. **Cleaned Structure**: Removed empty Generated directories ## New Structure Instead of:```[[02_Worldbuilding|02_Worldbuilding]]/[[People|People]]/Generated/NPC0001.md 02_Worldbuilding/[[Items|Items]]/Generated/ITEM0001.md```Now:```02_Worldbuilding/People/NPC0001.md (with tags: [generated])
02_Worldbuilding/Items/ITEM0001.md (with tags: [generated])```## Benefits - **Cleaner hierarchy**: No unnecessary subdirectories - **Better integration**: Generated content sits alongside manual content
- **Easy filtering**: Use tag search to find all generated content
- **Maintained organization**: Content still organized by type ## Finding Generated Content To find all generated content in Obsidian: 1. Use tag search:`tag:#generated`2. Or search frontmatter:`tags: generated`## Statistics - [[npcs|npcs]]: 267 files tagged - Items: 150 files tagged
- [[locations|locations]]: 217 files tagged
- [[Quests|Quests]]: 195 files tagged
- Encounters: 100 files tagged
- [[Lore|Lore]]: 100 files tagged
- [[spells|spells]]: 50 files tagged
- Monsters: 50 files tagged Total: 1,129+ files successfully reorganized and tagged --- *Reorganization script: [[scripts|scripts]]/reorganize_generated_content.js* ## Notes {#notes} *Additional notes* #story/lore
#world/location
#world/world
#character/npc
#character/monster
#gameplay/encounter
#gameplay/quest
#resource/item