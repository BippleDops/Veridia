---
tags: [generator, npc, ai-ready]
---

# 🧙 NPC Generator

## Generation Parameters

### Basic Information
- **Name**: {{Generate from pattern}}
- **Race**: {{Random from: Human, Elf, Dwarf, Halfling, Dragonborn}}
- **Class/Profession**: {{Based on location context}}
- **Age**: {{Random appropriate to race}}

### Personality Matrix
```javascript
const traits = [
  "brave", "cowardly", "generous", "greedy", "honest", "deceptive",
  "loyal", "treacherous", "calm", "anxious", "wise", "foolish"
];

const selectedTraits = selectRandom(traits, 2);
```

### Appearance Generator
- **Height**: {{Race-appropriate range}}
- **Build**: {{Random: Slim, Average, Muscular, Heavy}}
- **Distinguishing Features**: {{Generate 1-3 unique features}}
- **Clothing**: {{Based on profession and wealth}}

### Background Generator
1. **Origin**: {{Random location from vault}}
2. **Family**: {{Generate family structure}}
3. **Motivation**: {{Select from archetypal motivations}}
4. **Secret**: {{Generate plot hook}}

### Stats Template (D&D 5e)
```
AC: {{10 + profession_bonus}}
HP: {{roll: profession_dice}}
Speed: {{race_speed}}

STR: {{3d6}}, DEX: {{3d6}}, CON: {{3d6}}
INT: {{3d6}}, WIS: {{3d6}}, CHA: {{3d6}}

Skills: {{Select 2-4 based on profession}}
```

### Relationship Web
- **Allies**: {{Link to existing NPCs}}
- **Rivals**: {{Generate or link conflicts}}
- **Neutral**: {{Random connections}}

### Voice & Dialogue
- **Speech Pattern**: {{Generate from templates}}
- **Catchphrase**: {{Create memorable phrase}}
- **Topics**: {{Generate 3-5 conversation topics}}

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
