---
title: Session Packet Template
type: session_packet_template
status: complete
audience: dm
created: 2025-08-11
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
