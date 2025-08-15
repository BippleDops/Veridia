---
tags: [generator, location, ai-ready]
---

# 🏰 Location Generator

## Generation Framework

### Location Type Matrix
| d20 | Type | Sub-type |
|-----|------|----------|
| 1-5 | Settlement | Village/Town/City |
| 6-10 | Wilderness | Forest/Mountain/Plain |
| 11-13 | Dungeon | Cave/Ruin/Tomb |
| 14-16 | Building | Inn/Shop/Temple |
| 17-19 | Special | Magical/Planar |
| 20 | Unique | Roll twice, combine |

### Procedural Details
- **Size**: {{Scale based on type}}
- **Population**: {{Calculate from size}}
- **Wealth**: {{Random: Poor/Modest/Wealthy/Rich}}
- **Alignment**: {{Lawful/Neutral/Chaotic}}

### Feature Generator
```javascript
const features = {
  natural: ["river", "cliff", "grove", "spring"],
  constructed: ["bridge", "tower", "wall", "monument"],
  magical: ["portal", "leyline", "ward", "anomaly"]
};
```

### Inhabitant Generator
- **Primary**: {{Race/creature type}}
- **Secondary**: {{Supporting population}}
- **Notable NPCs**: {{Generate 3-5}}

### History Builder
1. **Founded**: {{Generate timeline}}
2. **Major Events**: {{Create 2-3 historical events}}
3. **Current Status**: {{Political/economic state}}

### Adventure Hooks
- **Problem**: {{Generate local issue}}
- **Opportunity**: {{Create quest hook}}
- **Mystery**: {{Add intrigue element}}

---
*Learns from existing vault patterns*
