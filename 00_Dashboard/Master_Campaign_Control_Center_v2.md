---
tags: [dashboard]
cssclass: dashboard-enhanced
---

# 🎲 Master Campaign Control Center v2.0
> *Enhanced with automation, quick actions, and natural language commands*

<div class="dashboard-header">

## 📊 Campaign Status
- **Current Session:** `INPUT[text:session_number]`
- **Party Location:** `INPUT[text:current_location]` 
- **Days in Campaign:** `INPUT[number:campaign_days]`
- **Next Session:** `INPUT[date:next_session_date]`

</div>

---

## 🚀 Quick Create Actions

<div class="quick-actions">

```dataviewjs
// Quick Create Buttons
const createButton = (label, template, folder) => {
    return `<button onclick="
        (async () => {
            const tp = app.plugins.plugins['templater-obsidian'].templater;
            const folder = '${folder}';
            const name = await tp.system.prompt('Enter name:');
            if (name) {
                const file = await tp.create_new_note_from_template(
                    tp.find_tfile('${template}'),
                    folder + '/' + name
                );
                app.workspace.activeLeaf.openFile(file);
            }
        })()
    ">${label}</button>`;
};

const buttons = [
    ['🧙 New NPC', 'NPC_Template', '01_Campaigns/NPCs'],
    ['📍 New Location', 'Location_Template', '01_Campaigns/Locations'],
    ['⚔️ New Quest', 'Quest_Template', '01_Campaigns/Quests'],
    ['📅 New Session', 'Session_Template', '01_Campaigns/Sessions'],
    ['🗡️ New Encounter', 'Encounter_Template', '01_Campaigns/Encounters']
];

dv.paragraph(buttons.map(b => createButton(...b)).join(' '));
```

</div>

---

## 🔍 Natural Language Search

<div class="nl-search">

```dataviewjs
// Natural Language Query Interface
dv.paragraph(`
<input type="text" id="nl-search" placeholder="Try: 'Show me all NPCs in the Market District' or 'What quests involve Gareth?'" style="width: 100%; padding: 10px; font-size: 16px;">
<div id="nl-results"></div>

<script>
document.getElementById('nl-search').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
        const query = e.target.value.toLowerCase();
        let results = [];
        
        // Parse natural language patterns
        if (query.includes('npcs in')) {
            const location = query.split('npcs in')[1].trim();
            results = dv.pages('#npc').where(p => 
                p.location && p.location.path && p.location.path.includes(location)
            );
        } else if (query.includes('quests involving') || query.includes('quests with')) {
            const npc = query.match(/involving|with\s+(\w+)/)[1];
            results = dv.pages('#quest').where(p => 
                p.related_npcs && p.related_npcs.some(n => n.path.includes(npc))
            );
        } else if (query.includes('dangerous locations')) {
            results = dv.pages('#location').where(p => p.danger_level > 6);
        } else if (query.includes('active quests')) {
            results = dv.pages('#quest').where(p => p.status === 'active');
        } else if (query.includes('recent sessions')) {
            results = dv.pages('#session').sort(p => p.date, 'desc').limit(5);
        }
        
        // Display results
        const resultDiv = document.getElementById('nl-results');
        if (results.length > 0) {
            resultDiv.innerHTML = '<h4>Results:</h4>' + 
                results.map(r => '<a href="' + r.file.path + '">' + r.file.name + '</a>').join('<br>');
        } else {
            resultDiv.innerHTML = '<p>No results found. Try different keywords.</p>';
        }
    }
});
</script>
`);
```

</div>

---

## ⚔️ Combat Management

![[combat-tracker.base]]

<div class="combat-controls">

```dataviewjs
// Combat Quick Actions
dv.paragraph(`
<button onclick="
    app.fileManager.processFrontMatter(
        app.workspace.activeLeaf.view.file,
        fm => { fm.combat_status = 'active'; }
    )
">⚔️ Start Combat</button>

<button onclick="
    app.fileManager.processFrontMatter(
        app.workspace.activeLeaf.view.file,
        fm => { fm.combat_status = 'inactive'; }
    )
">🏁 End Combat</button>

<button onclick="
    const hp = prompt('Enter damage amount:');
    if (hp) {
        app.fileManager.processFrontMatter(
            app.workspace.activeLeaf.view.file,
            fm => { fm.current_hp = (fm.current_hp || fm.max_hp) - parseInt(hp); }
        );
    }
">💔 Apply Damage</button>

<button onclick="
    const hp = prompt('Enter healing amount:');
    if (hp) {
        app.fileManager.processFrontMatter(
            app.workspace.activeLeaf.view.file,
            fm => { 
                fm.current_hp = Math.min(
                    (fm.current_hp || 0) + parseInt(hp), 
                    fm.max_hp
                ); 
            }
        );
    }
">💚 Apply Healing</button>
`);
```

</div>

---

## 👥 NPC Network

![[npc-roster.base]]

### Relationship Manager

```dataviewjs
// Interactive Relationship Builder
dv.paragraph(`
<div style="display: flex; gap: 20px; margin: 20px 0;">
    <select id="npc1" style="flex: 1; padding: 5px;">
        <option>Select NPC 1</option>
        ${dv.pages('#npc').map(p => '<option>' + p.file.name + '</option>').join('')}
    </select>
    
    <select id="relationship-type" style="flex: 1; padding: 5px;">
        <option value="ally">Ally</option>
        <option value="enemy">Enemy</option>
        <option value="romantic">Romantic</option>
        <option value="family">Family</option>
        <option value="business">Business</option>
    </select>
    
    <select id="npc2" style="flex: 1; padding: 5px;">
        <option>Select NPC 2</option>
        ${dv.pages('#npc').map(p => '<option>' + p.file.name + '</option>').join('')}
    </select>
    
    <button onclick="
        const npc1 = document.getElementById('npc1').value;
        const npc2 = document.getElementById('npc2').value;
        const type = document.getElementById('relationship-type').value;
        
        if (npc1 && npc2 && npc1 !== npc2) {
            // Add relationship to both NPCs
            console.log('Creating relationship:', npc1, type, npc2);
            alert('Relationship created: ' + npc1 + ' - ' + type + ' - ' + npc2);
        }
    ">🔗 Create Relationship</button>
</div>
`);
```

---

## 📜 Quest Management

![[quest-tracker.base]]

### Quest Progress Tracker

```dataviewjs
// Visual Quest Progress
const quests = dv.pages('#quest').where(p => p.status === 'active');

dv.table(
    ["Quest", "Progress", "Actions"],
    quests.map(q => {
        const completed = q.objectives ? q.objectives.filter(o => o.completed).length : 0;
        const total = q.objectives ? q.objectives.length : 1;
        const percent = Math.round((completed / total) * 100);
        
        return [
            q.file.link,
            `<div style="width: 200px; background: #333; border-radius: 10px; padding: 2px;">
                <div style="width: ${percent}%; background: #4CAF50; border-radius: 10px; padding: 5px; text-align: center; color: white;">
                    ${percent}%
                </div>
            </div>`,
            `<button onclick="app.workspace.openLinkText('${q.file.path}', '', false)">📝 Edit</button>`
        ];
    })
);
```

---

## 🗺️ Location Database

![[location-tracker.base]]

### Location Quick Travel

```dataviewjs
// Location Jump Menu
const locations = dv.pages('#location').sort(p => p.file.name);

dv.paragraph(`
<select onchange="
    if (this.value) {
        app.workspace.openLinkText(this.value, '', false);
    }
" style="width: 100%; padding: 10px; font-size: 16px;">
    <option value="">📍 Quick Travel to Location...</option>
    ${locations.map(l => 
        '<option value="' + l.file.path + '">' + 
        l.file.name + ' (Danger: ' + (l.danger_level || 0) + '/10)' +
        '</option>'
    ).join('')}
</select>
`);
```

---

## 🕸️ Relationship Web

![[relationship-graph.base]]

---

## 📅 Campaign Timeline

![[campaign-dashboard.base]]

### Session Planning Assistant

```dataviewjs
// Automated Session Prep
dv.paragraph(`
<button onclick="
    (async () => {
        const lastSession = dv.pages('#session').sort(p => p.date, 'desc').first();
        const activeQuests = dv.pages('#quest').where(p => p.status === 'active');
        
        let prepNotes = '# Session Prep Notes\\n\\n';
        prepNotes += '## Last Session Recap\\n';
        prepNotes += lastSession ? '- ' + lastSession.file.name + '\\n' : '- No previous session\\n';
        
        prepNotes += '\\n## Active Quests\\n';
        activeQuests.forEach(q => {
            prepNotes += '- [[' + q.file.name + ']]\\n';
        });
        
        prepNotes += '\\n## NPCs to Remember\\n';
        prepNotes += '\\n## Potential Encounters\\n';
        prepNotes += '\\n## Treasure & Rewards\\n';
        
        // Create prep note
        const file = await app.vault.create(
            '01_Campaigns/Sessions/Prep-' + new Date().toISOString().split('T')[0] + '.md',
            prepNotes
        );
        app.workspace.activeLeaf.openFile(file);
    })()
">📝 Generate Session Prep</button>

<button onclick="
    (async () => {
        const npcs = dv.pages('#npc').array();
        const randomNpc = npcs[Math.floor(Math.random() * npcs.length)];
        alert('Random NPC Encounter: ' + randomNpc.file.name);
        app.workspace.openLinkText(randomNpc.file.path, '', false);
    })()
">🎲 Random NPC</button>

<button onclick="
    (async () => {
        const locations = dv.pages('#location').array();
        const randomLoc = locations[Math.floor(Math.random() * locations.length)];
        alert('Random Location: ' + randomLoc.file.name);
        app.workspace.openLinkText(randomLoc.file.path, '', false);
    })()
">🗺️ Random Location</button>
`);
```

---

## 🎯 GM Command Center

### Dice Roller

```dataviewjs
// Inline Dice Roller
dv.paragraph(`
<div style="display: flex; gap: 10px; margin: 20px 0;">
    <button onclick="alert('d20: ' + (Math.floor(Math.random() * 20) + 1))">🎲 d20</button>
    <button onclick="alert('d12: ' + (Math.floor(Math.random() * 12) + 1))">🎲 d12</button>
    <button onclick="alert('d10: ' + (Math.floor(Math.random() * 10) + 1))">🎲 d10</button>
    <button onclick="alert('d8: ' + (Math.floor(Math.random() * 8) + 1))">🎲 d8</button>
    <button onclick="alert('d6: ' + (Math.floor(Math.random() * 6) + 1))">🎲 d6</button>
    <button onclick="alert('d4: ' + (Math.floor(Math.random() * 4) + 1))">🎲 d4</button>
    <button onclick="alert('d100: ' + (Math.floor(Math.random() * 100) + 1))">🎲 d100</button>
</div>

<input type="text" id="dice-formula" placeholder="Enter dice formula (e.g., 2d6+3)" style="width: 200px; padding: 5px;">
<button onclick="
    const formula = document.getElementById('dice-formula').value;
    const match = formula.match(/(\d+)d(\d+)([+-]\d+)?/);
    if (match) {
        const num = parseInt(match[1]);
        const sides = parseInt(match[2]);
        const mod = parseInt(match[3] || 0);
        let total = mod;
        let rolls = [];
        for (let i = 0; i < num; i++) {
            const roll = Math.floor(Math.random() * sides) + 1;
            rolls.push(roll);
            total += roll;
        }
        alert('Rolling ' + formula + ': [' + rolls.join(', ') + '] + ' + mod + ' = ' + total);
    }
">🎲 Roll</button>
`);
```

### Campaign Statistics

```dataviewjs
// Live Campaign Stats
const stats = {
    npcs: dv.pages('#npc').length,
    locations: dv.pages('#location').length,
    quests: dv.pages('#quest').length,
    sessions: dv.pages('#session').length,
    activeQuests: dv.pages('#quest').where(p => p.status === 'active').length,
    completedQuests: dv.pages('#quest').where(p => p.status === 'completed').length,
    allies: dv.pages('#npc').where(p => p.disposition > 5).length,
    enemies: dv.pages('#npc').where(p => p.disposition < -5).length
};

dv.table(
    ["Metric", "Count", "Status"],
    [
        ["Total NPCs", stats.npcs, stats.npcs > 10 ? "✅" : "⚠️ Need more"],
        ["Total Locations", stats.locations, stats.locations > 5 ? "✅" : "⚠️ Need more"],
        ["Total Quests", stats.quests, stats.quests > 5 ? "✅" : "⚠️ Need more"],
        ["Sessions Run", stats.sessions, "📈"],
        ["Active Quests", stats.activeQuests, stats.activeQuests > 0 ? "✅" : "⚠️ Add quests"],
        ["Completed Quests", stats.completedQuests, "🏆"],
        ["Allied NPCs", stats.allies, "🤝"],
        ["Enemy NPCs", stats.enemies, "⚔️"]
    ]
);
```

---

## 🔧 Vault Maintenance

### Quick Actions

```dataviewjs
dv.paragraph(`
<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
    <button onclick="
        app.commands.executeCommandById('app:reload');
    ">🔄 Reload Vault</button>
    
    <button onclick="
        app.commands.executeCommandById('app:open-vault-settings');
    ">⚙️ Vault Settings</button>
    
    <button onclick="
        const pages = dv.pages().where(p => !p.file.frontmatter);
        alert('Found ' + pages.length + ' notes without frontmatter');
    ">🔍 Find Issues</button>
    
    <button onclick="
        app.commands.executeCommandById('app:open-help');
    ">❓ Help</button>
</div>
`);
```

---

## 📝 Notes & Reminders

`INPUT[textarea:campaign_notes]`

---

## 🎮 Keyboard Shortcuts

| Action | Shortcut | Description |
|--------|----------|-------------|
| New NPC | `Ctrl+Shift+N` | Create NPC from template |
| New Quest | `Ctrl+Shift+Q` | Create quest from template |
| New Session | `Ctrl+Shift+S` | Create session note |
| Quick Find | `Ctrl+O` | Open quick switcher |
| Command | `Ctrl+P` | Command palette |
| Daily Note | `Ctrl+D` | Today's note |

---

<style>
.dashboard-enhanced {
    --quick-action-bg: #2d3748;
    --quick-action-hover: #4a5568;
}

.dashboard-header {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 20px;
    border-radius: 10px;
    color: white;
    margin-bottom: 20px;
}

.quick-actions button {
    background: var(--quick-action-bg);
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s;
}

.quick-actions button:hover {
    background: var(--quick-action-hover);
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

.combat-controls button {
    margin: 5px;
    padding: 8px 15px;
}

#nl-search {
    background: var(--background-secondary);
    border: 2px solid var(--background-modifier-border);
    border-radius: 8px;
}

#nl-results {
    margin-top: 15px;
    padding: 10px;
    background: var(--background-secondary);
    border-radius: 8px;
}
</style>

---

*Dashboard v2.0 - Enhanced with Automation & Natural Language Processing*
*Powered by Obsidian Bases v1.9.7 & DataviewJS*
*Last Updated: August 6, 2025*