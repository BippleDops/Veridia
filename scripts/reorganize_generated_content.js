#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

class ReorganizeGeneratedContent {
  constructor() {
    this.movedCount = 0;
    this.errorCount = 0;
    this.processedDirs = new Set();
  }

  async reorganize() {
    console.log('🔄 Reorganizing generated content...\n');
    console.log('This will:');
    console.log('1. Move files from "Generated" subdirectories to parent directories');
    console.log('2. Add "generated" tag to frontmatter');
    console.log('3. Remove empty "Generated" directories\n');
    
    // Find all Generated directories
    const generatedDirs = await this.findGeneratedDirectories();
    console.log(`Found ${generatedDirs.length} Generated directories to process\n`);
    
    // Process each directory
    for (const dir of generatedDirs) {
      await this.processDirectory(dir);
    }
    
    // Clean up empty directories
    console.log('\n🧹 Cleaning up empty directories...');
    await this.cleanupEmptyDirectories(generatedDirs);
    
    console.log('\n✅ Reorganization complete!');
    console.log(`📊 Files moved and tagged: ${this.movedCount}`);
    console.log(`❌ Errors: ${this.errorCount}`);
  }

  async findGeneratedDirectories() {
    const dirs = [];
    
    async function walk(dir) {
      const entries = await fs.readdir(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const fullPath = path.join(dir, entry.name);
          
          // Skip .git and other hidden directories
          if (entry.name.startsWith('.')) continue;
          
          if (entry.name === 'Generated' || entry.name === 'Custom') {
            dirs.push(fullPath);
          } else {
            await walk(fullPath);
          }
        }
      }
    }
    
    await walk(process.cwd());
    return dirs;
  }

  async processDirectory(dir) {
    console.log(`\n📁 Processing: ${dir}`);
    const parentDir = path.dirname(dir);
    
    try {
      const files = await fs.readdir(dir);
      const mdFiles = files.filter(f => f.endsWith('.md'));
      
      console.log(`  Found ${mdFiles.length} markdown files`);
      
      for (const file of mdFiles) {
        await this.processFile(dir, file, parentDir);
      }
      
      this.processedDirs.add(dir);
      
    } catch (error) {
      console.error(`  ❌ Error processing directory: ${error.message}`);
      this.errorCount++;
    }
  }

  async processFile(sourceDir, filename, targetDir) {
    const sourcePath = path.join(sourceDir, filename);
    const targetPath = path.join(targetDir, filename);
    
    try {
      // Read the file content
      let content = await fs.readFile(sourcePath, 'utf-8');
      
      // Add or update frontmatter with generated tag
      content = this.addGeneratedTag(content, filename);
      
      // Check if target file already exists
      let finalPath = targetPath;
      if (await this.fileExists(targetPath)) {
        // Add a suffix to avoid overwriting
        const base = path.basename(filename, '.md');
        const newName = `${base}_generated.md`;
        finalPath = path.join(targetDir, newName);
        console.log(`  ⚠️  File exists, renaming to: ${newName}`);
      }
      
      // Write to target location
      await fs.writeFile(finalPath, content);
      
      // Delete from source location
      await fs.unlink(sourcePath);
      
      console.log(`  ✓ ${filename}`);
      this.movedCount++;
      
    } catch (error) {
      console.error(`  ❌ Error processing ${filename}: ${error.message}`);
      this.errorCount++;
    }
  }

  addGeneratedTag(content, filename) {
    const lines = content.split('\n');
    
    // Check if frontmatter exists
    if (lines[0] === '---') {
      // Find the end of frontmatter
      let endIndex = -1;
      for (let i = 1; i < lines.length; i++) {
        if (lines[i] === '---') {
          endIndex = i;
          break;
        }
      }
      
      if (endIndex > 0) {
        // Add tags before the closing ---
        const tagLine = 'tags: [generated]';
        let tagAdded = false;
        
        // Check if tags already exist
        for (let i = 1; i < endIndex; i++) {
          if (lines[i].startsWith('tags:')) {
            // Append to existing tags
            if (lines[i].includes('[')) {
              // Array format
              lines[i] = lines[i].replace(']', ', generated]');
            } else {
              // Single tag format
              lines[i] = 'tags: [' + lines[i].substring(6).trim() + ', generated]';
            }
            tagAdded = true;
            break;
          }
        }
        
        if (!tagAdded) {
          // Insert tags before closing ---
          lines.splice(endIndex, 0, tagLine);
        }
        
        return lines.join('\n');
      }
    }
    
    // No frontmatter exists, add it
    const frontmatter = [
      '---',
      'tags: [generated]',
      `id: ${this.extractId(content) || filename.replace('.md', '')}`,
      `created: ${new Date().toISOString()}`,
      'generator: mega_generator_10k',
      '---',
      ''
    ];
    
    return frontmatter.join('\n') + content;
  }

  extractId(content) {
    // Try to extract ID from content
    const idMatch = content.match(/\*ID:\s*([A-Z]+\d+)\*/);
    if (idMatch) return idMatch[1];
    
    const idMatch2 = content.match(/\*\*ID\*\*:\s*([A-Z]+\d+)/);
    if (idMatch2) return idMatch2[1];
    
    return null;
  }

  async fileExists(filepath) {
    try {
      await fs.access(filepath);
      return true;
    } catch {
      return false;
    }
  }

  async cleanupEmptyDirectories(dirs) {
    // Sort directories by depth (deepest first) to avoid issues
    const sortedDirs = dirs.sort((a, b) => b.split(path.sep).length - a.split(path.sep).length);
    
    for (const dir of sortedDirs) {
      try {
        const files = await fs.readdir(dir);
        if (files.length === 0) {
          await fs.rmdir(dir);
          console.log(`  Removed empty directory: ${dir}`);
        } else {
          console.log(`  Kept non-empty directory: ${dir} (${files.length} files)`);
        }
      } catch (error) {
        // Directory might already be removed or have issues
        if (error.code !== 'ENOENT') {
          console.error(`  Could not remove ${dir}: ${error.message}`);
        }
      }
    }
  }
}

// Execute
async function main() {
  const reorganizer = new ReorganizeGeneratedContent();
  
  try {
    await reorganizer.reorganize();
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
