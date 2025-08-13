#!/usr/bin/env python3

import os, json
from typing import Dict, List

ROOT = os.environ.get('WORKSPACE_DIR', os.getcwd())

ASSET_DIRS = [
    ('Portraits', os.path.join(ROOT, '04_Resources','Assets','Generated')),
    ('Art', os.path.join(ROOT, '04_Resources','Assets','Art')),
    ('Galleries', os.path.join(ROOT, '04_Resources','Assets','Galleries')),
    ('Audio', os.path.join(ROOT, '04_Resources','Assets','Audio')),
    ('Animations', os.path.join(ROOT, '04_Resources','Assets','Animations')),
    ('Maps', os.path.join(ROOT, '04_Resources','Assets','Maps')),
    ('Symbols', os.path.join(ROOT, '04_Resources','Assets','Symbols')),
    ('Vehicles', os.path.join(ROOT, '04_Resources','Assets','Vehicles')),
]

def list_files(p: str, exts: List[str]) -> List[str]:
    out = []
    for base, dirs, files in os.walk(p):
        for f in files:
            if any(f.lower().endswith(e) for e in exts):
                out.append(os.path.relpath(os.path.join(base, f), ROOT))
    return out

def main():
    report: Dict[str, Dict[str,int]] = {}
    details: Dict[str, List[str]] = {}
    for label, p in ASSET_DIRS:
        if not os.path.exists(p):
            continue
        files = list_files(p, ['.png','.jpg','.jpeg','.webp','.gif','.wav','.webm','.mp4','.md'])
        report[label] = {'count': len(files)}
        details[label] = files[:200]
    outp = os.path.join(ROOT, 'reports', 'assets_coverage.json')
    os.makedirs(os.path.dirname(outp), exist_ok=True)
    with open(outp,'w',encoding='utf-8') as f:
        json.dump({'summary':report,'samples':details}, f, indent=2)
    print(f"assets coverage report: {os.path.relpath(outp, ROOT)}")

if __name__ == '__main__':
    main()


