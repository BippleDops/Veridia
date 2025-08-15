#!/usr/bin/env node

const Generate1000Assets = require('./generate_1000_assets.js');

async function completeRemaining() {
  const generator = new Generate1000Assets();
  
  // Update stats to reflect what's already generated
  generator.stats = {
    npcs: 200,
    items: 150,
    locations: 150,
    quests: 100,
    encounters: 0,
    lore: 0,
    spells: 0,
    monsters: 0,
    total: 600
  };
  
  console.log('📋 Completing remaining 400 assets...\n');
  console.log('Already generated:');
  console.log('- NPCs: 200');
  console.log('- Items: 150');
  console.log('- Locations: 150');
  console.log('- Quests: 100\n');
  console.log('Now generating:');
  console.log('- Encounters: 100');
  console.log('- Lore: 100');
  console.log('- Spells: 50');
  console.log('- Monsters: 50\n');
  
  await generator.initialize();
  await generator.generateRemainingContent();
  
  console.log('\n✅ All 1000 assets generated!');
  console.log(`\n📊 Final Statistics:`);
  console.log(`- NPCs: ${generator.stats.npcs}`);
  console.log(`- Items: ${generator.stats.items}`);
  console.log(`- Locations: ${generator.stats.locations}`);
  console.log(`- Quests: ${generator.stats.quests}`);
  console.log(`- Encounters: ${generator.stats.encounters}`);
  console.log(`- Lore Entries: ${generator.stats.lore}`);
  console.log(`- Spells: ${generator.stats.spells}`);
  console.log(`- Monsters: ${generator.stats.monsters}`);
  console.log(`\nTotal Assets Generated: ${generator.stats.total}`);
  
  await generator.generateMasterIndex();
}

completeRemaining().catch(console.error);
