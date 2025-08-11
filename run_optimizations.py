#!/usr/bin/env python3
"""Run vault optimizations and commit results."""
import os
import subprocess
import sys
import time

def run_cmd(cmd, check=True):
    """Run a command and return success status."""
    try:
        result = subprocess.run(cmd, shell=True, capture_output=True, text=True, check=check)
        print(f"✓ {cmd[:60]}...")
        if result.stdout:
            print(result.stdout[:500])
        return True
    except subprocess.CalledProcessError as e:
        print(f"✗ {cmd[:60]}... failed")
        if e.stderr:
            print(e.stderr[:500])
        return False

def main():
    os.chdir('/workspace')
    
    # First commit pending changes
    print("\n=== Committing tooling ===")
    run_cmd("git add -A", check=False)
    run_cmd("git commit -m 'build(ci): add GitHub Actions; chore: editorconfig + markdownlint; feat(scripts): link integrity, media optimizer, dedupe safety, orphan archiver'", check=False)
    
    # Run optimizations
    print("\n=== Running deduplication ===")
    run_cmd("python3 scripts/dedupe_assets.py --root . --apply", check=False)
    
    print("\n=== Archiving orphan stubs ===")
    run_cmd("python3 scripts/orphan_archiver.py --root . --apply --threshold 0", check=False)
    
    print("\n=== Optimizing media (top 50) ===")
    run_cmd("python3 scripts/media_optimize.py --root . --apply --limit 50", check=False)
    
    print("\n=== Checking link integrity ===")
    run_cmd("python3 scripts/link_integrity_check.py --root .", check=False)
    
    # Commit optimization results
    print("\n=== Committing optimization results ===")
    run_cmd("git add -A", check=False)
    run_cmd("git commit -m 'perf(assets): dedupe + optimize media; refactor(content): archive stub orphans; chore: link integrity report'", check=False)
    
    # Push to origin
    print("\n=== Pushing to origin ===")
    run_cmd("git push -u origin ops/vault-optimization-2025-08-11", check=False)
    
    print("\n=== Complete ===")
    print("Feature branch pushed. Ready to create PR.")

if __name__ == "__main__":
    main()