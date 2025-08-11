#!/usr/bin/env python3
import os
import re
from typing import List, Tuple
from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_report,
)

RELATIVE_TIME_PATTERNS = [
    re.compile(r"\b(\d{1,4})\s+years?\s+ago\b", re.IGNORECASE),
    re.compile(r"\bYear\s+(\d{1,4})\b", re.IGNORECASE),
]

REFERENCE_EVENTS = {
    "Great Crystallization": 500,  # approx years ago
    "The Drowning": None,  # Uses AS/BS; manual alignment required
}


def main():
    files = list_markdown_files(ROOT_DIR)
    flagged: List[Tuple[str, str]] = []

    for path in files:
        md = read_file(path)
        for pat in RELATIVE_TIME_PATTERNS:
            for m in pat.finditer(md):
                snippet = md[max(0, m.start()-40): m.end()+40].replace("\n", " ")
                flagged.append((os.path.relpath(path, ROOT_DIR), snippet))

    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: Timeline Alignment Checker",
        "",
        f"Files scanned: {len(files)}",
        f"Relative time references flagged: {len(flagged)}",
        "",
        "Examples (first 200):",
    ]
    for rel, snip in flagged[:200]:
        lines.append(f"- {rel}: ...{snip}...")
    if len(flagged) > 200:
        lines.append(f"... and {len(flagged) - 200} more")

    write_report("timeline_conflicts.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()