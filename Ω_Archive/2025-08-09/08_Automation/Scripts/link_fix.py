#!/usr/bin/env python3
"""
High-confidence Link Fixer for Obsidian Wiki Links

What it fixes automatically:
- Path links missing ".md" when an exact path exists with .md
- Broken basename-only links where there is exactly ONE strong near-match
  (difflib ratio ≥ 0.85) across all basenames, optionally preferring same top context

What it does NOT fix automatically:
- Ambiguous names with multiple plausible matches
- Cross-campaign re-pointing without a clear unique match

Outputs a brief summary and writes changes in-place.

Usage:
  python3 08_Automation/Scripts/link_fix.py [ROOT_DIR]
"""
from __future__ import annotations

import os, re, sys, time, difflib
from pathlib import Path
from collections import defaultdict

LINK_PATTERN = re.compile(r"\[\[([^\]]+)\]\]")
MD_EXTS = {".md"}

def rel(root: Path, p: Path) -> str:
    return p.relative_to(root).as_posix()

def walk_md(root: Path):
    files = []
    for dp, dn, fn in os.walk(root):
        dp = Path(dp)
        if any(part in {'.git', '.obsidian', 'node_modules'} for part in dp.parts):
            continue
        for f in fn:
            p = dp / f
            if p.suffix.lower() in MD_EXTS:
                files.append(p)
    return files

def build_index(root: Path, md_files):
    path_index = {}
    basename_index = defaultdict(list)
    for p in md_files:
        r = rel(root, p)
        path_index[r.lower()] = r
        basename_index[p.stem.lower()].append(r)
    return path_index, basename_index

def normalize_target(s: str) -> tuple[str, str]:
    # returns (core, display)
    core = s
    display = ''
    if '|' in s:
        core, display = s.split('|', 1)
    core = core.split('#', 1)[0].split('^', 1)[0].strip()
    return core, display

def prefer_same_context(source_rel: str, candidates: list[str]) -> list[str]:
    # prioritize candidates sharing the first 2 path parts with source
    src_parts = source_rel.split('/')
    def score(c: str) -> tuple[int, int, str]:
        c_parts = c.split('/')
        same = 0
        for a,b in zip(src_parts, c_parts):
            if a == b:
                same += 1
            else:
                break
        return (-same, len(c), c)  # more same parts first, then shorter path
    return sorted(candidates, key=score)

def main():
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    md_files = walk_md(root)
    path_index, basename_index = build_index(root, md_files)
    basename_keys = list(basename_index.keys())

    total_examined = 0
    total_fixed = 0
    total_candidates = 0
    file_fixes = 0

    for p in md_files:
        try:
            text = p.read_text(encoding='utf-8', errors='ignore')
        except Exception:
            text = p.read_text(errors='ignore')
        orig_text = text
        changed = False

        def replace_link(m):
            nonlocal changed, total_examined, total_candidates, total_fixed
            total_examined += 1
            inner = m.group(1)
            core, display = normalize_target(inner)
            # Already resolvable? skip
            # Direct path (with or without .md)
            def resolves(core_str: str) -> str|None:
                key = core_str.lower()
                if key in path_index:
                    return path_index[key]
                if not key.endswith('.md') and (key + '.md') in path_index:
                    return path_index[key + '.md']
                return None

            resolved = resolves(core)
            if resolved:
                return m.group(0)

            # Try path-like missing .md
            if ('/' in core or '\\' in core):
                # if adding .md yields resolution, fix
                r = resolves(core + ('' if core.endswith('.md') else '.md'))
                if r:
                    new_core = core if core.endswith('.md') else core  # keep no extension style in display
                    # Use path without .md for Obsidian cleanliness
                    if new_core.endswith('.md'):
                        new_core = new_core[:-3]
                    changed = True
                    total_fixed += 1
                    return f"[[{new_core}{('|' + display) if display else ''}]]"

            # Basename-only near match
            base = Path(core).stem.lower()
            if base:
                # exact basename keys first
                cands = basename_index.get(base, [])
                candidate_pool = list(cands)
                if not candidate_pool:
                    # use near matches
                    close = difflib.get_close_matches(base, basename_keys, n=3, cutoff=0.85)
                    for k in close:
                        candidate_pool.extend(basename_index.get(k, []))
                total_candidates += len(candidate_pool)
                if len(candidate_pool) == 1:
                    chosen = candidate_pool[0]
                elif len(candidate_pool) > 1:
                    # prefer same context
                    chosen = prefer_same_context(rel(root, p), candidate_pool)[0]
                    # if still ambiguous across very different contexts, skip
                    # heuristic: ensure top folder matches
                    src_top = rel(root, p).split('/')[0]
                    cand_top = chosen.split('/')[0]
                    if src_top != cand_top:
                        return m.group(0)
                else:
                    return m.group(0)

                # Build new link using path without .md
                link_path = chosen[:-3] if chosen.lower().endswith('.md') else chosen
                changed = True
                total_fixed += 1
                return f"[[{link_path}{('|' + display) if display else ''}]]"

            return m.group(0)

        text = LINK_PATTERN.sub(replace_link, text)
        if changed and text != orig_text:
            p.write_text(text, encoding='utf-8')
            file_fixes += 1

    print(f"[link_fix] examined links: {total_examined}")
    print(f"[link_fix] files changed: {file_fixes}")
    print(f"[link_fix] links fixed: {total_fixed}")
    print(f"[link_fix] candidate pools consulted: {total_candidates}")

if __name__ == '__main__':
    main()


