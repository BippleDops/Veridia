#!/usr/bin/env bash
set -euo pipefail
cd /workspace

add_footer(){
  local file="$1"
  local marker="<!-- ENHANCED_TEMPLATE_FOOTER -->"
  if grep -q "$marker" "$file"; then return; fi
  cat >> "$file" <<'EOF'

<!-- ENHANCED_TEMPLATE_FOOTER -->

## Quick Actions
- Button: `BUTTON[button_person]` (create or link a person)
- Dice: `= round(d(20))` test roll

## Auto-Indexes
```dataview
LIST FROM outgoing(file) WHERE status = "complete"
```

## Accessibility Defaults
- Screen reader summary field in frontmatter recommended.
- Content warnings list; safety tools references.
EOF
}

export -f add_footer

find "05_Templates/World Builder Templates" -name "Template-*.md" -print0 | while IFS= read -r -d '' f; do
  add_footer "$f"
done

echo "Template enhancements complete."