# 🎲 Obsidian TTRPG Vault - Experimental

## 📚 Overview
This is a comprehensive Obsidian vault for managing Tabletop Role-Playing Game (TTRPG) campaigns, specifically focused on D&D 5e. The vault contains extensive worldbuilding, campaign management, and session tracking capabilities for the interconnected worlds of **Aquabyssos** (underwater realm) and **Aethermoor** (sky realm).

## 🗂️ Vault Structure

### Core Directories

| Directory | Purpose | Contents |
|-----------|---------|----------|
| **`_INDEXES/`** | Vault navigation | Master indexes and search tools |
| **`_METADATA/`** | System metadata | Vault configuration and tracking |
| **`_SCRIPTS/`** | Automation tools | Python scripts for vault maintenance |
| **`00_System/`** | System resources | Templates, tools, configuration |
| **`01_Adventures/`** | Adventure content | Campaigns, quests, encounters, hooks |
| **`02_Worldbuilding/`** | World lore | Locations, history, cultures, politics |
| **`03_People/`** | Characters | NPCs, factions, organizations |
| **`04_Resources/`** | Game assets | Maps, handouts, visual aids |
| **`05_Rules/`** | Game mechanics | D&D 5e rules, homebrew, references |
| **`06_Sessions/`** | Session management | Session notes, planning, recaps |
| **`07_Player_Resources/`** | Player materials | Handouts, journals, known information |
| **`08_Archive/`** | Archived content | Deprecated/old materials |
| **`09_Performance/`** | Vault analytics | Reports, logs, optimization data |

### Hidden Directories
- **`.obsidian/`** - Obsidian configuration and plugins
- **`.git/`** - Version control
- **`.claude/`** - Claude AI integration settings

## 🌍 Campaign Worlds

### Aquabyssos - The Sunken Empire
An underwater civilization built in the aftermath of a great cataclysm. Features:
- **Three Depth Layers**: Euphotic (surface), Bathyal (middle), Abyssal (deep)
- **Pressure-based society** with depth determining social status
- **Bio-magical technology** using coral and deep-sea adaptations
- **Memory-based currency** and thought-crystal archives
- **Political intrigue** with the Shadow Parliament conspiracy

### Aethermoor - The Sky Realm
A realm of floating islands and aerial cities. Features:
- **Crystal-powered technology** for flight and levitation
- **Wind current navigation** between sky islands
- **Skyforge artifacts** and ancient mysteries
- **Diplomatic tensions** with Aquabyssos
- **Air-based military** and trade networks

## 📊 Vault Statistics
- **Total Files**: 656,025+ files
- **Markdown Notes**: 51,911+ documents
- **NPCs**: 2,500+ detailed characters
- **Quests**: 500+ adventure hooks
- **Sessions**: 200+ session notes
- **Rules**: 3,400+ mechanical references

## 🛠️ Key Features

### Templates
Located in `00_System/templates/`:
- NPC templates with stat blocks
- Quest templates with objectives
- Session planning templates
- Location templates with descriptions
- Combat encounter trackers

### Automation Scripts
Located in `_SCRIPTS/`:
- `intelligent_file_categorizer.py` - Content-based file organization
- `comprehensive_link_integrator.py` - Link management
- `EMERGENCY_RECOVERY.py` - Disaster recovery
- `vault_optimizer.py` - Performance optimization

### Plugin Integration
Key Obsidian plugins configured:
- **Dataview** - Dynamic content queries
- **Templater** - Advanced templating
- **D&D 5e Statblocks** - Monster/NPC stats
- **Initiative Tracker** - Combat management
- **Dice Roller** - In-vault dice rolling
- **Supercharged Links** - Enhanced linking

## 🎯 Quick Start Guide

### For Game Masters
1. **Session Planning**: Start in `06_Sessions/` with session templates
2. **NPC Creation**: Use templates in `00_System/templates/NPC_Template.md`
3. **Quest Design**: Reference `01_Adventures/quests/` for examples
4. **World Details**: Explore `02_Worldbuilding/` for lore

### For Players
1. **Character Info**: Check `07_Player_Resources/` for your materials
2. **Session Recaps**: Find past sessions in `06_Sessions/Daily_Notes/`
3. **Known NPCs**: Browse `07_Player_Resources/Known_NPCs/`
4. **World Lore**: Access `07_Player_Resources/Lore/`

## 🔧 Maintenance

### Regular Tasks
- Run link checker: `python _SCRIPTS/check_link_consistency.py`
- Backup vault: Git commit regularly
- Clean archives: Review `08_Archive/` quarterly
- Update indexes: Regenerate `_INDEXES/` monthly

### Emergency Recovery
If vault issues occur:
1. Check `08_Archive/` for moved content
2. Run `python _SCRIPTS/EMERGENCY_RECOVERY.py`
3. Review `_BACKUPS/` for snapshots
4. Consult `CLAUDE.md` for rules

## 📝 Naming Conventions

### NPCs
- Format: `NPC#####_FirstName_LastName_Title.md`
- Example: `NPC00407_Hestara_Dawnstrider.md`

### Quests
- Main format: `Quest - Title.md`
- Indexed format: `QUEST#####_Type_Title.md`
- Example: `Quest - The Void Conspiracy.md`

### Sessions
- Format: `Session_###_YYYY-MM-DD.md`
- Daily notes: `YYYY-MM-DD.md` in Daily_Notes

### Locations
- Format: `LocationName.md` or `LocationName_Type.md`
- Example: `Aethermoor_Capital.md`

## ⚠️ Important Notes

### Do NOT:
- Reorganize top-level directory structure
- Delete content without archiving
- Create duplicate directories
- Generate files from broken links
- Move sessions or campaigns without permission

### Always:
- Back up before major changes
- Test scripts on small samples
- Preserve campaign continuity
- Document significant changes
- Check CLAUDE.md for rules

## 🔗 Related Documentation
- `CLAUDE.md` - AI assistant instructions
- `00_System/SETUP_GUIDE.md` - Initial setup
- `00_System/MASTER_CONTROL.md` - Vault control panel
- `_METADATA/vault_stats.json` - Current statistics

## 📧 Support
- GitHub Issues: Report problems in version control
- Session Logs: Check `09_Performance/logs/`
- Recovery Scripts: Use `_SCRIPTS/` tools
- Documentation: Refer to `00_System/` guides

---

*Last Updated: 2025-08-16*
*Vault Version: Experimental*
*Compatible with Obsidian 1.5+*