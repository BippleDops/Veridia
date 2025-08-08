#!/usr/bin/env python3
"""
Context-Aware Link Fixer for Top Sources

Reads _LINK_TRIAGE_TOP200.md, takes the top source files, and attempts to
resolve remaining broken basename links by preferring:
 - Same campaign root (e.g., 01_Campaigns/Aethermoor vs Aquabyssos)
 - Same subfolder (Locations, NPCs, Sessions, Quests)
 - Shortest path among ties

Skips risky cases where multiple candidates tie on score.
"""
from __future__ import annotations

import os, re, sys
from pathlib import Path
from collections import defaultdict

MD_EXTS = {'.md'}
IGNORE_DIRS = {'.git', '.obsidian', 'node_modules', 'Ω_System', 'Ω_Archive'}

LINK_PATTERN = re.compile(r"\[\[([^\]]+)\]\]")

def rel(root: Path, p: Path) -> str:
    return p.relative_to(root).as_posix()

def walk_md(root: Path):
    files = []
    for dp, dn, fn in os.walk(root):
        dp = Path(dp)
        if any(part in IGNORE_DIRS for part in dp.parts):
            continue
        for f in fn:
            p = dp / f
            if p.suffix.lower() in MD_EXTS:
                files.append(p)
    return files

def build_indices(root: Path, md_files):
    path_index = {}
    basename_index = defaultdict(list)
    for p in md_files:
        r = rel(root, p)
        path_index[r.lower()] = r
        basename_index[p.stem.lower()].append(r)
    return path_index, basename_index

def normalize_target(s: str):
    core = s
    display = ''
    if '|' in s:
        core, display = s.split('|', 1)
    core = core.split('#', 1)[0].split('^', 1)[0].strip()
    return core, display

def score_candidate(source_rel: str, candidate_rel: str) -> int:
    score = 0
    s_parts = source_rel.split('/')
    c_parts = candidate_rel.split('/')
    # Same top-level campaign folder
    if s_parts and c_parts and s_parts[0] == c_parts[0]:
        score += 500
    # Same second-level (e.g., 01_Campaigns/Aethermoor)
    if len(s_parts) > 1 and len(c_parts) > 1 and s_parts[1] == c_parts[1]:
        score += 400
    # Same subfolder type (Locations/NPCs/Quests/Sessions)
    subfolders = {'locations', 'npcs', 'quests', 'sessions'}
    s_types = set([p.lower() for p in s_parts]) & subfolders
    c_types = set([p.lower() for p in c_parts]) & subfolders
    if s_types & c_types:
        score += 200
    # Shorter path is better
    score += max(0, 100 - len(candidate_rel))
    return score

def choose_candidate(source_rel: str, candidates: list[str]) -> str | None:
    if not candidates:
        return None
    if len(candidates) == 1:
        return candidates[0]
    scored = [(score_candidate(source_rel, c), c) for c in candidates]
    scored.sort(key=lambda x: (x[0], -len(x[1])), reverse=True)
    top_score = scored[0][0]
    top = [c for s,c in scored if s == top_score]
    if len(top) == 1:
        return top[0]
    # Too ambiguous
    return None

def parse_top_sources(root: Path) -> list[str]:
    triage = root / '_LINK_TRIAGE_TOP200.md'
    if not triage.exists():
        return []
    lines = triage.read_text(encoding='utf-8', errors='ignore').splitlines()
    sources = []
    in_sec = False
    for line in lines:
        if line.strip().startswith('## Highest-Impact Sources'):
            in_sec = True
            continue
        if in_sec:
            if line.strip().startswith('## '):
                break
            m = re.match(r"-\s+([^—]+)—\s+(\d+)\s+broken links", line)
            if m:
                src = m.group(1).strip()
                sources.append(src)
    return sources[:50]

def main():
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    md_files = walk_md(root)
    path_index, basename_index = build_indices(root, md_files)
    top_sources = parse_top_sources(root)
    if not top_sources:
        print('[fix_top_sources] No top sources found')
        return

    fixed_links = 0
    changed_files = 0

    for src_rel in top_sources:
        p = root / src_rel
        if not p.exists():
            # Try case-insensitive find
            low = src_rel.lower()
            match = next((Path(r) for r in path_index.values() if r.lower() == low), None)
            if not match:
                continue
            p = root / match
        try:
            text = p.read_text(encoding='utf-8', errors='ignore')
        except Exception:
            text = p.read_text(errors='ignore')
        orig = text

        def resolve(core: str) -> str | None:
            # already a path
            if '/' in core or '\\' in core:
                key = core.lower()
                if key in path_index: return path_index[key]
                if not key.endswith('.md') and (key + '.md') in path_index: return path_index[key + '.md']
                return None
            base = Path(core).stem.lower()
            cands = basename_index.get(base, [])
            chosen = choose_candidate(src_rel, cands)
            return chosen

        def repl(m):
            nonlocal fixed_links
            raw = m.group(1)
            core, display = raw.split('|',1) if '|' in raw else (raw, '')
            core = core.split('#',1)[0].split('^',1)[0].strip()
            # If resolves, leave
            r = resolve(core)
            if r:
                # if already exact, leave unchanged
                # otherwise, rewrite to full path without .md
                link_path = r[:-3] if r.lower().endswith('.md') else r
                if link_path == core:
                    return m.group(0)
                fixed_links += 1
                return f"[[{link_path}{('|' + display) if display else ''}]]"
            return m.group(0)

        text = LINK_PATTERN.sub(repl, text)
        if text != orig:
            p.write_text(text, encoding='utf-8')
            changed_files += 1

    print(f'[fix_top_sources] files changed: {changed_files}')
    print(f'[fix_top_sources] links fixed: {fixed_links}')

if __name__ == '__main__':
    main()


