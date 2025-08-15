#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Musical theme mappings based on vault content
const THEME_MAPPINGS = {
  // Locations
  'aquabyssos': {
    style: 'underwater ambient',
    instruments: ['synthesizer', 'glass harmonica', 'whale sounds', 'harp'],
    mood: 'mysterious, deep, flowing',
    tempo: 'slow to medium',
    key: 'minor keys, especially D minor and A minor'
  },
  'aethermoor': {
    style: 'ethereal fantasy',
    instruments: ['strings', 'flute', 'celestial pads', 'wind chimes'],
    mood: 'magical, uplifting, mystical',
    tempo: 'medium',
    key: 'major keys with modal inflections'
  },
  'abyssos_prime': {
    style: 'dark orchestral',
    instruments: ['deep brass', 'timpani', 'low strings', 'choir'],
    mood: 'ominous, powerful, ancient',
    tempo: 'slow to medium',
    key: 'minor keys, chromatic passages'
  },
  'bexley': {
    style: 'medieval town',
    instruments: ['lute', 'recorder', 'hurdy-gurdy', 'tambourine'],
    mood: 'bustling, cheerful, rustic',
    tempo: 'medium to fast',
    key: 'major keys, folk modes'
  },
  
  // Factions/Groups
  'parliament_of_shadows': {
    style: 'political intrigue',
    instruments: ['harpsichord', 'strings pizzicato', 'subtle percussion'],
    mood: 'tense, scheming, sophisticated',
    tempo: 'medium',
    key: 'minor keys with diminished chords'
  },
  'crystal_wardens': {
    style: 'crystalline ambient',
    instruments: ['glass instruments', 'bells', 'synthesizer', 'chimes'],
    mood: 'pure, protective, resonant',
    tempo: 'slow to medium',
    key: 'pentatonic scales'
  },
  'void_touched': {
    style: 'cosmic horror',
    instruments: ['distorted synths', 'prepared piano', 'dark ambient'],
    mood: 'unsettling, alien, vast',
    tempo: 'very slow or chaotic',
    key: 'atonal, dissonant'
  },
  
  // Combat/Action
  'combat': {
    style: 'battle music',
    instruments: ['full orchestra', 'war drums', 'brass', 'electric guitar'],
    mood: 'intense, heroic, urgent',
    tempo: 'fast',
    key: 'minor keys, power chords'
  },
  'boss_fight': {
    style: 'epic orchestral',
    instruments: ['full orchestra', 'choir', 'pipe organ', 'timpani'],
    mood: 'dramatic, climactic, overwhelming',
    tempo: 'variable - slow build to fast',
    key: 'minor keys with major resolution'
  },
  
  // Atmosphere
  'tavern': {
    style: 'folk music',
    instruments: ['fiddle', 'accordion', 'drums', 'vocals'],
    mood: 'warm, lively, social',
    tempo: 'medium to fast',
    key: 'major keys'
  },
  'temple': {
    style: 'sacred music',
    instruments: ['organ', 'choir', 'bells', 'harp'],
    mood: 'reverent, peaceful, spiritual',
    tempo: 'slow',
    key: 'modal scales, major keys'
  },
  'dungeon': {
    style: 'dark ambient',
    instruments: ['low drones', 'metallic sounds', 'dripping water', 'chains'],
    mood: 'oppressive, dangerous, claustrophobic',
    tempo: 'very slow or ambient',
    key: 'minor keys, tritones'
  },
  'market': {
    style: 'world music fusion',
    instruments: ['various ethnic instruments', 'percussion', 'voices'],
    mood: 'busy, diverse, energetic',
    tempo: 'medium to fast',
    key: 'various modes and scales'
  }
};

async function analyzeContent(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const contentLower = content.toLowerCase();
    
    // Extract themes based on content
    const themes = [];
    
    // Location-based themes
    if (contentLower.includes('aquabyssos')) themes.push('aquabyssos');
    if (contentLower.includes('aethermoor')) themes.push('aethermoor');
    if (contentLower.includes('abyssos prime')) themes.push('abyssos_prime');
    if (contentLower.includes('bexley')) themes.push('bexley');
    
    // Faction themes
    if (contentLower.includes('parliament of shadows')) themes.push('parliament_of_shadows');
    if (contentLower.includes('crystal warden')) themes.push('crystal_wardens');
    if (contentLower.includes('void touched') || contentLower.includes('void-touched')) themes.push('void_touched');
    
    // Activity themes
    if (contentLower.includes('combat') || contentLower.includes('battle') || contentLower.includes('fight')) {
      themes.push('combat');
    }
    if (contentLower.includes('boss') || contentLower.includes('bbeg') || contentLower.includes('final battle')) {
      themes.push('boss_fight');
    }
    
    // Atmosphere themes
    if (contentLower.includes('tavern') || contentLower.includes('inn')) themes.push('tavern');
    if (contentLower.includes('temple') || contentLower.includes('shrine') || contentLower.includes('church')) {
      themes.push('temple');
    }
    if (contentLower.includes('dungeon') || contentLower.includes('prison') || contentLower.includes('crypt')) {
      themes.push('dungeon');
    }
    if (contentLower.includes('market') || contentLower.includes('bazaar') || contentLower.includes('merchant')) {
      themes.push('market');
    }
    
    return themes;
  } catch (error) {
    return [];
  }
}

async function mapThemesToMusic() {
  console.log('🎵 Mapping vault themes to musical styles...\n');
  
  const vaultRoot = process.cwd();
  const mappings = [];
  
  // Scan key directories
  const directories = [
    '02_Worldbuilding/Places',
    '02_Worldbuilding/People',
    '02_Worldbuilding/Groups',
    '01_Adventures',
    '06_GM_Resources/Session_Packets'
  ];
  
  for (const dir of directories) {
    const fullPath = path.join(vaultRoot, dir);
    
    try {
      const files = await fs.readdir(fullPath);
      
      for (const file of files) {
        if (!file.endsWith('.md')) continue;
        
        const filePath = path.join(fullPath, file);
        const themes = await analyzeContent(filePath);
        
        if (themes.length > 0) {
          mappings.push({
            file: path.relative(vaultRoot, filePath),
            themes: themes,
            musicStyles: themes.map(t => THEME_MAPPINGS[t]).filter(Boolean)
          });
        }
      }
    } catch (error) {
      console.log(`Skipping ${dir}: ${error.message}`);
    }
  }
  
  // Save mapping report
  const report = `# Theme to Music Mapping Report

Generated: ${new Date().toISOString()}

## Theme Definitions

${Object.entries(THEME_MAPPINGS).map(([theme, mapping]) => `
### ${theme.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}
- **Style**: ${mapping.style}
- **Instruments**: ${mapping.instruments.join(', ')}
- **Mood**: ${mapping.mood}
- **Tempo**: ${mapping.tempo}
- **Key**: ${mapping.key}
`).join('\n')}

## File Mappings

Total files analyzed: ${mappings.length}

${mappings.slice(0, 50).map(m => `
### ${m.file}
- **Themes**: ${m.themes.join(', ')}
- **Music Styles**: ${m.musicStyles.map(s => s.style).join(', ')}
`).join('\n')}

${mappings.length > 50 ? `\n... and ${mappings.length - 50} more files` : ''}

## Usage

These mappings can be used to:
1. Auto-assign background music to locations
2. Create themed playlists for sessions
3. Generate appropriate music for encounters
4. Set mood for different factions and groups
`;

  await fs.writeFile(
    path.join(vaultRoot, '09_Performance/THEME_MUSIC_MAPPING.md'),
    report
  );
  
  // Save JSON mapping for programmatic use
  await fs.writeFile(
    path.join(vaultRoot, '09_Performance/theme_music_mappings.json'),
    JSON.stringify({ themes: THEME_MAPPINGS, fileMappings: mappings }, null, 2)
  );
  
  console.log(`✅ Mapped ${mappings.length} files to musical themes`);
  console.log(`📊 Reports saved to 09_Performance/`);
  
  return mappings;
}

// Run if called directly
if (require.main === module) {
  mapThemesToMusic().catch(console.error);
}

module.exports = { THEME_MAPPINGS, analyzeContent, mapThemesToMusic };
