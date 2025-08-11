#!/usr/bin/env python3
import argparse
import os
import shutil
import subprocess
import sys
import time
from dataclasses import dataclass
from typing import Iterable, List, Optional, Tuple

ASSET_ROOTS = ["04_Resources", "04_Resources/Assets"]
WEB_EXTS = {".png", ".jpg", ".jpeg", ".webp"}
SVG_EXTS = {".svg"}
EXCLUDE_PREFIXES = (".git/", "node_modules/", ".obsidian/cache/", "backups/")


def is_excluded(path: str) -> bool:
  norm = path.replace("\\", "/")
  return any(norm.startswith(p) or f"/{p}" in norm for p in EXCLUDE_PREFIXES)


def find_assets(root: str) -> Iterable[str]:
  for base in ASSET_ROOTS:
    start = os.path.join(root, base)
    if not os.path.isdir(start):
      continue
    for dp, dn, fn in os.walk(start):
      for f in fn:
        p = os.path.join(dp, f)
        ext = os.path.splitext(f)[1].lower()
        if ext in WEB_EXTS or ext in SVG_EXTS:
          rel = os.path.relpath(p, root)
          if not is_excluded(rel):
            yield p


def which(bin_name: str) -> Optional[str]:
  return shutil.which(bin_name)


def optimize_png_lossless(path: str) -> Optional[int]:
  oxipng = which("oxipng")
  if not oxipng:
    return None
  try:
    before = os.path.getsize(path)
    subprocess.run([oxipng, "-o", "3", "--strip", "safe", path], check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
    after = os.path.getsize(path)
    return max(0, before - after)
  except Exception:
    return None


def to_webp(src: str, quality: int, max_dim: int, tmp_dir: str) -> Optional[str]:
  cwebp = which("cwebp")
  magick = which("magick") or which("convert")
  out = os.path.join(tmp_dir, os.path.basename(src) + ".webp")
  try:
    if cwebp:
      # Resize if larger than max_dim
      cmd = [cwebp, "-quiet", "-q", str(quality), src, "-o", out]
      subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
      return out if os.path.isfile(out) else None
    elif magick:
      cmd = [magick, src, "-resize", f"{max_dim}x{max_dim}>", "-quality", str(quality), out]
      subprocess.run(cmd, check=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE)
      return out if os.path.isfile(out) else None
  except Exception:
    return None
  return None


def human_bytes(n: int) -> str:
  for unit in ("B","KB","MB","GB"):
    if n < 1024 or unit == "GB":
      return f"{n:.1f}{unit}" if unit != "B" else f"{n}B"
    n /= 1024
  return f"{n}B"


def main() -> int:
  parser = argparse.ArgumentParser(description="Optimize images to WebP with savings threshold.")
  parser.add_argument("--root", default=".")
  parser.add_argument("--quality", type=int, default=80)
  parser.add_argument("--max-dim", type=int, default=1920)
  parser.add_argument("--min-savings", type=float, default=10.0, help="Only replace if savings % >= this value")
  parser.add_argument("--limit", type=int, default=200, help="Max number of files to process")
  parser.add_argument("--apply", action="store_true", help="Replace originals when savings threshold met")
  parser.add_argument("--report", default=f"reports/ops_{time.strftime('%Y-%m-%d')}/media_optimization.md")
  args = parser.parse_args()

  root = os.path.abspath(args.root)
  os.makedirs(os.path.dirname(os.path.join(root, args.report)), exist_ok=True)

  assets = list(find_assets(root))
  # Sort by size desc
  assets.sort(key=lambda p: os.path.getsize(p) if os.path.exists(p) else 0, reverse=True)

  tmp_dir = os.path.join(root, ".tmp_media_opt")
  os.makedirs(tmp_dir, exist_ok=True)

  processed = 0
  total_saved = 0
  rows: List[str] = []

  for src in assets:
    if processed >= args.limit:
      break
    ext = os.path.splitext(src)[1].lower()
    if ext in SVG_EXTS:
      # lossless SVG optim handled externally (svgo). Skip here.
      continue
    before = os.path.getsize(src)
    candidate = to_webp(src, args.quality, args.max_dim, tmp_dir)
    if not candidate or not os.path.isfile(candidate):
      continue
    after = os.path.getsize(candidate)
    if after <= 0 or before <= 0:
      continue
    savings_pct = (before - after) * 100.0 / before
    if savings_pct >= args.min_savings:
      if args.apply:
        try:
          shutil.move(candidate, src)
          saved = before - after
          total_saved += saved
          processed += 1
          rows.append(f"- {os.path.relpath(src, root)}: {human_bytes(before)} → {human_bytes(after)} (-{savings_pct:.1f}%)")
        except Exception:
          continue
      else:
        processed += 1
        rows.append(f"- {os.path.relpath(src, root)}: {human_bytes(before)} → {human_bytes(after)} (-{savings_pct:.1f}%) [preview only]")
    else:
      # savings below threshold
      processed += 1
      rows.append(f"- {os.path.relpath(src, root)}: {human_bytes(before)} → {human_bytes(after)} (-{savings_pct:.1f}%) [skipped]")
      try:
        os.remove(candidate)
      except Exception:
        pass

  with open(os.path.join(root, args.report), "w", encoding="utf-8") as fh:
    fh.write("Media Optimization Report\n\n")
    fh.write(f"Processed files: {processed}\n")
    fh.write(f"Total saved: {human_bytes(total_saved)}\n\n")
    for line in rows:
      fh.write(line + "\n")

  shutil.rmtree(tmp_dir, ignore_errors=True)
  print(f"Wrote report to {args.report}")
  return 0

if __name__ == "__main__":
  sys.exit(main())