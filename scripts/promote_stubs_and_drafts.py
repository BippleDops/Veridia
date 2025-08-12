#!/usr/bin/env python3

import os
from typing import List

from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_file,
    split_frontmatter,
    build_frontmatter,
    merge_frontmatter,
)


def should_promote(status_val: str) -> bool:
    s = (status_val or '').strip().lower()
    return s in {"stub", "draft"}


def promote_status(fm: dict) -> dict:
    new_fm = dict(fm)
    if should_promote(str(new_fm.get("status", ""))):
        new_fm["status"] = "active"
    # Clean tags of stub/draft markers
    tags = new_fm.get("tags")
    if isinstance(tags, list):
        new_tags = [t for t in tags if str(t).strip().lower() not in {"stub", "draft"}]
        new_fm["tags"] = new_tags
    return new_fm


def main():
    files: List[str] = list_markdown_files(ROOT_DIR)
    changed = 0
    for path in files:
        rel = os.path.relpath(path, ROOT_DIR)
        try:
            md = read_file(path)
        except Exception:
            continue
        fm, body = split_frontmatter(md)
        if not fm:
            continue
        promoted = promote_status(fm)
        if promoted != fm:
            # Also ensure updated timestamp via merge helper
            merged = merge_frontmatter(fm, {"status": promoted.get("status", "active"), "tags": promoted.get("tags", fm.get("tags"))})
            write_file(path, build_frontmatter(merged) + "\n" + body)
            changed += 1
    print(f"promoted stub/draft -> active: {changed}")


if __name__ == "__main__":
    main()


