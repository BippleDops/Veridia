#!/usr/bin/env python3
"""
Cordelia TTRPG Vault - Pydantic Data Models
Comprehensive data structures for vault content validation and management.
"""

from datetime import datetime, date
from enum import Enum
from typing import Optional, List, Dict, Any, Union, Set
from pydantic import BaseModel, Field, validator, model_validator
import re

# Enums for standardized fields

class ContentStatus(str, Enum):
    """Content development status"""
    draft = "draft"
    stub = "stub" 
    active = "active"
    complete = "complete"
    archived = "archived"
    deprecated = "deprecated"

class WorldRealm(str, Enum):
    """World realms in Cordelia"""
    aquabyssos = "Aquabyssos"
    aethermoor = "Aethermoor"
    both = "Both"
    convergence = "Convergence"
    neutral = "Neutral"

class ContentType(str, Enum):
    """Types of vault content"""
    adventure = "Adventure"
    campaign = "Campaign"
    character = "Character"
    location = "Location"
    quest = "Quest"
    item = "Item"
    faction = "Faction"
    lore = "Lore"
    session = "Session"
    template = "Template"
    mechanics = "Mechanics"
    resource = "Resource"
    report = "Report"

class FactionType(str, Enum):
    """Categories of factions"""
    government = "Government"
    criminal = "Criminal" 
    academic = "Academic"
    religious = "Religious"
    merchant = "Merchant"
    military = "Military"
    cultural = "Cultural"
    guild = "Guild"
    order = "Order"
    cult = "Cult"
    house = "House"

class ThreatLevel(str, Enum):
    """Threat assessment levels"""
    minimal = "Minimal"
    low = "Low"
    moderate = "Moderate"
    high = "High"
    critical = "Critical"
    existential = "Existential"

class CorruptionLevel(str, Enum):
    """Crystal/Shadow corruption levels"""
    none = "None"
    trace = "Trace"
    minor = "Minor"
    moderate = "Moderate"
    severe = "Severe"
    critical = "Critical"
    total = "Total"

# Base Models

class BaseVaultContent(BaseModel):
    """Base model for all vault content"""
    title: str = Field(..., min_length=1, max_length=200)
    created: date = Field(default_factory=lambda: datetime.now().date())
    updated: datetime = Field(default_factory=datetime.now)
    status: ContentStatus = ContentStatus.draft
    world: WorldRealm = WorldRealm.both
    content_type: ContentType
    tags: List[str] = Field(default_factory=list)
    metadata: Optional[Dict[str, Any]] = None
    
    class Config:
        use_enum_values = True
        json_encoders = {
            datetime: lambda v: v.isoformat(),
            date: lambda v: v.isoformat()
        }
    
    @validator('tags')
    def validate_tags(cls, v):
        """Ensure tags follow hierarchical format"""
        valid_tags = []
        for tag in v:
            if tag and isinstance(tag, str):
                # Normalize tag format
                clean_tag = re.sub(r'[^\w\-/]', '', tag.lower())
                if clean_tag:
                    valid_tags.append(clean_tag)
        return valid_tags

class Character(BaseVaultContent):
    """Character/NPC data model"""
    content_type: ContentType = ContentType.character
    
    # Core identity
    full_name: str
    aliases: List[str] = Field(default_factory=list)
    titles: List[str] = Field(default_factory=list)
    
    # Demographics
    age: Optional[int] = None
    species: Optional[str] = None
    occupation: Optional[str] = None
    social_class: Optional[str] = None
    
    # Affiliations
    factions: List[str] = Field(default_factory=list)
    relationships: Dict[str, str] = Field(default_factory=dict)
    locations: List[str] = Field(default_factory=list)
    
    # Characteristics
    personality_traits: List[str] = Field(default_factory=list)
    ideals: List[str] = Field(default_factory=list)
    bonds: List[str] = Field(default_factory=list)
    flaws: List[str] = Field(default_factory=list)
    
    # Game mechanics
    level: Optional[int] = None
    character_class: Optional[str] = None
    abilities: Dict[str, int] = Field(default_factory=dict)
    
    # Corruption & transformation
    corruption_level: CorruptionLevel = CorruptionLevel.none
    transformation_status: Optional[str] = None
    
    # Narrative importance
    plot_relevance: List[str] = Field(default_factory=list)
    secrets: List[str] = Field(default_factory=list)
    goals: List[str] = Field(default_factory=list)

class Location(BaseVaultContent):
    """Location data model"""
    content_type: ContentType = ContentType.location
    
    # Geographic data
    region: Optional[str] = None
    coordinates: Optional[Dict[str, float]] = None
    size: Optional[str] = None
    population: Optional[int] = None
    
    # Physical characteristics
    terrain_type: Optional[str] = None
    climate: Optional[str] = None
    depth_altitude: Optional[int] = None  # Depth (negative) or altitude (positive)
    pressure_level: Optional[str] = None
    
    # Governance & society
    government_type: Optional[str] = None
    ruling_faction: Optional[str] = None
    notable_factions: List[str] = Field(default_factory=list)
    
    # Points of interest
    districts: List[str] = Field(default_factory=list)
    landmarks: List[str] = Field(default_factory=list)
    connected_locations: List[str] = Field(default_factory=list)
    
    # Economy & resources
    primary_industry: Optional[str] = None
    trade_goods: List[str] = Field(default_factory=list)
    resources: List[str] = Field(default_factory=list)
    
    # Dangers & atmosphere
    threat_level: ThreatLevel = ThreatLevel.minimal
    corruption_level: CorruptionLevel = CorruptionLevel.none
    atmospheric_tags: List[str] = Field(default_factory=list)
    
    # Sensory details
    sounds: List[str] = Field(default_factory=list)
    smells: List[str] = Field(default_factory=list)
    sights: List[str] = Field(default_factory=list)
    
    @validator('depth_altitude')
    def validate_depth_altitude(cls, v, values):
        """Validate depth/altitude makes sense for realm"""
        if v is not None and 'world' in values:
            realm = values['world']
            if realm == WorldRealm.aquabyssos and v > 0:
                raise ValueError("Aquabyssos locations should have negative depth values")
            elif realm == WorldRealm.aethermoor and v < 0:
                raise ValueError("Aethermoor locations should have positive altitude values")
        return v

class Faction(BaseVaultContent):
    """Faction/Organization data model"""
    content_type: ContentType = ContentType.faction
    
    # Identity
    formal_name: str
    short_name: Optional[str] = None
    faction_type: FactionType
    motto: Optional[str] = None
    
    # Structure & leadership
    leadership: List[str] = Field(default_factory=list)
    hierarchy: Dict[str, List[str]] = Field(default_factory=dict)
    size: Optional[str] = None
    member_count: Optional[int] = None
    
    # Operations
    base_locations: List[str] = Field(default_factory=list)
    territory: List[str] = Field(default_factory=list)
    activities: List[str] = Field(default_factory=list)
    resources: List[str] = Field(default_factory=list)
    
    # Relationships
    allies: List[str] = Field(default_factory=list)
    enemies: List[str] = Field(default_factory=list)
    rivals: List[str] = Field(default_factory=list)
    neutral: List[str] = Field(default_factory=list)
    
    # Ideology & goals
    core_beliefs: List[str] = Field(default_factory=list)
    primary_goals: List[str] = Field(default_factory=list)
    methods: List[str] = Field(default_factory=list)
    
    # Power & influence
    influence_level: ThreatLevel = ThreatLevel.minimal
    corruption_involvement: CorruptionLevel = CorruptionLevel.none
    political_power: Optional[str] = None
    
    # Secrets & plots
    hidden_agendas: List[str] = Field(default_factory=list)
    secret_operations: List[str] = Field(default_factory=list)
    plot_hooks: List[str] = Field(default_factory=list)

class Quest(BaseVaultContent):
    """Quest/Adventure data model"""
    content_type: ContentType = ContentType.quest
    
    # Quest structure
    quest_giver: Optional[str] = None
    objective: str
    quest_type: Optional[str] = None
    suggested_level: Optional[str] = None
    
    # Prerequisites & context
    prerequisites: List[str] = Field(default_factory=list)
    related_quests: List[str] = Field(default_factory=list)
    faction_involvement: List[str] = Field(default_factory=list)
    
    # Locations & NPCs
    key_locations: List[str] = Field(default_factory=list)
    key_npcs: List[str] = Field(default_factory=list)
    
    # Rewards & consequences
    rewards: Dict[str, Any] = Field(default_factory=dict)
    consequences: List[str] = Field(default_factory=list)
    failure_outcomes: List[str] = Field(default_factory=list)
    
    # Story integration
    main_plot_relevance: Optional[str] = None
    subplot_connections: List[str] = Field(default_factory=list)
    world_state_changes: List[str] = Field(default_factory=list)

class Item(BaseVaultContent):
    """Item/Artifact data model"""
    content_type: ContentType = ContentType.item
    
    # Basic properties
    item_type: str
    rarity: Optional[str] = None
    value: Optional[str] = None
    weight: Optional[str] = None
    
    # Mechanical properties
    stats: Dict[str, Any] = Field(default_factory=dict)
    abilities: List[str] = Field(default_factory=list)
    requirements: List[str] = Field(default_factory=list)
    
    # Lore & significance
    origin: Optional[str] = None
    creator: Optional[str] = None
    historical_significance: Optional[str] = None
    
    # Current status
    current_location: Optional[str] = None
    current_owner: Optional[str] = None
    
    # Corruption & magic
    magical_properties: List[str] = Field(default_factory=list)
    corruption_level: CorruptionLevel = CorruptionLevel.none
    curse_status: Optional[str] = None

class Session(BaseVaultContent):
    """Session journal data model"""
    content_type: ContentType = ContentType.session
    
    # Session metadata
    session_number: int
    campaign: str
    session_date: Optional[date] = None
    duration: Optional[str] = None
    
    # Participants
    dm: str
    players: List[str] = Field(default_factory=list)
    characters: List[str] = Field(default_factory=list)
    
    # Content summary
    summary: Optional[str] = None
    key_events: List[str] = Field(default_factory=list)
    locations_visited: List[str] = Field(default_factory=list)
    npcs_encountered: List[str] = Field(default_factory=list)
    
    # Mechanical details
    combat_encounters: List[Dict[str, Any]] = Field(default_factory=list)
    skill_challenges: List[str] = Field(default_factory=list)
    treasure_gained: List[str] = Field(default_factory=list)
    
    # Story progression
    plot_advancement: List[str] = Field(default_factory=list)
    world_changes: List[str] = Field(default_factory=list)
    character_development: List[str] = Field(default_factory=list)
    
    # Session management
    session_notes: Optional[str] = None
    dm_notes: Optional[str] = None
    next_session_prep: List[str] = Field(default_factory=list)

class Campaign(BaseVaultContent):
    """Campaign data model"""
    content_type: ContentType = ContentType.campaign
    
    # Campaign structure
    campaign_type: Optional[str] = None
    act_structure: List[str] = Field(default_factory=list)
    current_act: Optional[str] = None
    
    # Core narrative
    main_theme: Optional[str] = None
    central_conflict: Optional[str] = None
    major_villains: List[str] = Field(default_factory=list)
    
    # World state
    starting_conditions: List[str] = Field(default_factory=list)
    current_world_state: Dict[str, str] = Field(default_factory=dict)
    potential_endings: List[str] = Field(default_factory=list)
    
    # Key elements
    major_locations: List[str] = Field(default_factory=list)
    key_factions: List[str] = Field(default_factory=list)
    important_npcs: List[str] = Field(default_factory=list)
    legendary_items: List[str] = Field(default_factory=list)
    
    # Session tracking
    sessions: List[str] = Field(default_factory=list)
    completed_quests: List[str] = Field(default_factory=list)
    available_quests: List[str] = Field(default_factory=list)

# Utility Models

class VaultMetrics(BaseModel):
    """Vault analytics and metrics"""
    total_files: int = 0
    content_by_type: Dict[ContentType, int] = Field(default_factory=dict)
    content_by_status: Dict[ContentStatus, int] = Field(default_factory=dict)
    content_by_realm: Dict[WorldRealm, int] = Field(default_factory=dict)
    broken_links: int = 0
    orphaned_content: int = 0
    last_updated: datetime = Field(default_factory=datetime.now)

class ContentValidationError(BaseModel):
    """Content validation error details"""
    file_path: str
    error_type: str
    error_message: str
    severity: str
    suggested_fix: Optional[str] = None

class ValidationReport(BaseModel):
    """Validation report for vault content"""
    timestamp: datetime = Field(default_factory=datetime.now)
    total_files_checked: int = 0
    valid_files: int = 0
    errors: List[ContentValidationError] = Field(default_factory=list)
    warnings: List[ContentValidationError] = Field(default_factory=list)
    success_rate: float = 0.0
    
    @model_validator(mode='after')
    def calculate_success_rate(self):
        if self.total_files_checked > 0:
            self.success_rate = (self.valid_files / self.total_files_checked) * 100
        return self

# Export all models
__all__ = [
    'BaseVaultContent', 'Character', 'Location', 'Faction', 'Quest', 
    'Item', 'Session', 'Campaign', 'VaultMetrics', 'ContentValidationError',
    'ValidationReport', 'ContentStatus', 'WorldRealm', 'ContentType', 
    'FactionType', 'ThreatLevel', 'CorruptionLevel'
]