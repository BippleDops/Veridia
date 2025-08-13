#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const ROOT = process.env.WORKSPACE_DIR || process.cwd();
const OUT_DIR = path.join(ROOT, '04_Resources', 'Assets', 'Audio', 'Generated');
fs.mkdirSync(OUT_DIR, { recursive: true });

const sampleRate = 44100;
const seconds = parseInt(process.env.AUDIO_SECONDS || '75', 10); // slightly longer loops
const total = sampleRate * seconds;
function clamp(x){ return Math.max(-1, Math.min(1, x)); }
function writeWavMono16(filePath, samples){ const n=samples.length, byteRate=sampleRate*2, blockAlign=2, sub2=n*2, chunk=36+sub2; const buf=Buffer.alloc(44+sub2); let o=0; buf.write('RIFF',o);o+=4; buf.writeUInt32LE(chunk,o);o+=4; buf.write('WAVE',o);o+=4; buf.write('fmt ',o);o+=4; buf.writeUInt32LE(16,o);o+=4; buf.writeUInt16LE(1,o);o+=2; buf.writeUInt16LE(1,o);o+=2; buf.writeUInt32LE(sampleRate,o);o+=4; buf.writeUInt32LE(byteRate,o);o+=4; buf.writeUInt16LE(blockAlign,o);o+=2; buf.writeUInt16LE(16,o);o+=2; buf.write('data',o);o+=4; buf.writeUInt32LE(sub2,o);o+=4; for(let i=0;i<n;i++){ const v=Math.floor(clamp(samples[i])*32767); buf.writeInt16LE(v,44+i*2);} fs.writeFileSync(filePath, buf); }
function noiseBrown(){ let last=0; return ()=>{ const white=Math.random()*2-1; last=(last+0.02*white)/1.02; return last; }; }
function sine(freq,i){ return Math.sin(2*Math.PI*(i/sampleRate)*freq); }
function lfo(freq,i){ return (Math.sin(2*Math.PI*(i/sampleRate)*freq)+1)/2; }
function envSlow(i){ const t=i/total; if(t<0.05) return t/0.05; if(t>0.95) return (1-t)/0.05; return 1; }
function makeUnderwater(){ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const base=n()*0.18*envSlow(i); const whoosh=lfo(0.04,i)*0.12; const whale=sine(58+8*lfo(0.012,i),i)*0.06; out[i]=base+whoosh+whale; } return out; }
function makeAirship(){ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const wind=n()*0.22*envSlow(i); const hum=sine(100,i)*0.035; const creak=(Math.random()<0.0006?0.7:0)*0.18; out[i]=wind+hum+creak; } return out; }
function makeMarket(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const mur=(Math.random()*2-1)*0.07*envSlow(i); const clink=(Math.random()<0.0007?0.65:0)*0.1; out[i]=mur+clink; } return out; }
function makeTemple(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const pulse=(lfo(0.028,i)>0.992?0.9:0)*0.2; const bed=sine(220,i)*0.018 + sine(110,i)*0.018; out[i]=bed+pulse; } return out; }
function makeStorm(){ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const gust=n()*0.3*envSlow(i); const thunder=(Math.random()<0.0002?1:0)*0.5; out[i]=gust+thunder; } return out; }
function makeCavern(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const drip=(Math.random()<0.001?0.8:0)*0.15; const rumble=lfo(0.01,i)*0.08; out[i]=drip+rumble; } return out; }
function makeReef(){ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const bubbles=n()*0.12; const clicks=(Math.random()<0.001?0.7:0)*0.12; out[i]=bubbles+clicks; } return out; }
function makeDeepTrench(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const pressure=sine(30,i)*0.04 + sine(15,i)*0.03; out[i]=pressure; } return out; }
function makeVoidHum(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const sub=sine(40,i)*0.05; const ring=sine(402,i)*0.01; out[i]=sub+ring; } return out; }
function makeSkyDock(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const wind=lfo(0.02,i)*0.1; const clank=(Math.random()<0.0006?0.9:0)*0.15; out[i]=wind+clank; } return out; }
function makeEngineRoom(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const thump=(lfo(1.2,i)>0.98?0.6:0)*0.2; const hum=sine(90,i)*0.03; out[i]=thump+hum; } return out; }
function makeLibrary(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const hush=(Math.random()*2-1)*0.03; const page=(Math.random()<0.0009?0.8:0)*0.12; out[i]=hush+page; } return out; }
function makeTavern(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const mur=(Math.random()*2-1)*0.09; const clink=(Math.random()<0.0012?0.7:0)*0.12; out[i]=mur+clink; } return out; }
function makeRitual(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const chant=sine(140,i)*0.015 + sine(70,i)*0.012; const pulse=(lfo(0.04,i)>0.995?0.9:0)*0.18; out[i]=chant+pulse; } return out; }
function makeShrine(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const bell=(lfo(0.002,i)>0.999?1:0)*0.5; const air=sine(3000,i)*0.003; out[i]=bell+air; } return out; }
function makeLighthouse(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const surf=lfo(0.02,i)*0.12; const horn=(lfo(0.005,i)>0.998?0.9:0)*0.2; out[i]=surf+horn; } return out; }
function makeHarborNight(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const water=lfo(0.01,i)*0.08; const rope=(Math.random()<0.0007?0.7:0)*0.12; out[i]=water+rope; } return out; }
function makeKelpSway(){ const out=new Float32Array(total); for(let i=0;i<total;i++){ const sway=sine(0.2,i)*0.05; const creak=(Math.random()<0.0005?0.6:0)*0.1; out[i]=sway+creak; } return out; }
function makeGeyser(){ const out=new Float32Array(total); const n=noiseBrown(); for(let i=0;i<total;i++){ const vent=(lfo(0.03,i)>0.98?n()*0.9:0)*0.2; const bed=n()*0.06; out[i]=vent+bed; } return out; }

// Normalize peak to avoid clipping (headroom ~ -0.35 dBFS for 16-bit)
function normalizeInPlace(samples, targetPeak=0.96){
  let peak=0;
  for(let i=0;i<samples.length;i++){ const a=Math.abs(samples[i]); if(a>peak) peak=a; }
  if(peak>0 && peak>targetPeak){ const g=targetPeak/peak; for(let i=0;i<samples.length;i++){ samples[i]*=g; } }
}
function main(){
  const assets=[
    {name:'Underwater_Ambience',maker:makeUnderwater},
    {name:'Airship_Ambience',maker:makeAirship},
    {name:'Market_Ambience',maker:makeMarket},
    {name:'Temple_Ambience',maker:makeTemple},
    {name:'Storm_Approach',maker:makeStorm},
    {name:'Cavern_Drip',maker:makeCavern},
    {name:'Coral_Reef_Clicks',maker:makeReef},
    {name:'Deep_Trench_Pressure',maker:makeDeepTrench},
    {name:'Void_Hum',maker:makeVoidHum},
    {name:'Sky_Dock_Bustle',maker:makeSkyDock},
    {name:'Engine_Room_Thrum',maker:makeEngineRoom},
    {name:'Library_Whisper',maker:makeLibrary},
    {name:'Tavern_Chatter',maker:makeTavern},
    {name:'Ritual_Circle_Pulse',maker:makeRitual},
    {name:'Shrine_Bell_Air',maker:makeShrine},
    {name:'Lighthouse_Surf_Horn',maker:makeLighthouse},
    {name:'Harbor_Night',maker:makeHarborNight},
    {name:'Kelp_Forest_Sway',maker:makeKelpSway},
    {name:'Trench_Geyser',maker:makeGeyser},
    {name:'Pressure_Dome_Interior',maker:()=>{ const out=new Float32Array(total); for(let i=0;i<total;i++){ const hum=sine(55,i)*0.04; const ping=(Math.random()<0.0007?0.8:0)*0.1; out[i]=hum+ping; } return out; }},
  ];
  const index=[];
  for(const a of assets){
    const samples=a.maker();
    normalizeInPlace(samples, 0.96);
    const file=path.join(OUT_DIR, `${a.name}.wav`);
    writeWavMono16(file,samples);
    index.push({name:a.name,file:path.relative(ROOT,file),duration_s:seconds,sampleRate});
  }
  fs.writeFileSync(path.join(OUT_DIR,'index.json'), JSON.stringify(index,null,2),'utf8');
  console.log('Generated audio tracks:');
  for(const e of index) console.log(` - ${e.file}`);
}
if (require.main===module) main();


