---
MyContainer:
  - "[[z_Templates/World Builder Templates/Template-Place.md|Template-Place]]"
MyCategory:
tags:
  - Category/People
obsidianUIMode: preview
aliases:
  - characters other name
NoteStatus: ❓
char_status: Alive
char_race: Human
char_gender: Male
char_items:
char_age: Adult
image_path: 
image_category: Character
image_tags:
  - portrait
  - npc
parents:
  - Josh
  - Susan
children:
  - Bob
  - Fred
enemies:
  - Zander
allies:
  - Emyerson
  - Bob
  - Frank
siblings:
  - Flip
partner:
  - Jane
Connected_Quests:
  - "[[z_Templates/World Builder Templates/Template-Quest.md|Template-Quest]]"
Connected_Groups: "[[z_Templates/World Builder Templates/Template-Group.md|Template-Group]]"
# Combat properties
in_combat: false
initiative: 
current_hp: 
max_hp: 
ac: 10
---

<%*
  // 1) Prompt for Person's Name and rename file
  const personName = await tp.system.prompt("Enter Person's Name", tp.file.title);
  if (!personName) return;
  await tp.file.rename(personName);

  // 2) Gather all potential residence notes
  const allFiles = tp.app.vault.getMarkdownFiles();
  const locationFiles = allFiles.filter(f =>
    f.path.startsWith("2-World/Hubs/") ||
    f.path.startsWith("2-World/Points of Interest/") ||
    f.path.startsWith("2-World/Regions/") ||
    f.path.startsWith("2-World/Places/")
  );

  // 3) Prompt to choose one location
  const locationChoices = locationFiles.map(f => f.basename);
  const locationValues  = locationFiles.map(f => f.path);
  const chosenPath = await tp.system.suggester(locationChoices, locationValues, true);
  if (!chosenPath) return;

  // 4) Build wiki-link
  const alias = chosenPath.split("/").pop().replace(/\.md$/, "");
  const locationLink = `[[${chosenPath}|${alias}]]`;

  // 5) Insert into front-matter as MyContainer
  setTimeout(() => {
    const file = tp.file.find_tfile(tp.file.path(true));
    if (!file) return;
    app.fileManager.processFrontMatter(file, fm => {
      fm["MyContainer"] = locationLink;
    });
  }, 100);
%>

> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Hub),optionQuery(#Category/Region),optionQuery(#Category/Place),optionQuery(#Category/PointofInterest)):MyContainer]`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ~~~meta-bind
>> VIEW[{image_path}|portrait][
>>   ![[{image_path}|cover]]
>>   ||
>>   ![[z_Assets/Placeholder Images/{char_race}_{char_gender}.png|cover]]
>>   ||
>>   ![[z_Assets/Placeholder Images/Character_Default.png|cover]]
>> ]
>> ~~~
>> 
>> **Image Path:** `INPUT[text:image_path]`
>> `BUTTON[chooseImage]` Select from gallery
>
>> [!div-m|no-title] `VIEW[{file.name}]`
>> ~~~meta-bind
>> INPUT[select(
>> option(1, ℹ️General),
>> option(2, 📒Statblock),
>> option(3, 📝GM Notes),
>> option(4, 🖼️Gallery),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Statblock|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Gallery|no-h clean]]

> [!NOTE|no-title]
> ~~~meta-bind
> INPUT[select(
> option(1, ⚔️Inventory),
> option(2, 🔗Connections),
> option(3, 🧑‍🤝‍🧑Relationships),
> option(4, ⚔️Combat),
> class(tabbed)
> )]
> ~~~
> >[!tabbed-box-maxh]
> > >[!div-m|no-title]
> > > ![[#Inventory|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Connections|no-h clean]]
> > 
> > > [!div-m|no-title]
> > > ![[#Relationships|no-h clean]]
> >
> > > [!div-m|no-title]
> > > ![[#Combat|no-h clean]]

---

# General

Name: `VIEW[{file.name}]`

Status: `INPUT[inlineSelect(option(Alive), option(Dead), option(Missing), option(Unknown)):char_status]`

Race/Species: `INPUT[template-Race][:char_race]`

Gender: `INPUT[inlineSelect(option(Male), option(Female), option(Other), option(Unknown)):char_gender]` 

Age: `INPUT[inlineSelect(option(Infant), option(Child), option(Teenager), option(Young Adult), option(Adult), option(Elder)):char_age]`

---

This is the person's description. 

# Statblock

```statblock
monster: Commoner
```

# GM Notes

Make notes of what you need to track for this character here. 

# Gallery

~~~meta-bind
VIEW[{image_path}|gallery][
## Character Portrait
![[{image_path}]]

### Alternative Images
Add links to other character art here
]
~~~

Image Tags: `INPUT[list:image_tags]`

# Inventory

The following items belong to `VIEW[{file.name}]`.

~~~meta-bind-js-view
// Get items owned by this character
const items = context.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("3-Mechanics/Items/"))
  .map(f => {
    const cache = context.app.metadataCache.getFileCache(f);
    return {
      file: f,
      frontmatter: cache?.frontmatter || {},
      name: f.basename
    };
  })
  .filter(item => item.frontmatter.item_owner === context.file.basename);

// Create table
return `| Item | Type | Rarity | Value | Weight |
|------|------|--------|-------|--------|
${items.map(item => 
  `| [[${item.file.path}\\|${item.name}]] | ${item.frontmatter.type || '—'} | ${item.frontmatter.rarity || 'Common'} | ${item.frontmatter.cost || '—'} | ${item.frontmatter.weight || '—'} |`
).join('\n')}`;
~~~

# Connections

Quests: `INPUT[inlineListSuggester(optionQuery(#Category/Quest)):Connected_Quests]`

Groups: `INPUT[inlineListSuggester(optionQuery(#Category/Group)):Connected_Groups]`

# Relationships

List important relationships here. 

```dataviewjs
// Relationship visualization code (same as original)
var parents = dv.current().parents ?? [];
var children = dv.current().children ?? [];
var enemies = dv.current().enemies ?? [];
var allies = dv.current().allies ?? [];
var siblings = dv.current().siblings ?? [];
var current = dv.current().file.name;
var partner = dv.current().partner ?? [];

dv.paragraph("```mermaid\nflowchart LR\n" +
  // (keeping the original mermaid code for brevity)
  "```");
```

> [!NOTE]- Relationship Config
> `BUTTON[button_person]` Nodes will link to notes of the same name. 
> 
> | Parents    | Partner    | Children |
> | --- | --- | --- |
> | `INPUT[list:parents]`    | `INPUT[list:partner]`    | `INPUT[list:children]`  |
> 
> | Siblings    | Enemies    | Allies |
> | --- | --- | --- |
> | `INPUT[list:siblings]`    | `INPUT[list:enemies]`    | `INPUT[list:allies]`  |

# Combat

> [!INFO] Combat Status
> In Combat: `INPUT[toggle:in_combat]`
> 
> Initiative: `INPUT[number:initiative]`
> 
> HP: `INPUT[number:current_hp]` / `INPUT[number:max_hp]`
> 
> AC: `INPUT[number:ac]`
> 
> Conditions:
> - Stunned: `INPUT[toggle:is_stunned]`
> - Prone: `INPUT[toggle:is_prone]`
> - Grappled: `INPUT[toggle:is_grappled]`
> - Invisible: `INPUT[toggle:is_invisible]`
> - Concentrating: `INPUT[toggle:is_concentrating]` 