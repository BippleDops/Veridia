---
tags:
  - guide
  - migration
  - bases
  - dataview
---

# 📊 Dataview to Bases Migration Guide

## Overview

This guide helps you migrate from Dataview queries to the new Bases plugin for better performance and features.

## 🎯 Key Differences

### Dataview
- JavaScript-based queries
- Runs on every note open
- Can slow down large vaults
- Limited UI options

### Bases
- YAML configuration
- Cached results
- Native performance
- Rich UI components
- Live updates

## 🔄 Migration Examples

### Example 1: Simple Table Query

**Dataview:**
```dataviewjs
dv.table(
  ["Name", "Location", "Status"],
  dv.pages('#NPC')
    .map(p => [p.file.link, p.location, p.status])
)
```

**Bases:**
```yaml
views:
  - type: table
    name: NPC List
    filters:
      and:
        - tags.contains("NPC")
    order:
      - file.name
      - location
      - status
```

### Example 2: Filtered Query

**Dataview:**
```dataviewjs
dv.table(
  ["Quest", "Status", "Priority"],
  dv.pages('#quest')
    .where(q => q.quest_status === "active")
    .sort(q => q.quest_priority, 'desc')
    .map(q => [q.file.link, q.quest_status, q.quest_priority])
)
```

**Bases:**
```yaml
views:
  - type: table
    name: Active Quests
    filters:
      and:
        - tags.contains("quest")
        - quest_status.equals("active")
    order:
      - file.name
      - quest_status
      - quest_priority
    sort:
      - column: quest_priority
        direction: DESC
```

### Example 3: Complex Query with Calculations

**Dataview:**
```dataviewjs
const sessions = dv.pages('#session');
const totalXP = sessions.map(s => s.xpAwarded || 0).reduce((a,b) => a + b, 0);
const avgAttendance = sessions.map(s => s.players?.length || 0).reduce((a,b) => a + b, 0) / sessions.length;

dv.paragraph(`Total XP: ${totalXP}`);
dv.paragraph(`Avg Attendance: ${avgAttendance.toFixed(1)}`);
```

**Bases:**
```yaml
views:
  - type: statistics
    name: Campaign Stats
    filters:
      and:
        - tags.contains("session")
    statistics:
      - name: Total XP
        formula: sum(xpAwarded)
      - name: Average Attendance
        formula: avg(players.length)
```

## 📋 Step-by-Step Migration Process

### Step 1: Identify Dataview Queries

1. Search your vault for:
   - ` ```dataview`
   - ` ```dataviewjs`
   - `dv.table(`
   - `dv.list(`
   - `dv.pages(`

2. Create a list of queries to migrate

### Step 2: Create Base Files

For each major query type, create a `.base` file:

1. `NPC Directory.base`
2. `Quest Tracker.base`
3. `Session Log.base`
4. `Item Inventory.base`
5. `Location Guide.base`

### Step 3: Convert Queries

#### Simple Table → Table View
```yaml
views:
  - type: table
    name: View Name
    filters:
      and:
        - property.condition("value")
    order:
      - column1
      - column2
    sort:
      - column: column1
        direction: ASC
```

#### List → Cards View
```yaml
views:
  - type: cards
    name: View Name
    filters:
      and:
        - tags.contains("tag")
    columns: 3
    properties:
      - property1
      - property2
```

#### Task List → Task View
```yaml
views:
  - type: tasks
    name: Task List
    filters:
      and:
        - has.task
        - not:
            - task.completed
```

### Step 4: Add Formulas

Convert Dataview inline calculations to Bases formulas:

**Dataview:**
```javascript
`= this.players.length + "/" + (this.players.length + this.absent.length)`
```

**Bases:**
```yaml
formulas:
  Attendance: |
    js:
    const present = target.players?.length || 0;
    const absent = target.absent?.length || 0;
    return `${present}/${present + absent}`;
```

### Step 5: Update Note References

Replace Dataview queries in notes with Base embeds:

**Before:**
```markdown
```dataviewjs
dv.table(["Name", "Status"], dv.pages('#NPC'))
```
```

**After:**
```markdown
`EMBED[NPC Directory.base][All NPCs]`
```

## 🎨 Advanced Features

### 1. Interactive Filters
```yaml
parameters:
  location:
    type: select
    source: "2-World/Locations"
  status:
    type: select
    options:
      - active
      - dead
      - missing
```

### 2. Conditional Formatting
```yaml
formulas:
  StatusColor: |
    js:
    const status = target.status;
    const colors = {
      'active': 'green',
      'dead': 'red',
      'missing': 'orange'
    };
    return `<span style="color: ${colors[status]}">${status}</span>`;
```

### 3. Performance Optimization

For large datasets (1000+ notes):

```yaml
views:
  - type: table
    name: Monsters
    filters:
      and:
        - path.includes("bestiary")
    pageSize: 50  # Pagination
    lazy: true    # Lazy loading
```

## 🔧 Troubleshooting

### Common Issues

1. **Missing Properties**
   - Ensure property names match exactly
   - Check for typos in YAML

2. **Filter Not Working**
   - Use correct filter syntax
   - Check property types (string vs array)

3. **Performance Issues**
   - Add `pageSize` for large views
   - Use path filters to limit scope
   - Enable `lazy` loading

### Debug Mode

Add to your base file:
```yaml
debug: true
```

## 📊 Conversion Reference

| Dataview | Bases |
|----------|-------|
| `dv.pages()` | `filters:` |
| `.where()` | `and:` / `or:` |
| `.sort()` | `sort:` |
| `.map()` | `formulas:` |
| `.limit()` | `limit:` |
| `file.link` | `file.name` (auto-linked) |
| `.contains()` | `.contains()` |
| `=` | `.equals()` |
| `!=` | `not:` → `.equals()` |
| `>` | `.gt()` |
| `<` | `.lt()` |

## 🚀 Migration Checklist

- [ ] Install Bases plugin
- [ ] Create `.base` files for main queries
- [ ] Convert simple tables first
- [ ] Add formulas for calculations
- [ ] Test each view
- [ ] Update note embeds
- [ ] Remove old Dataview queries
- [ ] Optimize large views
- [ ] Document custom formulas

## 💡 Best Practices

1. **Start Small**: Migrate simple queries first
2. **Test Incrementally**: Verify each base works
3. **Keep Backups**: Don't delete Dataview queries immediately
4. **Use Folders**: Organize bases in dedicated folder
5. **Document Formulas**: Comment complex JavaScript
6. **Performance First**: Use filters to limit data
7. **Reuse Formulas**: Create utility formulas

---

*Remember: Bases updates live, so changes appear immediately across your vault!* 