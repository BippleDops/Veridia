import os
import re
import sys
import json
import subprocess
from datetime import datetime


ROOT = os.path.abspath(os.getcwd())


def read_text(path: str) -> str:
    try:
        with open(path, 'r', encoding='utf-8') as f:
            return f.read()
    except FileNotFoundError:
        return ''


def exists(path: str) -> bool:
    return os.path.exists(path)


def check_file_presence(files):
    results = []
    for rel in files:
        path = os.path.join(ROOT, rel)
        results.append({
            'check': f'File exists: {rel}',
            'status': 'OK' if exists(path) else 'FAIL',
            'details': path
        })
    return results


def check_substrings(file_to_needles):
    results = []
    for rel, needles in file_to_needles.items():
        path = os.path.join(ROOT, rel)
        content = read_text(path)
        for needle in needles:
            results.append({
                'check': f'{rel} contains: {needle}',
                'status': 'OK' if needle in content else 'FAIL',
                'details': rel
            })
    return results


def search_repo(patterns):
    results = []
    regexes = [re.compile(p) for p in patterns]
    for dirpath, _, filenames in os.walk(ROOT):
        for name in filenames:
            if not name.lower().endswith(('.md', '.base')):
                continue
            path = os.path.join(dirpath, name)
            try:
                text = read_text(path)
            except Exception:
                continue
            for rx in regexes:
                for m in rx.finditer(text):
                    # record one issue per file per pattern for brevity
                    results.append({'file': os.path.relpath(path, ROOT), 'pattern': rx.pattern})
                    break
    return results


def dataview_limits_ok(dashboard_rel: str) -> bool:
    text = read_text(os.path.join(ROOT, dashboard_rel))
    ok = True
    # Simple heuristic: each ```dataview block should contain LIMIT
    blocks = re.findall(r"```dataview[\s\S]*?```", text, flags=re.MULTILINE)
    for b in blocks:
        if 'LIMIT' not in b and 'limit:' not in b:
            ok = False
    return ok


def run_python_script(rel_path: str):
    path = os.path.join(ROOT, rel_path)
    if not exists(path):
        return (1, '', f'Missing: {rel_path}')
    proc = subprocess.run(['python3', path], stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)
    return (proc.returncode, proc.stdout, proc.stderr)


def main():
    summary = []

    required_bases = [
        'NPC Directory.base',
        'Session Log.base',
        'Quest Campaign Tracker.base',
        'Combat Tracker.base',
        'Faction_Tracker.base',
        'Item_Catalog.base',
        'Relationship_Graph.base',
        'Location Tracker.base',
    ]

    required_files = [
        'MASTER_CAMPAIGN_DASHBOARD.md',
        '04_Resources/Calendars/Aethel.json',
        '05_Templates/Session_Template.md',
        '05_Templates/NPC_Template.md',
        '05_Templates/Quest_Template.md',
        '05_Templates/Location_Template.md',
        '04_Resources/Random_Tables/Encounter_and_Loot_Generators.md',
        '04_Resources/Maps/Aquabyssos_World_Map.md',
        '08_Automation/Configs/QuickAdd/macros.json',
    ] + required_bases

    summary.extend(check_file_presence(required_files))

    # Dashboard embeds
    dashboard_checks = {
        'MASTER_CAMPAIGN_DASHBOARD.md': [
            'EMBED[NPC Directory.base][Active NPCs]',
            'EMBED[Location Tracker.base][Quest Hubs]',
            'EMBED[Combat Tracker.base][Initiative Tracker]',
            'EMBED[Session Log.base][Recent Sessions]',
            'EMBED[Quest Campaign Tracker.base][Active]',
        ]
    }
    summary.extend(check_substrings(dashboard_checks))

    # Phase 8–11: Additional presence/validation
    phase_checks = {
        '04_Resources/Random_Tables/Encounter_and_Loot_Generators.md': [
            'Aquabyssos Undersea Encounters', 'Aethermoor Urban Events', 'Quick Loot Buttons'
        ],
        '04_Resources/Maps/Aquabyssos_World_Map.md': [
            '```leaflet', 'Aquabyssos World Map'
        ],
        'MASTER_CAMPAIGN_DASHBOARD.md': [
            'Aquabyssos Map Demo', 'Relationship_Graph.canvas'
        ],
        '08_Automation/Configs/QuickAdd/macros.json': [
            'New NPC (Template)', 'New Location (Template)', 'New Quest (Template)', 'New Session (Template)'
        ],
        '08_Automation/Configs/AutoNoteMover/rules.json': [
            'rules', 'Sessions → 01_Campaigns/<World>/Sessions by tag'
        ],
        '08_Automation/Configs/AutoArchive/rules.json': [
            'archiveRoot', 'Archive sessions older than 365 days'
        ],
        '08_Automation/Configs/QuickAdd/choices.json': [
            'Aggressive Archive Sweep', 'Lint All Notes'
        ],
        '08_Automation/Scripts/lintAllNotes.js': [
            'module.exports = async (params) =>'
        ]
    }
    summary.extend(check_substrings(phase_checks))

    # Template canonical fields
    template_checks = {
        '05_Templates/Session_Template.md': [
            'sessionNumber', 'npcsMet', 'questsStarted', 'questsAdvanced', 'questsCompleted'
        ],
        '05_Templates/NPC_Template.md': [
            'status:', 'lastSeen:'
        ],
        '05_Templates/Quest_Template.md': [
            'quest_status:', 'quest_priority:', 'quest_location:'
        ],
        '05_Templates/Location_Template.md': [
            'active_quests:', 'event_date:', 'event_location:'
        ],
    }
    summary.extend(check_substrings(template_checks))

    # Hygiene: no [[<%...%>]] or [[${...}]] or links to 05_Templates in content
    hygiene_hits = search_repo([r"\[\[<%", r"\[\[\$\{", r"\[\[05_Templates/"])

    # Orphan placeholders and obvious templater artifacts for archive suggestion
    orphan_patterns = [
        r"\$\{[^}]+\}\.md$",
        r"<%tp\.system\.prompt\([^)]+\)%>\.md$",
        r"Dungeon\d+\.png\.md$",
        r"Template-.*\.md$"
    ]
    orphan_hits = search_repo(orphan_patterns)

    # Dataview limits
    dv_limits = dataview_limits_ok('MASTER_CAMPAIGN_DASHBOARD.md')

    # Run audits
    va_rc, va_out, va_err = run_python_script('08_Automation/Scripts/vault_audit.py')
    sl_rc, sl_out, sl_err = run_python_script('08_Automation/Scripts/snapshot_log.py')

    report = {
        'generated_at': datetime.utcnow().isoformat() + 'Z',
        'root': ROOT,
        'checks': summary,
        'hygiene_issues': hygiene_hits[:50],  # cap in report
        'dataview_limits_ok': dv_limits,
        'archive_suggestions': orphan_hits[:200],
        'vault_audit': {'rc': va_rc, 'stdout': va_out, 'stderr': va_err},
        'snapshot_log': {'rc': sl_rc, 'stdout': sl_out, 'stderr': sl_err},
    }

    # Write JSON and a brief markdown
    json_path = os.path.join(ROOT, '_AGENT_SETUP_REPORT.json')
    md_path = os.path.join(ROOT, '_AGENT_SETUP_REPORT.md')
    with open(json_path, 'w', encoding='utf-8') as jf:
        json.dump(report, jf, ensure_ascii=False, indent=2)

    ok_checks = sum(1 for c in summary if c['status'] == 'OK')
    fail_checks = sum(1 for c in summary if c['status'] == 'FAIL')
    warn_checks = 0
    with open(md_path, 'w', encoding='utf-8') as mf:
        mf.write(f"# Agent Setup Report\n\n")
        mf.write(f"Generated: {report['generated_at']}\n\n")
        mf.write(f"Root: {ROOT}\n\n")
        mf.write(f"- Checks OK: {ok_checks}\n")
        mf.write(f"- Checks FAIL: {fail_checks}\n")
        mf.write(f"- Hygiene issues (first 50): {len(hygiene_hits[:50])}\n")
        mf.write(f"- Dashboard Dataview limits OK: {dv_limits}\n\n")
        mf.write("## Archive Suggestions (samples)\n")
        for a in orphan_hits[:20]:
            mf.write(f"- {a['file']} (pattern: {a['pattern']})\n")
        mf.write("## Notable Failures\n")
        for c in summary:
            if c['status'] == 'FAIL':
                mf.write(f"- {c['check']}\n")
        mf.write("\n## Hygiene Samples\n")
        for h in hygiene_hits[:10]:
            mf.write(f"- {h['file']}: {h['pattern']}\n")
        mf.write("\n## Audit Summary\n")
        mf.write("````\n")
        mf.write((va_out or '') + (sl_out or ''))
        mf.write("````\n")

    print(f"Wrote {md_path} and {json_path}")
    if fail_checks > 0:
        sys.exit(2)


if __name__ == '__main__':
    main()


