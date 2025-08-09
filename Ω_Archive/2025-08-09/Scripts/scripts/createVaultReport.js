#!/usr/bin/env node
/*
  createVaultReport.js – Generate comprehensive HTML report of vault status
  
  Usage:
    node scripts/createVaultReport.js
    
  Outputs: vault-report.html
*/

const fs = require('fs');
const path = require('path');

function loadJSON(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch {
    return null;
  }
}

function generateHTML(data) {
  const timestamp = new Date().toLocaleString();
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Obsidian TTRPG Vault Report</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 20px;
      background: #f5f5f5;
    }
    .header {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      margin-bottom: 30px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    }
    h1 { margin: 0; font-size: 2.5em; }
    .subtitle { opacity: 0.9; margin-top: 10px; }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 30px;
    }
    .stat-card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }
    .stat-card:hover { transform: translateY(-2px); }
    .stat-number {
      font-size: 2.5em;
      font-weight: bold;
      color: #667eea;
      margin: 10px 0;
    }
    .stat-label { color: #666; font-size: 0.9em; }
    .issue-section {
      background: white;
      padding: 25px;
      border-radius: 8px;
      margin-bottom: 20px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }
    .issue-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 15px;
    }
    .issue-count {
      background: #ff6b6b;
      color: white;
      padding: 5px 15px;
      border-radius: 20px;
      font-size: 0.9em;
    }
    .issue-list {
      max-height: 300px;
      overflow-y: auto;
      border: 1px solid #eee;
      border-radius: 4px;
      padding: 10px;
    }
    .issue-item {
      padding: 5px 0;
      border-bottom: 1px solid #f0f0f0;
      font-size: 0.9em;
    }
    .issue-item:last-child { border-bottom: none; }
    .progress-bar {
      width: 100%;
      height: 20px;
      background: #e0e0e0;
      border-radius: 10px;
      overflow: hidden;
      margin: 10px 0;
    }
    .progress-fill {
      height: 100%;
      background: linear-gradient(90deg, #4caf50, #66bb6a);
      transition: width 0.3s;
    }
    .action-buttons {
      display: flex;
      gap: 10px;
      margin-top: 30px;
    }
    .button {
      padding: 12px 24px;
      border: none;
      border-radius: 6px;
      font-size: 1em;
      cursor: pointer;
      transition: all 0.2s;
      text-decoration: none;
      display: inline-block;
    }
    .button-primary {
      background: #667eea;
      color: white;
    }
    .button-primary:hover { background: #5a67d8; }
    .button-secondary {
      background: #e0e0e0;
      color: #333;
    }
    .button-secondary:hover { background: #d0d0d0; }
    .footer {
      text-align: center;
      color: #666;
      margin-top: 40px;
      font-size: 0.9em;
    }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏰 Obsidian TTRPG Vault Report</h1>
    <div class="subtitle">Generated on ${timestamp}</div>
  </div>

  <div class="stats-grid">
    <div class="stat-card">
      <div class="stat-label">Total Notes</div>
      <div class="stat-number">${data.totalNotes || 0}</div>
      <div class="stat-label">Markdown files in vault</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Vault Health</div>
      <div class="stat-number">${data.healthScore}%</div>
      <div class="progress-bar">
        <div class="progress-fill" style="width: ${data.healthScore}%"></div>
      </div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Broken Links</div>
      <div class="stat-number">${data.totalBrokenLinks || 0}</div>
      <div class="stat-label">Wiki + Markdown links</div>
    </div>
    <div class="stat-card">
      <div class="stat-label">Missing Assets</div>
      <div class="stat-number">${data.missingAssets || 0}</div>
      <div class="stat-label">Images and media files</div>
    </div>
  </div>

  ${data.brokenWikiLinks && data.brokenWikiLinks.length > 0 ? `
  <div class="issue-section">
    <div class="issue-header">
      <h2>🔗 Broken Wiki Links</h2>
      <span class="issue-count">${data.brokenWikiLinks.length} issues</span>
    </div>
    <div class="issue-list">
      ${data.brokenWikiLinks.slice(0, 50).map(item => `
        <div class="issue-item">
          <strong>[[${item.link}]]</strong> in ${item.sources.join(', ')}
        </div>
      `).join('')}
      ${data.brokenWikiLinks.length > 50 ? '<div class="issue-item">... and more</div>' : ''}
    </div>
  </div>
  ` : ''}

  ${data.duplicates && data.duplicates.length > 0 ? `
  <div class="issue-section">
    <div class="issue-header">
      <h2>📑 Duplicate Notes</h2>
      <span class="issue-count">${data.duplicates.length} groups</span>
    </div>
    <div class="issue-list">
      ${data.duplicates.map(dup => `
        <div class="issue-item">
          <strong>Identical content:</strong> ${dup.files.join(', ')}
        </div>
      `).join('')}
    </div>
  </div>
  ` : ''}

  ${data.needsFrontmatter > 0 ? `
  <div class="issue-section">
    <div class="issue-header">
      <h2>📝 Frontmatter Updates Needed</h2>
      <span class="issue-count">${data.needsFrontmatter} notes</span>
    </div>
    <p>Notes are missing required frontmatter fields or have inconsistent formatting.</p>
  </div>
  ` : ''}

  <div class="action-buttons">
    <button class="button button-primary" onclick="runOptimization()">
      🚀 Run Optimization
    </button>
    <button class="button button-secondary" onclick="window.print()">
      📄 Print Report
    </button>
  </div>

  <div class="footer">
    <p>This report was generated by the Obsidian TTRPG Vault optimization tools.</p>
    <p>For detailed information, check the JSON reports in your vault root.</p>
  </div>

  <script>
    function runOptimization() {
      alert('Run "node scripts/optimizeVault.js --fix" in your terminal to apply fixes.');
    }
  </script>
</body>
</html>`;
}

function main() {
  console.log('📊 Generating vault report...');
  
  // Load all reports
  const linkAudit = loadJSON('vaultAudit-report.json');
  const assetAudit = loadJSON('assetsAudit-report.json');
  const dupReport = loadJSON('duplicates-report.json');
  const fmReport = loadJSON('frontmatter-updates.json');
  const optSummary = loadJSON('optimization-summary.json');
  
  // Calculate health score
  const totalNotes = linkAudit?.summary?.totalMarkdownFiles || 0;
  const brokenLinks = (linkAudit?.summary?.totalWikiLinksBroken || 0) + 
                      (linkAudit?.summary?.totalMarkdownLinksBroken || 0);
  const missingAssets = assetAudit?.missingAssets?.length || 0;
  const duplicates = dupReport?.summary?.exactDuplicateGroups || 0;
  
  const issues = brokenLinks + missingAssets + (duplicates * 10);
  const maxIssues = totalNotes * 2; // Rough estimate
  const healthScore = Math.max(0, Math.min(100, Math.round((1 - issues / maxIssues) * 100)));
  
  // Prepare data
  const reportData = {
    totalNotes,
    healthScore,
    totalBrokenLinks: brokenLinks,
    missingAssets,
    brokenWikiLinks: linkAudit?.brokenWikiLinks?.slice(0, 100),
    duplicates: dupReport?.exactDuplicates,
    needsFrontmatter: fmReport?.summary?.updated || 0
  };
  
  // Generate and save HTML
  const html = generateHTML(reportData);
  fs.writeFileSync('vault-report.html', html);
  
  console.log('✅ Report generated: vault-report.html');
  console.log('   Open in your browser to view the interactive report.');
}

if (require.main === module) {
  main();
} 