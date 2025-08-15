---

title: Quest_Tracker
type: quest
tags:
- quest

created: '2025-01-15'
modified: '2025-01-15'
status: active
aliases: ["Quest Tracker"]
priority: normal
category: 01 Adventures
subcategory: Quest Tracker.Md
related: []
cssclass: standard
publish: false

---

 ## Complications

## Description

Detailed description pending.
- Unexpected obstacles
- Time pressure
- Moral dilemmas # Quest_Tracker ---

title: Quest Tracker
type: index
tags:
- active
- index
- objectives
- quests

created: 2025-08-14
modified: '2025-08-14'
updated: 2025-08-14
cssclass: quest-tracker

--- ### Main Quests```dataview

TABLE WITHOUT ID file.link as Quest, giver as "Quest Giver", level as Level, reward as Reward

FROM #quest OR "01_Adventures"

WHERE status = "active" AND type = "main"

SORT priority DESC```### Side Quests location as Location, difficulty as Difficulty,

WHERE status = "active" AND type = "side"

SORT level ASC ## Quest Giver

- **Name**: Local authority figure
- **Location**: Town center
- **Motivation**: Community safety ## Objectives

### Primary

- Main quest goal ### Optional

- Secondary objectives
- Hidden goals ## ⏰ Time-Sensitive deadline as Deadline, consequence as "If Failed"

WHERE deadline != AND status = "active"

SORT deadline ASC ## ✅ Completed Quests completed as "Completed Date", reward-received as "Rewards"

WHERE status = "completed"

SORT completed DESC

LIMIT 10 ## 📊 Quest Statistics status as Status, length(rows) as Count

WHERE type = "quest" OR contains(tags, "quest")

GROUP BY status ---

*Quest tracking powered by Dataview* ## Related *Links to related content will be added here.* ## DM Notes *Private notes for campaign integration:*

- Can be adapted to fit current story needs
- Scalable threat/reward based on party level
- Multiple entry points for different play styles
- Connections to overarching campaign themes ## Background

*[Adventure setup and context]* ### What Happened Before

- *[Recent events leading to this adventure]* ### Current Situation - *[What's happening now]* ### The Stakes

- *[What happens if PCs don't act]* ## Adventure Hooks

*[Ways to get PCs involved]* ### Direct Approach

- *[Straightforward hook]* ### Indirect Approach

- *[Subtle introduction]* ### Emergency Hook

- *[Urgent situation]* ## Key NPCs

*[Important characters in this adventure]* ### Allies

- *[Helpful NPCs]* ### Antagonists

- *[Opposition NPCs]* ### Neutral Parties

- *[Information sources]* ## Locations

*[Important places in this adventure]* ### Starting Location

- *[Where adventure begins]* ### Key Sites

- *[Major locations to visit]* ### Optional Areas

- *[Side locations]* ## Rewards

*[What PCs gain from completing this adventure]* ### Experience Points

- *[XP awards]* ### Treasure

- *[Gold and magic items]* ### Story Rewards

- *[Reputation, allies, information]* ## Scaling

*[How to adjust for different party levels]* ### Lower Level Parties

- *[Adjustments for weaker groups]* ### Higher Level Parties

- *[Adjustments for stronger groups]* ### Large/Small Parties

- *[Adjustments for party size]* ## Hooks

- **Personal**: Character connection
- **Professional**: Hired for the job ## Time Limit

- **Deadline**: When it must be completed
- **Consequences**: What happens if late ## Opposition

- **Enemies**: Who opposes the party
- **Obstacles**: Environmental challenges ## Moral Dilemmas

- **Difficult Choices**: Ethical challenges
- **Consequences**: Impact of decisions ## Optional Objectives

- **Bonus Goals**: Extra achievements
- **Hidden Rewards**: Secret treasures ## Failure Conditions

- **What Constitutes Failure**: Clear parameters
- **Failure Consequences**: What happens ## Investigation Clues

- **Obvious Clues**: Easy to find
- **Hidden Clues**: Require searching ## Social Encounters

- **Key Conversations**: Important dialogues
- **Persuasion Opportunities**: Diplomatic solutions ## Environmental Hazards

- **Natural Dangers**: Environmental threats
- **Trap Locations**: Mechanical dangers ## Scaling Options

- **Easy Mode**: Reduced difficulty
- **Hard Mode**: Increased challenge ## Alternate Descriptions

- **First Impression**: Initial appearance
- **Closer Look**: Detailed examination
- **Hidden Details**: Secret aspects ## Random Table

| d6 | Result |
|----|--------|
| 1 | Option A |
| 2 | Option B |
| 3 | Option C |
| 4 | Option D |
| 5 | Option E |
| 6 | Option F | ## DM Tips

> 💡 **Running This Content**: Advice for game masters

> Adjust difficulty based on party composition ## Player Tips

> 🎮 **Strategy**: How to approach this content

> Work together and communicate

## Notes

*Additional notes*

#story/story
#story/background
#world/location
#world/place
#character/npc
#character/character
#character/person
#gameplay/encounter
#gameplay/adventure
#gameplay/quest
#resource/item
#resource/treasure
#meta/index

## Timeline
- Key events
- Deadlines


## NPCs Involved
- Quest giver
- Antagonists


## Alternative Solutions
- Non-combat options
- Creative approaches
