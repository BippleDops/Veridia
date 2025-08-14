#!/usr/bin/env node

const N8N_URL = 'http://localhost:5678';

// Trigger asset generation via N8N
async function triggerGeneration(type, prompt) {
  try {
    const response = await fetch(`${N8N_URL}/webhook/generate-asset`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type, prompt })
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log(`✅ Triggered ${type} generation via N8N`);
      return result;
    }
  } catch (error) {
    console.error(`N8N trigger failed: ${error.message}`);
  }
  return null;
}

// Monitor and trigger based on API availability
async function monitorAndTrigger() {
  const { checkServices } = require('./n8n_orchestrator');
  const services = await checkServices();
  
  if (!services.n8n) {
    console.log('⚠️ N8N not available, using direct generation');
    return;
  }
  
  // Example triggers
  const tasks = [
    { type: 'image', prompt: 'mystical forest clearing' },
    { type: 'video', prompt: 'magic spell casting effect' },
    { type: 'audio', prompt: 'dungeon ambience' }
  ];
  
  for (const task of tasks) {
    await triggerGeneration(task.type, task.prompt);
    await new Promise(r => setTimeout(r, 2000));
  }
}

if (require.main === module) {
  monitorAndTrigger().catch(console.error);
}

module.exports = { triggerGeneration };
