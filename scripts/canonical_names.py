#!/usr/bin/env python3
import os
import re
from typing import Dict, List
from common import (
    ROOT_DIR,
    DATA_DIR,
    list_markdown_files,
    read_file,
    write_file,
    backup_file,
    split_frontmatter,
    build_frontmatter,
    save_json,
    write_report,
    DRY_RUN,
)


def canonical_name(title: str) -> str:
    # Canonicalize by using the case and spacing of the existing filename
    # Also strip extra spaces
    return re.sub(r"\s+", " ", title).strip()


def main():
    files = list_markdown_files(ROOT_DIR)
    mapping: Dict[str, Dict[str, List[str]]] = {}

    # Build initial canonical names from filenames
    for path in files:
        title = os.path.splitext(os.path.basename(path))[0]
        can = canonical_name(title)
        mapping[title] = {"canonical": can, "aliases": []}

    # Collect explicit aliases from frontmatter and unify
    alias_updates = 0
    for path in files:
        md = read_file(path)
        fm, body = split_frontmatter(md)
        title = os.path.splitext(os.path.basename(path))[0]
        aliases = fm.get("aliases") or []
        if isinstance(aliases, list):
            # normalize aliases
            norm_aliases = []
            for a in aliases:
                a2 = canonical_name(str(a))
                if a2 and a2 != title:
                    norm_aliases.append(a2)
            if norm_aliases != aliases:
                fm["aliases"] = norm_aliases
                if not DRY_RUN:
                    backup_file(path)
                    write_file(path, build_frontmatter(fm) + "\n" + body)
                alias_updates += 1
            if title in mapping:
                mapping[title]["aliases"] = norm_aliases

    # Save mapping
    save_json(os.path.join(DATA_DIR, "canonical-names.json"), mapping)

    # Report
    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: Name & Alias Canonicalizer",
        "",
        f"Files scanned: {len(files)}",
        f"Files updated (alias normalization): {alias_updates}",
        f"Canonical names recorded: {len(mapping)}",
    ]
    write_report("canonical_names.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()