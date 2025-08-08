#!/usr/bin/env python3
"""
Vault Audit Tool for Obsidian TTRPG Vaults

Generates:
- _LINK_INTEGRITY_REPORT.md
- _RELATIONSHIP_VALIDATION.md
- _VAULT_ARCHITECTURE_ANALYSIS.md

Features:
- Scans all Markdown notes for [[wiki links]] (including display text, headings, and block refs)
- Resolves links to actual files (pathful and basename-only resolution)
- Reports broken links, ambiguous links, case-mismatch links
- Computes inbound/outbound link graphs and orphan pages
- Flags relationship asymmetries (A links to B, but B does not link to A) among NPCs and Locations
- Produces folder hierarchy counts and duplication of basenames across folders

Usage:
  python3 08_Automation/Scripts/vault_audit.py [ROOT_DIR]
If ROOT_DIR is omitted, current working directory is used.
"""

from __future__ import annotations

import os
import re
import sys
import json
import time
import difflib
from pathlib import Path
from collections import defaultdict, Counter
from typing import Dict, List, Tuple, Set


LINK_PATTERN = re.compile(r"(!)?\[\[([^\]]+)\]\]")

MD_EXTS = {".md"}
ASSET_EXTS = {".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"}
OTHER_LINKABLE_EXTS = {".base", ".canvas", ".json"}

# Directories to ignore in structure/orphan checks (but still allow as link targets for assets)
IGNORE_DIR_NAME_FRAGMENTS = {
    ".git", ".obsidian", "node_modules",
}

ORPHAN_EXCLUDE_DIR_PREFIXES = [
    "05_Templates/", "Ω_System/", "Ω_Archive/", "0-Scratch Notes/", "08_Automation/",
]


def is_ignored_dir(path: Path) -> bool:
    parts = set(p for p in path.parts)
    return any(x in parts for x in IGNORE_DIR_NAME_FRAGMENTS)


def rel_of(root: Path, p: Path) -> str:
    return p.relative_to(root).as_posix()


def walk_files(root: Path) -> Tuple[List[Path], List[Path], List[Path]]:
    md_files: List[Path] = []
    asset_files: List[Path] = []
    other_linkables: List[Path] = []
    for dirpath, dirnames, filenames in os.walk(root):
        # prune ignored dirs
        dp = Path(dirpath)
        if is_ignored_dir(dp):
            continue
        for fn in filenames:
            p = Path(dirpath) / fn
            suffix = p.suffix.lower()
            if suffix in MD_EXTS:
                md_files.append(p)
            elif suffix in ASSET_EXTS:
                asset_files.append(p)
            elif suffix in OTHER_LINKABLE_EXTS:
                other_linkables.append(p)
    return md_files, asset_files, other_linkables


def build_indices(root: Path, md_files: List[Path], asset_files: List[Path], other_linkables: List[Path]):
    # Map of normalized relative path → real relative path
    def norm_rel(p: Path) -> str:
        return rel_of(root, p).lower()

    path_index: Dict[str, str] = {}
    for p in md_files + asset_files + other_linkables:
        r = rel_of(root, p)
        path_index[r.lower()] = r

    # Basename (note title) → list of relative paths
    basename_index: Dict[str, List[str]] = defaultdict(list)
    for p in md_files:
        base = p.stem.lower()
        basename_index[base].append(rel_of(root, p))

    return path_index, basename_index


def normalize_link_target(raw: str) -> str:
    # Strip display text: [[Target|Display]] → Target
    target = raw.split("|", 1)[0]
    # Strip heading and block anchors: [[Target#H]] [[Target^block]]
    target = target.split("#", 1)[0].split("^", 1)[0]
    return target.strip()


def resolve_link(
    root: Path,
    target_raw: str,
    path_index: Dict[str, str],
    basename_index: Dict[str, List[str]],
) -> Tuple[str | None, str]:
    """
    Try to resolve a link target to a relative file path.
    Returns (resolved_rel_path_or_None, status)
    status ∈ {ok_unique, ok_asset, ambiguous, broken}
    """
    t = normalize_link_target(target_raw)
    if not t:
        return None, "broken"

    # If target includes an extension, try path match as-is
    if "." in os.path.basename(t):
        key = t.lower()
        if key in path_index:
            relp = path_index[key]
            # classify asset vs md
            if Path(relp).suffix.lower() in ASSET_EXTS:
                return relp, "ok_asset"
            else:
                return relp, "ok_unique"
        # also try adding relative .md if user omitted extension incorrectly
        if not t.lower().endswith(".md"):
            alt = (t + ".md").lower()
            if alt in path_index:
                return path_index[alt], "ok_unique"
        return None, "broken"

    # If target contains folders, attempt path match with .md
    if "/" in t or "\\" in t:
        candidate = (t.replace("\\", "/") + ".md").lower()
        if candidate in path_index:
            return path_index[candidate], "ok_unique"
        # try exact path without adding .md (maybe folder index files)
        if t.lower() in path_index:
            relp = path_index[t.lower()]
            if Path(relp).suffix.lower() in ASSET_EXTS:
                return relp, "ok_asset"
            return relp, "ok_unique"
        # fallback to basename resolution below

    # Basename resolution
    base = Path(t).stem.lower()
    candidates = basename_index.get(base, [])
    if not candidates:
        return None, "broken"
    if len(candidates) == 1:
        return candidates[0], "ok_unique"
    return None, "ambiguous"


def case_mismatch(link_text: str, resolved_rel: str) -> bool:
    # Compare basename case (ignoring ext)
    lt = Path(normalize_link_target(link_text)).stem
    actual = Path(resolved_rel).stem
    try:
        return lt != actual and lt.lower() == actual.lower()
    except Exception:
        return False


def analyze_links(root: Path, md_files: List[Path], path_index, basename_index):
    broken: List[Dict] = []
    ambiguous: List[Dict] = []
    case_issues: List[Dict] = []
    ok_links: List[Dict] = []
    inbound: Dict[str, List[Tuple[str, int]]] = defaultdict(list)
    outbound: Dict[str, List[Tuple[str, int, str]]] = defaultdict(list)

    # Ignore certain sources (templates, system, reports)
    IGNORE_SOURCE_PREFIXES = [
        "05_Templates/", "Ω_System/", "Ω_Archive/",
    ]
    IGNORE_SOURCE_FILES = {
        "_LINK_INTEGRITY_REPORT.md",
        "_RELATIONSHIP_VALIDATION.md",
        "_VAULT_ARCHITECTURE_ANALYSIS.md",
        "_COMBAT_BALANCE_REPORT.md",
        "_BASES_ENHANCEMENT_GUIDE.md",
    }

    def should_scan_source(rel: str) -> bool:
        for pref in IGNORE_SOURCE_PREFIXES:
            if rel.startswith(pref):
                return False
        if Path(rel).name in IGNORE_SOURCE_FILES:
            return False
        return True

    # Preload content once per file
    for md in md_files:
        rel = rel_of(root, md)
        if not should_scan_source(rel):
            continue
        try:
            text = md.read_text(encoding="utf-8", errors="ignore")
        except Exception:
            # fallback with default
            text = md.read_text(errors="ignore")
        for i, line in enumerate(text.splitlines(), start=1):
            for m in LINK_PATTERN.finditer(line):
                is_embed = bool(m.group(1))
                inner = m.group(2)
                target_norm = normalize_link_target(inner)
                resolved, status = resolve_link(root, inner, path_index, basename_index)
                rec = {
                    "source": rel,
                    "line": i,
                    "raw": m.group(0),
                    "target": inner,
                    "target_norm": target_norm,
                    "embed": is_embed,
                    "status": status,
                    "resolved": resolved,
                }
                if status == "ok_unique" or status == "ok_asset":
                    ok_links.append(rec)
                    if status == "ok_unique" and resolved:
                        inbound[resolved].append((rel, i))
                    outbound[rel].append((resolved or target_norm, i, status))
                    if status == "ok_unique" and resolved and case_mismatch(inner, resolved):
                        case_issues.append(rec)
                elif status == "broken":
                    broken.append(rec)
                    outbound[rel].append((target_norm, i, status))
                else:
                    ambiguous.append(rec)
                    outbound[rel].append((target_norm, i, status))

    return {
        "broken": broken,
        "ambiguous": ambiguous,
        "case_issues": case_issues,
        "ok_links": ok_links,
        "inbound": inbound,
        "outbound": outbound,
    }


def compute_orphans(root: Path, md_files: List[Path], inbound: Dict[str, List[Tuple[str, int]]]) -> List[str]:
    all_rel = [rel_of(root, p) for p in md_files]
    orphans = []
    for rel in all_rel:
        if len(inbound.get(rel, [])) == 0:
            # Exclude templates/system/etc.
            if any(rel.startswith(prefix) for prefix in ORPHAN_EXCLUDE_DIR_PREFIXES):
                continue
            # Exclude README
            if Path(rel).name.lower() == "readme.md":
                continue
            orphans.append(rel)
    return sorted(orphans)


def duplication_report(basename_index: Dict[str, List[str]]) -> List[Tuple[str, List[str]]]:
    dups = []
    for base, paths in basename_index.items():
        if len(paths) > 1:
            dups.append((base, sorted(paths)))
    dups.sort(key=lambda x: (-len(x[1]), x[0]))
    return dups


def folder_counts(root: Path, md_files: List[Path]) -> Dict[str, int]:
    counts: Dict[str, int] = defaultdict(int)
    for p in md_files:
        rel = rel_of(root, p)
        folder = Path(rel).parent.as_posix()
        counts[folder] += 1
    return dict(sorted(counts.items(), key=lambda kv: (-kv[1], kv[0])))


def near_matches(term: str, candidates: List[str], n=3) -> List[str]:
    return difflib.get_close_matches(term, candidates, n=n, cutoff=0.6)


def write_link_integrity_report(
    root: Path,
    analysis: Dict,
    basename_index: Dict[str, List[str]],
):
    total_links = sum(1 for _ in analysis["ok_links"]) + len(analysis["broken"]) + len(analysis["ambiguous"]) + len(analysis["case_issues"])
    broken = analysis["broken"]
    ambiguous = analysis["ambiguous"]
    case_issues = analysis["case_issues"]
    inbound = analysis["inbound"]

    # Orphans
    md_files, _, _ = walk_files(root)
    orphans = compute_orphans(root, md_files, inbound)

    # Cross-reference matrix: top 15 by inbound degree (NPCs/Locations priority)
    indeg = Counter({k: len(v) for k, v in inbound.items()})
    # Prioritize files in NPCs/Locations
    def priority(rel: str) -> int:
        pr = 0
        path_lower = rel.lower()
        if "/npcs/" in path_lower:
            pr += 100000
        if "/locations/" in path_lower:
            pr += 50000
        return pr + indeg.get(rel, 0)

    top_nodes = sorted(indeg.keys(), key=lambda r: (priority(r), r), reverse=True)[:15]
    # Adjacency check for mutual links
    outmap = defaultdict(set)
    for src, outs in analysis["outbound"].items():
        for tgt, _line, status in outs:
            if status == "ok_unique":
                outmap[src].add(tgt)

    def mutual(a: str, b: str) -> bool:
        return (b in outmap.get(a, set())) and (a in outmap.get(b, set()))

    # Build report
    out = []
    out.append("# Link Integrity Report\n")
    out.append(f"Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    out.append("")
    out.append("## Summary\n")
    out.append(f"- Total links analyzed: {total_links}")
    out.append(f"- OK links: {total_links - len(broken) - len(ambiguous)}")
    out.append(f"- Broken links: {len(broken)}")
    out.append(f"- Ambiguous links: {len(ambiguous)}")
    out.append(f"- Case-mismatch links: {len(case_issues)}")
    out.append(f"- Orphaned pages (excluding templates/system): {len(orphans)}\n")

    if broken:
        out.append("## Broken Links\n")
        # provide near matches
        candidates = list(basename_index.keys())
        for rec in broken[:1000]:  # cap to keep file readable
            nm = near_matches(Path(rec["target_norm"]).stem.lower(), candidates, n=3)
            hint = f" | suggestions: {', '.join(nm)}" if nm else ""
            out.append(f"- {rec['source']}:{rec['line']} — {rec['raw']} → '{rec['target_norm']}'{hint}")
        out.append("")

    if ambiguous:
        out.append("## Ambiguous Links (multiple matching notes)\n")
        for rec in ambiguous[:1000]:
            base = Path(rec["target_norm"]).stem.lower()
            cands = basename_index.get(base, [])
            out.append(f"- {rec['source']}:{rec['line']} — {rec['raw']} → matches {len(cands)}: {', '.join(cands[:10])}{' …' if len(cands) > 10 else ''}")
        out.append("")

    if case_issues:
        out.append("## Case Mismatch (link text case differs from file name)\n")
        for rec in case_issues[:1000]:
            out.append(f"- {rec['source']}:{rec['line']} — {rec['raw']} → {rec['resolved']}")
        out.append("")

    if orphans:
        out.append("## Orphaned Pages\n")
        for rel in orphans[:2000]:
            out.append(f"- {rel}")
        out.append("")

    if top_nodes:
        out.append("## Cross-reference Matrix (top NPC/Location notes by inbound links)\n")
        out.append("Mutual link = ✔︎, one-way = →, none = ·\n")
        headers = [Path(n).stem for n in top_nodes]
        out.append("| | " + " | ".join(headers) + " |")
        out.append("|" + "---|" * (len(headers) + 1))
        for a in top_nodes:
            row = [Path(a).stem]
            for b in top_nodes:
                if a == b:
                    row.append("—")
                else:
                    if mutual(a, b):
                        row.append("✔︎")
                    elif (b in outmap.get(a, set())) or (a in outmap.get(b, set())):
                        row.append("→")
                    else:
                        row.append("·")
            out.append("| " + " | ".join(row) + " |")
        out.append("")

    (root / "_LINK_INTEGRITY_REPORT.md").write_text("\n".join(out), encoding="utf-8")


def write_relationship_validation(root: Path, analysis: Dict):
    # Consider links between notes under NPCs and Locations as relationships
    out = []
    out.append("# Relationship Validation\n")
    out.append(f"Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    out.append("")

    outbound = analysis["outbound"]
    # Build directed edges only among notes in NPCs or Locations
    def is_entity(rel: str) -> bool:
        rl = rel.lower()
        return "/npcs/" in rl or "/locations/" in rl

    edges = set()
    nodes = set()
    for src, outs in outbound.items():
        if not is_entity(src):
            continue
        for tgt, _line, status in outs:
            if status == "ok_unique" and isinstance(tgt, str) and is_entity(tgt):
                edges.add((src, tgt))
                nodes.add(src)
                nodes.add(tgt)

    inconsistencies = []
    for a, b in sorted(edges):
        if a == b:
            continue
        if (b, a) not in edges:
            inconsistencies.append((a, b))

    out.append("## Unidirectional Relationships (A references B, but B doesn't reference A)\n")
    if not inconsistencies:
        out.append("- None found among NPCs/Locations.")
    else:
        for a, b in inconsistencies:
            out.append(f"- {a} → {b}")

    (root / "_RELATIONSHIP_VALIDATION.md").write_text("\n".join(out), encoding="utf-8")


def write_architecture_analysis(root: Path, md_files: List[Path], basename_index: Dict[str, List[str]]):
    out = []
    out.append("# Vault Architecture Analysis\n")
    out.append(f"Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}\n")
    out.append("")

    # File counts
    out.append("## File Counts\n")
    out.append(f"- Total Markdown files: {len(md_files)}")
    # By folder
    counts = folder_counts(root, md_files)
    out.append("")
    out.append("### Top Folders by Markdown Count\n")
    for folder, cnt in list(counts.items())[:50]:
        out.append(f"- {folder or '.'}: {cnt}")
    out.append("")

    # Duplicated basenames
    dups = duplication_report(basename_index)
    out.append("## Duplicate Basenames (same title in multiple locations)\n")
    if not dups:
        out.append("- None found.")
    else:
        for base, paths in dups[:200]:
            out.append(f"- '{base}': {', '.join(paths[:10])}{' …' if len(paths) > 10 else ''}")
    out.append("")

    # Naming convention scan (spaces vs underscores vs kebab)
    conv = Counter()
    offenders = []
    for p in md_files:
        name = p.name
        base = p.stem
        if "_" in name:
            conv["underscores"] += 1
        if "-" in name:
            conv["kebab"] += 1
        if " " in name:
            conv["spaces"] += 1
        # flag consecutive spaces or trailing/leading spaces
        if "  " in name or name != name.strip():
            offenders.append(rel_of(root, p))

    out.append("## Naming Conventions\n")
    out.append(f"- Files with spaces: {conv['spaces']}")
    out.append(f"- Files with underscores: {conv['underscores']}")
    out.append(f"- Files with hyphens: {conv['kebab']}")
    if offenders:
        out.append("- Files with double/trailing/leading spaces (cleanup suggested):")
        for r in offenders[:200]:
            out.append(f"  - {r}")
    out.append("")

    (root / "_VAULT_ARCHITECTURE_ANALYSIS.md").write_text("\n".join(out), encoding="utf-8")


def main():
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    t0 = time.time()
    print(f"[vault_audit] Root: {root}")
    md_files, asset_files, other_linkables = walk_files(root)
    print(f"[vault_audit] Markdown files: {len(md_files)} | Assets: {len(asset_files)}")
    path_index, basename_index = build_indices(root, md_files, asset_files, other_linkables)
    print(f"[vault_audit] Basename index entries: {len(basename_index)} | Path index entries: {len(path_index)}")

    analysis = analyze_links(root, md_files, path_index, basename_index)
    print(
        f"[vault_audit] Links — ok:{len(analysis['ok_links'])} broken:{len(analysis['broken'])} ambiguous:{len(analysis['ambiguous'])} case:{len(analysis['case_issues'])}"
    )

    write_link_integrity_report(root, analysis, basename_index)
    write_relationship_validation(root, analysis)
    write_architecture_analysis(root, md_files, basename_index)

    dt = time.time() - t0
    print(f"[vault_audit] Done in {dt:.2f}s")


if __name__ == "__main__":
    main()


