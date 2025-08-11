#!/usr/bin/env python3
import os
import re
from typing import Dict, List
from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_file,
    backup_file,
    split_frontmatter,
    build_frontmatter,
    merge_frontmatter,
    infer_world_from_path,
    WORLD_EPOCHS,
    normalize_epoch_tokens,
    detect_mixed_epochs,
    write_report,
    DRY_RUN,
)


def convert_epochs_for_world(text: str, world: str) -> str:
    # First normalize punctuation variants (A.C. -> AC, etc.)
    text = normalize_epoch_tokens(text)
    epochs = WORLD_EPOCHS.get(world, WORLD_EPOCHS["Both"])  # default allow both
    valid = epochs["valid"]
    invalid = epochs["invalid"]
    # Convert invalid to corresponding valid if obvious mapping
    mapping = {"AC": "AS", "BC": "BS", "AS": "AC", "BS": "BC"}
    if world == "Aquabyssos":
        mapping = {"AC": "AS", "BC": "BS"}
    elif world == "Aethermoor":
        mapping = {"AS": "AC", "BS": "BC"}
    updated = text
    for bad, good in mapping.items():
        updated = re.sub(rf"\b{bad}\b", good, updated)
    return updated


def main():
    files = list_markdown_files(ROOT_DIR)
    mixed_count = 0
    changed_count = 0
    world_added = 0
    details: List[str] = []

    for path in files:
        content = read_file(path)
        fm, body = split_frontmatter(content)
        inferred_world = fm.get("world") or infer_world_from_path(path) or "Both"

        mixed = detect_mixed_epochs(content)
        if mixed:
            mixed_count += 1
        updated_body = convert_epochs_for_world(body, inferred_world)
        updated_fm = dict(fm)
        if "world" not in fm and inferred_world:
            updated_fm["world"] = inferred_world
            world_added += 1
        # Only update file if something changed
        rebuilt = content
        if updated_body != body or updated_fm != fm:
            new_content = ""
            if updated_fm:
                new_content = build_frontmatter(updated_fm) + "\n" + updated_body
            else:
                new_content = updated_body
            if new_content != content:
                changed_count += 1
                details.append(f"Updated: {os.path.relpath(path, ROOT_DIR)}")
                if not DRY_RUN:
                    backup_file(path)
                    write_file(path, new_content)

    report = [
        "VAULT IMPROVEMENT PHASE 5: Epoch Harmonizer",
        "",
        f"Total files scanned: {len(files)}",
        f"Files with mixed epochs: {mixed_count}",
        f"Files changed: {changed_count}",
        f"World frontmatter added: {world_added}",
        "",
        "Changed files:",
    ]
    report.extend(details if details else ["(none)"])

    write_report("epoch_hygiene.md", "\n".join(report) + "\n")


if __name__ == "__main__":
    main()