#!/usr/bin/env python3
"""
Step 29: Enforce consistent header hierarchy across all content
"""

import os
import re
from pathlib import Path
import logging
from collections import defaultdict

def setup_logging():
    logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
    return logging.getLogger(__name__)

def get_vault_root():
    """Get the vault root directory"""
    script_dir = Path(__file__).parent
    return script_dir.parent

def find_all_markdown_files(vault_root):
    """Find all markdown files in the vault"""
    md_files = []
    for root, dirs, files in os.walk(vault_root):
        # Skip system directories
        if any(skip in root for skip in ['.git', '.obsidian', '__pycache__', 'scripts']):
            continue
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    return md_files

def analyze_header_structure(file_path):
    """Analyze the header structure of a file"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        headers = []
        lines = content.split('\n')
        
        for i, line in enumerate(lines):
            # Match headers (# ## ### etc.)
            header_match = re.match(r'^(#{1,6})\s+(.+)$', line.strip())
            if header_match:
                level = len(header_match.group(1))
                text = header_match.group(2).strip()
                headers.append({
                    'line': i + 1,
                    'level': level,
                    'text': text,
                    'original': line
                })
        
        return headers
    
    except Exception as e:
        logging.getLogger(__name__).error(f"Error analyzing {file_path}: {e}")
        return []

def determine_content_type(file_path):
    """Determine content type based on file location and content"""
    path_str = str(file_path).lower()
    
    if '/people/' in path_str:
        return 'npc'
    elif '/places/' in path_str:
        return 'location'
    elif '/groups/' in path_str or '/factions/' in path_str:
        return 'faction'
    elif '/items/' in path_str:
        return 'item'
    elif '/lore/' in path_str:
        return 'lore'
    elif '/mechanics/' in path_str:
        return 'mechanics'
    elif '/adventures/' in path_str or '/campaigns/' in path_str:
        return 'adventure'
    elif '/templates/' in path_str:
        return 'template'
    elif 'session' in path_str and 'journal' in path_str:
        return 'session'
    else:
        return 'general'

def get_standard_header_structure(content_type):
    """Get the standard header structure for each content type"""
    structures = {
        'npc': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'Character Name'},
            {'level': 2, 'pattern': r'(Overview|Description)', 'description': 'Character Overview'},
            {'level': 2, 'pattern': r'(Appearance|Physical Description)', 'description': 'Physical Description'},
            {'level': 2, 'pattern': r'(Personality|Character)', 'description': 'Personality'},
            {'level': 2, 'pattern': r'(Background|History)', 'description': 'Background'},
            {'level': 2, 'pattern': r'(Stats|Game Mechanics)', 'description': 'Game Stats'},
            {'level': 2, 'pattern': r'(Connections|Relationships)', 'description': 'Relationships'},
        ],
        
        'location': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'Location Name'},
            {'level': 2, 'pattern': r'Overview', 'description': 'Overview'},
            {'level': 3, 'pattern': r'(Sensory|Atmosphere)', 'description': 'Sensory Description'},
            {'level': 2, 'pattern': r'(Geography|Layout)', 'description': 'Geography'},
            {'level': 2, 'pattern': r'(Districts|Areas|Locations)', 'description': 'Notable Areas'},
            {'level': 2, 'pattern': r'(Government|Politics)', 'description': 'Government'},
            {'level': 2, 'pattern': r'(Economy|Trade)', 'description': 'Economy'},
            {'level': 2, 'pattern': r'(Culture|Daily Life)', 'description': 'Culture'},
            {'level': 2, 'pattern': r'(Adventure|Quest)', 'description': 'Adventure Hooks'},
            {'level': 2, 'pattern': r'(Connections|Related)', 'description': 'Connections'},
        ],
        
        'faction': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'Faction Name'},
            {'level': 2, 'pattern': r'Overview', 'description': 'Overview'},
            {'level': 2, 'pattern': r'(History|Background)', 'description': 'History'},
            {'level': 2, 'pattern': r'(Goals|Objectives)', 'description': 'Goals'},
            {'level': 2, 'pattern': r'(Structure|Organization)', 'description': 'Organization'},
            {'level': 2, 'pattern': r'(Leadership|Leaders)', 'description': 'Key Members'},
            {'level': 2, 'pattern': r'(Resources|Assets)', 'description': 'Resources'},
            {'level': 2, 'pattern': r'(Relations|Allies)', 'description': 'Relationships'},
            {'level': 2, 'pattern': r'(Connections|Related)', 'description': 'Connections'},
        ],
        
        'item': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'Item Name'},
            {'level': 2, 'pattern': r'(Overview|Description)', 'description': 'Description'},
            {'level': 2, 'pattern': r'(Properties|Mechanics)', 'description': 'Game Properties'},
            {'level': 2, 'pattern': r'(History|Lore)', 'description': 'History/Lore'},
            {'level': 2, 'pattern': r'(Connections|Related)', 'description': 'Connections'},
        ],
        
        'mechanics': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'System Name'},
            {'level': 2, 'pattern': r'Overview', 'description': 'Overview'},
            {'level': 2, 'pattern': r'(Rules|Mechanics)', 'description': 'Core Rules'},
            {'level': 2, 'pattern': r'(Examples|Usage)', 'description': 'Examples'},
            {'level': 2, 'pattern': r'(Variants|Optional)', 'description': 'Variants'},
        ],
        
        'session': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'Session Title'},
            {'level': 2, 'pattern': r'(Summary|Overview)', 'description': 'Session Summary'},
            {'level': 2, 'pattern': r'(Events|What Happened)', 'description': 'Key Events'},
            {'level': 2, 'pattern': r'(Characters|NPCs)', 'description': 'Important NPCs'},
            {'level': 2, 'pattern': r'(Loot|Treasure)', 'description': 'Rewards'},
            {'level': 2, 'pattern': r'(Next|Follow)', 'description': 'Next Session'},
        ],
        
        'general': [
            {'level': 1, 'pattern': r'^.+$', 'description': 'Title'},
            {'level': 2, 'pattern': r'.+', 'description': 'Major Sections'},
            {'level': 3, 'pattern': r'.+', 'description': 'Subsections'},
        ]
    }
    
    return structures.get(content_type, structures['general'])

def standardize_header_hierarchy(file_path):
    """Standardize the header hierarchy in a single file"""
    logger = logging.getLogger(__name__)
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        lines = content.split('\n')
        
        # Skip files that are mostly frontmatter or templates
        if content.count('---') >= 2 and content.find('---') < 100:
            # This looks like it has frontmatter
            frontmatter_end = content.find('---', content.find('---') + 1)
            if frontmatter_end != -1:
                actual_content = content[frontmatter_end + 3:]
                if len(actual_content.strip()) < 200:  # Very short content
                    return []
        
        changes = []
        content_type = determine_content_type(file_path)
        
        # Fix common header hierarchy issues
        fixed_lines = []
        for i, line in enumerate(lines):
            original_line = line
            
            # Fix headers without spaces after #
            if re.match(r'^#{1,6}[^\s#]', line):
                hash_count = len(re.match(r'^#+', line).group())
                rest = line[hash_count:]
                line = '#' * hash_count + ' ' + rest
                changes.append(f"Line {i+1}: Added space after header hashes")
            
            # Fix multiple spaces after headers
            header_match = re.match(r'^(#{1,6})\s{2,}(.+)$', line)
            if header_match:
                level = header_match.group(1)
                text = header_match.group(2)
                line = f"{level} {text}"
                changes.append(f"Line {i+1}: Fixed multiple spaces after header")
            
            # Fix inconsistent header formatting (remove trailing #)
            trailing_hash_match = re.match(r'^(#{1,6})\s+(.+?)\s*#+\s*$', line)
            if trailing_hash_match:
                level = trailing_hash_match.group(1)
                text = trailing_hash_match.group(2)
                line = f"{level} {text}"
                changes.append(f"Line {i+1}: Removed trailing hashes from header")
            
            # Ensure H1 headers are used for main titles only
            if line.startswith('# ') and i > 0:
                # Check if this is really a title or should be H2
                prev_lines = [l for l in lines[:i] if l.strip() and not l.startswith('---')]
                if len(prev_lines) > 5:  # If there's substantial content before
                    # Check if this looks like a title
                    title_text = line[2:].strip()
                    if not (title_text.isupper() or len(title_text) > 50):
                        # This might should be H2
                        if not any(l.startswith('# ') for l in lines[:i]):
                            # No previous H1, this is probably the main title
                            pass
                        else:
                            # There's already an H1, make this H2
                            line = '## ' + title_text
                            changes.append(f"Line {i+1}: Converted duplicate H1 to H2")
            
            fixed_lines.append(line)
        
        # Check for proper hierarchy (no jumping levels)
        header_levels = []
        for i, line in enumerate(fixed_lines):
            header_match = re.match(r'^(#{1,6})\s+(.+)$', line.strip())
            if header_match:
                level = len(header_match.group(1))
                header_levels.append((i, level, line))
        
        # Fix hierarchy gaps (e.g., jumping from H1 to H3)
        for i in range(1, len(header_levels)):
            prev_level = header_levels[i-1][1]
            curr_level = header_levels[i][1]
            line_num = header_levels[i][0]
            
            # If jumping more than one level down
            if curr_level > prev_level + 1:
                # Adjust to proper level
                new_level = prev_level + 1
                old_line = fixed_lines[line_num]
                text = old_line.lstrip('#').strip()
                new_line = '#' * new_level + ' ' + text
                fixed_lines[line_num] = new_line
                changes.append(f"Line {line_num+1}: Fixed header level gap ({curr_level} -> {new_level})")
        
        # Create final content
        new_content = '\n'.join(fixed_lines)
        
        if new_content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            logger.info(f"Fixed headers in: {file_path}")
        
        return changes
    
    except Exception as e:
        logger.error(f"Error processing {file_path}: {e}")
        return []

def analyze_header_patterns(vault_root):
    """Analyze header patterns across the vault"""
    logger = logging.getLogger(__name__)
    
    md_files = find_all_markdown_files(vault_root)
    patterns = defaultdict(lambda: defaultdict(int))
    issues = []
    
    for file_path in md_files:
        headers = analyze_header_structure(file_path)
        content_type = determine_content_type(file_path)
        
        if not headers:
            continue
        
        # Track patterns
        for header in headers:
            patterns[content_type][header['level']] += 1
        
        # Check for issues
        levels = [h['level'] for h in headers]
        
        # Check for missing H1
        if 1 not in levels:
            issues.append({
                'file': file_path,
                'issue': 'missing_h1',
                'description': 'No H1 header found'
            })
        
        # Check for multiple H1s
        h1_count = levels.count(1)
        if h1_count > 1:
            issues.append({
                'file': file_path,
                'issue': 'multiple_h1',
                'description': f'{h1_count} H1 headers found'
            })
        
        # Check for level jumping
        for i in range(1, len(levels)):
            if levels[i] > levels[i-1] + 1:
                issues.append({
                    'file': file_path,
                    'issue': 'level_jump',
                    'description': f'Header jumps from H{levels[i-1]} to H{levels[i]}'
                })
    
    return patterns, issues

def main():
    logger = setup_logging()
    vault_root = get_vault_root()
    
    logger.info("Starting header hierarchy standardization...")
    
    # First, analyze current patterns
    patterns, issues = analyze_header_patterns(vault_root)
    logger.info(f"Found {len(issues)} header issues across the vault")
    
    # Find all markdown files
    md_files = find_all_markdown_files(vault_root)
    logger.info(f"Processing {len(md_files)} markdown files")
    
    # Standardize headers in all files
    all_changes = []
    for file_path in md_files:
        changes = standardize_header_hierarchy(file_path)
        if changes:
            all_changes.append({
                'file': file_path,
                'changes': changes
            })
    
    # Generate report
    total_files_changed = len(all_changes)
    total_issues_found = len(issues)
    
    logger.info(f"Header standardization complete:")
    logger.info(f"  - Files changed: {total_files_changed}")
    logger.info(f"  - Issues found: {total_issues_found}")
    
    # Write detailed report
    report_path = vault_root / "reports" / "header_standardization.md"
    report_path.parent.mkdir(exist_ok=True)
    
    with open(report_path, 'w') as f:
        f.write("# Header Hierarchy Standardization Report\n\n")
        f.write(f"**Total files processed:** {len(md_files)}\n")
        f.write(f"**Files with changes:** {total_files_changed}\n")
        f.write(f"**Issues found:** {total_issues_found}\n\n")
        
        f.write("## Header Pattern Analysis\n\n")
        for content_type, level_counts in patterns.items():
            f.write(f"### {content_type.title()} Content\n")
            for level in sorted(level_counts.keys()):
                f.write(f"- H{level}: {level_counts[level]} occurrences\n")
            f.write("\n")
        
        f.write("## Issues Found\n\n")
        issue_types = defaultdict(list)
        for issue in issues:
            issue_types[issue['issue']].append(issue)
        
        for issue_type, issue_list in issue_types.items():
            f.write(f"### {issue_type.replace('_', ' ').title()}\n")
            for issue in issue_list[:10]:  # Show first 10 of each type
                f.write(f"- `{issue['file']}`: {issue['description']}\n")
            if len(issue_list) > 10:
                f.write(f"- ... and {len(issue_list) - 10} more\n")
            f.write("\n")
        
        f.write("## Changes Made\n\n")
        for change_info in all_changes[:20]:  # Show first 20 changed files
            f.write(f"### {change_info['file']}\n")
            for change in change_info['changes']:
                f.write(f"- {change}\n")
            f.write("\n")
        
        if len(all_changes) > 20:
            f.write(f"... and {len(all_changes) - 20} more files with changes\n")
    
    logger.info(f"Report saved to: {report_path}")

if __name__ == "__main__":
    main()