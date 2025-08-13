#!/usr/bin/env python3
"""
Vault Configuration Management
Centralized configuration and settings for the Cordelia TTRPG Vault.
"""

from pathlib import Path
from typing import Dict, List, Any, Optional
import json
import yaml
from datetime import datetime
from models import ContentStatus, WorldRealm, ContentType

class VaultConfig:
    """Central configuration management for the vault"""
    
    def __init__(self, vault_root: str):
        self.vault_root = Path(vault_root)
        self.config_file = self.vault_root / "data" / "vault_config.json"
        self.obsidian_config_dir = self.vault_root / ".obsidian"
        
        # Load or create configuration
        self.config = self._load_config()
    
    def _load_config(self) -> Dict[str, Any]:
        """Load vault configuration or create default"""
        if self.config_file.exists():
            with open(self.config_file) as f:
                return json.load(f)
        
        return self._create_default_config()
    
    def _create_default_config(self) -> Dict[str, Any]:
        """Create default vault configuration"""
        config = {
            "vault_info": {
                "name": "Cordelia TTRPG Vault",
                "version": "1.0.0",
                "created": datetime.now().isoformat(),
                "description": "Comprehensive TTRPG vault for the dual realms of Aquabyssos and Aethermoor"
            },
            "world_settings": {
                "primary_realms": ["Aquabyssos", "Aethermoor"],
                "convergence_zones": ["The Lighthouse of Storms", "Convergence Point"],
                "time_period": "The Age of Convergence",
                "campaign_focus": "Shadow Conspiracy and Crystal Plague"
            },
            "content_standards": {
                "required_frontmatter": ["created", "updated", "status", "world", "type"],
                "tag_hierarchies": [
                    "status/{draft|stub|active|complete|archived}",
                    "world/{aquabyssos|aethermoor|both|convergence}",
                    "type/{character|location|faction|quest|item|lore|session}",
                    "campaign/{main-plot|side-quest|background|setup}",
                    "corruption/{none|minor|moderate|severe|critical}"
                ],
                "naming_conventions": {
                    "characters": "FirstName LastName",
                    "locations": "Location Name",
                    "factions": "The Organization Name",
                    "sessions": "Session {Number} - {Title}"
                }
            },
            "directory_structure": {
                "01_Adventures": "Campaign adventures and session content",
                "02_Worldbuilding": "Core world content (Groups, Items, Lore)",
                "03_Mechanics": "Game mechanics and systems",
                "04_Resources": "Assets, handouts, and reference materials",
                "05_Templates": "Content templates and generators",
                "06_GM_Resources": "Game Master tools and references",
                "07_Player_Resources": "Player-facing content and guides",
                "08_Archive": "Archived and deprecated content",
                "09_Performance": "Obsidian Bases databases and performance tools",
                "data": "Structured data, models, and analysis results",
                "reports": "Analysis reports and vault metrics",
                "scripts": "Automation and maintenance tools",
                "backups": "Backup content and recovery data"
            },
            "obsidian_settings": {
                "plugins": {
                    "essential": ["Templater", "Dataview", "Bases", "Canvas"],
                    "recommended": ["Advanced Tables", "Tag Wrangler", "Link Map"],
                    "experimental": ["Various Complements", "Smart Random Note"]
                },
                "appearance": {
                    "theme": "Minimal",
                    "accent_color": "blue",
                    "show_line_numbers": True,
                    "readable_line_length": False
                },
                "features": {
                    "vim_mode": False,
                    "spell_check": True,
                    "strict_line_breaks": False,
                    "use_markdown_links": False,
                    "new_link_format": "shortest"
                }
            },
            "automation": {
                "daily_tasks": [
                    "Link integrity check",
                    "Metadata validation",
                    "Backup creation"
                ],
                "weekly_tasks": [
                    "Content analysis",
                    "Orphan detection",
                    "Tag standardization"
                ],
                "monthly_tasks": [
                    "Full vault analysis",
                    "Performance optimization",
                    "Archive cleanup"
                ]
            },
            "phase1_targets": {
                "content_recovery": 4701,
                "broken_links_fixed": 25839,
                "frontmatter_added": 17311,
                "stub_completion": 59,
                "pydantic_validation": True,
                "obsidian_optimization": True
            }
        }
        
        self._save_config(config)
        return config
    
    def _save_config(self, config: Dict[str, Any]) -> None:
        """Save configuration to file"""
        self.config_file.parent.mkdir(parents=True, exist_ok=True)
        with open(self.config_file, 'w') as f:
            json.dump(config, f, indent=2)
    
    def update_config(self, section: str, updates: Dict[str, Any]) -> None:
        """Update configuration section"""
        if section in self.config:
            self.config[section].update(updates)
        else:
            self.config[section] = updates
        
        self._save_config(self.config)
    
    def get_setting(self, section: str, key: str, default: Any = None) -> Any:
        """Get specific configuration setting"""
        return self.config.get(section, {}).get(key, default)
    
    def setup_obsidian_config(self) -> None:
        """Set up Obsidian configuration files"""
        print("🔧 Setting up Obsidian configuration...")
        
        # Create .obsidian directory
        self.obsidian_config_dir.mkdir(exist_ok=True)
        
        # Core settings
        self._setup_app_settings()
        self._setup_editor_settings()
        self._setup_graph_settings()
        self._setup_plugin_settings()
        
        print("✅ Obsidian configuration complete")
    
    def _setup_app_settings(self) -> None:
        """Setup main app.json settings"""
        app_settings = {
            "legacyEditor": False,
            "livePreview": True,
            "showLineNumber": True,
            "strictLineBreaks": False,
            "useMarkdownLinks": False,
            "newLinkFormat": "shortest",
            "attachmentFolderPath": "04_Resources/Assets",
            "promptDelete": True,
            "alwaysUpdateLinks": True,
            "newFileLocation": "current",
            "showFrontmatter": True,
            "foldHeading": True,
            "foldIndent": True,
            "showIndentGuide": True,
            "readableLineLength": False,
            "theme": "moonstone"
        }
        
        app_file = self.obsidian_config_dir / "app.json"
        with open(app_file, 'w') as f:
            json.dump(app_settings, f, indent=2)
    
    def _setup_editor_settings(self) -> None:
        """Setup editor.json settings"""
        editor_settings = {
            "spellcheck": True,
            "spellcheckLanguages": ["en-US"],
            "rightToLeft": False,
            "vimMode": False,
            "smartIndentList": True,
            "foldHeading": True,
            "foldIndent": True,
            "showLineNumber": True,
            "lineWrap": True
        }
        
        editor_file = self.obsidian_config_dir / "editor.json"
        with open(editor_file, 'w') as f:
            json.dump(editor_settings, f, indent=2)
    
    def _setup_graph_settings(self) -> None:
        """Setup graph.json settings"""
        graph_settings = {
            "collapse-color-groups": True,
            "colorGroups": [
                {
                    "query": "tag:#aquabyssos",
                    "color": {"a": 1, "rgb": 5419488}
                },
                {
                    "query": "tag:#aethermoor", 
                    "color": {"a": 1, "rgb": 5395168}
                },
                {
                    "query": "tag:#both-worlds",
                    "color": {"a": 1, "rgb": 5395237}
                }
            ],
            "collapse-display": False,
            "showTags": True,
            "showAttachments": False,
            "hideUnresolved": False,
            "showOrphans": True,
            "collapse-forces": False,
            "centerStrength": 0.3,
            "repelStrength": 8,
            "linkStrength": 0.7,
            "linkDistance": 250,
            "scale": 1,
            "close": True
        }
        
        graph_file = self.obsidian_config_dir / "graph.json"
        with open(graph_file, 'w') as f:
            json.dump(graph_settings, f, indent=2)
    
    def _setup_plugin_settings(self) -> None:
        """Setup core plugin configurations"""
        # Enable community plugins
        community_plugins = self.obsidian_config_dir / "community-plugins.json"
        plugins_list = [
            "templater-obsidian",
            "dataview", 
            "bases",
            "table-editor-obsidian",
            "tag-wrangler",
            "various-complements"
        ]
        
        with open(community_plugins, 'w') as f:
            json.dump(plugins_list, f, indent=2)
        
        # Templater settings
        self._setup_templater()
        
        # Dataview settings
        self._setup_dataview()
    
    def _setup_templater(self) -> None:
        """Setup Templater plugin configuration"""
        templater_dir = self.obsidian_config_dir / "plugins" / "templater-obsidian"
        templater_dir.mkdir(parents=True, exist_ok=True)
        
        templater_settings = {
            "command_timeout": 5,
            "templates_folder": "05_Templates",
            "templates_pairs": [
                ["tp", "05_Templates"]
            ],
            "trigger_on_file_creation": True,
            "auto_jump_to_cursor": True,
            "enable_system_commands": False,
            "shell_path": "",
            "user_scripts_folder": "scripts",
            "enable_folder_templates": True,
            "folder_templates": [
                {
                    "folder": "02_Worldbuilding/Groups",
                    "template": "05_Templates/World Builder Templates/Template-Faction.md"
                },
                {
                    "folder": "02_Worldbuilding/Lore", 
                    "template": "05_Templates/World Builder Templates/Template-Lore.md"
                }
            ]
        }
        
        data_file = templater_dir / "data.json"
        with open(data_file, 'w') as f:
            json.dump(templater_settings, f, indent=2)
    
    def _setup_dataview(self) -> None:
        """Setup Dataview plugin configuration"""
        dataview_dir = self.obsidian_config_dir / "plugins" / "dataview"
        dataview_dir.mkdir(parents=True, exist_ok=True)
        
        dataview_settings = {
            "enableDataviewJs": True,
            "enableInlineDataview": True,
            "enableInlineDataviewJs": True,
            "prettyRenderInlineFields": True,
            "dataviewJSKeyword": "dataviewjs",
            "inlineJsQueryPrefix": "= ",
            "inlineQueryPrefix": "= ",
            "refreshEnabled": True,
            "refreshInterval": 2500,
            "defaultDateFormat": "yyyy-MM-dd",
            "defaultDateTimeFormat": "yyyy-MM-dd HH:mm",
            "maxRecursiveRenderDepth": 4
        }
        
        data_file = dataview_dir / "data.json"
        with open(data_file, 'w') as f:
            json.dump(dataview_settings, f, indent=2)
    
    def generate_setup_report(self) -> str:
        """Generate configuration setup report"""
        report = f"""# Vault Configuration Report
Generated: {datetime.now().isoformat()}

## Vault Information
- **Name**: {self.config['vault_info']['name']}
- **Version**: {self.config['vault_info']['version']}
- **Created**: {self.config['vault_info']['created']}

## World Settings
- **Primary Realms**: {', '.join(self.config['world_settings']['primary_realms'])}
- **Time Period**: {self.config['world_settings']['time_period']}
- **Campaign Focus**: {self.config['world_settings']['campaign_focus']}

## Phase 1 Targets
"""
        
        for target, value in self.config['phase1_targets'].items():
            status = "✅" if isinstance(value, bool) and value else "📋"
            report += f"- **{target.replace('_', ' ').title()}**: {status} {value}\n"
        
        report += f"""
## Directory Structure
"""
        
        for directory, description in self.config['directory_structure'].items():
            report += f"- **{directory}**: {description}\n"
        
        report += f"""
## Obsidian Configuration
- **Essential Plugins**: {', '.join(self.config['obsidian_settings']['plugins']['essential'])}
- **Theme**: {self.config['obsidian_settings']['appearance']['theme']}
- **Line Numbers**: {self.config['obsidian_settings']['appearance']['show_line_numbers']}

## Automation Schedule
- **Daily**: {', '.join(self.config['automation']['daily_tasks'])}
- **Weekly**: {', '.join(self.config['automation']['weekly_tasks'])}
- **Monthly**: {', '.join(self.config['automation']['monthly_tasks'])}
"""
        
        return report

def main():
    """Main configuration setup"""
    vault_root = "/Users/jongosussmango/Library/Mobile Documents/iCloud~md~obsidian/Documents/ObsidianTTRPGVault Experimental"
    
    config_manager = VaultConfig(vault_root)
    
    print("🔧 Vault Configuration Manager - Phase 1")
    print("=" * 45)
    
    # Setup Obsidian configuration
    config_manager.setup_obsidian_config()
    
    # Generate and save setup report
    report = config_manager.generate_setup_report()
    report_file = Path(vault_root) / "reports" / f"vault_configuration_report_{datetime.now().strftime('%Y%m%d_%H%M%S')}.md"
    
    with open(report_file, 'w') as f:
        f.write(report)
    
    print(f"📄 Configuration report: {report_file}")
    print("✅ Vault configuration complete!")

if __name__ == "__main__":
    main()