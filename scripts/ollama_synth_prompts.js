#!/usr/bin/env node

const { generate } = require('./ollama_client');

async function main(){
  const kind = (process.env.KIND || 'location').toLowerCase();
  const realm = process.env.REALM || 'Aquabyssos';
  const count = parseInt(process.env.COUNT || '5', 10);
  const aspect = (kind === 'portrait') ? '1:1' : (kind === 'map' ? '16:9' : '3:2');
  const resolution = '1024x1024';
  const styleHint = (kind === 'portrait') ? 'painterly character emphasis, grounded, diverse features' : (kind === 'map' ? 'clean linework, iconography, no embedded text' : 'cinematic atmosphere');
  const prompt = [
    `You are generating JSON prompts for image assets in a fantasy TTRPG world (realm: ${realm}).`,
    `Output a JSON array of exactly ${count} objects with fields: id, name, type, style (array of strings), aspect, resolution, prompt.`,
    `Constraints:`,
    `- type MUST be "${kind}"`,
    `- aspect default "${aspect}" and resolution "${resolution}"`,
    `- style should be 3-6 concise descriptors; include: ${styleHint}`,
    `- prompt: a single-sentence visual brief; avoid readable text/signage; avoid glamorization`,
    `- Names must be concise and unique within the array`,
    `Only output the JSON array. No extra text.`
  ].join('\n');

  const out = await generate({ prompt });
  process.stdout.write(String(out || '').trim());
}

main().catch(e => { console.error(e.message||String(e)); process.exit(1); });


