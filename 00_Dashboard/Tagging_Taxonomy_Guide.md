---
tags: [meta, taxonomy, documentation]
---

# 🏷️ Aquabyssos Advanced Tagging Taxonomy
> *Hierarchical tag structure for instant filtered views and complex queries*

## 📚 Tag Hierarchy Structure

### Core Type Tags (Required - Pick One)
- `#session` - Session notes
- `#npc` - Non-player characters  
- `#location` - Places and areas
- `#quest` - Quests and missions
- `#item` - Items and equipment
- `#lore` - World lore and history
- `#faction` - Organizations and groups
- `#investigation` - Case files and mysteries
- `#encounter` - Combat and social encounters
- `#player` - Player characters

### Campaign Tags
```yaml
#campaign/aquabyssos
#campaign/aquabyssos/parliament-shadows
#campaign/aquabyssos/memory-wars
#campaign/aquabyssos/depth-mother
#campaign/aquabyssos/infinite-recursion
#campaign/aquabyssos/leviathan-prophecy
```

### Timeline Tags
```yaml
#timeline/prime                      # Original timeline
#timeline/altered                     # Any altered timeline
#timeline/altered/memory-war-1        # Specific alterations
#timeline/altered/memory-war-2
#timeline/altered/memory-war-3
#timeline/altered/shadow-victory
#timeline/altered/depth-awakening
#timeline/recursion/loop-1            # Time loops
#timeline/recursion/loop-2
#timeline/divergence/point-1          # Divergence points
```

### Depth Zone Tags
```yaml
#depth/surface                        # 0m
#depth/shallow                        # 1-500m
#depth/shallow/upper                  # 1-250m
#depth/shallow/lower                  # 251-500m
#depth/moderate                       # 501-1500m
#depth/moderate/upper                 # 501-1000m
#depth/moderate/lower                 # 1001-1500m
#depth/deep                          # 1501-3000m
#depth/deep/upper                    # 1501-2250m
#depth/deep/lower                    # 2251-3000m
#depth/abyssal                       # 3001-5000m
#depth/abyssal/upper                 # 3001-4000m
#depth/abyssal/lower                 # 4001-5000m
#depth/hadal                         # 5001-10000m
#depth/hadal/upper                   # 5001-7500m
#depth/hadal/lower                   # 7501-10000m
#depth/primordial                    # 10000m+
```

### Transformation Stage Tags
```yaml
#transformation/stage-0               # Unaffected
#transformation/stage-1               # Initial changes
#transformation/stage-1/physical      # Physical symptoms
#transformation/stage-1/mental        # Mental symptoms
#transformation/stage-2               # Moderate changes
#transformation/stage-2/shadow-touched
#transformation/stage-2/depth-adapted
#transformation/stage-3               # Major changes
#transformation/stage-3/shadow-merged
#transformation/stage-3/pressure-evolved
#transformation/stage-4               # Near complete
#transformation/stage-4/shadow-independent
#transformation/stage-4/deep-blessed
#transformation/stage-5               # Fully transformed
#transformation/stage-5/shadow-sovereign
#transformation/stage-5/depth-mother-chosen
```

### Faction Relationship Tags
```yaml
#faction/parliament                   # Parliament of Echoes
#faction/parliament/reputation-positive-10  # Max allied
#faction/parliament/reputation-positive-7   # Allied
#faction/parliament/reputation-positive-4   # Friendly
#faction/parliament/reputation-neutral-0    # Neutral
#faction/parliament/reputation-negative-3   # Unfriendly
#faction/parliament/reputation-negative-6   # Hostile
#faction/parliament/reputation-negative-10  # Nemesis

#faction/shadow-liberation           # Shadow Liberation Front
#faction/silhouette-surgeons        # The Silhouette Surgeons
#faction/memory-traders             # Memory Traders Guild
#faction/resonance-prophets         # The Resonance Prophets
#faction/deep-cults                # Cults of the Deep Mother
```

### Mystery & Discovery Tags
```yaml
#mystery/seven-shards               # The Seven Shards mystery
#mystery/seven-shards/discovered-0  # None found
#mystery/seven-shards/discovered-1  # One shard found
#mystery/seven-shards/discovered-2  # Two shards found
#mystery/seven-shards/theory        # Player theories
#mystery/seven-shards/revelation    # Truth revealed

#mystery/shadow-origin              # Origin of shadows
#mystery/deep-mother                # Deep Mother mystery
#mystery/timeline-fracture          # Timeline issues
#mystery/memory-weapons             # Memory weapon tech
```

### Session Phase Tags
```yaml
#phase/investigation                # Investigation heavy
#phase/combat                      # Combat focused
#phase/social                      # Social/RP heavy
#phase/exploration                 # Exploration focused
#phase/revelation                  # Major reveals
#phase/downtime                    # Downtime activities
#phase/preparation                 # Prep and planning
```

### Danger Level Tags
```yaml
#danger/safe                       # No immediate danger
#danger/low                        # Minimal threat
#danger/moderate                   # Standard threat
#danger/high                       # Significant danger
#danger/extreme                    # Life-threatening
#danger/lethal                     # TPK potential
```

### Memory State Tags
```yaml
#memory/intact                     # Full memories
#memory/fragmented                 # Partial memory loss
#memory/corrupted                  # False memories
#memory/traded                     # Memories exchanged
#memory/weapon                     # Weaponized memories
#memory/collective                 # Shared memories
```

### Shadow Interaction Tags
```yaml
#shadow/none                       # No shadow presence
#shadow/observed                   # Shadows watching
#shadow/contact                    # Shadow interaction
#shadow/influenced                 # Shadow manipulation
#shadow/merged                     # Shadow fusion
#shadow/independent                # Shadow autonomy
```

### Environmental Tags
```yaml
#environment/pressure-normal       # Standard pressure
#environment/pressure-high         # High pressure zone
#environment/pressure-extreme      # Crushing pressure
#environment/temporal-stable       # Normal time flow
#environment/temporal-distorted    # Time distortion
#environment/memory-tide           # Memory tide present
#environment/shadow-dense          # High shadow activity
```

## 🔍 Example Complex Queries

### Find all NPCs in deep zones allied with Parliament
```dataview
TABLE 
FROM #npc AND #depth/deep AND #faction/parliament/reputation-positive-7
```

### Show transformation progress for shadow-touched characters
```dataview
TABLE 
FROM #player AND (#transformation/stage-2/shadow-touched OR #transformation/stage-3/shadow-merged)
```

### List investigations involving memory weapons at moderate depth
```dataview
TABLE
FROM #investigation AND #mystery/memory-weapons AND #depth/moderate
```

### Timeline divergence points in the last 5 sessions
```dataview
TABLE
FROM #session AND #timeline/divergence
WHERE session_number >= (this.session_number - 5)
```

## 📋 Tagging Best Practices

### 1. Always Include Core Tags
Every note should have at least:
- One core type tag (#npc, #location, etc.)
- Campaign tag if campaign-specific
- Relevant depth tag if location-based

### 2. Use Hierarchical Tags
Instead of: `#shadow #independent #stage4`
Use: `#transformation/stage-4/shadow-independent`

### 3. Tag Inheritance
Parent tags automatically include children:
- Searching `#depth/shallow` finds both `/upper` and `/lower`
- Searching `#faction/parliament` finds all reputation levels

### 4. Consistent Formatting
- Use lowercase for all tags
- Use hyphens for multi-word concepts
- Use underscores for numbered sequences

### 5. Progressive Detail
Start broad, get specific:
1. `#npc` (type)
2. `#faction/parliament` (affiliation)
3. `#faction/parliament/reputation-positive-7` (relationship)
4. `#transformation/stage-2/shadow-touched` (state)

## 🎯 Quick Tag Templates

### For NPCs
```yaml
tags: [npc, faction/parliament/reputation-positive-4, depth/moderate, transformation/stage-1/mental, shadow/observed]
```

### For Locations
```yaml
tags: [location, depth/deep/upper, environment/pressure-high, environment/shadow-dense, danger/high]
```

### For Sessions
```yaml
tags: [session, campaign/aquabyssos/parliament-shadows, timeline/prime, phase/combat, depth/moderate/lower]
```

### For Investigations
```yaml
tags: [investigation, mystery/seven-shards/discovered-2, depth/shallow, faction/shadow-liberation, danger/moderate]
```

## 🔧 Tag Maintenance

### Tag Gardening Schedule
- **Daily**: Add tags to new notes
- **Weekly**: Review and consolidate similar tags
- **Monthly**: Audit tag hierarchy for consistency
- **Quarterly**: Refactor deprecated tags

### Tag Migration Script
```javascript
// Dataview script to find and update old tags
const oldTag = "#shadow-independent";
const newTag = "#transformation/stage-4/shadow-independent";

dv.pages(oldTag).forEach(p => {
    // Would need Templater or similar to actually update
    console.log(`Update ${p.file.name}: ${oldTag} → ${newTag}`);
});
```

## 📊 Tag Analytics

### Most Used Tags
```dataview
TABLE length(file.tags) as "Total Tags"
GROUP BY file.tags
SORT length(rows) DESC
LIMIT 20
```

### Tag Coverage Report
```dataviewjs
const total = dv.pages().length;
const tagged = dv.pages().where(p => p.file.tags && p.file.tags.length > 0).length;
const coverage = Math.round((tagged / total) * 100);

dv.paragraph(`**Tag Coverage**: ${coverage}% (${tagged}/${total} notes tagged)`);
```

---
*Tag Taxonomy Version: 2.0*
*Last Updated: <%tp.date.now("YYYY-MM-DD")%>*