#!/usr/bin/env python3

import os, re, sys, json

ROOT = os.environ.get('WORKSPACE_DIR', os.getcwd())
DRY_RUN = os.environ.get('DRY_RUN', '0') == '1'
CREATE_STUBS = os.environ.get('CREATE_STUBS', '0') == '1'  # default: do NOT create stubs
REPORTS_DIR = os.path.join(ROOT, 'reports')
os.makedirs(REPORTS_DIR, exist_ok=True)

SKIP_RE = re.compile(r"/(\.git|08_Archive|09_Performance|04_Resources/Assets)(/|$)")

LINK_RE = re.compile(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]")

def walk_md():
    files = []
    for dp, dn, fn in os.walk(ROOT):
        rel_dp = os.path.relpath(dp, ROOT)
        if SKIP_RE.search('/'+rel_dp.replace('\\','/')+'/'):
            continue
        for n in fn:
            if n.lower().endswith('.md'):
                files.append(os.path.join(dp, n))
    return files

def rel_title(path):
    rel = os.path.relpath(path, ROOT)
    return os.path.splitext(rel)[0]

def is_suspicious_title(t: str) -> bool:
    # skip templater tokens or handlebars
    if '<%' in t or '%>' in t or '{{' in t or '}}' in t:
        return True
    # skip titles ending with ' 2' or variants
    if re.search(r"(\s|-)2$", t):
        return True
    # skip image-like titles
    if any(ext in t.lower() for ext in ['.png','.jpg','.jpeg','.webp','.gif']):
        return True
    # known misspelling cases discussed by user
    if 'abolet' in t.lower():
        return True
    return False

def main():
    files = walk_md()
    title_map = { rel_title(p): p for p in files }
    basename_map = {}
    for t, p in title_map.items():
        base = os.path.basename(t)
        basename_map.setdefault(base, []).append(t)

    created = []
    fixed = []
    unresolved = []

    def write_stub(target_rel):
        abs_path = os.path.join(ROOT, target_rel + '.md')
        os.makedirs(os.path.dirname(abs_path), exist_ok=True)
        if not DRY_RUN:
            with open(abs_path, 'w', encoding='utf-8') as f:
                f.write(f"---\nstatus: stub\ncreated: {__import__('datetime').date.today().isoformat()}\nupdated: {__import__('datetime').date.today().isoformat()}\n---\n\n# {os.path.basename(target_rel)}\n\n> Autocreated stub to resolve redlink. Fill in content.\n")
        created.append(target_rel)

    for p in files:
        with open(p,'r',encoding='utf-8') as f:
            txt = f.read()
        def replace_link(m):
            target = m.group(1)
            # normalize trailing .md
            if target.lower().endswith('.md'):
                target = target[:-3]
            # do not touch suspicious targets
            if is_suspicious_title(target):
                return m.group(0)
            exists = target in title_map
            if exists:
                return m.group(0)
            # try basename fallback
            if '/' not in target and target in basename_map:
                # choose first
                resolved = basename_map[target][0]
                fixed.append((os.path.relpath(p, ROOT), target, resolved))
                return f"[[{resolved}]]"
            # keep but record unresolved
            unresolved.append((os.path.relpath(p, ROOT), target))
            return m.group(0)
        new_txt = LINK_RE.sub(replace_link, txt)
        if new_txt != txt and not DRY_RUN:
            with open(p,'w',encoding='utf-8') as f:
                f.write(new_txt)

    # Optionally create stubs (disabled by default)
    if CREATE_STUBS:
        for (_src, target) in unresolved:
            if is_suspicious_title(target):
                continue
            # allow creation under 02_Worldbuilding/Lore by default
            if '/' in target:
                target_rel = target
            else:
                target_rel = f"02_Worldbuilding/Lore/{target}"
            if target_rel not in title_map:
                write_stub(target_rel)

    report = os.path.join(REPORTS_DIR, 'redlink_resolver.json')
    with open(report,'w',encoding='utf-8') as f:
        json.dump({
            'fixed': fixed,
            'created_stubs': created,
            'unresolved': unresolved,
            'dry_run': DRY_RUN
        }, f, indent=2)
    print(f"redlink fixes: {len(fixed)}, stubs created: {len(created)}; report: {os.path.relpath(report, ROOT)}")

if __name__ == '__main__':
    main()