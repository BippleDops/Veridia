---
tags:
  - Category/Place
MyContainer: "[[z_Templates/World Builder Templates/Template-Hub.md|Template-Hub]]"
MyCategory: Commerce
obsidianUIMode: preview
image_path:
image_category: Location
image_tags:
  - place
  - building
location_type: Shop
location_size: Small
location_condition: Good
location_security: Low
location_traffic: Moderate
operating_hours: Dawn to Dusk
owner:
employees:
  - Employee 1
  - Employee 2
services:
  - Service 1
  - Service 2
inventory_value: Moderate
special_features:
  - Feature 1
---

<%*
// Template setup code (same as original)
const title = await tp.system.prompt("Enter Place Name", tp.file.title);
if (!title) return;
await tp.file.rename(title);

const regionFiles = tp.app.vault.getMarkdownFiles()
  .filter(f => f.path.startsWith("2-World/Hubs/"));

const regionChoices = regionFiles.map(f => f.basename);
const regionValues  = regionFiles.map(f => f.path);
const chosenRegionPath = await tp.system.suggester(regionChoices, regionValues, true);
if (!chosenRegionPath) return;

const regionAlias = chosenRegionPath.split("/").pop().replace(/\.md$/, "");
const regionLink  = `[[${chosenRegionPath}|${regionAlias}]]`;

const categoryOptions = [
  "Commerce",
  "Agriculture",
  "Military",
  "Philosophy",
  "Industrial",
  "Nesting",
  "Government"
];
const chosenCat = await tp.system.suggester(categoryOptions, categoryOptions, true);
if (!chosenCat) return;

setTimeout(() => {
  const file = tp.file.find_tfile(tp.file.path(true));
  if (!file) return;
  app.fileManager.processFrontMatter(file, fm => {
    fm["MyContainer"] = regionLink;
    fm["MyCategory"]  = chosenCat;
  });
}, 100);
%>

> [!NOTE|div-m] Parent Location: `INPUT[inlineListSuggester(optionQuery(#Category/Hub), optionQuery(#Category/Region)):MyContainer]`

> [!column|no-i no-t]
>> [!div-m|no-title]
>> ~~~meta-bind
>> VIEW[{image_path}|location][
>>   ![[{image_path}|cover]]
>>   ||
>>   ![[z_Assets/Placeholder Images/{MyCategory}_Location.png|cover]]
>>   ||
>>   ![[z_Assets/Placeholder Images/Location_Default.png|cover]]
>> ]
>> ~~~
>> 
>> **Image:** `INPUT[text:image_path]`
>> `BUTTON[chooseImage]` Select image
>
>> [!div-m|no-title] `VIEW[{file.name}]`
>> ~~~meta-bind
>> INPUT[select(
>> option(1, 📍General),
>> option(2, 🏠Interior),
>> option(3, 👥People),
>> option(4, 📦Inventory),
>> option(5, 📝GM Notes),
>> class(tabbed)
>> )]
>> ~~~
>>>[!tabbed-box-maxh]
>>> >[!div-m|no-title]
>>> > ![[#General|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Interior|no-h clean]]
>>> 
>>> > [!div-m|no-title]
>>> > ![[#People|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#Inventory|no-h clean]]
>>>
>>> > [!div-m|no-title]
>>> > ![[#GM Notes|no-h clean]]

---

# General

**Name:** `VIEW[{file.name}]`

**Category:** `INPUT[inlineSelect(option(Commerce), option(Agriculture), option(Military), option(Philosophy), option(Industrial), option(Nesting), option(Government)):MyCategory]`

**Type:** `INPUT[inlineSelect(option(Shop), option(Inn), option(Tavern), option(Temple), option(Guild), option(Residence), option(Warehouse), option(Market), option(Other)):location_type]`

**Size:** `INPUT[inlineSelect(option(Tiny), option(Small), option(Medium), option(Large), option(Huge)):location_size]`

**Condition:** `INPUT[inlineSelect(option(Ruined), option(Poor), option(Fair), option(Good), option(Excellent)):location_condition]`

**Security:** `INPUT[inlineSelect(option(None), option(Low), option(Moderate), option(High), option(Maximum)):location_security]`

**Traffic:** `INPUT[inlineSelect(option(Abandoned), option(Low), option(Moderate), option(High), option(Packed)):location_traffic]`

**Operating Hours:** `INPUT[text:operating_hours]`

---

## Description

Describe the location's exterior appearance, atmosphere, and first impressions here.

# Interior

~~~meta-bind
VIEW[{image_path}|interior][
## Interior Layout
Describe the interior layout, decoration, and atmosphere here.

### Special Features
`INPUT[list:special_features]`
]
~~~

## Notable Areas

- **Main Area**: Description
- **Back Room**: Description
- **Storage**: Description

# People

## Owner
`INPUT[inlineListSuggester(optionQuery(#Category/People)):owner]`

## Employees
`INPUT[list:employees]`

## Regular Patrons

```dataviewjs
// Find all people who list this location as their container
const currentFile = dv.current().file.path;
const people = dv.pages('#Category/People')
  .where(p => {
    const container = p.MyContainer;
    if (!container) return false;
    if (Array.isArray(container)) {
      return container.some(c => c.path === currentFile);
    }
    return container.path === currentFile;
  });

if (people.length > 0) {
  dv.table(
    ["Name", "Race", "Gender", "Status", "Role"],
    people.map(p => [
      p.file.link,
      p.char_race || "Unknown",
      p.char_gender || "Unknown",
      p.char_status || "Unknown",
      p.char_role || "Patron"
    ])
  );
} else {
  dv.paragraph("*No regular patrons found at this location.*");
}
```

# Inventory

**Inventory Value:** `INPUT[inlineSelect(option(Empty), option(Low), option(Moderate), option(High), option(Extreme)):inventory_value]`

## Available Services
`INPUT[list:services]`

## Notable Items

```dataviewjs
// Show items that could be found at this type of location
const locationType = dv.current().location_type;
const category = dv.current().MyCategory;

let itemFilter = "";
if (category === "Commerce") itemFilter = '"3-Mechanics/Items"';
else if (category === "Military") itemFilter = '"3-Mechanics/Items"';
else itemFilter = '"3-Mechanics/Items"';

const items = dv.pages(itemFilter)
  .where(i => !i.item_owner) // Only unowned items
  .sort(i => i.rarity, 'desc')
  .limit(10);

if (items.length > 0) {
  dv.table(
    ["Item", "Type", "Rarity", "Value"],
    items.map(i => [
      i.file.link,
      i.type || "Unknown",
      i.rarity || "Common",
      i.cost || "—"
    ])
  );
} else {
  dv.paragraph("*No items available at this location.*");
}
```

# GM Notes

Private notes about this location, secrets, hidden areas, or plot hooks.

## Secrets
- Secret 1
- Secret 2

## Plot Hooks
- Hook 1
- Hook 2

## Random Encounters

```dice: 1d20
```

| d20 | Encounter |
|-----|-----------|
| 1-5 | Nothing happens |
| 6-10 | Minor social encounter |
| 11-15 | Shopping opportunity |
| 16-18 | Interesting NPC arrives |
| 19-20 | Plot hook revealed | 