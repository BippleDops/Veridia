#!/usr/bin/env python3
import argparse
import os
import re
import sys
import time
from typing import Dict, List, Tuple, Set

WIKI_LINK_PATTERN = re.compile(r"\[\[([^\]]+)\]\]")
MARKDOWN_EXTENSIONS = {".md", ".markdown"}
EXCLUDE_PREFIXES = (".git/", "node_modules/", ".obsidian/cache/", "backups/")


def is_excluded(path: str) -> bool:
  norm = path.replace("\\", "/")
  return any(norm.startswith(p) or f"/{p}" in norm for p in EXCLUDE_PREFIXES)


def list_markdown_files(root: str) -> List[str]:
  results: List[str] = []
  for dirpath, dirnames, filenames in os.walk(root):
    rel = os.path.relpath(dirpath, root)
    rel = "" if rel == "." else rel
    dirnames[:] = [d for d in dirnames if not is_excluded(os.path.join(rel, d) + "/")]
    for f in filenames:
      _, ext = os.path.splitext(f)
      if ext.lower() in MARKDOWN_EXTENSIONS:
        rp = os.path.join(rel, f).lstrip("./")
        if not is_excluded(rp):
          results.append(os.path.join(root, rp))
  return results


def build_title_index(files: List[str], root: str) -> Dict[str, List[str]]:
  index: Dict[str, List[str]] = {}
  for path in files:
    base = os.path.splitext(os.path.basename(path))[0]
    index.setdefault(base, []).append(path)
  return index


def normalize_target(raw: str) -> str:
  # Strip alias and anchors, ignore external links
  target = raw.split("|", 1)[0]
  target = target.split("#", 1)[0]
  target = target.strip()
  if not target or target.lower().startswith(("http://", "https://", "mailto:")):
    return ""
  return target


def check_wikilinks(root: str) -> Tuple[List[Tuple[str, int, str]], int]:
  md_files = list_markdown_files(root)
  title_index = build_title_index(md_files, root)
  broken: List[Tuple[str, int, str]] = []
  checked = 0

  for path in md_files:
    try:
      with open(path, "r", encoding="utf-8", errors="ignore") as fh:
        text = fh.read()
    except Exception:
      continue

    for match in WIKI_LINK_PATTERN.finditer(text):
      raw = match.group(1)
      target = normalize_target(raw)
      if not target:
        continue
      checked += 1

      candidates: List[str] = []
      if "/" in target:
        rp = os.path.join(root, target)
        if not rp.lower().endswith(".md"):
          rp += ".md"
        if os.path.isfile(rp):
          continue  # valid explicit path
        else:
          # explicit path missing
          broken.append((path, match.start(), target))
          continue
      else:
        base = os.path.splitext(os.path.basename(target))[0]
        candidates = title_index.get(base, [])
        if candidates:
          continue
        broken.append((path, match.start(), target))

  return broken, checked


def write_report(report_path: str, broken: List[Tuple[str, int, str]], checked: int) -> None:
  os.makedirs(os.path.dirname(report_path), exist_ok=True)
  with open(report_path, "w", encoding="utf-8") as fh:
    fh.write(f"Wikilink Integrity Report\n\n")
    fh.write(f"Checked links: {checked}\n")
    fh.write(f"Broken links: {len(broken)}\n\n")
    for src, pos, tgt in broken[:10000]:
      rel = os.path.relpath(src)
      fh.write(f"- {rel}: → [[{tgt}]] (at char {pos})\n")


def main() -> int:
  parser = argparse.ArgumentParser(description="Validate Obsidian-style wikilinks.")
  parser.add_argument("--root", default=".", help="Repository root path")
  parser.add_argument("--report", default=f"reports/ops_{time.strftime('%Y-%m-%d')}/link_integrity.md", help="Report output path")
  args = parser.parse_args()

  root = os.path.abspath(args.root)
  broken, checked = check_wikilinks(root)
  write_report(args.report, broken, checked)

  if broken:
    # Non-zero exit enables CI to flag issues while still producing a report
    print(f"Found {len(broken)} broken wikilinks. Report: {args.report}", file=sys.stderr)
    return 1
  print("All wikilinks valid.")
  return 0


if __name__ == "__main__":
  sys.exit(main())