#!/usr/bin/env python3
"""
Anchor & Placeholder Fixer

Actions:
1) Convert anchor-only wiki links [[#Heading]] to just the plain heading text, since Obsidian uses same-note anchors but our auditor treats them as broken. Safer than guessing.
2) Replace common template placeholders (e.g., [[NPC]], [[NPC Name]], [[Location]], [[Quests]], [[Sessions]]) with plain text equivalents when no resolvable target exists.
3) Fix .base references using display text where underlying file exists: [[Session Log.base|Session History]] → [[Session Log.base]].

Only edits files that contain such patterns and skips system/templates/report directories.
"""
from __future__ import annotations

import os, re, sys
from pathlib import Path

MD_EXTS = {'.md'}
IGNORE_DIRS = {'.git', '.obsidian', 'node_modules', 'Ω_System', 'Ω_Archive', '05_Templates'}
IGNORE_FILES = {'_LINK_INTEGRITY_REPORT.md', '_RELATIONSHIP_VALIDATION.md', '_VAULT_ARCHITECTURE_ANALYSIS.md', '_COMBAT_BALANCE_REPORT.md'}

ANCHOR_ONLY = re.compile(r"\[\[#([^\]|]+)(?:\|[^\]]*)?\]\]")
PLACEHOLDER_LINK = re.compile(r"\[\[([^\]|#][^\]|]*)\]\]")
DISPLAYED_LINK = re.compile(r"\[\[([^\]|]+)\|([^\]]+)\]\]")

PLACEHOLDERS = {
    'NPC', 'NPCs', 'NPC Name', 'PCs', 'Quest', 'Quests', 'Session', 'Sessions', 'Location', 'Locations', 'Region', 'Continent', 'Entity', 'Entities', 'Shops', 'Establishments'
}

def should_skip(p: Path) -> bool:
    parts = set(p.parts)
    if parts & IGNORE_DIRS:
        return True
    if p.name in IGNORE_FILES:
        return True
    return False

def main():
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    fixed_files = 0
    fixed_anchors = 0
    fixed_placeholders = 0
    fixed_bases = 0

    for dp, dn, fn in os.walk(root):
        pdir = Path(dp)
        if any(part in IGNORE_DIRS for part in pdir.parts):
            continue
        for f in fn:
            p = pdir / f
            if p.suffix.lower() not in MD_EXTS:
                continue
            if should_skip(p):
                continue
            text = p.read_text(encoding='utf-8', errors='ignore')
            orig = text

            # 1) Anchor-only replacements → plain heading text
            def repl_anchor(m):
                nonlocal fixed_anchors
                fixed_anchors += 1
                heading = m.group(1).strip()
                return heading

            text = ANCHOR_ONLY.sub(repl_anchor, text)

            # 2) Placeholder links without targets → plain text
            def repl_placeholder(m):
                nonlocal fixed_placeholders
                inner = m.group(1).strip()
                # leave non-placeholders alone
                if inner not in PLACEHOLDERS and not inner.lower().startswith(('template-', 'new ')):
                    return m.group(0)
                fixed_placeholders += 1
                return inner

            text = PLACEHOLDER_LINK.sub(repl_placeholder, text)

            # 3) .base display links → keep bare target
            def repl_base(m):
                nonlocal fixed_bases
                target, display = m.group(1).strip(), m.group(2).strip()
                if target.endswith('.base'):
                    fixed_bases += 1
                    return f'[[{target}]]'
                return m.group(0)

            text = DISPLAYED_LINK.sub(repl_base, text)

            if text != orig:
                p.write_text(text, encoding='utf-8')
                fixed_files += 1

    print(f'[fix_anchors] files changed: {fixed_files}')
    print(f'[fix_anchors] anchors fixed: {fixed_anchors}')
    print(f'[fix_anchors] placeholders fixed: {fixed_placeholders}')
    print(f'[fix_anchors] base display links normalized: {fixed_bases}')

if __name__ == '__main__':
    main()


