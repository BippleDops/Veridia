# Fighter Xphb

---
title: Fighter Xphb
aliases:
- Fighter
type: note
tags:
- both
- research
- world/both
- active
- note
- status/in-progress
- mechanics/combat
- ttrpg-cli/compendium/src/5e/xphb
created: 2025-07-23
modified: '2025-08-14'
status: active
cssclasses: json5e-class
obsidianUIMode: preview
updated: '2025-08-13T12:34:04.839070+00:00'
world: Both
---



# Fighter
*Source: Player's Handbook (2024) p. 90. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='5'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Second Wind</th><th class="value">Weapon Mastery</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Fighting Style (Level 1)' class='internal-link'>Fighting Style</a>, <a href='#Second Wind (Level 1)' class='internal-link'>Second Wind</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a></td><td class="value">2</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Action Surge (Level 2)' class='internal-link'>Action Surge</a>, <a href='#Tactical Mind (Level 2)' class='internal-link'>Tactical Mind</a></td><td class="value">2</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Fighter Subclass (Level 3)' class='internal-link'>Fighter Subclass</a></td><td class="value">2</td><td class="value">3</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Extra Attack (Level 5)' class='internal-link'>Extra Attack</a>, <a href='#Tactical Shift (Level 5)' class='internal-link'>Tactical Shift</a></td><td class="value">3</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 6)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Subclass Feature (Level 7)' class='internal-link'>Subclass Feature</a></td><td class="value">3</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">3</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Indomitable (Level 9)' class='internal-link'>Indomitable</a>, <a href='#Tactical Master (Level 9)' class='internal-link'>Tactical Master</a></td><td class="value">3</td><td class="value">4</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 10)' class='internal-link'>Subclass Feature</a></td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Two Extra Attacks (Level 11)' class='internal-link'>Two Extra Attacks</a></td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Indomitable (Level 13)' class='internal-link'>Indomitable</a>, <a href='#Studied Attacks (Level 13)' class='internal-link'>Studied Attacks</a></td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 14)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 15)' class='internal-link'>Subclass Feature</a></td><td class="value">4</td><td class="value">5</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Action Surge (Level 17)' class='internal-link'>Action Surge</a>, <a href='#Indomitable (Level 17)' class='internal-link'>Indomitable</a></td><td class="value">4</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 18)' class='internal-link'>Subclass Feature</a></td><td class="value">4</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">4</td><td class="value">6</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Three Extra Attacks (Level 20)' class='internal-link'>Three Extra Attacks</a></td><td class="value">4</td><td class="value">6</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d10 per Fighter level
- **Hit Points at First Level:** 10 + CON
- **Hit Points at Higher Levels:** add 6 OR 1d10 + CON  (minimum of 1)

## Starting Fighter

- **Saving Throw Proficiencies**: Constitution, Strength
- **Skill Proficiencies**: *Choose 2:* [[skills#Acrobatics|Acrobatics]], [[skills#Animal%20Handling|Animal Handling]], [[skills#Athletics|Athletics]], [[skills#History|History]], [[skills#Insight|Insight]], [[skills#Intimidation|Intimidation]], [[skills#Perception|Perception]], [[skills#Persuasion|Persuasion]], or [[skills#Survival|Survival]]
- **Weapon Proficiencies**: Simple weapons and Martial weapons
- **Armor Training**: [[item-types#Light%20Armor|Light armor]], [[item-types#Medium%20Armor|Medium armor]], [[item-types#Heavy%20Armor|Heavy armor]], and [[shield-xphb|Shields]]

**Starting Equipment:** *Choose A, B, or C:* (A) [[chain-mail-xphb|Chain Mail]], [[greatsword-xphb|Greatsword]], [[flail-xphb|Flail]], 8 [[javelin-xphb|Javelins]], [[dungeoneers-pack-xphb|Dungeoneer's Pack]], and 4 GP; (B) [[studded-leather-armor-xphb|Studded Leather Armor]], [[scimitar-xphb|Scimitar]], [[shortsword-xphb|Shortsword]], [[longbow-xphb|Longbow]], [[arrows-20-xphb|20 Arrows]], [[quiver-xphb|Quiver]], [[dungeoneers-pack-xphb|Dungeoneer's Pack]], and 11 GP; or (C) 155 GP

## Multiclassing Fighter

- **Weapon Proficiencies**: Martial weapons
- **Armor Training**: [[item-types#Light%20Armor|Light armor]], [[item-types#Medium%20Armor|Medium armor]], [[shield-xphb|Shields]]

## Fighter

Fighters rule many battlefields. Questing knights, royal champions, elite soldiers, and hardened mercenaries—as Fighters, they all share an unparalleled prowess with weapons and armor. And they are well acquainted with death, both meting it out and defying it.

Fighters master various weapon techniques, and a well-equipped Fighter always has the right tool at hand for any combat situation. Likewise, a Fighter is adept with every form of armor. Beyond that basic degree of familiarity, each Fighter specializes in certain styles of combat. Some concentrate on archery, some on fighting with two weapons at once, and some on augmenting their martial skills with magic. This combination of broad ability and extensive specialization makes Fighters superior combatants.

## Class Features

### Fighting Style (Level 1)

You have honed your martial prowess and gain a Fighting Style feat of your choice. [[defense-xphb|Defense]] is recommended.

Whenever you gain a Fighter level, you can replace the feat you chose with a different Fighting Style feat.

### Second Wind (Level 1)

You have a limited well of physical and mental stamina that you can draw on. As a [[bonus-action-xphb|Bonus Action]], you can use it to regain [[hit-points-xphb|Hit Points]] equal to `d10` plus your Fighter level.

You can use this feature twice. You regain one expended use when you finish a [[short-rest-xphb|Short Rest]], and you regain all expended uses when you finish a [[long-rest-xphb|Long Rest]].

When you reach certain Fighter levels, you gain more uses of this feature, as shown in the Second Wind column of the Fighter Features table.

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the [[weapon-mastery-properties-xphb|mastery properties]] of three kinds of Simple or Martial weapons of your choice. Whenever you finish a [[long-rest-xphb|Long Rest]], you can practice weapon drills and change one of those weapon choices.

When you reach certain Fighter levels, you gain the ability to use the [[weapon-mastery-properties-xphb|mastery properties]] of more kinds of weapons, as shown in the [[weapon-xphb|Weapon]] Mastery column of the Fighter Features table.

### Action Surge (Level 2)

You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the [[actions#Magic|Magic]] action.

Once you use this feature, you can't do so again until you finish a [[short-rest-xphb|Short]] or [[long-rest-xphb|Long Rest]]. Starting at level 17, you can use it twice before a rest but only once on a turn.

### Tactical Mind (Level 2)

You have a mind for tactics on and off the battlefield. When you fail an ability check, you can expend a use of your Second Wind to push yourself toward success. Rather than regaining [[hit-points-xphb|Hit Points]], you roll `d10` and add the number rolled to the ability check, potentially turning it into a success. If the check still fails, this use of Second Wind isn't expended.

### Fighter Subclass (Level 3)

You gain a Fighter subclass of your choice. A subclass is a specialization that grants you features at certain Fighter levels. For the rest of your career, you gain each of your subclass's features that are of your Fighter level or lower.

### Ability Score Improvement (Level 4)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify. You gain this feature again at Fighter levels 6, 8, 12, 14, and 16.

### Extra Attack (Level 5)

You can attack twice instead of once whenever you take the [[actions#Attack|Attack]] action on your turn.

### Tactical Shift (Level 5)

Whenever you activate your Second Wind with a [[bonus-action-xphb|Bonus Action]], you can move up to half your [[speed-xphb|Speed]] without provoking [[actions#Opportunity%20Attack|Opportunity Attacks]].

### Ability Score Improvement (Level 6)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 7)

You gain a feature from your Fighter Subclass.

### Ability Score Improvement (Level 8)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Indomitable (Level 9)

If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a [[long-rest-xphb|Long Rest]].

You can use this feature twice before a [[long-rest-xphb|Long Rest]] starting at level 13 and three times before a [[long-rest-xphb|Long Rest]] starting at level 17.

### Tactical Master (Level 9)

When you attack with a weapon whose mastery property you can use, you can replace that property with the [[item-mastery#Push|Push]], [[item-mastery#Sap|Sap]], or [[item-mastery#Slow|Slow]] property for that attack.

### Subclass Feature (Level 10)

You gain a feature from your Fighter Subclass.

### Two Extra Attacks (Level 11)

You can attack three times instead of once whenever you take the [[actions#Attack|Attack]] action on your turn.

### Ability Score Improvement (Level 12)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Indomitable (Level 13)

If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a [[long-rest-xphb|Long Rest]].

You can use this feature twice before a [[long-rest-xphb|Long Rest]] starting at level 13 and three times before a [[long-rest-xphb|Long Rest]] starting at level 17.

### Studied Attacks (Level 13)

You study your opponents and learn from each attack you make. If you make an attack roll against a creature and miss, you have [[advantage-xphb|Advantage]] on your next attack roll against that creature before the end of your next turn.

### Ability Score Improvement (Level 14)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 15)

You gain a feature from your Fighter Subclass.

### Ability Score Improvement (Level 16)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Action Surge (Level 17)

You can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action, except the [[actions#Magic|Magic]] action.

Once you use this feature, you can't do so again until you finish a [[short-rest-xphb|Short]] or [[long-rest-xphb|Long Rest]]. Starting at level 17, you can use it twice before a rest but only once on a turn.

### Indomitable (Level 17)

If you fail a saving throw, you can reroll it with a bonus equal to your Fighter level. You must use the new roll, and you can't use this feature again until you finish a [[long-rest-xphb|Long Rest]].

You can use this feature twice before a [[long-rest-xphb|Long Rest]] starting at level 13 and three times before a [[long-rest-xphb|Long Rest]] starting at level 17.

### Subclass Feature (Level 18)

You gain a feature from your Fighter Subclass.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [[boon-of-combat-prowess-xphb|Boon of Combat Prowess]] is recommended.

### Three Extra Attacks (Level 20)

You can attack four times instead of once whenever you take the [[actions#Attack|Attack]] action on your turn.

## Player-Facing Summary

Fighter xphb is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of fighter xphb as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around fighter xphb.

## Adventure Hooks

- A rumor ties fighter xphb to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at fighter xphb to avert a public scandal.
- A map overlay reveals a hidden approach to fighter xphb active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
 enriched: true -->


## Related

*Links to related content will be added here.*
