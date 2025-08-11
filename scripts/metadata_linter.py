#!/usr/bin/env python3
import os
from typing import Dict, List, Tuple
from common import (
    ROOT_DIR,
    list_markdown_files,
    read_file,
    write_file,
    backup_file,
    split_frontmatter,
    build_frontmatter,
    set_default_frontmatter,
    guess_entity_type_from_dir,
    infer_world_from_path,
    TYPE_VALUES,
    WORLDS,
    STATUS_VALUES,
    DANGER_LEVELS,
    write_report,
    DRY_RUN,
)

REQUIRED_BY_TYPE: Dict[str, List[str]] = {
    "NPC": ["tags", "type", "world", "status", "created", "updated"],
    "Location": ["tags", "type", "world", "status", "danger_level", "created", "updated"],
    "Lore": ["tags", "type", "world", "status", "created", "updated"],
    "Group": ["tags", "type", "world", "status", "created", "updated"],
}

DANGER_SYNONYMS = {
    "low": "Low",
    "minor": "Low",
    "moderate": "Moderate",
    "medium": "Moderate",
    "avg": "Moderate",
    "average": "Moderate",
    "high": "High",
    "severe": "High",
    "extreme": "Extreme",
    "deadly": "Extreme",
}


def infer_type(fm: Dict[str, any], path: str) -> str:
    t = fm.get("type")
    if t in REQUIRED_BY_TYPE:
        return t
    guess = guess_entity_type_from_dir(path) or "Lore"
    return guess


def coerce_danger(fm: Dict[str, any]) -> None:
    # Map any danger/threat variants to danger_level
    danger = fm.get("danger_level")
    for key in ("threat_level", "threat", "danger", "risk_level"):
        if not danger and key in fm:
            danger = fm.get(key)
    if isinstance(danger, str):
        norm = DANGER_SYNONYMS.get(danger.strip().lower())
        if norm:
            fm["danger_level"] = norm
    if fm.get("danger_level") not in DANGER_LEVELS:
        fm["danger_level"] = fm.get("danger_level") or "Moderate"


def main():
    files = list_markdown_files(ROOT_DIR)
    lint_errors: List[Tuple[str, str]] = []
    fixes = 0

    for path in files:
        md = read_file(path)
        fm, body = split_frontmatter(md)
        etype = infer_type(fm, path)
        inferred_world = fm.get("world") or infer_world_from_path(path)
        fm2 = set_default_frontmatter(fm, inferred_world)
        # Validate by type
        required = REQUIRED_BY_TYPE.get(etype, ["tags", "type", "world", "status", "created", "updated"])
        # Coerce values
        fm2["type"] = etype
        if etype == "Location":
            coerce_danger(fm2)
        # Compute missing after coercion
        missing = [k for k in required if k not in fm2]
        if missing or fm2 != fm:
            fixes += 1
            if not DRY_RUN:
                backup_file(path)
                content = build_frontmatter(fm2) + "\n" + body
                write_file(path, content)
            if missing:
                lint_errors.append((os.path.relpath(path, ROOT_DIR), ", ".join(missing)))

    # Report
    lines: List[str] = [
        "VAULT IMPROVEMENT PHASE 5: Metadata Linter",
        "",
        f"Files scanned: {len(files)}",
        f"Files updated (defaults/normalization): {fixes}",
        "",
        "Files with missing required keys:",
    ]
    if not lint_errors:
        lines.append("(none)")
    else:
        for rel, miss in lint_errors[:500]:
            lines.append(f"- {rel}: missing [{miss}]")
        if len(lint_errors) > 500:
            lines.append(f"... and {len(lint_errors) - 500} more")

    write_report("metadata_lint.md", "\n".join(lines) + "\n")


if __name__ == "__main__":
    main()