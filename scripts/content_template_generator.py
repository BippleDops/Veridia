#!/usr/bin/env python3
"""
Content Template Generator
Generates content templates based on Pydantic models and vault analysis.
"""

import os
import json
from pathlib import Path
from datetime import datetime, date
from typing import Dict, List, Optional, Any
import argparse

# Import our Pydantic models  
import sys
sys.path.append('../data')
from models import (
    Character, Location, Faction, Quest, Item, Session, Campaign,
    ContentType, WorldRealm, ContentStatus, FactionType, ThreatLevel
)

class ContentTemplateGenerator:
    """Generates content templates from Pydantic models."""
    
    def __init__(self, vault_path: str):
        self.vault_path = Path(vault_path)
        
    def generate_character_template(self, realm: WorldRealm = WorldRealm.both) -> str:
        """Generate character template with realm-specific elements."""
        template = f"""---
created: '{date.today().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: draft
world: {realm.value}
type: Character
tags:
  - character
  - {realm.value.lower()}
---

# Character Name

## Basic Information

**Full Name:** 
**Aliases:** 
**Age:** 
**Species:** 
**Occupation:** 
**Social Class:** 

## Physical Description

**Appearance:** 

**Notable Features:** 

## Personality

**Personality Traits:**
- 
- 
- 

**Ideals:**
- 

**Bonds:**
- 

**Flaws:**
- 

## Background

**Origin:** 

**Formative Events:**
- 
- 

**Current Situation:** 

## Relationships

**Allies:**
- 

**Enemies:**
- 

**Family:**
- 

**Other Connections:**
- 

## Goals and Motivations

**Primary Goals:**
- 
- 

**Secret Goals:**
- 

**Fears:**
- 

## Abilities and Skills

**Notable Abilities:**
- 
- 

**Weaknesses:**
- 

## Faction Affiliations

**Current Affiliations:**
- 

**Past Affiliations:**
- 

## Role in Campaign

**Plot Relevance:**
- 

**Potential Story Hooks:**
- 
- 

**Quest Connections:**
- 

## Secrets

**Personal Secrets:**
- 

**Knowledge Secrets:**
- 

## Notes

**GM Notes:**
- 

**Character Development Ideas:**
- 

"""

        # Add realm-specific sections
        if realm == WorldRealm.aquabyssos:
            template += """
## Aquabyssos-Specific Details

**Depth Adaptation Level:** 
**Pressure Tolerance:** 
**Bio-luminescent Features:** 
**Coral Symbiosis:** 
**Depth-Specific Skills:** 

"""
        elif realm == WorldRealm.aethermoor:
            template += """
## Aethermoor-Specific Details

**Altitude Comfort Zone:** 
**Wind Affinity:** 
**Crystal Resonance:** 
**Flight Capabilities:** 
**Storm Navigation Skills:** 

"""
        
        return template
        
    def generate_location_template(self, realm: WorldRealm = WorldRealm.both) -> str:
        """Generate location template with realm-specific elements."""
        template = f"""---
created: '{date.today().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: draft
world: {realm.value}
type: Location
tags:
  - location
  - {realm.value.lower()}
---

# Location Name

## Overview

**Brief Description:** 

**Significance:** 

## Geographic Details

**Region:** 
**Size:** 
**Population:** 
**Climate:** 

## Governance

**Ruling Authority:** 
**Government Type:** 
**Key Officials:**
- 
- 

## Notable Features

**Landmarks:**
- 
- 

**Districts/Areas:**
- 
- 

**Points of Interest:**
- 
- 

## Atmosphere and Sensory Details

**Visual Description:** 

**Sounds:** 
- 
- 

**Smells:** 
- 
- 

**Tactile Sensations:** 
- 

## Inhabitants and Culture

**Demographics:** 

**Social Customs:** 
- 
- 

**Local Traditions:** 
- 

**Language/Dialect:** 

## Economy and Resources

**Primary Industry:** 

**Major Exports:** 
- 
- 

**Trade Routes:** 
- 

**Currency:** 

## Factions and Organizations

**Present Factions:**
- 
- 

**Power Dynamics:** 

**Conflicts:** 
- 

## Threats and Challenges

**Current Threats:** 
- 
- 

**Environmental Hazards:** 
- 

**Political Tensions:** 
- 

## Connected Locations

**Nearby Locations:**
- 
- 

**Transportation Links:**
- 

**Travel Times:**
- 

## Plot Hooks and Adventure Opportunities

**Potential Adventures:**
- 
- 

**Mysteries:**
- 

**Conflicts to Resolve:**
- 

## History

**Founding:** 

**Major Events:**
- 
- 

**Recent Changes:** 

## GM Notes

**Session Opportunities:** 

**NPC Ideas:** 
- 
- 

**Development Notes:** 

"""

        # Add realm-specific sections
        if realm == WorldRealm.aquabyssos:
            template += """
## Aquabyssos-Specific Details

**Depth Level:** 
**Pressure Rating:** 
**Water Currents:** 
**Bio-luminescent Features:** 
**Coral Formations:** 
**Marine Life:** 
**Breathing Apparatus Requirements:** 
**Pressure Adaptation Facilities:** 

"""
        elif realm == WorldRealm.aethermoor:
            template += """
## Aethermoor-Specific Details

**Altitude:** 
**Wind Patterns:** 
**Crystal Formations:** 
**Sky Connections:** 
**Weather Patterns:** 
**Aerial Navigation:** 
**Altitude Adaptation Facilities:** 
**Storm Shelter:** 

"""
        
        return template
        
    def generate_faction_template(self, faction_type: FactionType = FactionType.guild) -> str:
        """Generate faction template based on faction type."""
        template = f"""---
created: '{date.today().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: draft
world: Both
type: Faction
tags:
  - faction
  - {faction_type.value.lower()}
---

# Faction Name

## Basic Information

**Formal Name:** 
**Short Name/Acronym:** 
**Type:** {faction_type.value}
**Motto:** 

## Leadership and Structure

**Current Leader:** 
**Leadership Structure:** 
**Hierarchy:**
- 
- 
- 

**Key Figures:**
- 
- 

## Organization Details

**Size:** 
**Member Count:** 
**Recruitment Methods:** 

**Membership Requirements:**
- 
- 

**Initiation Process:** 

## Territory and Assets

**Headquarters:** 
**Base Locations:**
- 
- 

**Controlled Territory:**
- 

**Resources:**
- 
- 

**Financial Assets:** 

## Beliefs and Ideology

**Core Beliefs:**
- 
- 

**Values:**
- 
- 

**Code of Conduct:**
- 

## Goals and Activities

**Primary Goals:**
- 
- 

**Current Objectives:**
- 

**Typical Activities:**
- 
- 

**Methods:**
- 

## Relationships

**Allies:**
- 
- 

**Enemies:**
- 
- 

**Rivals:**
- 

**Neutral Relations:**
- 

## Influence and Power

**Political Influence:** 
**Economic Power:** 
**Military Strength:** 
**Information Networks:** 

**Areas of Control:**
- 

## Secrets and Hidden Agendas

**Public Face:** 

**Hidden Goals:**
- 

**Secret Operations:**
- 

**Classified Information:**
- 

## History

**Founding:** 

**Major Events:**
- 
- 

**Evolution:** 

**Recent Developments:** 

## Internal Dynamics

**Faction Divisions:**
- 

**Internal Conflicts:**
- 

**Loyalty Issues:**
- 

## External Perception

**Public Reputation:** 

**How Others View Them:**
- 

**Propaganda:** 

## Campaign Integration

**Plot Relevance:**
- 

**Story Hooks:**
- 
- 

**Quest Opportunities:**
- 

**Character Connections:**
- 

## GM Resources

**Important NPCs:**
- 
- 

**Typical Encounters:**
- 

**Development Ideas:**
- 

**Notes:**
- 

"""
        
        # Add type-specific sections
        if faction_type == FactionType.criminal:
            template += """
## Criminal Organization Details

**Criminal Specialties:**
- 
- 

**Territory/Turf:** 
**Law Enforcement Relations:** 
**Competition with Other Criminal Groups:** 

"""
        elif faction_type == FactionType.academic:
            template += """
## Academic Institution Details

**Fields of Study:**
- 
- 

**Research Projects:**
- 

**Student Body:** 
**Faculty Notable Members:**
- 

"""
        elif faction_type == FactionType.military:
            template += """
## Military Organization Details

**Military Branch:** 
**Unit Composition:** 
**Equipment:**
- 

**Training Methods:** 
**Combat Specialties:**
- 

"""
        
        return template
        
    def generate_session_template(self) -> str:
        """Generate session journal template."""
        return f"""---
created: '{date.today().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: draft
world: Both
type: Session
tags:
  - session
  - journal
---

# Session [Number]: [Title]

## Session Information

**Date:** {date.today().isoformat()}
**Duration:** 
**Campaign:** 
**DM:** 
**Players:**
- 
- 
- 

**Characters Present:**
- 
- 
- 

## Session Summary

**Brief Overview:** 

## Key Events

- 
- 
- 
- 

## Locations Visited

- 
- 

## NPCs Encountered

**New NPCs:**
- 
- 

**Returning NPCs:**
- 
- 

## Combat Encounters

**Encounter 1:**
- Enemies: 
- Location: 
- Outcome: 

## Skill Challenges

- 
- 

## Treasure and Rewards

**Items Gained:**
- 
- 

**Experience Awarded:** 
**Other Rewards:**
- 

## Character Development

**Character Growth:**
- 
- 

**Relationship Changes:**
- 

**Personal Moments:**
- 

## Plot Advancement

**Main Story Progress:**
- 

**Side Quests:**
- 

**New Information Revealed:**
- 
- 

## World State Changes

**Consequences of Actions:**
- 
- 

**Political Changes:**
- 

**Environmental Changes:**
- 

## Unresolved Issues

**Questions Raised:**
- 

**Cliffhangers:**
- 

**Future Complications:**
- 

## GM Notes

**What Worked Well:**
- 

**Areas for Improvement:**
- 

**Player Feedback:**
- 

## Next Session Preparation

**Follow-up Items:**
- 
- 

**Prep Needed:**
- 

**Player Action Items:**
- 

**Story Threads to Develop:**
- 

## Quotes and Memorable Moments

**Memorable Quotes:**
> 

**Funny Moments:**
- 

**Epic Moments:**
- 

**Character Moments:**
- 

"""

    def generate_quest_template(self) -> str:
        """Generate quest template."""
        return f"""---
created: '{date.today().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: draft
world: Both
type: Quest
tags:
  - quest
  - adventure
---

# Quest Name

## Basic Information

**Quest Giver:** 
**Contact Information:** 
**Quest Type:** 
**Suggested Level:** 
**Estimated Duration:** 

## Objective

**Primary Goal:** 

**Success Conditions:**
- 
- 

**Failure Conditions:**
- 

## Background and Context

**Situation:** 

**Why This Matters:** 

**Urgency Level:** 

## Prerequisites

**Required Completion:**
- 

**Recommended Preparation:**
- 
- 

**Level Requirements:** 
**Skill Requirements:**
- 

## Key Locations

**Primary Location:** 
**Secondary Locations:**
- 
- 

**Travel Requirements:**
- 

## Important NPCs

**Quest Giver Details:** 

**Key NPCs:**
- 
- 

**Potential Allies:**
- 

**Antagonists:**
- 

## Challenges and Obstacles

**Combat Encounters:**
- 
- 

**Skill Challenges:**
- 
- 

**Social Encounters:**
- 

**Environmental Hazards:**
- 

## Faction Involvement

**Affected Factions:**
- 
- 

**Political Implications:**
- 

**Reputation Changes:**
- 

## Rewards

**Monetary Reward:** 
**Experience Award:** 
**Item Rewards:**
- 
- 

**Reputation Gains:**
- 

**Story Rewards:**
- 

## Consequences

**Success Outcomes:**
- 
- 

**Failure Outcomes:**
- 
- 

**World State Changes:**
- 

## Related Content

**Connected Quests:**
- 
- 

**Follow-up Opportunities:**
- 

**Story Hooks Generated:**
- 

## Multiple Approaches

**Direct Approach:** 

**Stealth Approach:** 

**Social Approach:** 

**Creative Solutions:**
- 

## GM Resources

**Stat Blocks Needed:**
- 

**Maps Required:**
- 

**Handouts:**
- 

**Timeline:** 

**Scaling Options:**
- 

## Development Notes

**Inspiration:** 

**Themes:** 

**Tone:** 

**Pacing Notes:**
- 

"""

    def generate_templates_for_vault(self, output_dir: Optional[str] = None) -> None:
        """Generate all template types and save to files."""
        if output_dir is None:
            output_dir = self.vault_path / "05_Templates"
        else:
            output_dir = Path(output_dir)
            
        output_dir.mkdir(exist_ok=True)
        
        templates = {
            "Character_Template_Both.md": self.generate_character_template(WorldRealm.both),
            "Character_Template_Aquabyssos.md": self.generate_character_template(WorldRealm.aquabyssos),
            "Character_Template_Aethermoor.md": self.generate_character_template(WorldRealm.aethermoor),
            "Location_Template_Both.md": self.generate_location_template(WorldRealm.both),
            "Location_Template_Aquabyssos.md": self.generate_location_template(WorldRealm.aquabyssos),
            "Location_Template_Aethermoor.md": self.generate_location_template(WorldRealm.aethermoor),
            "Faction_Template_Guild.md": self.generate_faction_template(FactionType.guild),
            "Faction_Template_Criminal.md": self.generate_faction_template(FactionType.criminal),
            "Faction_Template_Government.md": self.generate_faction_template(FactionType.government),
            "Faction_Template_Academic.md": self.generate_faction_template(FactionType.academic),
            "Session_Template.md": self.generate_session_template(),
            "Quest_Template.md": self.generate_quest_template()
        }
        
        for filename, template_content in templates.items():
            file_path = output_dir / filename
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(template_content)
                
        print(f"Generated {len(templates)} templates in {output_dir}")
        
def main():
    """Main function."""
    parser = argparse.ArgumentParser(description="Generate content templates for Cordelia vault")
    parser.add_argument("vault_path", help="Path to vault directory")
    parser.add_argument("--output", "-o", help="Output directory for templates")
    parser.add_argument("--type", "-t", help="Specific template type to generate",
                       choices=["character", "location", "faction", "session", "quest", "all"])
    parser.add_argument("--realm", "-r", help="Realm for location/character templates",
                       choices=["aquabyssos", "aethermoor", "both"], default="both")
    parser.add_argument("--faction-type", "-f", help="Faction type for faction templates",
                       choices=["guild", "criminal", "government", "academic", "military"], default="guild")
    
    args = parser.parse_args()
    
    generator = ContentTemplateGenerator(args.vault_path)
    
    if args.type == "all" or args.type is None:
        generator.generate_templates_for_vault(args.output)
    else:
        # Generate specific template
        realm = WorldRealm(args.realm)
        faction_type = FactionType(args.faction_type.replace('-', '_'))
        
        if args.type == "character":
            template = generator.generate_character_template(realm)
        elif args.type == "location":
            template = generator.generate_location_template(realm)
        elif args.type == "faction":
            template = generator.generate_faction_template(faction_type)
        elif args.type == "session":
            template = generator.generate_session_template()
        elif args.type == "quest":
            template = generator.generate_quest_template()
            
        print(template)
        
if __name__ == "__main__":
    main()