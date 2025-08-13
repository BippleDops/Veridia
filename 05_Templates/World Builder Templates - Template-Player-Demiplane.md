---
Class:
- Barbarian
MyContainer: null
NoteIcon: player
Player: Bob
PlayerKnownLanguages:
- Celestial
- Common
- Dwarvish
Race:
- Human
Role: Player
Status: Active
ac: 16
aliases:
- Bob
allies:
- Friend
char_age: Young Adult
char_gender: Male
char_items: []
char_race: Human
char_status: Alive
children:
- Son
created: '2025-08-11'
enemies:
- Enemy
faction_standing:
  Faction Name 1: 1
  Faction Name 3: 3
hp: 55
level: 2
max_hp: 71
modifier: 3
obsidianUIMode: preview
parents:
- Mother
- Father
partner:
- Partner
pasperc: 13
siblings:
- Sister
status: complete
tags:
- both
- category/player
- complete
- content/lore
- lore
- status/in-progress
- world/both
type: Lore
updated: '2025-08-13T12:34:03.262911+00:00'
world: Both
---






<%*
const hasTitle = !tp.file.title.startsWith("NewPlayer");
let title;
if (!hasTitle) {
    title = await tp.system.prompt("Enter Player Name");
    await tp.file.rename(title);
} else {
    title = tp.file.title;
}
_%>

> [!NOTE|div-m] Player Name:  `Placeholder`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ![[Template_Player_Placeholder.png|Template Player Placeholder.png]]
>
>> [!div-m|no-title] Place Name
>> ~~~meta-bind
>> INPUT[select(
>> option(1, 🧙Description),
>> option(2, ⚙️Configure),
>> option(3, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh480|10]
>>> >[!div-m|no-title]
>>> > ![[#Description|no-h clean]]
>>> 
>>> >[!div-m|no-title]
>>> > ![[#Configure|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>> 

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, 🧙‍♂️Char Sheet),
> option(2, ⚔️Inventory),
> option(3, 🔗Connections),
> option(4, 🧑‍🤝‍🧑Relationships),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Character Sheet|no-h clean]]
> >
> > > ![[#Inventory|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Connections|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Relationships|no-h clean]]

---

```dataviewjs
const player = dv.current();
const factions = dv.pages('"03_Mechanics/Guilds and Groups"');
let tableData = [];
for (let faction of factions) {
    let factionName = faction.faction;
    let playerStanding = player.faction_standing?.[factionName] || 0;

    // Ensure benefits is treated as an array
    let benefitsList = Array.isArray(faction.benefits) ? faction.benefits : [];

    // Filter benefits the player qualifies for
    let qualifiedBenefits = benefitsList
        .filter(b => playerStanding >= b.standing)
        .map(b => b.reward)
        .join(", "); 

    let primaryContact = faction.primary_contact || "No contact set";

    tableData.push([factionName, playerStanding, qualifiedBenefits || "No benefits yet", primaryContact]);
}
dv.table(["Faction", "Your Standing", "Benefits", "Primary Contact"], tableData);
```

# Description

This is the persons description. 

## Configure

| Initiative Tracker Stat     | Value                        |
| -------- | ---------------------------- |
| Level    | `INPUT[number:level]`        |
| HP       | `INPUT[number:hp]`           |
| AC       | `INPUT[number:ac]`           |
| Modifier | `INPUT[number:modifier]`     |



## GM Notes

Make notes of what you need to track in the town here. 

## Character Sheet

%% CONTENTS OF THE CUSTOM FRAME CAN BE SET IN THE CUSTOM FRAME PLUGIN SETTINGS %%
```custom-frames
frame: Demiplane
style: height: 800px;
```

## Inventory

The following items belong to `= this.file.name`.

Items: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):char_items]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %%

## Connections
Is the person linked to any groups or quests?

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %%

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`
%% DISPLAYS NOTES THAT MATCH THE TAGS ABOVE %%

## Relationships

List important relationships here. 

```dataviewjs
var parents = dv.current().parents ?? [];
var children = dv.current().children ?? [];
var enemies = dv.current().enemies ?? [];
var allies = dv.current().allies ?? [];
var siblings = dv.current().siblings ?? [];
var current = dv.current().file.name;
var partner = dv.current().partner ?? [];

dv.paragraph("```mermaid\nflowchart LR\n" +
  // Parents with internal-link on individual nodes only
  (parents.length > 0 ? parents.map((parent, index) => `P${index + 1}[${parent}]:::internal-link\nP${index + 1} --> Current\n`).join('') : '') +
  
  // Current node
  `Current[${current}]\n` +
  
  // Partner group node (no internal-link applied)
  (partner.length > 0 ? `PT[Partner]\nCurrent --> PT\n` : '') +
  
  // Individual partners with internal-link
  (partner.length > 0 ? partner.map((p, index) => `PT${index + 1}[${p}]:::internal-link\nPT --> PT${index + 1}\n`).join('') : '') +

  // Children group node (no internal-link applied)
  (children.length > 0 ? `C[Children]\nCurrent --> C\n${children.map((child, index) => `C${index + 1}[${child}]:::internal-link\nC --> C${index + 1}\n`).join('')}` : '') +

  // Siblings group node (no internal-link applied)
  (siblings.length > 0 ? `S[Siblings]\nCurrent --> S\n${siblings.map((sibling, index) => `S${index + 1}[${sibling}]:::internal-link\nS --> S${index + 1}\n`).join('')}` : '') +

  // Enemies group node (no internal-link applied)
  (enemies.length > 0 ? `E[Enemies]\nCurrent --> E\n${enemies.map((enemy, index) => `E${index + 1}[${enemy}]:::internal-link\nE --> E${index + 1}\n`).join('')}` : '') +

  // Allies group node (no internal-link applied)
  (allies.length > 0 ? `A[Allies]\nCurrent --> A\n${allies.map((ally, index) => `A${index + 1}[${ally}]:::internal-link\nA --> A${index + 1}\n`).join('')}` : '') +

  // Styling: Apply internal-link only to individual nodes, not group nodes
  `class ${parents.length > 0 ? parents.map((_, index) => `P${index + 1},`).join('') : ''}Current${children.length > 0 ? children.map((_, index) => `C${index + 1},`).join('') : ''}${siblings.length > 0 ? siblings.map((_, index) => `S${index + 1},`).join('') : ''}${enemies.length > 0 ? enemies.map((_, index) => `E${index + 1},`).join('') : ''}${allies.length > 0 ? allies.map((_, index) => `A${index + 1},`).join('') : ''} internal-link;`
)
```
%% CODE ABOVE CREATED WITH CHAT-GPT. ITS COMPLEX CODE THAT SHOULD NOT BE CHANGED UNLESS YOU KNOW WHAT YOU ARE DOING %%
%% MERMAID-FIX-TEXT-CLIPPING.CSS is enabled in Settings > Appearance > CSS Snippets. This fixes text clipping and styles the boxes %%

> [!NOTE]- Relationship Config - Enter name of People Notes
> `BUTTON[button_person]` Nodes will link to notes of the same name. 
> 
> | Parents    | Partner    | Children |
> | --- | --- | --- |
> | `INPUT[list:parents]`    | `INPUT[list:partner]`    | `INPUT[list:children]`  |
> 
> | Siblings    | Enemies    | Allies |
> | --- | --- | --- |
> | `INPUT[list:siblings]`    | `INPUT[list:enemies]`    | `INPUT[list:allies]`  |



<!-- ENHANCED_TEMPLATE_FOOTER -->

## Quick Actions
- Button: `BUTTON[button_person]` (create or link a person)
- Dice: `= round(d(20))` test roll

## Auto-Indexes
```dataview
LIST FROM outgoing(file) WHERE status = "complete"
```

## Accessibility Defaults
- Screen reader summary field in frontmatter recommended.
- Content warnings list; safety tools references.

## Player-Facing Summary

Template Player Demiplane is a undersea element of the setting, known for bioluminescent glow and pressure-glass. Its presence anchors ongoing storylines and offers clear player choices.

## Lore Details

Legends speak of Template Player Demiplane as a nexus where past and present converge. Locals describe subtle omens—shifts in currents, a dimming of lanternfish, or whispers on the wind—that herald change around Template Player Demiplane.

## Adventure Hooks

- A rumor ties Template Player Demiplane to a missing shipment, linking factions with competing claims.
- An NPC seeks discreet help at Template Player Demiplane to avert a public scandal.
- A map overlay reveals a hidden approach to Template Player Demiplane active only during specific tides/storms.

## DM Notes

Play up tactile detail: sounds, pressure/wind changes, and meaningful symbology. Offer two clear approaches (stealth vs. parley) and one wildcard complication tied to a faction clock. Reward scouting and map use.

<!-- enriched: true -->

## Cross-References

- [[02_Worldbuilding/Lore/Template_Player_Placeholder.png|02 Worldbuilding/Lore/Template Player Placeholder.png]]
