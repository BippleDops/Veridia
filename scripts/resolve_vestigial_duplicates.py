#!/usr/bin/env python3

import os, re, json, subprocess, sys

ROOT = os.environ.get('WORKSPACE_DIR', os.getcwd())
DRY_RUN = os.environ.get('DRY_RUN', '0') == '1'

SKIP_DIRS = {f"{os.sep}.git{os.sep}", f"{os.sep}node_modules{os.sep}", f"{os.sep}04_Resources{os.sep}Assets{os.sep}Generated{os.sep}", f"{os.sep}08_Archive{os.sep}"}

def walk_files(root: str):
    for base, dirs, files in os.walk(root):
        p = base + os.sep
        if any(s in p for s in SKIP_DIRS):
            continue
        for f in files:
            yield os.path.join(base, f)

def rel(path: str) -> str:
    return os.path.relpath(path, ROOT)

def run_git(args: list[str]):
    if DRY_RUN: return
    subprocess.run(['git'] + args, cwd=ROOT, check=True)

def build_mapping():
    mapping: dict[str, str] = {}
    all_paths = list(walk_files(ROOT))
    by_dir: dict[str, set[str]] = {}
    for p in all_paths:
        d = os.path.dirname(p)
        by_dir.setdefault(d, set()).add(os.path.basename(p))

    # Rule 1: files ending with " 2.<ext>" that have a twin without the suffix
    for d, names in by_dir.items():
        for name in list(names):
            m = re.match(r"^(.*) 2(\.[^.]+)$", name)
            if not m: continue
            base_no2, ext = m.group(1), m.group(2)
            twin = base_no2 + ext
            if twin in names:
                dup = rel(os.path.join(d, name))
                can = rel(os.path.join(d, twin))
                mapping[dup] = can

    # Rule 2: specific known typo Scree -> Screen in same dir
    for d, names in by_dir.items():
        for name in list(names):
            if name.endswith('Scree.md'):
                # Replace trailing Scree.md with Screen.md
                candidate = re.sub(r'Scree\.md$', 'Screen.md', name)
                if candidate in names:
                    dup = rel(os.path.join(d, name))
                    can = rel(os.path.join(d, candidate))
                    mapping[dup] = can

    return mapping

WIKI_RE = re.compile(r"\[\[([^\]|]+)(?:\|[^\]]+)?\]\]")

def normalize_target(t: str) -> str:
    if '#' in t: t = t.split('#',1)[0]
    return t

def rewrite_content(path: str, text: str, mapping: dict[str,str]) -> str:
    # Markdown wikilinks
    def repl_wiki(m):
        target = normalize_target(m.group(1))
        # try exact and with .md
        cands = [target, (target + '.md') if not target.lower().endswith('.md') else target]
        new = None
        for c in cands:
            if c in mapping:
                new = mapping[c]
                break
            # also match basename-only
            base = os.path.basename(c)
            if base in mapping:
                new = mapping[base]
                break
        if new:
            new_no_ext = new[:-3] if new.lower().endswith('.md') else new
            return f"[[{new_no_ext}]]"
        return m.group(0)

    out = WIKI_RE.sub(repl_wiki, text)

    # Markdown links [label](url)
    def repl_mdlink(m):
        label, url = m.group(1), m.group(2)
        if url in mapping:
            return f"[{label}]({mapping[url]})"
        # try relative basename match
        bn = os.path.basename(url)
        if bn in mapping:
            return f"[{label}]({mapping[bn]})"
        return m.group(0)
    out = re.sub(r"\[([^\]]+)\]\(([^)]+)\)", repl_mdlink, out)

    return out

def rewrite_canvas_json(path: str, mapping: dict[str,str]) -> str | None:
    try:
        data = json.loads(open(path, 'r', encoding='utf-8').read())
    except Exception:
        return None

    changed = False
    def walk(obj):
        nonlocal changed
        if isinstance(obj, dict):
            for k, v in list(obj.items()):
                if isinstance(v, str):
                    if v in mapping:
                        obj[k] = mapping[v]
                        changed = True
                    else:
                        bn = os.path.basename(v)
                        if bn in mapping:
                            obj[k] = mapping[bn]
                            changed = True
                else:
                    walk(v)
        elif isinstance(obj, list):
            for i, v in enumerate(obj):
                if isinstance(v, str):
                    if v in mapping:
                        obj[i] = mapping[v]
                        changed = True
                    else:
                        bn = os.path.basename(v)
                        if bn in mapping:
                            obj[i] = mapping[bn]
                            changed = True
                else:
                    walk(v)

    walk(data)
    if changed:
        return json.dumps(data, ensure_ascii=False, indent=2)
    return None

def main():
    mapping = build_mapping()
    if not mapping:
        print('No vestigial duplicates found.')
        return
    print('Duplicate -> Canonical mapping:')
    for k,v in mapping.items():
        print(f" - {k} => {v}")

    rewritten = []
    # Pass over .md and .canvas files to rewrite links
    for p in walk_files(ROOT):
        r = rel(p)
        if r in mapping: # skip the dup files for rewriting
            continue
        if r.lower().endswith('.md'):
            try:
                s = open(p, 'r', encoding='utf-8').read()
            except Exception:
                continue
            new = rewrite_content(p, s, mapping)
            if new != s:
                if not DRY_RUN:
                    with open(p, 'w', encoding='utf-8') as f:
                        f.write(new)
                rewritten.append(r)
        elif r.lower().endswith('.canvas'):
            newj = rewrite_canvas_json(p, mapping)
            if newj is not None:
                if not DRY_RUN:
                    with open(p, 'w', encoding='utf-8') as f:
                        f.write(newj)
                rewritten.append(r)

    # Remove duplicates
    removed = []
    for dup, can in mapping.items():
        abs_dup = os.path.join(ROOT, dup)
        if not DRY_RUN:
            try:
                # prefer git rm if tracked
                subprocess.run(['git','rm','-f','--',dup], cwd=ROOT, check=False)
            except Exception:
                pass
            if os.path.exists(abs_dup):
                try:
                    os.remove(abs_dup)
                except Exception:
                    pass
        removed.append(dup)

    report = {
        'mapping': mapping,
        'rewritten_files': rewritten,
        'removed': removed,
        'dry_run': DRY_RUN,
    }
    print(json.dumps(report, indent=2))

if __name__ == '__main__':
    main()


