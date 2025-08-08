---
type: system-config
tags: [combat, tracker, gm-tools]
---

# Combat Tracker Configuration

## Initiative Order Display

```dataview
TABLE WITHOUT ID
  "🎯 " + initiative AS "Init",
  file.link AS "Combatant",
  "❤️ " + current_hp + "/" + max_hp AS "HP",
  ac AS "AC",
  status_effects AS "Conditions",
  notes AS "Notes"
FROM #combat-active OR #in-combat
WHERE in_combat = true
SORT initiative DESC
```

## Combat Statistics Panel

```dataviewjs
// Combat round tracker
const combat = dv.current();
const round = combat.combat_round || 1;
const turn = combat.current_turn || 1;

dv.paragraph(`## Round ${round} - Turn ${turn}`);

// Active effects summary
const activeEffects = dv.pages('#in-combat')
  .where(p => p.status_effects && p.status_effects.length > 0)
  .array();

if (activeEffects.length > 0) {
  dv.header(3, "⚡ Active Effects");
  activeEffects.forEach(combatant => {
    dv.paragraph(`**${combatant.file.name}:** ${combatant.status_effects.join(", ")}`);
  });
}

// Concentration tracking
const concentrating = dv.pages('#in-combat')
  .where(p => p.is_concentrating === true)
  .array();

if (concentrating.length > 0) {
  dv.header(3, "🧠 Concentration");
  concentrating.forEach(caster => {
    dv.paragraph(`**${caster.file.name}:** ${caster.concentration_spell || "Unknown"}`);
  });
}
```

## Quick Actions Toolbar

> [!multi-column]
>
>> [!tip]+ ### Roll Initiative
>> ```button
>> name Roll All NPCs
>> type command
>> action Dice Roller: Roll 1d20 + modifier
>> ```
>
>> [!warning]+ ### Status Effects
>> - [ ] Blinded
>> - [ ] Charmed
>> - [ ] Deafened
>> - [ ] Frightened
>> - [ ] Grappled
>> - [ ] Incapacitated
>> - [ ] Invisible
>> - [ ] Paralyzed
>> - [ ] Petrified
>> - [ ] Poisoned
>> - [ ] Prone
>> - [ ] Restrained
>> - [ ] Stunned
>> - [ ] Unconscious
>
>> [!danger]+ ### Damage Types
>> - Acid
>> - Bludgeoning
>> - Cold
>> - Fire
>> - Force
>> - Lightning
>> - Necrotic
>> - Piercing
>> - Poison
>> - Psychic
>> - Radiant
>> - Slashing
>> - Thunder

## Environmental Factors

```dataview
TABLE WITHOUT ID
  factor AS "Factor",
  effect AS "Effect",
  active AS "Active"
FROM #environment
WHERE location = this.combat_location
```

## Combat Log

```dataview
TABLE WITHOUT ID
  time AS "Time",
  actor AS "Actor",
  action AS "Action",
  target AS "Target",
  result AS "Result"
FROM #combat-log
WHERE combat_id = this.combat_id
SORT time DESC
LIMIT 20
```