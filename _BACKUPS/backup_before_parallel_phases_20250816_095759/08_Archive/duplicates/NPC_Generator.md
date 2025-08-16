---
tags: [generator, npc, ai-ready]
---

# 🧙 NPC Generator

## Generation Parameters

### Basic Information
- **Name**:
- **Race**:
- **Class/Profession**:
- **Age**:

### Personality Matrix
```javascript
const traits = [
  "brave", "cowardly", "generous", "greedy", "honest", "deceptive",
  "loyal", "treacherous", "calm", "anxious", "wise", "foolish"
];

const selectedTraits = selectRandom(traits, 2);
```

### Appearance Generator
- **Height**:
- **Build**:
- **Distinguishing Features**:
- **Clothing**:

### Background Generator
1. **Origin**:
2. **Family**:
3. **Motivation**:
4. **Secret**:

### Stats Template (D&D 5e)
```
AC:
HP:
Speed:

STR: , DEX: , CON:
INT: , WIS: , CHA:

Skills:
```

### Relationship Web
- **Allies**:
- **Rivals**:
- **Neutral**:

### Voice & Dialogue
- **Speech Pattern**:
- **Catchphrase**:
- **Topics**:

## Auto-Generation Script
```python
def generate_npc(context=None):
    npc = {
        'name': generate_name(),
        'race': random.choice(RACES),
        'profession': get_contextual_profession(context),
        'personality': generate_personality(),
        'appearance': generate_appearance(),
        'background': generate_background(),
        'stats': generate_stats(),
        'relationships': generate_relationships(),
        'dialogue': generate_dialogue()
    }
    return format_npc_markdown(npc)
```

---
*AI-Ready Template - Compatible with GPT, Claude, and local models*
