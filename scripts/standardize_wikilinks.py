#!/usr/bin/env python3
"""
Step 28: Standardize all link formatting to consistent WikiLink format
"""

import os
import re
from pathlib import Path
import logging

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
        if any(skip in root for skip in ['.git', '.obsidian', '__pycache__']):
            continue
        for file in files:
            if file.endswith('.md'):
                md_files.append(os.path.join(root, file))
    return md_files

def standardize_links_in_file(file_path):
    """Standardize all link formats to WikiLinks in a single file"""
    logger = logging.getLogger(__name__)
    changes = []
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Pattern 1: Convert markdown links [text](link) to [[link|text]] 
        # But preserve external links (http, https, ftp, etc.)
        markdown_link_pattern = r'\[([^\]]+)\]\(([^)]+)\)'
        
        def convert_markdown_link(match):
            text = match.group(1)
            link = match.group(2)
            
            # Skip external links
            if re.match(r'^https?://', link) or re.match(r'^ftp://', link) or re.match(r'^mailto:', link):
                return match.group(0)  # Return original
            
            # Skip anchor links
            if link.startswith('#'):
                return match.group(0)  # Return original
            
            # Remove .md extension from internal links
            clean_link = link.replace('.md', '')
            
            # If text and link are the same (or link without extension), use simple WikiLink
            if text == clean_link or text == link:
                return f"[[{clean_link}]]"
            else:
                return f"[[{clean_link}|{text}]]"
        
        content = re.sub(markdown_link_pattern, convert_markdown_link, content)
        
        # Pattern 2: Convert file:// links to WikiLinks where appropriate
        file_link_pattern = r'file://([^)\s]+)'
        
        def convert_file_link(match):
            file_path = match.group(1)
            # Extract filename without path and extension
            filename = Path(file_path).stem
            return f"[[{filename}]]"
        
        # Only convert file:// links that point to .md files
        content = re.sub(r'file://([^)\s]+\.md)', convert_file_link, content)
        
        # Pattern 3: Standardize existing WikiLinks - ensure no .md extensions
        wikilink_pattern = r'\[\[([^\]|]+)(\.md)?(\|[^\]]*)?\]\]'
        
        def clean_wikilink(match):
            link = match.group(1)
            extension = match.group(2)  # .md if present
            alias = match.group(3)      # |alias if present
            
            # Remove .md extension if present
            if extension == '.md':
                if alias:
                    return f"[[{link}{alias}]]"
                else:
                    return f"[[{link}]]"
            else:
                return match.group(0)  # Return as-is if no .md extension
        
        content = re.sub(wikilink_pattern, clean_wikilink, content)
        
        # Pattern 4: Fix double brackets issues like [[[link]]]
        content = re.sub(r'\[\[\[([^\]]+)\]\]\]', r'[[\1]]', content)
        
        # Pattern 5: Convert orphaned [text] followed by (link) on separate lines
        orphaned_pattern = r'\[([^\]]+)\]\s*\n\s*\(([^)]+)\)'
        content = re.sub(orphaned_pattern, lambda m: convert_markdown_link(re.match(r'\[([^\]]+)\]\(([^)]+)\)', f"[{m.group(1)}]({m.group(2)})")) if not re.match(r'^https?://', m.group(2)) else f"[{m.group(1)}]({m.group(2)})", content)
        
        # Count changes
        if content != original_content:
            # Count different types of changes
            original_md_links = len(re.findall(markdown_link_pattern, original_content))
            new_md_links = len(re.findall(markdown_link_pattern, content))
            changes.append({
                'file': file_path,
                'markdown_links_converted': original_md_links - new_md_links,
                'total_wikilinks': len(re.findall(r'\[\[[^\]]+\]\]', content))
            })
            
            # Write the updated content
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            logger.info(f"Updated links in: {file_path}")
    
    except Exception as e:
        logger.error(f"Error processing {file_path}: {e}")
    
    return changes

def validate_wikilinks(vault_root):
    """Validate that WikiLinks point to existing files"""
    logger = logging.getLogger(__name__)
    
    # Create a map of file names to paths
    file_map = {}
    for root, dirs, files in os.walk(vault_root):
        if any(skip in root for skip in ['.git', '.obsidian', '__pycache__']):
            continue
        for file in files:
            if file.endswith('.md'):
                name_without_ext = Path(file).stem
                file_map[name_without_ext] = os.path.join(root, file)
    
    broken_links = []
    
    # Check all WikiLinks
    for file_path in find_all_markdown_files(vault_root):
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Find all WikiLinks
            wikilinks = re.findall(r'\[\[([^\]|]+)(?:\|[^\]]*)?\]\]', content)
            
            for link in wikilinks:
                if link not in file_map:
                    broken_links.append({
                        'file': file_path,
                        'broken_link': link
                    })
        
        except Exception as e:
            logger.error(f"Error validating {file_path}: {e}")
    
    return broken_links

def optimize_link_text(vault_root):
    """Optimize WikiLink display text for better readability"""
    logger = logging.getLogger(__name__)
    optimizations = []
    
    for file_path in find_all_markdown_files(vault_root):
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            original_content = content
            
            # Pattern: Find WikiLinks that could benefit from better display text
            # [[Some_File_Name]] -> [[Some_File_Name|Some File Name]]
            simple_wikilink_pattern = r'\[\[([^\]|]+)\]\]'
            
            def optimize_display_text(match):
                link = match.group(1)
                
                # Skip if it's already clean or very short
                if '_' not in link or len(link) < 5:
                    return match.group(0)
                
                # Create more readable display text
                display_text = link.replace('_', ' ').replace('-', ' ')
                # Capitalize first letter of each word for titles
                display_text = ' '.join(word.capitalize() if word.islower() else word for word in display_text.split())
                
                # Only add display text if it's meaningfully different
                if display_text != link and display_text.lower() != link.lower():
                    return f"[[{link}|{display_text}]]"
                else:
                    return match.group(0)
            
            content = re.sub(simple_wikilink_pattern, optimize_display_text, content)
            
            if content != original_content:
                with open(file_path, 'w', encoding='utf-8') as f:
                    f.write(content)
                
                optimizations.append(file_path)
                logger.info(f"Optimized link text in: {file_path}")
        
        except Exception as e:
            logger.error(f"Error optimizing {file_path}: {e}")
    
    return optimizations

def main():
    logger = setup_logging()
    vault_root = get_vault_root()
    
    logger.info("Starting WikiLink standardization...")
    
    # Find all markdown files
    md_files = find_all_markdown_files(vault_root)
    logger.info(f"Found {len(md_files)} markdown files to process")
    
    # Step 1: Standardize link formats
    all_changes = []
    for file_path in md_files:
        changes = standardize_links_in_file(file_path)
        all_changes.extend(changes)
    
    # Step 2: Validate WikiLinks
    broken_links = validate_wikilinks(vault_root)
    
    # Step 3: Optimize link display text
    optimized_files = optimize_link_text(vault_root)
    
    # Generate report
    total_files_changed = len(all_changes)
    total_optimized = len(optimized_files)
    total_broken = len(broken_links)
    
    logger.info(f"WikiLink standardization complete:")
    logger.info(f"  - Files with link changes: {total_files_changed}")
    logger.info(f"  - Files with optimized display text: {total_optimized}")
    logger.info(f"  - Broken links found: {total_broken}")
    
    # Write detailed report
    report_path = vault_root / "reports" / "wikilink_standardization.md"
    report_path.parent.mkdir(exist_ok=True)
    
    with open(report_path, 'w') as f:
        f.write("# WikiLink Standardization Report\n\n")
        f.write(f"**Total files processed:** {len(md_files)}\n")
        f.write(f"**Files with link changes:** {total_files_changed}\n")
        f.write(f"**Files with optimized display text:** {total_optimized}\n")
        f.write(f"**Broken links found:** {total_broken}\n\n")
        
        f.write("## Link Conversion Summary\n\n")
        for change in all_changes:
            f.write(f"**{change['file']}**\n")
            f.write(f"- Markdown links converted: {change['markdown_links_converted']}\n")
            f.write(f"- Total WikiLinks: {change['total_wikilinks']}\n\n")
        
        if broken_links:
            f.write("## Broken Links Found\n\n")
            f.write("These links may need attention:\n\n")
            for broken in broken_links:
                f.write(f"- `{broken['broken_link']}` in `{broken['file']}`\n")
        
        f.write("\n## Optimization Summary\n\n")
        f.write("Files with optimized display text:\n\n")
        for optimized in optimized_files:
            f.write(f"- `{optimized}`\n")
    
    logger.info(f"Report saved to: {report_path}")

if __name__ == "__main__":
    main()