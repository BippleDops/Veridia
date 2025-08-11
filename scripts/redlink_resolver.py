#!/usr/bin/env python3
import os
from typing import Dict, List, Optional, Tuple
from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_file,
    backup_file,
    split_frontmatter,
    infer_world_from_path,
    find_wiki_links,
    build_seed_scaffold,
    guess_entity_type_from_dir,
    guess_entity_type_from_title,
    write_report,
    DRY_RUN,
)

# Preferred directories to create new seeds
PREFERRED_DIRS = {
    "NPC": os.path.join(ROOT_DIR, "02_Worldbuilding", "People"),
    "Location": os.path.join(ROOT_DIR, "02_Worldbuilding", "Places"),
    "Lore": os.path.join(ROOT_DIR, "02_Worldbuilding", "Lore"),
    "Group": os.path.join(ROOT_DIR, "02_Worldbuilding", "Groups"),
}


def title_to_existing_path_map(files: List[str]) -> Dict[str, str]:
    mapping: Dict[str, str] = {}
    for p in files:
        title = os.path.splitext(os.path.basename(p))[0]
        mapping[title] = p
    return mapping


def resolve_dir_for_new(title: str, entity_type: Optional[str]) -> Optional[str]:
    if entity_type and entity_type in PREFERRED_DIRS:
        return PREFERRED_DIRS[entity_type]
    # default to Lore if unknown
    return PREFERRED_DIRS.get("Lore")


def main():
    files = list_markdown_files(ROOT_DIR)
    title_to_path = title_to_existing_path_map(files)

    missing: List[Tuple[str, str, Optional[str], Optional[str]]] = []  # (title, suggested_dir, entity_type, world)

    for src in files:
        src_md = read_file(src)
        fm, body = split_frontmatter(src_md)
        world = fm.get("world") or infer_world_from_path(src) or "Both"
        src_entity_type = fm.get("type") or guess_entity_type_from_dir(src)
        links = find_wiki_links(body)
        for t in links:
            # Ignore links that point to headers or paths (handled in common)
            if t not in title_to_path:
                etype = guess_entity_type_from_title(t) or src_entity_type or "Lore"
                suggested_dir = resolve_dir_for_new(t, etype)
                missing.append((t, suggested_dir or "", etype, world))

    created = 0
    created_files: List[str] = []
    for title, directory, etype, world in missing:
        if not directory:
            continue
        new_path = os.path.join(directory, f"{title}.md")
        if os.path.exists(new_path):
            continue
        if not DRY_RUN:
            os.makedirs(directory, exist_ok=True)
            backup_file(new_path)  # no-op if file doesn't exist
            content = build_seed_scaffold(etype or "Lore", world)
            write_file(new_path, content)
            created += 1
            created_files.append(os.path.relpath(new_path, ROOT_DIR))

    # Report
    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: Redlink Resolver",
        "",
        f"Detected missing link targets: {len(missing)}",
        f"Seed files created: {created}",
        "",
        "Created files:",
    ]
    if not created_files:
        lines.append("(none)")
    else:
        for p in created_files[:500]:
            lines.append(f"- {p}")
        if len(created_files) > 500:
            lines.append(f"... and {len(created_files) - 500} more")

    lines.append("")
    lines.append("Missing targets (suggested type and dir):")
    if not missing:
        lines.append("(none)")
    else:
        for i, (t, d, et, w) in enumerate(missing[:500]):
            rel = os.path.relpath(d, ROOT_DIR) if d else "(unknown)"
            lines.append(f"- [[{t}]] -> type={et}, dir={rel}, world={w}")
        if len(missing) > 500:
            lines.append(f"... and {len(missing) - 500} more")

    write_report("redlinks_created.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()