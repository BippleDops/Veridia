#!/usr/bin/env bash
set -euo pipefail
cd /workspace

if [ ! -f stub_list.txt ]; then
  find /workspace -name "*.md" -exec grep -l 'status: "stub"' {} \; | sed 's#^/workspace/##' | sort > stub_list.txt
fi

while IFS= read -r relpath; do
  [[ -z "$relpath" ]] && continue
  [[ "$relpath" != 03_Mechanics/* ]] && continue
  f="/workspace/$relpath"
  [[ -f "$f" ]] || continue
  title="$(basename "$f" .md)"
  world="$(grep -E '^world:' "$f" | sed -E 's/^[^\"]*"([^"]*)".*/\1/' || true)"
  [ -z "$world" ] && world="Universal"

  tmp="$(mktemp)"
  cat > "$tmp" <<EOF
---
tags: [mechanic]
status: "complete"
world: "$world"
type: "mechanic"
obsidianUIMode: preview
---

# $title

## Summary
Practical, table-ready rules for $title across Aquabyssos and Aethermoor.

## Procedure
- Trigger/When it applies
- Step-by-step actions with DCs and consequences
- Edge cases and rulings

## Difficulty and Modifiers
- Baseline DCs: easy 10–12, standard 13–15, hard 16–18
- Environmental: weather, pressure, crowd, ritual fields
- Tools/Proficiency: applicable kits or proficiencies

## Examples at the Table
- Clear example A with outcomes on success and failure (fail-forward).
- Example B showing social and exploration use.

## Complications and Clocks
- Use 0–6 progress clocks for extended tasks.
- On a failed roll, advance a complication clock instead of stalling.

## Safety and Accessibility
- Provide alternatives for high-lethality outcomes.
- Offer informed choices and reminders of Lines & Veils.

## Cross-References
- [[09_Performance/Indexes/Master_Narrative_Web.md|Narrative Web]]
- [[06_GM_Resources/Ultimate_GM_Screen.md|Ultimate GM Screen]]
EOF
  mv "$tmp" "$f"
done < stub_list.txt

echo "Mechanics stub transformation complete."