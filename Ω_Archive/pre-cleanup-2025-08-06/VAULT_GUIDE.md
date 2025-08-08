# TTRPG Vault Operations Manual

## Folder Structure

- **00_Dashboard**: Campaign overview, quick access, and this guide.
- **01_Campaigns**: Contains individual campaign folders.
  - **[Campaign Name]**: A folder for each campaign.
    - **Sessions**: Session notes.
    - **Player_Characters**: Player character sheets.
    - **NPCs**: Non-player character sheets.
    - **Locations**: Location notes.
    - **Quests**: Quest logs.
    - **Combat_Encounters**: Combat encounter notes.
- **02_Worldbuilding**: World-level information.
  - **Atlas**: Maps and geographical information.
  - **Lore**: Historical and cultural information.
  - **Factions**: Factions and organizations.
  - **Timeline**: Campaign timeline.
- **03_Rules_Reference**: Game rules and mechanics.
  - **Core_Rules**: Core rulebooks.
  - **Homebrew**: Homebrew rules and content.
  - **Quick_Reference**: Quick reference guides.
- **04_Resources**: Random tables, name generators, and maps.
- **05_Templates**: Note templates for characters, sessions, etc.
- **Ω_Archive**: Archived notes and campaigns.
- **Ω_Assets**: Images, maps, and other media.
- **Ω_System**: System files, scripts, and configurations.

## Template Usage

- **Template-Session**: Use for new session notes.
- **Template-Character**: Use for new player characters and NPCs.
- **Template-Location**: Use for new locations.
- **Template-Quest**: Use for new quests.
- **Template-Session-Prep**: Use to prepare for a session.
- **Template-Post-Session**: Use to clean up after a session.

## Automation

This vault uses the Templater plugin to automate the creation of new notes. To use the automation scripts, simply open a new note and then open the command palette (CMD+P) and type "Templater". You will see a list of available scripts. Select the script you want to use and follow the prompts.

- **New Session**: Creates a new session note with the appropriate frontmatter and template.
- **New NPC**: Creates a new NPC note with the appropriate frontmatter and template.

## Recommended Plugins

This vault is configured to work with the following plugins:

- **Fantasy Calendar**: For tracking campaign time. Calendars are stored in `04_Resources/Calendars`.
- **Obsidian Leaflet**: For creating interactive maps. Maps are stored in `02_Worldbuilding/Atlas`.
- **Dice Roller**: For rolling dice in your notes. Example: `dice: 1d20+5`
- **Fantasy Statblocks**: For creating D&D 5e statblocks.
- **TTRPG Convert CLI User Interface**: For importing D&D 5e content.
- **DnD UI Toolkit**: For creating character sheets.
