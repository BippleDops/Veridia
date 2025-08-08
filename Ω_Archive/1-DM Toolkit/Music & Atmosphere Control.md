---
tags:
- dashboard
- music
- atmosphere
- spotify
cssclasses:
- dashboard
- wide-page
- music-control
type: note
aliases: []
created: 2025-07-23 12:39
modified: 2025-07-23 12:39
---
# 🎵 Music & Atmosphere Control

**Powered by Spotify API - Dynamic Session Music Management**

> [!multi-column]
>
>> [!NOTE|clean no-t]
>> ## 🎭 Quick Mood Control
>> `BUTTON[setExplorationMood]` 🗺️ Exploration  
>> `BUTTON[setCombatMood]` ⚔️ Combat Ready
>> `BUTTON[setTavernMood]` 🍺 Tavern Scene
>> `BUTTON[setMysteryMood]` 🔍 Investigation
>
>> [!INFO|clean no-t]
>> ## 🏰 Environment Moods  
>> `BUTTON[setCityMood]` 🏙️ City/Urban
>> `BUTTON[setDungeonMood]` 🕳️ Dungeon Crawl
>> `BUTTON[setVictoryMood]` 🏆 Victory Theme
>> `BUTTON[setRestMood]` 😴 Long Rest

---

## 🎮 Session Music Controls

### Playback Control
`BUTTON[pauseMusic]` ⏸️ Pause | `BUTTON[resumeMusic]` ▶️ Resume | `BUTTON[authSpotify]` 🔐 Connect Spotify

### Volume Control
`BUTTON[setVolume10]` 🔇 10% | `BUTTON[setVolume25]` 🔉 25% | `BUTTON[setVolume40]` 🔊 40% | `BUTTON[setVolume60]` 📢 60%

### Current Status
**Connection**: `INPUT[text:spotifyStatus]` | **Playing**: `INPUT[text:currentTrack]` | **Volume**: `INPUT[number:currentVolume]`%

---

## 🎶 Mood Presets Library

### 🗺️ Exploration & Travel
- **Light Exploration**: Gentle ambient for overworld travel
- **Deep Wilderness**: Mysterious forest and mountain themes  
- **Ocean Voyage**: Seafaring and nautical atmospheres
- **Desert Journey**: Arid, expansive soundscapes

### ⚔️ Combat & Tension
- **Epic Battle**: Orchestral combat music for boss fights
- **Skirmish**: Mid-intensity battle themes
- **Stealth**: Tense, quiet music for sneaking
- **Chase Scene**: High-energy pursuit music

### 🏰 Location-Based
- **Medieval City**: Urban fantasy, bustling marketplace
- **Noble Court**: Elegant, political intrigue music
- **Tavern Interior**: Folk music, ambient chatter
- **Ancient Ruins**: Mysterious, archaeological atmosphere

### 🌙 Narrative Moods  
- **Romantic Scene**: Gentle, emotional background
- **Horror/Dread**: Dark ambient for scary encounters
- **Triumphant Moment**: Victory and celebration themes
- **Sad/Memorial**: Somber music for character deaths

---

## 🎵 Session Music Tracking

### Current Session Music Log
```dataviewjs
// Track music changes during current session
const today = moment().format('YYYY-MM-DD');
const currentSession = dv.pages('"1-Session Journals"')
  .where(p => p.date === today || p.file.name.includes(today))
  .first();

if (currentSession) {
  dv.paragraph(`**Current Session**: ${currentSession.file.link}`);
  
  // Would show music changes logged during session
  if (currentSession.musicLog) {
    dv.table(
      ["Time", "Mood", "Playlist", "Volume"],
      currentSession.musicLog.map(m => [m.time, m.mood, m.playlist, m.volume + "%"])
    );
  } else {
    dv.paragraph("*No music changes logged yet for this session.*");
  }
} else {
  dv.paragraph("*No active session found for today.*");
}
```

### Music History Analytics
```dataviewjs
// Show most used moods and playlists
const sessions = dv.pages('"1-Session Journals"')
  .where(p => p.musicLog)
  .sort(p => p.date, 'desc')
  .slice(0, 10);

if (sessions.length > 0) {
  dv.paragraph(`**Recent Sessions with Music** (${sessions.length})`);
  
  const moodCounts = {};
  sessions.forEach(s => {
    if (s.musicLog) {
      s.musicLog.forEach(m => {
        moodCounts[m.mood] = (moodCounts[m.mood] || 0) + 1;
      });
    }
  });
  
  const sortedMoods = Object.entries(moodCounts)
    .sort(([,a], [,b]) => b - a)
    .slice(0, 5);
    
  dv.paragraph("**Most Used Moods:**");
  sortedMoods.forEach(([mood, count]) => {
    dv.paragraph(`- **${mood}**: ${count} times`);
  });
} else {
  dv.paragraph("*No music data in recent sessions.*");
}
```

---

## ⚙️ Spotify Configuration

### Connection Status
**API Status**: ✅ Configured  
**Authentication**: 🔄 Required (Click Connect Spotify button)  
**Client ID**: Configured  
**Permissions**: Playlist control, playback control  

### Setup Instructions
1. **Connect Account**: Click "Connect Spotify" button above
2. **Authorize App**: Complete OAuth in browser window  
3. **Select Device**: Choose your preferred playback device
4. **Test Playback**: Try a mood preset to verify connection

### Advanced Settings
**Default Volume**: 25% (perfect for background ambience)  
**Fade-in Duration**: 5 seconds  
**Auto-pause on Combat**: Disabled (epic music continues!)  
**Playlist Preference**: Fantasy, ambient, orchestral genres  

---

## 🎯 Combat Music Management

### Initiative Tracker Integration
When combat starts, music automatically:
- **Switches to Combat Mood** at 40% volume
- **Logs the change** to session notes
- **Continues until** combat ends or manually changed

### Combat Music Options
- **Boss Battle**: Epic orchestral pieces for major encounters
- **Regular Combat**: Mid-intensity battle themes  
- **Stealth Combat**: Tense, quiet music for ambush scenarios
- **Victory Music**: Triumphant themes when combat ends

### Manual Combat Controls
`BUTTON[startCombatMusic]` 🗡️ Begin Combat | `BUTTON[endCombatMusic]` 🏆 Victory Music | `BUTTON[stealthCombat]` 🤫 Stealth Mode

---

## 🌟 Advanced Features

### Playlist Curation
**TTRPG-Optimized Playlists**:
- Automatically searches for fantasy and ambient genres
- Filters out vocals and jarring transitions  
- Prioritizes instrumental and atmospheric music
- Creates session-specific playlists automatically

### Smart Transitions
**Mood-Based Crossfading**:
- Smooth transitions between different atmospheric moods
- Volume automation for dramatic moments
- Automatic pausing during important dialogue
- Resume playback after dramatic pauses

### Player Integration
**Shared Atmosphere**:
- Session music logs for player reference
- Playlist sharing with your gaming group
- Mood voting system for group preferences
- Background music credits in session summaries

---

## 🎼 Custom Playlist Management

### Creating TTRPG Playlists
`BUTTON[createCustomPlaylist]` 🎵 New Campaign Playlist
`BUTTON[importExistingPlaylist]` 📥 Import from Spotify  
`BUTTON[sharePlaylist]` 📤 Share with Players

### Recommended Artists/Albums
**Epic/Orchestral**: Adrian von Ziegler, Peter Gundry, BrunuhVille  
**Ambient**: Cryo Chamber, Dark Ambient Collective, Lustmord  
**Medieval/Folk**: Damh the Bard, Blackbriar, Wardruna  
**Battle/Combat**: Two Steps From Hell, Audiomachine, Epic Score  

### Curated Mood Collections
- **🏰 Castle & Kingdom**: 45 tracks of medieval ambience
- **🌲 Wilderness Adventure**: 60 tracks of nature and exploration  
- **⚔️ Epic Battles**: 30 tracks of combat-ready orchestral music
- **🌙 Dark & Mysterious**: 50 tracks of horror and suspense

---

## 🎨 Atmosphere Enhancement Tips

### Timing Your Music
- **Session Start**: Begin with exploration mood at 20% volume
- **Dramatic Moments**: Increase volume for emphasis
- **Combat Transitions**: Switch moods BEFORE initiative, not after
- **Emotional Scenes**: Lower volume to let dialogue shine

### Volume Management
- **Background Ambience**: 15-25% (barely noticeable but effective)
- **Active Scenes**: 30-40% (present but not overwhelming)  
- **Combat**: 40-50% (energizing but allows communication)
- **Dramatic Moments**: 60%+ (full impact for climactic scenes)

### Genre Matching
- **Political Intrigue**: Classical, chamber music, courtly themes
- **Dungeon Crawling**: Dark ambient, horror, mysterious
- **Social Scenes**: Folk, tavern music, light classical
- **Epic Moments**: Full orchestral, heroic themes

---

## 📊 Music Analytics Dashboard

### Session Impact Tracking
```dataviewjs
// Analyze correlation between music usage and session ratings
const sessionsWithMusic = dv.pages('"1-Session Journals"')
  .where(p => p.musicLog && p.sessionRating)
  .sort(p => p.date, 'desc');

if (sessionsWithMusic.length >= 3) {
  const avgRating = sessionsWithMusic
    .map(p => p.sessionRating)
    .reduce((a, b) => a + b, 0) / sessionsWithMusic.length;
    
  const avgMusicChanges = sessionsWithMusic
    .map(p => p.musicLog.length)
    .reduce((a, b) => a + b, 0) / sessionsWithMusic.length;

  dv.paragraph(`**Music Impact Analysis** (${sessionsWithMusic.length} sessions)`);
  dv.paragraph(`- **Average Session Rating**: ${avgRating.toFixed(1)}/5`);
  dv.paragraph(`- **Average Music Changes**: ${avgMusicChanges.toFixed(1)} per session`);
  dv.paragraph(`- **Music Sessions**: ${Math.round((sessionsWithMusic.length/dv.pages('"1-Session Journals"').length)*100)}% of all sessions`);
} else {
  dv.paragraph("*Insufficient data for music impact analysis. Run a few more sessions!*");
}
```

### Player Feedback Integration
**Music Rating System**: Players can rate atmosphere effectiveness  
**Mood Preferences**: Track which moods your players enjoy most  
**Volume Feedback**: Optimize volume levels based on group preferences  

---

## 🎭 Roleplay Enhancement

### Character Theme Songs
Create musical signatures for important NPCs:
- **[[05_Templates/Example_Campaign/NPCs/Councillor Elara Brightwater]]**: Noble, political themes
- **[[05_Templates/Example_Campaign/NPCs/Marina Saltwhisper]]**: Sea shanties and tavern folk music
- **[[05_Templates/Example_Campaign/NPCs/Whisper Jack]]**: Mysterious, stealthy ambient tracks

### Location Soundtracks  
Assign specific playlists to major locations:
- **[[05_Templates/Example_Campaign/Locations/Shadowhaven]]**: Urban fantasy, bustling city ambience
- **The Whispering Tide Tavern**: Folk music and ambient chatter
- **Undercity**: Dark ambient, urban decay atmosphere

### Dynamic Storytelling
Use music to enhance narrative:
- **Foreshadowing**: Subtle musical hints about upcoming events
- **Emotional Resonance**: Music that reinforces character development  
- **Memory Triggers**: Consistent themes that players associate with locations/NPCs

---

## 🎪 Special Event Music

### Campaign Milestones
- **Character Deaths**: Somber, memorial themes
- **Level Ups**: Brief triumphant fanfares  
- **Major Discoveries**: Wonder and mystery themes
- **Romance Scenes**: Gentle, emotional background

### Seasonal/Holiday Themes
- **Winter Sessions**: Snow and frost atmospheric music
- **Festival Scenes**: Celebratory, folk music
- **Horror One-shots**: Full horror ambient soundscapes
- **Epic Finales**: Maximum orchestral impact

### Interactive Elements
`BUTTON[triggerFanfare]` 🎺 Victory Fanfare  
`BUTTON[ominousStinger]` 😨 Ominous Moment  
`BUTTON[mysticalChime]` ✨ Magic Discovery  
`BUTTON[heartbeatTension]` 💓 Rising Tension  

---

## 🎯 Best Practices for Session Music

### Preparation Checklist
- [ ] Test Spotify connection before session
- [ ] Prepare 3-4 playlists for expected moods
- [ ] Set initial volume to 20-25%
- [ ] Have backup playlists ready
- [ ] Know your device controls

### During Session
- [ ] Start with exploration/ambient mood
- [ ] Change music BEFORE scene transitions, not during
- [ ] Use volume to emphasize dramatic moments
- [ ] Pause for important dialogue or rules discussions
- [ ] Log significant mood changes for session notes

### Post-Session
- [ ] Note which music worked well
- [ ] Ask players for feedback on atmosphere
- [ ] Update playlists based on what you learned
- [ ] Document effective mood/scene combinations

---

*Transform your TTRPG sessions with professional-grade atmosphere control. Music isn't just background - it's an essential tool for immersion and storytelling.* 🎵✨ 