#!/usr/bin/env node
/*
  optimizeVault.js – One-stop vault optimization
  
  Runs all audit and optimization scripts in sequence, providing a summary report.
  
  Usage:
    node scripts/optimizeVault.js [--fix] [--aggressive]
    
  Options:
    --fix: Apply safe automatic fixes
    --aggressive: Apply all fixes including merging duplicates
*/

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

function runCommand(cmd, description) {
  console.log(`\n📋 ${description}...`);
  try {
    const output = execSync(cmd, { encoding: 'utf8', stdio: 'pipe' });
    console.log('✅ Complete');
    return { success: true, output };
  } catch (err) {
    console.log('❌ Failed:', err.message);
    return { success: false, error: err.message };
  }
}

function loadJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function main() {
  const args = process.argv.slice(2);
  const shouldFix = args.includes('--fix') || args.includes('--aggressive');
  const aggressive = args.includes('--aggressive');
  
  console.log('🚀 Starting Vault Optimization...\n');
  
  const results = {};
  
  // 1. Link Audit
  runCommand('node scripts/vaultAudit.js', 'Auditing links and duplicates');
  const linkAudit = loadJSON('vaultAudit-report.json');
  if (linkAudit) {
    results.links = linkAudit.summary;
    console.log(`   Found: ${linkAudit.summary.totalWikiLinksBroken} broken wiki links`);
    console.log(`   Found: ${linkAudit.summary.totalMarkdownLinksBroken} broken markdown links`);
  }
  
  // 2. Asset Audit
  runCommand('node scripts/assetsAudit.js', 'Auditing assets and images');
  const assetAudit = loadJSON('assetsAudit-report.json');
  if (assetAudit) {
    results.assets = {
      missing: assetAudit.missingAssets.length,
      large: assetAudit.largeAssets.length
    };
    console.log(`   Found: ${results.assets.missing} missing assets`);
  }
  
  // 3. Duplicate Detection
  runCommand('node scripts/deduplicateNotes.js' + (aggressive ? ' --merge' : ''), 'Finding duplicate notes');
  const dupReport = loadJSON('duplicates-report.json');
  if (dupReport) {
    results.duplicates = dupReport.summary;
    console.log(`   Found: ${dupReport.summary.exactDuplicateGroups} exact duplicate groups`);
  }
  
  // 4. Frontmatter Standardization
  const fmCmd = shouldFix 
    ? 'node scripts/frontmatterStandardizer.js' 
    : 'node scripts/frontmatterStandardizer.js --dry-run';
  runCommand(fmCmd, 'Standardizing frontmatter');
  const fmReport = loadJSON('frontmatter-updates.json');
  if (fmReport) {
    results.frontmatter = fmReport.summary;
    console.log(`   Would update: ${fmReport.summary.updated} files`);
  }
  
  // 5. Apply fixes if requested
  if (shouldFix) {
    // Generate link mapping if not exists
    if (!fs.existsSync('link-mapping.json')) {
      runCommand('node scripts/fixBrokenLinks.js --generate-map > link-mapping.json', 'Generating link fixes');
    }
    
    // Apply link fixes
    if (fs.existsSync('link-mapping.json')) {
      runCommand('node scripts/fixBrokenLinks.js --apply --map link-mapping.json', 'Applying link fixes');
    }
    
    // Apply duplicate merges if aggressive
    if (aggressive && fs.existsSync('merge-plan.json')) {
      const mergePlan = loadJSON('merge-plan.json');
      if (mergePlan) {
        console.log('\n🔀 Merging duplicates...');
        for (const merge of mergePlan) {
          console.log(`   Removing: ${merge.remove.join(', ')}`);
          for (const file of merge.remove) {
            try {
              fs.unlinkSync(file);
            } catch {}
          }
        }
      }
    }
  }
  
  // Final summary
  console.log('\n📊 Optimization Summary:');
  console.log('─'.repeat(40));
  
  if (results.links) {
    console.log(`Total notes: ${results.links.totalMarkdownFiles}`);
    console.log(`Broken wiki links: ${results.links.totalWikiLinksBroken}`);
    console.log(`Broken markdown links: ${results.links.totalMarkdownLinksBroken}`);
  }
  
  if (results.assets) {
    console.log(`Missing assets: ${results.assets.missing}`);
    console.log(`Large assets (>1MB): ${results.assets.large}`);
  }
  
  if (results.duplicates) {
    console.log(`Duplicate groups: ${results.duplicates.exactDuplicateGroups}`);
    console.log(`Near-duplicate groups: ${results.duplicates.nearDuplicateGroups}`);
  }
  
  if (results.frontmatter) {
    console.log(`Notes needing frontmatter updates: ${results.frontmatter.updated}`);
  }
  
  console.log('\n✨ Optimization complete!');
  
  if (!shouldFix) {
    console.log('\nRun with --fix to apply safe automatic fixes');
    console.log('Run with --aggressive to also merge duplicates');
  }
  
  // Save summary
  fs.writeFileSync('optimization-summary.json', JSON.stringify(results, null, 2));
}

if (require.main === module) {
  main();
} 