#!/usr/bin/env node

/**
 * build_prompts.js
 * Generates comprehensive prompt markdown files for Phase 4 visual assets by
 * scanning existing vault content and composing JSON prompt entries.
 *
 * Output targets:
 *  - 04_Resources/Assets/Portrait_Prompts/NPCs.md (>=55)
 *  - 04_Resources/Assets/Creature_Prompts/Monsters.md (>=30)
 *  - 04_Resources/Assets/Location_Prompts/Cities.md (>=20)
 *  - 04_Resources/Assets/Maps/Battle_Map_Descriptions.md (>=30)
 *  - 04_Resources/Assets/Maps/World_Map_Layers.md
 *  - 04_Resources/Assets/Items/Artifact_Visuals.md (>=40)
 *  - 04_Resources/Assets/Vehicles/Ship_Blueprints.md (>=20)
 *  - 04_Resources/Assets/Handouts/Document_Designs.md (>=25)
 *  - 04_Resources/Assets/Symbols/Faction_Heraldry.md (>=25)
 *  - 04_Resources/Assets/Scenes/Atmospheric_Art.md (>=20)
 *  - 04_Resources/Assets/Audio/Soundscape_Guide.md (text)
 *  - 04_Resources/Assets/Animations/Motion_Specs.md (text)
 *  - 04_Resources/Assets/Digital/Interface_Elements.md (>=10)
 *  - 04_Resources/Assets/Style_Guide.md (text)
 *  - 04_Resources/Assets/Asset_Database.md (text)
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || '/workspace';

const PATHS = {
  people: path.join(ROOT, '02_Worldbuilding', 'People'),
  groups: path.join(ROOT, '02_Worldbuilding', 'Groups'),
  places: path.join(ROOT, '02_Worldbuilding', 'Places'),
  bestiary: path.join(ROOT, '03_Mechanics', 'CLI', 'bestiary'),
  items: path.join(ROOT, '03_Mechanics', 'CLI', 'items'),
  vehicles: path.join(ROOT, '03_Mechanics', 'Vehicles'),
  out: {
    portraits: path.join(ROOT, '04_Resources', 'Assets', 'Portrait_Prompts', 'NPCs.md'),
    creatures: path.join(ROOT, '04_Resources', 'Assets', 'Creature_Prompts', 'Monsters.md'),
    cities: path.join(ROOT, '04_Resources', 'Assets', 'Location_Prompts', 'Cities.md'),
    battleMaps: path.join(ROOT, '04_Resources', 'Assets', 'Maps', 'Battle_Map_Descriptions.md'),
    worldLayers: path.join(ROOT, '04_Resources', 'Assets', 'Maps', 'World_Map_Layers.md'),
    artifacts: path.join(ROOT, '04_Resources', 'Assets', 'Items', 'Artifact_Visuals.md'),
    ships: path.join(ROOT, '04_Resources', 'Assets', 'Vehicles', 'Ship_Blueprints.md'),
    handouts: path.join(ROOT, '04_Resources', 'Assets', 'Handouts', 'Document_Designs.md'),
    symbols: path.join(ROOT, '04_Resources', 'Assets', 'Symbols', 'Faction_Heraldry.md'),
    scenes: path.join(ROOT, '04_Resources', 'Assets', 'Scenes', 'Atmospheric_Art.md'),
    audio: path.join(ROOT, '04_Resources', 'Assets', 'Audio', 'Soundscape_Guide.md'),
    animations: path.join(ROOT, '04_Resources', 'Assets', 'Animations', 'Motion_Specs.md'),
    ui: path.join(ROOT, '04_Resources', 'Assets', 'Digital', 'Interface_Elements.md'),
    style: path.join(ROOT, '04_Resources', 'Assets', 'Style_Guide.md'),
    db: path.join(ROOT, '04_Resources', 'Assets', 'Asset_Database.md'),
  }
};

const ensureDir = (p) => fs.mkdirSync(path.dirname(p), { recursive: true });

const slug = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

const pick = (arr, n) => {
  const out = [];
  const used = new Set();
  while (out.length < n && out.length < arr.length) {
    const i = Math.floor(Math.random() * arr.length);
    if (!used.has(i)) { used.add(i); out.push(arr[i]); }
  }
  return out;
};

const readNamesFromDir = (dir, limit = 50) => {
  if (!fs.existsSync(dir)) return [];
  const names = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && e.name.endsWith('.md')) {
      const base = e.name.replace(/\.md$/, '');
      // filter out small stubs
      const p = path.join(dir, e.name);
      try {
        const stat = fs.statSync(p);
        if (stat.size < 400) continue;
      } catch {}
      names.push(base);
    }
  }
  return names.slice(0, limit);
};

const readMonsterNames = (dir, limit = 60) => {
  if (!fs.existsSync(dir)) return [];
  const cats = fs.readdirSync(dir, { withFileTypes: true }).filter(d => d.isDirectory());
  const names = [];
  for (const c of cats) {
    const folder = path.join(dir, c.name);
    const files = fs.readdirSync(folder).filter(f => f.endsWith('.md'));
    for (const f of files) {
      const base = f.replace(/\.md$/, '');
      names.push(base);
    }
  }
  return names.slice(0, limit);
};

const buildPromptText = (base, kind, extras = {}) => {
  // Compose a richly descriptive, ~70-120 word prompt
  const clauses = [];
  if (kind === 'portrait') {
    clauses.push(`Portrait of ${base}`);
    clauses.push(extras.role || 'character');
    clauses.push(extras.race || 'human');
    clauses.push(extras.age || 'adult');
    clauses.push(extras.clothing || 'distinctive attire with setting-specific materials');
    clauses.push(extras.expression || 'expressive gaze and subtle emotion');
    clauses.push(extras.features || 'memorable distinguishing features');
    clauses.push(extras.background || 'evocative background that reflects their story');
    clauses.push(extras.lighting || 'dramatic, directional lighting that sculpts form');
    clauses.push(extras.style || 'painterly fantasy realism with high detail');
  } else if (kind === 'creature') {
    clauses.push(`Illustration of ${base}`);
    clauses.push(extras.anatomy || 'clear anatomical structure with emphasized silhouette');
    clauses.push(extras.size || 'include size comparison with a human diver');
    clauses.push(extras.colors || 'cohesive color scheme and patterning');
    clauses.push(extras.habitat || 'set within its natural environment with context cues');
    clauses.push(extras.behavior || 'pose communicates behavior and threat level');
    clauses.push(extras.style || 'detailed concept art with realistic texturing');
  } else if (kind === 'location') {
    clauses.push(`Panoramic view of ${base}`);
    clauses.push(extras.arch || 'distinctive architecture and materials');
    clauses.push(extras.atmo || 'rich atmosphere, fog, particles, or weather');
    clauses.push(extras.daytime || 'specific time of day and lighting mood');
    clauses.push(extras.population || 'visible inhabitants engaging naturally');
    clauses.push(extras.style || 'cinematic environmental concept art');
  } else if (kind === 'scene') {
    clauses.push(`Atmospheric scene: ${base}`);
    clauses.push(extras.keyMoment || 'captures a pivotal story beat');
    clauses.push(extras.fx || 'subtle VFX like mist, embers, caustics');
    clauses.push(extras.lighting || 'controlled lighting for mood and focus');
    clauses.push(extras.style || 'high-fidelity illustration with painterly touches');
  } else if (kind === 'item') {
    clauses.push(`Detailed artifact: ${base}`);
    clauses.push(extras.materials || 'clear materials, patina, and wear');
    clauses.push(extras.runes || 'runes or inscriptions with glow');
    clauses.push(extras.scale || 'include a scale reference in frame');
    clauses.push(extras.style || 'product-style hero render, clean backdrop');
  } else if (kind === 'map') {
    clauses.push(`Top-down tactical map: ${base}`);
    clauses.push(extras.grid || 'clear grid with 5 ft squares at 140 px');
    clauses.push(extras.terrain || 'varied terrain and cover with readable symbols');
    clauses.push(extras.hazards || 'environmental hazards clearly indicated');
    clauses.push(extras.style || 'VTT-ready export with crisp labels');
  } else if (kind === 'vehicle') {
    clauses.push(`Blueprint cutaway: ${base}`);
    clauses.push(extras.sections || 'deck plans, cross-sections, and callouts');
    clauses.push(extras.systems || 'pressure/propulsion systems annotated');
    clauses.push(extras.style || 'clean blueprint style with legend and scale');
  } else if (kind === 'handout') {
    clauses.push(`In-world document: ${base}`);
    clauses.push(extras.texture || 'aged paper texture, stains, fold marks');
    clauses.push(extras.typography || 'period-appropriate typography and seals');
    clauses.push(extras.hidden || 'subtle hidden message or cipher cues');
    clauses.push(extras.style || 'high-res scan aesthetic');
  } else if (kind === 'symbol') {
    clauses.push(`Heraldic emblem: ${base}`);
    clauses.push(extras.shield || 'shield or roundel with clean geometry');
    clauses.push(extras.motifs || 'distinct motifs and color coding');
    clauses.push(extras.usage || 'banner and wax-seal variants');
    clauses.push(extras.style || 'flat vector style, export as SVG');
  } else if (kind === 'ui') {
    clauses.push(`Interface screen: ${base}`);
    clauses.push(extras.layout || 'clean layout with panels and controls');
    clauses.push(extras.widgets || 'diegetic gauges/meters and iconography');
    clauses.push(extras.style || 'modern game UI mockup, high contrast, readable');
  }
  // Add technical specs sentence
  clauses.push('Use aspect and resolution as specified, maintain consistent styling tags, include negative prompts to avoid artifacts.');
  return clauses.join(', ');
};

const specFor = (kind) => {
  // Defaults per kind
  const base = {
    aspect: kind === 'map' ? '16:9' : (kind === 'portrait' ? '1:1' : '2:3'),
    resolution: kind === 'portrait' ? '2048x2048' : (kind === 'map' ? '2560x1440' : '2048x3072'),
    style: kind === 'portrait' ? ['painterly', 'fantasy realism'] : ['concept art', 'high detail'],
    lighting: kind === 'scene' || kind === 'location' ? 'cinematic' : 'studio',
    mood: 'on-brand',
    negative: ['low detail','blurry','artifacts','extra fingers'],
  };
  return base;
};

const toEntry = (kind, name, idPrefix, idx, extra = {}) => {
  const id = `${idPrefix}-${slug(name)}`;
  const spec = specFor(kind);
  const prompt = buildPromptText(name, kind, extra);
  const alt = extra.alt || `${name} ${kind} visual with clear subject, readable composition, and on-brand mood.`;
  return {
    id,
    type: kind,
    name,
    prompt,
    ...spec,
    seed: 2000 + idx,
    alt_text: alt,
  };
};

const writeJsonBlocks = (filePath, title, arrays) => {
  ensureDir(filePath);
  const parts = [`# ${title}\n`];
  for (const arr of arrays) {
    parts.push('```json');
    parts.push(JSON.stringify(arr, null, 2));
    parts.push('```\n');
  }
  fs.writeFileSync(filePath, parts.join('\n'), 'utf8');
};

const main = () => {
  // 1) NPC portraits
  const npcNames = readNamesFromDir(PATHS.people, 120);
  const npcTarget = 55;
  const npcPick = npcNames.length >= npcTarget ? pick(npcNames, npcTarget) : npcNames;
  const npcEntries = npcPick.map((n, i) => toEntry('portrait', n, 'npc', i+1, {
    role: 'notable figure of Aquabyssos/Aethermoor',
    race: n.toLowerCase().includes('mer') ? 'mer-folk' : undefined,
    clothing: 'realm-specific attire with unique insignia',
    expression: 'character-driven emotion',
    background: 'signature environment hinting at their origin',
    alt: `Portrait of ${n} with distinctive attire and evocative background.`,
  }));
  writeJsonBlocks(PATHS.out.portraits, 'Major NPC Portrait Prompts', [npcEntries.slice(0, 20), npcEntries.slice(20, 40), npcEntries.slice(40)]);

  // 2) Creatures
  const monsterNames = readMonsterNames(PATHS.bestiary, 200);
  const creatureTarget = 30;
  const creaturePick = monsterNames.length >= creatureTarget ? pick(monsterNames, creatureTarget) : monsterNames;
  const creatureEntries = creaturePick.map((n, i) => toEntry('creature', n, 'creature', i+1, {
    anatomy: 'highlight joints, musculature, and unique limbs',
    size: 'include human silhouette for scale',
    colors: 'three-color palette with accent patterns',
    habitat: 'place in underwater depths, sky currents, or merged zones as appropriate',
    behavior: 'depict native motion like swimming, soaring, or phasing',
    alt: `Concept art of ${n} with anatomy, scale, and environment shown.`,
  }));
  writeJsonBlocks(PATHS.out.creatures, 'Monster & Creature Illustration Prompts', [creatureEntries.slice(0, 15), creatureEntries.slice(15)]);

  // 3) Cities/Locations
  const placeNames = readNamesFromDir(PATHS.places, 120);
  const cityTarget = 20;
  const cityPick = placeNames.length >= cityTarget ? pick(placeNames, cityTarget) : placeNames;
  const cityEntries = cityPick.map((n, i) => toEntry('location', n, 'city', i+1, {
    arch: n.toLowerCase().includes('prime') ? 'grand pressure domes, coral spires, ceremonial plazas' : 'realm-appropriate materials like bioluminescent coral or cloudstone',
    atmo: 'weather cues like currents, storms, or drifting pollen',
    daytime: 'golden hour, night glow, or storm-lit ambience',
    population: 'small figures, creatures, or vehicles for life and scale',
    alt: `Cinematic view of ${n} showing architecture, atmosphere, and inhabitants.`,
  }));
  writeJsonBlocks(PATHS.out.cities, 'City & Settlement View Prompts', [cityEntries.slice(0, 10), cityEntries.slice(10)]);

  // 4) Battle maps
  const mapNamesBase = [
    'Aethermoor Harbor Skirmish', 'Pressure Temple Ruins', 'Bioluminescent Forest Ambush', 'Cloud-Dock Boarding Action', 'Sunken Library Stacks', 'Void-Fractured Plaza',
    'Storm-Torn Lighthouse', 'Abyssal Trench Ledge', 'Crystal Cavern Bridge', 'Coral Market Riot', 'Wrecked Submarine Interior', 'Airship Deck Melee', 'Pressure Maelstrom Edge',
    'Merged Zone Stairwell', 'Kelp Forest Labyrinth', 'Sky Whale Back Hunt', 'Pressure Dome Bazaar', 'Drowned Cathedral Nave', 'Shattered Observatory', 'Shadow Market Alley',
    'Singing Trenches Rift', 'Wandering Atoll Shore', 'Gloom Gardens Paths', 'Frozen Throne Approach', 'Floating Market Barges', 'Eel Keeper Pens', 'Embassy Quarter Court',
    'Sundered Peaks Pass', 'Sunken Crown Crypt', 'Golden Trade Route Toll'
  ];
  const mapEntries = mapNamesBase.map((n, i) => ({
    ...toEntry('map', n, 'map', i+1, {
      grid: '30x40 at 140 px per square',
      terrain: 'clearly marked cover: crates, pillars, rocks, coral',
      hazards: 'dynamic hazards like collapsing floors, rips, currents',
      style: 'clean export with 10px grid lines and labeled layers',
      alt: `Top-down tactical map of ${n} with grid and hazards.`,
    }),
    grid: ['25x25','30x40','40x30','35x35'][i % 4],
    vtt: { format: 'Foundry', tileSize: 140 },
    levels: [1,1,2,3][i % 4],
  }));
  writeJsonBlocks(PATHS.out.battleMaps, 'Battle Map Descriptions (VTT-Ready)', [mapEntries.slice(0, 15), mapEntries.slice(15)]);

  // 5) World map layers
  const layers = [
    { name: 'World Political Boundaries', kind: 'map' },
    { name: 'Trade Routes and Corridors', kind: 'map' },
    { name: 'Depth Zones and Altitude Bands', kind: 'map' },
    { name: 'Faction Territories and Influence', kind: 'map' },
    { name: 'Magical Phenomena and Storm Tracks', kind: 'map' },
    { name: 'Hidden Locations and Rumor Sites', kind: 'map' },
  ];
  const layerEntries = layers.map((l, i) => ({
    ...toEntry('map', l.name, 'world-layer', i+1, {
      grid: 'no tactical grid; focus on labeled overlays',
      terrain: 'base relief with bathymetry/sky currents',
      hazards: 'overlay symbology with legend',
      style: 'layered export with toggles per theme',
      alt: `${l.name} overlay for world map with clear legend.`,
    }),
    aspect: '16:9',
    resolution: '3840x2160',
    layers: ['base','political','routes','depth','faction','magic','hidden'],
    scale: '1:25,000,000',
  }));
  writeJsonBlocks(PATHS.out.worldLayers, 'World Map Layer Prompts', [layerEntries]);

  // 6) Items / Artifacts
  const itemNames = readNamesFromDir(PATHS.items, 300);
  const itemPick = pick(itemNames, 40);
  const itemEntries = itemPick.map((n, i) => toEntry('item', n, 'artifact', i+1, {
    materials: 'pearl, coral, cloud-crystal, pressure-forged metals',
    runes: 'inlaid runes with gentle glow (no bloom)',
    scale: 'include hand or ruler for size context',
    alt: `Artifact ${n} displayed with materials, runes, and scale.`,
  }));
  writeJsonBlocks(PATHS.out.artifacts, 'Magical Artifact Visualization Prompts', [itemEntries.slice(0, 20), itemEntries.slice(20)]);

  // 7) Vehicles / Ships
  const shipNames = [
    'Aethermoor Courier-Class Airship', 'Abyssal Scout Submarine', 'Hybrid Rift-Runner Sloop', 'Pressure Lifter Barge', 'Sky-Cutter Interceptor',
    'Depth-Piercer Research Sub', 'Cloud-Anchor Freighter', 'Void-Skimmer Cutter', 'Cerulean Passenger Dirigible', 'Coral-Frame Diver Tender',
    'Storm-Borne Battleship', 'Kelp-Weave Patrol Boat', 'Altitude-Tuned Skiff', 'Maelstrom Tug', 'Crown Council Flagship',
    'Resonance-Drive Yacht', 'Harbor Guardian Gunboat', 'Trench Lantern Surveyor', 'Arc-Engine Prototype', 'Aether Sail Testbed'
  ];
  const shipEntries = shipNames.map((n, i) => ({
    ...toEntry('vehicle', n, 'ship', i+1, {
      sections: 'top, side, cross-section, and deck plans',
      systems: 'annotate ballast, pressure hulls, engines, and crew spaces',
      alt: `Blueprint cutaway of ${n} with sections and annotations.`,
    }),
    aspect: '16:9',
    resolution: '3840x2160',
  }));
  writeJsonBlocks(PATHS.out.ships, 'Vehicle & Ship Blueprint Prompts', [shipEntries.slice(0, 10), shipEntries.slice(10)]);

  // 8) Handouts / Documents
  const handoutNames = [
    'Aged Treasure Map', 'Noble Writ with Wax Seal', 'Cult Text with Marginalia', 'Merchant Contract with Fine Print', 'Love Letter with Hidden Message',
    'Wanted Poster with Reward', 'Ship Manifests with Stamps', 'Guild License Certificate', 'Temple Prayer Sheet', 'Smuggler Ledger Page',
    'Council Summons Notice', 'Tavern Bill of Fare', 'Docking Permit', 'Privateer Letter of Marque', 'Ancient Prophecy Fragment',
    'Embassy Invitation', 'Encoded Shipping Route', 'Bounty Claim Form', 'Alchemical Recipe Sheet', 'Arena Ticket',
    'Sailor Tattoo Sketches', 'Border Crossing Pass', 'Relic Provenance Card', 'Court Summons', 'Explorer Field Notes'
  ];
  const handoutEntries = handoutNames.map((n, i) => toEntry('handout', n, 'handout', i+1, {
    texture: 'creased parchment, water damage, ink bleed',
    typography: 'era-appropriate fonts and ligatures',
    hidden: 'microtext, cipher keys, invisible ink hints',
    alt: `${n} designed as an in-world paper prop with texture and typography.`,
  }));
  writeJsonBlocks(PATHS.out.handouts, 'In-World Document Design Prompts', [handoutEntries.slice(0, 13), handoutEntries.slice(13)]);

  // 9) Symbols / Heraldry
  const factionNames = readNamesFromDir(PATHS.groups, 200);
  const symbolPick = pick(factionNames, 25);
  const symbolEntries = symbolPick.map((n, i) => ({
    ...toEntry('symbol', n, 'heraldry', i+1, {
      shield: 'simple geometry, strong silhouette',
      motifs: '2-3 motifs tied to faction identity',
      usage: 'seal, banner, and coin variants',
      alt: `Heraldic emblem for ${n} with clear motifs and color coding.`,
    }),
    palette: ['deep blues','seafoam greens','storm greys','gold accents'][i % 4],
  }));
  writeJsonBlocks(PATHS.out.symbols, 'Faction Heraldry Prompts', [symbolEntries.slice(0, 13), symbolEntries.slice(13)]);

  // 10) Scenes / Atmospheric art
  const sceneNames = [
    "The party's first glimpse of Abyssos Prime",
    'Storm approaching the airship',
    "Deep Mother's tentacles rising",
    'Merged zone reality fracture',
    'Underwater bioluminescent forest',
    'Sky whale migration at sunset',
    'Pressure dome festival night',
    'Shadow Market under rain',
    'Drowned cathedral vigil',
    'Crystal trench aurora',
    'Wandering atoll caravan',
    'Trench-fire battlefield aftermath',
    'Golden Trade Route convoy',
    'Whisper Island fog dawn',
    'Frozen Throne coronation',
    'Cloud citadel duel',
    'Void tear over harbor',
    'Submarine chase through kelp',
    'Airship docks riot',
    'Sunken library revelation'
  ];
  const sceneEntries = sceneNames.map((n, i) => toEntry('scene', n, 'scene', i+1, {
    keyMoment: 'clear narrative focal point with readable staging',
    fx: 'atmospheric VFX supporting the scene',
    lighting: 'cinematic light shaping and color contrast',
    alt: `Atmospheric illustration of: ${n}.`,
  }));
  writeJsonBlocks(PATHS.out.scenes, 'Scene-Setting Atmospheric Art Prompts', [sceneEntries.slice(0, 10), sceneEntries.slice(10)]);

  // 11) UI / Digital play elements
  const uiNames = [
    'Character Sheet Layout', 'Initiative Tracker', 'Pressure/Altitude Gauge', 'Faction Reputation Bar', 'Inventory Management Screen',
    'Quest Log & Pins', 'Quick Reference Overlay', 'Spellbook & Effects', 'Vehicle Status Panel', 'Encounter Control Board'
  ];
  const uiEntries = uiNames.map((n, i) => toEntry('ui', n, 'ui', i+1, {
    layout: 'grid-based layout with spacing and hierarchy',
    widgets: 'icons, meters, and interactive controls',
    alt: `Interface mockup: ${n} with readable hierarchy and controls.`,
  }));
  writeJsonBlocks(PATHS.out.ui, 'Digital Interface Element Prompts', [uiEntries]);

  // 12) Audio guide (text)
  ensureDir(PATHS.out.audio);
  fs.writeFileSync(PATHS.out.audio, `# Soundscape Guide\n\n- Underwater: pressure creaks, bubble streams, whale songs\n- Airship: wind howling, rope creaking, engine humming\n- Combat: weapon and spell sound palettes\n- Locations: market chatter, tavern ambiance, temple chants\n\nRecommendations:\n- Spotify: search curated playlists for aquatic ambient, sky voyages, void horror.\n- Free SFX: freesound.org, Sonniss GDC bundles.\n\nImplementation notes:\n- Loop-friendly tracks (2–4 min), crossfades, low-CPU players in VTT.\n`, 'utf8');

  // 13) Animations guide (text)
  ensureDir(PATHS.out.animations);
  fs.writeFileSync(PATHS.out.animations, `# Animated Elements Guide\n\n- Spell effects: water jet refractions, wind gust trails, void rifts (parallax).\n- Environmental: tide ebb/flow, storm lightning cycles, reality shimmer.\n- Creatures: swimming cycles, wingbeats, phasing jitter.\n- Interactive maps: toggle layers, animated hazards, pulse markers.\n\nSpecs:\n- 24–30 fps, WebM with alpha where possible, short seamless loops.\n`, 'utf8');

  // 14) Style guide (text)
  ensureDir(PATHS.out.style);
  fs.writeFileSync(PATHS.out.style, `# Visual Style Guide\n\n- Color palettes per realm: Aquabyssos (teals, deep blues, biolum glow), Aethermoor (navy, gold, cloud-white), Void (indigos, violets, starfield accents).\n- Art styles: painterly realism for portraits; concept art realism for environments; blueprint clean-line for vehicles; flat vector for heraldry.\n- Lighting: cinematic key/fill/rim; underwater caustics; storm rim light for sky scenes.\n- Mood: heroic but grounded; wonder with subtle dread at the edges.\n- Consistency tags: painterly, cinematic, high detail, cohesive palette.\n`, 'utf8');

  // 15) Asset database (text)
  ensureDir(PATHS.out.db);
  fs.writeFileSync(PATHS.out.db, `# Asset Database\n\nFields:\n- id, type, name, prompt, aspect, resolution, style, lighting, mood, negative, seed, alt_text\n- tags, sourceDoc, crossRefs\n\nNaming:\n- {type}-{slug(name)}-{seed}.ext\n\nFormats:\n- Portraits 1:1 @ 2048x2048 (PNG/SVG)\n- Scenes 16:9 @ 2560x1440 (PNG/SVG)\n- Maps 16:9 @ 2560x1440 (PNG)\n- Vector Symbols: SVG\n\nVersioning:\n- keep JSON sidecars in Generated/metadata with prompt and seed\n\nLicensing:\n- track source (AI/local), model, seed, and usage rights in sidecar\n`, 'utf8');

  console.log('Prompt files generated.');
};

if (require.main === module) {
  main();
}