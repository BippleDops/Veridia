#!/usr/bin/env python3
"""
Random Generator Engine for TTRPG Vault
Comprehensive system for generating NPCs, encounters, loot, and more.
Part of Phase 4: Advanced Automation & Dynamic Systems
"""

import json
import random
import re
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional, Union
from dataclasses import dataclass, asdict
import uuid

# Data structures for generation
@dataclass
class NPCProfile:
    name: str
    title: str
    faction: str
    appearance: str
    personality: str
    motivation: str
    secret: str
    location: str
    realm: str
    challenge_rating: int
    relationships: List[str]
    abilities: List[str]
    equipment: List[str]
    
@dataclass
class Encounter:
    name: str
    type: str
    difficulty: str
    creatures: List[str]
    environment: str
    tactics: str
    treasure: List[str]
    hooks: List[str]
    realm: str
    level_range: str
    
@dataclass
class LootItem:
    name: str
    type: str
    rarity: str
    value: int
    description: str
    properties: List[str]
    realm_specific: str

class RandomGeneratorEngine:
    """Main engine for all random generation."""
    
    def __init__(self, vault_path: str):
        self.vault_path = Path(vault_path)
        self.data_path = self.vault_path / "scripts" / "generator_data"
        self.data_path.mkdir(exist_ok=True)
        
        # Load generation data
        self.load_generation_data()
        
    def load_generation_data(self):
        """Load all data tables for generation."""
        # NPC Generation Data
        self.npc_data = {
            "aquabyssos_names": [
                "Marina", "Coral", "Pelagic", "Abyss", "Current", "Tide", "Reef", 
                "Pearl", "Nautilus", "Leviathan", "Kraken", "Siphon", "Depth",
                "Thalassa", "Nereid", "Triton", "Oceanus", "Benthos"
            ],
            "aethermoor_names": [
                "Aura", "Nimbus", "Zephyr", "Tempest", "Gale", "Breeze", "Storm",
                "Cirrus", "Stratos", "Azure", "Skylar", "Celeste", "Altus"
            ],
            "titles": [
                "Ambassador", "Captain", "Admiral", "Scholar", "Merchant", "Artificer",
                "Keeper", "Guardian", "Emissary", "Councilor", "Elder", "Sage",
                "Commander", "Engineer", "Chronicler", "Mystic", "Trader"
            ],
            "factions": [
                "Parliament of Echoes", "Crystal Wardens", "Shadow Conspiracy",
                "Deep Merchants Guild", "Wind Riders", "Academy of Depths",
                "The Iron Company", "Crimson Tide Pirates", "Order of Azure Flame"
            ],
            "personalities": [
                "Calculating and methodical", "Passionate but impulsive", 
                "Wise and contemplative", "Charming but deceptive",
                "Loyal but inflexible", "Ambitious and ruthless",
                "Kind but naive", "Cynical but practical"
            ],
            "motivations": [
                "Seeks ancient knowledge", "Wants political power",
                "Protecting their realm", "Personal revenge",
                "Profit above all", "Religious devotion",
                "Family honor", "Scientific discovery"
            ],
            "secrets": [
                "Works for the Shadow Conspiracy", "Has royal bloodline",
                "Addicted to crystal corruption", "Lost memories of past life",
                "Secret romantic relationship", "Owes massive debt",
                "Witnessed major conspiracy", "Has forbidden magical ability"
            ]
        }
        
        # Encounter Data
        self.encounter_data = {
            "types": ["Combat", "Social", "Exploration", "Puzzle", "Stealth", "Chase"],
            "difficulties": ["Easy", "Medium", "Hard", "Deadly"],
            "aquabyssos_creatures": [
                "Deep Leviathan", "Crystal Jellyfish", "Void Touched Mer-folk",
                "Shadow Surgeons", "Abyssal Cultists", "Pressure Wraiths",
                "Memory Thieves", "Tidal Horrors", "Corrupted Pearls"
            ],
            "aethermoor_creatures": [
                "Wind Elementals", "Sky Pirates", "Storm Hawks", "Cloud Dancers",
                "Lightning Wisps", "Aerial Scouts", "Wind Singers", "Tempest Guards"
            ],
            "environments": [
                "Ancient Ruins", "Trade Route", "Government Building", 
                "Underground Tunnels", "Open Ocean", "Sky Platform",
                "Crystal Caves", "Diplomatic Embassy", "Secret Laboratory"
            ]
        }
        
        # Loot Data
        self.loot_data = {
            "common_items": [
                "Pressure Regulator", "Navigation Crystal", "Memory Pearl",
                "Wind Compass", "Trade Seal", "Breathing Apparatus"
            ],
            "uncommon_items": [
                "Depth Pressure Ring", "Storm Caller Whistle", "Shadow Detector",
                "Tidal Shard", "Wind Walking Boots", "Crystal Focus"
            ],
            "rare_items": [
                "Crown Fragment", "Void Touch Antidote", "Reality Anchor",
                "Deep Mother Relic", "Parliament Seal", "Ancient Skyforge Tool"
            ],
            "item_properties": [
                "Pressure Resistant", "Void Protected", "Memory Enhanced",
                "Storm Attuned", "Crystal Powered", "Shadow Touched",
                "Tidal Linked", "Wind Blessed", "Reality Stable"
            ]
        }
        
    def generate_npc(self, realm: str = "Both", faction: str = None) -> NPCProfile:
        """Generate a detailed NPC."""
        realm = realm.lower()
        
        # Choose name based on realm
        if realm == "aquabyssos" or (realm == "both" and random.choice([True, False])):
            name = random.choice(self.npc_data["aquabyssos_names"])
            actual_realm = "Aquabyssos"
        else:
            name = random.choice(self.npc_data["aethermoor_names"])
            actual_realm = "Aethermoor"
        
        # Add surname
        surname = random.choice(["Deepcurrent", "Stormwind", "Crystalheart", 
                               "Shadowmere", "Tidecaller", "Voidward", "Brightwater"])
        full_name = f"{name} {surname}"
        
        # Generate other attributes
        title = random.choice(self.npc_data["titles"])
        if faction:
            chosen_faction = faction
        else:
            chosen_faction = random.choice(self.npc_data["factions"])
            
        personality = random.choice(self.npc_data["personalities"])
        motivation = random.choice(self.npc_data["motivations"])
        secret = random.choice(self.npc_data["secrets"])
        
        # Generate appearance
        appearance = self._generate_appearance(actual_realm)
        
        # Generate abilities and equipment
        abilities = random.sample([
            "Diplomatic Immunity", "Deep Pressure Adaptation", "Wind Walking",
            "Crystal Attunement", "Shadow Resistance", "Memory Reading",
            "Tidal Sense", "Storm Calling", "Void Detection"
        ], k=random.randint(2, 4))
        
        equipment = random.sample([
            "Ceremonial Robes", "Pressure Suit", "Navigation Tools", 
            "Diplomatic Papers", "Crystal Focus", "Wind Cloak",
            "Memory Stones", "Trade Ledger", "Security Badge"
        ], k=random.randint(2, 5))
        
        return NPCProfile(
            name=full_name,
            title=title,
            faction=chosen_faction,
            appearance=appearance,
            personality=personality,
            motivation=motivation,
            secret=secret,
            location=f"Location TBD - {actual_realm}",
            realm=actual_realm,
            challenge_rating=random.randint(1, 10),
            relationships=[],
            abilities=abilities,
            equipment=equipment
        )
        
    def _generate_appearance(self, realm: str) -> str:
        """Generate appearance based on realm."""
        if realm == "Aquabyssos":
            features = [
                "bioluminescent markings", "gill slits on neck", "webbed fingers",
                "pearl-white skin", "deep blue eyes", "scale patches",
                "flowing sea-green hair", "pressure-adapted physique"
            ]
        else:
            features = [
                "wind-swept hair", "storm-grey eyes", "sun-weathered skin",
                "athletic build", "silver jewelry", "sky-blue markings",
                "flowing robes", "keen piercing gaze"
            ]
        
        selected_features = random.sample(features, k=random.randint(2, 4))
        return f"Notable features: {', '.join(selected_features)}"
        
    def generate_encounter(self, level_range: str = "1-5", realm: str = "Both") -> Encounter:
        """Generate a complete encounter."""
        realm = realm.lower()
        
        encounter_type = random.choice(self.encounter_data["types"])
        difficulty = random.choice(self.encounter_data["difficulties"])
        environment = random.choice(self.encounter_data["environments"])
        
        # Choose creatures based on realm
        if realm == "aquabyssos":
            creatures = random.sample(self.encounter_data["aquabyssos_creatures"], 
                                    k=random.randint(1, 3))
            actual_realm = "Aquabyssos"
        elif realm == "aethermoor":
            creatures = random.sample(self.encounter_data["aethermoor_creatures"], 
                                    k=random.randint(1, 3))
            actual_realm = "Aethermoor"
        else:
            all_creatures = (self.encounter_data["aquabyssos_creatures"] + 
                           self.encounter_data["aethermoor_creatures"])
            creatures = random.sample(all_creatures, k=random.randint(1, 3))
            actual_realm = "Both"
        
        # Generate tactics
        tactics = self._generate_tactics(encounter_type, creatures)
        
        # Generate hooks
        hooks = self._generate_hooks(encounter_type, environment)
        
        # Generate treasure
        treasure = self._generate_treasure_list(difficulty)
        
        return Encounter(
            name=f"{environment} {encounter_type}",
            type=encounter_type,
            difficulty=difficulty,
            creatures=creatures,
            environment=environment,
            tactics=tactics,
            treasure=treasure,
            hooks=hooks,
            realm=actual_realm,
            level_range=level_range
        )
        
    def _generate_tactics(self, encounter_type: str, creatures: List[str]) -> str:
        """Generate tactical description."""
        if encounter_type == "Combat":
            return f"{creatures[0]} leads with aggressive assault while others flank"
        elif encounter_type == "Social":
            return "Uses charm and negotiation, escalates to threats if needed"
        elif encounter_type == "Stealth":
            return "Patrols in predictable patterns, vulnerable during shift changes"
        else:
            return "Adapts to party actions, uses environment to advantage"
            
    def _generate_hooks(self, encounter_type: str, environment: str) -> List[str]:
        """Generate story hooks for encounter."""
        base_hooks = [
            f"Information about Shadow Conspiracy activities in {environment}",
            "Clues to Queen Seraphina's crystal corruption",
            "Deep Mother cult recruitment attempt",
            "Trade route disruption evidence",
            "Parliamentary corruption scandal"
        ]
        return random.sample(base_hooks, k=random.randint(1, 3))
        
    def _generate_treasure_list(self, difficulty: str) -> List[str]:
        """Generate treasure based on difficulty."""
        treasure = []
        
        # Base coins
        if difficulty == "Easy":
            treasure.append(f"{random.randint(10, 50)} gold pieces")
        elif difficulty == "Medium":
            treasure.append(f"{random.randint(50, 150)} gold pieces")
        elif difficulty == "Hard":
            treasure.append(f"{random.randint(150, 400)} gold pieces")
        else:  # Deadly
            treasure.append(f"{random.randint(400, 1000)} gold pieces")
            
        # Add items based on difficulty
        if difficulty in ["Easy", "Medium"]:
            treasure.extend(random.sample(self.loot_data["common_items"], k=1))
        elif difficulty == "Hard":
            treasure.extend(random.sample(self.loot_data["uncommon_items"], k=1))
        else:
            treasure.extend(random.sample(self.loot_data["rare_items"], k=1))
            
        return treasure
        
    def generate_loot_item(self, rarity: str = None) -> LootItem:
        """Generate a single loot item."""
        if not rarity:
            rarity = random.choices(
                ["Common", "Uncommon", "Rare", "Very Rare"],
                weights=[50, 30, 15, 5],
                k=1
            )[0]
        
        # Choose item based on rarity
        if rarity == "Common":
            base_name = random.choice(self.loot_data["common_items"])
            value = random.randint(10, 100)
        elif rarity == "Uncommon":
            base_name = random.choice(self.loot_data["uncommon_items"])
            value = random.randint(100, 500)
        else:  # Rare or Very Rare
            base_name = random.choice(self.loot_data["rare_items"])
            value = random.randint(500, 5000)
            
        properties = random.sample(self.loot_data["item_properties"], 
                                 k=random.randint(1, 3))
        
        return LootItem(
            name=base_name,
            type=random.choice(["Tool", "Weapon", "Armor", "Accessory", "Consumable"]),
            rarity=rarity,
            value=value,
            description=f"A {base_name.lower()} with {', '.join(properties).lower()}",
            properties=properties,
            realm_specific=random.choice(["Aquabyssos", "Aethermoor", "Both"])
        )
        
    def generate_batch(self, count: int, item_type: str, **kwargs) -> List[Dict]:
        """Generate multiple items of specified type."""
        results = []
        
        for _ in range(count):
            if item_type == "npc":
                item = self.generate_npc(**kwargs)
            elif item_type == "encounter":
                item = self.generate_encounter(**kwargs)
            elif item_type == "loot":
                item = self.generate_loot_item(**kwargs)
            else:
                continue
                
            results.append(asdict(item))
            
        return results
        
    def export_to_markdown(self, item: Union[NPCProfile, Encounter, LootItem], 
                          output_dir: str = None) -> str:
        """Export generated item to markdown format."""
        if not output_dir:
            output_dir = self.vault_path / "02_Worldbuilding" / "Generated"
            
        output_path = Path(output_dir)
        output_path.mkdir(parents=True, exist_ok=True)
        
        if isinstance(item, NPCProfile):
            return self._export_npc_md(item, output_path)
        elif isinstance(item, Encounter):
            return self._export_encounter_md(item, output_path)
        elif isinstance(item, LootItem):
            return self._export_loot_md(item, output_path)
            
    def _export_npc_md(self, npc: NPCProfile, output_path: Path) -> str:
        """Export NPC to markdown."""
        filename = f"{npc.name.replace(' ', '_')}.md"
        filepath = output_path / "People" / filename
        filepath.parent.mkdir(parents=True, exist_ok=True)
        
        content = f"""---
created: '{datetime.now().strftime("%Y-%m-%d")}'
status: generated
tags:
- generated
- npc
- {npc.realm.lower()}
- {npc.faction.lower().replace(' ', '-')}
type: People
world: {npc.realm}
updated: '{datetime.now().isoformat()}'
---

# {npc.name}

## Basic Information
- **Title**: {npc.title}
- **Faction**: [[{npc.faction}]]
- **Realm**: {npc.realm}
- **Challenge Rating**: {npc.challenge_rating}

## Physical Description
{npc.appearance}

## Personality & Motivation
**Personality**: {npc.personality}
**Primary Motivation**: {npc.motivation}

## Background & Secrets
**Secret**: {npc.secret}

## Abilities
{''.join(f'- {ability}' for ability in npc.abilities)}

## Equipment
{''.join(f'- {item}' for item in npc.equipment)}

## Relationships
*To be developed through play*

## Plot Hooks
- Investigate their connection to {npc.faction}
- Uncover the truth behind their secret
- Leverage their motivation for party goals

## GM Notes
*Generated NPC - expand as needed for campaign use*
"""

        filepath.write_text(content)
        return str(filepath)
        
    def _export_encounter_md(self, encounter: Encounter, output_path: Path) -> str:
        """Export encounter to markdown."""
        safe_name = re.sub(r'[^\w\s-]', '', encounter.name).replace(' ', '_')
        filename = f"{safe_name}.md"
        filepath = output_path / "Encounters" / filename
        filepath.parent.mkdir(parents=True, exist_ok=True)
        
        content = f"""---
created: '{datetime.now().strftime("%Y-%m-%d")}'
status: generated
tags:
- generated
- encounter
- {encounter.type.lower()}
- {encounter.difficulty.lower()}
- {encounter.realm.lower()}
type: Encounter
world: {encounter.realm}
updated: '{datetime.now().isoformat()}'
---

# {encounter.name}

## Encounter Details
- **Type**: {encounter.type}
- **Difficulty**: {encounter.difficulty}
- **Level Range**: {encounter.level_range}
- **Environment**: {encounter.environment}
- **Realm**: {encounter.realm}

## Creatures/NPCs
{''.join(f'- {creature}' for creature in encounter.creatures)}

## Tactics
{encounter.tactics}

## Treasure
{''.join(f'- {item}' for item in encounter.treasure)}

## Story Hooks
{''.join(f'- {hook}' for hook in encounter.hooks)}

## Scaling Notes
- **Easy**: Remove one creature or reduce abilities
- **Hard**: Add environmental hazard or reinforcements
- **Deadly**: Multiple waves or elite variants

## GM Notes
*Generated encounter - modify as needed for your campaign*
"""

        filepath.write_text(content)
        return str(filepath)
        
    def _export_loot_md(self, item: LootItem, output_path: Path) -> str:
        """Export loot item to markdown."""
        safe_name = re.sub(r'[^\w\s-]', '', item.name).replace(' ', '_')
        filename = f"{safe_name}.md"
        filepath = output_path / "Items" / filename
        filepath.parent.mkdir(parents=True, exist_ok=True)
        
        content = f"""---
created: '{datetime.now().strftime("%Y-%m-%d")}'
status: generated
tags:
- generated
- item
- {item.rarity.lower()}
- {item.type.lower()}
type: Items
world: {item.realm_specific}
updated: '{datetime.now().isoformat()}'
---

# {item.name}

## Item Statistics
- **Type**: {item.type}
- **Rarity**: {item.rarity}
- **Value**: {item.value} gold pieces
- **Realm**: {item.realm_specific}

## Description
{item.description}

## Properties
{''.join(f'- {prop}' for prop in item.properties)}

## Usage Notes
*Generated item - balance and modify as needed*

## Plot Integration
*Consider how this item connects to ongoing storylines*
"""

        filepath.write_text(content)
        return str(filepath)

def main():
    """Main function for command-line usage."""
    import argparse
    
    parser = argparse.ArgumentParser(description="Random Generator Engine")
    parser.add_argument("--type", choices=["npc", "encounter", "loot"], required=True)
    parser.add_argument("--count", type=int, default=1)
    parser.add_argument("--realm", choices=["Aquabyssos", "Aethermoor", "Both"], default="Both")
    parser.add_argument("--export", action="store_true", help="Export to markdown files")
    parser.add_argument("--vault-path", default=".", help="Path to vault root")
    
    args = parser.parse_args()
    
    generator = RandomGeneratorEngine(args.vault_path)
    
    print(f"Generating {args.count} {args.type}(s) for realm: {args.realm}")
    print("=" * 50)
    
    items = generator.generate_batch(
        count=args.count,
        item_type=args.type,
        realm=args.realm
    )
    
    for i, item_data in enumerate(items, 1):
        print(f"\n--- Generated {args.type.title()} #{i} ---")
        if args.type == "npc":
            item = NPCProfile(**item_data)
            print(f"Name: {item.name}")
            print(f"Title: {item.title}")
            print(f"Faction: {item.faction}")
            print(f"Personality: {item.personality}")
        elif args.type == "encounter":
            item = Encounter(**item_data)
            print(f"Name: {item.name}")
            print(f"Type: {item.type} ({item.difficulty})")
            print(f"Creatures: {', '.join(item.creatures)}")
        elif args.type == "loot":
            item = LootItem(**item_data)
            print(f"Name: {item.name}")
            print(f"Rarity: {item.rarity} {item.type}")
            print(f"Value: {item.value} gp")
            
        if args.export:
            if args.type == "npc":
                item = NPCProfile(**item_data)
            elif args.type == "encounter":
                item = Encounter(**item_data)
            elif args.type == "loot":
                item = LootItem(**item_data)
            
            filepath = generator.export_to_markdown(item)
            print(f"Exported to: {filepath}")

if __name__ == "__main__":
    main()