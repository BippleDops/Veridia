---
tags: [meta, testing, setup-guide]
---

# 🧪 System Testing Guide

## ✅ Testing Checklist

### 1. Plugin Verification ✅
- ✅ **Dataview** - Installed and ready
- ✅ **Templater** - Installed and ready
- ✅ Additional helpful plugins detected:
  - Meta Bind (for interactive elements)
  - Dice Roller (for random tables)
  - Initiative Tracker (for combat)
  - Fantasy Calendar (for timeline tracking)

### 2. Test the Dashboard Systems

#### 📊 Campaign State Dashboard
1. Open `00_Dashboard/Campaign_State.md`
2. **What to expect**:
   - Faction reputation bars should display
   - Character transformation tables should show
   - Progress bars for act completion should render
   - Probability engine should show percentages

**Troubleshooting**:
- If tables don't show: Enable JavaScript in Dataview settings
- If queries fail: Check Dataview is enabled in settings

#### 🔍 Investigation Board
1. Open `01_Campaigns/Aquabyssos/_Investigations/Investigation_Board.md`
2. Check the example case: `The_Shadow_Parliament_Conspiracy.md`
3. **What to expect**:
   - Case overview with clue tracking
   - Mermaid diagrams for clue connections
   - Progress bars for investigation phases

#### 🧠 NPC Brain Example
1. Open `01_Campaigns/Aquabyssos/NPCs/Senator_Glaucus_Brain.md`
2. **What to expect**:
   - Complete motivation pyramid
   - Relationship matrices
   - Dialogue examples
   - Dynamic state tracking

#### 🕸️ Relationship Canvas
1. Open `01_Campaigns/Aquabyssos/Relationship_Web.canvas`
2. **What to expect**:
   - Visual network of faction relationships
   - Color-coded connection strengths
   - Draggable nodes for reorganization

### 3. Create Your First Session Prep

#### Using Templater
1. **Setup Templater** (if not configured):
   - Settings → Templater → Template folder: `05_Templates`
   - Enable: "Trigger Templater on new file creation"

2. **Create Session Prep**:
   ```
   Method 1: Templater Command
   - Cmd/Ctrl + P → "Templater: Create new note from template"
   - Select "Session_Prep_Automated"
   - Answer the prompts
   
   Method 2: Manual
   - Create new note in Sessions folder
   - Insert template with Templater hotkey
   ```

3. **Fill in the prompts**:
   - Session Number: 11
   - Session Title: "The Shadow Vote"
   - Primary objectives as prompted

### 4. Quick Functionality Tests

#### Test Dataview Queries
Create a test note with this content:
```markdown
---
tags: [test, npc, faction/parliament/reputation-positive-5, depth/moderate]
---
# Test NPC

## Query Test
\```dataview
TABLE 
FROM #npc
WHERE contains(file.tags, "faction/parliament")
\```
```

#### Test Tag Filtering
1. Click any hierarchical tag (e.g., `#depth/moderate`)
2. Should show all notes at that depth level
3. Parent tags include children (e.g., `#depth` shows all depth zones)

### 5. Session Workflow Test

#### Pre-Session Setup
1. Review `Campaign_State.md` - Check current world state
2. Open `Investigation_Board.md` - See active cases
3. Create new session prep from template
4. Review `Senator_Glaucus_Brain.md` for NPC prep

#### During Session Simulation
1. Keep Campaign State open in sidebar
2. Update investigation clues in case file
3. Modify NPC relationship values
4. Track faction reputation changes

#### Post-Session Updates
1. Update session number in Campaign State
2. Mark investigation progress
3. Update NPC brain states
4. Add session notes to relevant files

## 🎯 Expected Results

### Working Systems Should Show:
- ✅ Dynamic tables with faction data
- ✅ Progress bars using Unicode characters
- ✅ Mermaid diagrams rendering
- ✅ Canvas relationship web displaying
- ✅ Cross-file links working
- ✅ Tag filtering functioning

### Common Issues & Fixes

**"No results to show"**
- Check file has required tags
- Verify Dataview syntax
- Ensure files exist in expected locations

**Template not inserting**
- Configure Templater template folder
- Check template syntax for errors
- Try manual template insertion

**Canvas not opening**
- Enable Canvas core plugin
- Check file extension is `.canvas`
- Try reopening Obsidian

## 🚀 Next Steps After Testing

1. **Customize faction names** in Campaign State
2. **Add your PCs** to the system
3. **Create investigation cases** for your mysteries
4. **Convert existing NPCs** to Brain system gradually
5. **Tag existing content** with new taxonomy

## 📝 Validation Checklist

Rate each system (1-5 stars):
- [ ] Campaign State Dashboard - ⭐⭐⭐⭐⭐
- [ ] Session Prep Automation - ⭐⭐⭐⭐⭐
- [ ] Investigation System - ⭐⭐⭐⭐⭐
- [ ] NPC Brain System - ⭐⭐⭐⭐⭐
- [ ] Relationship Canvas - ⭐⭐⭐⭐⭐
- [ ] Tagging Taxonomy - ⭐⭐⭐⭐⭐

## 💡 Quick Tips

1. **Start small** - Convert 1-2 NPCs first
2. **Use gradually** - Don't feel pressured to use everything immediately
3. **Customize freely** - Modify templates to match your style
4. **Keep backups** - Before major changes
5. **Iterate** - These systems should evolve with your campaign

---

## 🎉 Success Indicators

You'll know the system is working when:
- Session prep takes 50% less time
- You never lose track of NPC motivations
- Players comment on improved continuity
- Complex investigations feel manageable
- The world feels more alive and reactive

---

*Ready to run your next session with professional-grade tools!*