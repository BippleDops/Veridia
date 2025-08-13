#!/usr/bin/env node

// Minimal Ollama HTTP client for local text generation
// Env:
//   OLLAMA_HOST   default http://127.0.0.1:11434
//   OLLAMA_MODEL  default llama3.1

const DEFAULT_HOST = process.env.OLLAMA_HOST || 'http://127.0.0.1:11434';
const DEFAULT_MODEL = process.env.OLLAMA_MODEL || 'llama3.1';

async function generate({ prompt, model = DEFAULT_MODEL, options = {} }){
  const url = `${DEFAULT_HOST.replace(/\/$/, '')}/api/generate`;
  const body = {
    model,
    prompt,
    stream: false,
    options,
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const t = await res.text().catch(() => '');
    throw new Error(`ollama ${res.status}: ${t}`);
  }
  const data = await res.json();
  const out = (data && (data.response || data.output || data.message)) || '';
  return String(out);
}

async function ping() {
  try {
    const url = `${DEFAULT_HOST.replace(/\/$/, '')}/api/tags`;
    const res = await fetch(url, { method: 'GET' });
    return res.ok;
  } catch {
    return false;
  }
}

module.exports = { generate, ping, DEFAULT_HOST, DEFAULT_MODEL };

if (require.main === module) {
  (async () => {
    const ok = await ping();
    console.log(ok ? 'ollama:ok' : 'ollama:down');
  })();
}


