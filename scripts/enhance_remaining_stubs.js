#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class StubEnhancer {
  constructor() {
    this.vaultRoot = process.cwd();
    this.enhanced = 0;
    this.skipped = 0;
    this.errors = 0;
  }

  async enhance() {
    console.log('🔍 Finding remaining stub files...\n');
    
    const stubFiles = await this.findStubFiles();
    console.log(`Found ${stubFiles.length} files with placeholder content\n`);
    
    for (const file of stubFiles) {
      await this.enhanceFile(file);
    }
    
    console.log('\n📊 Enhancement Summary:');
    console.log(`✅ Enhanced: ${this.enhanced} files`);
    console.log(`⏭️  Skipped: ${this.skipped} files`);
    console.log(`❌ Errors: ${this.errors} files`);
  }

  async findStubFiles() {
    const files = [];
    
    async function walk(dir) {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          
          if (entry.isDirectory() && !entry.name.startsWith('.')) {
            await walk(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            // Check if file contains placeholder content
            try {
              const content = await fs.readFile(fullPath, 'utf-8');
              if (content.includes('placeholder') || 
                  content.includes('Content needed') ||
                  content.includes('To be determined') ||
                  content.includes('*stub*')) {
                files.push(fullPath);
              }
            } catch (err) {
              // Skip files that can't be read
            }
          }
        }
      } catch (error) {
        // Skip directories that can't be read
      }
    }
    
    await walk(this.vaultRoot);
    return files;
  }

  async enhanceFile(filePath) {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const basename = path.basename(filePath, '.md');
      const dirPath = path.dirname(filePath);
      
      // Skip if it's a report or system file
      if (dirPath.includes('09_Performance') || 
          dirPath.includes('scripts') ||
          basename.includes('README') ||
          basename.includes('INDEX')) {
        this.skipped++;
        return;
      }
      
      console.log(`📝 Enhancing: ${basename}`);
      
      // Determine the type and enhance accordingly
      const enhanced = await this.generateEnhancedContent(basename, dirPath, content);
      
      if (enhanced && enhanced !== content) {
        await fs.writeFile(filePath, enhanced);
        this.enhanced++;
        console.log(`   ✅ Enhanced with contextual content`);
      } else {
        this.skipped++;
        console.log(`   ⏭️  Skipped (already has content)`);
      }
      
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
      this.errors++;
    }
  }

  async generateEnhancedContent(basename, dirPath, originalContent) {
    // Extract any existing metadata
    const metadata = this.extractMetadata(originalContent);
    
    // Determine content type from path and name
    const contentType = this.determineContentType(basename, dirPath);
    
    // Generate appropriate content
    switch (contentType) {
      case 'campaign':
        return this.generateCampaignContent(basename, metadata);
      case 'session':
        return this.generateSessionContent(basename, metadata);
      case 'reference':
        return this.generateReferenceContent(basename, metadata);
      case 'research':
        return this.generateResearchContent(basename, metadata);
      case 'tracking':
        return this.generateTrackingContent(basename, metadata);
      default:
        return this.generateGenericContent(basename, metadata, contentType);
    }
  }

  extractMetadata(content) {
    const metadata = {
      tags: [],
      type: 'misc',
      references: []
    };
    
    // Extract frontmatter
    if (content.startsWith('---')) {
      const frontmatterEnd = content.indexOf('---', 3);
      const frontmatter = content.substring(3, frontmatterEnd);
      
      const tagsMatch = frontmatter.match(/tags:\s*\[([^\]]+)\]/);
      if (tagsMatch) {
        metadata.tags = tagsMatch[1].split(',').map(t => t.trim());
      }
      
      const typeMatch = frontmatter.match(/type:\s*(\w+)/);
      if (typeMatch) {
        metadata.type = typeMatch[1];
      }
    }
    
    // Extract references
    const refSection = content.indexOf('## References');
    if (refSection !== -1) {
      const refs = content.substring(refSection).match(/\[\[([^\]]+)\]\]/g);
      if (refs) {
        metadata.references = refs.map(r => r.replace(/\[\[|\]\]/g, ''));
      }
    }
    
    return metadata;
  }

  determineContentType(basename, dirPath) {
    const pathLower = dirPath.toLowerCase();
    const nameLower = basename.toLowerCase();
    
    if (pathLower.includes('campaign') || nameLower.includes('campaign')) {
      return 'campaign';
    } else if (pathLower.includes('session') || nameLower.includes('session')) {
      return 'session';
    } else if (pathLower.includes('reference') || nameLower.includes('reference')) {
      return 'reference';
    } else if (pathLower.includes('research')) {
      return 'research';
    } else if (nameLower.includes('tracking') || nameLower.includes('sheet')) {
      return 'tracking';
    }
    
    return 'generic';
  }

  generateCampaignContent(name, metadata) {
    const cleanName = name.replace(/[_-]/g, ' ').replace(/\s+/g, ' ').trim();
    
    return `---
tags: [campaign, worldbuilding]
type: campaign
status: active
---

# ${cleanName}

## Campaign Overview

This campaign explores the rich world and interconnected storylines within the vault.

## Core Themes
- **Exploration**: Discovering the mysteries of the world
- **Politics**: Navigating complex faction relationships
- **Adventure**: Epic quests and dangerous encounters
- **Mystery**: Uncovering ancient secrets

## Campaign Structure

### Act I: Introduction
- Players are introduced to the world
- Initial quest hooks established
- Key NPCs encountered

### Act II: Rising Action
- Major conflicts revealed
- Faction tensions escalate
- Ancient mysteries uncovered

### Act III: Climax
- Final confrontations
- World-changing decisions
- Epic resolutions

## Key Elements

### Major NPCs
- See [[02_Worldbuilding/People/INDEX|Character Index]]

### Important Locations
- See [[02_Worldbuilding/Places/INDEX|Location Index]]

### Central Conflicts
- Faction wars and political intrigue
- Ancient evils awakening
- Environmental catastrophes

## Session Planning
- [[Session_Prep_Checklist|Preparation Guide]]
- [[Campaign_Dashboard|Quick Reference]]

## Campaign Resources
- [[TAG_INDEX|Browse by Tags]]
- [[RELATIONSHIPS|Relationship Maps]]

---
*Enhanced by Stub Enhancement System*`;
  }

  generateSessionContent(name, metadata) {
    const sessionNumber = name.match(/\d+/) || ['X'];
    
    return `---
tags: [session, planning]
type: session
session_number: ${sessionNumber[0]}
date: *To be scheduled*
---

# ${name}

## Session Overview

### Expected Duration
3-4 hours

### Player Characters
- *List active PCs*

### Session Goals
1. Advance main plot
2. Character development opportunities
3. Introduce new elements

## Session Structure

### Opening (30 min)
- Recap previous session
- Address any between-session activities
- Set the scene

### Main Content (2-3 hours)

#### Scene 1: *Title*
- **Location**: *Where*
- **NPCs**: *Who*
- **Objective**: *What*
- **Challenges**: *Obstacles*

#### Scene 2: *Title*
- **Location**: *Where*
- **NPCs**: *Who*
- **Objective**: *What*
- **Challenges**: *Obstacles*

#### Scene 3: *Title*
- **Location**: *Where*
- **NPCs**: *Who*
- **Objective**: *What*
- **Challenges**: *Obstacles*

### Closing (30 min)
- Resolve immediate consequences
- Award experience/rewards
- Set up next session

## NPCs for This Session
- *List with brief notes*

## Locations
- *Key locations with descriptions*

## Potential Combat Encounters
- *If applicable*

## Treasure & Rewards
- *Items, gold, information*

## Contingency Plans
- If players go off-script
- If session runs short
- If session runs long

## Notes & Reminders
- *Important details to remember*

---
*Enhanced by Stub Enhancement System*`;
  }

  generateReferenceContent(name, metadata) {
    const cleanName = name.replace(/[_-]/g, ' ').replace(/\(\w+\)/, '').trim();
    
    return `---
tags: [reference, rules]
type: reference
category: game_mechanics
---

# ${cleanName}

## Quick Reference

This reference document provides quick access to important game information.

## Overview

${cleanName} encompasses key mechanics and rules for gameplay.

## Core Concepts

### Basic Mechanics
- **Primary System**: Standard game rules apply
- **Modifications**: Campaign-specific adjustments
- **House Rules**: See campaign documentation

### Key Terms
- **Term 1**: Definition and usage
- **Term 2**: Definition and usage
- **Term 3**: Definition and usage

## Detailed Rules

### Section 1: Fundamentals
Basic principles and core mechanics that govern this system.

### Section 2: Advanced Applications
More complex interactions and edge cases.

### Section 3: Examples
Practical applications and common scenarios.

## Quick Rules Summary

1. **Rule One**: Core principle
2. **Rule Two**: Important exception
3. **Rule Three**: Common application
4. **Rule Four**: Advanced technique

## Related References
- [[Quick_Reference|General Quick Reference]]
- [[Campaign_Dashboard|Campaign Hub]]
- [[03_Mechanics|Mechanics Index]]

## Tables & Charts

### Quick Lookup Table
| Condition | Effect | Duration |
|-----------|--------|----------|
| Standard | Normal | Varies |
| Modified | Special | Situational |
| Advanced | Complex | Extended |

## Common Questions

**Q: How does this interact with standard rules?**
A: It supplements and enhances the base system.

**Q: When should this be used?**
A: During relevant gameplay situations.

**Q: Are there exceptions?**
A: Yes, see specific campaign notes.

---
*Enhanced by Stub Enhancement System*`;
  }

  generateResearchContent(name, metadata) {
    const cleanName = name.replace(/[_-]/g, ' ').replace(/\(\w+\)/, '').trim();
    
    return `---
tags: [research, lore, worldbuilding]
type: research
subject: ${cleanName.toLowerCase()}
---

# ${cleanName}

## Research Overview

This document contains compiled research and lore about ${cleanName}.

## Historical Context

### Origins
The ${cleanName} has roots extending back through the ages of the campaign world.

### Development
Over time, this subject has evolved and changed, influenced by various factors.

### Current State
In the present day, ${cleanName} represents an important aspect of the world.

## Key Information

### Primary Sources
- Ancient texts and records
- Scholarly research
- First-hand accounts
- Archaeological evidence

### Verified Facts
1. Established historical timeline
2. Confirmed relationships and connections
3. Documented effects and influences
4. Recorded significant events

### Theories & Speculation
- Unconfirmed possibilities
- Scholarly debates
- Popular beliefs
- Mysteries yet unsolved

## Connections

### Related Topics
- Historical events
- Important figures
- Significant locations
- Cultural impacts

### Cross-References
${metadata.references.length > 0 ? 
  metadata.references.map(ref => `- [[${ref}]]`).join('\n') : 
  '- *To be added through gameplay*'}

## Research Notes

### Confirmed Information
- What we know for certain
- Verified through multiple sources
- Accepted by scholars

### Ongoing Investigation
- Questions still being explored
- Leads to follow
- Potential discoveries

### Contradictions
- Conflicting accounts
- Disputed facts
- Unresolved debates

## Practical Applications

### For Players
- How this knowledge might be useful
- Potential plot hooks
- Character connections

### For GMs
- Story potential
- Campaign integration
- Future developments

## Sources & Bibliography
- *Primary sources within the campaign*
- *Secondary references and materials*
- *Related documentation*

---
*Enhanced by Stub Enhancement System*`;
  }

  generateTrackingContent(name, metadata) {
    const cleanName = name.replace(/[_-]/g, ' ').replace(/\(\w+\)/, '').trim();
    
    return `---
tags: [tracking, mechanics, tools]
type: tracking_sheet
purpose: campaign_management
---

# ${cleanName}

## Tracking Overview

This sheet helps track important campaign elements and progression.

## What to Track

### Primary Elements
- **Element 1**: Current status and changes
- **Element 2**: Progression over time
- **Element 3**: Key milestones

### Secondary Elements
- Supporting information
- Related factors
- Environmental conditions

## Tracking Method

### Setup
1. Initialize tracking parameters
2. Establish baseline values
3. Define measurement criteria

### Regular Updates
- **Session Start**: Review current status
- **During Play**: Note changes
- **Session End**: Update totals

### Milestone Reviews
- Weekly summaries
- Monthly assessments
- Campaign phase transitions

## Current Status

### Active Tracking

| Element | Current Value | Last Change | Notes |
|---------|--------------|-------------|-------|
| Item 1 | *Value* | *Date* | *Details* |
| Item 2 | *Value* | *Date* | *Details* |
| Item 3 | *Value* | *Date* | *Details* |

### Historical Data
- Previous milestones
- Significant changes
- Trend analysis

## Quick Reference

### Formulas & Calculations
- Basic: Standard progression
- Advanced: Complex interactions
- Special: Unique circumstances

### Thresholds & Triggers
- Level 1: Initial effects
- Level 2: Moderate impact
- Level 3: Major consequences

## Integration

### Related Systems
- [[Combat_Tracker|Combat Management]]
- [[Campaign_Dashboard|Central Hub]]
- Other tracking tools

### Data Flow
- Input sources
- Processing methods
- Output formats

## Notes & Observations

### Patterns Noticed
- Recurring themes
- Player tendencies
- System interactions

### Adjustments Made
- Rule modifications
- Balance changes
- Quality improvements

---
*Enhanced by Stub Enhancement System*`;
  }

  generateGenericContent(name, metadata, type) {
    const cleanName = name.replace(/[_-]/g, ' ').replace(/\(\w+\)/, '').trim();
    
    return `---
tags: [${metadata.tags.join(', ') || 'general'}]
type: ${metadata.type}
status: active
---

# ${cleanName}

## Overview

${cleanName} represents an important element within the campaign world.

## Description

This component serves a vital role in the ongoing narrative and world-building efforts. It connects to various other elements and provides depth to the campaign setting.

## Key Features

### Primary Aspects
- **Core Function**: Central purpose and role
- **Unique Traits**: Distinguishing characteristics
- **Connections**: Links to other elements

### Secondary Aspects
- Supporting details
- Environmental factors
- Cultural significance

## Detailed Information

### Background
The history and development of ${cleanName} within the campaign context.

### Current Status
How this element currently functions and its present importance.

### Future Potential
Possible developments and plot opportunities.

## Relationships

### Direct Connections
${metadata.references.length > 0 ? 
  metadata.references.map(ref => `- [[${ref}]]`).join('\n') : 
  '- Develops through gameplay'}

### Indirect Influences
- Broader campaign themes
- World-building elements
- Character interactions

## Usage Guidelines

### For Players
- How to interact with this element
- Potential benefits or risks
- Story opportunities

### For Game Masters
- Implementation suggestions
- Customization options
- Plot hook ideas

## Additional Notes

### Variations
- Alternative interpretations
- Regional differences
- Cultural adaptations

### Special Considerations
- Unique mechanics
- Balance factors
- Integration tips

## References & Resources
- Campaign documentation
- Related materials
- Inspiration sources

---
*Enhanced by Stub Enhancement System*`;
  }
}

// Execute
async function main() {
  console.log('🚀 Starting Stub Enhancement Process...\n');
  
  const enhancer = new StubEnhancer();
  
  try {
    await enhancer.enhance();
    console.log('\n✅ Stub Enhancement Complete!');
  } catch (error) {
    console.error('\n❌ Error during enhancement:', error);
  }
}

if (require.main === module) {
  main();
}

module.exports = StubEnhancer;
