#!/usr/bin/env node
/*
  deduplicateNotes.js – Find and manage duplicate notes in Obsidian vault
  
  Usage:
    node scripts/deduplicateNotes.js [--merge]
    
  Without --merge: Reports duplicates and near-duplicates
  With --merge: Creates a merge plan for review
*/

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

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

function getContentHash(content) {
  // Normalize content for comparison (remove extra whitespace, lowercase)
  const normalized = content.toLowerCase().replace(/\s+/g, ' ').trim();
  return crypto.createHash('md5').update(normalized).digest('hex');
}

function getSimilarity(str1, str2) {
  // Simple character-based similarity (Jaccard index)
  const set1 = new Set(str1.toLowerCase().split(/\s+/));
  const set2 = new Set(str2.toLowerCase().split(/\s+/));
  const intersection = new Set([...set1].filter(x => set2.has(x)));
  const union = new Set([...set1, ...set2]);
  return intersection.size / union.size;
}

function main() {
  const root = process.cwd();
  const allFiles = walk(root);
  const markdownFiles = allFiles.filter(f => f.toLowerCase().endsWith('.md'));
  
  // Group by exact content hash
  const contentMap = new Map(); // hash -> [files]
  const fileContents = new Map(); // file -> content
  
  for (const file of markdownFiles) {
    const content = fs.readFileSync(file, 'utf8');
    fileContents.set(file, content);
    const hash = getContentHash(content);
    
    if (!contentMap.has(hash)) contentMap.set(hash, []);
    contentMap.get(hash).push(file);
  }
  
  // Find exact duplicates
  const exactDuplicates = [...contentMap.entries()]
    .filter(([_, files]) => files.length > 1)
    .map(([hash, files]) => ({
      hash,
      files: files.map(f => path.relative(root, f)),
      count: files.length
    }));
  
  // Find near-duplicates by basename
  const basenameGroups = new Map();
  for (const file of markdownFiles) {
    const base = path.basename(file, '.md').toLowerCase();
    if (!basenameGroups.has(base)) basenameGroups.set(base, []);
    basenameGroups.get(base).push(file);
  }
  
  const nearDuplicates = [];
  for (const [base, files] of basenameGroups.entries()) {
    if (files.length > 1) {
      // Check similarity between files with same basename
      const similarities = [];
      for (let i = 0; i < files.length; i++) {
        for (let j = i + 1; j < files.length; j++) {
          const sim = getSimilarity(
            fileContents.get(files[i]),
            fileContents.get(files[j])
          );
          if (sim > 0.8) { // 80% similarity threshold
            similarities.push({
              file1: path.relative(root, files[i]),
              file2: path.relative(root, files[j]),
              similarity: (sim * 100).toFixed(1) + '%'
            });
          }
        }
      }
      if (similarities.length > 0) {
        nearDuplicates.push({ basename: base, similarities });
      }
    }
  }
  
  const report = {
    summary: {
      totalFiles: markdownFiles.length,
      exactDuplicateGroups: exactDuplicates.length,
      filesInExactDuplicates: exactDuplicates.reduce((sum, g) => sum + g.count, 0),
      nearDuplicateGroups: nearDuplicates.length
    },
    exactDuplicates,
    nearDuplicates: nearDuplicates.slice(0, 20) // Limit output
  };
  
  fs.writeFileSync(path.join(root, 'duplicates-report.json'), JSON.stringify(report, null, 2));
  console.log('Duplicate analysis complete:');
  console.log(JSON.stringify(report.summary, null, 2));
  console.log('Full report saved to duplicates-report.json');
  
  if (process.argv.includes('--merge')) {
    // Generate merge suggestions
    const mergeplan = [];
    for (const group of exactDuplicates) {
      // Keep the shortest path as canonical
      const sorted = group.files.sort((a, b) => a.length - b.length);
      mergeplan.push({
        keep: sorted[0],
        remove: sorted.slice(1),
        reason: 'exact duplicate'
      });
    }
    fs.writeFileSync(path.join(root, 'merge-plan.json'), JSON.stringify(mergeplan, null, 2));
    console.log(`\nGenerated merge plan for ${mergeplan.length} duplicate groups.`);
    console.log('Review merge-plan.json before applying.');
  }
}

if (require.main === module) {
  main();
} 