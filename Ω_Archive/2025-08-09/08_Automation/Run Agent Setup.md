---
tags: [maintenance, automation]
---

# 🔧 Run Agent Setup

Use this command in a terminal from the vault root to validate configuration and generate reports:

```bash
08_Automation/run_agent_setup.sh
```

Outputs:
- `_AGENT_SETUP_REPORT.md` and `_AGENT_SETUP_REPORT.json`
- Updated link integrity snapshot

Notes:
- If shell execution is blocked, run directly:

```bash
python3 "08_Automation/Scripts/agent_setup.py"
```

