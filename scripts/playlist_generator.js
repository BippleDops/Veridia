#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Playlist categories
const PLAYLIST_CATEGORIES = {
  locations: {
    name: 'Location Playlists',
    description: 'Background music for different locations',
    playlists: {
      'Aquabyssos Depths': {
        themes: ['aquabyssos', 'underwater', 'deep sea', 'aboleth'],
        description: 'Mysterious underwater ambience for the depths of Aquabyssos'
      },
      'Aethermoor Skies': {
        themes: ['aethermoor', 'sky', 'floating', 'ethereal'],
        description: 'Ethereal music for the floating realms of Aethermoor'
      },
      'Abyssos Prime': {
        themes: ['abyssos prime', 'inverse palace', 'parliament'],
        description: 'Dark and ominous tracks for the sunken capital'
      },
      'Bexley Harbor': {
        themes: ['bexley', 'harbor', 'port', 'docks'],
        description: 'Bustling port town atmosphere'
      }
    }
  },
  
  activities: {
    name: 'Activity Playlists',
    description: 'Music for different game activities',
    playlists: {
      'Combat Encounters': {
        themes: ['combat', 'battle', 'fight', 'encounter'],
        description: 'Intense battle music for combat encounters'
      },
      'Boss Battles': {
        themes: ['boss', 'bbeg', 'final battle', 'climax'],
        description: 'Epic music for major confrontations'
      },
      'Exploration': {
        themes: ['explore', 'journey', 'travel', 'discovery'],
        description: 'Ambient music for exploration and travel'
      },
      'Social Encounters': {
        themes: ['tavern', 'inn', 'social', 'conversation'],
        description: 'Background music for roleplay and social scenes'
      }
    }
  },
  
  atmosphere: {
    name: 'Atmosphere Playlists',
    description: 'Mood-setting music',
    playlists: {
      'Mystery & Intrigue': {
        themes: ['mystery', 'intrigue', 'shadow', 'conspiracy'],
        description: 'Tense music for mysterious situations'
      },
      'Horror & Dread': {
        themes: ['horror', 'void', 'cosmic', 'dread'],
        description: 'Unsettling music for horror elements'
      },
      'Sacred & Divine': {
        themes: ['temple', 'divine', 'sacred', 'holy'],
        description: 'Peaceful and reverent music for religious spaces'
      },
      'Celebration & Festival': {
        themes: ['festival', 'celebration', 'party', 'feast'],
        description: 'Upbeat music for celebrations'
      }
    }
  },
  
  factions: {
    name: 'Faction Playlists',
    description: 'Theme music for different factions',
    playlists: {
      'Parliament of Shadows': {
        themes: ['parliament of shadows', 'political', 'scheming'],
        description: 'Music for political intrigue and shadow dealings'
      },
      'Crystal Wardens': {
        themes: ['crystal warden', 'crystal', 'guardian'],
        description: 'Crystalline resonance for the protectors'
      },
      'Void Touched': {
        themes: ['void touched', 'void', 'corruption'],
        description: 'Disturbing music for the void-corrupted'
      },
      'Merchant Guilds': {
        themes: ['merchant', 'guild', 'trade', 'market'],
        description: 'Bustling marketplace atmosphere'
      }
    }
  }
};

async function loadMusicFiles() {
  const musicDir = path.join(process.cwd(), '04_Resources/Assets/Audio/Music');
  
  try {
    const files = await fs.readdir(musicDir);
    return files.filter(f => f.endsWith('.mp3')).map(f => ({
      file: f,
      path: path.join('04_Resources/Assets/Audio/Music', f),
      name: f.replace('.mp3', '').replace(/_/g, ' ')
    }));
  } catch (error) {
    console.log('Music directory not found, using placeholder tracks');
    return [];
  }
}

async function matchTracksToThemes(tracks, themes) {
  const matched = [];
  
  for (const track of tracks) {
    const trackLower = track.name.toLowerCase();
    
    for (const theme of themes) {
      if (trackLower.includes(theme.toLowerCase())) {
        matched.push(track);
        break;
      }
    }
  }
  
  return matched;
}

async function generatePlaylists() {
  console.log('🎵 Generating themed playlists...\n');
  
  const tracks = await loadMusicFiles();
  console.log(`Found ${tracks.length} music tracks\n`);
  
  const allPlaylists = [];
  let playlistCount = 0;
  
  // Generate playlists for each category
  for (const [categoryKey, category] of Object.entries(PLAYLIST_CATEGORIES)) {
    console.log(`📁 ${category.name}`);
    
    for (const [playlistName, playlist] of Object.entries(category.playlists)) {
      const matchedTracks = await matchTracksToThemes(tracks, playlist.themes);
      
      if (matchedTracks.length > 0) {
        const playlistData = {
          name: playlistName,
          category: category.name,
          description: playlist.description,
          tracks: matchedTracks,
          duration: `~${matchedTracks.length * 3} minutes`
        };
        
        allPlaylists.push(playlistData);
        playlistCount++;
        
        console.log(`  ✅ ${playlistName}: ${matchedTracks.length} tracks`);
      } else {
        console.log(`  ⏭️  ${playlistName}: No matching tracks yet`);
      }
    }
    console.log('');
  }
  
  // Generate master playlist document
  const playlistDoc = `# TTRPG Music Playlists

Generated: ${new Date().toISOString()}

## Overview

Total Playlists: ${playlistCount}
Total Tracks: ${tracks.length}

## Quick Access

${Object.entries(PLAYLIST_CATEGORIES).map(([key, cat]) => `
### ${cat.name}
${Object.entries(cat.playlists).map(([name, pl]) => `- [${name}](#${name.toLowerCase().replace(/ /g, '-')})`).join('\n')}
`).join('\n')}

## Detailed Playlists

${allPlaylists.map(playlist => `
### ${playlist.name}

**Category**: ${playlist.category}  
**Description**: ${playlist.description}  
**Duration**: ${playlist.duration}  
**Tracks**: ${playlist.tracks.length}

#### Track List:
${playlist.tracks.slice(0, 20).map((track, i) => `${i + 1}. ${track.name}`).join('\n')}
${playlist.tracks.length > 20 ? `\n... and ${playlist.tracks.length - 20} more tracks` : ''}
`).join('\n')}

## Usage Instructions

### For Game Masters

1. **Pre-Session Setup**: Load appropriate location playlists before the session
2. **Dynamic Switching**: Keep combat and atmosphere playlists ready for quick transitions
3. **Faction Themes**: Use faction playlists when players interact with specific groups
4. **Loop Settings**: Most tracks are designed to loop seamlessly

### Integration with VTT

These playlists can be imported into:
- **Roll20**: Use the Jukebox feature
- **Foundry VTT**: Import as Playlist entities
- **Fantasy Grounds**: Add to the Sound Manager
- **Owlbear Rodeo**: Link to external audio

### Custom Playlists

To create custom playlists:
1. Combine tracks from different categories
2. Adjust volume levels for layering
3. Use crossfade for smooth transitions
`;

  // Save playlist documentation
  await fs.writeFile(
    path.join(process.cwd(), '04_Resources/Assets/Audio/PLAYLISTS.md'),
    playlistDoc
  );
  
  // Save playlist data as JSON
  await fs.writeFile(
    path.join(process.cwd(), '09_Performance/playlists.json'),
    JSON.stringify({
      categories: PLAYLIST_CATEGORIES,
      playlists: allPlaylists,
      trackCount: tracks.length
    }, null, 2)
  );
  
  console.log(`\n✅ Generated ${playlistCount} playlists`);
  console.log('📊 Playlist documentation saved to 04_Resources/Assets/Audio/PLAYLISTS.md');
  
  return allPlaylists;
}

// Generate session-specific playlists
async function generateSessionPlaylists() {
  console.log('\n🎮 Generating session-specific playlists...\n');
  
  const sessions = [
    {
      name: 'Session 1: Harbor Mystery',
      locations: ['bexley', 'harbor', 'docks'],
      activities: ['investigation', 'social', 'combat'],
      atmosphere: ['mystery', 'tension']
    },
    {
      name: 'Session 2: Depths Exploration',
      locations: ['aquabyssos', 'underwater', 'caves'],
      activities: ['exploration', 'combat', 'discovery'],
      atmosphere: ['mysterious', 'dangerous']
    },
    {
      name: 'Session 3: Court Intrigue',
      locations: ['abyssos prime', 'palace', 'court'],
      activities: ['social', 'intrigue', 'negotiation'],
      atmosphere: ['political', 'tense', 'formal']
    }
  ];
  
  const sessionPlaylists = [];
  
  for (const session of sessions) {
    console.log(`📋 ${session.name}`);
    
    const playlist = {
      name: session.name,
      segments: {
        opening: `Atmospheric tracks for ${session.locations[0]}`,
        exploration: 'General exploration and travel music',
        encounters: 'Combat and tension tracks',
        resolution: 'Calm and reflective music for session end'
      }
    };
    
    sessionPlaylists.push(playlist);
  }
  
  // Save session playlists
  const sessionDoc = `# Session-Specific Playlists

## Quick Setup Guide

${sessionPlaylists.map(sp => `
### ${sp.name}

**Playlist Segments**:
${Object.entries(sp.segments).map(([seg, desc]) => `- **${seg.charAt(0).toUpperCase() + seg.slice(1)}**: ${desc}`).join('\n')}
`).join('\n')}

## Tips for Session Music

1. **Pre-load all playlists** before the session starts
2. **Test volume levels** during prep time
3. **Have a "panic button"** to quickly stop music if needed
4. **Use fade transitions** between tracks
5. **Keep combat music ready** for unexpected encounters
`;

  await fs.writeFile(
    path.join(process.cwd(), '06_GM_Resources/Session_Tools/Session_Music_Guide.md'),
    sessionDoc
  );
  
  console.log('\n✅ Session playlists generated');
}

// Run if called directly
if (require.main === module) {
  (async () => {
    await generatePlaylists();
    await generateSessionPlaylists();
  })().catch(console.error);
}

module.exports = { generatePlaylists, generateSessionPlaylists };
