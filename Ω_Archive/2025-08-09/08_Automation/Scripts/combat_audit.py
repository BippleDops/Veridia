#!/usr/bin/env python3
"""
Combat Audit for 5e Encounters

Scans session notes for encounters and estimates adjusted XP/thresholds per DMG.
Outputs: _COMBAT_BALANCE_REPORT.md

Assumptions:
- Sessions encode encounters in tables or lists under headings like "Encounters" or have a frontmatter field encounters: [links]
- Party level approximated via frontmatter `level` or Campaign Context default (3-5) if missing

This is a heuristic auditor to flag likely over/under-tuned fights for manual review.
"""
from __future__ import annotations

import os, re, sys, json, time
from pathlib import Path

DMG_THRESHOLDS = {
    1: (25, 50, 75, 100),
    2: (50, 100, 150, 200),
    3: (75, 150, 225, 400),
    4: (125, 250, 375, 500),
    5: (250, 500, 750, 1100),
    6: (300, 600, 900, 1400),
    7: (350, 750, 1100, 1700),
    8: (450, 900, 1400, 2100),
    9: (550, 1100, 1600, 2400),
    10: (600, 1200, 1900, 2800)
}

CR_TO_XP = {
    0: 10, 0.125: 25, 0.25: 50, 0.5: 100,
    1: 200, 2: 450, 3: 700, 4: 1100, 5: 1800,
    6: 2300, 7: 2900, 8: 3900, 9: 5000, 10: 5900,
}

MULTIPLIERS = [
    (1, 1.0), (2, 1.5), (3, 2.0), (6, 2.5), (10, 3.0), (14, 4.0)
]

CR_PATTERN = re.compile(r"CR\s*([0-9]+(?:\.[0-9]+)?|1/2|1/4|1/8)")

def parse_fraction(s: str) -> float:
    if "/" in s:
        num, den = s.split("/", 1)
        return float(num) / float(den)
    return float(s)

def monster_xp_from_cr_text(text: str) -> int | None:
    m = CR_PATTERN.search(text)
    if not m:
        return None
    crs = m.group(1)
    try:
        cr = parse_fraction(crs)
    except Exception:
        return None
    # approximate XP table (cap at 10 for simplicity)
    if cr in CR_TO_XP:
        return CR_TO_XP[cr]
    # linear-ish fallback
    return int(200 * cr)

def adjusted_xp(base_xp: int, count: int) -> int:
    mult = 1.0
    for thresh, m in MULTIPLIERS:
        if count <= thresh:
            mult = m
            break
        mult = m
    return int(base_xp * mult)

def party_thresholds(level: int, size: int=4):
    easy, med, hard, deadly = DMG_THRESHOLDS.get(level, DMG_THRESHOLDS[min(max(level,1),10)])
    return easy*size, med*size, hard*size, deadly*size

def classify(total_xp: int, thresholds):
    e, m, h, d = thresholds
    if total_xp < e: return "Trivial"
    if total_xp < m: return "Easy"
    if total_xp < h: return "Medium"
    if total_xp < d: return "Hard"
    return "Deadly"

def scan_sessions(root: Path):
    sessions = []
    for p in root.rglob("*.md"):
        rp = p.as_posix()
        if "/Sessions/" in rp and not any(x in rp for x in ["05_Templates", "Ω_System", "Ω_Archive"]):
            try:
                text = p.read_text(encoding='utf-8', errors='ignore')
            except Exception:
                text = p.read_text(errors='ignore')
            sessions.append((rp, text))
    return sessions

def estimate_encounter_xp(text: str) -> list[tuple[str, int, int]]:
    results = []
    # naive parse of "Encounters" sections: look for lines with quantity x Monster (CR N)
    lines = text.splitlines()
    block = []
    in_block = False
    for ln in lines:
        if re.search(r"^##+\s*(Encounters|Combat)", ln, re.I):
            in_block = True
            block = []
            continue
        if in_block and re.match(r"^##+\s*", ln):
            break
        if in_block:
            block.append(ln)
    if not block:
        # try table markers
        block = [l for l in lines if re.search(r"Encounter|CR|Difficulty", l, re.I)]

    # extract simple patterns like: "(3) Shadow Stalkers (CR 3)" or "Shadow Demon — CR 4"
    entries = []
    for l in block:
        mqty = re.search(r"\((\d+)\)\s*([^\(\)]+)\(CR\s*([\d/\.]+)\)", l, re.I)
        if mqty:
            qty = int(mqty.group(1))
            crs = mqty.group(3)
            xp_single = monster_xp_from_cr_text(f"CR {crs}")
            if xp_single:
                entries.append((qty, xp_single))
            continue
        # single
        m1 = CR_PATTERN.search(l)
        if m1:
            xp_single = monster_xp_from_cr_text(m1.group(0))
            if xp_single:
                entries.append((1, xp_single))
    if entries:
        count = sum(q for q,_ in entries)
        base = sum(q*xp for q,xp in entries)
        results.append(("Encounter", base, count))
    return results

def main():
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd().resolve()
    sessions = scan_sessions(root)
    report = ["# Combat Balance Report", f"Generated: {time.strftime('%Y-%m-%d %H:%M:%S')}", ""]
    default_party_level = 4
    default_party_size = 4
    flagged = 0
    for rp, text in sessions:
        # infer level from frontmatter
        mlev = re.search(r"^level:\s*(\d+)", text, re.M)
        level = int(mlev.group(1)) if mlev else default_party_level
        thresholds = party_thresholds(level, default_party_size)
        encs = estimate_encounter_xp(text)
        if not encs:
            continue
        report.append(f"## {rp}")
        for name, base_xp, count in encs:
            adj = adjusted_xp(base_xp, count)
            tier = classify(adj, thresholds)
            report.append(f"- {name}: base XP {base_xp}, count {count}, adjusted {adj} → {tier} (Party L{level}, size {default_party_size})")
            if tier in ("Trivial", "Deadly"):
                flagged += 1
        report.append("")
    report.append(f"---\nFlagged extremes (Trivial/Deadly): {flagged}")
    (root/"_COMBAT_BALANCE_REPORT.md").write_text("\n".join(report), encoding='utf-8')
    print(f"[combat_audit] wrote _COMBAT_BALANCE_REPORT.md with {flagged} flagged entries")

if __name__ == '__main__':
    main()


