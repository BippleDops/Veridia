#!/usr/bin/env python3
import os
from typing import Dict, List, Set, Tuple
from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_file,
    backup_file,
    split_frontmatter,
    build_frontmatter,
    add_backlink,
    find_wiki_links,
    write_report,
    DRY_RUN,
)

# Heuristic skip list (index-like pages)
SKIP_NAMES_CONTAIN = {"index", "campaign_index", "table of contents", "master_index"}
SKIP_DIRS_CONTAIN = {"09_Performance/Indexes", "08_Archive"}
NAV_HUB_TITLES = {"Vault_Navigation_Hub", "Master_Campaign_Index", "Master_Lore_Index"}


def should_skip(path: str) -> bool:
    lower = path.lower()
    if any(s in lower for s in SKIP_NAMES_CONTAIN):
        return True
    if any(s.lower().replace("/", os.sep) in lower for s in SKIP_DIRS_CONTAIN):
        return True
    return False


def extract_title(path: str) -> str:
    return os.path.splitext(os.path.basename(path))[0]


def main():
    files = list_markdown_files(ROOT_DIR)
    title_to_path: Dict[str, str] = {}
    for path in files:
        title_to_path[extract_title(path)] = path

    outgoing: Dict[str, Set[str]] = {p: set() for p in files}
    incoming: Dict[str, Set[str]] = {p: set() for p in files}

    for path in files:
        if should_skip(path):
            continue
        md = read_file(path)
        fm, body = split_frontmatter(md)
        src_title = extract_title(path)
        # Don't create backlinks to nav hubs from everything
        if src_title in NAV_HUB_TITLES:
            continue
        links = find_wiki_links(body)
        for t in links:
            if t == src_title:
                continue
            target_path = title_to_path.get(t)
            if not target_path or should_skip(target_path):
                continue
            outgoing[path].add(target_path)
            incoming[target_path].add(path)

    added_backlinks: List[Tuple[str, str]] = []
    for target_path, sources in incoming.items():
        if not sources:
            continue
        target_md = read_file(target_path)
        fm, body = split_frontmatter(target_md)
        changed = False
        for src_path in sorted(sources):
            src_title = extract_title(src_path)
            new_body, added = add_backlink(body, src_title)
            if added:
                body = new_body
                changed = True
                added_backlinks.append((os.path.relpath(target_path, ROOT_DIR), src_title))
        if changed:
            new_content = (build_frontmatter(fm) + "\n" + body) if fm else body
            if not DRY_RUN:
                backup_file(target_path)
                write_file(target_path, new_content)

    # Build report
    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: Bidirectional Link Enforcer",
        "",
        f"Total files scanned: {len(files)}",
        f"Backlinks added: {len(added_backlinks)}",
        "",
        "List of backlinks added (target <- source):",
    ]
    if not added_backlinks:
        lines.append("(none)")
    else:
        for target_rel, src_title in added_backlinks[:2000]:
            lines.append(f"- {target_rel} <- [[{src_title}]]")
        if len(added_backlinks) > 2000:
            lines.append(f"... and {len(added_backlinks) - 2000} more")

    write_report("bidirectional_links.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()