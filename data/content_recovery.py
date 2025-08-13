#!/usr/bin/env python3
"""
Content Recovery Tool - Phase 1 Implementation
Automated recovery and restoration of vault content from backups.
"""

import os
import json
import shutil
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Set, Optional
import yaml
import re

class ContentRecovery:
    """Advanced content recovery and restoration system"""
    
    def __init__(self, vault_root: str):
        self.vault_root = Path(vault_root)
        self.backups_dir = self.vault_root / "backups"
        self.data_dir = self.vault_root / "data"
        self.reports_dir = self.vault_root / "reports"
        
        # Recovery tracking
        self.recovered_files: List[str] = []
        self.failed_recoveries: List[Dict[str, str]] = []
        self.skipped_files: List[str] = []
        
    def recover_missing_content(self, dry_run: bool = False) -> Dict[str, int]:
        """Recover missing content from backups"""
        results = {"recovered": 0, "skipped": 0, "failed": 0}
        
        print(f"🔄 {'[DRY RUN] ' if dry_run else ''}Starting content recovery...")
        
        # Load recovery data
        recovery_data = self._load_recovery_data()
        if not recovery_data or "missing_content" not in recovery_data:
            print("❌ No recovery data found. Run vault analysis first.")
            return results
        
        missing_files = recovery_data["missing_content"]
        print(f"📋 Found {len(missing_files)} missing files to recover")
        
        for relative_path in missing_files[:50]:  # Limit for initial run
            backup_file = self.backups_dir / relative_path
            target_file = self.vault_root / relative_path
            
            if not backup_file.exists():
                results["failed"] += 1
                self.failed_recoveries.append({
                    "path": relative_path,
                    "reason": "Backup file not found"
                })
                continue
                
            if target_file.exists():
                results["skipped"] += 1
                self.skipped_files.append(relative_path)
                continue
            
            try:
                if not dry_run:
                    # Ensure target directory exists
                    target_file.parent.mkdir(parents=True, exist_ok=True)
                    
                    # Read and validate content
                    content = backup_file.read_text(encoding='utf-8')
                    
                    # Add/update frontmatter if needed
                    enhanced_content = self._enhance_content(content, relative_path)
                    
                    # Write to target
                    target_file.write_text(enhanced_content, encoding='utf-8')
                
                self.recovered_files.append(relative_path)
                results["recovered"] += 1
                
                if results["recovered"] % 10 == 0:
                    print(f"  ✅ Recovered {results['recovered']} files...")
                
            except Exception as e:
                results["failed"] += 1
                self.failed_recoveries.append({
                    "path": relative_path,
                    "reason": str(e)
                })
                print(f"  ❌ Failed to recover {relative_path}: {e}")
        
        self._save_recovery_report(results, dry_run)
        return results
    
    def _load_recovery_data(self) -> Optional[Dict]:
        """Load the latest recovery data from analysis"""
        recovery_files = list(self.data_dir.glob("recoverable_content_*.json"))
        if not recovery_files:
            return None
        
        latest_file = max(recovery_files, key=os.path.getctime)
        with open(latest_file) as f:
            return json.load(f)
    
    def _enhance_content(self, content: str, file_path: str) -> str:
        """Enhance content with proper frontmatter and structure"""
        # Check if already has frontmatter
        if content.startswith('---\n'):
            return content
        
        # Determine content metadata from path
        path_parts = Path(file_path).parts
        
        # Determine world realm
        world = "Both"
        if any("Aquabyssos" in part for part in path_parts):
            world = "Aquabyssos"
        elif any("Aethermoor" in part for part in path_parts):
            world = "Aethermoor"
        
        # Determine content type
        content_type = "Lore"
        if "Groups" in path_parts:
            content_type = "Faction"
        elif "Items" in path_parts:
            content_type = "Item"
        elif "People" in path_parts:
            content_type = "Character"
        elif "Places" in path_parts:
            content_type = "Location"
        elif "Quest" in file_path:
            content_type = "Quest"
        elif "Session" in file_path:
            content_type = "Session"
        
        # Create basic frontmatter
        frontmatter = {
            "created": datetime.now().date().isoformat(),
            "updated": datetime.now().isoformat(),
            "status": "active",
            "world": world,
            "type": content_type,
            "tags": [f"status/active", f"world/{world.lower()}", f"type/{content_type.lower()}"]
        }
        
        # Build enhanced content
        yaml_front = yaml.dump(frontmatter, default_flow_style=False)
        enhanced = f"---\n{yaml_front}---\n\n{content}"
        
        return enhanced
    
    def _save_recovery_report(self, results: Dict[str, int], dry_run: bool):
        """Save detailed recovery report"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        report = {
            "timestamp": datetime.now().isoformat(),
            "dry_run": dry_run,
            "results": results,
            "recovered_files": self.recovered_files,
            "failed_recoveries": self.failed_recoveries,
            "skipped_files": self.skipped_files
        }
        
        # Save JSON report
        report_file = self.data_dir / f"recovery_report_{timestamp}.json"
        with open(report_file, 'w') as f:
            json.dump(report, f, indent=2)
        
        # Save human-readable report
        md_report_file = self.reports_dir / f"content_recovery_report_{timestamp}.md"
        self._generate_recovery_markdown(report, md_report_file)
        
        print(f"\n📊 Recovery report saved:")
        print(f"   📄 {md_report_file}")
        print(f"   📋 {report_file}")
    
    def _generate_recovery_markdown(self, report: Dict, output_file: Path):
        """Generate human-readable recovery report"""
        content = f"""# Content Recovery Report
Generated: {report['timestamp']}
Mode: {'DRY RUN' if report['dry_run'] else 'ACTUAL RECOVERY'}

## Summary
- **Recovered**: {report['results']['recovered']} files
- **Skipped**: {report['results']['skipped']} files  
- **Failed**: {report['results']['failed']} files

## Recovered Files
"""
        
        if report['recovered_files']:
            for file_path in report['recovered_files'][:20]:  # Show first 20
                content += f"- `{file_path}`\n"
            
            if len(report['recovered_files']) > 20:
                content += f"- ... and {len(report['recovered_files']) - 20} more files\n"
        else:
            content += "No files recovered.\n"
        
        content += "\n## Failed Recoveries\n"
        if report['failed_recoveries']:
            for failure in report['failed_recoveries'][:10]:  # Show first 10
                content += f"- `{failure['path']}`: {failure['reason']}\n"
        else:
            content += "No recovery failures.\n"
        
        content += f"""
## Next Steps
1. **Review recovered content** for quality and completeness
2. **Fix remaining broken links** using link resolution tools
3. **Validate metadata** using Pydantic models
4. **Continue recovery** of remaining {4701 - report['results']['recovered']} missing files
5. **Update newer backups** if needed

## Recovery Statistics
- **Success Rate**: {(report['results']['recovered'] / (report['results']['recovered'] + report['results']['failed']) * 100) if (report['results']['recovered'] + report['results']['failed']) > 0 else 0:.1f}%
- **Files Processed**: {sum(report['results'].values())}
"""
        
        with open(output_file, 'w') as f:
            f.write(content)

def main():
    """Main recovery function"""
    vault_root = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    recovery = ContentRecovery(vault_root)
    
    print("🔄 Content Recovery Tool - Phase 1")
    print("=" * 40)
    
    # First run as dry run
    print("Running initial assessment (dry run)...")
    dry_results = recovery.recover_missing_content(dry_run=True)
    
    print(f"\n📊 Dry Run Results:")
    print(f"   Would recover: {dry_results['recovered']} files")
    print(f"   Would skip: {dry_results['skipped']} files") 
    print(f"   Would fail: {dry_results['failed']} files")
    
    # Actual recovery of first batch
    print(f"\n🚀 Starting actual recovery of first 50 files...")
    actual_results = recovery.recover_missing_content(dry_run=False)
    
    print(f"\n✅ Recovery Complete:")
    print(f"   Recovered: {actual_results['recovered']} files")
    print(f"   Skipped: {actual_results['skipped']} files")
    print(f"   Failed: {actual_results['failed']} files")

if __name__ == "__main__":
    main()