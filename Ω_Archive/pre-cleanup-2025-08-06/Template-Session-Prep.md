# Session Prep for <% tp.date.now("YYYY-MM-DD") %>

## 🎯 Active Quests

```dataviewjs
const quests = dv.pages('#quest').where(q => q.status === 'active');
if (quests.length > 0) {
    dv.table(["Quest", "Giver"], quests.map(q => [q.file.link, q.quest_giver]));
} else {
    dv.paragraph("No active quests.");
}
```

## 👥 Nearby NPCs

```dataviewjs
const currentLocation = dv.current().location_primary;
if (currentLocation) {
    const npcs = dv.pages('#npc').where(n => n.location_current === currentLocation);
    if (npcs.length > 0) {
        dv.table(["NPC", "Race", "Class"], npcs.map(n => [n.file.link, n.race, n.class]));
    } else {
        dv.paragraph("No NPCs at the current location.");
    }
} else {
    dv.paragraph("Set the primary location for this session to see nearby NPCs.");
}
```

## 🎲 Encounter Options

~~~ai-context
When generating an encounter, consider:
- Location: {{location}}
- Party Level: {{party_level}}
- Encounter Type: {{encounter_type}}
~~~

> [!NOTE] AI-Generated Encounter
> *Click button to generate a random encounter.*
> `BUTTON[generateEncounter]`
