#!/usr/bin/env node

// Generate a large pack of nuanced ambient audio files styled for Aquabyssos and Aethermoor
// Usage: AUDIO_SECONDS=45 node scripts/generate_audio_pack.js --count=100 --realms=aquabyssos,aethermoor

const fs = require('fs');
const path = require('path');

const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const OUT_DIR = path.join(ROOT, '04_Resources', 'Assets', 'Audio', 'Generated');
fs.mkdirSync(OUT_DIR, { recursive: true });

const sampleRate = 44100;
const seconds = parseInt(process.env.AUDIO_SECONDS || '45', 10);
const total = sampleRate * seconds;

function clamp(x){ return Math.max(-1, Math.min(1, x)); }
function writeWavMono16(filePath, samples){
  const n=samples.length, byteRate=sampleRate*2, blockAlign=2, sub2=n*2, chunk=36+sub2;
  const buf=Buffer.alloc(44+sub2); let o=0;
  buf.write('RIFF',o);o+=4; buf.writeUInt32LE(chunk,o);o+=4; buf.write('WAVE',o);o+=4; buf.write('fmt ',o);o+=4;
  buf.writeUInt32LE(16,o);o+=4; buf.writeUInt16LE(1,o);o+=2; buf.writeUInt16LE(1,o);o+=2; buf.writeUInt32LE(sampleRate,o);o+=4;
  buf.writeUInt32LE(byteRate,o);o+=4; buf.writeUInt16LE(blockAlign,o);o+=2; buf.writeUInt16LE(16,o);o+=2; buf.write('data',o);o+=4;
  buf.writeUInt32LE(sub2,o);o+=4;
  for(let i=0;i<n;i++){ const v=Math.floor(clamp(samples[i])*32767); buf.writeInt16LE(v,44+i*2);} fs.writeFileSync(filePath, buf);
}
function noiseBrown(){ let last=0; return ()=>{ const white=Math.random()*2-1; last=(last+0.02*white)/1.02; return last; }; }
function sine(freq,i){ return Math.sin(2*Math.PI*(i/sampleRate)*freq); }
function lfo(freq,i){ return (Math.sin(2*Math.PI*(i/sampleRate)*freq)+1)/2; }
function envSlow(i){ const t=i/total; if(t<0.05) return t/0.05; if(t>0.95) return (1-t)/0.05; return 1; }

// Variation helpers
function vary(v, pct=0.2){ const d = v*pct; return v + (Math.random()*2-1)*d; }

// Realm templates (lightweight, parameterized)
const TEMPLATES = {
  aquabyssos: [
    (p)=>{ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const base=n()*vary(0.18)*envSlow(i); const whoosh=lfo(vary(0.04),i)*vary(0.12); const whale=sine(vary(58,0.1)+8*lfo(vary(0.01),i),i)*vary(0.06); out[i]=base+whoosh+whale;} return out; }, // Underwater
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const water=lfo(vary(0.01),i)*vary(0.08); const rope=(Math.random()<0.0007?0.7:0)*vary(0.12); out[i]=water+rope;} return out; }, // Harbor Night
    (p)=>{ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const bubbles=n()*vary(0.12); const clicks=(Math.random()<0.001?0.7:0)*vary(0.12); out[i]=bubbles+clicks;} return out; }, // Coral Reef
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const pressure=sine(vary(30),i)*vary(0.04)+sine(vary(15),i)*vary(0.03); out[i]=pressure;} return out; }, // Deep Trench
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const bed=sine(220,i)*vary(0.018)+sine(110,i)*vary(0.018); const pulse=(lfo(vary(0.028),i)>0.992?0.9:0)*vary(0.2); out[i]=bed+pulse;} return out; }, // Temple
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const surf=lfo(vary(0.02),i)*vary(0.12); const horn=(lfo(vary(0.005),i)>0.998?0.9:0)*vary(0.2); out[i]=surf+horn;} return out; }, // Lighthouse
    (p)=>{ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const vent=(lfo(vary(0.03),i)>0.98?n()*0.9:0)*vary(0.2); const bed=n()*vary(0.06); out[i]=vent+bed;} return out; }, // Trench Geyser
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const sway=sine(vary(0.2),i)*vary(0.05); const creak=(Math.random()<0.0005?0.6:0)*vary(0.1); out[i]=sway+creak;} return out; }, // Kelp Forest
  ],
  aethermoor: [
    (p)=>{ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const wind=n()*vary(0.22)*envSlow(i); const hum=sine(vary(100),i)*vary(0.035); const creak=(Math.random()<0.0006?0.7:0)*vary(0.18); out[i]=wind+hum+creak;} return out; }, // Airship
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const gust=nativeNoise(i)*vary(0.1); const flags=(Math.random()<0.0008?0.8:0)*vary(0.12); out[i]=gust+flags;} return out; function nativeNoise(i){ return (Math.random()*2-1)*0.06*envSlow(i);} }, // Sky Dock
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const thump=(lfo(vary(1.2),i)>0.98?0.6:0)*vary(0.2); const hum=sine(vary(90),i)*vary(0.03); out[i]=thump+hum;} return out; }, // Engine Room
    (p)=>{ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const gust=n()*vary(0.3)*envSlow(i); const thunder=(Math.random()<0.0002?1:0)*vary(0.5); out[i]=gust+thunder;} return out; }, // Storm
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const rope=(Math.random()<0.0007?0.9:0)*vary(0.15); const sail=lfo(vary(0.015),i)*vary(0.08); out[i]=rope+sail;} return out; }, // Sails & Ropes
    (p)=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const brass= (Math.random()*2-1)*0.02; const tick=(Math.random()<0.0009?0.8:0)*vary(0.1); out[i]=brass+tick;} return out; }, // Brassworks
  ],
};

const labelSets = {
  aquabyssos: ['Underwater','Harbor','Reef','DeepTrench','Temple','Lighthouse','Geyser','KelpForest'],
  aethermoor: ['Airship','SkyDock','EngineRoom','Storm','Sails','Brassworks'],
};

function parseArgs(){
  const args = process.argv.slice(2);
  const get = (key, def)=>{ const a=args.find(x=>x.startsWith(`--${key}=`)); return a ? a.split('=')[1] : def; };
  const count = parseInt(get('count','100'),10);
  const realms = String(get('realms','aquabyssos,aethermoor')).split(',').map(s=>s.trim().toLowerCase()).filter(Boolean);
  return { count, realms };
}

function slug(s){ return String(s||'').toLowerCase().replace(/[^a-z0-9]+/g,'_').replace(/^_+|_+$/g,''); }

function main(){
  const { count, realms } = parseArgs();
  const index = [];
  const perRealm = Math.max(1, Math.floor(count / realms.length));
  for (const realm of realms){
    const templates = TEMPLATES[realm] || TEMPLATES.aquabyssos;
    const labels = labelSets[realm] || labelSets.aquabyssos;
    for (let i=0;i<perRealm;i++){
      const tIdx = i % templates.length;
      const maker = templates[tIdx];
      const label = labels[tIdx];
      const v = String(i+1).padStart(3,'0');
      const name = `${realm}_${label}_v${v}`;
      const file = path.join(OUT_DIR, `${name}.wav`);
      if (!fs.existsSync(file)){
        const samples = maker({ realm, label, idx: i });
        writeWavMono16(file, samples);
      }
      index.push({ name, file: path.relative(ROOT, file), realm, seconds, sampleRate });
    }
  }
  const idxPath = path.join(OUT_DIR, 'index_pack.json');
  fs.writeFileSync(idxPath, JSON.stringify(index, null, 2),'utf8');
  console.log(`Generated audio pack: ${index.length} files; index: ${path.relative(ROOT, idxPath)}`);
}

if (require.main === module) main();


