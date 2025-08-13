#!/usr/bin/env python3
"""
Content Validation System - Phase 1
Advanced content validation using Pydantic models and quality assurance.
"""

import os
import re
import json
import yaml
from pathlib import Path
from datetime import datetime
from typing import Dict, List, Any, Optional, Tuple
import frontmatter
from models import (
    BaseVaultContent, Character, Location, Faction, Quest, Item, Session, Campaign,
    ValidationReport, ContentValidationError, ContentStatus, WorldRealm, ContentType
)

class ContentValidator:
    """Advanced content validation and quality assurance system"""
    
    def __init__(self, vault_root: str):
        self.vault_root = Path(vault_root)
        self.data_dir = self.vault_root / "data"
        self.reports_dir = self.vault_root / "reports"
        
        # Validation results
        self.validation_errors: List[ContentValidationError] = []
        self.validation_warnings: List[ContentValidationError] = []
        self.valid_files = 0
        self.total_files = 0
        
        # Content type mappings
        self.type_mappings = {
            'character': Character,
            'location': Location, 
            'faction': Faction,
            'quest': Quest,
            'item': Item,
            'session': Session,
            'campaign': Campaign
        }
        
        # Quality metrics
        self.quality_metrics = {
            'frontmatter_completeness': 0,
            'content_depth': 0,
            'link_integrity': 0,
            'metadata_consistency': 0
        }
    
    def validate_vault_content(self, limit: Optional[int] = None) -> ValidationReport:
        """Validate all vault content using Pydantic models"""
        print("🔍 Starting comprehensive content validation...")
        
        # Get all markdown files
        md_files = list(self.vault_root.rglob("*.md"))
        
        # Filter out specific directories
        excluded_dirs = {'.obsidian', 'scripts', 'node_modules', '__pycache__'}
        md_files = [f for f in md_files if not any(excluded in f.parts for excluded in excluded_dirs)]
        
        if limit:
            md_files = md_files[:limit]
        
        print(f"📋 Validating {len(md_files)} files...")
        
        for file_path in md_files:
            self.total_files += 1
            
            try:
                if self._validate_file(file_path):
                    self.valid_files += 1
                
                if self.total_files % 100 == 0:
                    print(f"  ✅ Processed {self.total_files} files...")
                    
            except Exception as e:
                self._add_error(file_path, "validation_error", str(e), "high")
        
        # Generate report
        report = ValidationReport(
            total_files_checked=self.total_files,
            valid_files=self.valid_files,
            errors=self.validation_errors,
            warnings=self.validation_warnings
        )
        
        self._save_validation_report(report)
        return report
    
    def _validate_file(self, file_path: Path) -> bool:
        """Validate individual file"""
        try:
            # Read file content
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Parse frontmatter
            try:
                post = frontmatter.loads(content)
                metadata = post.metadata
                body = post.content
            except Exception as e:
                self._add_error(file_path, "frontmatter_parse_error", str(e), "high")
                return False
            
            # Validate frontmatter completeness
            self._validate_frontmatter(file_path, metadata)
            
            # Validate content depth
            self._validate_content_depth(file_path, body)
            
            # Validate links
            self._validate_links(file_path, body)
            
            # Validate against Pydantic model if type is specified
            content_type = metadata.get('type', '').lower()
            if content_type in self.type_mappings:
                self._validate_with_model(file_path, metadata, content_type)
            
            return True
            
        except Exception as e:
            self._add_error(file_path, "file_read_error", str(e), "high")
            return False
    
    def _validate_frontmatter(self, file_path: Path, metadata: Dict[str, Any]) -> None:
        """Validate frontmatter completeness and correctness"""
        required_fields = ['created', 'updated', 'status', 'world', 'type']
        
        for field in required_fields:
            if field not in metadata:
                self._add_error(file_path, "missing_frontmatter_field", 
                              f"Missing required field: {field}", "medium")
        
        # Validate status values
        if 'status' in metadata:
            try:
                ContentStatus(metadata['status'])
            except ValueError:
                self._add_error(file_path, "invalid_status_value",
                              f"Invalid status: {metadata['status']}", "medium")
        
        # Validate world values
        if 'world' in metadata:
            try:
                WorldRealm(metadata['world'])
            except ValueError:
                self._add_error(file_path, "invalid_world_value",
                              f"Invalid world: {metadata['world']}", "medium")
        
        # Validate type values
        if 'type' in metadata:
            try:
                ContentType(metadata['type'])
            except ValueError:
                self._add_error(file_path, "invalid_type_value",
                              f"Invalid type: {metadata['type']}", "medium")
        
        # Check for tags
        if 'tags' not in metadata or not metadata['tags']:
            self._add_warning(file_path, "missing_tags",
                            "No tags specified", "low")
    
    def _validate_content_depth(self, file_path: Path, content: str) -> None:
        """Validate content has sufficient depth and quality"""
        if not content or len(content.strip()) < 50:
            self._add_error(file_path, "insufficient_content",
                          "Content is too short or empty", "medium")
            return
        
        word_count = len(content.split())
        if word_count < 20:
            self._add_warning(file_path, "low_word_count",
                            f"Low word count: {word_count}", "low")
        
        # Check for placeholder text
        placeholders = ["TODO", "TBD", "PLACEHOLDER", "Lorem ipsum"]
        for placeholder in placeholders:
            if placeholder.lower() in content.lower():
                self._add_warning(file_path, "placeholder_content",
                                f"Contains placeholder: {placeholder}", "medium")
    
    def _validate_links(self, file_path: Path, content: str) -> None:
        """Validate internal links are not broken"""
        # Find wikilinks
        wikilink_pattern = re.compile(r'\[\[([^\]]+)\]\]')
        wikilinks = wikilink_pattern.findall(content)
        
        for link in wikilinks:
            # Check if target file exists
            link_file = self.vault_root / f"{link}.md"
            if not link_file.exists():
                # Also check without .md extension
                alt_link_file = self.vault_root / link
                if not alt_link_file.exists():
                    self._add_warning(file_path, "broken_link",
                                    f"Broken link: {link}", "medium")
    
    def _validate_with_model(self, file_path: Path, metadata: Dict[str, Any], content_type: str) -> None:
        """Validate content against specific Pydantic model"""
        try:
            model_class = self.type_mappings[content_type]
            
            # Prepare data for validation
            validation_data = {
                "title": file_path.stem,
                **metadata
            }
            
            # Validate with model
            model_instance = model_class(**validation_data)
            
        except Exception as e:
            self._add_error(file_path, "model_validation_error",
                          f"Pydantic validation failed: {str(e)}", "high")
    
    def _add_error(self, file_path: Path, error_type: str, message: str, severity: str) -> None:
        """Add validation error"""
        error = ContentValidationError(
            file_path=str(file_path.relative_to(self.vault_root)),
            error_type=error_type,
            error_message=message,
            severity=severity,
            suggested_fix=self._get_suggested_fix(error_type, message)
        )
        self.validation_errors.append(error)
    
    def _add_warning(self, file_path: Path, error_type: str, message: str, severity: str) -> None:
        """Add validation warning"""
        warning = ContentValidationError(
            file_path=str(file_path.relative_to(self.vault_root)),
            error_type=error_type,
            error_message=message,
            severity=severity,
            suggested_fix=self._get_suggested_fix(error_type, message)
        )
        self.validation_warnings.append(warning)
    
    def _get_suggested_fix(self, error_type: str, message: str) -> Optional[str]:
        """Get suggested fix for common errors"""
        fixes = {
            "missing_frontmatter_field": "Add the required frontmatter field with appropriate value",
            "invalid_status_value": "Use one of: draft, stub, active, complete, archived",
            "invalid_world_value": "Use one of: Aquabyssos, Aethermoor, Both, Convergence",
            "invalid_type_value": "Use one of: Character, Location, Faction, Quest, Item, Lore, Session",
            "insufficient_content": "Expand content with more details and information",
            "broken_link": "Fix the link target or create the missing content",
            "placeholder_content": "Replace placeholder text with actual content",
            "missing_tags": "Add relevant tags for better organization"
        }
        
        return fixes.get(error_type, "Review and fix the identified issue")
    
    def _save_validation_report(self, report: ValidationReport) -> None:
        """Save validation report to files"""
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        
        # Save JSON report
        json_file = self.data_dir / f"validation_report_{timestamp}.json"
        with open(json_file, 'w') as f:
            json.dump(report.model_dump(), f, indent=2, default=str)
        
        # Generate markdown report
        md_file = self.reports_dir / f"content_validation_report_{timestamp}.md"
        self._generate_validation_markdown(report, md_file)
        
        print(f"\n📊 Validation report saved:")
        print(f"   📄 {md_file}")
        print(f"   📋 {json_file}")
    
    def _generate_validation_markdown(self, report: ValidationReport, output_file: Path) -> None:
        """Generate human-readable validation report"""
        content = f"""# Content Validation Report
Generated: {report.timestamp.isoformat()}

## Summary
- **Total Files Checked**: {report.total_files_checked:,}
- **Valid Files**: {report.valid_files:,}
- **Success Rate**: {report.success_rate:.1f}%
- **Errors**: {len(report.errors):,}
- **Warnings**: {len(report.warnings):,}

## Error Distribution
"""
        
        # Group errors by type
        error_types = {}
        for error in report.errors:
            if error.error_type not in error_types:
                error_types[error.error_type] = 0
            error_types[error.error_type] += 1
        
        for error_type, count in sorted(error_types.items(), key=lambda x: x[1], reverse=True):
            content += f"- **{error_type.replace('_', ' ').title()}**: {count:,} occurrences\n"
        
        content += "\n## High Priority Errors\n"
        high_errors = [e for e in report.errors if e.severity == "high"]
        for error in high_errors[:20]:  # Show first 20
            content += f"- `{error.file_path}`: {error.error_message}\n"
        
        if len(high_errors) > 20:
            content += f"- ... and {len(high_errors) - 20} more high priority errors\n"
        
        content += "\n## Warnings Summary\n"
        warning_types = {}
        for warning in report.warnings:
            if warning.error_type not in warning_types:
                warning_types[warning.error_type] = 0
            warning_types[warning.error_type] += 1
        
        for warning_type, count in sorted(warning_types.items(), key=lambda x: x[1], reverse=True):
            content += f"- **{warning_type.replace('_', ' ').title()}**: {count:,} files\n"
        
        content += f"""
## Recommendations
1. **Fix high priority errors** - {len([e for e in report.errors if e.severity == "high"])} files need immediate attention
2. **Add missing frontmatter** - Most common error type
3. **Expand stub content** - Files with insufficient content depth
4. **Fix broken links** - {len([e for e in report.errors if e.error_type == "broken_link"])} broken links found
5. **Standardize metadata** - Ensure consistent use of status, world, and type values

## Phase 1 Validation Targets
- **Immediate**: Fix all high severity errors
- **Short-term**: Address medium severity errors
- **Long-term**: Resolve warnings for content quality improvement

## Quality Score: {report.success_rate:.1f}/100
"""
        
        with open(output_file, 'w') as f:
            f.write(content)
    
    def fix_common_issues(self, dry_run: bool = True) -> Dict[str, int]:
        """Automatically fix common validation issues"""
        fixes = {"frontmatter_added": 0, "tags_added": 0, "status_fixed": 0}
        
        print(f"🔧 {'[DRY RUN] ' if dry_run else ''}Fixing common validation issues...")
        
        for error in self.validation_errors:
            if error.error_type == "missing_frontmatter_field":
                # Would implement frontmatter fixes
                fixes["frontmatter_added"] += 1
            elif error.error_type == "missing_tags":
                # Would implement tag addition
                fixes["tags_added"] += 1
            elif error.error_type in ["invalid_status_value", "invalid_world_value", "invalid_type_value"]:
                # Would implement status fixes
                fixes["status_fixed"] += 1
        
        return fixes

def main():
    """Main validation function"""
    vault_root = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    validator = ContentValidator(vault_root)
    
    print("🔍 Content Validation System - Phase 1")
    print("=" * 45)
    
    # Validate sample of content first
    print("Running validation on sample (first 100 files)...")
    report = validator.validate_vault_content(limit=100)
    
    print(f"\n📊 Validation Results:")
    print(f"   Files Checked: {report.total_files_checked:,}")
    print(f"   Valid Files: {report.valid_files:,}")
    print(f"   Success Rate: {report.success_rate:.1f}%")
    print(f"   Errors: {len(report.errors):,}")
    print(f"   Warnings: {len(report.warnings):,}")
    
    # Show fix potential
    fixes = validator.fix_common_issues(dry_run=True)
    print(f"\n🔧 Potential Automatic Fixes:")
    for fix_type, count in fixes.items():
        print(f"   {fix_type.replace('_', ' ').title()}: {count}")

if __name__ == "__main__":
    main()