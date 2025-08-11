#!/usr/bin/env python3
import argparse
import hashlib
import os
import re
import shutil
import sys
import time
from collections import defaultdict
from typing import Dict, List, Tuple

ASSET_ROOTS = ["04_Resources", "04_Resources/Assets"]
MD_EXTS = (".md", ".markdown")
BIN_EXTS = (".png", ".jpg", ".jpeg", ".webp", ".webm", ".mp4", ".svg")
EXCLUDE_PREFIXES = (".git/", "node_modules/", ".obsidian/cache/", "backups/")
WIKI_LINK_PATTERN = re.compile(r"\!\?\[\[([^\]]+)\]\]")


def is_excluded(path: str) -> bool:
  norm = path.replace("\\", "/")
  return any(norm.startswith(p) or f"/{p}" in norm for p in EXCLUDE_PREFIXES)


def list_binary_assets(root: str) -> List[str]:
  assets: List[str] = []
  for base in ASSET_ROOTS:
    start = os.path.join(root, base)
    if not os.path.isdir(start):
      continue
    for dp, dn, fn in os.walk(start):
      for f in fn:
        if os.path.splitext(f)[1].lower() in BIN_EXTS:
          p = os.path.join(dp, f)
          rel = os.path.relpath(p, root)
          if not is_excluded(rel):
            assets.append(p)
  return assets


def list_markdown_files(root: str) -> List[str]:
  out: List[str] = []
  for dp, dn, fn in os.walk(root):
    rel = os.path.relpath(dp, root)
    rel = "" if rel == "." else rel
    if is_excluded(rel + "/"):
      continue
    for f in fn:
      if os.path.splitext(f)[1].lower() in MD_EXTS:
        out.append(os.path.join(dp, f))
  return out


def sha256_of(path: str) -> str:
  h = hashlib.sha256()
  with open(path, 'rb') as fh:
    for chunk in iter(lambda: fh.read(1024*1024), b''):
      h.update(chunk)
  return h.hexdigest()


def build_duplicate_map(paths: List[str]) -> Dict[str, List[str]]:
  dup: Dict[str, List[str]] = defaultdict(list)
  for p in paths:
    try:
      h = sha256_of(p)
      dup[h].append(p)
    except Exception:
      continue
  return {h: lst for h, lst in dup.items() if len(lst) > 1}


def choose_canonical(paths: List[str]) -> str:
  # Prefer path under 04_Resources/Assets; fallback to lexicographically smallest
  prioritized = sorted(paths, key=lambda p: (0 if "/04_Resources/Assets/" in p.replace("\\","/") else 1, len(p), p))
  return prioritized[0]


def replace_references(md_files: List[str], from_path: str, to_path: str) -> int:
  # Replace explicit path references only; do not touch bare basenames to avoid ambiguity
  count = 0
  from_rel = from_path.replace("\\", "/")
  to_rel = to_path.replace("\\", "/")
  if from_rel.startswith("/workspace/"):
    from_rel = os.path.relpath(from_rel, "/workspace").replace("\\", "/")
  if to_rel.startswith("/workspace/"):
    to_rel = os.path.relpath(to_rel, "/workspace").replace("\\", "/")
  for mdf in md_files:
    try:
      with open(mdf, 'r', encoding='utf-8', errors='ignore') as fh:
        text = fh.read()
    except Exception:
      continue
    if from_rel in text:
      text2 = text.replace(from_rel, to_rel)
      if text2 != text:
        try:
          with open(mdf, 'w', encoding='utf-8') as fh:
            fh.write(text2)
          count += 1
        except Exception:
          continue
  return count


def has_wikilink_to_basename(md_files: List[str], basename: str) -> bool:
  # Detect any wikilink that targets this basename (with or without extension)
  targets = {basename, os.path.splitext(basename)[0]}
  for mdf in md_files:
    try:
      with open(mdf, 'r', encoding='utf-8', errors='ignore') as fh:
        text = fh.read()
    except Exception:
      continue
    for m in WIKI_LINK_PATTERN.finditer(text):
      raw = m.group(1).strip()
      raw = raw.split('|',1)[0].split('#',1)[0].strip()
      if raw in targets or os.path.basename(raw) in targets:
        return True
  return False


def main() -> int:
  parser = argparse.ArgumentParser(description='Consolidate duplicate binary assets safely.')
  parser.add_argument('--root', default='.')
  parser.add_argument('--apply', action='store_true', help='Perform replacements and remove redundant duplicates')
  parser.add_argument('--report', default=f"reports/ops_{time.strftime('%Y-%m-%d')}/duplicates_resolved.md")
  args = parser.parse_args()

  root = os.path.abspath(args.root)
  os.makedirs(os.path.dirname(os.path.join(root, args.report)), exist_ok=True)

  assets = list_binary_assets(root)
  dup_map = build_duplicate_map(assets)
  md_files = list_markdown_files(root)

  total_groups = len(dup_map)
  total_removed = 0
  total_updates = 0
  total_skipped_wikilink = 0
  lines: List[str] = []

  for h, paths in sorted(dup_map.items(), key=lambda kv: -len(kv[1])):
    canonical = choose_canonical(paths)
    redundant = [p for p in paths if p != canonical]
    lines.append(f"- hash {h[:12]}: canonical = {os.path.relpath(canonical, root)}")
    for r in redundant:
      updates = replace_references(md_files, os.path.relpath(r, root), os.path.relpath(canonical, root)) if args.apply else 0
      total_updates += updates
      base = os.path.basename(r)
      if args.apply and has_wikilink_to_basename(md_files, base):
        lines.append(f"  - redundant: {os.path.relpath(r, root)} (SKIPPED removal: wikilink by basename present)")
        total_skipped_wikilink += 1
        continue
      lines.append(f"  - redundant: {os.path.relpath(r, root)} (refs updated in {updates} files)")
      if args.apply:
        try:
          os.remove(r)
          total_removed += 1
        except Exception:
          pass

  with open(os.path.join(root, args.report), 'w', encoding='utf-8') as fh:
    fh.write("Duplicate Assets Consolidation\n\n")
    fh.write(f"Groups: {total_groups}\n")
    fh.write(f"Removed files: {total_removed}\n")
    fh.write(f"Updated markdown files: {total_updates}\n")
    fh.write(f"Skipped due to basename wikilinks: {total_skipped_wikilink}\n\n")
    for ln in lines:
      fh.write(ln + "\n")

  print(f"Report written to {args.report}")
  return 0

if __name__ == '__main__':
  sys.exit(main())