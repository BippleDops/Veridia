#!/usr/bin/env python3
"""
Audit and standardize CR/danger levels; normalize date abbreviations; report timeline usage.
- People: ensure frontmatter `cr: <value>` matches any 'Challenge X' in stat blocks
- Places: normalize `danger_level` to one of [Low, Moderate, High, Extreme]
- Dates: normalize A.C./B.C. to AC/BC; collect occurrences of timeline markers for review
Outputs a markdown report under reports/date_cr_audit.md
"""

import re
from pathlib import Path
from datetime import datetime
from typing import Tuple, Dict, Optional

ROOT = Path('/workspace')
WB = ROOT / '02_Worldbuilding'
REPORTS = ROOT / 'reports'
REPORTS.mkdir(parents=True, exist_ok=True)

DANGER_ALLOWED = ['Low', 'Moderate', 'High', 'Extreme']
DANGER_MAP = {
    'extreme': 'Extreme', 'severe': 'Extreme', 'very high': 'Extreme', 'very_high': 'Extreme',
    'high': 'High', 'elevated': 'High',
    'moderate': 'Moderate', 'medium': 'Moderate', 'unknown': 'Moderate', 'normal': 'Moderate',
    'low': 'Low', 'minor': 'Low', 'very low': 'Low', 'very_low': 'Low'
}

DATE_PATTERNS = [
    r'\bA\.\s?C\.\b', r'\bB\.\s?C\.\b',  # A.C., B.C.
    r'\bAC\b', r'\bBC\b',
    r'\bAfter Catastrophe\b', r'\bBefore Catastrophe\b',
    r'\bAS\b', r'\bBS\b', r'\bAfter Submersion\b', r'\bBefore Submersion\b',
    r'\bCE\b', r'\bBCE\b',
    r'\byears? ago\b', r'\bYear\s+\d{1,4}\b'
]
DATE_REGEX = re.compile('|'.join(DATE_PATTERNS), flags=re.IGNORECASE)

# Robust CR/Challenge patterns: allow bolded **Challenge**, CR X, or Challenge Rating X
CHALLENGE_REGEXES = [
    re.compile(r'(?:\*\*)?Challenge(?:\*\*)?\s+(\d+(?:/\d+)?)\b', re.IGNORECASE),
    re.compile(r'\bCR\s*(\d+(?:/\d+)?)\b', re.IGNORECASE),
    re.compile(r'Challenge\s*Rating\s*(\d+(?:/\d+)?)\b', re.IGNORECASE),
]
FM_START = re.compile(r'^---\s*$')
FM_KV = re.compile(r'^(?P<key>[A-Za-z0-9_\-]+)\s*:\s*(?P<val>.*)$')

class FileEdit:
    def __init__(self, path: Path, original: str):
        self.path = path
        self.original = original
        self.modified = original
        self.changed = False
        self.fm_start = None
        self.fm_end = None
        self.frontmatter: Dict[str, str] = {}
        self._parse_frontmatter()

    def _parse_frontmatter(self):
        lines = self.modified.splitlines()
        if not lines or not lines[0].strip().startswith('---'):
            return
        self.fm_start = 0
        # find fm_end
        for i in range(1, min(len(lines), 200)):
            if lines[i].strip().startswith('---'):
                self.fm_end = i
                break
        if self.fm_end is None:
            # invalid fm
            return
        # parse kv lines between
        for i in range(1, self.fm_end):
            m = FM_KV.match(lines[i])
            if m:
                key = m.group('key')
                val = m.group('val')
                self.frontmatter[key] = val

    def set_frontmatter_key(self, key: str, val: str):
        lines = self.modified.splitlines()
        if self.fm_start is None or self.fm_end is None:
            # create frontmatter
            header = ['---', f'{key}: {val}', '---']
            self.modified = '\n'.join(header + lines)
            self.changed = True
            # reparse
            self.fm_start = 0
            self.fm_end = 2
            self.frontmatter = {key: val}
            return
        # update or insert key within fm
        inserted = False
        for i in range(self.fm_start + 1, self.fm_end):
            m = FM_KV.match(lines[i])
            if m and m.group('key') == key:
                if m.group('val') != val:
                    lines[i] = f'{key}: {val}'
                    self.changed = True
                inserted = True
                break
        if not inserted:
            lines.insert(self.fm_end, f'{key}: {val}')
            self.fm_end += 1
            self.changed = True
        self.modified = '\n'.join(lines)
        self.frontmatter[key] = val

    def replace_all(self, pattern: re.Pattern, repl: str):
        new = pattern.sub(repl, self.modified)
        if new != self.modified:
            self.modified = new
            self.changed = True

    def write_back(self):
        if self.changed:
            self.path.write_text(self.modified, encoding='utf-8')


def normalize_dates(fe: FileEdit) -> Tuple[int, Dict[str, int]]:
    """Normalize A.C./B.C. punctuation; return match counts by token."""
    counts: Dict[str, int] = {}
    # count occurrences first
    for m in DATE_REGEX.finditer(fe.modified):
        token = m.group(0)
        token_u = token.upper()
        counts[token_u] = counts.get(token_u, 0) + 1
    # normalize A.C. -> AC, B.C. -> BC (spacing tolerant)
    ac_punct = re.compile(r'\bA\.\s?C\.\b', re.IGNORECASE)
    bc_punct = re.compile(r'\bB\.\s?C\.\b', re.IGNORECASE)
    fe.replace_all(ac_punct, 'AC')
    fe.replace_all(bc_punct, 'BC')
    return sum(counts.values()), counts


def standardize_people_cr(fe: FileEdit) -> Optional[str]:
    """If Challenge X found, ensure frontmatter cr: X exists and matches."""
    val = None
    for rx in CHALLENGE_REGEXES:
        m = rx.search(fe.modified)
        if m:
            val = m.group(1)
            break
    if not val:
        return None
    current = fe.frontmatter.get('cr')
    if current != val:
        fe.set_frontmatter_key('cr', val)
        return val
    return None


def standardize_place_danger(fe: FileEdit) -> Optional[str]:
    """Normalize danger_level to allowed set, add default if missing."""
    existing = fe.frontmatter.get('danger_level')
    if not existing:
        # set default Moderate
        fe.set_frontmatter_key('danger_level', 'Moderate')
        return 'Moderate (added)'
    low = existing.strip().strip('"\'').lower().replace('-', ' ')
    norm = DANGER_MAP.get(low)
    if not norm and existing not in DANGER_ALLOWED:
        # leave as-is but report
        return f'{existing} (unknown)'
    if norm and norm != existing:
        fe.set_frontmatter_key('danger_level', norm)
        return f'{existing} -> {norm}'
    return None


def process_file(path: Path) -> Dict[str, any]:
    text = path.read_text(encoding='utf-8', errors='ignore')
    fe = FileEdit(path, text)
    rel = str(path.relative_to(ROOT))
    result = {
        'file': rel,
        'date_matches': 0,
        'date_tokens': {},
        'world': fe.frontmatter.get('world', '').strip('"') if fe.frontmatter.get('world') else '',
        'uses_ac_bc': False,
        'uses_as_bs': False,
        'epoch_mismatch': False,
        'mixed_epoch': False,
        'cr_set': None,
        'danger_change': None,
        'changed': False,
    }
    # Normalize dates
    dm_total, dm_tokens = normalize_dates(fe)
    result['date_matches'] = dm_total
    result['date_tokens'] = dm_tokens

    # Epoch usage detection
    uses_ac_bc = bool(re.search(r'\bAC\b|\bBC\b|Before Catastrophe|After Catastrophe', fe.modified, flags=re.IGNORECASE))
    uses_as_bs = bool(re.search(r'\bAS\b|\bBS\b|Before Submersion|After Submersion', fe.modified, flags=re.IGNORECASE))
    result['uses_ac_bc'] = uses_ac_bc
    result['uses_as_bs'] = uses_as_bs
    result['mixed_epoch'] = uses_ac_bc and uses_as_bs
    if result['world']:
        w = result['world'].lower()
        if 'aquabyssos' in w and uses_ac_bc and not uses_as_bs:
            result['epoch_mismatch'] = True
        if 'aethermoor' in w and uses_as_bs and not uses_ac_bc:
            result['epoch_mismatch'] = True

    # Standardize CR/danger based on directory
    if '/People/' in rel:
        crv = standardize_people_cr(fe)
        result['cr_set'] = crv
    if '/Places/' in rel:
        dv = standardize_place_danger(fe)
        result['danger_change'] = dv

    # Write back
    fe.write_back()
    result['changed'] = fe.changed
    return result


def main():
    files = list(WB.rglob('*.md'))
    total = len(files)
    date_total = 0
    changed = 0
    cr_set_cnt = 0
    danger_norm_cnt = 0
    date_token_counts: Dict[str, int] = {}
    people_cr: Dict[str, str] = {}
    place_danger_changes: Dict[str, str] = {}
    mixed_epoch_files = []
    epoch_mismatch_files = []

    for p in files:
        r = process_file(p)
        date_total += r['date_matches']
        for k, v in r['date_tokens'].items():
            date_token_counts[k] = date_token_counts.get(k, 0) + v
        if r['cr_set']:
            cr_set_cnt += 1
            people_cr[r['file']] = r['cr_set']
        if r['danger_change']:
            danger_norm_cnt += 1
            place_danger_changes[r['file']] = r['danger_change']
        if r['changed']:
            changed += 1
        if r['mixed_epoch']:
            mixed_epoch_files.append((r['file'], r['world']))
        if r['epoch_mismatch']:
            epoch_mismatch_files.append((r['file'], r['world']))

    report_path = REPORTS / 'date_cr_audit.md'
    with report_path.open('w', encoding='utf-8') as f:
        f.write('# Date and CR/Danger-Level Audit Report\n\n')
        f.write(f'Date: {datetime.utcnow().isoformat()}Z\n\n')
        f.write('## Summary\n')
        f.write(f'- Files scanned: {total}\n')
        f.write(f'- Files modified: {changed}\n')
        f.write(f'- Total date marker matches: {date_total}\n')
        f.write(f'- People CR set/updated: {cr_set_cnt}\n')
        f.write(f'- Places danger_level changes: {danger_norm_cnt}\n\n')

        f.write('## Date Tokens Found (top)\n')
        for token, cnt in sorted(date_token_counts.items(), key=lambda x: -x[1])[:50]:
            f.write(f'- {token}: {cnt}\n')
        f.write('\n')

        if people_cr:
            f.write('## People with CR set\n')
            for file, val in sorted(people_cr.items()):
                f.write(f'- {file}: cr -> {val}\n')
            f.write('\n')

        if place_danger_changes:
            f.write('## Places danger_level changes\n')
            for file, change in sorted(place_danger_changes.items()):
                f.write(f'- {file}: {change}\n')
            f.write('\n')

        if mixed_epoch_files:
            f.write('## Files with mixed epoch markers (AC/BC and AS/BS)\n')
            for file, world in sorted(mixed_epoch_files):
                f.write(f'- {file} (world: {world})\n')
            f.write('\n')

        if epoch_mismatch_files:
            f.write('## Files with epoch mismatch based on world\n')
            f.write('- Aethermoor should use AC/BC; Aquabyssos should use AS/BS.\n')
            for file, world in sorted(epoch_mismatch_files):
                f.write(f'- {file} (world: {world})\n')
            f.write('\n')

        f.write('## Notes\n')
        f.write('- Date abbreviations normalized: A.C./B.C. -> AC/BC.\n')
        f.write('- No automatic conversion between AC/BC and AS/BS performed.\n')
        f.write('- Non-standard date schemes (BCE/CE, spelled phrases) listed above for manual review.\n')
        f.write('- People frontmatter now includes `cr:` if a Challenge value was found in content.\n')
        f.write('- Places frontmatter `danger_level` normalized to Low/Moderate/High/Extreme (default Moderate when missing).\n')

    print(f'Wrote report: {report_path}')

if __name__ == '__main__':
    main()