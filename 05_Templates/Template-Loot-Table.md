---
type: loot-table
tags: [loot, treasure, table]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
table_name: "<% tp.file.title %>"
tier: medium
---

# <% tp.file.title %>

> [!treasure] Loot Table
> **Tier:** `INPUT[inlineSelect(option(mundane), option(low), option(medium), option(high), option(legendary)):tier]`
> **Context:** `INPUT[text:context]`

## 🎲 Quick Roll

`dice: [[<% tp.file.title %>#Main Table]]`

## Main Table

| d100 | Treasure | Value | Rarity |
|------|----------|-------|--------|
| 01-10 | `dice: [[#Coins]]` | - | Common |
| 11-20 | `dice: [[#Trade Goods]]` | 2d10 gp | Common |
| 21-30 | `dice: [[#Gems]]` | 4d10 gp | Uncommon |
| 31-40 | `dice: [[#Art Objects]]` | 2d6 × 10 gp | Uncommon |
| 41-50 | `dice: [[#Nautical Equipment]]` | 3d10 gp | Common |
| 51-60 | `dice: [[#Maps & Charts]]` | Special | Rare |
| 61-70 | `dice: [[#Potions]]` | 50-300 gp | Uncommon |
| 71-80 | `dice: [[#Scrolls]]` | 25-150 gp | Uncommon |
| 81-85 | `dice: [[#Minor Magic Items]]` | 100-500 gp | Rare |
| 86-90 | `dice: [[#Major Magic Items]]` | 500-5000 gp | Very Rare |
| 91-95 | `dice: [[#Unique Items]]` | Special | Very Rare |
| 96-99 | `dice: [[#Legendary Items]]` | Priceless | Legendary |
| 100 | `dice: [[#Artifact]]` | Priceless | Artifact |

## Coins

| d12 | Coin Type | Amount |
|-----|-----------|---------|
| 1-4 | Copper pieces | 5d20 |
| 5-7 | Silver pieces | 3d20 |
| 8-10 | Gold pieces | 2d10 |
| 11 | Platinum pieces | 1d6 |
| 12 | Ancient coins | 2d4 (worth 10 gp each) |

## Trade Goods

| d20 | Item | Weight | Value |
|-----|------|--------|-------|
| 1-2 | Barrel of salted fish | 50 lbs | 5 gp |
| 3-4 | Cask of rum | 40 lbs | 15 gp |
| 5-6 | Bolt of silk | 5 lbs | 25 gp |
| 7-8 | Exotic spices | 1 lb | 30 gp |
| 9-10 | Rare dyes | 1 lb | 20 gp |
| 11-12 | Fine wine | 10 lbs | 25 gp |
| 13-14 | Preserved meats | 20 lbs | 10 gp |
| 15-16 | Whale oil | 5 lbs | 15 gp |
| 17-18 | Tobacco | 5 lbs | 20 gp |
| 19 | Exotic furs | 10 lbs | 50 gp |
| 20 | Rare incense | 1 lb | 40 gp |

## Gems

| d20 | Gem Type | Base Value |
|-----|----------|------------|
| 1-4 | Agate | 10 gp |
| 5-8 | Quartz | 10 gp |
| 9-11 | Turquoise | 25 gp |
| 12-14 | Onyx | 50 gp |
| 15-16 | Pearl | 100 gp |
| 17-18 | Coral | 100 gp |
| 19 | Sapphire | 500 gp |
| 20 | Diamond | 1000 gp |

## Art Objects

| d12 | Art Object | Value |
|-----|------------|-------|
| 1-2 | Silver chalice | 25 gp |
| 3-4 | Carved bone statuette | 25 gp |
| 5-6 | Gold locket | 50 gp |
| 7-8 | Painted portrait | 75 gp |
| 9-10 | Silver-framed mirror | 100 gp |
| 11 | Jeweled dagger | 250 gp |
| 12 | Ancient tapestry | 500 gp |

## Nautical Equipment

| d10 | Equipment | Value |
|-----|-----------|-------|
| 1-2 | Spyglass | 20 gp |
| 3-4 | Navigator's tools | 25 gp |
| 5-6 | Ship's compass | 30 gp |
| 7-8 | Waterproof lantern | 15 gp |
| 9 | Astrolabe | 50 gp |
| 10 | Ship's chronometer | 100 gp |

## Maps & Charts

| d8 | Map Type | Special Properties |
|----|----------|-------------------|
| 1-2 | Trade route map | Reveals safe passages |
| 3-4 | Treasure map | Leads to buried treasure |
| 5 | Star chart | +2 to navigation checks |
| 6 | Island survey | Details of uncharted island |
| 7 | Ancient sea chart | Pre-Sundering routes |
| 8 | Pirate's map | Secret cove locations |

## Potions

| d10 | Potion | Value |
|-----|--------|-------|
| 1-3 | Healing potion | 50 gp |
| 4-5 | Water breathing | 100 gp |
| 6 | Climbing | 75 gp |
| 7 | Greater healing | 150 gp |
| 8 | Water walking | 200 gp |
| 9 | Invisibility | 250 gp |
| 10 | Superior healing | 300 gp |

## Scrolls

| d8 | Spell Scroll | Level | Value |
|----|--------------|-------|-------|
| 1-2 | Comprehend languages | 1st | 25 gp |
| 3-4 | Detect magic | 1st | 25 gp |
| 5 | Fog cloud | 1st | 50 gp |
| 6 | Gust of wind | 2nd | 100 gp |
| 7 | Water breathing | 3rd | 150 gp |
| 8 | Control water | 4th | 200 gp |

## Minor Magic Items

| d10 | Item | Properties | Value |
|-----|------|------------|-------|
| 1-2 | Driftglobe | Daylight on command | 150 gp |
| 3-4 | Immovable rod | Holds 8000 lbs | 200 gp |
| 5 | Bag of holding | 500 lbs capacity | 300 gp |
| 6 | Cloak of billowing | Dramatic effect | 100 gp |
| 7 | Rope of climbing | Climbs on command | 250 gp |
| 8 | Decanter of endless water | Produces water | 400 gp |
| 9 | Wind fan | Create gust of wind | 350 gp |
| 10 | Mariner's armor | Swim speed | 500 gp |

## Major Magic Items

| d8 | Item | Properties | Value |
|----|------|------------|-------|
| 1 | Trident of fish command | Control aquatic beasts | 1000 gp |
| 2 | Boots of speed | Double speed | 2000 gp |
| 3 | Ring of water walking | Walk on liquid | 1500 gp |
| 4 | Cloak of the manta ray | Underwater breathing | 1000 gp |
| 5 | Folding boat | Instant vessel | 3000 gp |
| 6 | Cap of water breathing | Breathe underwater | 800 gp |
| 7 | Pearl of power | Regain spell slot | 2500 gp |
| 8 | Necklace of adaptation | Breathe anywhere | 3500 gp |

## Unique Items

| d6 | Item | Properties |
|----|------|------------|
| 1 | Captain's log of famous pirate | Historical value, quest hooks |
| 2 | Sealed bottle with message | Quest starter, mystery |
| 3 | Strange compass | Points to nearest magic |
| 4 | Mermaid's tear | Component for powerful rituals |
| 5 | Black spot coin | Pirate's curse/blessing |
| 6 | Ship in a bottle | Becomes real ship 1/month |

## Legendary Items

| d4 | Item | Properties |
|----|------|------------|
| 1 | Stormcaller's Trident | Control weather at sea |
| 2 | Crown of the Depths | Command sea creatures |
| 3 | Chart of Infinite Horizons | Teleport between ports |
| 4 | Blackbeard's Cutlass | +3, frightening presence |

## Artifact

| d4 | Artifact | Properties |
|----|----------|------------|
| 1 | Eye of the Kraken | Summon/control krakens |
| 2 | Poseidon's Conch | Part the seas |
| 3 | The First Compass | Always find what you seek |
| 4 | Heart of the Ocean | Control all water elementals |

---

## Usage Notes

### Rolling on This Table
1. Roll d100 for main category
2. Roll on appropriate sub-table
3. Adjust value for party level:
   - Level 1-4: ×0.5
   - Level 5-10: ×1
   - Level 11-16: ×2
   - Level 17-20: ×5

### Customization
- **Pirate Hoard**: +20 to rolls, reroll results under 20
- **Merchant Ship**: Focus on trade goods and coins
- **Sunken Treasure**: +10 to magic item rolls
- **Noble's Cache**: +15 to art objects and gems

### Quick Hoard Generation
- **Small**: 1 roll
- **Medium**: 3 rolls
- **Large**: 5 rolls
- **Legendary**: 7 rolls + 1 guaranteed rare+