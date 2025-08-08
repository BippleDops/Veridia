---
cssclasses:
- dashboard
- wide-page
- cards-16-9
tags:
- dashboard
- dm-tools
type: note
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# 🎲 DM Dashboard Ultra

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ## ⚡ Quick Actions
>> `BUTTON[newSession]` New Session
>> `BUTTON[newNPC]` New NPC
>> `BUTTON[newLocation]` New Location
>> `BUTTON[newQuest]` New Quest
>> `BUTTON[newCombat]` Start Combat
>> `BUTTON[randomEncounter]` Random Encounter
>
>> [!INFO|clean no-t]
>> ## 📊 Campaign Status
>> ```dataviewjs
>> const sessions = dv.pages('#session').length;
>> const lastSession = dv.pages('#session').sort(s => s.sessionNumber, 'desc').first();
>> const activeQuests = dv.pages('#quest').where(q => q.quest_status === "active").length;
>> const npcs = dv.pages('#NPC').length;
>> const pcs = dv.pages('"4-Party"').length;
>> 
>> dv.paragraph(`**Total Sessions:** ${sessions}
>> **Last Session:** ${lastSession ? lastSession.date : "None"}
>> **Active Quests:** ${activeQuests}
>> **NPCs Created:** ${npcs}
>> **Party Size:** ${pcs}`);
>> ```

---

## 🎯 Session Management

> [!column|no-i flex]
>
>> [!NOTE|clean no-t]
>> ### 📅 Recent Sessions
>> `EMBED[Session Log.base][Recent Sessions]{limit: 5}`
>
>> [!TIP|clean no-t]
>> ### 🎬 Next Session Prep
>> ```dataviewjs
>> const lastSession = dv.pages('#session').sort(s => s.sessionNumber, 'desc').first();
>> if (lastSession && lastSession.nextSessionPrep) {
>>   dv.paragraph(lastSession.nextSessionPrep);
>> } else {
>>   dv.paragraph("*No prep notes from last session*");
>> }
>> ```

---

## 📜 Quest Tracker

> [!NOTE|clean no-t]
> ### Active Quests
> `EMBED[Quest Campaign Tracker.base][Active Quests]`

> [!INFO|clean no-t flex]
> ### Quest Quick View
> ```dataviewjs
> const quests = dv.pages('#quest')
>   .where(q => q.quest_status === "active" || q.quest_status === "in-progress")
>   .sort(q => q.quest_priority, 'desc');
> 
> if (quests.length > 0) {
>   dv.table(
>     ["Quest", "Priority", "Progress", "Next Step"],
>     quests.map(q => [
>       q.file.link,
>       q.quest_priority || "normal",
>       `${q.quest_progress || 0}%`,
>       q.current_objective || "No objective set"
>     ])
>   );
> } else {
>   dv.paragraph("*No active quests*");
> }
> ```

---

## 👥 NPC Management

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ### 🌟 Important NPCs
>> `EMBED[NPC Directory.base][Important NPCs]{limit: 6}`
>
>> [!WARNING|clean no-t]
>> ### 🔄 Recent NPC Interactions
>> ```dataviewjs
>> const recentNPCs = dv.pages('#NPC')
>>   .where(n => n.lastSeen)
>>   .sort(n => n.lastSeen, 'desc')
>>   .limit(5);
>> 
>> dv.table(
>>   ["NPC", "Location", "Last Seen", "Relationship"],
>>   recentNPCs.map(n => [
>>     n.file.link,
>>     n.location || "Unknown",
>>     n.lastSeen,
>>     n.relationship || "neutral"
>>   ])
>> );
>> ```

---

## ⚔️ Combat & Encounters

> [!column|no-i]
>
>> [!DANGER|clean no-t]
>> ### Initiative Tracker
>> `EMBED[Combat Tracker.base][Initiative Tracker]`
>
>> [!NOTE|clean no-t]
>> ### Encounter Builder
>> `BUTTON[buildEncounter]` Build Encounter
>> 
>> **Quick Encounters by Environment:**
>> - `BUTTON[forestEncounter]` Forest
>> - `BUTTON[dungeonEncounter]` Dungeon
>> - `BUTTON[urbanEncounter]` Urban
>> - `BUTTON[underwaterEncounter]` Underwater

---

## 🗺️ Locations & Travel

> [!NOTE|clean no-t]
> ### Current Party Location
> ```dataviewjs
> // Find where the party is based on last session
> const lastSession = dv.pages('#session').sort(s => s.sessionNumber, 'desc').first();
> const lastLocation = lastSession?.locationsVisited?.slice(-1)[0];
> 
> if (lastLocation) {
>   const loc = dv.page(lastLocation);
>   if (loc) {
>     dv.paragraph(`## ${loc.file.name}
> **Type:** ${loc.location_type || "Unknown"}
> **Region:** ${loc.region || "Unknown"}
> **Notable Features:** ${loc.notable_features?.join(", ") || "None listed"}`);
>   }
> } else {
>   dv.paragraph("*Party location unknown*");
> }
> ```

---

## 📚 Quick References

> [!multi-column]
>
>> [!INFO|clean no-t]
>> ### 🎲 Dice Roller
>> `dice: 1d20` Attack
>> `dice: 2d6+3` Damage
>> `dice: 1d100` Percentile
>> `dice: 4d6dl1` Ability Score
>
>> [!TIP|clean no-t]
>> ### 📖 Quick Rules
>> - [[Conditions]]
>> - [[Combat Rules]]
>> - [[Skill Checks]]
>> - [[Spellcasting Rules]]
>
>> [!WARNING|clean no-t]
>> ### ⏱️ Timers
>> `BUTTON[startTimer]` Session Timer
>> `BUTTON[combatRound]` Combat Round
>> `BUTTON[shortRest]` Short Rest (1hr)
>> `BUTTON[longRest]` Long Rest (8hr)

---

## 🎯 DM Tools

> [!column|no-i flex]
>
>> [!NOTE|clean no-t]
>> ### 🎭 NPC Name Generator
>> `BUTTON[generateName]` Random Name
>> 
>> **By Race:**
>> - `BUTTON[humanName]` Human
>> - `BUTTON[elfName]` Elf
>> - `BUTTON[dwarfName]` Dwarf
>
>> [!INFO|clean no-t]
>> ### 💰 Loot Generator
>> `BUTTON[generateLoot]` Random Loot
>> 
>> **By CR:**
>> - `BUTTON[lootCR0-4]` CR 0-4
>> - `BUTTON[lootCR5-10]` CR 5-10
>> - `BUTTON[lootCR11-16]` CR 11-16
>> - `BUTTON[lootCR17+]` CR 17+

---

## 📊 Campaign Analytics

```dataviewjs
// Session frequency
const sessions = dv.pages('#session').sort(s => s.date);
if (sessions.length > 1) {
  const first = moment(sessions[0].date);
  const last = moment(sessions[sessions.length - 1].date);
  const daysBetween = last.diff(first, 'days');
  const avgDays = Math.round(daysBetween / (sessions.length - 1));
  
  dv.paragraph(`### Session Frequency
- **Average:** Every ${avgDays} days
- **Total Campaign Length:** ${daysBetween} days
- **Sessions Run:** ${sessions.length}`);
}

// Player attendance
const playerAttendance = {};
sessions.forEach(s => {
  (s.players || []).forEach(p => {
    playerAttendance[p] = (playerAttendance[p] || 0) + 1;
  });
});

if (Object.keys(playerAttendance).length > 0) {
  dv.paragraph("### Player Attendance");
  dv.table(
    ["Player", "Sessions", "Attendance %"],
    Object.entries(playerAttendance).map(([player, count]) => [
      player,
      count,
      `${Math.round((count / sessions.length) * 100)}%`
    ])
  );
}
```

---

## 🔧 System Status

> [!NOTE|clean no-t minimal]
> **Vault Stats:**
> - Notes: `$= dv.pages().length`
> - NPCs: `$= dv.pages('#NPC').length`
> - Locations: `$= dv.pages('#location').length`
> - Items: `$= dv.pages('"3-Mechanics/Items"').length`
> - Spells: `$= dv.pages('"3-Mechanics/CLI/spells"').length`
> - Monsters: `$= dv.pages('"3-Mechanics/CLI/bestiary"').length`

---

*Last updated: `= this.file.mtime`* 