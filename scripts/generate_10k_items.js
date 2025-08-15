#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');

// Generate 1500 magic items
async function generateMagicItems() {
  console.log('⚔️ Generating 1500 magic items...');
  
  const categories = [
    { name: 'Weapons', count: 400, rarity: ['Common', 'Uncommon', 'Rare', 'Very Rare', 'Legendary'] },
    { name: 'Armor', count: 300, rarity: ['Common', 'Uncommon', 'Rare', 'Very Rare'] },
    { name: 'Artifacts', count: 200, rarity: ['Very Rare', 'Legendary', 'Artifact'] },
    { name: 'Consumables', count: 400, rarity: ['Common', 'Uncommon', 'Rare'] },
    { name: 'Mundane', count: 200, rarity: ['Common', 'Uncommon'] }
  ];
  
  let itemId = 0;
  
  for (const category of categories) {
    const dir = `02_Worldbuilding/Items/Generated/${category.name}`;
    await fs.mkdir(path.join(process.cwd(), dir), { recursive: true });
    
    for (let i = 0; i < category.count; i++) {
      const item = generateItem(itemId++, category);
      const content = formatItemContent(item);
      const filename = `${item.id}_${item.name.replace(/\s+/g, '_')}.md`;
      const filepath = path.join(process.cwd(), dir, filename);
      
      await fs.writeFile(filepath, content);
      
      if ((i + 1) % 100 === 0) {
        console.log(`  ${category.name}: ${i + 1}/${category.count}`);
      }
    }
  }
  
  return itemId;
}

function generateItem(id, category) {
  const prefixes = {
    Weapons: ['Blazing', 'Frost', 'Thunder', 'Shadow', 'Radiant', 'Venomous', 'Cursed', 'Blessed'],
    Armor: ['Adamantine', 'Mithril', 'Dragon Scale', 'Ethereal', 'Fortified', 'Warded', 'Enchanted'],
    Artifacts: ['Ancient', 'Primordial', 'Divine', 'Infernal', 'Celestial', 'Void-touched', 'Time-worn'],
    Consumables: ['Greater', 'Lesser', 'Superior', 'Refined', 'Distilled', 'Concentrated', 'Pure'],
    Mundane: ['Masterwork', 'Ornate', 'Simple', 'Sturdy', 'Elegant', 'Practical', 'Decorated']
  };
  
  const bases = {
    Weapons: ['Sword', 'Axe', 'Bow', 'Staff', 'Dagger', 'Hammer', 'Spear', 'Crossbow'],
    Armor: ['Plate', 'Chain Mail', 'Leather', 'Shield', 'Helm', 'Gauntlets', 'Boots', 'Cloak'],
    Artifacts: ['Orb', 'Crown', 'Scepter', 'Tome', 'Ring', 'Amulet', 'Chalice', 'Mirror'],
    Consumables: ['Potion', 'Elixir', 'Salve', 'Powder', 'Oil', 'Incense', 'Crystal', 'Herb'],
    Mundane: ['Rope', 'Lantern', 'Compass', 'Spyglass', 'Lock', 'Tool Kit', 'Map Case', 'Journal']
  };
  
  const suffixes = {
    Weapons: ['of Slaying', 'of Wounding', 'of Speed', 'of Accuracy', 'of Power', 'of the Ancients'],
    Armor: ['of Protection', 'of Resistance', 'of Fortitude', 'of Grace', 'of the Guardian'],
    Artifacts: ['of Eternity', 'of the Gods', 'of Dominion', 'of Truth', 'of Destiny'],
    Consumables: ['of Healing', 'of Vigor', 'of Clarity', 'of Fortune', 'of Swiftness'],
    Mundane: ['of Quality', 'of Durability', 'of Convenience', 'of Reliability']
  };
  
  const prefix = prefixes[category.name][Math.floor(Math.random() * prefixes[category.name].length)];
  const base = bases[category.name][Math.floor(Math.random() * bases[category.name].length)];
  const suffix = suffixes[category.name][Math.floor(Math.random() * suffixes[category.name].length)];
  
  const rarity = category.rarity[Math.floor(Math.random() * category.rarity.length)];
  
  return {
    id: `ITEM${String(id).padStart(5, '0')}`,
    name: `${prefix} ${base} ${suffix}`,
    type: category.name,
    rarity: rarity,
    attunement: Math.random() > 0.5 && rarity !== 'Common',
    
    description: generateItemDescription(category.name, base),
    appearance: generateItemAppearance(prefix, base, category.name),
    
    properties: generateProperties(category.name, rarity),
    curse: rarity === 'Cursed' || Math.random() > 0.9 ? generateCurse() : null,
    
    history: generateItemHistory(),
    creator: generateCreator(),
    
    value: calculateValue(rarity),
    weight: calculateWeight(category.name, base)
  };
}

function generateItemDescription(type, base) {
  const descriptions = {
    Weapons: `A masterfully crafted ${base.toLowerCase()} imbued with magical power`,
    Armor: `Protective ${base.toLowerCase()} enhanced with enchantments`,
    Artifacts: `An ancient ${base.toLowerCase()} of immense magical significance`,
    Consumables: `A carefully prepared ${base.toLowerCase()} with magical properties`,
    Mundane: `A high-quality ${base.toLowerCase()} with subtle enchantments`
  };
  
  return descriptions[type];
}

function generateItemAppearance(prefix, base, type) {
  const materials = {
    Weapons: ['forged from meteoric iron', 'carved from dragon bone', 'made of crystallized magic'],
    Armor: ['crafted from exotic materials', 'bearing ancient runes', 'shimmering with energy'],
    Artifacts: ['radiating otherworldly power', 'covered in mysterious symbols', 'pulsing with inner light'],
    Consumables: ['glowing softly', 'swirling with colors', 'emanating sweet fragrance'],
    Mundane: ['expertly crafted', 'bearing maker\'s mark', 'showing signs of age']
  };
  
  const detail = materials[type][Math.floor(Math.random() * materials[type].length)];
  return `A ${prefix.toLowerCase()} ${base.toLowerCase()} ${detail}`;
}

function generateProperties(type, rarity) {
  const properties = [];
  const numProps = rarity === 'Common' ? 1 : rarity === 'Uncommon' ? 2 : rarity === 'Rare' ? 3 : 4;
  
  const allProps = {
    Weapons: [
      '+1 to attack and damage rolls',
      '+2 to attack and damage rolls',
      'Deals extra 1d6 elemental damage',
      'Critical hits on 19-20',
      'Returns when thrown',
      'Can strike ethereal creatures',
      'Ignores resistance to damage type',
      'Grants advantage on initiative'
    ],
    Armor: [
      '+1 to AC',
      '+2 to AC',
      'Resistance to one damage type',
      'Advantage on saving throws',
      'No stealth disadvantage',
      'Reduces damage by 3',
      'Immunity to critical hits',
      'Grants swimming speed'
    ],
    Artifacts: [
      'Cast spell 3/day',
      'Increase ability score by 2',
      'Grant true sight',
      'Telepathy 120 ft',
      'Immunity to charm',
      'Regenerate 1 hp/round',
      'Plane shift 1/day',
      'Time stop 1/week'
    ],
    Consumables: [
      'Restore 4d4+4 hit points',
      'Grant advantage for 1 hour',
      'Remove one condition',
      'Increase speed by 10 ft',
      'Resistance for 10 minutes',
      'Fly for 1 hour',
      'Invisible for 10 minutes',
      'Breathe underwater 1 hour'
    ],
    Mundane: [
      'Never breaks or wears out',
      'Weighs half normal',
      'Functions in antimagic',
      'Alerts to danger',
      'Provides comfort',
      'Works perfectly always',
      'Grants minor benefit',
      'Has hidden compartment'
    ]
  };
  
  const typeProps = allProps[type];
  for (let i = 0; i < numProps && i < typeProps.length; i++) {
    properties.push(typeProps[Math.floor(Math.random() * typeProps.length)]);
  }
  
  return properties;
}

function generateCurse() {
  const curses = [
    'Cannot be removed without Remove Curse spell',
    'User takes 1d4 damage when using',
    'Attracts hostile creatures',
    'User cannot tell lies',
    'Slowly changes alignment',
    'Ages user 1 day per use',
    'Whispers dark thoughts',
    'Binds to user\'s soul'
  ];
  
  return curses[Math.floor(Math.random() * curses.length)];
}

function generateItemHistory() {
  const histories = [
    'Forged during the Age of Heroes for a legendary champion',
    'Created by accident during a magical experiment',
    'Blessed by a deity in ancient times',
    'Stolen from a dragon\'s hoard centuries ago',
    'Crafted as payment for a life debt',
    'Found in ruins of a lost civilization',
    'Given as a gift between star-crossed lovers',
    'Used in a ritual that changed history'
  ];
  
  return histories[Math.floor(Math.random() * histories.length)];
}

function generateCreator() {
  const creators = [
    'Thorin Forgemaster, legendary dwarven smith',
    'Elysia Moonweaver, elven archmage',
    'The Crimson Brotherhood of artificers',
    'Unknown master from before recorded time',
    'Collaborative work of many cultures',
    'A god\'s avatar walking among mortals',
    'Self-created through accumulated magic',
    'Dragons in their ancient forges'
  ];
  
  return creators[Math.floor(Math.random() * creators.length)];
}

function calculateValue(rarity) {
  const values = {
    Common: 50 + Math.floor(Math.random() * 50),
    Uncommon: 100 + Math.floor(Math.random() * 400),
    Rare: 500 + Math.floor(Math.random() * 4500),
    'Very Rare': 5000 + Math.floor(Math.random() * 45000),
    Legendary: 50000 + Math.floor(Math.random() * 100000),
    Artifact: 'Priceless'
  };
  
  return values[rarity];
}

function calculateWeight(type, base) {
  const weights = {
    Weapons: { Dagger: 1, Sword: 3, Axe: 4, Staff: 4, Bow: 2, Hammer: 5, Spear: 3, Crossbow: 5 },
    Armor: { Leather: 10, 'Chain Mail': 20, Plate: 65, Shield: 6, Helm: 3, Gauntlets: 2, Boots: 3, Cloak: 2 },
    Artifacts: 2,
    Consumables: 0.5,
    Mundane: 1
  };
  
  if (typeof weights[type] === 'object') {
    return weights[type][base] || 2;
  }
  return weights[type];
}

function formatItemContent(item) {
  return `# ${item.name}

*${item.type}, ${item.rarity}${item.attunement ? ' (requires attunement)' : ''}*

**ID**: ${item.id}

## Description
${item.description}

## Appearance
${item.appearance}

## Properties
${item.properties.map(p => `- ${p}`).join('\n')}

${item.curse ? `## Curse
⚠️ **${item.curse}**` : ''}

## History
${item.history}

**Created by**: ${item.creator}

## Value
${typeof item.value === 'number' ? `${item.value.toLocaleString()} gp` : item.value}

**Weight**: ${item.weight} lbs

## DM Notes
- Adjust properties for campaign balance
- Consider the item's history for plot hooks
- The creator might still be alive (or undead)
${item.curse ? '- Reveal curse only after attunement' : ''}

---
*Generated: ${new Date().toISOString()}*
`;
}

// Export for use in main generator
module.exports = { generateMagicItems };

// Run if called directly
if (require.main === module) {
  generateMagicItems().then(count => {
    console.log(`\n✅ Generated ${count} magic items!`);
  }).catch(console.error);
}
