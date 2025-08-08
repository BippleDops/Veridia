# Campaign Analytics Dashboard

## Session Pacing
```dataview
TABLE WITHOUT ID file.link AS Session, pacing as "Pacing (Combat/RP/Explore)", xp_awarded
FROM #session
SORT date DESC
LIMIT 20
```

## NPC Interaction Frequency (Top 20)
```dataviewjs
const sessions = dv.pages('#session').array();
const counts = new Map();
for (const s of sessions) {
  const npcs = s.npcs_met || s.npcsMet || [];
  for (const npc of npcs) {
    const key = (npc.path || npc).toString();
    counts.set(key, (counts.get(key) || 0) + 1);
  }
}
const top = [...counts.entries()].sort((a,b)=>b[1]-a[1]).slice(0,20);
dv.table(["NPC","Count"], top.map(([k,v]) => [dv.fileLink(k), v]));
```

## Location Visit Patterns (Top 20)
```dataviewjs
const sess = dv.pages('#session').array();
const map = new Map();
for (const s of sess) {
  const locs = s.locations_visited || s.locationsVisited || [];
  for (const loc of locs) {
    const key = (loc.path || loc).toString();
    map.set(key, (map.get(key) || 0) + 1);
  }
}
const topL = [...map.entries()].sort((a,b)=>b[1]-a[1]).slice(0,20);
dv.table(["Location","Visits"], topL.map(([k,v]) => [dv.fileLink(k), v]));
```

## Quest Completion Rate
```dataviewjs
const quests = dv.pages('#quest');
const total = quests.length;
const completed = quests.where(q => (q.quest_status||"") === "Completed").length;
const percent = total ? Math.round((completed/total)*100) : 0;
dv.paragraph(`Completed ${completed}/${total} (${percent}%)`);
```

## Subsystem Usage (Homebrew Mechanics)
```dataview
TABLE WITHOUT ID file.link AS Session, corruption_exposure, depth_adaptation, shadow_level_change
FROM #session
SORT date DESC
LIMIT 20
```

## Treasure Distribution (Last 10 Sessions)
```dataview
TABLE WITHOUT ID file.link AS Session, gold_gained as Gold, items_gained as Items
FROM #session
SORT date DESC
LIMIT 10
```


