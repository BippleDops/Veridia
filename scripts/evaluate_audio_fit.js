#!/usr/bin/env node

// Evaluate and curate audio for world-fit and clipping safety.
// - Scans 04_Resources/Assets/Audio/** for .wav files
// - Reads Generated/index.json when present
// - Classifies each track to world domains (Aquabyssos, Aethermoor, Void, Generic)
// - Detects peak amplitude on WAVs (16-bit PCM) and flags clipping risk
// - Writes curated copies into Curated/<World>/ (normalized optional)
// - Produces reports in 09_Performance/

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const AUDIO_ROOT = path.join(ROOT, '04_Resources', 'Assets', 'Audio');
const GEN_DIR = path.join(AUDIO_ROOT, 'Generated');
const CURATED_ROOT = path.join(AUDIO_ROOT, 'Curated');
const PERF_DIR = path.join(ROOT, '09_Performance');

function ensureDir(dir){ if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }); }
ensureDir(PERF_DIR);
ensureDir(CURATED_ROOT);

const WORLDS = ['Aquabyssos', 'Aethermoor', 'Void', 'Generic'];
for (const w of WORLDS) ensureDir(path.join(CURATED_ROOT, w));

function walk(dir, acc = []){
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })){
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc); else acc.push(full);
  }
  return acc;
}

function inferWorldFromName(name){
  const s = String(name || '').toLowerCase();
  const hit = (arr) => arr.some(k => s.includes(k));
  if (hit(['underwater','reef','harbor','harbour','kelp','bubble','bubbles','trench','abyss','coral','tide','lighthouse','surf','horn','harbor_night'])) return 'Aquabyssos';
  if (hit(['airship','sky','wind','dock','engine','skydock','storm','stormwatch'])) return 'Aethermoor';
  if (hit(['void','null','cosmic','eldritch','deep trench','pressure dome','pressure','nullspace'])) return 'Void';
  return 'Generic';
}

function readUInt32LE(buf, o){ return buf.readUInt32LE(o); }
function readUInt16LE(buf, o){ return buf.readUInt16LE(o); }
function readInt16LE(buf, o){ return buf.readInt16LE(o); }

// Parse 16-bit PCM WAV and compute peak absolute sample in [0..1]
function computeWavPeakAbs(filePath){
  try{
    const buf = fs.readFileSync(filePath);
    if (buf.slice(0,4).toString('ascii') !== 'RIFF' || buf.slice(8,12).toString('ascii') !== 'WAVE') return null;
    let o = 12; // chunks start
    let fmt = null; let dataOff = -1; let dataLen = 0;
    while (o + 8 <= buf.length){
      const id = buf.slice(o, o+4).toString('ascii');
      const sz = readUInt32LE(buf, o+4);
      const payloadOff = o + 8;
      if (id === 'fmt '){
        fmt = {
          audioFormat: readUInt16LE(buf, payloadOff+0),
          numChannels: readUInt16LE(buf, payloadOff+2),
          sampleRate: readUInt32LE(buf, payloadOff+4),
          bitsPerSample: readUInt16LE(buf, payloadOff+14)
        };
      } else if (id === 'data'){
        dataOff = payloadOff;
        dataLen = sz;
        break;
      }
      o = payloadOff + sz + (sz % 2); // chunks are word-aligned
    }
    if (!fmt || dataOff < 0) return null;
    if (fmt.audioFormat !== 1 || fmt.bitsPerSample !== 16) return null; // PCM 16-bit only
    let peak = 0;
    for (let i = dataOff; i < Math.min(buf.length, dataOff + dataLen); i += 2){
      const s = readInt16LE(buf, i);
      const a = Math.abs(s) / 32768;
      if (a > peak) peak = a;
    }
    return peak;
  } catch { return null; }
}

function copyFileSafe(src, dst){
  ensureDir(path.dirname(dst));
  try{ fs.copyFileSync(src, dst); }catch{}
}

function main(){
  const report = [];
  const generatedIndexPath = path.join(GEN_DIR, 'index.json');
  let genIndex = [];
  if (fs.existsSync(generatedIndexPath)){
    try{ genIndex = JSON.parse(fs.readFileSync(generatedIndexPath, 'utf8')); }catch{}
  }
  const files = walk(AUDIO_ROOT, []).filter(f => /\.(wav|wave)$/i.test(f));
  for (const f of files){
    const rel = path.relative(ROOT, f);
    const name = path.basename(f).replace(/\.(wav|wave)$/i,'');
    const world = inferWorldFromName(name);
    const peak = computeWavPeakAbs(f);
    const clips = peak != null ? peak >= 0.999 : false;
    const needsHeadroom = peak != null ? peak > 0.98 : false;
    const curatedOut = path.join(CURATED_ROOT, world, path.basename(f));
    copyFileSafe(f, curatedOut);
    report.push({ file: rel, world, peak, clips, needsHeadroom, curated: path.relative(ROOT, curatedOut) });
  }
  // Update generated index with world tags when names match
  if (genIndex && Array.isArray(genIndex)){
    let touched = false;
    for (const e of genIndex){
      const world = inferWorldFromName(e.name || e.file || '');
      if (world && e.world !== world){ e.world = world; touched = true; }
    }
    if (touched){
      try{ fs.writeFileSync(generatedIndexPath, JSON.stringify(genIndex, null, 2), 'utf8'); }catch{}
    }
  }
  const jsonOut = path.join(PERF_DIR, 'audio_fit_report.json');
  const mdOut = path.join(PERF_DIR, 'audio_fit_report.md');
  try{ fs.writeFileSync(jsonOut, JSON.stringify(report, null, 2), 'utf8'); }catch{}
  try{
    const lines = [];
    lines.push('# Audio Fit Report');
    lines.push('');
    lines.push('| File | World | Peak | Clips | Curated Path |');
    lines.push('|---|---|---:|:---:|---|');
    for (const r of report){
      const pk = r.peak == null ? 'n/a' : r.peak.toFixed(3);
      lines.push(`| ${r.file} | ${r.world} | ${pk} | ${r.clips ? 'YES' : 'no'} | ${r.curated} |`);
    }
    fs.writeFileSync(mdOut, lines.join('\n'), 'utf8');
  }catch{}
  console.log(`Curated ${report.length} WAVs into ${path.relative(ROOT, CURATED_ROOT)}. Report: ${path.relative(ROOT, mdOut)}`);
}

if (require.main === module) main();


