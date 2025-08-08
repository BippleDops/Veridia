---
type: random-encounter-table
tags: [encounter, random, table]
aliases: []
created: <% tp.date.now("YYYY-MM-DD HH:mm") %>
modified: <% tp.date.now("YYYY-MM-DD HH:mm") %>
table_name: "<% tp.file.title %>"
environment: sea
tier: medium
---

# <% tp.file.title %>

> [!dice] Random Encounter Table
> **Environment:** `INPUT[inlineSelect(option(sea), option(coast), option(city), option(wilderness), option(dungeon), option(port)):environment]`
> **Tier:** `INPUT[inlineSelect(option(low), option(medium), option(high)):tier]`
> **Time:** `INPUT[inlineSelect(option(day), option(night), option(any)):time]`

## 🎲 Quick Roll

`dice: [[<% tp.file.title %>#Encounter Table]]`

## Encounter Check

**Frequency:** Check every `INPUT[inlineSelect(option(hour), option(2 hours), option(4 hours), option(watch)):frequency]`
**Base Chance:** `INPUT[inlineSelect(option(1 in 6), option(2 in 6), option(3 in 6)):chance]`

### Modifiers
- [ ] **High Traffic Area:** +1
- [ ] **Bad Weather:** +1
- [ ] **Night Time:** +1
- [ ] **Making Noise:** +1
- [ ] **Using Light:** +1
- [ ] **Pursued:** +2

## Encounter Table

| d100 | Encounter | Type | Difficulty |
|------|-----------|------|------------|
| 01-05 | **Dolphins Playing** | Social | Friendly |
| 06-10 | **Merchant Vessel** | Social | Neutral |
| 11-15 | **Fishing Boat** | Social | Neutral |
| 16-20 | **Naval Patrol** | Social | Cautious |
| 21-25 | **Floating Debris** | Exploration | - |
| 26-30 | **Message in a Bottle** | Mystery | - |
| 31-35 | **Sea Birds** | Environmental | - |
| 36-40 | **Fog Bank** | Environmental | Hazard |
| 41-45 | **Storm Approaching** | Environmental | Hazard |
| 46-50 | **Strange Current** | Environmental | Mystery |
| 51-55 | **Pirate Scouts** | Combat | Easy |
| 56-60 | **Sea Harpies** | Combat | Medium |
| 61-65 | **Sahuagin Raiders** | Combat | Medium |
| 66-70 | **Ghost Ship** | Mystery | Hard |
| 71-75 | **Kraken Spawn** | Combat | Hard |
| 76-80 | **Pirate Ship** | Combat | Deadly |
| 81-85 | **Sea Hag Coven** | Combat | Hard |
| 86-90 | **Dragon Turtle** | Combat/Social | Deadly |
| 91-94 | **Maelstrom** | Environmental | Deadly |
| 95-97 | **Island Appears** | Exploration | Special |
| 98-99 | **Portal Opens** | Mystery | Special |
| 100 | **Ancient Leviathan** | Special | Legendary |

## Detailed Encounters

### 01-05: Dolphins Playing
**Description:** A pod of 2d6 dolphins approach the ship, playing in the bow wave.
**Interaction:** 
- Friendly creatures, may warn of danger
- DC 12 Animal Handling for information
- May lead to treasure (10% chance)

### 06-10: Merchant Vessel
**Ship:** `dice: [[#Merchant Ships]]`
**Captain Attitude:** `dice: [[#NPC Attitudes]]`
**Cargo:** `dice: [[#Trade Goods]]`
**Potential:**
- Trade opportunities
- News and rumors
- Passage booking
- Quest hooks

### 11-15: Fishing Boat
**Type:** Small local vessel with 1d4+1 crew
**Activity:** `dice: [[#Fishing Activity]]`
**Mood:** Generally friendly unless catches are poor
**Information:** Local knowledge, weather warnings, recent sightings

### 16-20: Naval Patrol
**Nation:** `dice: [[#Naval Forces]]`
**Ship Type:** `dice: [[#Warship Types]]`
**Mission:** `dice: [[#Naval Missions]]`
**Inspection Chance:** 60% (higher if suspicious)

### 21-25: Floating Debris
**Origin:** `dice: [[#Debris Source]]`
**Contents:** 
- 30% chance of survivors
- 40% chance of salvage
- 20% chance of danger
- 10% chance of treasure

### 26-30: Message in a Bottle
**Age:** `dice: [[#Message Age]]`
**Content:** `dice: [[#Message Types]]`
**Language:** `dice: [[#Languages]]`
**Authenticity:** 70% real, 30% hoax/trap

### 31-35: Sea Birds
**Type:** `dice: [[#Bird Types]]`
**Behavior:** 
- Normal: Just passing
- Circling: Dead ahead
- Fleeing: Danger behind
- Landing: Storm coming

### 36-40: Fog Bank
**Density:** `dice: [[#Fog Density]]`
**Duration:** 1d6 hours
**Special Features:**
- 20% chance of voices
- 10% chance of ghost ship
- 30% chance of getting lost

### 41-45: Storm Approaching
**Severity:** `dice: [[#Storm Strength]]`
**Time to Impact:** 1d4 hours
**Duration:** 2d6 hours
**Complications:** `dice: [[#Storm Complications]]`

### 46-50: Strange Current
**Direction:** Pulls ship off course by 1d6 miles
**Strength:** DC 15 to navigate against
**Cause:**
- Natural phenomenon
- Magical effect
- Creature below
- Portal nearby

### 51-55: Pirate Scouts
**Ship:** Small, fast sloop
**Crew:** 2d4+2 pirates
**Tactics:** 
- Observe and report
- Flee if challenged
- May attempt boarding if target seems weak

### 56-60: Sea Harpies
**Number:** 1d4+1 harpies
**Tactics:** 
- Luring song (DC 13 WIS save)
- Attempt to carry off isolated crew
- Nest nearby on rocky outcrop

### 61-65: Sahuagin Raiders
**Force:** 2d6 sahuagin + 1 priestess
**Mount:** 50% chance of sharks
**Goal:** Slaves, food, or revenge
**Treasure:** Coral jewelry, pearls

### 66-70: Ghost Ship
**Appearance:** `dice: [[#Ghost Ship Types]]`
**Crew:** Spectral, corporeal undead, or empty
**Curse:** `dice: [[#Ship Curses]]`
**Treasure:** Cursed but valuable

### 71-75: Kraken Spawn
**Type:** Young kraken or giant octopus
**Behavior:** Aggressive but may flee if seriously hurt
**Tactics:** Grapple ship, grab crew
**Weakness:** Fire, lightning

### 76-80: Pirate Ship
**Name:** `dice: [[#Pirate Ship Names]]`
**Captain:** `dice: [[#Pirate Captains]]`
**Crew Strength:** 3d10+10
**Demands:** Surrender, tribute, or combat

### 81-85: Sea Hag Coven
**Number:** 3 sea hags
**Lair:** Nearby shipwreck or sea cave
**Minions:** 2d4 merrow
**Goals:** Corruption, deals, or dinner

### 86-90: Dragon Turtle
**Age:** `dice: [[#Dragon Turtle Age]]`
**Disposition:** `dice: [[#Dragon Moods]]`
**Demand:** Tribute (500-5000 gp)
**Alternative:** Riddle contest or service

### 91-94: Maelstrom
**Size:** 1d4 × 100 feet across
**Pull Strength:** DC 18 to escape
**Duration:** 2d6 hours
**Center:** Portal, monster, or treasure

### 95-97: Island Appears
**Type:** `dice: [[#Mysterious Islands]]`
**Duration:** 1d6 days before vanishing
**Inhabitants:** `dice: [[#Island Inhabitants]]`
**Secret:** Always has one

### 98-99: Portal Opens
**Destination:** `dice: [[#Portal Destinations]]`
**Stability:** Lasts 1d10 minutes
**Size:** Ship can fit (barely)
**Risk:** 25% chance of complications

### 100: Ancient Leviathan
**Type:** Kraken, dragon turtle ancient, or unique
**Attitude:** Curious, hungry, or divine messenger
**Demand:** Epic quest or terrible price
**Reward:** Legendary treasure or boon

## Sub-Tables

### Merchant Ships
| d6 | Ship Type |
|----|-----------|
| 1-2 | Small trader |
| 3-4 | Large merchantman |
| 5 | Luxury vessel |
| 6 | Foreign trader |

### NPC Attitudes
| d6 | Attitude |
|----|----------|
| 1 | Hostile/Suspicious |
| 2 | Unfriendly |
| 3-4 | Neutral |
| 5 | Friendly |
| 6 | Helpful |

### Trade Goods
| d8 | Cargo Type |
|----|------------|
| 1 | Food supplies |
| 2 | Textiles |
| 3 | Metal goods |
| 4 | Exotic spices |
| 5 | Slaves (illegal) |
| 6 | Weapons |
| 7 | Magic components |
| 8 | Mysterious crates |

### Fishing Activity
| d4 | Activity |
|----|----------|
| 1 | Setting nets |
| 2 | Hauling catch |
| 3 | Repairing damage |
| 4 | Fleeing something |

### Naval Forces
| d6 | Nation |
|----|---------|
| 1-2 | Shadowhaven |
| 3 | Port Celeste |
| 4 | Ironhold |
| 5 | Port Verran |
| 6 | Unknown/Foreign |

### Storm Strength
| d6 | Severity |
|----|----------|
| 1-2 | Light (disadvantage on checks) |
| 3-4 | Moderate (DC 12 to maintain course) |
| 5 | Severe (DC 15, damage possible) |
| 6 | Hurricane (DC 18, damage likely) |

### Ghost Ship Types
| d6 | Type |
|----|------|
| 1 | Burned hulk |
| 2 | Pristine but empty |
| 3 | Rotting but sailing |
| 4 | Translucent phantom |
| 5 | Time-displaced |
| 6 | Eldritch horror |

### Mysterious Islands
| d8 | Island Type |
|----|-------------|
| 1 | Tropical paradise |
| 2 | Skull-shaped rock |
| 3 | Floating forest |
| 4 | Crystal formation |
| 5 | Ruins visible |
| 6 | Perpetual storm |
| 7 | Time bubble |
| 8 | Illusion |

## Weather Conditions

Roll d12 when encounter occurs:

| d12 | Weather |
|-----|---------|
| 1-3 | Clear skies |
| 4-5 | Light wind |
| 6-7 | Strong wind |
| 8-9 | Light rain |
| 10 | Heavy rain |
| 11 | Fog |
| 12 | Storm |

## Time of Day Effects

### Dawn (5-7 AM)
- +10% chance of fishing boats
- Advantage on spotting encounters

### Day (7 AM - 5 PM)
- Normal encounter chances
- Clear visibility

### Dusk (5-7 PM)
- +10% chance of pirates
- Disadvantage on perception

### Night (7 PM - 5 AM)
- +20% chance of hostile encounters
- -20% chance of merchants
- Disadvantage on all checks

## Distance and Approach

| d6 | Starting Distance |
|----|-------------------|
| 1 | Surprise! (30 feet) |
| 2 | Close (300 feet) |
| 3-4 | Medium (1000 feet) |
| 5 | Far (1 mile) |
| 6 | Horizon (3 miles) |

## Reaction Guidelines

### Initial Reaction Check
2d6 + CHA modifier:
- 2-3: Hostile
- 4-5: Unfriendly  
- 6-8: Neutral
- 9-10: Friendly
- 11-12: Helpful

### Modifiers
- Flying pirate flag: -4
- Flying national flag: +2
- Damaged ship: +1 (sympathy) or -2 (easy prey)
- Obvious weapons: -2
- Peaceful approach: +2