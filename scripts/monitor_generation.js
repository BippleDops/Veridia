#!/usr/bin/env node

/**
 * GENERATION MONITOR
 * ==================
 * Monitors progress of music and SVG generation
 */

const fs = require('fs');
const path = require('path');

function checkProgress() {
  console.clear();
  console.log('🎯 GENERATION PROGRESS MONITOR');
  console.log('==============================');
  console.log(new Date().toLocaleString());
  console.log();
  
  // Check SVG progress
  const svgLog = path.join(process.cwd(), '09_Performance/svg_replacement.log');
  if (fs.existsSync(svgLog)) {
    const svgContent = fs.readFileSync(svgLog, 'utf8');
    const svgMatches = svgContent.match(/Progress: (\d+)\/(\d+) SVGs replaced/g);
    if (svgMatches && svgMatches.length > 0) {
      const lastMatch = svgMatches[svgMatches.length - 1];
      const [, current, total] = lastMatch.match(/(\d+)\/(\d+)/);
      const percent = ((parseInt(current) / parseInt(total)) * 100).toFixed(1);
      console.log(`📐 SVG Replacement: ${current}/${total} (${percent}%)`);
      
      // Estimate time remaining
      const linesProcessed = svgContent.split('\n').length;
      const avgTimePerSVG = 0.15; // seconds
      const remaining = parseInt(total) - parseInt(current);
      const eta = (remaining * avgTimePerSVG / 60).toFixed(1);
      console.log(`   ETA: ~${eta} minutes`);
    }
  } else {
    console.log('📐 SVG Replacement: Not started');
  }
  
  console.log();
  
  // Check music progress
  const musicLog = path.join(process.cwd(), '09_Performance/music_generation.log');
  if (fs.existsSync(musicLog)) {
    const musicContent = fs.readFileSync(musicLog, 'utf8');
    
    // Check for errors
    if (musicContent.includes('Error')) {
      console.log('🎵 Music Generation: ERROR');
      const errorLines = musicContent.split('\n').filter(l => l.includes('Error')).slice(-3);
      errorLines.forEach(l => console.log(`   ${l.trim()}`));
    } else {
      const musicMatches = musicContent.match(/Progress: (\d+)\/(\d+) tracks/g);
      if (musicMatches && musicMatches.length > 0) {
        const lastMatch = musicMatches[musicMatches.length - 1];
        const [, current, total] = lastMatch.match(/(\d+)\/(\d+)/);
        const percent = ((parseInt(current) / parseInt(total)) * 100).toFixed(1);
        console.log(`🎵 Music Generation: ${current}/${total} (${percent}%)`);
        
        // Estimate time
        const avgTimePerTrack = 1.5; // seconds
        const remaining = parseInt(total) - parseInt(current);
        const eta = (remaining * avgTimePerTrack / 60).toFixed(1);
        console.log(`   ETA: ~${eta} minutes`);
      } else if (musicContent.includes('Created placeholder')) {
        const placeholders = musicContent.match(/Created placeholder/g).length;
        console.log(`🎵 Music Generation: ${placeholders}/1000 placeholders created`);
      }
    }
  } else {
    console.log('🎵 Music Generation: Not started');
  }
  
  console.log();
  
  // Check generated files
  const svgDir = path.join(process.cwd(), '04_Resources/Assets/Maps');
  const musicDir = path.join(process.cwd(), '04_Resources/Assets/Generated/Music');
  
  if (fs.existsSync(svgDir)) {
    const svgCount = countFiles(svgDir, '.svg');
    console.log(`📁 SVG Files: ${svgCount} total`);
  }
  
  if (fs.existsSync(musicDir)) {
    const mp3Count = countFiles(musicDir, '.mp3');
    const jsonCount = countFiles(musicDir, '.json');
    console.log(`📁 Music Files: ${mp3Count} MP3s, ${jsonCount} metadata files`);
  }
  
  console.log('\n[Refreshing every 10 seconds... Press Ctrl+C to stop]');
}

function countFiles(dir, ext) {
  let count = 0;
  
  const scan = (d) => {
    if (!fs.existsSync(d)) return;
    const entries = fs.readdirSync(d, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(d, entry.name);
      if (entry.isDirectory() && !entry.name.startsWith('.')) {
        scan(fullPath);
      } else if (entry.name.endsWith(ext)) {
        count++;
      }
    }
  };
  
  scan(dir);
  return count;
}

// Run monitor
checkProgress();
setInterval(checkProgress, 10000); // Update every 10 seconds
