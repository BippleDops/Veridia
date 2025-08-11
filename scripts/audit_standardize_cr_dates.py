#!/usr/bin/env python3
import os
import re
from typing import List
from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_file,
    backup_file,
    split_frontmatter,
    build_frontmatter,
    write_report,
    DRY_RUN,
)

CR_PATTERNS = [
    re.compile(r"\bCR\s*(\d+\/?\d*)\b", re.IGNORECASE),
    re.compile(r"\bChallenge\s*(?:Rating)?\s*(\d+\/?\d*)\b", re.IGNORECASE),
]

DATE_STYLE_PATTERN = re.compile(r"\b(A\.\s*C\.|B\.\s*C\.|A\.\s*S\.|B\.\s*S\.)\b")


def extract_cr(text: str) -> str:
    for pat in CR_PATTERNS:
        m = pat.search(text)
        if m:
            return m.group(1)
    return ""


def main():
    files = list_markdown_files(ROOT_DIR)
    updated = 0
    found_cr = 0
    date_style_issues = 0

    for path in files:
        md = read_file(path)
        fm, body = split_frontmatter(md)
        if (fm.get("type") or "").lower() == "npc":
            cr_val = fm.get("cr")
            if not cr_val:
                cr = extract_cr(body)
                if cr:
                    found_cr += 1
                    fm["cr"] = cr
                    new_content = build_frontmatter(fm) + "\n" + body
                    if not DRY_RUN:
                        backup_file(path)
                        write_file(path, new_content)
                        updated += 1
        if DATE_STYLE_PATTERN.search(md):
            date_style_issues += 1

    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: CR and Date Style Audit",
        "",
        f"Files scanned: {len(files)}",
        f"NPCs with CR inferred: {found_cr}",
        f"Files updated with CR: {updated}",
        f"Files with legacy date punctuation variants found: {date_style_issues}",
    ]
    write_report("power_standardization.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()