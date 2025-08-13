#!/usr/bin/env python3
"""
Cordelia TTRPG Vault Analyzer
Advanced content analysis and recovery system for Phase 1 implementation.
"""

import os
import json
import re
from pathlib import Path
from datetime import datetime, date
from typing import Dict, List, Any, Optional, Set, Tuple
from dataclasses import dataclass
import yaml
from models import (
    BaseVaultContent, Character, Location, Faction, Quest, Item, Session, Campaign,
    VaultMetrics, ContentValidationError, ValidationReport, ContentStatus, 
    WorldRealm, ContentType, FactionType, ThreatLevel, CorruptionLevel
)

@dataclass
class FileStats:
    """Statistics for a single file"""
    path: str
    size: int
    word_count: int
    line_count: int
    has_frontmatter: bool
    has_content: bool
    links_count: int
    broken_links: int
    creation_time: datetime
    modification_time: datetime

class VaultAnalyzer:
    """Comprehensive vault analysis and content recovery system"""
    
    def __init__(self, vault_root: str):
        self.vault_root = Path(vault_root)
        self.backups_dir = self.vault_root / "backups"
        self.data_dir = self.vault_root / "data"
        self.reports_dir = self.vault_root / "reports"
        
        # Ensure data and reports directories exist
        self.data_dir.mkdir(exist_ok=True)
        self.reports_dir.mkdir(exist_ok=True)
        
        # Analysis results
        self.file_stats: Dict[str, FileStats] = {}
        self.content_inventory: Dict[ContentType, List[str]] = {}
        self.broken_links: Set[str] = set()
        self.recoverable_content: Dict[str, List[str]] = {}
        
        # Content patterns
        self.frontmatter_pattern = re.compile(r'^---\n(.*?)\n---', re.DOTALL | re.MULTILINE)
        self.wikilink_pattern = re.compile(r'\[\[([^\]]+)\]\]')
        self.markdown_link_pattern = re.compile(r'\[([^\]]+)\]\(([^)]+)\)')
        
    def analyze_vault(self) -> VaultMetrics:
        """Comprehensive vault analysis"""
        print("🔍 Starting comprehensive vault analysis...")
        
        # Analyze main content
        self._analyze_directory(self.vault_root)
        
        # Analyze backups for recovery
        if self.backups_dir.exists():
            self._analyze_backups()
        
        # Generate metrics
        metrics = self._calculate_metrics()
        
        # Save analysis results
        self._save_analysis_results(metrics)
        
        print(f"📊 Analysis complete. Found {len(self.file_stats)} files.")
        return metrics
    
    def _analyze_directory(self, directory: Path, ignore_dirs: Optional[Set[str]] = None) -> None:
        """Recursively analyze directory contents"""
        if ignore_dirs is None:
            ignore_dirs = {'.obsidian', '.git', 'node_modules', '__pycache__'}
        
        for item in directory.rglob('*'):
            if item.is_file() and item.suffix in {'.md', '.canvas', '.json'}:
                # Skip if in ignored directory
                if any(ignored in item.parts for ignored in ignore_dirs):
                    continue
                    
                try:
                    stats = self._analyze_file(item)
                    if stats:
                        self.file_stats[str(item.relative_to(self.vault_root))] = stats
                        self._categorize_content(item, stats)
                except Exception as e:
                    print(f"⚠️  Error analyzing {item}: {e}")
    
    def _analyze_file(self, file_path: Path) -> Optional[FileStats]:
        """Analyze individual file"""
        try:
            content = file_path.read_text(encoding='utf-8')
            stat = file_path.stat()
            
            # Basic stats
            word_count = len(content.split())
            line_count = len(content.splitlines())
            
            # Check for frontmatter
            has_frontmatter = bool(self.frontmatter_pattern.search(content))
            
            # Check for meaningful content (more than just frontmatter)
            content_without_frontmatter = self.frontmatter_pattern.sub('', content).strip()
            has_content = len(content_without_frontmatter) > 50  # Arbitrary threshold
            
            # Count links
            wikilinks = self.wikilink_pattern.findall(content)
            md_links = self.markdown_link_pattern.findall(content)
            links_count = len(wikilinks) + len(md_links)
            
            # Check for broken links (simplified)
            broken_links = 0
            for link in wikilinks:
                link_file = self.vault_root / f"{link}.md"
                if not link_file.exists():
                    broken_links += 1
                    self.broken_links.add(link)
            
            return FileStats(
                path=str(file_path.relative_to(self.vault_root)),
                size=stat.st_size,
                word_count=word_count,
                line_count=line_count,
                has_frontmatter=has_frontmatter,
                has_content=has_content,
                links_count=links_count,
                broken_links=broken_links,
                creation_time=datetime.fromtimestamp(stat.st_ctime),
                modification_time=datetime.fromtimestamp(stat.st_mtime)
            )
        except Exception as e:
            print(f"Error analyzing file {file_path}: {e}")
            return None
    
    def _categorize_content(self, file_path: Path, stats: FileStats) -> None:
        """Categorize content by type based on path and metadata"""
        path_parts = file_path.parts
        
        # Determine content type from path
        content_type = ContentType.lore  # Default
        
        if '01_Adventures' in path_parts or 'Session' in file_path.name:
            content_type = ContentType.session if 'Session' in file_path.name else ContentType.adventure
        elif '02_Worldbuilding' in path_parts:
            if 'Groups' in path_parts:
                content_type = ContentType.faction
            elif 'Items' in path_parts:
                content_type = ContentType.item
            elif 'Places' in path_parts:
                content_type = ContentType.location
            elif 'People' in path_parts:
                content_type = ContentType.character
            else:
                content_type = ContentType.lore
        elif '03_Mechanics' in path_parts:
            content_type = ContentType.mechanics
        elif '04_Resources' in path_parts:
            content_type = ContentType.resource
        elif '05_Templates' in path_parts:
            content_type = ContentType.template
        elif 'Quest' in file_path.name:
            content_type = ContentType.quest
        
        # Add to inventory
        if content_type not in self.content_inventory:
            self.content_inventory[content_type] = []
        self.content_inventory[content_type].append(str(file_path.relative_to(self.vault_root)))
    
    def _analyze_backups(self) -> None:
        """Analyze backup directory for recoverable content"""
        print("🔍 Analyzing backups for recoverable content...")
        
        for backup_item in self.backups_dir.rglob('*'):
            if backup_item.is_file() and backup_item.suffix == '.md':
                # Check if this content exists in main vault
                relative_path = backup_item.relative_to(self.backups_dir)
                main_path = self.vault_root / relative_path
                
                if not main_path.exists():
                    # Content exists in backup but not in main vault
                    category = "missing_content"
                    if category not in self.recoverable_content:
                        self.recoverable_content[category] = []
                    self.recoverable_content[category].append(str(relative_path))
                elif backup_item.stat().st_mtime > main_path.stat().st_mtime:
                    # Backup is newer than main content
                    category = "newer_backups"
                    if category not in self.recoverable_content:
                        self.recoverable_content[category] = []
                    self.recoverable_content[category].append(str(relative_path))
    
    def _calculate_metrics(self) -> VaultMetrics:
        """Calculate comprehensive vault metrics"""
        metrics = VaultMetrics()
        metrics.total_files = len(self.file_stats)
        metrics.broken_links = len(self.broken_links)
        
        # Count by content type
        for content_type, files in self.content_inventory.items():
            metrics.content_by_type[content_type] = len(files)
        
        # Count orphaned content (files with no incoming links)
        all_files = set(self.file_stats.keys())
        linked_files = set()
        
        for file_path, stats in self.file_stats.items():
            full_path = self.vault_root / file_path
            if full_path.exists():
                content = full_path.read_text(encoding='utf-8', errors='ignore')
                links = self.wikilink_pattern.findall(content)
                for link in links:
                    linked_files.add(f"{link}.md")
        
        metrics.orphaned_content = len(all_files - linked_files)
        
        return metrics
    
    def _save_analysis_results(self, metrics: VaultMetrics) -> None:
        """Save analysis results to data and reports directories"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # Save metrics
        metrics_file = self.data_dir / f"vault_metrics_{timestamp}.json"
        with open(metrics_file, 'w') as f:
            json.dump(metrics.model_dump(), f, indent=2, default=str)
        
        # Save file stats
        stats_file = self.data_dir / f"file_statistics_{timestamp}.json"
        with open(stats_file, 'w') as f:
            stats_data = {path: {
                'size': stats.size,
                'word_count': stats.word_count,
                'line_count': stats.line_count,
                'has_frontmatter': stats.has_frontmatter,
                'has_content': stats.has_content,
                'links_count': stats.links_count,
                'broken_links': stats.broken_links,
                'creation_time': stats.creation_time.isoformat(),
                'modification_time': stats.modification_time.isoformat()
            } for path, stats in self.file_stats.items()}
            json.dump(stats_data, f, indent=2)
        
        # Save content inventory
        inventory_file = self.data_dir / f"content_inventory_{timestamp}.json"
        with open(inventory_file, 'w') as f:
            json.dump({str(k): v for k, v in self.content_inventory.items()}, f, indent=2)
        
        # Save recoverable content list
        if self.recoverable_content:
            recovery_file = self.data_dir / f"recoverable_content_{timestamp}.json"
            with open(recovery_file, 'w') as f:
                json.dump(self.recoverable_content, f, indent=2)
        
        # Generate human-readable report
        self._generate_analysis_report(metrics, timestamp)
        
        print(f"📁 Analysis results saved to data/ directory")
        print(f"📊 Metrics: {metrics_file}")
        print(f"📋 File Stats: {stats_file}")
        print(f"📦 Inventory: {inventory_file}")
    
    def _generate_analysis_report(self, metrics: VaultMetrics, timestamp: str) -> None:
        """Generate human-readable analysis report"""
        report_file = self.reports_dir / f"vault_analysis_report_{timestamp}.md"
        
        report_content = f"""# Vault Analysis Report
Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

## Overview
- **Total Files**: {metrics.total_files:,}
- **Broken Links**: {metrics.broken_links:,}
- **Orphaned Content**: {metrics.orphaned_content:,}

## Content Distribution
"""
        
        for content_type, count in sorted(metrics.content_by_type.items()):
            report_content += f"- **{content_type.value}**: {count:,} files\\n"
        
        report_content += f"""
## File Statistics
- **Average File Size**: {sum(s.size for s in self.file_stats.values()) / len(self.file_stats.values()) if self.file_stats else 0:.1f} bytes
- **Average Word Count**: {sum(s.word_count for s in self.file_stats.values()) / len(self.file_stats.values()) if self.file_stats else 0:.1f}
- **Files with Frontmatter**: {sum(1 for s in self.file_stats.values() if s.has_frontmatter):,}
- **Files with Substantial Content**: {sum(1 for s in self.file_stats.values() if s.has_content):,}

## Recoverable Content
"""
        
        if self.recoverable_content:
            for category, files in self.recoverable_content.items():
                report_content += f"- **{category.replace('_', ' ').title()}**: {len(files):,} files\\n"
        else:
            report_content += "No recoverable content found in backups.\\n"
        
        report_content += f"""
## Top Issues
- **Files without frontmatter**: {sum(1 for s in self.file_stats.values() if not s.has_frontmatter):,}
- **Empty or stub files**: {sum(1 for s in self.file_stats.values() if not s.has_content):,}
- **Files with broken links**: {sum(1 for s in self.file_stats.values() if s.broken_links > 0):,}

## Recommendations
1. **Recover missing content** from backups directory
2. **Fix broken links** - {len(self.broken_links)} unique broken targets
3. **Add frontmatter** to {sum(1 for s in self.file_stats.values() if not s.has_frontmatter)} files
4. **Expand stub content** - {sum(1 for s in self.file_stats.values() if not s.has_content)} files need development

## Phase 1 Priorities
1. Content recovery from backups
2. Metadata standardization 
3. Link integrity repair
4. Pydantic model validation setup
5. Obsidian 1.9.7 configuration optimization
"""
        
        with open(report_file, 'w') as f:
            f.write(report_content)
        
        print(f"📄 Analysis report: {report_file}")
    
    def recover_missing_content(self, dry_run: bool = True) -> Dict[str, int]:
        """Recover missing content from backups"""
        results = {"copied": 0, "skipped": 0, "errors": 0}
        
        if "missing_content" not in self.recoverable_content:
            print("No missing content found to recover.")
            return results
        
        print(f"🔄 {'DRY RUN: ' if dry_run else ''}Recovering missing content...")
        
        for relative_path in self.recoverable_content["missing_content"]:
            backup_file = self.backups_dir / relative_path
            target_file = self.vault_root / relative_path
            
            try:
                if not dry_run:
                    # Ensure target directory exists
                    target_file.parent.mkdir(parents=True, exist_ok=True)
                    
                    # Copy content
                    content = backup_file.read_text(encoding='utf-8')
                    target_file.write_text(content, encoding='utf-8')
                
                print(f"  ✅ {'Would recover' if dry_run else 'Recovered'}: {relative_path}")
                results["copied"] += 1
                
            except Exception as e:
                print(f"  ❌ Error with {relative_path}: {e}")
                results["errors"] += 1
        
        return results

def main():
    """Main analysis function"""
    vault_root = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    analyzer = VaultAnalyzer(vault_root)
    metrics = analyzer.analyze_vault()
    
    print("\\n" + "="*60)
    print("VAULT ANALYSIS COMPLETE")
    print("="*60)
    print(f"Total Files: {metrics.total_files:,}")
    print(f"Broken Links: {metrics.broken_links:,}")
    print(f"Orphaned Content: {metrics.orphaned_content:,}")
    
    # Ask about recovery
    if analyzer.recoverable_content:
        print(f"\\nRecoverable content found:")
        for category, files in analyzer.recoverable_content.items():
            print(f"  {category}: {len(files)} files")
        
        response = input("\\nRecover missing content? (y/N): ")
        if response.lower().startswith('y'):
            results = analyzer.recover_missing_content(dry_run=False)
            print(f"Recovery complete: {results}")

if __name__ == "__main__":
    main()