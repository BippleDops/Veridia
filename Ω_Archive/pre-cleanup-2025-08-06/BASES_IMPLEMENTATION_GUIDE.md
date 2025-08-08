# Obsidian TTRPG Bases Implementation Guide

## Overview
This vault now includes Obsidian Bases (v1.9.0+) configuration following Joshua Plunkett's TTRPG system methodology. Bases provide native database functionality without plugins.

## Important Notes
- **Obsidian Bases is currently in BETA** - Requires Obsidian Insider access (paid early access)
- Only table views are currently available
- No plugin API exists yet for Bases

## Installed Base Files

### 1. combat-tracker.base
- **Purpose:** Track active combat encounters
- **Trigger Tag:** `encounter`
- **Key Properties:** `combat_status`, `initiative`, `current_hp`, `ac`
- **Usage:** Embed with `![[combat-tracker.base]]`

### 2. npc-roster.base
- **Purpose:** Manage all NPCs with relationships
- **Trigger Tag:** `npc`
- **Key Properties:** `first_name`, `last_name`, `location`, `faction`, `disposition`
- **Usage:** Embed with `![[npc-roster.base]]`

### 3. quest-tracker.base
- **Purpose:** Track active and completed quests
- **Trigger Tag:** `quest`
- **Key Properties:** `quest_giver`, `status`, `priority`, `deadline`, `reward`
- **Usage:** Embed with `![[quest-tracker.base]]`

### 4. campaign-dashboard.base
- **Purpose:** Overview of sessions and campaign events
- **Trigger Tags:** `session`, `campaign-event`, `milestone`
- **Key Properties:** `date`, `type`, `session`
- **Usage:** Embed with `![[campaign-dashboard.base]]`

## How to Use

### Step 1: Use the Templates
Templates are available in `/05_Templates/`:
- `NPC_Template.md` - For creating NPCs
- `Encounter_Template.md` - For combat encounters
- `Quest_Template.md` - For quests
- `Session_Template.md` - For session notes

### Step 2: Tag Your Notes
Always include the appropriate tag in your note's frontmatter:
```yaml
tags: [npc]  # or encounter, quest, session, etc.
```

### Step 3: Fill in Properties
Use the frontmatter properties that the Bases expect:
```yaml
---
tags: [npc]
first_name: "Gareth"
last_name: "Ironforge"
location: "Market District"
faction: "Merchant's Guild"
disposition: 5
---
```

### Step 4: Embed Bases in Your Notes
To see your data in action, embed a Base in any note:
```markdown
## Active Combat Tracker
![[combat-tracker.base]]

## NPC Roster
![[npc-roster.base]]
```

## Example Dashboard Note

Create a dashboard note like this:

```markdown
# Campaign Dashboard

## Active Quests
![[quest-tracker.base]]

## Combat Tracker
![[combat-tracker.base]]

## NPCs in Current Location
![[npc-roster.base]]

## Recent Sessions
![[campaign-dashboard.base]]
```

## Recommended Workflow

1. **Session Prep:**
   - Create NPCs using the NPC template
   - Set up encounters with the Encounter template
   - Update quest statuses

2. **During Session:**
   - Change `combat_status` to "active" when combat starts
   - Update HP and conditions in real-time
   - Take notes in your session document

3. **Post-Session:**
   - Update quest progress
   - Change NPC dispositions based on player actions
   - Archive completed quests
   - Set combat_status back to "inactive"

## Integration with Existing Plugins

These Bases work alongside your existing plugins:
- **Templater:** Auto-generate entries that Bases can track
- **Meta Bind:** Create buttons to update properties
- **TTRPG Statblocks:** Continue using for detailed stat blocks
- **Initiative Tracker:** Can work in parallel with combat-tracker.base
- **Fantasy Calendar:** Track dates that Bases can reference
- **Leaflet:** Create maps with embedded Base views

## Troubleshooting

If Bases aren't showing data:
1. Check that notes have the correct tags
2. Verify property names match exactly (case-sensitive)
3. Ensure you're using Obsidian v1.9.0+ with Insider access
4. Check that .base files are in the vault root

## Future Enhancements

When Bases exits beta:
- More view types (cards, gallery, calendar)
- Plugin API for deeper integration
- More complex filtering and formulas
- Custom styling options

## Resources

- Joshua Plunkett's Patreon: patreon.com/JPlunkett
- Obsidian TTRPG Tutorials: obsidianttrpgtutorials.com
- Obsidian Discord #tabletop-games channel
- GitHub: Obsidian-TTRPG-Community

---
*Last Updated: August 2025*
*Based on Obsidian Bases v1.9.0 (Beta)*