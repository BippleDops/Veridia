#!/usr/bin/env bash
set -euo pipefail
cd /workspace

base="07_Player_Resources/Visual_Handouts"
mkdir -p "$base"

declare -a files=(
  "Letter_From_the_Pearl_Guard_Captain.md"
  "Wanted_Poster_Syndicate_Fence.md"
  "Map_Whisper_Island_Docks_Sketch.md"
  "Trade_Route_Chart_Port_Meridian.md"
  "Propaganda_Leaflet_Pearl_Guard.md"
  "Propaganda_Broadsheet_Syndicate.md"
  "Ancient_Prophecy_Fragment_Verdant.md"
  "Ship_Schematic_The_Seahawk.md"
  "Submersible_Schematic_Pressure_Gate_Scout.md"
  "City_District_Map_Port_Meridian_Harbor.md"
  "Currency_Guide_Scrip_and_Shards.md"
  "Measurement_Guide_Depth_and_Pressure.md"
  "Calendar_Conversions_Realm_Windows.md"
  "Guild_Seal_Document_Silverscale_Consortium.md"
  "Ritual_Timing_Wheel_Convergence.md"
  "Smuggler_Route_Tally_Sheet.md"
  "Quarantine_Notice_Crystal_Plague.md"
  "Ceasefire_Accord_Draft.md"
  "Pilgrim_Pass_Prayer_Slip.md"
  "Quiet_Chapel_Oath_Scroll.md"
  "Emergency_Evacuation_Map_Stormglass_Riots.md"
  "Dockworker_Union_Flyer.md"
)

for f in "${files[@]}"; do
  path="$base/$f"
  title="${f%.md}"
  cat > "$path" <<EOF
---
tags: [handout]
status: "complete"
world: "Universal"
type: "handout"
obsidianUIMode: preview
---

# ${title//_/ }

## In-World Text
A document circulated among locals and travelers. Its edges are smudged with salt and ink. The handwriting shifts, suggesting multiple authors or hurried copyists.

> Clerk's Note: Stamped and recorded at Port Meridian under the Tide-Quartermaster's seal.

## Visual Cues
- Paper: water-warped, salt stains, faint coral fiber inclusions
- Ink: stormglass sheen; letters shimmer at angles
- Markings: seals, thumbprints, tally marks

## Usable Table Info
- Names, dates, and codes that can be entered into checks or puzzles
- One immediate hook: present this to bypass one routine obstacle, then mark spent

## GM Margin
- If forged: DC 15 Investigation to detect; failure moves story forward with suspicion clock +1
- If lost: a copy resurfaces at a cost, along with a rumor

## Cross-References
- [[09_Performance/Indexes/Location_Network_Graph.md|Location Network]]
- [[03_Mechanics/Rumor_Mill_Network.md|Rumor Mill]]
- [[06_GM_Resources/Ultimate_GM_Screen.md|GM Screen]]
EOF
  echo "Created $path"
done

echo "Handouts generated: ${#files[@]}"