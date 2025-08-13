---
title: Session Packet Template
type: session_packet_template
status: complete
audience: dm
created: 2025-08-11
updated: '2025-08-13T01:18:31.201928+00:00'
world: Both
tags:
- both
- complete
- session_packet_template
---


# Session Packet — {{session_number}}

Session: {{session_number}}
Date: {{session_date}}
Campaign: {{campaign_name}}

handouts:
  - [[04_Resources/Handouts/Encounters/D-005_Shadow_Bloom_Player]]
  - [[04_Resources/Handouts/Doctrines/Doctrine_Quick_Reference]]

gm_sheets:
  - [[06_GM_Resources/Travel/Encounter_Sheets/D-005_Shadow_Bloom]]
  - [[06_GM_Resources/Travel/Encounter_Sheets/M-L-01_The_Great_Convergence]]

assets:
  - [[03_Mechanics/Vehicles/Vehicles_Index]]

---

## Player Handouts
```dataviewjs
const h = dv.current().handouts ?? [];
for (const link of h) dv.list(link);
```

## GM Sheets
```dataviewjs
const g = dv.current().gm_sheets ?? [];
for (const link of g) dv.list(link);
```

## Extra Assets
```dataviewjs
const a = dv.current().assets ?? [];
for (const link of a) dv.list(link);
```

## Print Checklist
- [ ] Export Player Handouts to PDF
- [ ] Export GM Sheets to PDF
- [ ] Print Doctrine Quick Reference (if needed)

## Session Notes
- Agenda:
- Scene Order:
- Prep:

## Player-Facing Summary

Session Packet Template is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Session Packet Template as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Session Packet Template.

## Adventure Hooks

- A rumor ties Session Packet Template to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Session Packet Template to avert a public scandal.
- A map overlay reveals a hidden approach to Session Packet Template active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
