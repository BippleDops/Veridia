# Post-Session Cleanup for <% tp.date.now("YYYY-MM-DD") %>

## 🗺️ Update Character Locations

```dataviewjs
const session = dv.current();
const characters = session.characters_present;
const location = session.location_primary;

if (characters && location) {
    dv.paragraph(`Update the location of the following characters to **${location}**:`);
    dv.list(characters);
} else {
    dv.paragraph("No character locations to update.");
}
```

## 🤫 Mark Revealed Secrets

*List any secrets that were revealed in this session.*

## ✅ Archive Completed Quests

```dataviewjs
const quests = dv.pages('#quest').where(q => q.status === 'completed');
if (quests.length > 0) {
    dv.paragraph("The following quests are marked as completed and can be archived:");
    dv.list(quests.map(q => q.file.link));
} else {
    dv.paragraph("No quests to archive.");
}
```

## 📝 Generate Session Summary

~~~ai-context
When generating a session summary, consider:
- Key Events: {{key_events}}
- Major Decisions: {{major_decisions}}
- Cliffhanger: {{cliffhanger}}
~~~

> [!NOTE] AI-Generated Summary
> *Click button to generate a session summary.*
> `BUTTON[generateSummary]`
