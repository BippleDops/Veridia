# Rogue Xphb

---
title: Rogue Xphb
aliases:
- Rogue
type: note
tags:
- both
- ttrpg-cli/class/rogue
- research
- world/both
- active
- note
- status/in-progress
- ttrpg-cli/compendium/src/5e/xphb
created: 2025-07-23
modified: '2025-08-14'
status: active
cssclasses: json5e-class
obsidianUIMode: preview
updated: '2025-08-13T12:34:04.788213+00:00'
world: Both
---



# Rogue
*Source: Player's Handbook (2024) p. 128. Available in the <span title='Systems Reference Document (5.2)'>SRD</span> and the Free Rules (2024)*  

> [!tldr] Class and Feature Progression
> 
> <table class="class-progression">
> <thead>
> <tr><th colspan='4'></th></tr>
> <tr class="class-progression"><th class"level">Level</th><th class"pb">PB</th><th class"feature">Features</th><th class="value">Sneak Attack</th></tr>
> </thead><tbody>
> <tr class="class-progression"><td class"level">1st</td><td class"pb">+2</td><td class"feature"><a href='#Expertise (Level 1)' class='internal-link'>Expertise</a>, <a href='#Sneak Attack (Level 1)' class='internal-link'>Sneak Attack</a>, <a href='#Thieves' Cant (Level 1)' class='internal-link'>Thieves' Cant</a>, <a href='#Weapon Mastery (Level 1)' class='internal-link'>Weapon Mastery</a></td><td class="value">1d6</td></tr>
> <tr class="class-progression"><td class"level">2nd</td><td class"pb">+2</td><td class"feature"><a href='#Cunning Action (Level 2)' class='internal-link'>Cunning Action</a></td><td class="value">1d6</td></tr>
> <tr class="class-progression"><td class"level">3rd</td><td class"pb">+2</td><td class"feature"><a href='#Rogue Subclass (Level 3)' class='internal-link'>Rogue Subclass</a>, <a href='#Steady Aim (Level 3)' class='internal-link'>Steady Aim</a></td><td class="value">2d6</td></tr>
> <tr class="class-progression"><td class"level">4th</td><td class"pb">+2</td><td class"feature"><a href='#Ability Score Improvement (Level 4)' class='internal-link'>Ability Score Improvement</a></td><td class="value">2d6</td></tr>
> <tr class="class-progression"><td class"level">5th</td><td class"pb">+3</td><td class"feature"><a href='#Cunning Strike (Level 5)' class='internal-link'>Cunning Strike</a>, <a href='#Uncanny Dodge (Level 5)' class='internal-link'>Uncanny Dodge</a></td><td class="value">3d6</td></tr>
> <tr class="class-progression"><td class"level">6th</td><td class"pb">+3</td><td class"feature"><a href='#Expertise (Level 6)' class='internal-link'>Expertise</a></td><td class="value">3d6</td></tr>
> <tr class="class-progression"><td class"level">7th</td><td class"pb">+3</td><td class"feature"><a href='#Evasion (Level 7)' class='internal-link'>Evasion</a>, <a href='#Reliable Talent (Level 7)' class='internal-link'>Reliable Talent</a></td><td class="value">4d6</td></tr>
> <tr class="class-progression"><td class"level">8th</td><td class"pb">+3</td><td class"feature"><a href='#Ability Score Improvement (Level 8)' class='internal-link'>Ability Score Improvement</a></td><td class="value">4d6</td></tr>
> <tr class="class-progression"><td class"level">9th</td><td class"pb">+4</td><td class"feature"><a href='#Subclass Feature (Level 9)' class='internal-link'>Subclass Feature</a></td><td class="value">5d6</td></tr>
> <tr class="class-progression"><td class"level">10th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 10)' class='internal-link'>Ability Score Improvement</a></td><td class="value">5d6</td></tr>
> <tr class="class-progression"><td class"level">11th</td><td class"pb">+4</td><td class"feature"><a href='#Improved Cunning Strike (Level 11)' class='internal-link'>Improved Cunning Strike</a></td><td class="value">6d6</td></tr>
> <tr class="class-progression"><td class"level">12th</td><td class"pb">+4</td><td class"feature"><a href='#Ability Score Improvement (Level 12)' class='internal-link'>Ability Score Improvement</a></td><td class="value">6d6</td></tr>
> <tr class="class-progression"><td class"level">13th</td><td class"pb">+5</td><td class"feature"><a href='#Subclass Feature (Level 13)' class='internal-link'>Subclass Feature</a></td><td class="value">7d6</td></tr>
> <tr class="class-progression"><td class"level">14th</td><td class"pb">+5</td><td class"feature"><a href='#Devious Strikes (Level 14)' class='internal-link'>Devious Strikes</a></td><td class="value">7d6</td></tr>
> <tr class="class-progression"><td class"level">15th</td><td class"pb">+5</td><td class"feature"><a href='#Slippery Mind (Level 15)' class='internal-link'>Slippery Mind</a></td><td class="value">8d6</td></tr>
> <tr class="class-progression"><td class"level">16th</td><td class"pb">+5</td><td class"feature"><a href='#Ability Score Improvement (Level 16)' class='internal-link'>Ability Score Improvement</a></td><td class="value">8d6</td></tr>
> <tr class="class-progression"><td class"level">17th</td><td class"pb">+6</td><td class"feature"><a href='#Subclass Feature (Level 17)' class='internal-link'>Subclass Feature</a></td><td class="value">9d6</td></tr>
> <tr class="class-progression"><td class"level">18th</td><td class"pb">+6</td><td class"feature"><a href='#Elusive (Level 18)' class='internal-link'>Elusive</a></td><td class="value">9d6</td></tr>
> <tr class="class-progression"><td class"level">19th</td><td class"pb">+6</td><td class"feature"><a href='#Epic Boon (Level 19)' class='internal-link'>Epic Boon</a></td><td class="value">10d6</td></tr>
> <tr class="class-progression"><td class"level">20th</td><td class"pb">+6</td><td class"feature"><a href='#Stroke of Luck (Level 20)' class='internal-link'>Stroke of Luck</a></td><td class="value">10d6</td></tr>
> </tbody></table>

^class-progression

## Hit Points

- **Hit Dice**: 1d8 per Rogue level
- **Hit Points at First Level:** 8 + CON
- **Hit Points at Higher Levels:** add 5 OR 1d8 + CON  (minimum of 1)

## Starting Rogue

- **Saving Throw Proficiencies**: Dexterity, Intelligence
- **Skill Proficiencies**: *Choose 4:* [[skills#Acrobatics|Acrobatics]], [[skills#Athletics|Athletics]], [[skills#Deception|Deception]], [[skills#Insight|Insight]], [[skills#Intimidation|Intimidation]], [[skills#Investigation|Investigation]], [[skills#Perception|Perception]], [[skills#Persuasion|Persuasion]], [[skills#Sleight%20of%20Hand|Sleight of Hand]], or [[skills#Stealth|Stealth]]
- **Weapon Proficiencies**: Simple weapons and Martial weapons that have the Finesse or Light property
- **Tool Proficiencies**: [[thieves-tools-xphb|Thieves' Tools]]
- **Armor Training**: [[item-types#Light%20Armor|Light armor]]

**Starting Equipment:** *Choose A or B:* (A) [[leather-armor-xphb|Leather Armor]], 2 [[dagger-xphb|Daggers]], [[shortsword-xphb|Shortsword]], [[shortbow-xphb|Shortbow]], [[arrows-20-xphb|20 Arrows]], [[quiver-xphb|Quiver]], [[thieves-tools-xphb|Thieves' Tools]], [[burglars-pack-xphb|Burglar's Pack]], and 8 GP; or (B) 100 GP

## Multiclassing Rogue

- **Skill Proficiencies**: *Choose 1:* [[skills#Acrobatics|Acrobatics]], [[skills#Athletics|Athletics]], [[skills#Deception|Deception]], [[skills#Insight|Insight]], [[skills#Intimidation|Intimidation]], [[skills#Investigation|Investigation]], [[skills#Perception|Perception]], [[skills#Persuasion|Persuasion]], [[skills#Sleight%20of%20Hand|Sleight of Hand]], or [[skills#Stealth|Stealth]]
- **Tool Proficiencies**: [[thieves-tools-xphb|Thieves' Tools]]
- **Armor Training**: [[item-types#Light%20Armor|Light armor]]

## Rogue

Rogues rely on cunning, stealth, and their foes' vulnerabilities to get the upper hand in any situation. They have a knack for finding the solution to just about any problem. A few even learn magical tricks to supplement their other abilities. Many Rogues focus on stealth and deception, while others refine skills that help them in a dungeon environment, such as climbing, finding and disarming traps, and opening locks.

In combat, Rogues prioritize subtle strikes over brute strength. They would rather make one precise strike than wear an opponent down with a barrage of blows.

Some Rogues began their careers as criminals, while others used their cunning to fight crime. Whatever a Rogue's relation to the law, no common criminal or officer of the law can match the subtle brilliance of the greatest Rogues.

## Class Features

### Expertise (Level 1)

You gain [[expertise-xphb|Expertise]] in two of your skill proficiencies of your choice. [[skills#Sleight%20of%20Hand|Sleight of Hand]] and [[skills#Stealth|Stealth]] are recommended if you have proficiency in them.

At Rogue level 6, you gain [[expertise-xphb|Expertise]] in two more of your skill proficiencies of your choice.

### Sneak Attack (Level 1)

You know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra `d6` damage to one creature you hit with an attack roll if you have [[advantage-xphb|Advantage]] on the roll and the attack uses a Finesse or a Ranged weapon. The extra damage's type is the same as the weapon's type.

You don't need [[advantage-xphb|Advantage]] on the attack roll if at least one of your allies is within 5 feet of the target, the ally doesn't have the [[conditions#Incapacitated|Incapacitated]] condition, and you don't have [[disadvantage-xphb|Disadvantage]] on the attack roll.

The extra damage increases as you gain Rogue levels, as shown in the Sneak Attack column of the Rogue Features table.

### Thieves' Cant (Level 1)

You picked up various languages in the communities where you plied your roguish talents. You know Thieves' Cant and one other language of your choice, which you choose from the language tables in "chapter 2".

### Weapon Mastery (Level 1)

Your training with weapons allows you to use the [[weapon-mastery-properties-xphb|mastery properties]] of two kinds of weapons of your choice with which you have proficiency, such as [[dagger-xphb|Daggers]] and [[shortbow-xphb|Shortbows]].

Whenever you finish a [[long-rest-xphb|Long Rest]], you can change the kinds of weapons you chose. For example, you could switch to using the [[weapon-mastery-properties-xphb|mastery properties]] of [[scimitar-xphb|Scimitars]] and [[shortsword-xphb|Shortswords]].

### Cunning Action (Level 2)

Your quick thinking and agility allow you to move and act quickly. On your turn, you can take one of the following actions as a [[bonus-action-xphb|Bonus Action]]: [[actions#Dash|Dash]], [[actions#Disengage|Disengage]], or [[actions#Hide|Hide]].

### Rogue Subclass (Level 3)

You gain a Rogue subclass of your choice. A subclass is a specialization that grants you features at certain Rogue levels. For the rest of your career, you gain each of your subclass's features that are of your Rogue level or lower.

### Steady Aim (Level 3)

As a [[bonus-action-xphb|Bonus Action]], you give yourself [[advantage-xphb|Advantage]] on your next attack roll on the current turn. You can use this feature only if you haven't moved during this turn, and after you use it, your [[speed-xphb|Speed]] is 0 until the end of the current turn.

### Ability Score Improvement (Level 4)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify. You gain this feature again at Rogue levels 8, 10, 12, and 16.

### Cunning Strike (Level 5)

You've developed cunning ways to use your Sneak Attack. When you deal Sneak Attack damage, you can add one of the following Cunning Strike effects. Each effect has a die cost, which is the number of Sneak Attack damage dice you must forgo to add the effect. You remove the die before rolling, and the effect occurs immediately after the attack's damage is dealt. For example, if you add the Poison effect, remove `d6` from the Sneak Attack's damage before rolling.

If a Cunning Strike effect requires a saving throw, the DC equals 8 plus your Dexterity modifier and [[proficiency-xphb|Proficiency Bonus]].

### Poison (Cost: 1d6) (Level 5)

You add a toxin to your strike, forcing the target to make a Constitution saving throw. On a failed save, the target has the [[conditions#Poisoned|Poisoned]] condition for 1 minute. At the end of each of its turns, the [[conditions#Poisoned|Poisoned]] target repeats the save, ending the effect on itself on a success.

To use this effect, you must have a [[poisoners-kit-xphb|Poisoner's Kit]] on your person.

### Trip (Cost: 1d6) (Level 5)

If the target is Large or smaller, it must succeed on a Dexterity saving throw or have the [[conditions#Prone|Prone]] condition.

### Withdraw (Cost: 1d6) (Level 5)

Immediately after the attack, you move up to half your [[speed-xphb|Speed]] without provoking [[actions#Opportunity%20Attack|Opportunity Attacks]].

### Uncanny Dodge (Level 5)

When an attacker that you can see hits you with an attack roll, you can take a [[reaction-xphb|Reaction]] to halve the attack's damage against you (round down).

### Expertise (Level 6)

You gain [[expertise-xphb|Expertise]] in two of your Skill Proficiencies of your choice.

### Evasion (Level 7)

You can nimbly dodge out of the way of certain dangers. When you're subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw and only half damage if you fail. You can't use this feature if you have the [[conditions#Incapacitated|Incapacitated]] condition.

### Reliable Talent (Level 7)

Whenever you make an ability check that uses one of your skill or tool proficiencies, you can treat a `d20` roll of 9 or lower as a 10.

### Ability Score Improvement (Level 8)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 9)

You gain a feature from your Rogue Subclass.

### Ability Score Improvement (Level 10)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Improved Cunning Strike (Level 11)

You can use up to two Cunning Strike effects when you deal Sneak Attack damage, paying the die cost for each effect.

### Ability Score Improvement (Level 12)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 13)

You gain a feature from your Rogue Subclass.

### Devious Strikes (Level 14)

You've practiced new ways to use your Sneak Attack deviously. The following effects are now among your Cunning Strike options.

### Daze (Cost: 2d6) (Level 14)

The target must succeed on a Constitution saving throw, or on its next turn, it can do only one of the following: move or take an action or a [[bonus-action-xphb|Bonus Action]].

### Knock Out (Cost: 6d6) (Level 14)

The target must succeed on a Constitution saving throw, or it has the [[conditions#Unconscious|Unconscious]] condition for 1 minute or until it takes any damage. The [[conditions#Unconscious|Unconscious]] target repeats the save at the end of each of its turns, ending the effect on itself on a success.

### Obscure (Cost: 3d6) (Level 14)

The target must succeed on a Dexterity saving throw, or it has the [[conditions#Blinded|Blinded]] condition until the end of its next turn.

### Slippery Mind (Level 15)

Your cunning mind is exceptionally difficult to control. You gain proficiency in Wisdom and Charisma saving throws.

### Ability Score Improvement (Level 16)

You gain the [[ability-score-improvement-xphb|Ability Score Improvement]] feat or another feat of your choice for which you qualify.

### Subclass Feature (Level 17)

You gain a feature from your Rogue Subclass.

### Elusive (Level 18)

You're so evasive that attackers rarely gain the upper hand against you. No attack roll can have [[advantage-xphb|Advantage]] against you unless you have the [[conditions#Incapacitated|Incapacitated]] condition.

### Epic Boon (Level 19)

You gain an Epic Boon feat or another feat of your choice for which you qualify. [[boon-of-the-night-spirit-xphb|Boon of the Night Spirit]] is recommended.

### Stroke of Luck (Level 20)

You have a marvelous knack for succeeding when you need to. If you fail a [[d20-test-xphb|D20 Test]], you can turn the roll into a 20.

Once you use this feature, you can't use it again until you finish a [[short-rest-xphb|Short]] or [[long-rest-xphb|Long Rest]].

## Player-Facing Summary

Rogue xphb is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of rogue xphb as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around rogue xphb.

## Adventure Hooks

- A rumor ties rogue xphb to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at rogue xphb to avert a public scandal.
- A map overlay reveals a hidden approach to rogue xphb active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->
 enriched: true -->


## Related

*Links to related content will be added here.*
