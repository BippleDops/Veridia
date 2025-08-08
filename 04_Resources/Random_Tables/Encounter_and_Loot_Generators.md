---
tags: [random, tables]
type: generators
realm: Generic
---

# 🎲 Encounter & Loot Generators

## Encounters (d100)
Roll: `dice: 1d100|Encounter Roll`

| d100 | Result |
|------|--------|
| 01–10 | Minor environmental hazard |
| 11–25 | Patrol or scout group |
| 26–40 | Merchant or traveler |
| 41–55 | Local creature pack |
| 56–70 | Terrain feature/Discovery |
| 71–85 | Hostile faction unit |
| 86–95 | Elite enemy or lieutenant |
| 96–00 | Boss-level encounter |

Quick difficulty: `dice: 1d4|1=Easy,2=Medium,3=Hard,4=Deadly`

## Loot (d100)
Roll: `dice: 1d100|Loot Roll`

| d100 | Result |
|------|--------|
| 01–15 | Coins only (2d10×10 gp) → `dice: 2d10*10|Gold (gp)` |
| 16–35 | Coins + common item |
| 36–60 | Coins + 1–2 consumables |
| 61–80 | Coins + uncommon item |
| 81–95 | Coins + rare item |
| 96–00 | Treasure cache + rare/very rare |

Consumables: `dice: 1d6|1=Healing Potion,2=Antitoxin,3=Oil,4=Scroll L1,5=Scroll L2,6=Elixir`

## Treasure Parcels
Party level modifier: `dice: 2d6*{level}|Parcel (gp)`

## Notes
- Use alongside `Item_Catalog.base` for ownership assignment.
- For underwater/urban variants, adapt tables by realm.

