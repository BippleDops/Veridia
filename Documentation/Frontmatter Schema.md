# Frontmatter Schema Reference

Standardized YAML front-matter keeps the vault searchable, filterable, and automation-ready. The following schemas define **required** fields (bold) and recommended optional fields for each note type. Add additional custom keys as needed, but keep names lowercase and kebab-cased.

---

## 1. Session Journal
```yaml
---
**type**: session
**date**: 2025-05-22  # ISO-8601 date
summary: <one-sentence overview>
players: [Alice, Bob, Clara]
adventure: Curse of Strahd
location: Barovia
campaign-phase: early  
---
```

## 2. NPC / Character
```yaml
---
**type**: npc  # or pc
**name**: Elara Brightwater
alignment: CG
race: Elf
class: Wizard (Bladesinger)
level: 7
organization: Council of Shadowhaven
first-appearance: 2025-01-25
status: alive  # alive, dead, missing, retired
pronouns: she/her
---
```

## 3. Monster / Statblock
```yaml
---
**type**: monster
**cr**: 8
size: Large
species: Giant, Undead
source: Homebrew
role: Brute  # brute, skirmisher, controller, etc.
---
```

## 4. Location (Hub, Region, POI)
```yaml
---
**type**: location
**category**: hub  # hub, region, poi, dungeon, settlement…
parent: [[Island of Skulls]]
climate: Temperate coastal
factions: [Cult of Screams]
---
```

## 5. Quest / Plotline
```yaml
---
**type**: quest
**status**: active  # active, completed, failed
priority: medium    # low/medium/high/critical
objective: Retrieve the Skull of Kings
patron: [[Councillor Elara Brightwater]]
reward: 5,000 gp
---
```

## 6. Item / Artifact
```yaml
---
**type**: item
rarity: rare
attunement: true
cost: 3,000 gp
source: Homebrew
---
```

## 7. Organization / Faction
```yaml
---
**type**: organization
scope: regional  # local/regional/global/planar
ideology: Free trade
leader: [[Flip the Famous]]
---
```

---

### Global Conventions
* **type** is always required and lowercase.
* Dates **must** be ISO-8601 (`YYYY-MM-DD`) for Dataview sorting.
* Use **plural** field names for arrays (`players`, `factions`).
* Prefer references `\[\[Like This\]\]` for intra-vault links (use fully-qualified paths when ambiguous).
* Monetary values in gp unless otherwise noted.

Feel free to extend schemas—automation scripts consider unknown keys as pass-through. 