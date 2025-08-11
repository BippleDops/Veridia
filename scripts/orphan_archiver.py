#!/usr/bin/env python3
import argparse
import os
import re
import shutil
import sys
import time
from typing import List, Tuple

MARKDOWN_EXTS = (".md", ".markdown")
EXCLUDE_PREFIXES = (".git/", "node_modules/", ".obsidian/cache/", "backups/")
WIKI_LINK_PATTERN = re.compile(r"\[\[([^\]]+)\]\]")
STUB_PATTERNS = (
  re.compile(r"^status:\s*stub\b", re.I|re.M),
  re.compile(r"Stub placeholder generated automatically", re.I),
)


def is_excluded(path: str) -> bool:
  norm = path.replace("\\", "/")
  return any(norm.startswith(p) or f"/{p}" in norm for p in EXCLUDE_PREFIXES)


def list_markdown_files(root: str) -> List[str]:
  out: List[str] = []
  for dp, dn, fn in os.walk(root):
    rel = os.path.relpath(dp, root)
    rel = "" if rel == "." else rel
    if is_excluded(rel + "/"):
      continue
    for f in fn:
      if os.path.splitext(f)[1].lower() in MARKDOWN_EXTS:
        out.append(os.path.join(dp, f))
  return out


def is_low_value_stub(text: str) -> bool:
  if len(text.strip()) < 120:
    return True
  if any(p.search(text) for p in STUB_PATTERNS):
    # further check no headings beyond title/frontmatter
    body = text
    # strip frontmatter block if present
    if body.lstrip().startswith("---"):
      parts = body.split("---", 2)
      if len(parts) == 3:
        body = parts[2]
    # check for meaningful sections
    headings = re.findall(r"^#+\s+", body, flags=re.M)
    if len(headings) <= 1 and len(body.strip()) < 300:
      return True
  return False


def build_inbound_counts(root: str, files: List[str]) -> dict:
  inbound = {p: 0 for p in files}
  def norm_target(s: str) -> str:
    s = s.split('|',1)[0].split('#',1)[0].strip()
    return s
  by_name = {}
  for p in files:
    base = os.path.splitext(os.path.basename(p))[0]
    by_name.setdefault(base, []).append(p)
  for p in files:
    try:
      with open(p, 'r', encoding='utf-8', errors='ignore') as fh:
        txt = fh.read()
    except Exception:
      continue
    for m in WIKI_LINK_PATTERN.finditer(txt):
      tgt = norm_target(m.group(1))
      if not tgt or tgt.lower().startswith(('http://','https://')):
        continue
      cands = []
      if '/' in tgt:
        rp = os.path.join(root, tgt)
        if not rp.lower().endswith('.md'):
          rp += '.md'
        if os.path.isfile(rp):
          cands = [rp]
      if not cands:
        base = os.path.splitext(os.path.basename(tgt))[0]
        cands = by_name.get(base, [])
      for c in cands:
        inbound[c] = inbound.get(c, 0) + 1
  return inbound


def write_redirect_stub(src_path: str, canonical_rel: str) -> None:
  with open(src_path, 'w', encoding='utf-8') as fh:
    title = os.path.splitext(os.path.basename(canonical_rel))[0]
    fh.write(f"---\nstatus: redirected\nredirect: {canonical_rel}\n---\n\nThis page has moved to [[{title}]].\n")


def main() -> int:
  parser = argparse.ArgumentParser(description='Archive low-value stub orphans to 08_Archive/Pruned_YYYY-MM, adding redirect stubs.')
  parser.add_argument('--root', default='.')
  parser.add_argument('--apply', action='store_true')
  parser.add_argument('--report', default=f"reports/ops_{time.strftime('%Y-%m-%d')}/orphans_archived.md")
  parser.add_argument('--threshold', type=int, default=0, help='Max inbound wikilinks to consider orphan')
  args = parser.parse_args()

  root = os.path.abspath(args.root)
  files = list_markdown_files(root)
  inbound = build_inbound_counts(root, files)

  archive_dir = os.path.join(root, f"08_Archive/Pruned_{time.strftime('%Y-%m')}")
  os.makedirs(os.path.dirname(os.path.join(root, args.report)), exist_ok=True)
  os.makedirs(archive_dir, exist_ok=True)

  moved = []
  skipped = []

  for p in files:
    if inbound.get(p, 0) > args.threshold:
      continue
    try:
      with open(p, 'r', encoding='utf-8', errors='ignore') as fh:
        txt = fh.read()
    except Exception:
      continue
    if is_low_value_stub(txt):
      rel = os.path.relpath(p, root)
      target = os.path.join(archive_dir, os.path.basename(p))
      if args.apply:
        # move file and write a redirect stub at original location
        try:
          shutil.move(p, target)
          write_redirect_stub(p, os.path.relpath(target, root))
          moved.append(rel)
        except Exception:
          skipped.append(rel)
      else:
        moved.append(rel + " (dry-run)")

  with open(os.path.join(root, args.report), 'w', encoding='utf-8') as fh:
    fh.write("Orphan Archival Report\n\n")
    fh.write(f"Archive directory: {os.path.relpath(archive_dir, root)}\n")
    fh.write(f"Moved: {len(moved)}\n")
    fh.write(f"Skipped: {len(skipped)}\n\n")
    for m in moved:
      fh.write(f"- {m}\n")
    if skipped:
      fh.write("\nSkipped due to errors:\n")
      for s in skipped:
        fh.write(f"- {s}\n")

  print(f"Report written to {args.report}")
  return 0

if __name__ == '__main__':
  sys.exit(main())