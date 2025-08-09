#!/usr/bin/env python3
"""
Generate a high-priority triage list from _LINK_INTEGRITY_REPORT.md

Outputs: _LINK_TRIAGE_TOP200.md
 - Top broken targets by frequency
 - Top source files by broken count (highlighting GM/Player/Dashboard paths)
 - Focus suggestions
"""
from __future__ import annotations

import re, sys, time
from pathlib import Path
from collections import Counter, defaultdict


def parse_report(text: str):
    broken_section = False
    entries = []
    for line in text.splitlines():
        if line.strip().startswith('## Broken Links'):
            broken_section = True
            continue
        if broken_section:
            if line.strip().startswith('## '):
                break
            m = re.match(r"-\s+([^:]+):(\d+)\s+—\s+\[\[(.+?)\]\].*?→\s+'(.*?)'", line)
            if m:
                source, ln, raw, target = m.groups()
                entries.append((source.strip(), int(ln), raw, target))
    return entries


def main():
    root = Path.cwd()
    report = root / '_LINK_INTEGRITY_REPORT.md'
    if not report.exists():
        print('[triage] _LINK_INTEGRITY_REPORT.md not found')
        return
    text = report.read_text(encoding='utf-8', errors='ignore')
    entries = parse_report(text)
    if not entries:
        print('[triage] No broken entries parsed')
        return

    target_counts = Counter([t for (_s,_l,_r,t) in entries])
    source_counts = Counter([s for (s,_l,_r,_t) in entries])

    # Priority weighting for common paths
    def weight_source(s: str) -> int:
        s = s.lower()
        w = 0
        if s.startswith('00_dashboard/'): w += 100
        if s.startswith('07_player_resources/'): w += 80
        if s.startswith('01_campaigns/'): w += 60
        if 'master_campaign_dashboard' in s: w += 120
        if 'readme' in s: w += 20
        return w

    prioritized_sources = sorted(source_counts.items(), key=lambda kv: (weight_source(kv[0]), kv[1]), reverse=True)[:50]
    top_targets = target_counts.most_common(200)

    out = []
    out.append('# Link Triage (Top 200)')
    out.append(f'Generated: {time.strftime("%Y-%m-%d %H:%M:%S")}')
    out.append('')
    out.append('## Highest-Impact Sources (Top 50)')
    for s, c in prioritized_sources:
        out.append(f'- {s} — {c} broken links')
    out.append('')
    out.append('## Top Broken Targets')
    for t, c in top_targets:
        disp = t if t else '(empty/anchor)'
        out.append(f'- {disp}: {c}')
    out.append('')
    out.append('## Focus Suggestions')
    out.append('- Fix dashboard and player resources first to improve in-play navigation.')
    out.append('- Replace template placeholder links (e.g., [[Location]], [[NPC]]) with plain text or correct targets.')
    out.append('- Normalize anchor-only links by matching to nearest headings or removing the anchor.')

    (root / '_LINK_TRIAGE_TOP200.md').write_text('\n'.join(out), encoding='utf-8')
    print('[triage] wrote _LINK_TRIAGE_TOP200.md')


if __name__ == '__main__':
    main()


