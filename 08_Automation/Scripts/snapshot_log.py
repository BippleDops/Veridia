#!/usr/bin/env python3
from __future__ import annotations

import time
from pathlib import Path

root = Path.cwd()
report = root / '_LINK_INTEGRITY_REPORT.md'
logfile = root / '_VALIDATION_REPORT.md'

def parse_counts(text: str):
    ok=broken=amb=case=None
    for line in text.splitlines():
        line = line.strip()
        if line.startswith('- OK links:'):
            ok = int(line.split(':',1)[1].strip())
        elif line.startswith('- Broken links:'):
            broken = int(line.split(':',1)[1].strip())
        elif line.startswith('- Ambiguous links:'):
            amb = int(line.split(':',1)[1].strip())
        elif line.startswith('- Case-mismatch links:'):
            case = int(line.split(':',1)[1].strip())
    return ok, broken, amb, case

if not report.exists():
    print('[snapshot] report not found')
    raise SystemExit(0)

text = report.read_text(encoding='utf-8', errors='ignore')
ok, broken, amb, case = parse_counts(text)
ts = time.strftime('%Y-%m-%dT%H:%M:%S')
entry = f'- {ts}: OK={ok}, Broken={broken}, Ambiguous={amb}, Case={case}\n'

if not logfile.exists():
    logfile.write_text('# Validation Report (Append-only)\n\n', encoding='utf-8')

with logfile.open('a', encoding='utf-8') as f:
    f.write(entry)

print('[snapshot] appended:', entry.strip())


