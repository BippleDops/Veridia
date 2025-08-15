#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

async function fixGeneratedTags() {
  console.log('🔧 Fixing frontmatter tags...\n');
  
  let fixedCount = 0;
  let errorCount = 0;
  
  async function walk(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        await walk(path.join(dir, entry.name));
      } else if (entry.name.endsWith('.md')) {
        const filepath = path.join(dir, entry.name);
        
        try {
          let content = await fs.readFile(filepath, 'utf-8');
          const originalContent = content;
          
          // Fix malformed tags
          content = content.replace(/^tags: \[, generated\]\n\s*- .+\n\s*- .+\n\s*- generated/m, 
            'tags: [generated]');
          
          // Fix duplicate generated tags
          content = content.replace(/tags: \[(.+), generated, generated\]/g, 'tags: [$1, generated]');
          content = content.replace(/tags: \[generated, generated\]/g, 'tags: [generated]');
          
          // Fix array format issues
          content = content.replace(/tags: \[\s*,\s*generated\]/g, 'tags: [generated]');
          
          if (content !== originalContent) {
            await fs.writeFile(filepath, content);
            console.log(`  ✓ Fixed: ${entry.name}`);
            fixedCount++;
          }
          
        } catch (error) {
          console.error(`  ❌ Error processing ${entry.name}: ${error.message}`);
          errorCount++;
        }
      }
    }
  }
  
  await walk(process.cwd());
  
  console.log(`\n✅ Complete!`);
  console.log(`📊 Fixed: ${fixedCount} files`);
  console.log(`❌ Errors: ${errorCount}`);
}

// Run
fixGeneratedTags().catch(console.error);
