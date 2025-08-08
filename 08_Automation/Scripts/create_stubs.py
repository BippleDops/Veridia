#!/usr/bin/env python3
from __future__ import annotations

import os, re, sys, time
from pathlib import Path
from collections import Counter, defaultdict

ROOT = Path.cwd()
TRIAGE = ROOT / '_LINK_TRIAGE_TOP200.md'
REPORT = ROOT / '_LINK_INTEGRITY_REPORT.md'

GENERIC = {
    '', '(empty/anchor)', 'NPC', 'NPCs', 'Entity', 'Entities', 'Session', 'Sessions',
    'Quest', 'Quests', 'Location', 'Locations', 'Template-Combat-Encounter',
    'Template-Session-Enhanced'
}

NPC_TITLES = {
    'duke','duchess','archon','admiral','captain','prophet','doctor','commander','senator',
    'envoy','mediator','priest','banker','master','spymaster','scout','keeper','engineer',
    'brother','sister','lord','lady','high','chief','chronomancer','astrologer','choir','elder'
}

FACTION_WORDS = {
    'order','church','parliament','hegemony','wardens','free current','free','academy','crown',
    'shadow','depth wardens','tethyan','guild','alliance','consortium','coalition','broker'
}

LOCATION_WORDS = {
    'prime','trench','market','markets','gardens','depths','cathedral','atoll','pools','wing',
    'terminal','gallery','harbor','palace','vaults','meadows','waves','library','bridge',
    'vault','island','dome','district','quarter','port','city'
}

QUEST_VERBS = {'stop','investigate','discover','rescue','find','defeat','protect','escort'}

MECHANIC_WORDS = {'rules','mechanics','protocol','act'}

def parse_triage_targets() -> list[str]:
    if not TRIAGE.exists():
        return []
    lines = TRIAGE.read_text(encoding='utf-8', errors='ignore').splitlines()
    targets = []
    in_sec = False
    for line in lines:
        if line.strip().startswith('## Top Broken Targets'):
            in_sec = True
            continue
        if in_sec:
            if line.strip().startswith('## '):
                break
            m = re.match(r"-\s+(.+?):\s+\d+", line)
            if m:
                t = m.group(1).strip()
                if t not in GENERIC and not t.startswith('Ω_System/') and ' ' not in t.strip('"') or True:
                    targets.append(t)
    # Keep order; take top 50
    return targets[:50]

def parse_report_entries() -> list[tuple[str,int,str,str]]:
    if not REPORT.exists():
        return []
    lines = REPORT.read_text(encoding='utf-8', errors='ignore').splitlines()
    entries = []
    in_broken = False
    for line in lines:
        if line.strip().startswith('## Broken Links'):
            in_broken = True
            continue
        if in_broken:
            if line.strip().startswith('## '):
                break
            m = re.match(r"-\s+([^:]+):(\d+)\s+—\s+\[\[(.+?)\]\].*?→\s+'(.*?)'", line)
            if m:
                src, ln, raw, tgt = m.groups()
                entries.append((src.strip(), int(ln), raw, tgt))
    return entries

def pick_world(sources: list[str]) -> str:
    counts = Counter()
    for s in sources:
        if s.startswith('01_Campaigns/Aquabyssos/'):
            counts['Aquabyssos'] += 1
        elif s.startswith('01_Campaigns/Aethermoor/'):
            counts['Aethermoor'] += 1
    if not counts:
        return 'Aquabyssos'
    return counts.most_common(1)[0][0]

def pick_category(target: str, sources: list[str]) -> str:
    # Prefer based on source subfolder
    sf_counts = Counter()
    for s in sources:
        sl = s.lower()
        if '/locations/' in sl: sf_counts['location'] += 1
        if '/npcs/' in sl: sf_counts['npc'] += 1
        if '/quests/' in sl: sf_counts['quest'] += 1
        if '/factions/' in sl: sf_counts['faction'] += 1
        if '/mechanics/' in sl: sf_counts['mechanic'] += 1
        if '/lore/' in sl: sf_counts['lore'] += 1
    if sf_counts:
        cat, cnt = sf_counts.most_common(1)[0]
        return cat
    t = target.lower()
    if any(w in t for w in MECHANIC_WORDS):
        return 'mechanic'
    if any(w in t for w in LOCATION_WORDS):
        return 'location'
    if any(w in t for w in FACTION_WORDS):
        return 'faction'
    if t.split(':')[0].split()[0] in QUEST_VERBS:
        return 'quest'
    if any(t.startswith(k) or k in t for k in NPC_TITLES):
        return 'npc'
    # Default to lore
    return 'lore'

def ensure_dir(p: Path):
    p.parent.mkdir(parents=True, exist_ok=True)

def write_stub(path: Path, target: str, world: str, category: str):
    if path.exists():
        return False
    ensure_dir(path)
    now = time.strftime('%Y-%m-%d')
    fm = [
        '---',
        'tags: [stub]',
        f'status: "stub"',
        f'world: "{world}"',
        f'type: "{category}"',
        'created_by: "auto-stub"',
        f'created: {now}',
        '---',
        '',
        f'# {target}',
        '',
        '> Stub placeholder generated automatically to satisfy existing links. Flesh out content after Phase 10 validation.',
        '',
    ]
    path.write_text('\n'.join(fm), encoding='utf-8')
    return True

def target_path(world: str, category: str, name: str) -> Path:
    base = ROOT / '01_Campaigns' / world
    sub = {
        'location': 'Locations',
        'npc': 'NPCs',
        'quest': 'Quests',
        'faction': 'Factions',
        'mechanic': 'Mechanics',
        'lore': 'Lore',
    }[category]
    safe = name.replace('/', '-').replace(':','-')
    return base / sub / f'{safe}.md'

def main():
    targets = parse_triage_targets()
    entries = parse_report_entries()
    if not targets or not entries:
        print('[create_stubs] nothing to do')
        return
    # map target -> sources list
    t_to_sources = defaultdict(list)
    for src, _ln, _raw, tgt in entries:
        t_to_sources[tgt].append(src)
    created = 0
    for t in targets:
        sources = t_to_sources.get(t, [])
        if not sources:
            continue
        world = pick_world(sources)
        category = pick_category(t, sources)
        path = target_path(world, category, t)
        if write_stub(path, t, world, category):
            created += 1
    print(f'[create_stubs] created stubs: {created}')

if __name__ == '__main__':
    main()


