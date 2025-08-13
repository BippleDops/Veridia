#!/usr/bin/env node

/** build_prompts.js: builds Phase 4 prompt markdowns from vault content. */
const fs = require('fs');
const path = require('path');
const ROOT = process.env.WORKSPACE_DIR || process.cwd();

const PATHS = {
  people: path.join(ROOT, '02_Worldbuilding', 'People'),
  groups: path.join(ROOT, '02_Worldbuilding', 'Groups'),
  places: path.join(ROOT, '02_Worldbuilding', 'Places'),
  quests: path.join(ROOT, '02_Worldbuilding', 'Quests'),
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
    videos: path.join(ROOT, '04_Resources', 'Assets', 'Animations', 'Cinematic_Sequences.md'),
    ui: path.join(ROOT, '04_Resources', 'Assets', 'Digital', 'Interface_Elements.md'),
    style: path.join(ROOT, '04_Resources', 'Assets', 'Style_Guide.md'),
    db: path.join(ROOT, '04_Resources', 'Assets', 'Asset_Database.md'),
  }
};

const ensureDir = (p) => fs.mkdirSync(path.dirname(p), { recursive: true });
const slug = (s) => (s || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const pick = (arr, n) => { const out=[]; const used=new Set(); while(out.length<n && out.length<arr.length){const i=Math.floor(Math.random()*arr.length); if(!used.has(i)){used.add(i); out.push(arr[i]);}} return out; };

const readNamesFromDir = (dir, limit = 50) => {
  if (!fs.existsSync(dir)) return [];
  const names = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && e.name.endsWith('.md')) {
      const p = path.join(dir, e.name);
      try { const s = fs.statSync(p); if (s.size < 400) continue; } catch {}
      names.push(e.name.replace(/\.md$/,'').trim());
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
    for (const f of files) names.push(f.replace(/\.md$/,''));
  }
  return names.slice(0, limit);
};

// Realm detection and style hints
function detectRealm(name){
  const n = String(name).toLowerCase();
  const aquatic = /(abyss|abyssos|mer|tide|kelp|coral|trench|drowned|sunken|pressure|depth|sea|ocean|eel|whale)/;
  const sky = /(aether|aethermoor|sky|cloud|airship|dirigible|wind|storm|altitude|zephyr)/;
  const voidy = /(void|tenebrarum|impossible|cosmic|star|rift|tear|night)/;
  if (aquatic.test(n) && sky.test(n)) return 'mixed';
  if (voidy.test(n)) return 'void';
  if (sky.test(n)) return 'aethermoor';
  if (aquatic.test(n)) return 'aquabyssos';
  return 'aquabyssos';
}
function realmDescriptors(kind, realm){
  const base = { style: '', palette: '' };
  if (realm === 'aquabyssos'){
    base.style = 'aquatic fantasy realism, subsurface caustics, bioluminescent accents, pressure-dome materials';
    base.palette = 'teals, deep blues, sea-greens, pearl highlights';
  } else if (realm === 'aethermoor'){
    base.style = 'skyward romantic realism, cloudstone and brass, wind-swept forms, airship motifs';
    base.palette = 'navy, gold, cloud-white, warm sun highlights';
  } else if (realm === 'void'){
    base.style = 'cosmic surrealism, impossible geometries, starfield grain, indigo glows';
    base.palette = 'indigos, violets, black, cold silver';
  } else if (realm === 'mixed'){
    base.style = 'merged-zone aesthetic, reality fractures, hybrid aquatic-sky motifs';
    base.palette = 'teal/indigo blends, storm gold accents';
  }
  // Additional guidance by kind
  if (kind === 'vehicle') base.style += ', sturdy functional blueprint vernacular';
  if (kind === 'portrait') base.style += ', painterly character emphasis, avoid glamorization; grounded, diverse features';
  if (kind === 'location' || kind === 'scene') base.style += ', cinematic atmosphere';
  return base;
}

function dndStyle(){
  return 'heroic tabletop fantasy (D&D 5e adjacent), unified painterly collection style, grounded medieval-fantasy materials, culturally coherent gear, no modern tech or signage';
}

function textPolicy(kind){
  if (kind === 'map') return 'No embedded text labels; use icons and clear linework only. Reserve clean margins and text-safe areas for VTT overlays. Render grid and numeric ticks crisply; avoid stylized fonts entirely. Zero rasterized words.';
  if (kind === 'handout') return 'Text must be legible and non-gibberish. Favor simple, readable serif fonts, larger kerning, and clear headings. If uncertain, use short Latin-like placeholder words with proper spacing, or leave blank lines for later typesetting.';
  if (kind === 'ui') return 'Typography must be crisp and readable (sans-serif, high contrast, WCAG 4.5:1). Prefer short, real labels (STR, DEX, HP, BAG, MAP) or clean unlabeled slots. Avoid nonsense strings. Ensure 8–24 pt equivalent sizing and consistent alignment.';
  if (kind === 'vehicle') return 'Use numbered callout pins (01, 02, 03…) instead of long text annotations. Include a clean legend area without rendering complex paragraphs.';
  if (kind === 'location' || kind === 'scene') return 'Avoid readable signage or paragraphs; use iconography or blank signboards. No embedded words or letters.';
  if (kind === 'item') return 'Runes should be abstract sigils, not letter-like gibberish. Avoid readable words on the item.';
  return 'Avoid embedded text or words unless specified; never render gibberish strings.';
}

const buildPromptText = (base, kind, extras = {}) => {
  const system = 'D&D 5e';
  const intendedUse = 'VTT and Print reference';
  const aspect = extras.aspect || '1:1';
  const resolution = extras.resolution || '1024x1024';
  const palette = extras.realmPalette ? `Palette: ${extras.realmPalette}` : undefined;
  const realmStyle = extras.realmStyle ? `${extras.realmStyle}` : undefined;

  const negativeCommon = [
    'nonsense text, watermarks, captions, signatures, artist names',
    'modern signage, photoreal CGI, anime style, bloom glare',
    'overly sexualized or glamorized portrayal',
  ];

  const lines = [];
  lines.push('# TTRPG Asset Generation Prompt');
  lines.push('');
  lines.push('## Core Structure');
  lines.push(`[Asset Type: ${kind}]`);
  lines.push(`[Game System: ${system}]`);
  lines.push(`[Intended Use: ${intendedUse}]`);
  lines.push('');
  lines.push('## Detailed Description');
  if (kind==='portrait'){
    lines.push(`Subject: Portrait of ${base} — ${extras.role||'character'}, ${extras.race||'human'}, ${extras.age||'adult'}, ${extras.features||'memorable traits'}`);
    lines.push(`Environment: ${extras.background||'evocative background'}`);
    lines.push(`Style: ${dndStyle()}, painterly fantasy realism, consistent across the collection${realmStyle?`, ${realmStyle}`:''}`);
    lines.push(`Technical Requirements: portrait orientation, token readable at 210x330+, aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='map'){
    lines.push(`Subject: ${base}`);
    lines.push(`Environment: ${extras.env||'encounter space with clear tactical layout'}`);
    lines.push(`Style: ${dndStyle()}, hand-painted top-down with clear grid${realmStyle?`, ${realmStyle}`:''}`);
    lines.push(`Technical Requirements: grid ${extras.gridSquares||'15x15'} squares at 140 DPI (70 px per 5 ft minimum, 140 px preferred), aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='location'){
    lines.push(`Subject: Panoramic view of ${base}`);
    lines.push(`Environment: ${extras.daytime||'time of day'}, ${extras.atmo||'cinematic atmosphere'}, ${extras.arch||'distinct architecture'}`);
    lines.push(`Style: ${dndStyle()}${realmStyle?`, ${realmStyle}`:''}`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='scene'){
    lines.push(`Subject: Atmospheric scene — ${base}`);
    lines.push(`Environment: ${extras.keyMoment||'pivotal beat'}, ${extras.fx||'subtle VFX'}, ${extras.lighting||'cinematic lighting'}`);
    lines.push(`Style: ${dndStyle()}${realmStyle?`, ${realmStyle}`:''}`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='item'){
    lines.push(`Subject: Detailed artifact — ${base}`);
    lines.push(`Environment: ${extras.scale||'scale reference present'}`);
    lines.push(`Style: ${dndStyle()}, product-style render${realmStyle?`, ${realmStyle}`:''}`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='vehicle'){
    lines.push(`Subject: Blueprint cutaway — ${base}`);
    lines.push(`Environment: plan views and cross-sections (top/side/decks)`);
    lines.push(`Style: ${dndStyle()}, clean blueprint, numbered pins for callouts`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='handout'){
    lines.push(`Subject: In-world document — ${base}`);
    lines.push(`Environment: ${extras.texture||'aged paper'}, ${extras.typography||'period typography & seals'}`);
    lines.push(`Style: ${dndStyle()}, high-res scan aesthetics`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='symbol'){
    lines.push(`Subject: Heraldic emblem — ${base}`);
    lines.push(`Style: ${dndStyle()}, simple geometry, bold motifs`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  } else if (kind==='ui'){
    lines.push(`Subject: Interface screen — ${base}`);
    lines.push(`Style: ${dndStyle()}, high-contrast, readable, grid layout with icons/meters/controls`);
    lines.push(`Technical Requirements: aspect ${aspect}, resolution ${resolution}`);
  }
  if (palette) lines.push(palette);
  lines.push('');
  if (kind==='map'){
    lines.push('## Functional Elements (for maps)');
    lines.push(`- Tactical Features: ${extras.paths||'multiple paths and choke points'}, ${extras.elevation||'elevation changes'}, ${extras.hazards||'environmental hazards'}, cover options`);
    lines.push(`- Scale: ${extras.gridSquares||'15x15'} squares, each square = 5 feet`);
    lines.push(`- Clarity: bold lines for walls/obstacles; fine lines for textures; consistent terrain patterns`);
  }
  lines.push('');
  lines.push('## Visual Specifications');
  lines.push(`- Lighting: ${extras.lighting|| (kind==='location'||kind==='scene'?'cinematic':'studio')}`);
  lines.push(`- Detail Level: high detail for zoom, simplified for overview`);
  lines.push(`- Composition: rule of thirds with clear focal points and visual flow`);
  if (kind==='portrait') lines.push('- Token Readability: facial features clear at small sizes (210x330 px)');
  lines.push('');
  lines.push('## Practical Considerations');
  lines.push('- Must be readable at intended viewing size');
  lines.push(`- ${textPolicy(kind)}`);
  lines.push('- Avoid embedded text unless specified; prefer iconography and numbered pins');
  lines.push('');
  lines.push('## Negatives');
  lines.push(`- ${negativeCommon.join('; ')}`);
  lines.push('');
  lines.push('Think deeply about creating an asset that enhances gameplay immersion while maintaining practical usability for TTRPG sessions.');

  return lines.join('\n');
};

const specFor = (kind) => ({
  aspect: kind==='map' ? '16:9' : (kind==='portrait' ? '1:1' : '2:3'),
  resolution: kind==='portrait' ? '2048x2048' : (kind==='map' ? '2560x1440' : '2048x3072'),
  style: kind==='portrait' ? ['painterly','fantasy realism'] : ['concept art','high detail'],
  lighting: (kind==='scene'||kind==='location') ? 'cinematic' : 'studio',
  mood: 'on-brand',
  negative: ['blurry','artifacts','nonsense text','garbled letters','extra fingers','modern signage','sci-fi ui','anime'],
});

const toEntry = (kind, name, idPrefix, idx, extra={}) => {
  const id = `${idPrefix}-${slug(name)}`;
  const realm = detectRealm(name);
  const r = realmDescriptors(kind, realm);
  const prompt = buildPromptText(name, kind, { ...extra, realmStyle: r.style, realmPalette: r.palette });
  const spec = specFor(kind);
  const alt = extra.alt || `${name} ${kind} visual with clear subject and on-brand mood.`;
  return { id, type: kind, name, prompt, ...spec, seed: 2000+idx, alt_text: alt, realm };
};

const writeJsonBlocks = (filePath, title, arrays) => {
  ensureDir(filePath);
  const parts = [`# ${title}\n`];
  for (const arr of arrays){ parts.push('```json'); parts.push(JSON.stringify(arr, null, 2)); parts.push('```\n'); }
  fs.writeFileSync(filePath, parts.join('\n'), 'utf8');
};

// Helpers to scale up prompt counts safely
const chunk = (arr, size) => { const out=[]; for (let i=0;i<arr.length;i+=size) out.push(arr.slice(i, i+size)); return out; };
const varySpec = (base, vIndex) => {
  const spec = { ...base };
  // rotate aspect/resolution for variety where applicable
  if (spec.aspect === '1:1' && vIndex % 3 === 1) { spec.aspect = '2:3'; spec.resolution = '2048x3072'; }
  else if (spec.aspect === '1:1' && vIndex % 3 === 2) { spec.aspect = '16:9'; spec.resolution = '2560x1440'; }
  else if (spec.aspect === '16:9' && vIndex % 2 === 1) { spec.aspect = '2:3'; spec.resolution = '2048x3072'; }
  // mild lighting/style mood changes
  const moods = ['heroic','mysterious','solemn','triumphant','melancholic'];
  const lights = ['cinematic','studio','rim-lit','soft dusk','hard noon'];
  spec.mood = moods[vIndex % moods.length];
  spec.lighting = lights[vIndex % lights.length];
  return spec;
};
const expandVariants = (entries, count, seedStart = 5000) => {
  const out = [];
  let seed = seedStart;
  for (const e of entries){
    out.push(e);
    for (let i=1;i<=count;i++){
      const v = { ...e };
      v.id = `${e.id}-v${i}`;
      v.seed = (e.seed || 0) + (++seed % 100000);
      const varied = varySpec(v, i);
      out.push(varied);
    }
  }
  return out;
};

function main(){
  // NPCs
  const npcNames = readNamesFromDir(PATHS.people, 1000);
  const npcTarget = Math.min(npcNames.length, Math.max(300, Math.floor(npcNames.length*0.9)));
  const npcPick = npcNames.length>=npcTarget ? pick(npcNames, npcTarget) : npcNames;
  const npcEntriesBase = npcPick.map((n,i)=> toEntry('portrait', n, 'npc', i+1, {
    role:'notable figure of Aquabyssos/Aethermoor',
    race: n.toLowerCase().includes('mer')?'mer-folk':undefined,
    clothing:'realm-specific attire',
    expression:'character-driven emotion',
    background:'signature environment',
    token_export: { width: 210, height: 330 },
    alt:`Portrait of ${n} with evocative background; clear features readable at token size.`
  }));
  const npcEntries = expandVariants(npcEntriesBase, 2); // ~3x portraits
  const npcChunks = chunk(npcEntries, 100);
  writeJsonBlocks(PATHS.out.portraits, 'Major NPC Portrait Prompts', npcChunks);

  // Creatures
  const monsterNames = readMonsterNames(PATHS.bestiary, 2000);
  const creatureTarget = Math.min(monsterNames.length, Math.max(600, Math.floor(monsterNames.length*0.9)));
  const creaturePick = monsterNames.length>=creatureTarget ? pick(monsterNames, creatureTarget) : monsterNames;
  const creatureEntriesBase = creaturePick.map((n,i)=> toEntry('creature', n, 'creature', i+1, { anatomy:'highlight musculature and unique limbs', size:'include human silhouette', colors:'three-color palette', habitat:'underwater/sky/merged zone', behavior:'depict motion', alt:`Concept art of ${n} with anatomy, scale, and environment.` }));
  const creatureEntries = expandVariants(creatureEntriesBase, 4); // ~5x creatures
  writeJsonBlocks(PATHS.out.creatures, 'Monster & Creature Illustration Prompts', chunk(creatureEntries, 100));

  // Cities
  const placeNames = readNamesFromDir(PATHS.places, 2000);
  const cityTarget = Math.min(placeNames.length, Math.max(300, Math.floor(placeNames.length*0.6)));
  const cityPick = placeNames.length>=cityTarget ? pick(placeNames, cityTarget) : placeNames;
  const cityEntriesBase = cityPick.map((n,i)=> toEntry('location', n, 'city', i+1, { arch: n.toLowerCase().includes('prime')?'grand pressure domes, coral spires':'bioluminescent coral or cloudstone', atmo:'weather cues and particles', daytime:'golden hour / night glow / storm', population:'figures/vehicles for scale', alt:`Cinematic view of ${n} with architecture and inhabitants.` }));
  const cityEntries = expandVariants(cityEntriesBase, 1); // 2x
  writeJsonBlocks(PATHS.out.cities, 'City & Settlement View Prompts', chunk(cityEntries, 100));

  // Quest scenes from quest titles
  const questNames = readNamesFromDir(PATHS.quests, 2000);
  const questScenePick = pick(questNames, Math.min(questNames.length, 200));
  const questSceneBase = questScenePick.map((n,i)=> toEntry('scene', n, 'quest-scene', i+1, { keyMoment:'quest-defining beat', fx:'subtle VFX cues for objectives', lighting:'narrative lighting', alt:`Quest scene: ${n}.` }));
  const questSceneEntries = expandVariants(questSceneBase, 2);
  if (questSceneEntries.length){
    writeJsonBlocks(PATHS.out.scenes, 'Scene-Setting Atmospheric Art Prompts (Quest Scenes Added)', chunk(questSceneEntries, 100));
  }

  // Battle maps (30 fixed names)
  const mapNames = ['Aethermoor Harbor Skirmish','Pressure Temple Ruins','Bioluminescent Forest Ambush','Cloud-Dock Boarding Action','Sunken Library Stacks','Void-Fractured Plaza','Storm-Torn Lighthouse','Abyssal Trench Ledge','Crystal Cavern Bridge','Coral Market Riot','Wrecked Submarine Interior','Airship Deck Melee','Pressure Maelstrom Edge','Merged Zone Stairwell','Kelp Forest Labyrinth','Sky Whale Back Hunt','Pressure Dome Bazaar','Drowned Cathedral Nave','Shattered Observatory','Shadow Market Alley','Singing Trenches Rift','Wandering Atoll Shore','Gloom Gardens Paths','Frozen Throne Approach','Floating Market Barges','Eel Keeper Pens','Embassy Quarter Court','Sundered Peaks Pass','Sunken Crown Crypt','Golden Trade Route Toll'];
  const mapEntries = mapNames.map((n,i)=> {
    const complexity = i % 2 === 0 ? 'standard' : 'complex';
    const gridSquares = complexity === 'standard' ? '15x15' : '30x30';
    return ({
      ...toEntry('map', n, 'map', i+1, {
        grid:`${gridSquares} squares at 140 px per square (140 DPI)`,
        gridSquares,
        terrain:'distinct patterns for passable / impassable / difficult',
        hazards:'collapses, rips, currents; marked clearly',
        paths:'multiple routes and flanking options',
        elevation:'ramps, stairs, ledges, or contour lines',
        style:'clean export; icons only; no text labels',
        alt:`Top-down tactical map of ${n}.`,
      }),
      dpi: 140,
      grid: gridSquares,
      vtt:{format:'Foundry', tileSize:140, textPolicy:'no text; overlays only'},
      levels:[1,1,2,3][i%4]
    });
  });
  const mapVariants = expandVariants(mapEntries, 2); // 3x
  writeJsonBlocks(PATHS.out.battleMaps, 'Battle Map Descriptions (VTT-Ready)', chunk(mapVariants, 100));

  // World map layers
  const layers = ['World Political Boundaries','Trade Routes and Corridors','Depth Zones and Altitude Bands','Faction Territories and Influence','Magical Phenomena and Storm Tracks','Hidden Locations and Rumor Sites'];
  const layerEntries = layers.map((name,i)=> ({...toEntry('map', name, 'world-layer', i+1, { grid:'no tactical grid; labeled overlays', terrain:'base relief with bathymetry/sky currents', hazards:'overlay symbology + legend', style:'layered export with toggles; label areas reserved; no tiny text', alt:`${name} overlay for world map.` }), aspect:'16:9', resolution:'3840x2160', layers:['base','political','routes','depth','faction','magic','hidden'], scale:'1:25,000,000', textPolicy:'labels added as separate overlay, no rasterized tiny text' }));
  const layerVariants = expandVariants(layerEntries, 2); // 3x
  writeJsonBlocks(PATHS.out.worldLayers, 'World Map Layer Prompts', chunk(layerVariants, 60));

  // Items
  const itemNames = readNamesFromDir(PATHS.items, 5000);
  const itemPick = pick(itemNames, Math.min(itemNames.length, Math.max(1200, Math.floor(itemNames.length*0.95))));
  const itemEntriesBase = itemPick.map((n,i)=> toEntry('item', n, 'artifact', i+1, { materials:'pearl, coral, cloud-crystal, pressure-forged metals', runes:'abstract sigils (not letters), gentle glow', scale:'hand or ruler for size', alt:`Artifact ${n} with materials, runes, and scale.` }));
  const itemEntries = expandVariants(itemEntriesBase, 7); // 8x to drive total >10k
  writeJsonBlocks(PATHS.out.artifacts, 'Magical Artifact Visualization Prompts', chunk(itemEntries, 100));

  // Vehicles
  const ships = ['Aethermoor Courier-Class Airship','Abyssal Scout Submarine','Hybrid Rift-Runner Sloop','Pressure Lifter Barge','Sky-Cutter Interceptor','Depth-Piercer Research Sub','Cloud-Anchor Freighter','Void-Skimmer Cutter','Cerulean Passenger Dirigible','Coral-Frame Diver Tender','Storm-Borne Battleship','Kelp-Weave Patrol Boat','Altitude-Tuned Skiff','Maelstrom Tug','Crown Council Flagship','Resonance-Drive Yacht','Harbor Guardian Gunboat','Trench Lantern Surveyor','Arc-Engine Prototype','Aether Sail Testbed'];
  const shipEntriesBase = ships.map((n,i)=> ({...toEntry('vehicle', n, 'ship', i+1, { sections:'top/side/cross-section/decks', systems:'ballast, pressure hulls, engines, crew', alt:`Blueprint cutaway of ${n}.` }), aspect:'16:9', resolution:'3840x2160', callouts:'numbered pins 01..10; legend area reserved; no paragraph labels' }));
  const shipEntries = expandVariants(shipEntriesBase, 2);
  writeJsonBlocks(PATHS.out.ships, 'Vehicle & Ship Blueprint Prompts', chunk(shipEntries, 100));

  // Handouts
  const handoutNames = ['Aged Treasure Map','Noble Writ with Wax Seal','Cult Text with Marginalia','Merchant Contract with Fine Print','Love Letter with Hidden Message','Wanted Poster with Reward','Ship Manifests with Stamps','Guild License Certificate','Temple Prayer Sheet','Smuggler Ledger Page','Council Summons Notice','Tavern Bill of Fare','Docking Permit','Privateer Letter of Marque','Ancient Prophecy Fragment','Embassy Invitation','Encoded Shipping Route','Bounty Claim Form','Alchemical Recipe Sheet','Arena Ticket','Sailor Tattoo Sketches','Border Crossing Pass','Relic Provenance Card','Court Summons','Explorer Field Notes'];
  const handoutBase = handoutNames.map((n,i)=> toEntry('handout', n, 'handout', i+1, { texture:'creased parchment, water damage, ink bleed', typography:'readable serif fonts; clear headings; no gibberish', hidden:'microtext / cipher hints', alt:`${n} as an in-world paper prop.` }));
  const handoutEntries = expandVariants(handoutBase, 3);
  writeJsonBlocks(PATHS.out.handouts, 'In-World Document Design Prompts', chunk(handoutEntries, 80));

  // Symbols
  const factionNames = readNamesFromDir(PATHS.groups, 2000);
  const symbolPick = pick(factionNames, Math.min(factionNames.length, 200));
  const symbolBase = symbolPick.map((n,i)=> ({...toEntry('symbol', n, 'heraldry', i+1, { shield:'simple geometry', motifs:'2-3 motifs tied to identity', usage:'seal/banner/coin variants', alt:`Heraldic emblem for ${n}.` }), palette:['deep blues','seafoam greens','storm greys','gold accents'][i%4], textPolicy:'no words or inscriptions; pure iconography' }));
  const symbolEntries = expandVariants(symbolBase, 1);
  writeJsonBlocks(PATHS.out.symbols, 'Faction Heraldry Prompts', chunk(symbolEntries, 100));

  // Scenes
  const scenes = ["The party's first glimpse of Abyssos Prime",'Storm approaching the airship',"Deep Mother's tentacles rising",'Merged zone reality fracture','Underwater bioluminescent forest','Sky whale migration at sunset','Pressure dome festival night','Shadow Market under rain','Drowned cathedral vigil','Crystal trench aurora','Wandering atoll caravan','Trench-fire battlefield aftermath','Golden Trade Route convoy','Whisper Island fog dawn','Frozen Throne coronation','Cloud citadel duel','Void tear over harbor','Submarine chase through kelp','Airship docks riot','Sunken library revelation'];
  const sceneBase = scenes.map((n,i)=> toEntry('scene', n, 'scene', i+1, { keyMoment:'clear narrative focal point', fx:'atmospheric VFX support', lighting:'cinematic light shaping', alt:`Atmospheric illustration of: ${n}.` }));
  const sceneEntries = expandVariants(sceneBase, 2);
  writeJsonBlocks(PATHS.out.scenes, 'Scene-Setting Atmospheric Art Prompts', chunk(sceneEntries, 100));

  // UI
  const uiNames = ['Character Sheet Layout','Initiative Tracker','Pressure/Altitude Gauge','Faction Reputation Bar','Inventory Management Screen','Quest Log & Pins','Quick Reference Overlay','Spellbook & Effects','Vehicle Status Panel','Encounter Control Board'];
  const uiBase = uiNames.map((n,i)=> toEntry('ui', n, 'ui', i+1, { layout:'grid-based layout with spacing', widgets:'icons, meters, controls', alt:`Interface mockup: ${n}.` }));
  const uiEntries = expandVariants(uiBase, 2);
  writeJsonBlocks(PATHS.out.ui, 'Digital Interface Element Prompts', chunk(uiEntries, 60));

  // Audio guide
  ensureDir(PATHS.out.audio);
  fs.writeFileSync(PATHS.out.audio, '# Soundscape Guide\n\n- Underwater: pressure creaks, bubble streams, whale songs\n- Airship: wind howling, rope creaking, engine humming\n- Combat: weapon/spell palettes\n- Locations: market chatter, tavern ambiance, temple chants\n\nRecommendations:\n- Spotify: aquatic ambient, sky voyages, void horror.\n- Free SFX: freesound.org, Sonniss GDC bundles.\n\nNotes: loop-friendly 2–4 min tracks, crossfades, low-CPU players in VTT.\n', 'utf8');

  // Animations guide
  ensureDir(PATHS.out.animations);
  fs.writeFileSync(PATHS.out.animations, '# Animated Elements Guide\n\n- Spells: water jets, wind trails, void rifts (parallax)\n- Environmental: tide cycles, lightning, reality shimmer\n- Creatures: swim cycles, wingbeats, phasing jitter\n- Interactive maps: toggles, animated hazards, pulse markers\n\nSpecs: 24–30 fps, WebM (alpha), short seamless loops.\n', 'utf8');

  // Cinematic sequences (for Sora or other video models)
  ensureDir(PATHS.out.videos);
  const videoPrompts = [
    {
      id: 'cin-void-tear-harbor',
      title: 'Void Tear Over Harbor',
      duration_s: 12,
      aspect: '16:9',
      style: 'painterly fantasy realism, Aquabyssos harbor at night, bioluminescent accents',
      shot: 'slow dolly-in toward a star-silent rift opening above pressure domes; boats rock with subtle parallax',
      action: 'ripples dance on water; faint aurora arcs mirror the tear; distant bell toll',
      negatives: ['modern signage','sci-fi UI','photoreal CGI','anime','gibberish text'],
    },
    {
      id: 'cin-sky-whale-sunset',
      title: 'Sky Whale Migration at Sunset',
      duration_s: 10,
      aspect: '21:9',
      style: 'Aethermoor sky, cloudstone spires, warm rim light',
      shot: 'wide shot; camera pans following a pod of sky whales crossing between brass airships',
      action: 'soft contrails; banners flutter; lens bloom avoided; whales cast shadows over city',
      negatives: ['text labels','hard sci-fi panels','neon UI','over-glamorized faces'],
    },
    {
      id: 'cin-drowned-cathedral-candles',
      title: 'Drowned Cathedral Vigil',
      duration_s: 11,
      aspect: '16:9',
      style: 'subsurface caustics, pressure-glass, candle glow',
      shot: 'static medium-wide inside a flooded nave; floating candles drift past broken stained-glass',
      action: 'particles drift; distant whale call; shafts of light oscillate with waves',
      negatives: ['readable text','CGI oversharpness','modern signage'],
    },
    {
      id: 'cin-storm-airship-deck',
      title: 'Storm on the Airship Deck',
      duration_s: 9,
      aspect: '16:9',
      style: 'Aethermoor romantic realism, rope and sail detail',
      shot: 'handheld-feel; crew lashing lines as gusts hit; camera sway synced to wind',
      action: 'rain streaks; lightning distant; no text UI; readable silhouettes at all times',
      negatives: ['neon UI','futuristic panels','gibberish overlays'],
    },
    {
      id: 'cin-merged-zone-stairwell',
      title: 'Merged Zone Stairwell Fracture',
      duration_s: 10,
      aspect: '9:16',
      style: 'reality fracture mixed realm, teal/indigo palette',
      shot: 'vertical shot; steps fold Escher-like while lanternfish swim through air',
      action: 'subtle gravity glitches; cloth flutters upward at times',
      negatives: ['text labels','sci-fi UI'],
    },
  ];
  const vmd = ['# Cinematic Sequences (Video Prompts)\n'];
  for (const v of videoPrompts){
    vmd.push('```json');
    vmd.push(JSON.stringify(v, null, 2));
    vmd.push('```\n');
  }
  fs.writeFileSync(PATHS.out.videos, vmd.join('\n'), 'utf8');

  // Style guide
  ensureDir(PATHS.out.style);
  fs.writeFileSync(PATHS.out.style, '# Visual Style Guide\n\n- Realms:\n  - Aquabyssos: teals, deep blues, biolum glow; materials: coral, pearl, pressure glass.\n  - Aethermoor: navy, gold, cloud-white; materials: cloudstone, brass, sailcloth.\n  - Void: indigos, violets, starfields; materials: night-silk, abyss-glass.\n- D&D Stylization: heroic tabletop fantasy (D&D 5e adjacent), grounded medieval-fantasy kit, coherent cultural gear, no modern tech or signage, consistent painterly collection style.\n- Portraits: painterly realism; token readability at 210x330+; clear facial features; realm attire.\n- Environments: concept art realism; cinematic key/fill/rim; underwater caustics; storm rim for sky.\n- Maps: 140 px grid; icons only; bold walls vs fine textures; distinct patterns for terrain types.\n- Vehicles: blueprint cutaways with numbered pins and legend space; no paragraphs.\n- UI: fantasy-themed, high-contrast, readable; short real labels where needed.\n- Negatives: modern signage, sci-fi UI, photoreal CGI, anime, bloom glare, gibberish text.\n', 'utf8');

  // Asset database
  ensureDir(PATHS.out.db);
  fs.writeFileSync(PATHS.out.db, '# Asset Database\n\nFields: id, type, name, prompt, aspect, resolution, style, lighting, mood, negative, seed, alt_text, realm, tags, sourceDoc, crossRefs\nNaming: {type}-{slug(name)}-{seed}.ext\nFormats: Portraits 1:1@2048, Scenes 16:9@2560x1440, Maps 16:9@2560x1440, Symbols SVG\nVersioning: keep JSON sidecars in Generated/metadata\nLicensing: track source (AI/local), model, seed, rights in sidecar\n', 'utf8');

  console.log('Prompt files generated.');
}

if (require.main === module) main();


