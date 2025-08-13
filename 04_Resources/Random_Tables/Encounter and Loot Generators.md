---
created: '2025-08-11'
realm: Generic
status: complete
tags:
- content/lore
- generators
- random
- status/in-progress
- tables
- world/both
type: Lore
updated: '2025-08-12T23:37:41.258207'
world: Both
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
## Aquabyssos Undersea Encounters (d20)
Roll: `dice: 1d20|Undersea Encounter`

| d20 | Result |
|-----|--------|
| 1 | Luminous kelp forest; foraging test yields `dice: 1d4|1=None,2=Herbs,3=Pearls,4=Rare Coral` |
| 2 | Patrol of [[01_Campaigns/Aquabyssos/Factions/The Pearl Guard]] |
| 3 | Migrating manta shoal; stealth test to avoid startling |
| 4 | Abandoned depth-harvester; salvage `dice: 2d6*10|Scrap (gp)` |
| 5 | Memory tide eddies; Wis save or relive past session |
| 6 | [[02_Worldbuilding/People/Senator Glaucus]] scouts |
| 7 | Void seep; environmental hazard (necrotic trickle) |
| 8 | Traders from Abyssos Prime; rumor table |
| 9 | Deep Mother cult sign; leads to side quest |
| 10 | Crystal bloom field; component harvest |
| 11 | Tidecrawler pack hunts |
| 12 | Singing stones; puzzle opens cache |
| 13 | Leviathan shadow overhead; morale test |
| 14 | Parley with The Crimson Pearl broker |
| 15 | Ancient gate; requires three Depth Seals |
| 16 | Parliament courier ambush |
| 17 | Whirlpool trench; navigation check |
| 18 | Friendly mer artisan offers trade |
| 19 | Abyssal rift; optional boss hook |
| 20 | Blessing of Oceanus; boons for a day |

## Aethermoor Urban Events (d12)
Roll: `dice: 1d12|Urban Event`

| d12 | Result |
|-----|--------|
| 1 | Street performance distracts crowd; pickpocket `dice: 1d20+3` vs passive |
| 2 | Patrol questions strangers about recent theft |
| 3 | Merchant caravan sale; 10% discount on common goods |
| 4 | Noble procession blocks main road |
| 5 | Rumor surge about [[02_Worldbuilding/Places/Port Meridian]] docks |
| 6 | Guild recruitment drive; offers quest hook |
| 7 | Sudden storm; disadvantage on ranged until cleared |
| 8 | Festival lottery; `dice: 1d6|1-3 Nothing,4 Trinket,5 Tool,6 Potion` |
| 9 | Alley scuffle reveals secret society mark |
| 10 | Lost child seeks escort |
| 11 | Black market invitation card |
| 12 | Fire outbreak; help or exploit |

## Quick Loot Buttons
- Coin Purse: `dice: 3d6*10|Gold (gp)`
- Gem Cache: `dice: 2d6*25|Gem Value (gp)`
- Scroll Rarity: `dice: 1d6|1-3 Common,4-5 Uncommon,6 Rare`
Party level modifier: `dice: 2d6*{level}|Parcel (gp)`

## Notes
- Use alongside `Item_Catalog.base` for ownership assignment.
- For underwater/urban variants, adapt tables by realm.

