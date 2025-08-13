#!/usr/bin/env python3
"""
D&D Sourcebook Integration System
Complete integration of D&D 5e sourcebooks with the Cordelia vault.
"""

import os
import json
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional, Set
from dataclasses import dataclass
import requests
import yaml

@dataclass
class SourcebookInfo:
    """Information about a D&D sourcebook"""
    name: str
    abbreviation: str
    description: str
    type: str  # campaign, supplement, adventure
    level_range: str
    themes: List[str]
    integration_status: str  # available, integrated, missing
    vault_directory: Optional[str] = None
    content_types: List[str] = None
    
    def __post_init__(self):
        if self.content_types is None:
            self.content_types = ["monsters", "spells", "items", "npcs"]

class DNDSourcebookIntegrator:
    """D&D sourcebook integration and management system"""
    
    def __init__(self, vault_root: str):
        self.vault_root = Path(vault_root)
        self.dnd_content_dir = self.vault_root / "12_Research" / "D&D_Sourcebooks"
        self.integration_dir = self.vault_root / "data" / "dnd_integration"
        
        # Ensure directories exist
        self.dnd_content_dir.mkdir(parents=True, exist_ok=True)
        self.integration_dir.mkdir(parents=True, exist_ok=True)
        
        # Available sourcebooks
        self.sourcebooks = self._define_sourcebooks()
        
        # Integration status
        self.integration_status = self._load_integration_status()
        
    def _define_sourcebooks(self) -> Dict[str, SourcebookInfo]:
        """Define all available D&D sourcebooks"""
        return {
            "curse_of_strahd": SourcebookInfo(
                name="Curse of Strahd",
                abbreviation="CoS", 
                description="Gothic horror campaign in Barovia",
                type="campaign",
                level_range="1-10",
                themes=["horror", "undead", "gothic", "mystery"],
                integration_status="available"
            ),
            "tomb_of_annihilation": SourcebookInfo(
                name="Tomb of Annihilation",
                abbreviation="ToA",
                description="Jungle exploration and dungeon crawl in Chult", 
                type="campaign",
                level_range="1-11",
                themes=["exploration", "jungle", "undead", "traps"],
                integration_status="available"
            ),
            "waterdeep_dragon_heist": SourcebookInfo(
                name="Waterdeep: Dragon Heist",
                abbreviation="WDH",
                description="Urban intrigue and heist adventure",
                type="campaign", 
                level_range="1-5",
                themes=["urban", "intrigue", "crime", "politics"],
                integration_status="available"
            ),
            "waterdeep_dungeon_mad_mage": SourcebookInfo(
                name="Waterdeep: Dungeon of the Mad Mage",
                abbreviation="WDMM",
                description="Mega-dungeon beneath Waterdeep",
                type="campaign",
                level_range="5-20", 
                themes=["dungeon", "magic", "exploration", "mystery"],
                integration_status="available"
            ),
            "ghosts_of_saltmarsh": SourcebookInfo(
                name="Ghosts of Saltmarsh",
                abbreviation="GoS",
                description="Maritime adventures and sea-based campaigns",
                type="campaign",
                level_range="1-12",
                themes=["nautical", "pirates", "coastal", "mystery"],
                integration_status="available"
            ),
            "descent_into_avernus": SourcebookInfo(
                name="Baldur's Gate: Descent into Avernus", 
                abbreviation="DiA",
                description="Planar adventure through the Nine Hells",
                type="campaign",
                level_range="1-13",
                themes=["planar", "devils", "redemption", "war"],
                integration_status="available"
            ),
            "rime_of_frostmaiden": SourcebookInfo(
                name="Icewind Dale: Rime of the Frostmaiden",
                abbreviation="RotFM",
                description="Arctic horror and survival adventure",
                type="campaign", 
                level_range="1-12",
                themes=["arctic", "horror", "survival", "mystery"],
                integration_status="available"
            ),
            "candlekeep_mysteries": SourcebookInfo(
                name="Candlekeep Mysteries",
                abbreviation="CM",
                description="Collection of book-based mystery adventures",
                type="adventure",
                level_range="1-16",
                themes=["mystery", "investigation", "magic", "knowledge"],
                integration_status="available"
            ),
            "wild_beyond_witchlight": SourcebookInfo(
                name="The Wild Beyond the Witchlight",
                abbreviation="WBtW", 
                description="Feywild carnival and fey adventure",
                type="campaign",
                level_range="1-8",
                themes=["fey", "carnival", "whimsical", "roleplaying"],
                integration_status="available"
            ),
            "call_of_netherdeep": SourcebookInfo(
                name="Call of the Netherdeep",
                abbreviation="CoN",
                description="Epic multi-continental Critical Role campaign",
                type="campaign",
                level_range="3-12", 
                themes=["epic", "multiverse", "ancient", "artifacts"],
                integration_status="available"
            ),
            "radiant_citadel": SourcebookInfo(
                name="Journeys through the Radiant Citadel",
                abbreviation="JttRC",
                description="Anthology of culturally diverse adventures",
                type="adventure",
                level_range="1-14",
                themes=["diverse", "cultural", "anthology", "exploration"],
                integration_status="available"
            ),
            "dragons_of_stormwreck": SourcebookInfo(
                name="Dragons of Stormwreck Isle",
                abbreviation="DoSI",
                description="Beginner-friendly dragon adventure",
                type="adventure",
                level_range="1-3",
                themes=["dragons", "beginner", "island", "classic"],
                integration_status="available"
            ),
            "keys_from_golden_vault": SourcebookInfo(
                name="Keys from the Golden Vault", 
                abbreviation="KftGV",
                description="Heist-themed adventure anthology",
                type="adventure",
                level_range="1-11", 
                themes=["heist", "crime", "stealth", "planning"],
                integration_status="available"
            )
        }
    
    def _load_integration_status(self) -> Dict[str, Any]:
        """Load current integration status from file"""
        status_file = self.integration_dir / "integration_status.json"
        if status_file.exists():
            with open(status_file) as f:
                return json.load(f)
        return {}
    
    def _save_integration_status(self) -> None:
        """Save integration status to file"""
        status_file = self.integration_dir / "integration_status.json"
        with open(status_file, 'w') as f:
            json.dump(self.integration_status, f, indent=2, default=str)
    
    def create_sourcebook_integration_structure(self) -> None:
        """Create directory structure for sourcebook integration"""
        print("📚 Creating D&D sourcebook integration structure...")
        
        for book_id, book_info in self.sourcebooks.items():
            # Create main directory
            book_dir = self.dnd_content_dir / book_info.name.replace(":", "").replace(" ", "_")
            book_dir.mkdir(exist_ok=True)
            
            # Create content subdirectories
            for content_type in ["Adventures", "NPCs", "Monsters", "Items", "Locations", "Spells"]:
                (book_dir / content_type).mkdir(exist_ok=True)
            
            # Create book index file
            self._create_book_index(book_dir, book_info)
        
        print(f"✅ Created integration structure for {len(self.sourcebooks)} sourcebooks")
    
    def _create_book_index(self, book_dir: Path, book_info: SourcebookInfo) -> None:
        """Create index file for sourcebook"""
        index_content = f"""---
created: '{datetime.now().date().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: active
world: Both
type: Resource
tags:
- type/resource
- dnd/sourcebook
- status/active
- integration/{book_info.integration_status}
sourcebook: '{book_info.name}'
abbreviation: '{book_info.abbreviation}'
---

# {book_info.name} - Integration Index

## Overview
**Type**: {book_info.type.title()}  
**Level Range**: {book_info.level_range}  
**Themes**: {', '.join(book_info.themes)}  
**Integration Status**: {book_info.integration_status.title()}

## Description
{book_info.description}

## Content Integration

### 🎭 NPCs
```dataview
TABLE WITHOUT ID
    file.link as "NPC",
    status as "Status", 
    world as "Adapted To"
FROM "{book_dir.name}/NPCs"
WHERE type = "Character"
SORT file.name
```

### 👹 Monsters & Creatures
```dataview
TABLE WITHOUT ID
    file.link as "Monster",
    cr as "CR",
    status as "Status"
FROM "{book_dir.name}/Monsters"  
WHERE type = "Monster"
SORT cr
```

### 🗺️ Locations
```dataview
TABLE WITHOUT ID
    file.link as "Location",
    threat_level as "Danger",
    status as "Status"
FROM "{book_dir.name}/Locations"
WHERE type = "Location" 
SORT file.name
```

### ⚔️ Items & Equipment
```dataview
TABLE WITHOUT ID
    file.link as "Item",
    rarity as "Rarity",
    status as "Status"
FROM "{book_dir.name}/Items"
WHERE type = "Item"
SORT rarity
```

### 📜 Adventures & Scenarios
```dataview
TABLE WITHOUT ID
    file.link as "Adventure",
    suggested_level as "Level",
    status as "Status" 
FROM "{book_dir.name}/Adventures"
WHERE type = "Adventure"
SORT suggested_level
```

## Cordelia Integration Notes

### Aquabyssos Adaptations
- **Water-based encounters**: How scenarios translate to underwater
- **Pressure mechanics**: Environmental adaptations needed
- **Mer-folk alternatives**: NPC race conversions

### Aethermoor Adaptations  
- **Sky-based encounters**: How scenarios translate to aerial
- **Wind mechanics**: Environmental adaptations needed
- **Skyfolk alternatives**: NPC race conversions

### Cross-Realm Opportunities
- **Convergence events**: How storylines could bridge realms
- **Faction integration**: Links to existing Cordelia organizations
- **Artifact connections**: Items that could be Seven Shards

## Implementation Status

### Phase 1: Content Extraction
- [ ] Extract key NPCs and adapt to Cordelia
- [ ] Convert monsters for dual-realm use  
- [ ] Adapt locations for underwater/sky themes
- [ ] Integrate magic items with crystal lore

### Phase 2: Mechanical Integration
- [ ] Adapt encounters for pressure/altitude mechanics
- [ ] Convert travel and navigation rules
- [ ] Integrate with faction relationship systems
- [ ] Link with corruption and transformation themes

### Phase 3: Narrative Weaving
- [ ] Connect plot threads to Shadow Conspiracy
- [ ] Integrate with Crystal Plague storylines
- [ ] Link artifacts to Seven Shards legend
- [ ] Weave into Deep Mother mythology

## Usage in Campaigns
This content can be used as:
- **Direct Import**: Use scenarios as-written in neutral zones
- **Realm Adaptation**: Convert for specific Aquabyssos/Aethermoor use
- **Inspiration Source**: Mine for ideas and adapt loosely
- **Crossover Events**: Bridge between D&D and Cordelia continuity

---
*Integration managed through the D&D Sourcebook Integration System*  
*Last updated: {datetime.now().strftime('%Y-%m-%d %H:%M')}*
"""
        
        index_file = book_dir / "INDEX.md"
        with open(index_file, 'w') as f:
            f.write(index_content)
    
    def create_integration_dashboard(self) -> Path:
        """Create comprehensive integration dashboard"""
        dashboard_content = f"""---
created: '{datetime.now().date().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: active
world: Both
type: Dashboard
tags:
- type/dashboard
- dnd/integration
- status/active
cssclass: dashboard
---

# 📚 D&D Sourcebook Integration Dashboard

## 📊 Integration Overview

### Available Sourcebooks ({len(self.sourcebooks)})
"""
        
        # Group sourcebooks by type
        campaigns = [book for book in self.sourcebooks.values() if book.type == "campaign"]
        adventures = [book for book in self.sourcebooks.values() if book.type == "adventure"] 
        supplements = [book for book in self.sourcebooks.values() if book.type == "supplement"]
        
        dashboard_content += f"""
### 🎲 Campaign Books ({len(campaigns)})
"""
        
        for book in campaigns:
            status_icon = "✅" if book.integration_status == "integrated" else "📋"
            dashboard_content += f"""
#### {status_icon} [[{book.name.replace(':', '').replace(' ', '_')}/INDEX|{book.name}]]
- **Level Range**: {book.level_range}
- **Themes**: {', '.join(book.themes)}
- **Status**: {book.integration_status.title()}
- **Description**: {book.description}

**Integration Checklist**:
- [ ] Extract key NPCs
- [ ] Adapt monsters for dual-realm use
- [ ] Convert locations for Cordelia themes
- [ ] Integrate plot hooks with Shadow Conspiracy
- [ ] Connect artifacts to Seven Shards legend

---
"""
        
        dashboard_content += f"""
### 📖 Adventure Collections ({len(adventures)})
"""
        
        for book in adventures:
            status_icon = "✅" if book.integration_status == "integrated" else "📋"
            dashboard_content += f"""
#### {status_icon} [[{book.name.replace(':', '').replace(' ', '_')}/INDEX|{book.name}]]
- **Level Range**: {book.level_range}
- **Themes**: {', '.join(book.themes)}
- **Status**: {book.integration_status.title()}
- **Description**: {book.description}

---
"""
        
        dashboard_content += f"""
## 🎯 Integration Priorities

### High Priority (Perfect Thematic Fit)
- **Ghosts of Saltmarsh** - Maritime themes align with Aquabyssos
- **Waterdeep: Dragon Heist** - Political intrigue matches Shadow Conspiracy
- **Call of the Netherdeep** - Ancient artifacts connect to Seven Shards
- **Curse of Strahd** - Horror elements support Crystal Plague atmosphere

### Medium Priority (Good Adaptation Potential)
- **Rime of the Frostmaiden** - Environmental hazards for pressure/altitude
- **Wild Beyond the Witchlight** - Fey elements for reality merger themes
- **Candlekeep Mysteries** - Investigation scenarios for conspiracy plots
- **Descent into Avernus** - Planar elements for convergence events

### Lower Priority (Inspiration Sources)
- **Tomb of Annihilation** - Exploration mechanics and trap design
- **Dungeon of the Mad Mage** - Mega-dungeon design principles
- **Journeys through Radiant Citadel** - Cultural diversity inspiration
- **Keys from the Golden Vault** - Heist mechanics for shadow operations

## 🔄 Integration Workflow

### Phase 1: Content Analysis
1. **Extract Core Elements**
   - Key NPCs and their motivations
   - Unique monsters and stat blocks
   - Important locations and maps
   - Significant magic items and artifacts
   - Central plot hooks and story beats

2. **Thematic Alignment Assessment**
   - How themes align with Cordelia's dual-realm setting
   - Potential connections to existing factions and plots
   - Opportunities for pressure/altitude mechanic integration
   - Links to corruption and transformation themes

### Phase 2: Mechanical Adaptation
1. **Environmental Conversion**
   - Adapt encounters for underwater (Aquabyssos) environments
   - Convert for high-altitude (Aethermoor) settings
   - Integrate pressure and wind mechanics
   - Adjust travel and navigation rules

2. **System Integration**
   - Link with existing faction relationship mechanics
   - Connect to corruption and sanity systems
   - Integrate with crystal technology and magic
   - Adapt social and political systems

### Phase 3: Narrative Weaving
1. **Plot Integration**
   - Connect storylines to the Shadow Conspiracy
   - Weave into Crystal Plague progression
   - Link artifacts to Seven Shards mythology
   - Integrate with Deep Mother cosmic horror

2. **Character Adaptation**
   - Convert NPCs to fit Cordelia's factions
   - Adapt backgrounds for dual-realm setting
   - Create cross-realm relationship dynamics
   - Establish connections to existing plot threads

## 🌐 Website Integration

### Multi-Select Sourcebook Chooser
The vault website includes a front-page multi-select interface for choosing which sourcebooks to integrate:

```html
<div class="sourcebook-selector">
    <h3>📚 D&D Sourcebook Integration</h3>
    <p>Select sourcebooks to integrate with your Cordelia campaign:</p>
"""
        
        for book in self.sourcebooks.values():
            dashboard_content += f"""
    <label class="sourcebook-option">
        <input type="checkbox" name="sourcebooks" value="{book.name.lower().replace(' ', '_').replace(':', '')}">
        <span class="book-title">{book.name}</span>
        <span class="book-meta">({book.abbreviation}) - Levels {book.level_range}</span>
        <span class="book-themes">{', '.join(book.themes[:3])}</span>
    </label>"""
        
        dashboard_content += f"""
</div>
```

### Integration Status API
- `GET /api/sourcebooks` - List all available sourcebooks
- `POST /api/integrate-sourcebook` - Begin integration of selected sourcebook
- `GET /api/integration-status/{{book_id}}` - Check integration progress
- `POST /api/adaptation-settings` - Configure realm-specific adaptations

## 🎮 Usage Examples

### Campaign Integration Scenarios

#### Scenario 1: Curse of Strahd + Crystal Plague
- **Concept**: Barovia exists as a demiplane caught between realms
- **Integration**: Castle Ravenloft becomes a crystalline fortress corrupted by shadow magic
- **NPCs**: Strahd becomes a shadow-touched vampire lord connected to the conspiracy
- **Mechanics**: Corruption mechanics replace the Dark Powers system

#### Scenario 2: Ghosts of Saltmarsh + Aquabyssos Politics  
- **Concept**: Saltmarsh exists as a surface trading post above an Aquabyssos city
- **Integration**: Sea-based adventures become pressure-depth challenges
- **NPCs**: Smugglers become cross-realm traders dealing in forbidden technology
- **Mechanics**: Ship combat adapts to submarine and surface vessel interactions

#### Scenario 3: Dragon Heist + Shadow Conspiracy
- **Concept**: Waterdeep's political intrigue mirrors Aquabyssos parliament corruption
- **Integration**: The Vault of Dragons contains seven shard fragments
- **NPCs**: The masked lords become shadow parliament members
- **Mechanics**: Faction relationships directly integrate with existing systems

## 📋 Implementation Checklist

### Technical Infrastructure
- [x] Create sourcebook directory structure
- [x] Generate integration templates
- [x] Build dashboard tracking system
- [ ] Implement website multi-select interface
- [ ] Create API endpoints for integration management
- [ ] Build automated content extraction tools

### Content Development  
- [ ] Priority sourcebook content analysis (4 books)
- [ ] NPC conversion templates
- [ ] Monster adaptation guidelines
- [ ] Location conversion tools
- [ ] Plot hook integration framework

### Quality Assurance
- [ ] Thematic consistency validation
- [ ] Mechanical balance testing
- [ ] Cross-reference verification
- [ ] Playtesting feedback integration

---
*This dashboard manages the complete integration of D&D 5e sourcebooks with the Cordelia dual-realm campaign setting.*

## Quick Actions
- [[#create-new-adaptation|Create New Adaptation]]
- [[#review-integration-progress|Review Integration Progress]]
- [[#update-sourcebook-status|Update Sourcebook Status]]
- [[#generate-conversion-report|Generate Conversion Report]]

---
**Last Updated**: {datetime.now().strftime('%Y-%m-%d %H:%M')}  
**Total Sourcebooks**: {len(self.sourcebooks)}  
**Integration Progress**: {len([b for b in self.sourcebooks.values() if b.integration_status == 'integrated'])}/{len(self.sourcebooks)} complete
"""
        
        # Save dashboard
        dashboard_file = self.vault_root / "D&D_SOURCEBOOK_INTEGRATION_DASHBOARD.md"
        with open(dashboard_file, 'w') as f:
            f.write(dashboard_content)
        
        print(f"📄 Integration dashboard created: {dashboard_file}")
        return dashboard_file
    
    def generate_sample_content(self) -> Dict[str, List[str]]:
        """Generate sample integrated content for demonstration"""
        print("🎭 Generating sample D&D integration content...")
        
        sample_content = {
            "npcs": [],
            "locations": [],
            "items": [],
            "adventures": []
        }
        
        # Sample NPC: Strahd adapted for Cordelia
        strahd_content = f"""---
created: '{datetime.now().date().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: active
world: Convergence
type: Character
tags:
- type/character
- importance/major
- corruption/critical
- world/convergence
- source/curse_of_strahd
full_name: "Count Strahd von Zarovich"
aliases: ["The Shadow Count", "Lord of Crystal Barovia"]
corruption_level: "Critical"
---

# Count Strahd von Zarovich - Shadow-Crystal Lord

## Cordelia Integration
Originally from Barovia, Count Strahd has become entangled with the [[Shadow Conspiracy]] through his pursuit of immortality and power. His domain now exists as a convergence zone between realms, where shadow magic and crystal corruption merge.

## Background
Strahd discovered crystal technology during his vampiric existence and became obsessed with its power. Through shadow magic rituals, he bound his castle to a floating island that phases between Aquabyssos depths and Aethermoor heights.

## Current Role
- **Shadow Conspiracy Lieutenant**: Commands undead forces for covert operations
- **Crystal Corruption Research**: Experiments with combining vampire magic and crystal enhancement
- **Convergence Zone Guardian**: Controls a strategic reality merger point

## Abilities (Adapted)
- **Crystal Bite**: Vampiric drain that also spreads crystal corruption
- **Shadow Phase**: Can shift his domain between realms at will
- **Pressure/Wind Immunity**: Adapted to survive in both deep and high environments
- **Corrupted Charm**: Mind control enhanced by crystal resonance

## Relationships
- **[[The Shadow Conspiracy]]**: Reluctant ally, pursues own agenda
- **[[Queen Seraphina]]**: Sees her corruption as inferior to his own
- **[[Deep Mother]]**: Fears this entity as it threatens his immortality

## Plot Hooks
- Players discover Strahd's castle appearing near [[The Convergence Point]]
- Shadow operatives are recruiting using vampiric conversion
- Crystal-enhanced undead begin appearing in both realms
- Strahd seeks one of the [[Seven Shards]] for ultimate power

---
*Adapted from Curse of Strahd for Cordelia dual-realm campaign*
"""
        
        strahd_file = self.dnd_content_dir / "Curse_of_Strahd" / "NPCs" / "Count_Strahd_von_Zarovich.md"
        strahd_file.parent.mkdir(parents=True, exist_ok=True)
        with open(strahd_file, 'w') as f:
            f.write(strahd_content)
        sample_content["npcs"].append(str(strahd_file))
        
        # Sample Location: Saltmarsh Harbor adapted
        saltmarsh_content = f"""---
created: '{datetime.now().date().isoformat()}'
updated: '{datetime.now().isoformat()}'
status: active
world: Both
type: Location
tags:
- type/location
- importance/major
- world/both
- source/ghosts_of_saltmarsh
region: "Cross-Realm Trading Port"
depth_altitude: 0
population: 2500
threat_level: "Moderate"
---

# Saltmarsh Harbor - Cross-Realm Trading Port

## Cordelia Integration
Saltmarsh exists as a unique surface port city built directly above an Aquabyssos trading district. The harbor serves both surface vessels and submarines, making it a crucial hub for cross-realm commerce and smuggling.

## Physical Description
### Surface Level (Aethermoor Access)
- Traditional harbor with docks and warehouses
- Sky-ship mooring masts for aerial vessels
- Lighthouse equipped with crystal navigation beacons

### Underwater Level (Aquabyssos Access)  
- Submersible docks with pressure equalization chambers
- Crystal-powered air recycling systems
- Underwater warehouses with magical preservation

## Key Locations
- **The Wicker Goat Inn**: Multi-level establishment serving both realms
- **Harbor Authority**: Cross-realm customs and trade regulation
- **Smuggler's Tunnels**: Hidden passages between surface and depth
- **Crystal Processing Plant**: Illegal modification of water crystals

## Notable NPCs
- **Captain Marina Saltwind**: Harbor master managing dual-realm traffic
- **Sanbalet Wavecrest**: Aquabyssos smuggler leader
- **Ned Timberwright**: Surface dockworker union representative

## Current Conflicts
- **Shadow Conspiracy Influence**: Corrupted harbor officials facilitate illegal trades
- **Pressure Regulation Disputes**: Surface/depth jurisdiction conflicts
- **Crystal Smuggling**: Modified water crystals destabilize local ecosystems
- **Faction Tensions**: [[Silverscale Consortium]] vs local merchant guilds

## Adventure Hooks
- Investigate mysterious shipments arriving at odd hours
- Stop smuggling operation moving shadow-touched artifacts
- Negotiate trade dispute between surface and depth merchants
- Uncover shadow conspiracy cell using harbor for operations

## Environmental Challenges
- **Tidal Pressure Changes**: Regular shifts affect both levels
- **Crystal Interference**: High concentration disrupts magic
- **Weather Variance**: Surface storms affect underwater districts
- **Corruption Spread**: Shadow influence seeps through trade goods

---
*Adapted from Ghosts of Saltmarsh for Cordelia dual-realm setting*
"""
        
        saltmarsh_file = self.dnd_content_dir / "Ghosts_of_Saltmarsh" / "Locations" / "Saltmarsh_Harbor.md"
        saltmarsh_file.parent.mkdir(parents=True, exist_ok=True)
        with open(saltmarsh_file, 'w') as f:
            f.write(saltmarsh_content)
        sample_content["locations"].append(str(saltmarsh_file))
        
        print(f"✅ Generated {len(sample_content['npcs'])} sample NPCs")
        print(f"✅ Generated {len(sample_content['locations'])} sample locations") 
        
        return sample_content
    
    def create_website_integration(self) -> str:
        """Create website integration HTML for sourcebook selection"""
        html_content = """
<!-- D&D Sourcebook Integration Multi-Select -->
<div class="sourcebook-integration-section">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <div class="card card-fantasy mb-4">
                    <div class="card-header">
                        <h3><i class="fas fa-dragon me-2"></i>D&D 5e Sourcebook Integration</h3>
                        <p class="mb-0">Select official D&D sourcebooks to integrate with your Cordelia campaign</p>
                    </div>
                    <div class="card-body">
                        <div class="sourcebook-grid">
"""
        
        # Group by type for better organization
        campaign_books = [book for book in self.sourcebooks.values() if book.type == "campaign"]
        adventure_books = [book for book in self.sourcebooks.values() if book.type == "adventure"]
        
        html_content += """
                            <div class="sourcebook-category mb-4">
                                <h4 class="text-primary mb-3">📚 Campaign Books</h4>
                                <div class="row">
"""
        
        for book in campaign_books:
            theme_badges = ' '.join([f'<span class="badge bg-secondary me-1">{theme}</span>' for theme in book.themes[:3]])
            html_content += f"""
                                    <div class="col-md-6 col-lg-4 mb-3">
                                        <div class="sourcebook-option">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" 
                                                       id="book_{book.name.lower().replace(' ', '_').replace(':', '')}"
                                                       name="sourcebooks" 
                                                       value="{book.name.lower().replace(' ', '_').replace(':', '')}">
                                                <label class="form-check-label w-100" 
                                                       for="book_{book.name.lower().replace(' ', '_').replace(':', '')}">
                                                    <div class="sourcebook-card">
                                                        <h6 class="mb-1">{book.name}</h6>
                                                        <small class="text-muted">({book.abbreviation}) • Levels {book.level_range}</small>
                                                        <p class="small mt-1 mb-2">{book.description}</p>
                                                        <div class="theme-tags">{theme_badges}</div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
"""
        
        html_content += """
                                </div>
                            </div>
                            
                            <div class="sourcebook-category">
                                <h4 class="text-success mb-3">📖 Adventure Collections</h4>
                                <div class="row">
"""
        
        for book in adventure_books:
            theme_badges = ' '.join([f'<span class="badge bg-secondary me-1">{theme}</span>' for theme in book.themes[:3]])
            html_content += f"""
                                    <div class="col-md-6 col-lg-4 mb-3">
                                        <div class="sourcebook-option">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" 
                                                       id="book_{book.name.lower().replace(' ', '_').replace(':', '')}"
                                                       name="sourcebooks" 
                                                       value="{book.name.lower().replace(' ', '_').replace(':', '')}">
                                                <label class="form-check-label w-100" 
                                                       for="book_{book.name.lower().replace(' ', '_').replace(':', '')}">
                                                    <div class="sourcebook-card">
                                                        <h6 class="mb-1">{book.name}</h6>
                                                        <small class="text-muted">({book.abbreviation}) • Levels {book.level_range}</small>
                                                        <p class="small mt-1 mb-2">{book.description}</p>
                                                        <div class="theme-tags">{theme_badges}</div>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
"""
        
        html_content += """
                                </div>
                            </div>
                        </div>
                        
                        <div class="integration-controls mt-4">
                            <div class="row">
                                <div class="col-md-8">
                                    <button class="btn btn-primary me-2" onclick="integrateSelectedBooks()">
                                        <i class="fas fa-download me-1"></i>Integrate Selected Books
                                    </button>
                                    <button class="btn btn-outline-secondary me-2" onclick="selectAllBooks()">
                                        <i class="fas fa-check-double me-1"></i>Select All
                                    </button>
                                    <button class="btn btn-outline-secondary" onclick="clearSelection()">
                                        <i class="fas fa-times me-1"></i>Clear Selection
                                    </button>
                                </div>
                                <div class="col-md-4 text-end">
                                    <small class="text-muted">
                                        <span id="selected-count">0</span> of <span id="total-count">{len(self.sourcebooks)}</span> selected
                                    </small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.sourcebook-option {
    height: 100%;
}

.sourcebook-card {
    border: 1px solid #dee2e6;
    border-radius: 0.5rem;
    padding: 1rem;
    height: 100%;
    transition: all 0.2s;
    background: white;
}

.sourcebook-card:hover {
    border-color: #0d6efd;
    box-shadow: 0 2px 8px rgba(13, 110, 253, 0.15);
}

.form-check-input:checked ~ .form-check-label .sourcebook-card {
    border-color: #0d6efd;
    background: #f8f9ff;
}

.theme-tags {
    margin-top: 0.5rem;
}

.theme-tags .badge {
    font-size: 0.7em;
}

.sourcebook-grid {
    max-height: 600px;
    overflow-y: auto;
}

.integration-controls {
    border-top: 1px solid #dee2e6;
    padding-top: 1rem;
}
</style>

<script>
let selectedBooks = new Set();

function updateSelectedCount() {
    document.getElementById('selected-count').textContent = selectedBooks.size;
}

function selectAllBooks() {
    document.querySelectorAll('input[name="sourcebooks"]').forEach(checkbox => {
        checkbox.checked = true;
        selectedBooks.add(checkbox.value);
    });
    updateSelectedCount();
}

function clearSelection() {
    document.querySelectorAll('input[name="sourcebooks"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    selectedBooks.clear();
    updateSelectedCount();
}

function integrateSelectedBooks() {
    const selected = Array.from(document.querySelectorAll('input[name="sourcebooks"]:checked'))
                          .map(cb => cb.value);
    
    if (selected.length === 0) {
        alert('Please select at least one sourcebook to integrate.');
        return;
    }
    
    // Show loading state
    const button = event.target;
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin me-1"></i>Integrating...';
    button.disabled = true;
    
    // Simulate integration process
    fetch('/api/integrate-sourcebooks', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({sourcebooks: selected})
    })
    .then(response => response.json())
    .then(data => {
        button.innerHTML = originalText;
        button.disabled = false;
        
        if (data.success) {
            alert(`Successfully initiated integration for ${selected.length} sourcebook(s). Check the integration dashboard for progress.`);
            // Optionally redirect to integration dashboard
            window.location.href = '/dashboard';
        } else {
            alert('Integration failed: ' + (data.error || 'Unknown error'));
        }
    })
    .catch(error => {
        button.innerHTML = originalText;
        button.disabled = false;
        alert('Integration failed: ' + error.message);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('total-count').textContent = document.querySelectorAll('input[name="sourcebooks"]').length;
    
    // Add event listeners to checkboxes
    document.querySelectorAll('input[name="sourcebooks"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                selectedBooks.add(this.value);
            } else {
                selectedBooks.delete(this.value);
            }
            updateSelectedCount();
        });
    });
});
</script>
"""
        
        # Save to website templates
        template_file = self.vault_root / "scripts" / "templates" / "sourcebook_integration.html"
        template_file.parent.mkdir(parents=True, exist_ok=True)
        with open(template_file, 'w') as f:
            f.write(html_content)
        
        return html_content

def main():
    """Main integration setup function"""
    vault_root = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    integrator = DNDSourcebookIntegrator(vault_root)
    
    print("📚 D&D Sourcebook Integration System")
    print("=" * 45)
    
    # Create integration structure
    integrator.create_sourcebook_integration_structure()
    
    # Generate dashboard
    dashboard_file = integrator.create_integration_dashboard()
    
    # Generate sample content
    sample_content = integrator.generate_sample_content()
    
    # Create website integration
    integrator.create_website_integration()
    
    print(f"\n✅ D&D Integration System Complete:")
    print(f"   📄 Dashboard: {dashboard_file}")
    print(f"   📚 Sourcebooks: {len(integrator.sourcebooks)} available")
    print(f"   🎭 Sample NPCs: {len(sample_content['npcs'])} created")
    print(f"   🗺️ Sample Locations: {len(sample_content['locations'])} created")
    print(f"   🌐 Website integration template created")
    
    print(f"\n🎯 Next Steps:")
    print(f"   1. Review integration dashboard for implementation priorities")
    print(f"   2. Select high-priority sourcebooks for full integration") 
    print(f"   3. Use website multi-select to choose books for your campaign")
    print(f"   4. Begin content extraction and adaptation process")

if __name__ == "__main__":
    main()