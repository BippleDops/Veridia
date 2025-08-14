# CORDELIA VAULT - VIDEO TUTORIAL SCRIPTS

**Version**: 1.0 | **Updated**: August 13, 2025  
**Purpose**: Scripts for creating video tutorials covering essential vault workflows  
**Target Audience**: Visual learners, new users, training materials

---

## 📋 TUTORIAL OVERVIEW

### Tutorial Series Structure

**Foundation Series** (4 videos, ~60 minutes total):
1. **Vault Setup & First Steps** (15 minutes)
2. **Navigation & Basic Usage** (15 minutes)  
3. **Content Creation Workflow** (15 minutes)
4. **Session Management Basics** (15 minutes)

**Advanced Series** (6 videos, ~90 minutes total):
5. **Automation Systems Overview** (15 minutes)
6. **Campaign Management Tools** (15 minutes)
7. **Content Generation & AI Integration** (15 minutes)
8. **Quality Assurance & Maintenance** (15 minutes)
9. **Customization & Advanced Features** (15 minutes)
10. **Troubleshooting & Recovery** (15 minutes)

**Production Notes**:
- **Screen Resolution**: 1920x1080 minimum
- **Recording Software**: OBS Studio or similar
- **Audio Quality**: Clear narration with minimal background noise
- **Pacing**: Allow pauses for viewer processing
- **Visual Aids**: Highlight cursor movements, zoom for detail shots

---

## 🎬 TUTORIAL 1: VAULT SETUP & FIRST STEPS

**Duration**: 15 minutes  
**Audience**: Complete beginners  
**Prerequisites**: Obsidian installed

### Script

**[00:00 - 01:30] Introduction**

*"Welcome to the Cordelia Vault tutorial series. I'm going to show you how to set up and use this comprehensive campaign management system for tabletop RPGs. The Cordelia Vault transforms Obsidian into an intelligent campaign companion that helps you create, organize, and run memorable adventures in the dual realms of Aquabyssos and Aethermoor.*

*In this first tutorial, we'll cover initial setup, explore the vault structure, and create your first piece of content. By the end, you'll have a working vault and understand the basic workflow.*

*Let's begin."*

**[01:30 - 03:00] Prerequisites Check**

*"First, let's make sure you have everything you need. You should have Obsidian installed - if not, pause here and download it from obsidian.md.*

*[Show Obsidian download page]*

*You'll also want to make sure you have Python 3.9 or later installed for the automation features. We'll check this in the terminal.*

*[Open terminal, show `python3 --version`]*

*Great! Now let's download or clone the Cordelia Vault to your computer."*

**[03:00 - 05:30] Opening the Vault**

*"Now I'll open the Cordelia Vault in Obsidian. Go to File > Open Vault, then navigate to where you downloaded the vault and select it.*

*[Demonstrate opening vault in Obsidian]*

*When you first open the vault, you'll see this welcome structure. Don't worry if it seems overwhelming - we'll explore it step by step.*

*The first thing I recommend is enabling a few essential plugins. Go to Settings > Community Plugins, and make sure these are enabled: Dataview, Templater, and Canvas. These power many of the vault's advanced features.*

*[Show enabling plugins]*"

**[05:30 - 08:00] Vault Structure Tour**

*"Let's take a quick tour of the vault structure. Think of this as exploring a well-organized library.*

*[Navigate through folders, highlighting each]*

*- **01_Adventures** contains your campaign sessions and story arcs
- **02_Worldbuilding** is where all your NPCs, locations, and lore live  
- **03_Mechanics** holds game rules and random generators
- **04_Resources** contains images, maps, and handouts
- **05_Templates** provides shortcuts for creating new content
- **06_GM_Resources** has your campaign management tools
- **07_Player_Resources** contains player-facing materials*

*The beauty of this organization is that everything has a logical place, but it's all connected through Obsidian's linking system."*

**[08:00 - 11:00] Essential Files Overview**

*"Let's look at the most important files you'll use regularly.*

*[Open Master Campaign Index.md]*

*This is your campaign command center - the Master Campaign Index. Think of it as mission control for your entire campaign. It shows active sessions, important NPCs, current quests, and timeline position.*

*[Open GM Quick Reference]*

*The GM Quick Reference is your cheat sheet during sessions. It has everything you might need in a hurry - NPCs, mechanics, quick generation commands.*

*[Open Timeline Tracker]*

*The Campaign Timeline Tracker helps you keep events in chronological order and track how your campaign world evolves over time."*

**[11:00 - 13:30] Creating Your First Content**

*"Now let's create your first piece of content. I'll show you how to create a simple NPC.*

*[Navigate to 02_Worldbuilding/People]*

*Right-click in this folder and select 'New Note'. I'll call this one 'Captain Marina Tidecaller'.*

*[Create new note]*

*Now I'll use one of the templates to get started quickly. Press Ctrl+T (or Cmd+T on Mac) to open the Templater menu, then select 'NPC Template'.*

*[Demonstrate template insertion]*

*Look how much structure this gives us immediately! Now I just need to fill in the details. The template provides sections for personality, relationships, location, and campaign relevance.*

*[Fill in a few basic details]*

*Notice how I can link to other content by typing double brackets - [[Crystal Palace]] - and Obsidian will either link to an existing note or create a new one."*

**[13:30 - 15:00] Next Steps & Wrap-up**

*"That's your first taste of the Cordelia Vault! You've learned to navigate the structure, use templates, and create linked content.*

*In the next tutorial, we'll explore navigation techniques, searching, and how to use the graph view to see your content connections.*

*Before we finish, let me show you one quick automation feature. Open your terminal and navigate to the vault directory, then run:*

*[Show command]: `python scripts/content_validator.py --vault-path . report`*

*This validates your vault and catches any issues. The automation systems are one of Cordelia's most powerful features - we'll dive deeper in later tutorials.*

*Thanks for watching, and I'll see you in the next video where we'll explore navigation and discovery techniques!"*

---

## 🎬 TUTORIAL 2: NAVIGATION & BASIC USAGE

**Duration**: 15 minutes  
**Audience**: Beginners who completed Tutorial 1  
**Prerequisites**: Vault opened in Obsidian

### Script

**[00:00 - 01:00] Introduction & Recap**

*"Welcome back to the Cordelia Vault tutorials! In the last video, we set up the vault and created our first NPC. Today we'll learn how to navigate efficiently and discover connections in your content.*

*Navigation is crucial for running smooth sessions - you need to find information quickly without breaking the flow of the game."*

**[01:00 - 04:00] Quick Navigation Techniques**

*"Let's start with the fastest way to find anything in your vault - the Quick Switcher.*

*[Press Ctrl+O]*

*Type any part of a file name and Obsidian will find it instantly. Watch - I'll type 'marina' and it finds our NPC immediately.*

*[Demonstrate Quick Switcher]*

*For searching inside files, use the global search.*

*[Press Ctrl+Shift+F]*

*This searches the content of all files. I'll search for 'crystal' and see all mentions across the vault.*

*[Demonstrate global search]*

*The search results show not just where terms appear, but the context around them. This is incredibly useful during sessions when players ask about something and you need to find it quickly."*

**[04:00 - 07:00] Understanding Links & Connections**

*"The real power of Obsidian comes from linking content together. Let's explore how this works.*

*[Open an NPC file with multiple links]*

*See all these blue links? Each one connects to another piece of content. When I click on [[Crystal Palace]], it takes me directly to that location.*

*[Demonstrate following links]*

*But here's where it gets interesting - press Ctrl+G to open the Graph view.*

*[Open Graph view]*

*This shows all your content as a network of connected ideas. Each dot is a file, each line is a connection. You can see clusters forming around major topics.*

*[Explore graph, zoom in/out, highlight nodes]*

*This visual representation helps you spot gaps in your content and see unexpected connections."*

**[07:00 - 10:00] Using Tags for Organization**

*"Tags provide another way to organize and find content. Let's look at how they work.*

*[Open a file with tags, show frontmatter]*

*In the frontmatter, you can see tags like #npc, #aquabyssos, #government. These create automatic categories.*

*Click on any tag to see all content with that tag. I'll click #aquabyssos to see everything related to that realm.*

*[Demonstrate tag navigation]*

*You can also use the tag pane to see your entire tag hierarchy.*

*[Show tag pane]*

*This gives you a bird's-eye view of your campaign's organization. During sessions, you can quickly find all NPCs in a particular location or all items of a certain type."*

**[10:00 - 13:00] Discovery Features**

*"Sometimes you don't know exactly what you're looking for. Obsidian has several discovery features.*

*The Random Note feature is great when you need inspiration.*

*[Use random note command]*

*The Local Graph shows connections around a specific note.*

*[Open local graph for a note]*

*This helps you understand how one piece of content relates to everything else. Perfect for understanding NPC relationships or location connections.*

*The Backlinks panel shows what links TO the current note.*

*[Show backlinks panel]*

*This reverse lookup helps you understand the full context of any content piece."*

**[13:00 - 15:00] Workflow Integration & Wrap-up**

*"Let me show you how this all comes together in a typical session workflow.*

*[Simulate session scenario]*

*Players want to meet with a government official. I use Quick Switcher to find the Parliament, check the Local Graph to see related NPCs, then use tags to find all #government characters in the area.*

*[Demonstrate this workflow]*

*In just seconds, I have multiple options and can pick the most interesting one for the story.*

*This kind of fluid navigation keeps your sessions moving smoothly and helps you create those spontaneous moments that make campaigns memorable.*

*Next time, we'll dive into content creation workflows and how to use templates effectively. See you then!"*

---

## 🎬 TUTORIAL 3: CONTENT CREATION WORKFLOW

**Duration**: 15 minutes  
**Audience**: Users familiar with navigation  
**Prerequisites**: Completed Tutorials 1-2

### Script

**[00:00 - 01:00] Introduction**

*"Welcome back! Today we're diving into content creation - the heart of building your campaign world. I'll show you efficient workflows for creating NPCs, locations, factions, and adventures using the Cordelia Vault's template system.*

*By the end of this tutorial, you'll be able to quickly create rich, interconnected content that brings your campaign to life."*

**[01:00 - 04:00] Template System Overview**

*"Let's start with the template system. Navigate to the 05_Templates folder.*

*[Show templates folder structure]*

*The vault includes templates for every type of content you'll need:
- NPC templates for different character types
- Location templates for various environments  
- Faction templates for organizations
- Adventure templates for sessions and campaigns*

*Let's create a new location using a template. I'll make a tavern in the Aquabyssos merchant district.*

*[Navigate to Places folder, create new note]*

*I'll name this 'The Drowning Scholar Tavern'. Now I'll insert a template using Ctrl+T.*

*[Use Templater to insert location template]*

*Look at all the structure this provides immediately!"*

**[04:00 - 07:00] Creating Rich Content**

*"Now I'll show you how to fill out this template to create compelling content.*

*[Fill out template sections while explaining]*

*For the overview, I want this to be a gathering place for intellectuals and information brokers. The physical description needs sensory details - what do characters see, hear, smell?*

*'The Drowning Scholar sits in a renovated coral formation, its curved walls lined with pressure-sealed bookcases. The gentle sound of water circulation creates a scholarly atmosphere, while the scent of sea-kelp tea mingles with old parchment.'*

*The key is to include details that help players visualize the space and give you roleplay hooks."*

**[07:00 - 10:00] Creating Connections**

*"The magic happens when we link this new content to existing content. Watch how I'll connect this tavern to the larger world.*

*[Create links while explaining]*

*I'll link to [[Merchant Quarter]] for the location, [[Scholar's Guild]] as the primary clientele, and [[Information Broker Selan]] as a regular customer.*

*When I create these links, Obsidian automatically creates the connection. If the target doesn't exist yet, it shows as a red link - that's a placeholder I can fill in later.*

*[Show how red links work]*

*This linking strategy creates a web of connections that makes your world feel alive and interconnected."*

**[10:00 - 13:00] NPC Creation Workflow**

*"Let's create an NPC to run this tavern. I'll show you a complete NPC creation workflow.*

*[Create new NPC file]*

*I'll call her 'Nerida Scrollheart' and use the detailed NPC template.*

*[Insert template and fill out]*

*For personality, I want her to be curious and well-informed, but also protective of her customers' privacy. Her motivation is gathering and preserving knowledge.*

*The relationship section is crucial - I'll connect her to the Scholar's Guild, make her neutral toward the government, and give her a personal connection to an important quest giver.*

*[Create relationships and explain each]*

*Notice how I'm not just creating a static character, but someone who fits into the world's politics and relationships."*

**[13:00 - 15:00] Quality Control & Next Steps**

*"Before finishing, let's run a quick quality check using the vault's automation.*

*[Open terminal, run validation]*

*`python scripts/content_validator.py --vault-path . --target-file "02_Worldbuilding/Places/The Drowning Scholar Tavern.md" report`*

*This checks our new content for proper formatting, metadata, and suggests improvements.*

*[Show validation results]*

*Excellent - no issues found. The validator confirms our content follows vault standards.*

*We've created a rich location and connected NPC in just a few minutes using templates and linking strategies. Next tutorial, we'll explore session management and how to use this content during actual play.*

*The key takeaway is this: use templates for structure, focus on sensory details and relationships, and always link to the broader world. This approach creates content that enhances your campaign rather than just filling space."*

---

## 🎬 TUTORIAL 4: SESSION MANAGEMENT BASICS

**Duration**: 15 minutes  
**Audience**: GMs ready to use the vault in play  
**Prerequisites**: Familiarity with content creation

### Script

**[00:00 - 01:00] Introduction**

*"Welcome to session management with the Cordelia Vault! This is where everything we've learned comes together for actual gameplay. I'll show you how to prepare for sessions efficiently, manage information during play, and process what happens afterward.*

*Good session management means more time for storytelling and less time shuffling through notes."*

**[01:00 - 04:00] Pre-Session Workflow**

*"Let's walk through preparing for a session. I'll use the session prep template from the GM Resources.*

*[Open Campaign Timeline Tracker]*

*First, I check the timeline to see what's happening in the world. We're currently on Day 15 of Month 3, and there's a Parliament emergency session scheduled for Day 18. Perfect - that creates urgency.*

*[Open Faction Network Tracker]*

*Next, I check faction relationships. The Shadow Conspiracy tension with Parliament is at 'Hostile (2)' - that means active conflict.*

*[Create new session file]*

*Now I'll create the session file using the session planning template.*

*[Use template, fill out preparation sections]*

*The template prompts me to consider:
- Where we left off last session
- What the PCs are likely to do
- Which NPCs they might encounter
- What locations might be important
- Potential complications or opportunities*

*This takes about 10 minutes but saves hours during the session."*

**[04:00 - 07:00] During Session Management**

*"During the session, the vault becomes your command center. Let me show you how to manage information flow.*

*[Demonstrate live session workflow]*

*I keep several files pinned in tabs:
- The current session notes for tracking what happens
- GM Quick Reference for fast lookups
- Master Campaign Index for overall context*

*When players want to visit an NPC I haven't prepared, I use the Quick Switcher to find them instantly. If they don't exist, I can use the random generator.*

*[Show quick NPC generation]*

*`python scripts/random_generator_engine.py --vault-path . --type npc --count 1 --quick`*

*This generates a complete NPC in seconds, properly formatted and ready to use.*

*The key is to record decisions and consequences as they happen - don't rely on memory."*

**[07:00 - 10:00] Information Management**

*"Managing information during sessions is crucial. Let me show you some techniques.*

*[Demonstrate information flow]*

*When players ask about something their characters would know, I use global search to find relevant information quickly.*

*[Use Ctrl+Shift+F to search]*

*For NPCs, I check their relationship status with the party. The vault tracks this in the NPC files.*

*[Show NPC relationship tracking]*

*When players learn something new, I immediately note it in the session file and consider what consequences this might have.*

*[Show consequence tracking]*

*The real-time nature of this workflow means information stays consistent and nothing falls through the cracks."*

**[10:00 - 13:00] Post-Session Processing**

*"After the session, spend 10-15 minutes updating the world state. This is where the vault really shines.*

*[Show post-session workflow]*

*First, I update the timeline with session events.*

*[Add events to Campaign Timeline Tracker]*

*Next, I update any NPC relationship changes. If the party impressed someone or made an enemy, that gets recorded.*

*[Update NPC files with relationship changes]*

*Then I update faction relationships if the party's actions affected political situations.*

*[Update Faction Network Tracker]*

*Finally, I run the content validator to make sure everything is properly linked and formatted.*

*[Run validation command]*

*This post-session processing ensures the world evolves consistently and creates hooks for future sessions."*

**[13:00 - 15:00] Advanced Session Features & Wrap-up**

*"Let me show you a few advanced features that can enhance your sessions.*

*The graph view can help you spot unexpected connections during play.*

*[Show graph view usage during session]*

*The random tables in the Resources folder provide inspiration when you need complications or surprises.*

*[Show random tables]*

*The quest tracker automatically monitors campaign progress and suggests follow-up opportunities.*

*[Show quest tracking]*

*Remember: the vault is designed to support your creativity, not replace it. Use it to handle the bookkeeping so you can focus on storytelling.*

*In our next tutorials, we'll explore the automation systems that make this all even more powerful. Thanks for watching, and happy gaming!"*

---

## 🎬 TUTORIAL 5: AUTOMATION SYSTEMS OVERVIEW

**Duration**: 15 minutes  
**Audience**: Users comfortable with basic vault usage  
**Prerequisites**: Command line familiarity helpful

### Script

**[00:00 - 01:00] Introduction**

*"Welcome to the automation systems tutorial! The Cordelia Vault includes powerful automation that handles routine tasks, maintains quality, and generates content. These systems work behind the scenes to keep your vault healthy and your campaign running smoothly.*

*Today I'll introduce the seven core automation systems and show you how to use them safely and effectively."*

**[01:00 - 03:30] Automation Overview**

*"The vault includes seven main automation systems, each designed for specific tasks:*

*[Show scripts folder]*

*1. **Random Content Generator** - Creates NPCs, encounters, and loot
2. **AI Content Assistant** - Uses AI for detailed content creation
3. **Content Validator** - Ensures quality and consistency
4. **Auto Link Suggester** - Discovers and creates content connections
5. **Backup System** - Protects your campaign data
6. **Update Monitor** - Tracks changes and sends notifications  
7. **Quest Tracker** - Manages campaign objectives dynamically*

*All of these are Python scripts that run from the command line. Don't worry if you're not technical - I'll show you exactly what to type."*

**[03:30 - 06:00] Content Generation Demo**

*"Let's start with content generation - probably the most immediately useful system.*

*[Open terminal, navigate to vault]*

*To generate a random NPC, I run:*

*`python scripts/random_generator_engine.py --vault-path . --type npc --count 1 --export`*

*[Run command, show output]*

*Look at that! In seconds, we have a complete NPC with personality, background, and game statistics. The `--export` flag saves it directly to the vault.*

*[Show generated file]*

*The AI content generator works similarly but creates more detailed, context-aware content:*

*`python scripts/ai_content_generator.py --vault-path . generate detailed_npc --input name="Captain Stromwind" --input faction="Sky Riders" --save`*

*[Show AI generation if API is configured]*

*These tools are perfect for when players go somewhere unexpected or you need inspiration quickly."*

**[06:00 - 09:00] Quality Assurance Systems**

*"Now let's look at quality assurance - keeping your vault healthy and consistent.*

*The content validator checks everything about your vault:*

*`python scripts/content_validator.py --vault-path . report`*

*[Run validation, show results]*

*It checks file formatting, metadata consistency, broken links, and content quality. The report shows issues by priority - fix the reds first, yellows are suggestions.*

*The auto link suggester finds connections you might have missed:*

*`python scripts/auto_link_suggester.py --vault-path . --report`*

*[Show link suggestions]*

*It uses AI to understand context and suggest meaningful connections. You can auto-apply high-confidence suggestions or review them manually."*

**[09:00 - 12:00] Backup & Monitoring Systems**

*"Data protection is crucial for campaign management. The backup system provides multiple layers of protection:*

*`python scripts/backup_automation.py --vault-path . backup --type full`*

*[Run backup command]*

*This creates a complete vault snapshot with integrity verification. You can also run incremental backups that only save changed files:*

*`python scripts/backup_automation.py --vault-path . backup --type incremental`*

*The update monitoring system runs in the background and tracks all changes:*

*`python scripts/update_notification_system.py --vault-path . &`*

*[Show monitoring system]*

*It can send notifications via email, webhook, or file logging when important events happen - perfect for tracking campaign developments."*

**[12:00 - 14:00] Campaign Management Automation**

*"The quest tracker provides dynamic campaign management:*

*`python scripts/dynamic_quest_tracker.py --vault-path . list`*

*[Show quest tracking]*

*It automatically monitors quest progress by reading your session files and updating objectives. You can create, update, and track entire quest chains:*

*`python scripts/dynamic_quest_tracker.py --vault-path . create "The Crystal Corruption Investigation" --description "Uncover the source of crystal sickness" --giver "Queen Seraphina"`*

*[Create example quest]*

*The system maintains quest relationships, tracks progress, and suggests follow-up opportunities based on campaign events."*

**[14:00 - 15:00] Safety & Best Practices**

*"These automation systems are powerful, so let's talk about using them safely.*

*Always run a backup before major operations:*

*`python scripts/backup_automation.py --vault-path . backup --type full`*

*Use `--dry-run` flags when available to see what changes will be made before applying them.*

*Start with small operations and build confidence before running vault-wide processes.*

*The systems include comprehensive error handling and logging - check the 09_Performance folder for operation logs if something goes wrong.*

*Remember: automation should enhance your creativity, not replace it. Use these tools to handle the routine work so you can focus on storytelling.*

*Next tutorial, we'll dive deeper into campaign management tools and advanced workflows. Thanks for watching!"*

---

## 🎬 TUTORIAL 6: CAMPAIGN MANAGEMENT TOOLS

**Duration**: 15 minutes  
**Audience**: GMs ready for advanced campaign tracking  
**Prerequisites**: Basic automation familiarity

### Script

**[00:00 - 01:00] Introduction**

*"Welcome back! Today we're exploring the advanced campaign management tools that make the Cordelia Vault truly powerful for long-term campaigns. These tools help you track complex political relationships, manage timeline consistency, and handle the consequences of player actions across multiple sessions.*

*These features transform your vault from a static reference into a living, evolving campaign world."*

**[01:00 - 04:00] Campaign Timeline Management**

*"Let's start with timeline management - keeping track of when everything happens.*

*[Open Campaign Timeline Tracker]*

*This isn't just a calendar - it's a comprehensive temporal coordination system. Watch how it works.*

*[Add a new timeline entry]*

*When I add an event, I include:
- The specific date using the campaign calendar
- Who was involved and what happened
- The immediate consequences
- Future implications*

*[Demonstrate adding complex event]*

*'Month 3, Day 15 - Shadow Surgery Facility Discovered by party. Immediate: Shadow Conspiracy alerted, security increased. Future: Retaliation expected within 1-2 weeks, public anxiety rising.'*

*This format helps me track cause and effect chains across sessions. The timeline becomes a decision-making tool for what happens next."*

**[04:00 - 07:00] Faction Relationship Tracking**

*"Complex campaigns involve multiple organizations with shifting relationships. The Faction Network Tracker handles this complexity.*

*[Open Faction Network Tracker]*

*Each relationship has a numerical score and relationship type. Watch what happens when player actions affect faction standings.*

*[Show relationship updates]*

*When the party exposed the Shadow Conspiracy facility, it affected multiple relationships:
- Parliament of Echoes vs Shadow Conspiracy: Hostile (2) → Enemy (1)
- Crystal Wardens vs Parliament: Friendly (7) → Allied (8)
- Public vs Parliament: Neutral (5) → Friendly (6)*

*[Update relationships in tracker]*

*The system tracks not just current relationships, but relationship momentum - are they improving, stable, or degrading? This helps predict future political developments."*

**[07:00 - 10:00] Consequence Chain Management**

*"Player actions create ripple effects. The consequence chain system helps you track these complex interactions.*

*[Open consequence chain template]*

*Every major player action gets analyzed for consequences at different scales and timeframes:*

*[Create consequence chain example]*

*Action: 'Party exposes Shadow Surgery facility'*

*Immediate (this session):
- Facility evacuated, evidence destroyed
- Shadow operatives go underground
- Parliament security alert issued*

*Short-term (1-3 sessions):
- Shadow Conspiracy retaliation against party
- Increased security around government buildings
- Public debate about infiltration threats*

*Long-term (campaign arc):
- Shadow Conspiracy adopts new tactics
- Parliament creates new security agency
- Cross-realm security cooperation increases*

*This systematic approach ensures player actions have meaningful, lasting impacts."*

**[10:00 - 12:30] Dynamic World Evolution**

*"Between sessions, the world continues evolving based on NPC motivations and faction goals.*

*[Show NPC goal tracking]*

*Each major NPC has current goals that advance whether the PCs interact with them or not. Admiral Marina Stormcrest wants to investigate naval security - if the PCs don't help, she pursues it alone with different outcomes.*

*[Demonstrate NPC goal progression]*

*The faction goals create background events:*

*- Shadow Conspiracy: Establish new safe houses (happens automatically over time)
- Parliament: Increase security measures (affects future PC interactions)  
- Crystal Wardens: Research corruption cures (provides future quest opportunities)*

*This makes the world feel alive and reactive rather than static."*

**[12:30 - 14:00] Campaign Health Monitoring**

*"The campaign management tools include health monitoring to keep everything balanced.*

*[Run campaign analysis commands]*

*`python scripts/dynamic_quest_tracker.py --vault-path . report --detailed`*

*This shows quest momentum, completion rates, and suggests new opportunities.*

*The relationship tracker identifies extreme relationships that might need attention:*

*[Show relationship analysis]*

*When relationships reach 0-1 (Enemy) or 9-10 (Allied), they become inflexible and reduce story options. The system warns you about this.*

*Content quality monitoring ensures your campaign materials stay organized:*

*`python scripts/content_validator.py --vault-path . report --campaign-health`*

*[Show campaign health metrics]*

*This comprehensive approach keeps your campaign balanced and sustainable over many sessions."*

**[14:00 - 15:00] Integration & Workflow**

*"All these systems work together to create a comprehensive campaign management workflow.*

*[Demonstrate integrated workflow]*

*Pre-session: Check timeline, review faction states, update NPC goals*
*During session: Record decisions, track consequences, note relationship changes*  
*Post-session: Update all systems, run health checks, plan evolution*

*The beauty is that each system informs the others. Timeline events trigger faction relationship changes. NPC goal progressions create new quest opportunities. Player consequences ripple through all systems.*

*This integrated approach handles the complexity of long-term campaigns while keeping your preparation time manageable.*

*Next tutorial, we'll explore content generation and AI integration in depth. Thanks for watching, and keep building those amazing campaign worlds!"*

---

## 🎬 TUTORIAL 10: TROUBLESHOOTING & RECOVERY

**Duration**: 15 minutes  
**Audience**: All users - essential safety net knowledge  
**Prerequisites**: Basic vault usage

### Script

**[00:00 - 01:00] Introduction**

*"Welcome to our troubleshooting and recovery tutorial. Even the best systems sometimes have issues, and knowing how to diagnose and fix problems is crucial for maintaining your campaign vault.*

*I'll show you how to identify common problems, use the built-in diagnostic tools, and recover from various types of issues without losing your campaign data."*

**[01:00 - 03:30] Common Issues & Quick Fixes**

*"Let's start with the most common issues you might encounter.*

*[Show Obsidian performance issues]*

*If Obsidian is running slowly, it's usually due to too many files loaded or plugins conflicting. First, try restarting Obsidian. If that doesn't help, disable non-essential plugins temporarily.*

*[Demonstrate plugin troubleshooting]*

*For broken links everywhere - this usually happens after moving or renaming files. The auto link suggester can fix most of these:*

*`python scripts/auto_link_suggester.py --vault-path . --auto-apply --confidence-threshold 0.9`*

*[Run and show results]*

*If automation scripts are failing, check the error messages carefully. Most issues are permission problems or missing dependencies.*

*[Show common error diagnosis]*"

**[03:30 - 06:00] Diagnostic Tools**

*"The vault includes comprehensive diagnostic tools for identifying issues.*

*[Run system diagnostics]*

*`python scripts/content_validator.py --vault-path . report --detailed`*

*This checks everything - file formatting, metadata consistency, link integrity, and content quality. The report prioritizes issues by severity.*

*[Show diagnostic output and explain priorities]*

*For performance issues, use the performance monitor:*

*`python scripts/performance_monitor.py --vault-path . --generate-report`*

*[Show performance analysis]*

*This identifies bottlenecks and suggests optimizations.*

*The backup system includes integrity verification:*

*`python scripts/backup_automation.py --vault-path . verify --all`*

*[Show backup verification]*

*This ensures your backups are complete and uncorrupted - essential for recovery planning."*

**[06:00 - 09:00] Recovery Procedures**

*"When things go wrong, having a clear recovery process is crucial.*

*[Demonstrate file recovery]*

*For single file recovery:*

*`python scripts/backup_automation.py --vault-path . list`*

*This shows available backups. Then restore specific files:*

*`python scripts/backup_automation.py --vault-path . restore --backup-id "2025-08-13_full_001" --target "02_Worldbuilding/People/Important_NPC.md"`*

*[Show file restoration]*

*For major corruption, you might need full vault restoration:*

*`python scripts/backup_automation.py --vault-path . restore-full --backup-id "latest" --confirm`*

*[Explain but don't execute full restoration]*

*This overwrites everything with the backup version, so only use it for serious corruption."*

**[09:00 - 12:00] Database Recovery**

*"The automation systems use SQLite databases that sometimes need maintenance.*

*[Show database issues]*

*If you get database lock errors, use the database utility:*

*`python scripts/database_optimizer.py --vault-path . --unlock-all`*

*For corrupted databases, the rebuild option recreates them from vault content:*

*`python scripts/database_optimizer.py --vault-path . --rebuild-all --backup-first`*

*[Show database maintenance]*

*The system automatically creates backups before major database operations, so you can always roll back if something goes wrong.*

*Monitor database health regularly:*

*`python scripts/database_monitor.py --vault-path . --health-check`*

*[Show database health monitoring]*"

**[12:00 - 14:00] Prevention Strategies**

*"Prevention is better than recovery. Here are key strategies for avoiding problems.*

*[Show maintenance schedule]*

*Run these commands weekly:*

*```bash
# Backup current state
python scripts/backup_automation.py --vault-path . backup --type full

# Validate content health  
python scripts/content_validator.py --vault-path . report

# Optimize databases
python scripts/database_optimizer.py --vault-path . --optimize-all
```*

*Set up automated monitoring:*

*`python scripts/update_notification_system.py --vault-path . --config-email your@email.com &`*

*[Show monitoring setup]*

*This watches for problems and notifies you before they become serious.*

*Keep multiple backup generations - don't rely on just one backup:*

*[Show backup strategy]*

*The automated system maintains daily, weekly, and monthly backups with different retention periods."*

**[14:00 - 15:00] Emergency Procedures & Wrap-up**

*"For emergency situations, here's your quick recovery checklist:*

*1. **Don't Panic** - The vault has multiple safety nets
2. **Assess Scope** - Is it one file or system-wide?
3. **Check Recent Backups** - Use `backup_automation.py list`
4. **Start Small** - Restore individual files before considering full restoration
5. **Verify Recovery** - Run validation after any recovery operation
6. **Document Issues** - Note what happened to prevent recurrence*

*[Show emergency checklist]*

*Remember: the vault is designed to be resilient. Most issues have simple fixes, and the backup systems provide multiple recovery options.*

*The key is staying calm, using the diagnostic tools systematically, and always having current backups.*

*That completes our tutorial series! You now have comprehensive knowledge of the Cordelia Vault's capabilities. Use these tools to create amazing campaigns, and don't forget to back up your work regularly.*

*Happy gaming, and may your adventures be legendary!"*

---

## 📋 PRODUCTION GUIDELINES

### Video Creation Checklist

**Pre-Production**:
- [ ] Script reviewed and approved
- [ ] Test environment prepared (clean vault state)
- [ ] Screen recording software configured
- [ ] Audio equipment tested
- [ ] Example content prepared

**Production**:
- [ ] Record in 1920x1080 minimum resolution  
- [ ] Use clear, deliberate mouse movements
- [ ] Pause between major concepts (2-3 seconds)
- [ ] Maintain consistent pacing throughout
- [ ] Include visual highlights for important UI elements

**Post-Production**:
- [ ] Audio levels normalized
- [ ] Remove unnecessary pauses or mistakes
- [ ] Add visual callouts where helpful
- [ ] Include chapter markers for easy navigation
- [ ] Export in standard web formats (MP4 H.264)

### Accessibility Considerations

**Audio**:
- Clear narration without background music
- Consistent volume levels throughout
- Captions/subtitles for hearing accessibility

**Visual**:
- High contrast cursor and highlights
- Text large enough to read on mobile devices
- Screen zoom for detail work
- Alternative text descriptions for complex visuals

### Distribution Plan

**Platform Strategy**:
- **YouTube**: Primary distribution platform with chapters and descriptions
- **Vault Integration**: Embed links in documentation files
- **Community Resources**: Share with TTRPG communities and forums
- **Update Schedule**: Regular updates as vault features evolve

**Content Organization**:
- Playlist structure matching tutorial series
- Consistent thumbnail design
- Comprehensive video descriptions with timestamps
- Links to relevant documentation sections

---

**Total Script Length**: ~10,000 words  
**Estimated Production Time**: 40 hours (recording + editing)  
**Target Completion**: Phase 5 implementation  
**Next Review**: Post-production feedback integration