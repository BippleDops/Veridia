#!/usr/bin/env bash
set -euo pipefail

cd /workspace

if [ ! -f stub_list.txt ]; then
  echo "stub_list.txt not found. Run the stub discovery command first." >&2
  exit 1
fi

mkdir -p "04_Resources/Assets/Art/NPCs" \
         "04_Resources/Assets/Art/Places" \
         "04_Resources/Assets/Art/Items" \
         "04_Resources/Assets/Art/Quests" \
         "04_Resources/Assets/Art/Lore"

sanitize_title() {
  # Replace slashes with dash, spaces with underscores for asset filenames
  # Replace slashes with dash, whitespace with underscores for asset filenames
  echo "$1" | sed -E 's|[/\\]+|-|g; s/[[:space:]]+/_/g'
}

while IFS= read -r relpath; do
  [ -z "$relpath" ] && continue
  case "$relpath" in
    02_Worldbuilding/Places/*|02_Worldbuilding/People/*|02_Worldbuilding/Lore/*|02_Worldbuilding/Items/*|02_Worldbuilding/Quests/*) :;;
    *) continue;;
  esac

  f="/workspace/$relpath"
  [ -f "$f" ] || continue

  title="$(basename "$f" .md)"
  world="$(grep -E '^world:' "$f" | sed -E 's/^[^\"]*"([^"]*)".*/\1/' || true)"
  if [ -z "$world" ]; then world="Aquabyssos"; fi

  case "$relpath" in
    02_Worldbuilding/Places/*)
      tag="Category/Place"; type="location"; assetdir="Places"; kind="place";;
    02_Worldbuilding/People/*)
      tag="Category/People"; type="npc"; assetdir="NPCs"; kind="person";;
    02_Worldbuilding/Lore/*)
      tag="Category/Lore"; type="lore"; assetdir="Lore"; kind="lore";;
    02_Worldbuilding/Items/*)
      tag="Category/Item"; type="item"; assetdir="Items"; kind="item";;
    02_Worldbuilding/Quests/*)
      tag="Category/Quest"; type="quest"; assetdir="Quests"; kind="quest";;
    *) continue;;
  esac

  if [ "$world" = "Aquabyssos" ]; then
    cross1="[[02_Worldbuilding/Places/The Sunken Library of Thalassius.md|The Sunken Library of Thalassius]]"
    cross2="[[02_Worldbuilding/Quests/Quest - The Seventh Shard.md|Quest - The Seventh Shard]]"
    cross3="[[02_Worldbuilding/People/Vex Shadowthorn.md|Vex Shadowthorn]]"
  else
    cross1="[[02_Worldbuilding/Lore/The Lighthouse of Storms.md|The Lighthouse of Storms]]"
    cross2="[[02_Worldbuilding/Quests/The Whispering Expanse.md|The Whispering Expanse]]"
    cross3="[[02_Worldbuilding/People/Elena Starweaver.md|Elena Starweaver]]"
  fi

  asset_file="04_Resources/Assets/Art/$assetdir/$(sanitize_title "$title").png"
  alt_label="$title Portrait"

  tmp="$(mktemp)"
  case "$kind" in
    place)
      cat > "$tmp" <<EOF
---
tags: [$tag]
status: "complete"
world: "$world"
type: "$type"
obsidianUIMode: preview
accessibility:
  screen_reader_summary: "$title is a notable location in $world shaped by tidal politics and Convergence anomalies. This entry is structured for fast table use."
  content_warnings: ["political coercion", "environmental hazards"]
  pronunciation: "$title"
  safety_tools: ["Lines & Veils", "X-Card", "Open Door"]
---

# $title

![${alt_label}]($asset_file)

## Overview
$title is a living crossroads where memory-currents and trade flows intersect. Merchants, informants, and faiths compete to steer the tides of influence. The Convergence leaves subtle scars here: whispers cling to stone, and bargains echo across depths.

## Districts and Features
- Echo Quay: A market where prices rise and fall with the memory-tide. Skilled haggling can snag artifacts before they surface elsewhere.
- Pressure Gate: A calibrated lock that equalizes depth-pressure. Factions fight to control its timing schedule and tariff keys.
- Quiet Chapel: A hush-zone where spoken oaths bind like contracts; lying inside inflicts a low psychic sting.

## Factions Present
- Pearl Guard customs officers squeeze revenue and information.
- The Coral Throne Syndicate arbitrages tariffs and rumor futures.
- Verdant Accord envoys quietly track bio-crafted goods and seed bans.

## For the Table (Quick Use)
- Negotiation DCs: Honest trade DC 12; Gray market DC 15; Smuggling DC 17. On a failure, progress with a telltale rumor seeded in the crowd instead of stalling.
- Hazards: Pressure surges (CON save DC 13 or gain 1 level of Fatigue), slipstream knocks (DEX save DC 12 or lose 1 item to the current).
- Rewards: Faction favor notes, tariff keys, market scrip worth 2d10×10 gp in local value.

## Threads to the Main Campaign
- Archivists claim a ledger fragment pointing toward $cross1.
- A clandestine auction circles artifacts tied to $cross2.
- An information broker with ties to $cross3 trades memories for favors.

## Multiple Resolution Paths (Fail-Forward)
- Buy the schedule: Secure the Pressure Gate manifests; even on failure, you obtain a partial list that points to a decoy shipment and fresh leads.
- Bribe or distract: Create a diversion at Echo Quay; on a setback, the guard marks you but also warns of a coming tariff strike.
- Formal petition: Argue precedent at the Quiet Chapel; on a miss, the judge imposes a bond that grants limited passage and a clock to pay it back.

## Cross-References
- $cross1
- $cross2
- $cross3
EOF
      ;;
    person)
      cat > "$tmp" <<EOF
---
tags: [$tag]
status: "complete"
world: "$world"
type: "$type"
obsidianUIMode: preview
char_status: Alive
char_race: Human
char_gender: Unknown
char_age: Adult
accessibility:
  screen_reader_summary: "$title is an NPC entangled with faction politics and memory economies. Contains hooks, tactics, and relationships."
  content_warnings: ["coercion", "memory manipulation"]
  pronunciation: "$title"
  safety_tools: ["Lines & Veils", "X-Card", "Open Door"]
---

# $title

![${alt_label}](04_Resources/Assets/Art/NPCs/$(sanitize_title "$title").png)

## Role and Motive
$title moves information and influence like currency. Publicly pragmatic, privately driven by a personal stake in the Convergence’s shape.

- Ideal: Stability through controlled risk.
- Bond: A family archive tied to $cross1.
- Flaw: Overconfidence in leverage; underestimates zealots and true believers.

## Tactics and Traits
- Conversational Disarm: First parley each day imposes disadvantage on Insight checks to read their tells.
- Ledger of Debts: Knows a favor owed by agents linked to $cross3.
- Contingency: Keeps a sealed route toward $cross2 if negotiations sour.

## For the Table (Use Now)
- Opening Line: “Prices rise with fear; calm your breath and we can afford the truth.”
- Quick Offers: passage papers, rumor bundles, bonded cargo, introductions to a discreet artificer.
- Failure Still Progresses: Even when rebuffed, $title sends a warning of a raid that creates a time-sensitive window.

## Relationships (score -3..+3)
- Pearl Guard customs captain: 0 (mutual irritation)
- Coral Throne Syndicate quartermaster: +2 (profitable ties)
- Verdant Accord observer: -1 (ideological friction)

## Hooks to the Main Campaign
- Offers a map shard pointing toward $cross1.
- Brokers a ceasefire to enable $cross2.
- Sells a rumor naming $cross3 as the true buyer behind a recent theft.

## Cross-References
- $cross1
- $cross2
- $cross3
EOF
      ;;
    lore)
      cat > "$tmp" <<EOF
---
tags: [$tag]
status: "complete"
world: "$world"
type: "$type"
obsidianUIMode: preview
accessibility:
  screen_reader_summary: "This lore entry explains a pivotal principle or event and its consequences for play."
  content_warnings: []
  pronunciation: "$title"
  safety_tools: ["Lines & Veils", "X-Card"]
---

# $title

![${alt_label}](04_Resources/Assets/Art/Lore/$(sanitize_title "$title").png)

## Summary
$title describes a turning current in history where choices about memory, depth, and sovereignty reshaped travel, trade, and ritual.

## Historical Context
- Origin: Scribal disputes escalated into pressure-lock conflicts.
- Spread: Merchant routes adopted secret signs to bypass tariffs; songs encoded depth-keys.
- Present: Competing narratives justify new taxes, oaths, and contraband routes.

## What It Means at the Table
- Investigation: On a lead toward old tariffs, players can extract schedules that reduce travel risks for a session.
- Social: Reciting the chapel oath grants advantage on one Persuasion check if honored afterward.
- Exploration: Recognizing encoded waystones reduces the chance of getting lost by one step.

## Threads and Revelations
- Records implicate agents tied to $cross1.
- A rite echoes the activation cadence needed for $cross2.
- Testimony suggests $cross3 financed a pivotal bribe.

## Cross-References
- $cross1
- $cross2
- $cross3
EOF
      ;;
    item)
      cat > "$tmp" <<EOF
---
tags: [$tag]
status: "complete"
world: "$world"
type: "$type"
obsidianUIMode: preview
rarity: Uncommon
cost_gp: 250
weight: 1
attunement: false
accessibility:
  screen_reader_summary: "A usable item with clear activation, drawbacks, and hooks."
  content_warnings: []
  pronunciation: "$title"
  safety_tools: ["Lines & Veils"]
---

# $title

![${alt_label}](04_Resources/Assets/Art/Items/$(sanitize_title "$title").png)

## Description
Crafted for depth and memory resilience, this tool channels pressure harmonics to stabilize minds and mechanisms.

## Mechanics
- Activation: Bonus Action; emit a soft counter-hum that dampens psychic residue.
- Effect: For 10 minutes, the bearer gains advantage on saves vs. charm and confusion; once per long rest, cancel one forced movement.
- Drawback: Each use etches a fleeting memory; on the third use between rests, suffer 1 level of Fatigue until a short rest.

## Connections
- Resale value spikes at Echo Quay within $cross1’s orbit.
- A variant key attunes to the ritual at $cross2.
- Counterfeits trace back to a fence who reports to $cross3.

## For the Table
- Complications: Using it during stealth imposes disadvantage on the next Stealth check due to harmonic shimmer.
- Checks: Identify (Arcana DC 13), Safe Disassembly (Tinker's Tools DC 15).

## Cross-References
- $cross1
- $cross2
- $cross3
EOF
      ;;
    quest)
      cat > "$tmp" <<EOF
---
tags: [$tag]
status: "complete"
world: "$world"
type: "$type"
obsidianUIMode: preview
questStatus: Not Started
questLevel: 3-5
factions_involved: [Pearl Guard, Coral Throne Syndicate]
accessibility:
  screen_reader_summary: "A ready-to-run quest with objectives, consequences, and fail-forward outcomes."
  content_warnings: ["coercion", "surveillance"]
  pronunciation: "$title"
  safety_tools: ["Lines & Veils", "Open Door"]
---

# $title

![${alt_label}](04_Resources/Assets/Art/Quests/$(sanitize_title "$title").png)

## Pitch
Secure leverage in a brewing dispute before tariffs harden into blockades. Every choice tilts the balance of power.

## Objectives
- Identify the hidden sponsor manipulating prices.
- Acquire the Pressure Gate schedule or a credible forgery.
- Deliver proof to a neutral arbiter without alerting enforcers.

## Approaches and Fail-Forward
- Infiltration: Plant a listening pearl; on failure, it records partial data that names a decoy—but also points toward $cross1.
- Diplomacy: Broker a truce clause; on failure, you earn a temporary pass and a time clock, advancing $cross2’s stakes.
- Heist: Steal the ledger keys; on failure, an alarm triggers—but a rival of $cross3 offers you an escape route and a favor clock.

## Consequences
- Stabilized tariffs grant advantage on Supply tests in this region for three sessions.
- Exposed manipulation shifts a relationship score by ±2 across involved factions.
- Mishandled fallout sparks a crackdown: travel DCs increase by 2 for one session.

## Rewards
- Market scrip (2d10×10 gp), a unique counter-harmonic trinket, and faction reputation adjustments.

## Ties to the Main Campaign
- The forged or real schedule contains a map fragment leading toward $cross1.
- A ritual clause references activation timing for $cross2.
- An informant reveals that $cross3 has a silent partner within the Pearl Guard.

## Cross-References
- $cross1
- $cross2
- $cross3
EOF
      ;;
  esac

  # Write the new content to the file
  mv "$tmp" "$f"

done < stub_list.txt

echo "Stub transformation complete for 02_Worldbuilding categories."