---
tags:
- api
- integration
- external-services
cssclasses: wide-page
type: note
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# 🌐 API Integration Guide

Enhance your TTRPG vault with external APIs for music, images, maps, and D&D Beyond integration.

---

## 🎵 Music APIs

### Spotify Integration

**Setup:**
1. Create [Spotify App](https://developer.spotify.com/dashboard)
2. Get Client ID and Secret
3. Install [Obsidian Spotify Plugin](https://github.com/Darren-project/obsidian-spotify)

**MetaBind Button:**
```js
// Create campaign playlist
const playlistName = await tp.system.prompt("Playlist name:");
const description = `Campaign: ${dv.current().file.name}`;

const token = app.plugins.plugins['obsidian-spotify']?.settings?.accessToken;
if (token) {
  const response = await fetch('https://api.spotify.com/v1/me/playlists', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: playlistName,
      description: description,
      public: false
    })
  });
  
  const playlist = await response.json();
  new Notice(`Created playlist: ${playlistName}`);
  
  // Add to session frontmatter
  const activeFile = app.workspace.getActiveFile();
  if (activeFile) {
    await app.fileManager.processFrontMatter(activeFile, fm => {
      fm.playlist_url = playlist.external_urls?.spotify;
      fm.playlist_id = playlist.id;
    });
  }
}
```

**Session Template Integration:**
```yaml
---
playlist_id: 
background_music: 
- Tavern Ambience
- Combat Music
- Exploration Themes
---

## 🎵 Session Music
**Playlist:** `VIEW[{playlist_url}]`
`BUTTON[playPlaylist]` Play Background Music
`BUTTON[combatMusic]` Switch to Combat
`BUTTON[ambientSound]` Ambient Only
```

### YouTube Music API

**Background Ambient Generator:**
```js
// Generate ambient sound based on location
const location = dv.current().location_type || "tavern";
const ambientMap = {
  "tavern": "tavern+ambience+medieval",
  "forest": "forest+sounds+d&d",
  "dungeon": "dungeon+ambience+dark",
  "city": "medieval+city+sounds",
  "combat": "epic+battle+music+d&d"
};

const searchTerm = ambientMap[location] || "d&d+ambient";
const youtubeUrl = `https://www.youtube.com/results?search_query=${searchTerm}`;

await navigator.clipboard.writeText(youtubeUrl);
new Notice(`YouTube search copied: ${searchTerm.replace(/\+/g, ' ')}`);
```

### Syrinscape Integration

**API Calls:**
```js
// Control Syrinscape remotely
const syrinscapeAPI = "http://localhost:8080/api";

const playAmbient = async (soundId) => {
  await fetch(`${syrinscapeAPI}/play/${soundId}`, { method: 'POST' });
};

const stopAll = async () => {
  await fetch(`${syrinscapeAPI}/stop`, { method: 'POST' });
};

// Location-based automatic sounds
const locationSounds = {
  "tavern": "tavern-medieval",
  "forest": "forest-day", 
  "dungeon": "dungeon-depths",
  "combat": "epic-battle"
};
```

---

## 🖼️ Image APIs

### Unsplash API

**Random Fantasy Images:**
```js
// Generate location images
const UNSPLASH_ACCESS_KEY = "YOUR_ACCESS_KEY";

const generateLocationImage = async (locationType, keywords = "") => {
  const searchTerms = {
    "city": "medieval city fantasy",
    "forest": "dark forest fantasy",
    "dungeon": "cave underground dark",
    "tavern": "medieval tavern interior",
    "castle": "medieval castle fantasy"
  };
  
  const query = searchTerms[locationType] || `fantasy ${locationType}`;
  const searchQuery = keywords ? `${query} ${keywords}` : query;
  
  const response = await fetch(
    `https://api.unsplash.com/photos/random?query=${encodeURIComponent(searchQuery)}&orientation=landscape`,
    {
      headers: {
        'Authorization': `Client-ID ${UNSPLASH_ACCESS_KEY}`
      }
    }
  );
  
  const data = await response.json();
  
  if (data.urls) {
    const imageUrl = data.urls.regular;
    const attribution = `Photo by ${data.user.name} on Unsplash`;
    
    // Download and save to vault
    const response2 = await fetch(imageUrl);
    const blob = await response2.blob();
    const fileName = `location-${Date.now()}.jpg`;
    const filePath = `z_Assets/Locations/${fileName}`;
    
    await app.vault.createBinary(filePath, await blob.arrayBuffer());
    
    // Update current note
    const activeFile = app.workspace.getActiveFile();
    if (activeFile) {
      await app.fileManager.processFrontMatter(activeFile, fm => {
        fm.image_path = filePath;
        fm.image_attribution = attribution;
      });
    }
    
    new Notice(`Image added: ${fileName}`);
  }
};
```

### DALL-E Integration

**AI-Generated Character Portraits:**
```js
// Generate NPC portraits
const generateNPCPortrait = async (npcData) => {
  const { race, gender, occupation, description } = npcData;
  
  const prompt = `Fantasy D&D character portrait: ${gender} ${race} ${occupation}, ${description}, detailed face, fantasy art style, digital painting`;
  
  const response = await fetch('https://api.openai.com/v1/images/generations', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${OPENAI_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: prompt,
      size: "1024x1024",
      quality: "standard",
      n: 1
    })
  });
  
  const data = await response.json();
  
  if (data.data && data.data[0]) {
    const imageUrl = data.data[0].url;
    
    // Save to vault
    const response2 = await fetch(imageUrl);
    const blob = await response2.blob();
    const fileName = `npc-${npcData.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.png`;
    const filePath = `z_Assets/Characters/${fileName}`;
    
    await app.vault.createBinary(filePath, await blob.arrayBuffer());
    
    return filePath;
  }
};
```

### Midjourney API

**Batch Image Generation:**
```js
// Generate multiple images for campaign
const generateCampaignImages = async (imageRequests) => {
  const results = [];
  
  for (const request of imageRequests) {
    const prompt = `${request.description} --style fantasy --ar 16:9 --v 6`;
    
    // Midjourney API call (placeholder - actual implementation varies)
    const response = await fetch('https://api.midjourney.com/v1/imagine', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MIDJOURNEY_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ prompt })
    });
    
    results.push({
      type: request.type,
      name: request.name,
      status: response.status === 200 ? 'queued' : 'failed'
    });
  }
  
  return results;
};
```

---

## 🗺️ Map APIs

### Azgaar's Fantasy Map Generator

**World Map Integration:**
```js
// Generate random world map
const generateWorldMap = async () => {
  const config = {
    width: 2048,
    height: 1536,
    scale: 3,
    options: {
      politics: true,
      religions: true,
      cultures: true,
      states: Math.floor(Math.random() * 20) + 10
    }
  };
  
  // Save map configuration
  const mapData = {
    generated: moment().format("YYYY-MM-DD HH:mm"),
    config: config,
    notes: "Generated for campaign"
  };
  
  await app.vault.create(
    `2-World/Maps/World Map ${moment().format("YYYY-MM-DD")}.md`,
    `---
generated: ${mapData.generated}
type: world-map
tool: azgaar
---

# World Map

![[world-map-${Date.now()}.png]]

## Map Data
${JSON.stringify(config, null, 2)}

## Regions
- 
- 
- 

## Notes
Generated using Azgaar's Fantasy Map Generator
`
  );
};
```

### Wonderdraft Integration

**Regional Map Sync:**
```js
// Sync Wonderdraft exports
const syncWonderdraftMap = async () => {
  const mapFolder = "Maps/Wonderdraft/";
  const maps = await app.vault.getFiles()
    .filter(f => f.path.startsWith(mapFolder) && f.extension === "png");
  
  for (const map of maps) {
    const mapName = map.basename;
    const noteExists = app.vault.getAbstractFileByPath(`2-World/Regions/${mapName}.md`);
    
    if (!noteExists) {
      const content = `---
type: regional-map
map_file: "${map.path}"
scale: regional
created: ${moment().format("YYYY-MM-DD")}
---

# ${mapName}

![[${map.path}]]

## Locations
- 

## Notable Features
- 

## Connections
- 
`;
      await app.vault.create(`2-World/Regions/${mapName}.md`, content);
    }
  }
  
  new Notice(`Synced ${maps.length} Wonderdraft maps`);
};
```

### Owlbear Rodeo API

**Battle Map Sync:**
```js
// Sync battle maps for combat
const syncBattleMaps = async () => {
  const OWLBEAR_API = "https://www.owlbear.rodeo/api";
  
  const rooms = await fetch(`${OWLBEAR_API}/rooms`, {
    headers: { 'Authorization': `Bearer ${OWLBEAR_TOKEN}` }
  }).then(r => r.json());
  
  for (const room of rooms) {
    const roomNote = `5-Campaign/Battle Maps/${room.name}.md`;
    const exists = app.vault.getAbstractFileByPath(roomNote);
    
    if (!exists) {
      const content = `---
type: battle-map
owlbear_room_id: ${room.id}
created: ${moment().format("YYYY-MM-DD")}
---

# ${room.name}

**Owlbear Rodeo Room:** [Open](https://www.owlbear.rodeo/room/${room.id})

## Combat Notes
- 

## Tactical Elements
- 
`;
      await app.vault.create(roomNote, content);
    }
  }
};
```

---

## 🎲 D&D Beyond Integration

### Character Sync

**Pull Character Data:**
```js
// Sync player characters from D&D Beyond
const syncDnDBeyondCharacter = async (characterId) => {
  const API_BASE = "https://character-service.dndbeyond.com/character/v5/character";
  
  try {
    const response = await fetch(`${API_BASE}/${characterId}`);
    const character = await response.json();
    
    if (character.data) {
      const char = character.data;
      const fileName = `${char.name}.md`;
      const filePath = `4-Party/${fileName}`;
      
      const content = `---
tags: [PC, player-character]
player: "${char.name}"
class: "${char.classes[0]?.definition?.name}"
level: ${char.classes[0]?.level}
race: "${char.race?.fullName}"
background: "${char.background?.definition?.name}"
alignment: "${char.alignmentId}"
ac: ${char.armorClass}
hp: ${char.baseHitPoints}
speed: ${char.speed?.walk}
str: ${char.stats[0]?.value}
dex: ${char.stats[1]?.value}
con: ${char.stats[2]?.value}
int: ${char.stats[3]?.value}
wis: ${char.stats[4]?.value}
cha: ${char.stats[5]?.value}
proficiency_bonus: ${char.proficiencyBonus}
dndbeyond_id: ${characterId}
last_sync: ${moment().format("YYYY-MM-DD HH:mm")}
---

# ${char.name}

## Character Overview
**Class:** ${char.classes[0]?.definition?.name} ${char.classes[0]?.level}
**Race:** ${char.race?.fullName}
**Background:** ${char.background?.definition?.name}

## Stats
| Ability | Score | Modifier |
|---------|-------|----------|
| STR | ${char.stats[0]?.value} | ${Math.floor((char.stats[0]?.value - 10) / 2)} |
| DEX | ${char.stats[1]?.value} | ${Math.floor((char.stats[1]?.value - 10) / 2)} |
| CON | ${char.stats[2]?.value} | ${Math.floor((char.stats[2]?.value - 10) / 2)} |
| INT | ${char.stats[3]?.value} | ${Math.floor((char.stats[3]?.value - 10) / 2)} |
| WIS | ${char.stats[4]?.value} | ${Math.floor((char.stats[4]?.value - 10) / 2)} |
| CHA | ${char.stats[5]?.value} | ${Math.floor((char.stats[5]?.value - 10) / 2)} |

## Spells
${char.spells?.map(spell => `- ${spell.definition.name}`).join('\n') || 'No spells'}

## Equipment
${char.inventory?.map(item => `- ${item.definition.name} (${item.quantity})`).join('\n') || 'No equipment'}

---
*Last synced from D&D Beyond: ${moment().format("YYYY-MM-DD HH:mm")}*
`;

      const existingFile = app.vault.getAbstractFileByPath(filePath);
      if (existingFile) {
        await app.vault.modify(existingFile, content);
      } else {
        await app.vault.create(filePath, content);
      }
      
      new Notice(`Synced character: ${char.name}`);
    }
  } catch (error) {
    new Notice(`Failed to sync character: ${error.message}`);
  }
};
```

### Spell Database Sync

**Update Spell Compendium:**
```js
// Sync spell database with D&D Beyond
const syncSpellDatabase = async () => {
  const SPELL_API = "https://www.dnd5eapi.co/api/spells";
  
  const response = await fetch(SPELL_API);
  const spellList = await response.json();
  
  let syncedCount = 0;
  
  for (const spell of spellList.results) {
    const spellResponse = await fetch(`https://www.dnd5eapi.co${spell.url}`);
    const spellData = await response.json();
    
    const fileName = `${spell.name.replace(/[^a-zA-Z0-9\s]/g, '').replace(/\s+/g, '-').toLowerCase()}.md`;
    const filePath = `3-Mechanics/CLI/spells/${fileName}`;
    
    const content = `---
name: "${spellData.name}"
level: ${spellData.level}
school: "${spellData.school.name.toLowerCase()}"
castingTime: "${spellData.casting_time}"
range: "${spellData.range}"
components:
  v: ${spellData.components.includes('V')}
  s: ${spellData.components.includes('S')}
  m: ${spellData.components.includes('M')}
duration: "${spellData.duration}"
concentration: ${spellData.concentration}
ritual: ${spellData.ritual}
classes: [${spellData.classes.map(c => `"${c.name}"`).join(', ')}]
description: "${spellData.desc.join(' ')}"
---

# ${spellData.name}

${spellData.desc.join('\n\n')}

${spellData.higher_level ? `**At Higher Levels:** ${spellData.higher_level.join(' ')}` : ''}
`;

    const exists = app.vault.getAbstractFileByPath(filePath);
    if (!exists) {
      await app.vault.create(filePath, content);
      syncedCount++;
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  new Notice(`Synced ${syncedCount} new spells`);
};
```

---

## 🔧 API Configuration

### Environment Variables

Create `.env` file in vault root:
```bash
# Spotify
SPOTIFY_CLIENT_ID=your_client_id
SPOTIFY_CLIENT_SECRET=your_client_secret

# Image APIs
OPENAI_API_KEY=your_openai_key
UNSPLASH_ACCESS_KEY=your_unsplash_key
MIDJOURNEY_API_KEY=your_midjourney_key

# Maps
OWLBEAR_TOKEN=your_owlbear_token

# D&D Beyond
DNDBEYOND_COBALT_TOKEN=your_cobalt_token
```

### Security Configuration

**MetaBind Settings:**
```js
// Store API keys securely
const getApiKey = (service) => {
  const keys = app.plugins.plugins['obsidian-meta-bind-plugin']?.settings?.apiKeys || {};
  return keys[service];
};

const setApiKey = async (service, key) => {
  const settings = app.plugins.plugins['obsidian-meta-bind-plugin'].settings;
  if (!settings.apiKeys) settings.apiKeys = {};
  settings.apiKeys[service] = key;
  await app.plugins.plugins['obsidian-meta-bind-plugin'].saveSettings();
};
```

### Rate Limiting

**API Request Manager:**
```js
class APIManager {
  constructor() {
    this.requestCounts = {};
    this.limits = {
      'spotify': { requests: 100, window: 60000 }, // 100 per minute
      'unsplash': { requests: 50, window: 3600000 }, // 50 per hour
      'openai': { requests: 5, window: 60000 } // 5 per minute
    };
  }
  
  async makeRequest(service, url, options = {}) {
    if (!this.canMakeRequest(service)) {
      throw new Error(`Rate limit exceeded for ${service}`);
    }
    
    this.recordRequest(service);
    return await fetch(url, options);
  }
  
  canMakeRequest(service) {
    const now = Date.now();
    const serviceData = this.requestCounts[service];
    
    if (!serviceData) return true;
    
    const limit = this.limits[service];
    const windowStart = now - limit.window;
    
    const recentRequests = serviceData.filter(time => time > windowStart);
    return recentRequests.length < limit.requests;
  }
  
  recordRequest(service) {
    if (!this.requestCounts[service]) {
      this.requestCounts[service] = [];
    }
    this.requestCounts[service].push(Date.now());
  }
}

window.apiManager = new APIManager();
```

---

## 🚀 Quick Setup

1. **Install Required Plugins:** Spotify, Advanced URI, Templater
2. **Get API Keys:** Sign up for each service
3. **Configure Security:** Store keys in plugin settings
4. **Test Integration:** Use provided button scripts
5. **Customize:** Adapt scripts to your campaign needs

---

*Remember to respect API rate limits and terms of service for all integrations!* 