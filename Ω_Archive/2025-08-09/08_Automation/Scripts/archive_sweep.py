import os
import re
import json
import shutil
from datetime import datetime


ROOT = os.path.abspath(os.getcwd())
REPORT_PATH = os.path.join(ROOT, '_AGENT_SETUP_REPORT.json')


ORPHAN_PATTERNS = [
    # Templater/variable placeholders in filenames
    re.compile(r"\$\{[^}]+\}\.md$"),
    re.compile(r"<%tp\.system\.prompt\([^)]+\)%>\.md$"),
    # Image-derived markdown stubs
    re.compile(r"Dungeon\d+\.png\.md$", re.IGNORECASE),
    # Template leftovers
    re.compile(r"Template-.*\.md$", re.IGNORECASE),
    re.compile(r"z_Templates-World Builder Templates-Template-.*\.md\.md$"),
    # Mustache-style placeholders
    re.compile(r"\{\{[^}]+\}\}\.md$"),
    # JS concatenation artifacts
    re.compile(r"file\.name"),
    re.compile(r"updatePath\(link\)"),
    # Generic single-word placeholder notes under Aquabyssos/Lore
    re.compile(r"^01_Campaigns/Aquabyssos/Lore/(Location|NPC|Marina|Sorrow|Volcano)\.md$"),
]


def load_archive_candidates():
    if not os.path.exists(REPORT_PATH):
        return []
    with open(REPORT_PATH, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return [c.get('file') for c in data.get('archive_suggestions', []) if c.get('file')]


def scan_for_candidates():
    candidates = []
    for dirpath, _, filenames in os.walk(ROOT):
        # skip archive
        if os.path.relpath(dirpath, ROOT).startswith('Ω_Archive'):
            continue
        for name in filenames:
            if not name.lower().endswith('.md'):
                continue
            rel = os.path.relpath(os.path.join(dirpath, name), ROOT)
            if matches_orphan_patterns(rel):
                candidates.append(rel)
    return candidates


def matches_orphan_patterns(relpath: str) -> bool:
    for rx in ORPHAN_PATTERNS:
        if rx.search(relpath):
            return True
    return False


def main():
    moved = []
    skipped = []
    candidates = load_archive_candidates()
    if not candidates:
        # Fallback: direct scan
        candidates = scan_for_candidates()
        if not candidates:
            print('No archive candidates found (report or scan).')
            return 0

    today = datetime.now().strftime('%Y-%m-%d')
    archive_dir = os.path.join(ROOT, f'Ω_Archive/{today}/Placeholders')
    os.makedirs(archive_dir, exist_ok=True)

    # De-duplicate while preserving order
    seen = set()
    filtered = []
    for rel in candidates:
        if rel in seen:
            continue
        seen.add(rel)
        filtered.append(rel)

    for rel in filtered:
        src = os.path.join(ROOT, rel)
        if not os.path.exists(src):
            skipped.append((rel, 'missing'))
            continue
        # Only move obvious placeholders/templater artifacts
        if not matches_orphan_patterns(rel):
            skipped.append((rel, 'pattern-mismatch'))
            continue
        try:
            dst = os.path.join(archive_dir, os.path.basename(rel))
            # If filename collides, append an incrementing suffix
            base, ext = os.path.splitext(os.path.basename(rel))
            counter = 1
            final_dst = dst
            while os.path.exists(final_dst):
                final_dst = os.path.join(archive_dir, f"{base}-{counter}{ext}")
                counter += 1
            shutil.move(src, final_dst)
            moved.append((rel, os.path.relpath(final_dst, ROOT)))
        except Exception as e:
            skipped.append((rel, f'error: {e}'))

    # Write move log
    log_path = os.path.join(archive_dir, 'Archive_Move_Log.md')
    with open(log_path, 'w', encoding='utf-8') as lf:
        lf.write('---\n')
        lf.write('type: archive-log\n')
        lf.write('tags: [archive]\n')
        lf.write('---\n\n')
        lf.write('# Archive Move Log\n\n')
        lf.write(f'Date: {today}\n\n')
        lf.write('## Moved Files\n')
        if moved:
            for src_rel, dst_rel in moved:
                lf.write(f'- {src_rel} → {dst_rel}\n')
        else:
            lf.write('- (none)\n')
        lf.write('\n## Skipped Files\n')
        if skipped:
            for rel, reason in skipped:
                lf.write(f'- {rel} ({reason})\n')
        else:
            lf.write('- (none)\n')

    print(f"Moved: {len(moved)} | Skipped: {len(skipped)} | Log: {os.path.relpath(log_path, ROOT)}")
    return 0


if __name__ == '__main__':
    raise SystemExit(main())


