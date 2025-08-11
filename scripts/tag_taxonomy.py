#!/usr/bin/env python3
import os
from typing import Dict, List, Set
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
    load_json,
    write_report,
    DRY_RUN,
)

DEFAULT_TAXONOMY = {
    "required_frontmatter": ["tags", "type", "world", "status", "created", "updated"],
    "required_tags": ["world", "type", "status"],
    "allowed_status": ["draft", "active", "deprecated", "stub"],
    "allowed_world": ["Aethermoor", "Aquabyssos", "Both"],
}


def normalize_tag(tag: str) -> str:
    return tag.strip().lower().replace(" ", "-")


def main():
    taxonomy_path = os.path.join(DATA_DIR, "tag-taxonomy.json")
    taxonomy = load_json(taxonomy_path, DEFAULT_TAXONOMY)

    files = list_markdown_files(ROOT_DIR)
    changed = 0
    tag_index: Dict[str, List[str]] = {}

    for path in files:
        md = read_file(path)
        fm, body = split_frontmatter(md)
        tags = fm.get("tags") or []
        if not isinstance(tags, list):
            tags = []
        normalized = sorted({normalize_tag(t) for t in tags if str(t).strip()})
        if normalized != tags:
            fm["tags"] = normalized
            changed += 1
            if not DRY_RUN:
                backup_file(path)
                content = build_frontmatter(fm) + "\n" + body
                write_file(path, content)
        for t in normalized:
            tag_index.setdefault(t, []).append(os.path.relpath(path, ROOT_DIR))

    # Save taxonomy (ensure it exists)
    save_json(taxonomy_path, taxonomy)

    # Build report
    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: Tag Taxonomy Standardizer",
        "",
        f"Files scanned: {len(files)}",
        f"Files updated (tag normalization): {changed}",
        "",
        "Top tags (first 200):",
    ]
    items = sorted(((t, len(paths)) for t, paths in tag_index.items()), key=lambda x: -x[1])
    for t, cnt in items[:200]:
        lines.append(f"- {t}: {cnt}")
    write_report("tag_audit.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()