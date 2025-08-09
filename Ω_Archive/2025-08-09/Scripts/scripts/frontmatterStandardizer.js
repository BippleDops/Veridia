#!/usr/bin/env node
/*
  frontmatterStandardizer.js – Standardize YAML frontmatter across vault
  
  Usage:
    node scripts/frontmatterStandardizer.js [--dry-run] [--type <type>]
    
  Options:
    --dry-run: Show what would be changed without modifying files
    --type: Only process notes of specific type (e.g., npc, quest)
*/

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

const SCHEMAS = {
  session: {
    required: ['type', 'date'],
    defaults: { type: 'session' },
    normalize: fm => {
      // Ensure date is ISO format
      if (fm.date && !/^\d{4}-\d{2}-\d{2}$/.test(fm.date)) {
        const d = new Date(fm.date);
        if (!isNaN(d)) fm.date = d.toISOString().split('T')[0];
      }
      return fm;
    }
  },
  npc: {
    required: ['type', 'name'],
    defaults: { type: 'npc', status: 'alive' },
    normalize: fm => fm
  },
  pc: {
    required: ['type', 'name'],
    defaults: { type: 'pc', status: 'active' },
    normalize: fm => fm
  },
  monster: {
    required: ['type', 'cr'],
    defaults: { type: 'monster' },
    normalize: fm => {
      // Ensure CR is a number
      if (fm.cr && typeof fm.cr === 'string') {
        fm.cr = parseFloat(fm.cr) || 0;
      }
      return fm;
    }
  },
  location: {
    required: ['type', 'category'],
    defaults: { type: 'location' },
    normalize: fm => fm
  },
  quest: {
    required: ['type', 'status'],
    defaults: { type: 'quest', status: 'active', priority: 'medium' },
    normalize: fm => fm
  },
  item: {
    required: ['type'],
    defaults: { type: 'item', attunement: false },
    normalize: fm => fm
  },
  organization: {
    required: ['type'],
    defaults: { type: 'organization', scope: 'regional' },
    normalize: fm => fm
  }
};

function extractFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return { fm: null, body: content };
  
  try {
    const fm = yaml.load(match[1]) || {};
    const body = content.slice(match[0].length);
    return { fm, body };
  } catch (e) {
    return { fm: null, body: content };
  }
}

function inferType(filePath, fm) {
  const pathLower = filePath.toLowerCase();
  
  // Path-based inference
  if (pathLower.includes('session') || pathLower.includes('journal')) return 'session';
  if (pathLower.includes('npc') || pathLower.includes('people')) return 'npc';
  if (pathLower.includes('party') && pathLower.includes('.md')) return 'pc';
  if (pathLower.includes('monster') || pathLower.includes('bestiary')) return 'monster';
  if (pathLower.includes('location') || pathLower.includes('places') || pathLower.includes('hubs')) return 'location';
  if (pathLower.includes('quest')) return 'quest';
  if (pathLower.includes('item')) return 'item';
  if (pathLower.includes('organization') || pathLower.includes('faction')) return 'organization';
  
  // Content-based inference from existing fields
  if (fm.cr !== undefined) return 'monster';
  if (fm.alignment && fm.race) return 'npc';
  if (fm.rarity !== undefined) return 'item';
  
  return null;
}

function standardizeFrontmatter(fm, type) {
  const schema = SCHEMAS[type];
  if (!schema) return fm;
  
  // Apply defaults
  const standardized = { ...schema.defaults, ...fm };
  
  // Normalize fields
  const normalized = schema.normalize(standardized);
  
  // Ensure kebab-case for keys
  const final = {};
  for (const [key, value] of Object.entries(normalized)) {
    const kebab = key.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
    final[kebab] = value;
  }
  
  return final;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  const typeFilter = args.includes('--type') ? args[args.indexOf('--type') + 1] : null;
  
  const root = process.cwd();
  const allFiles = walk(root);
  const markdownFiles = allFiles.filter(f => f.toLowerCase().endsWith('.md'));
  
  let processed = 0;
  let updatedCount = 0;
  const changes = [];
  
  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, 'utf8');
    const { fm, body } = extractFrontmatter(content);
    
    if (!fm) continue;
    
    // Determine type
    let type = fm.type || inferType(file, fm);
    if (!type) continue;
    if (typeFilter && type !== typeFilter) continue;
    
    processed++;
    
    // Standardize
    const standardized = standardizeFrontmatter(fm, type);
    
    // Check if changed
    const original = yaml.dump(fm, { lineWidth: -1 });
    const updated = yaml.dump(standardized, { lineWidth: -1 });
    
    if (original !== updated) {
      changes.push({
        file: path.relative(root, file),
        type,
        changes: Object.keys(standardized).filter(k => !fm[k] || fm[k] !== standardized[k])
      });
      
      if (!dryRun) {
        const newContent = `---\n${updated}---${body}`;
        fs.writeFileSync(file, newContent);
      }
      updatedCount++;
    }
  }
  
  console.log(`Processed ${processed} files, updated ${updatedCount}`);
  
  if (changes.length > 0) {
    const report = { summary: { processed, updated: updatedCount }, changes: changes.slice(0, 20) };
    fs.writeFileSync('frontmatter-updates.json', JSON.stringify(report, null, 2));
    console.log('Details saved to frontmatter-updates.json');
  }
  
  if (dryRun) {
    console.log('(Dry run - no files modified)');
  }
}

function walk(dir, ignoreDirs = new Set(['.git', '.obsidian', 'node_modules'])) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (const entry of entries) {
    if (ignoreDirs.has(entry.name)) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files = files.concat(walk(full, ignoreDirs));
    else files.push(full);
  }
  return files;
}

if (require.main === module) {
  main();
} 