---
enhanced: true
tags: [enhanced, 07_player_resources]
created: 2025-08-15T12:24:41.126316
modified: 2025-08-15T12:24:41.126318
aliases: [Player Dashboard]
---

# Player Dashboard

> *An opportunity for greatness awaits...* This remarkable element adds depth and intrigue to any campaign.


## Overview

Comprehensive overview of this content.

--- title: Player_Dashboard
type: note
tags:
- note created: '2025-01-15'
modified: '2025-01-15'
- -- # Player_Dashboard - -- ## Description

**Details**: Rich sensory elements bring this to life. {#description} Detailed description pending.
title: Player Dashboard
type: player-resource
tags:
- player-resource
- character
- active
- playe
*The [texture] surface feels [description] to the touch.*r
- resource created: 2025-08-14
modified: '2025-08-14'
- -- ## 🔧 Deep Evaluation Improvements * 20 targeted improvements identified* ### Connection Improvements - Add cross-references to related notes ### Enhancement Improvements - Add 07_Player_Resources-specific enhancement ## Character Sheets```dataview TABLE WITHOUT ID file.link as Character, class as Class, level as Level, hp as HP, ac as AC FROM "05_Player_Resources/Characters" WHERE type = "pc"```## Session Recaps file.link as Session, date as Date, recap as "Quick Summary" FROM "01_Adventures" WHERE type = "session" AND player-visible = true SORT date DESC LIMIT 5 ## Available Quests LIST FROM #quest WHERE status = "available" AND player-visible = true ## Party Inventory item as Item, quantity as Qty, carried-by as "Carried By" FROM "05_Player_Resources/Inventory" ## Known NPCs file.link as NPC, relationship as Relationship, location as "Last Seen" FROM "02_Worldbuilding/People" WHERE player-known = true SORT relationship DESC ## Maps & Locations - [[World Map|World Map]]
- [[Current Region|Current Region]]
- [[Known Locations|Known Locations]] - -- * Player dashboard - auto-updating* ## Related * Links to related content will be added here.* ## DM Notes * Private notes for campaign integration:* - Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes ## 07_Player_Resources Specific Content Contextual improvement based on 07_Player_Resources ## Alternate Descriptions - **First Impression**: Initial appearance
- **Closer Look**: Detailed examination
- **Hidden Details**: Secret aspects ## Random Table | d6 | Result |
| status: active
aliases: ["Player Dashboard"]
priority: normal
category: 07 Player Resources
subcategory: Player Dashboard.Md
cssclass: standard
publish: false --- -|--------|
| 1 | Option A |
| 2 | Option B |
| 3 | Option C |
| 4 | Option D |
| 5 | Option E |
| 6 | Option F | ## Player Tips > 🎮 **Strategy**: How to approach this content > Work together and communicate ## Notes {#notes} *Additional notes* #story/story
#world/location
#world/world
#character/npc
#character/character
#gameplay/session
#gameplay/adventure
#gameplay/quest
#resource/item
#meta/reference
## Secrets & Mysteries
- **Hidden Truth**: Not everything is as it appears
- **Unanswered Questions**: What remains unknown
- **Future Revelations**: Discoveries yet to be made


**Key Question**: What role will this play in the greater story?

*Adventure awaits those brave enough to seek it.*

## Visual References
![[04_Resources/Assets/Misc/07_player_resources_visual_handouts_guild_seal_document_silverscale_consortiu.png]]
![[04_Resources/Assets/Misc/faction_overview_for_players.png]]
![[04_Resources/Assets/Misc/07_player_resources_faction_guide_md.png]]
