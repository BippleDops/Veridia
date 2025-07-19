---
tags:
  - discord
  - companion
  - integration
cssclasses: wide-page
---

# 🤖 Discord & Obsidian Companion Guide

Transform your TTRPG experience with seamless Discord integration and companion tools.

---

## 🎯 Overview

This guide sets up:
- **Discord Bot** for session management
- **Voice Integration** with auto-transcription
- **Player Commands** for accessing vault data
- **Session Coordination** and scheduling
- **Music Integration** with playlist sync

---

## 🤖 Discord Bot Setup

### Bot Creation

1. **Go to [Discord Developer Portal](https://discord.com/developers/applications)**
2. **Create New Application** → Name: "Campaign Assistant"
3. **Bot Section** → Create Bot
4. **Copy Token** (keep this secret!)
5. **Enable Intents:** Message Content, Server Members

### Bot Permissions

Required permissions:
- Send Messages
- Read Message History
- Use Slash Commands
- Connect to Voice Channels
- Speak in Voice Channels
- Manage Channels (for session channels)

**Invite URL:**
```
https://discord.com/api/oauth2/authorize?client_id=YOUR_BOT_ID&permissions=274881351680&scope=bot%20applications.commands
```

### Bot Code (Node.js)

**package.json:**
```json
{
  "name": "ttrpg-companion-bot",
  "version": "1.0.0",
  "main": "bot.js",
  "dependencies": {
    "discord.js": "^14.0.0",
    "node-fetch": "^3.0.0",
    "fs": "^0.0.2",
    "path": "^0.12.7"
  }
}
```

**bot.js:**
```js
const { Client, GatewayIntentBits, SlashCommandBuilder, REST, Routes } = require('discord.js');
const fetch = require('node-fetch');
const fs = require('fs');
const path = require('path');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates
  ]
});

// Configuration
const CONFIG = {
  botToken: process.env.DISCORD_BOT_TOKEN,
  guildId: process.env.GUILD_ID,
  vaultPath: process.env.VAULT_PATH || './ObsidianTTRPGVault',
  sessionChannelCategory: 'TTRPG Sessions'
};

// Slash Commands
const commands = [
  new SlashCommandBuilder()
    .setName('session')
    .setDescription('Manage campaign sessions')
    .addSubcommand(subcommand =>
      subcommand
        .setName('start')
        .setDescription('Start a new session')
        .addStringOption(option =>
          option.setName('name').setDescription('Session name').setRequired(false)
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('end')
        .setDescription('End current session')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('recap')
        .setDescription('Get session recap')
    ),
    
  new SlashCommandBuilder()
    .setName('npc')
    .setDescription('Look up NPC information')
    .addStringOption(option =>
      option.setName('name').setDescription('NPC name').setRequired(true).setAutocomplete(true)
    ),
    
  new SlashCommandBuilder()
    .setName('quest')
    .setDescription('Quest information')
    .addSubcommand(subcommand =>
      subcommand
        .setName('status')
        .setDescription('Show active quests')
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('info')
        .setDescription('Get quest details')
        .addStringOption(option =>
          option.setName('quest').setDescription('Quest name').setRequired(true).setAutocomplete(true)
        )
    ),
    
  new SlashCommandBuilder()
    .setName('roll')
    .setDescription('Roll dice or get random content')
    .addSubcommand(subcommand =>
      subcommand
        .setName('encounter')
        .setDescription('Random encounter')
        .addStringOption(option =>
          option.setName('environment').setDescription('Environment type')
          .addChoices(
            { name: 'Forest', value: 'forest' },
            { name: 'Dungeon', value: 'dungeon' },
            { name: 'Urban', value: 'urban' },
            { name: 'Wilderness', value: 'wilderness' }
          )
        )
    )
    .addSubcommand(subcommand =>
      subcommand
        .setName('loot')
        .setDescription('Generate random loot')
        .addIntegerOption(option =>
          option.setName('cr').setDescription('Challenge Rating').setRequired(true)
        )
    ),
    
  new SlashCommandBuilder()
    .setName('music')
    .setDescription('Control session music')
    .addSubcommand(subcommand =>
      subcommand
        .setName('ambient')
        .setDescription('Start ambient music')
        .addStringOption(option =>
          option.setName('type').setDescription('Ambience type')
          .addChoices(
            { name: 'Tavern', value: 'tavern' },
            { name: 'Forest', value: 'forest' },
            { name: 'Dungeon', value: 'dungeon' },
            { name: 'Combat', value: 'combat' }
          )
        )
    )
    .addSubcommand(subcommand =>
      subcommand.setName('stop').setDescription('Stop music')
    )
];

// Register commands
const rest = new REST({ version: '10' }).setToken(CONFIG.botToken);

(async () => {
  try {
    console.log('Registering slash commands...');
    await rest.put(
      Routes.applicationGuildCommands(client.user.id, CONFIG.guildId),
      { body: commands }
    );
    console.log('Successfully registered commands');
  } catch (error) {
    console.error(error);
  }
})();

// Utility Functions
const readVaultFile = (filePath) => {
  try {
    const fullPath = path.join(CONFIG.vaultPath, filePath);
    return fs.readFileSync(fullPath, 'utf8');
  } catch (error) {
    return null;
  }
};

const writeVaultFile = (filePath, content) => {
  try {
    const fullPath = path.join(CONFIG.vaultPath, filePath);
    fs.writeFileSync(fullPath, content, 'utf8');
    return true;
  } catch (error) {
    return false;
  }
};

const findNPCs = () => {
  const npcDir = path.join(CONFIG.vaultPath, '2-World', 'People');
  try {
    return fs.readdirSync(npcDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    return [];
  }
};

const findQuests = () => {
  const questDir = path.join(CONFIG.vaultPath, '2-World', 'Quests');
  try {
    return fs.readdirSync(questDir)
      .filter(file => file.endsWith('.md'))
      .map(file => file.replace('.md', ''));
  } catch (error) {
    return [];
  }
};

// Bot Event Handlers
client.on('ready', () => {
  console.log(`${client.user.tag} is online!`);
  client.user.setActivity('Managing campaigns', { type: 'WATCHING' });
});

client.on('interactionCreate', async interaction => {
  if (!interaction.isChatInputCommand()) return;

  const { commandName, options } = interaction;

  try {
    switch (commandName) {
      case 'session':
        await handleSessionCommand(interaction, options);
        break;
      case 'npc':
        await handleNPCCommand(interaction, options);
        break;
      case 'quest':
        await handleQuestCommand(interaction, options);
        break;
      case 'roll':
        await handleRollCommand(interaction, options);
        break;
      case 'music':
        await handleMusicCommand(interaction, options);
        break;
    }
  } catch (error) {
    console.error(error);
    await interaction.reply({ content: 'An error occurred!', ephemeral: true });
  }
});

// Autocomplete for NPC and Quest names
client.on('interactionCreate', async interaction => {
  if (!interaction.isAutocomplete()) return;

  const { commandName, options } = interaction;
  const focusedOption = options.getFocused(true);

  let choices = [];

  if (commandName === 'npc' && focusedOption.name === 'name') {
    const npcs = findNPCs();
    choices = npcs
      .filter(npc => npc.toLowerCase().includes(focusedOption.value.toLowerCase()))
      .slice(0, 25)
      .map(npc => ({ name: npc, value: npc }));
  }

  if (commandName === 'quest' && focusedOption.name === 'quest') {
    const quests = findQuests();
    choices = quests
      .filter(quest => quest.toLowerCase().includes(focusedOption.value.toLowerCase()))
      .slice(0, 25)
      .map(quest => ({ name: quest, value: quest }));
  }

  await interaction.respond(choices);
});

// Command Handlers
async function handleSessionCommand(interaction, options) {
  const subcommand = options.getSubcommand();

  switch (subcommand) {
    case 'start':
      const sessionName = options.getString('name') || `Session ${Date.now()}`;
      
      // Create voice channel for session
      const guild = interaction.guild;
      const category = guild.channels.cache.find(c => c.name === CONFIG.sessionChannelCategory && c.type === 'GUILD_CATEGORY');
      
      const voiceChannel = await guild.channels.create({
        name: sessionName,
        type: 'GUILD_VOICE',
        parent: category?.id
      });

      // Create session note in vault
      const sessionDate = new Date().toISOString().split('T')[0];
      const sessionContent = `---
tags: [session]
date: ${sessionDate}
players: []
discord_channel: ${voiceChannel.id}
---

# ${sessionName}

Session started at: ${new Date().toLocaleString()}

## Players Present
- 

## Key Events
- 

## NPCs Met
- 

## Loot Found
- 

## Next Session Prep
- 
`;

      const sessionPath = `1-Session Journals/${sessionName}.md`;
      if (writeVaultFile(sessionPath, sessionContent)) {
        await interaction.reply(`🎲 **${sessionName}** started!\n🔊 Voice channel: ${voiceChannel}\n📝 Session note created`);
      } else {
        await interaction.reply('Session started but note creation failed!');
      }
      break;

    case 'end':
      // Logic to end session
      await interaction.reply('🏁 Session ended! Notes saved to vault.');
      break;

    case 'recap':
      // Get last session recap
      const recap = "Previous session recap would go here...";
      await interaction.reply(`📖 **Last Session Recap:**\n${recap}`);
      break;
  }
}

async function handleNPCCommand(interaction, options) {
  const npcName = options.getString('name');
  const npcPath = `2-World/People/${npcName}.md`;
  const npcContent = readVaultFile(npcPath);

  if (!npcContent) {
    await interaction.reply(`❌ NPC "${npcName}" not found!`);
    return;
  }

  // Parse NPC data from markdown
  const frontmatterMatch = npcContent.match(/^---\n([\s\S]*?)\n---/);
  if (frontmatterMatch) {
    const yaml = require('js-yaml');
    const frontmatter = yaml.load(frontmatterMatch[1]);

    const embed = {
      title: npcName,
      color: 0x5865F2,
      fields: [
        { name: 'Occupation', value: frontmatter.occupation || 'Unknown', inline: true },
        { name: 'Location', value: frontmatter.location || 'Unknown', inline: true },
        { name: 'Status', value: frontmatter.status || 'Active', inline: true },
        { name: 'Relationship', value: frontmatter.relationship || 'Neutral', inline: true }
      ]
    };

    if (frontmatter.motivation) {
      embed.fields.push({ name: 'Motivation', value: frontmatter.motivation, inline: false });
    }

    await interaction.reply({ embeds: [embed] });
  } else {
    await interaction.reply(`📋 **${npcName}**\nNo detailed information available.`);
  }
}

async function handleQuestCommand(interaction, options) {
  const subcommand = options.getSubcommand();

  switch (subcommand) {
    case 'status':
      const questsDir = path.join(CONFIG.vaultPath, '2-World', 'Quests');
      const activeQuests = [];

      try {
        const questFiles = fs.readdirSync(questsDir).filter(f => f.endsWith('.md'));
        
        for (const file of questFiles) {
          const content = fs.readFileSync(path.join(questsDir, file), 'utf8');
          const frontmatterMatch = content.match(/^---\n([\s\S]*?)\n---/);
          
          if (frontmatterMatch) {
            const yaml = require('js-yaml');
            const fm = yaml.load(frontmatterMatch[1]);
            
            if (fm.quest_status === 'active') {
              activeQuests.push({
                name: file.replace('.md', ''),
                priority: fm.quest_priority || 'normal',
                progress: fm.quest_progress || 0
              });
            }
          }
        }

        if (activeQuests.length > 0) {
          const questList = activeQuests
            .map(q => `📋 **${q.name}** - ${q.priority} priority (${q.progress}% complete)`)
            .join('\n');
          
          await interaction.reply(`🎯 **Active Quests:**\n${questList}`);
        } else {
          await interaction.reply('📭 No active quests found!');
        }
      } catch (error) {
        await interaction.reply('❌ Error reading quest data!');
      }
      break;

    case 'info':
      const questName = options.getString('quest');
      const questPath = `2-World/Quests/${questName}.md`;
      const questContent = readVaultFile(questPath);

      if (!questContent) {
        await interaction.reply(`❌ Quest "${questName}" not found!`);
        return;
      }

      await interaction.reply(`📜 **${questName}**\nQuest details from vault...`);
      break;
  }
}

async function handleRollCommand(interaction, options) {
  const subcommand = options.getSubcommand();

  switch (subcommand) {
    case 'encounter':
      const environment = options.getString('environment') || 'forest';
      const encounters = {
        forest: ['Pack of Wolves', 'Owlbear', 'Bandit Ambush', 'Lost Traveler'],
        dungeon: ['Skeleton Guards', 'Gelatinous Cube', 'Trap Room', 'Treasure Chest'],
        urban: ['Pickpocket', 'Noble Escort', 'Street Fight', 'Merchant Problem'],
        wilderness: ['Giant Spider', 'Weather Event', 'Ancient Ruins', 'Wild Magic Zone']
      };

      const encounterList = encounters[environment] || encounters.forest;
      const randomEncounter = encounterList[Math.floor(Math.random() * encounterList.length)];

      await interaction.reply(`🎲 **Random ${environment} encounter:**\n${randomEncounter}`);
      break;

    case 'loot':
      const cr = options.getInteger('cr');
      const lootTables = {
        low: ['10 gold pieces', 'Potion of Healing', 'Silver ring'],
        medium: ['50 gold pieces', 'Magic weapon +1', 'Scroll of Fireball'],
        high: ['200 gold pieces', 'Rare magic item', 'Bag of Holding']
      };

      const tier = cr < 5 ? 'low' : cr < 15 ? 'medium' : 'high';
      const loot = lootTables[tier][Math.floor(Math.random() * lootTables[tier].length)];

      await interaction.reply(`💎 **Loot (CR ${cr}):**\n${loot}`);
      break;
  }
}

async function handleMusicCommand(interaction, options) {
  const subcommand = options.getSubcommand();

  switch (subcommand) {
    case 'ambient':
      const musicType = options.getString('type') || 'tavern';
      
      // This would integrate with music bot or Spotify
      const playlists = {
        tavern: 'Medieval Tavern Ambience',
        forest: 'Forest Sounds & Music',
        dungeon: 'Dark Dungeon Ambience',
        combat: 'Epic Battle Music'
      };

      await interaction.reply(`🎵 Now playing: **${playlists[musicType]}**`);
      break;

    case 'stop':
      await interaction.reply('🔇 Music stopped.');
      break;
  }
}

// Voice Channel Events
client.on('voiceStateUpdate', async (oldState, newState) => {
  // Track player joins/leaves for session attendance
  if (newState.channelId && newState.channel?.name.startsWith('Session')) {
    console.log(`${newState.member.displayName} joined ${newState.channel.name}`);
    
    // Update session note with attendance
    // Implementation would go here
  }
});

// Start the bot
client.login(CONFIG.botToken);
```

---

## 🎤 Voice Integration

### Auto-Transcription Setup

**Using Discord.js Voice:**
```js
const { joinVoiceChannel, createAudioReceiver } = require('@discordjs/voice');
const speech = require('@google-cloud/speech');

// Voice recording handler
client.on('voiceStateUpdate', async (oldState, newState) => {
  if (newState.channelId && newState.channel?.name.startsWith('Session')) {
    const connection = joinVoiceChannel({
      channelId: newState.channelId,
      guildId: newState.guild.id,
      adapterCreator: newState.guild.voiceAdapterCreator,
    });

    const receiver = connection.receiver;
    
    receiver.speaking.on('start', (userId) => {
      const user = client.users.cache.get(userId);
      const audioStream = receiver.subscribe(userId);
      
      // Transcribe to text and save to session notes
      transcribeAudio(audioStream, user.username);
    });
  }
});

async function transcribeAudio(audioStream, speaker) {
  const client = new speech.SpeechClient();
  
  const request = {
    config: {
      encoding: 'OGG_OPUS',
      sampleRateHertz: 48000,
      languageCode: 'en-US',
    },
    interimResults: false,
  };

  const recognizeStream = client
    .streamingRecognize(request)
    .on('data', data => {
      const transcription = data.results[0]?.alternatives[0]?.transcript;
      if (transcription) {
        // Add to session notes
        appendToSessionNotes(`**${speaker}:** ${transcription}\n`);
      }
    });

  audioStream.pipe(recognizeStream);
}
```

### Session Recording

**Automatic Session Notes:**
```js
class SessionRecorder {
  constructor() {
    this.currentSession = null;
    this.sessionNotes = [];
    this.participants = new Set();
  }

  startRecording(channelId, sessionName) {
    this.currentSession = {
      name: sessionName,
      channelId: channelId,
      startTime: new Date(),
      notes: [],
      participants: new Set()
    };
  }

  addNote(speaker, content, timestamp = new Date()) {
    if (!this.currentSession) return;

    this.currentSession.notes.push({
      timestamp,
      speaker,
      content,
      type: 'speech'
    });

    this.currentSession.participants.add(speaker);
  }

  addAction(action, timestamp = new Date()) {
    if (!this.currentSession) return;

    this.currentSession.notes.push({
      timestamp,
      content: action,
      type: 'action'
    });
  }

  endRecording() {
    if (!this.currentSession) return null;

    const session = this.currentSession;
    this.currentSession = null;

    // Generate session notes
    return this.generateSessionNotes(session);
  }

  generateSessionNotes(session) {
    const duration = (new Date() - session.startTime) / (1000 * 60); // minutes
    
    let notes = `---
tags: [session]
date: ${session.startTime.toISOString().split('T')[0]}
duration: ${Math.round(duration)} minutes
participants: [${Array.from(session.participants).join(', ')}]
auto_generated: true
---

# ${session.name}

**Duration:** ${Math.round(duration)} minutes
**Participants:** ${Array.from(session.participants).join(', ')}

## Session Log

`;

    session.notes.forEach(note => {
      const time = note.timestamp.toLocaleTimeString();
      if (note.type === 'speech') {
        notes += `**[${time}] ${note.speaker}:** ${note.content}\n\n`;
      } else {
        notes += `**[${time}]** *${note.content}*\n\n`;
      }
    });

    // Save to vault
    const filename = `${session.name}-${session.startTime.toISOString().split('T')[0]}.md`;
    writeVaultFile(`1-Session Journals/${filename}`, notes);

    return notes;
  }
}

const recorder = new SessionRecorder();
```

---

## 🎵 Music Integration

### Spotify Bot Integration

**Music Commands:**
```js
const SpotifyWebApi = require('spotify-web-api-node');

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI
});

// Set access token (get through OAuth flow)
spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);

async function playSessionPlaylist(sessionType) {
  const playlists = {
    'tavern': '37i9dQZF1DX0Uufy7B7q8u', // Example playlist ID
    'combat': '37i9dQZF1DX3Sp5jK4E6XD',
    'exploration': '37i9dQZF1DX1s9knjP51Oa',
    'social': '37i9dQZF1DX0XUsuxWHRQd'
  };

  const playlistId = playlists[sessionType];
  if (playlistId) {
    try {
      await spotifyApi.play({
        context_uri: `spotify:playlist:${playlistId}`
      });
      return `🎵 Playing ${sessionType} playlist`;
    } catch (error) {
      return `❌ Failed to play playlist: ${error.message}`;
    }
  }
  return `❌ Unknown session type: ${sessionType}`;
}

// Discord command
async function handleMusicCommand(interaction, options) {
  const subcommand = options.getSubcommand();
  const type = options.getString('type');

  switch (subcommand) {
    case 'play':
      const result = await playSessionPlaylist(type);
      await interaction.reply(result);
      break;
      
    case 'pause':
      await spotifyApi.pause();
      await interaction.reply('⏸️ Music paused');
      break;
      
    case 'skip':
      await spotifyApi.skipToNext();
      await interaction.reply('⏭️ Skipped track');
      break;
  }
}
```

### Ambient Sound Management

**Environment-Based Audio:**
```js
const ambientSounds = {
  tavern: {
    base: 'https://www.youtube.com/watch?v=tavern_ambient',
    volume: 0.3,
    loop: true
  },
  forest: {
    base: 'https://www.youtube.com/watch?v=forest_ambient',
    volume: 0.4,
    weather: {
      rain: 'https://www.youtube.com/watch?v=forest_rain',
      storm: 'https://www.youtube.com/watch?v=forest_storm'
    }
  },
  dungeon: {
    base: 'https://www.youtube.com/watch?v=dungeon_ambient',
    volume: 0.2,
    intensity: {
      low: 'https://www.youtube.com/watch?v=dungeon_quiet',
      high: 'https://www.youtube.com/watch?v=dungeon_tense'
    }
  }
};

async function setAmbience(location, modifiers = {}) {
  const config = ambientSounds[location];
  if (!config) return false;

  let soundUrl = config.base;
  
  // Apply modifiers
  if (modifiers.weather && config.weather) {
    soundUrl = config.weather[modifiers.weather];
  }
  
  if (modifiers.intensity && config.intensity) {
    soundUrl = config.intensity[modifiers.intensity];
  }

  // Play sound (implementation depends on your audio system)
  return await playAudio(soundUrl, config.volume);
}
```

---

## 🗓️ Session Coordination

### Scheduling Integration

**Calendar Sync:**
```js
const { google } = require('googleapis');

class SessionScheduler {
  constructor() {
    this.calendar = google.calendar({ version: 'v3' });
  }

  async scheduleSession(sessionName, dateTime, players) {
    const event = {
      summary: `TTRPG Session: ${sessionName}`,
      description: `Players: ${players.join(', ')}`,
      start: {
        dateTime: dateTime,
        timeZone: 'America/New_York',
      },
      end: {
        dateTime: new Date(new Date(dateTime).getTime() + 4 * 60 * 60 * 1000), // 4 hours
        timeZone: 'America/New_York',
      },
      attendees: players.map(player => ({ email: player.email })),
    };

    try {
      const response = await this.calendar.events.insert({
        calendarId: 'primary',
        resource: event,
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to schedule session: ${error.message}`);
    }
  }

  async getUpcomingSessions() {
    try {
      const response = await this.calendar.events.list({
        calendarId: 'primary',
        timeMin: new Date().toISOString(),
        maxResults: 10,
        singleEvents: true,
        orderBy: 'startTime',
        q: 'TTRPG Session'
      });

      return response.data.items;
    } catch (error) {
      throw new Error(`Failed to get sessions: ${error.message}`);
    }
  }
}
```

### Player Availability

**Availability Tracking:**
```js
// Discord slash command for availability
const availabilityCommand = new SlashCommandBuilder()
  .setName('availability')
  .setDescription('Manage session availability')
  .addSubcommand(subcommand =>
    subcommand
      .setName('set')
      .setDescription('Set your availability')
      .addStringOption(option =>
        option
          .setName('days')
          .setDescription('Available days')
          .setRequired(true)
          .addChoices(
            { name: 'Monday', value: 'monday' },
            { name: 'Tuesday', value: 'tuesday' },
            { name: 'Wednesday', value: 'wednesday' },
            { name: 'Thursday', value: 'thursday' },
            { name: 'Friday', value: 'friday' },
            { name: 'Saturday', value: 'saturday' },
            { name: 'Sunday', value: 'sunday' }
          )
      )
  )
  .addSubcommand(subcommand =>
    subcommand.setName('check').setDescription('Check group availability')
  );

async function handleAvailabilityCommand(interaction, options) {
  const subcommand = options.getSubcommand();

  switch (subcommand) {
    case 'set':
      const days = options.getString('days');
      // Store in database or vault
      await interaction.reply(`✅ Availability set for ${days}`);
      break;

    case 'check':
      // Calculate best session times
      const bestTimes = await calculateBestSessionTimes();
      await interaction.reply(`📅 **Best session times:**\n${bestTimes}`);
      break;
  }
}
```

---

## 🚀 Deployment

### Docker Setup

**Dockerfile:**
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

# Create volume mount for vault
VOLUME ["/app/vault"]

ENV NODE_ENV=production
ENV VAULT_PATH=/app/vault

EXPOSE 3000

CMD ["node", "bot.js"]
```

**docker-compose.yml:**
```yaml
version: '3.8'

services:
  ttrpg-bot:
    build: .
    environment:
      - DISCORD_BOT_TOKEN=${DISCORD_BOT_TOKEN}
      - GUILD_ID=${GUILD_ID}
      - VAULT_PATH=/app/vault
      - SPOTIFY_CLIENT_ID=${SPOTIFY_CLIENT_ID}
      - SPOTIFY_CLIENT_SECRET=${SPOTIFY_CLIENT_SECRET}
    volumes:
      - ./ObsidianTTRPGVault:/app/vault:ro
    restart: unless-stopped
```

### Obsidian Sync

**Live Sync Integration:**
```js
const chokidar = require('chokidar');

// Watch vault for changes
const watcher = chokidar.watch(CONFIG.vaultPath, {
  ignored: /[\/\\]\./,
  persistent: true
});

watcher
  .on('change', path => {
    console.log('File changed:', path);
    // Notify Discord channels of updates
    notifyFileChange(path);
  })
  .on('add', path => {
    console.log('File added:', path);
    // Handle new notes
  });

async function notifyFileChange(filePath) {
  // Send notification to appropriate Discord channel
  const channel = client.channels.cache.get(UPDATES_CHANNEL_ID);
  if (channel) {
    await channel.send(`📝 Vault updated: \`${path.basename(filePath)}\``);
  }
}
```

---

## 🔧 Configuration

### Environment Variables

```bash
# Discord
DISCORD_BOT_TOKEN=your_bot_token
GUILD_ID=your_server_id

# Paths
VAULT_PATH=./ObsidianTTRPGVault
UPDATES_CHANNEL_ID=your_updates_channel_id

# Spotify (optional)
SPOTIFY_CLIENT_ID=your_spotify_id
SPOTIFY_CLIENT_SECRET=your_spotify_secret

# Google Calendar (optional)
GOOGLE_CALENDAR_CREDENTIALS=path_to_credentials.json
```

### Bot Permissions Setup

1. **Server Setup** → Create categories: "TTRPG Sessions", "Bot Commands"
2. **Role Configuration** → Create "Player" role for command access
3. **Channel Permissions** → Bot can manage session channels
4. **Voice Permissions** → Bot can join/record voice channels

---

## 📱 Mobile Companion

### Discord Mobile App

**Quick Commands:**
- `/npc [name]` - Quick NPC lookup
- `/quest status` - Active quest overview  
- `/roll encounter` - Random encounter
- `/music ambient [type]` - Set session mood

### Obsidian Mobile Sync

**Remote Access:**
```js
// Express.js API for mobile access
const express = require('express');
const app = express();

app.get('/api/npc/:name', (req, res) => {
  const npcData = readVaultFile(`2-World/People/${req.params.name}.md`);
  res.json({ data: npcData });
});

app.get('/api/sessions/current', (req, res) => {
  // Return current session data
});

app.listen(3000, () => {
  console.log('Mobile API running on port 3000');
});
```

---

## 🎯 Quick Setup Checklist

- [ ] **Create Discord Bot** and get token
- [ ] **Install Node.js** and dependencies
- [ ] **Configure environment** variables
- [ ] **Test bot commands** in Discord
- [ ] **Set up voice recording** (optional)
- [ ] **Configure music integration** (optional)
- [ ] **Deploy bot** to server/cloud
- [ ] **Train players** on commands

---

*Happy gaming! Your Discord server is now a powerful extension of your Obsidian TTRPG vault!* 🎲 