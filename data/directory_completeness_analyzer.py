#!/usr/bin/env python3
"""
Directory Completeness Analyzer
Comprehensive analysis of vault directory structure and missing content identification.
"""

import os
import json
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Set, Optional
from collections import defaultdict
import re

class DirectoryCompletenessAnalyzer:
    """Analyze vault directory structure for completeness and gaps"""
    
    def __init__(self, vault_root: str):
        self.vault_root = Path(vault_root)
        self.data_dir = self.vault_root / "data"
        self.reports_dir = self.vault_root / "reports"
        
        # Expected structure based on Cordelia vault standards
        self.expected_structure = {
            "01_Adventures": {
                "description": "Campaign adventures and session content",
                "expected_subdirs": ["Seven_Shards_Campaign", "The_Sunken_Conspiracy", "Winds_of_Rebellion"],
                "expected_files": ["*.md", "Session_*.md"],
                "required": True
            },
            "02_Worldbuilding": {
                "description": "Core world content",
                "expected_subdirs": ["Groups", "Items", "Lore", "People", "Places", "Quests"],
                "expected_files": ["*.md"],
                "required": True,
                "subdirs": {
                    "Groups": {
                        "expected_subdirs": ["Academies", "Criminal_Organizations", "Cults_and_Movements", 
                                           "Cultural_Organizations", "Government_and_Parliament", "Guilds",
                                           "Houses_and_Nobility", "Orders"],
                        "expected_files": ["*.md"]
                    },
                    "Items": {
                        "expected_files": ["*.md", "Trade Goods Catalog.md"]
                    },
                    "Lore": {
                        "expected_files": ["*.md", "Deep Mother.md", "Crystal Corruption.md", "Shadow Conspiracy.md"]
                    }
                }
            },
            "03_Mechanics": {
                "description": "Game mechanics and systems",
                "expected_subdirs": ["Rules_Reference", "Social_Systems", "Transformations", "Vehicles"],
                "expected_files": ["*.md"],
                "required": True
            },
            "04_Resources": {
                "description": "Assets, handouts, and reference materials",
                "expected_subdirs": ["Assets", "Handouts", "Maps", "Random_Tables"],
                "expected_files": [],
                "required": True
            },
            "05_Templates": {
                "description": "Content templates and generators",
                "expected_subdirs": ["World Builder Templates", "Text Generator Templates"],
                "expected_files": ["*.md"],
                "required": True
            },
            "06_GM_Resources": {
                "description": "Game Master tools and references",
                "expected_subdirs": ["NPC_Guides", "Reference_Cards", "Session_Tools"],
                "expected_files": ["*.md", "*.canvas"],
                "required": True
            },
            "07_Player_Resources": {
                "description": "Player-facing content and guides",
                "expected_subdirs": ["Character_Options", "Handouts", "Session_Summaries"],
                "expected_files": ["Character Creation Extended.md", "World Primer.md"],
                "required": True
            },
            "08_Archive": {
                "description": "Archived and deprecated content",
                "expected_subdirs": [],
                "expected_files": ["Archive Index.md"],
                "required": True
            },
            "09_Performance": {
                "description": "Obsidian Bases databases and performance tools",
                "expected_subdirs": [],
                "expected_files": ["*.base", "*.log"],
                "required": True
            },
            "10_Community": {
                "description": "Community features and collaboration tools",
                "expected_subdirs": [],
                "expected_files": ["Community_Dashboard.md"],
                "required": False
            },
            "11_Professional": {
                "description": "Professional tools and commercial features",
                "expected_subdirs": [],
                "expected_files": [],
                "required": False
            },
            "12_Research": {
                "description": "Research and development content",
                "expected_subdirs": [],
                "expected_files": [],
                "required": False
            },
            "1-Session Journals": {
                "description": "Session journals and logs",
                "expected_subdirs": [],
                "expected_files": ["Aethermoor - Session *.md", "Aquabyssos - Session *.md"],
                "required": True
            },
            "backups": {
                "description": "Backup content and recovery data",
                "expected_subdirs": [],
                "expected_files": [],
                "required": True
            },
            "data": {
                "description": "Structured data, models, and analysis results",
                "expected_subdirs": [],
                "expected_files": ["models.py", "*.json", "*.py"],
                "required": True
            },
            "reports": {
                "description": "Analysis reports and vault metrics",
                "expected_subdirs": [],
                "expected_files": ["*.md", "*.py"],
                "required": True
            },
            "scripts": {
                "description": "Automation and maintenance tools",
                "expected_subdirs": [],
                "expected_files": ["*.py", "*.js", "*.sh"],
                "required": True
            }
        }
        
        # Analysis results
        self.missing_directories: List[str] = []
        self.missing_files: List[str] = []
        self.unexpected_items: List[str] = []
        self.completeness_scores: Dict[str, float] = {}
        self.directory_analysis: Dict[str, Any] = {}
        
    def analyze_completeness(self) -> Dict[str, Any]:
        """Perform comprehensive directory completeness analysis"""
        print("🔍 Analyzing vault directory completeness...")
        
        # Check each expected directory
        for dir_name, config in self.expected_structure.items():
            self._analyze_directory(dir_name, config)
        
        # Check for unexpected items in root
        self._find_unexpected_items()
        
        # Calculate overall completeness
        overall_completeness = self._calculate_overall_completeness()
        
        # Generate comprehensive report
        report = self._generate_completeness_report(overall_completeness)
        
        return {
            "overall_completeness": overall_completeness,
            "directory_analysis": self.directory_analysis,
            "missing_directories": self.missing_directories,
            "missing_files": self.missing_files,
            "unexpected_items": self.unexpected_items,
            "completeness_scores": self.completeness_scores
        }
    
    def _analyze_directory(self, dir_name: str, config: Dict[str, Any]) -> None:
        """Analyze individual directory for completeness"""
        dir_path = self.vault_root / dir_name
        analysis = {
            "exists": dir_path.exists(),
            "required": config.get("required", False),
            "description": config.get("description", ""),
            "expected_subdirs": config.get("expected_subdirs", []),
            "expected_files": config.get("expected_files", []),
            "actual_subdirs": [],
            "actual_files": [],
            "missing_subdirs": [],
            "missing_files": [],
            "completeness_score": 0.0
        }
        
        if not dir_path.exists():
            if config.get("required", False):
                self.missing_directories.append(dir_name)
            analysis["completeness_score"] = 0.0
            self.directory_analysis[dir_name] = analysis
            return
        
        # Get actual contents
        if dir_path.is_dir():
            for item in dir_path.iterdir():
                if item.is_dir():
                    analysis["actual_subdirs"].append(item.name)
                else:
                    analysis["actual_files"].append(item.name)
        
        # Check expected subdirectories
        expected_subdirs = config.get("expected_subdirs", [])
        for subdir in expected_subdirs:
            if subdir not in analysis["actual_subdirs"]:
                analysis["missing_subdirs"].append(subdir)
                self.missing_directories.append(f"{dir_name}/{subdir}")
        
        # Check expected files (pattern matching)
        expected_files = config.get("expected_files", [])
        for file_pattern in expected_files:
            if "*" in file_pattern:
                # Pattern matching
                matching_files = [f for f in analysis["actual_files"] 
                                if self._matches_pattern(f, file_pattern)]
                if not matching_files:
                    analysis["missing_files"].append(file_pattern)
                    self.missing_files.append(f"{dir_name}/{file_pattern}")
            else:
                # Exact match
                if file_pattern not in analysis["actual_files"]:
                    analysis["missing_files"].append(file_pattern)
                    self.missing_files.append(f"{dir_name}/{file_pattern}")
        
        # Recursively analyze subdirectories if configured
        if "subdirs" in config:
            for subdir_name, subdir_config in config["subdirs"].items():
                subdir_path = dir_path / subdir_name
                if subdir_path.exists():
                    subdir_analysis = self._analyze_subdirectory(subdir_path, subdir_config)
                    analysis[f"subdir_{subdir_name}"] = subdir_analysis
        
        # Calculate completeness score
        analysis["completeness_score"] = self._calculate_directory_completeness(analysis)
        self.completeness_scores[dir_name] = analysis["completeness_score"]
        self.directory_analysis[dir_name] = analysis
    
    def _analyze_subdirectory(self, subdir_path: Path, config: Dict[str, Any]) -> Dict[str, Any]:
        """Analyze subdirectory for completeness"""
        analysis = {
            "expected_subdirs": config.get("expected_subdirs", []),
            "expected_files": config.get("expected_files", []),
            "actual_subdirs": [],
            "actual_files": [],
            "missing_subdirs": [],
            "missing_files": []
        }
        
        # Get actual contents
        for item in subdir_path.iterdir():
            if item.is_dir():
                analysis["actual_subdirs"].append(item.name)
            else:
                analysis["actual_files"].append(item.name)
        
        # Check expected items
        for subdir in config.get("expected_subdirs", []):
            if subdir not in analysis["actual_subdirs"]:
                analysis["missing_subdirs"].append(subdir)
        
        for file_pattern in config.get("expected_files", []):
            if "*" in file_pattern:
                matching_files = [f for f in analysis["actual_files"] 
                                if self._matches_pattern(f, file_pattern)]
                if not matching_files:
                    analysis["missing_files"].append(file_pattern)
            else:
                if file_pattern not in analysis["actual_files"]:
                    analysis["missing_files"].append(file_pattern)
        
        return analysis
    
    def _matches_pattern(self, filename: str, pattern: str) -> bool:
        """Check if filename matches pattern (simple wildcard support)"""
        if pattern == "*":
            return True
        if pattern.startswith("*") and pattern.endswith("*"):
            return pattern[1:-1] in filename
        if pattern.startswith("*"):
            return filename.endswith(pattern[1:])
        if pattern.endswith("*"):
            return filename.startswith(pattern[:-1])
        return filename == pattern
    
    def _find_unexpected_items(self) -> None:
        """Find unexpected items in vault root"""
        expected_items = set(self.expected_structure.keys())
        expected_items.update([".obsidian", ".git", "README.md", "CLAUDE.md"])
        
        actual_items = {item.name for item in self.vault_root.iterdir()}
        
        for item in actual_items - expected_items:
            if not item.startswith('.'):  # Ignore hidden files
                self.unexpected_items.append(item)
    
    def _calculate_directory_completeness(self, analysis: Dict[str, Any]) -> float:
        """Calculate completeness score for a directory"""
        expected_count = len(analysis["expected_subdirs"]) + len(analysis["expected_files"])
        if expected_count == 0:
            return 100.0
        
        missing_count = len(analysis["missing_subdirs"]) + len(analysis["missing_files"])
        completeness = max(0, (expected_count - missing_count) / expected_count * 100)
        
        return completeness
    
    def _calculate_overall_completeness(self) -> float:
        """Calculate overall vault completeness"""
        if not self.completeness_scores:
            return 0.0
        
        # Weight required directories more heavily
        total_weighted = 0.0
        total_weight = 0.0
        
        for dir_name, score in self.completeness_scores.items():
            config = self.expected_structure.get(dir_name, {})
            weight = 2.0 if config.get("required", False) else 1.0
            total_weighted += score * weight
            total_weight += weight
        
        return total_weighted / total_weight if total_weight > 0 else 0.0
    
    def _generate_completeness_report(self, overall_completeness: float) -> str:
        """Generate comprehensive completeness report"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        report_content = f"""# Vault Directory Completeness Analysis
Generated: {datetime.now().strftime("%Y-%m-%d %H:%M:%S")}

## Overall Completeness: {overall_completeness:.1f}%

### Summary
- **Missing Directories**: {len(self.missing_directories)}
- **Missing Files**: {len(self.missing_files)}
- **Unexpected Items**: {len(self.unexpected_items)}

## Directory Analysis

"""
        
        # Sort directories by completeness score
        sorted_dirs = sorted(self.directory_analysis.items(), 
                           key=lambda x: x[1]["completeness_score"], reverse=True)
        
        for dir_name, analysis in sorted_dirs:
            status_icon = "✅" if analysis["completeness_score"] >= 90 else \
                         "🟡" if analysis["completeness_score"] >= 70 else "❌"
            
            required_text = " (Required)" if analysis["required"] else ""
            
            report_content += f"""### {status_icon} {dir_name}{required_text}
**Completeness**: {analysis['completeness_score']:.1f}%
**Description**: {analysis['description']}
**Exists**: {"Yes" if analysis['exists'] else "No"}

"""
            
            if analysis["missing_subdirs"]:
                report_content += f"**Missing Subdirectories**: {', '.join(analysis['missing_subdirs'])}\n"
            
            if analysis["missing_files"]:
                report_content += f"**Missing Files**: {', '.join(analysis['missing_files'])}\n"
            
            report_content += "\n"
        
        # Add critical missing items
        if self.missing_directories:
            report_content += """## Critical Missing Directories
"""
            for missing_dir in sorted(self.missing_directories):
                report_content += f"- `{missing_dir}`\n"
        
        if self.missing_files:
            report_content += """
## Missing Files
"""
            for missing_file in sorted(self.missing_files)[:20]:  # Limit for readability
                report_content += f"- `{missing_file}`\n"
            
            if len(self.missing_files) > 20:
                report_content += f"- ... and {len(self.missing_files) - 20} more files\n"
        
        if self.unexpected_items:
            report_content += """
## Unexpected Items
"""
            for item in sorted(self.unexpected_items):
                report_content += f"- `{item}`\n"
        
        # Recommendations
        report_content += f"""
## Recommendations

### Immediate Actions
1. **Create missing required directories** - {len([d for d in self.missing_directories if self.expected_structure.get(d.split('/')[0], {}).get('required', False)])} critical directories missing
2. **Restore missing core files** - Focus on template files and index files
3. **Review unexpected items** - Determine if they should be moved or archived

### Directory Priorities
"""
        
        # Show lowest scoring required directories
        required_dirs = [(name, analysis) for name, analysis in self.directory_analysis.items() 
                        if analysis["required"] and analysis["completeness_score"] < 90]
        required_dirs.sort(key=lambda x: x[1]["completeness_score"])
        
        for dir_name, analysis in required_dirs[:5]:
            missing_count = len(analysis["missing_subdirs"]) + len(analysis["missing_files"])
            report_content += f"1. **{dir_name}**: {missing_count} missing items ({analysis['completeness_score']:.1f}% complete)\n"
        
        report_content += f"""
### Phase 1 Integration
- **Directory completeness** should reach 95%+ before Phase 1 completion
- **Missing content recovery** from backups should address many gaps
- **Template system** needs completion for content generation
- **Performance tools** (09_Performance) critical for large vault operation

---
*This analysis identifies structural gaps in the vault for systematic completion.*
"""
        
        # Save report
        report_file = self.reports_dir / f"directory_completeness_report_{timestamp}.md"
        with open(report_file, 'w') as f:
            f.write(report_content)
        
        # Save JSON data
        json_file = self.data_dir / f"directory_completeness_{timestamp}.json"
        analysis_data = {
            "timestamp": datetime.now().isoformat(),
            "overall_completeness": overall_completeness,
            "directory_analysis": self.directory_analysis,
            "missing_directories": self.missing_directories,
            "missing_files": self.missing_files,
            "unexpected_items": self.unexpected_items,
            "completeness_scores": self.completeness_scores
        }
        
        with open(json_file, 'w') as f:
            json.dump(analysis_data, f, indent=2, default=str)
        
        print(f"📄 Completeness report: {report_file}")
        print(f"📋 Analysis data: {json_file}")
        
        return report_content
    
    def create_missing_directories(self, dry_run: bool = True) -> Dict[str, int]:
        """Create missing directories"""
        results = {"created": 0, "skipped": 0, "failed": 0}
        
        print(f"📁 {'[DRY RUN] ' if dry_run else ''}Creating missing directories...")
        
        for missing_dir in self.missing_directories:
            dir_path = self.vault_root / missing_dir
            
            try:
                if not dry_run:
                    dir_path.mkdir(parents=True, exist_ok=True)
                
                print(f"  ✅ {'Would create' if dry_run else 'Created'}: {missing_dir}")
                results["created"] += 1
                
            except Exception as e:
                print(f"  ❌ Failed to create {missing_dir}: {e}")
                results["failed"] += 1
        
        return results

def main():
    """Main directory analysis function"""
    vault_root = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    analyzer = DirectoryCompletenessAnalyzer(vault_root)
    
    print("📁 Directory Completeness Analyzer")
    print("=" * 40)
    
    # Analyze completeness
    results = analyzer.analyze_completeness()
    
    print(f"\n📊 Completeness Results:")
    print(f"   Overall Completeness: {results['overall_completeness']:.1f}%")
    print(f"   Missing Directories: {len(results['missing_directories'])}")
    print(f"   Missing Files: {len(results['missing_files'])}")
    print(f"   Unexpected Items: {len(results['unexpected_items'])}")
    
    # Offer to create missing directories
    if results['missing_directories']:
        print(f"\n🔧 Found {len(results['missing_directories'])} missing directories")
        creation_results = analyzer.create_missing_directories(dry_run=False)
        print(f"   Created: {creation_results['created']}")
        print(f"   Failed: {creation_results['failed']}")

if __name__ == "__main__":
    main()