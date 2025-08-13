/**
 * Random Generator Interface
 * Web-based interface for the Random Generator Engine
 * Part of Phase 4: Advanced Automation & Dynamic Systems
 */

class RandomGeneratorInterface {
    constructor() {
        this.generatorData = {
            aquabyssosNames: [
                "Marina", "Coral", "Pelagic", "Abyss", "Current", "Tide", "Reef", 
                "Pearl", "Nautilus", "Leviathan", "Kraken", "Siphon", "Depth",
                "Thalassa", "Nereid", "Triton", "Oceanus", "Benthos"
            ],
            aethermoorNames: [
                "Aura", "Nimbus", "Zephyr", "Tempest", "Gale", "Breeze", "Storm",
                "Cirrus", "Stratos", "Azure", "Skylar", "Celeste", "Altus"
            ],
            titles: [
                "Ambassador", "Captain", "Admiral", "Scholar", "Merchant", "Artificer",
                "Keeper", "Guardian", "Emissary", "Councilor", "Elder", "Sage",
                "Commander", "Engineer", "Chronicler", "Mystic", "Trader"
            ],
            factions: [
                "Parliament of Echoes", "Crystal Wardens", "Shadow Conspiracy",
                "Deep Merchants Guild", "Wind Riders", "Academy of Depths",
                "The Iron Company", "Crimson Tide Pirates", "Order of Azure Flame"
            ],
            personalities: [
                "Calculating and methodical", "Passionate but impulsive", 
                "Wise and contemplative", "Charming but deceptive",
                "Loyal but inflexible", "Ambitious and ruthless",
                "Kind but naive", "Cynical but practical"
            ],
            motivations: [
                "Seeks ancient knowledge", "Wants political power",
                "Protecting their realm", "Personal revenge",
                "Profit above all", "Religious devotion",
                "Family honor", "Scientific discovery"
            ],
            secrets: [
                "Works for the Shadow Conspiracy", "Has royal bloodline",
                "Addicted to crystal corruption", "Lost memories of past life",
                "Secret romantic relationship", "Owes massive debt",
                "Witnessed major conspiracy", "Has forbidden magical ability"
            ],
            encounters: {
                types: ["Combat", "Social", "Exploration", "Puzzle", "Stealth", "Chase"],
                difficulties: ["Easy", "Medium", "Hard", "Deadly"],
                aquabyssosCreatures: [
                    "Deep Leviathan", "Crystal Jellyfish", "Void Touched Mer-folk",
                    "Shadow Surgeons", "Abyssal Cultists", "Pressure Wraiths",
                    "Memory Thieves", "Tidal Horrors", "Corrupted Pearls"
                ],
                aethermoorCreatures: [
                    "Wind Elementals", "Sky Pirates", "Storm Hawks", "Cloud Dancers",
                    "Lightning Wisps", "Aerial Scouts", "Wind Singers", "Tempest Guards"
                ],
                environments: [
                    "Ancient Ruins", "Trade Route", "Government Building", 
                    "Underground Tunnels", "Open Ocean", "Sky Platform",
                    "Crystal Caves", "Diplomatic Embassy", "Secret Laboratory"
                ]
            },
            loot: {
                common: [
                    "Pressure Regulator", "Navigation Crystal", "Memory Pearl",
                    "Wind Compass", "Trade Seal", "Breathing Apparatus"
                ],
                uncommon: [
                    "Depth Pressure Ring", "Storm Caller Whistle", "Shadow Detector",
                    "Tidal Shard", "Wind Walking Boots", "Crystal Focus"
                ],
                rare: [
                    "Crown Fragment", "Void Touch Antidote", "Reality Anchor",
                    "Deep Mother Relic", "Parliament Seal", "Ancient Skyforge Tool"
                ],
                properties: [
                    "Pressure Resistant", "Void Protected", "Memory Enhanced",
                    "Storm Attuned", "Crystal Powered", "Shadow Touched",
                    "Tidal Linked", "Wind Blessed", "Reality Stable"
                ]
            }
        };
        
        this.initializeInterface();
    }
    
    initializeInterface() {
        // Create the generator interface HTML
        const interfaceHTML = `
            <div id="random-generator-interface" style="
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                max-width: 1200px;
                margin: 20px auto;
                padding: 20px;
                background: #f5f5f5;
                border-radius: 10px;
                box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            ">
                <h1 style="color: #2c3e50; text-align: center; margin-bottom: 30px;">
                    🎲 Cordelia Random Generator
                </h1>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 20px; margin-bottom: 30px;">
                    <div class="generator-section">
                        <h3>🧙‍♀️ NPC Generator</h3>
                        <select id="npc-realm">
                            <option value="Both">Both Realms</option>
                            <option value="Aquabyssos">Aquabyssos</option>
                            <option value="Aethermoor">Aethermoor</option>
                        </select>
                        <button onclick="rgi.generateNPC()" class="gen-button">Generate NPC</button>
                    </div>
                    
                    <div class="generator-section">
                        <h3>⚔️ Encounter Generator</h3>
                        <select id="encounter-difficulty">
                            <option value="random">Random Difficulty</option>
                            <option value="Easy">Easy</option>
                            <option value="Medium">Medium</option>
                            <option value="Hard">Hard</option>
                            <option value="Deadly">Deadly</option>
                        </select>
                        <select id="encounter-realm">
                            <option value="Both">Both Realms</option>
                            <option value="Aquabyssos">Aquabyssos</option>
                            <option value="Aethermoor">Aethermoor</option>
                        </select>
                        <button onclick="rgi.generateEncounter()" class="gen-button">Generate Encounter</button>
                    </div>
                    
                    <div class="generator-section">
                        <h3>💎 Loot Generator</h3>
                        <select id="loot-rarity">
                            <option value="random">Random Rarity</option>
                            <option value="Common">Common</option>
                            <option value="Uncommon">Uncommon</option>
                            <option value="Rare">Rare</option>
                            <option value="Very Rare">Very Rare</option>
                        </select>
                        <button onclick="rgi.generateLoot()" class="gen-button">Generate Loot</button>
                    </div>
                </div>
                
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 20px;">
                    <div class="batch-section">
                        <h3>📋 Batch Generation</h3>
                        <select id="batch-type">
                            <option value="npc">NPCs</option>
                            <option value="encounter">Encounters</option>
                            <option value="loot">Loot Items</option>
                        </select>
                        <input type="number" id="batch-count" min="1" max="10" value="3" placeholder="Count">
                        <button onclick="rgi.generateBatch()" class="gen-button">Generate Batch</button>
                    </div>
                    
                    <div class="quick-tools">
                        <h3>🎯 Quick Tools</h3>
                        <button onclick="rgi.generateQuickEncounter()" class="tool-button">Quick Combat</button>
                        <button onclick="rgi.generateTreasureHoard()" class="tool-button">Treasure Hoard</button>
                        <button onclick="rgi.generateRumors()" class="tool-button">Random Rumors</button>
                    </div>
                </div>
                
                <div id="generation-output" style="
                    background: white;
                    padding: 20px;
                    border-radius: 8px;
                    min-height: 200px;
                    border: 2px dashed #ccc;
                    text-align: center;
                    color: #666;
                ">
                    <p>Generated content will appear here...</p>
                    <p>Select a generator above and click to begin!</p>
                </div>
                
                <div style="margin-top: 20px; text-align: center;">
                    <button onclick="rgi.exportToMarkdown()" class="export-button" disabled>
                        📄 Export to Markdown
                    </button>
                    <button onclick="rgi.clearOutput()" class="clear-button">
                        🗑️ Clear Output
                    </button>
                </div>
            </div>
            
            <style>
                .generator-section, .batch-section, .quick-tools {
                    background: white;
                    padding: 15px;
                    border-radius: 8px;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                }
                
                .generator-section h3, .batch-section h3, .quick-tools h3 {
                    margin: 0 0 15px 0;
                    color: #34495e;
                }
                
                .gen-button, .tool-button, .export-button, .clear-button {
                    background: #3498db;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    margin: 5px 2px;
                    font-size: 14px;
                }
                
                .gen-button:hover, .tool-button:hover, .export-button:hover {
                    background: #2980b9;
                }
                
                .clear-button {
                    background: #e74c3c;
                }
                
                .clear-button:hover {
                    background: #c0392b;
                }
                
                .export-button:disabled {
                    background: #bdc3c7;
                    cursor: not-allowed;
                }
                
                select, input {
                    width: 100%;
                    padding: 8px;
                    margin: 5px 0 10px 0;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-sizing: border-box;
                }
                
                #generation-output {
                    font-family: 'Courier New', monospace;
                    text-align: left;
                    white-space: pre-wrap;
                }
                
                .generated-item {
                    background: #f8f9fa;
                    border-left: 4px solid #3498db;
                    padding: 15px;
                    margin: 10px 0;
                    border-radius: 4px;
                }
                
                .item-header {
                    font-weight: bold;
                    color: #2c3e50;
                    font-size: 18px;
                    margin-bottom: 10px;
                }
                
                .item-detail {
                    margin: 5px 0;
                    color: #5d6d7e;
                }
            </style>
        `;
        
        // Inject the interface
        document.body.insertAdjacentHTML('beforeend', interfaceHTML);
        
        this.outputElement = document.getElementById('generation-output');
        this.currentGeneration = null;
    }
    
    randomChoice(array) {
        return array[Math.floor(Math.random() * array.length)];
    }
    
    randomSample(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }
    
    generateNPC() {
        const realm = document.getElementById('npc-realm').value;
        
        // Choose name based on realm
        let firstName, actualRealm;
        if (realm === "Aquabyssos" || (realm === "Both" && Math.random() < 0.5)) {
            firstName = this.randomChoice(this.generatorData.aquabyssosNames);
            actualRealm = "Aquabyssos";
        } else {
            firstName = this.randomChoice(this.generatorData.aethermoorNames);
            actualRealm = "Aethermoor";
        }
        
        const surnames = ["Deepcurrent", "Stormwind", "Crystalheart", 
                         "Shadowmere", "Tidecaller", "Voidward", "Brightwater"];
        const fullName = `${firstName} ${this.randomChoice(surnames)}`;
        
        const title = this.randomChoice(this.generatorData.titles);
        const faction = this.randomChoice(this.generatorData.factions);
        const personality = this.randomChoice(this.generatorData.personalities);
        const motivation = this.randomChoice(this.generatorData.motivations);
        const secret = this.randomChoice(this.generatorData.secrets);
        
        // Generate appearance
        let appearance;
        if (actualRealm === "Aquabyssos") {
            const features = [
                "bioluminescent markings", "gill slits on neck", "webbed fingers",
                "pearl-white skin", "deep blue eyes", "scale patches",
                "flowing sea-green hair", "pressure-adapted physique"
            ];
            appearance = `Notable features: ${this.randomSample(features, Math.floor(Math.random() * 3) + 2).join(', ')}`;
        } else {
            const features = [
                "wind-swept hair", "storm-grey eyes", "sun-weathered skin",
                "athletic build", "silver jewelry", "sky-blue markings",
                "flowing robes", "keen piercing gaze"
            ];
            appearance = `Notable features: ${this.randomSample(features, Math.floor(Math.random() * 3) + 2).join(', ')}`;
        }
        
        const abilities = this.randomSample([
            "Diplomatic Immunity", "Deep Pressure Adaptation", "Wind Walking",
            "Crystal Attunement", "Shadow Resistance", "Memory Reading",
            "Tidal Sense", "Storm Calling", "Void Detection"
        ], Math.floor(Math.random() * 3) + 2);
        
        const equipment = this.randomSample([
            "Ceremonial Robes", "Pressure Suit", "Navigation Tools", 
            "Diplomatic Papers", "Crystal Focus", "Wind Cloak",
            "Memory Stones", "Trade Ledger", "Security Badge"
        ], Math.floor(Math.random() * 4) + 2);
        
        this.displayNPC({
            name: fullName,
            title: title,
            faction: faction,
            appearance: appearance,
            personality: personality,
            motivation: motivation,
            secret: secret,
            realm: actualRealm,
            challengeRating: Math.floor(Math.random() * 10) + 1,
            abilities: abilities,
            equipment: equipment
        });
    }
    
    generateEncounter() {
        const difficultySelect = document.getElementById('encounter-difficulty').value;
        const realm = document.getElementById('encounter-realm').value;
        
        const difficulty = difficultySelect === "random" ? 
            this.randomChoice(this.generatorData.encounters.difficulties) : difficultySelect;
        
        const encounterType = this.randomChoice(this.generatorData.encounters.types);
        const environment = this.randomChoice(this.generatorData.encounters.environments);
        
        let creatures, actualRealm;
        if (realm === "Aquabyssos") {
            creatures = this.randomSample(this.generatorData.encounters.aquabyssosCreatures, 
                                        Math.floor(Math.random() * 3) + 1);
            actualRealm = "Aquabyssos";
        } else if (realm === "Aethermoor") {
            creatures = this.randomSample(this.generatorData.encounters.aethermoorCreatures, 
                                        Math.floor(Math.random() * 3) + 1);
            actualRealm = "Aethermoor";
        } else {
            const allCreatures = [...this.generatorData.encounters.aquabyssosCreatures, 
                                ...this.generatorData.encounters.aethermoorCreatures];
            creatures = this.randomSample(allCreatures, Math.floor(Math.random() * 3) + 1);
            actualRealm = "Both";
        }
        
        const tactics = this.generateTactics(encounterType, creatures);
        const hooks = this.generateHooks(encounterType, environment);
        const treasure = this.generateTreasure(difficulty);
        
        this.displayEncounter({
            name: `${environment} ${encounterType}`,
            type: encounterType,
            difficulty: difficulty,
            creatures: creatures,
            environment: environment,
            tactics: tactics,
            treasure: treasure,
            hooks: hooks,
            realm: actualRealm,
            levelRange: "1-5"
        });
    }
    
    generateLoot() {
        const raritySelect = document.getElementById('loot-rarity').value;
        
        let rarity;
        if (raritySelect === "random") {
            const rarities = ["Common", "Uncommon", "Rare", "Very Rare"];
            const weights = [50, 30, 15, 5];
            const random = Math.random() * 100;
            let cumulative = 0;
            for (let i = 0; i < rarities.length; i++) {
                cumulative += weights[i];
                if (random <= cumulative) {
                    rarity = rarities[i];
                    break;
                }
            }
        } else {
            rarity = raritySelect;
        }
        
        let baseName, value;
        if (rarity === "Common") {
            baseName = this.randomChoice(this.generatorData.loot.common);
            value = Math.floor(Math.random() * 90) + 10;
        } else if (rarity === "Uncommon") {
            baseName = this.randomChoice(this.generatorData.loot.uncommon);
            value = Math.floor(Math.random() * 400) + 100;
        } else {
            baseName = this.randomChoice(this.generatorData.loot.rare);
            value = Math.floor(Math.random() * 4500) + 500;
        }
        
        const properties = this.randomSample(this.generatorData.loot.properties, 
                                           Math.floor(Math.random() * 3) + 1);
        
        const itemType = this.randomChoice(["Tool", "Weapon", "Armor", "Accessory", "Consumable"]);
        const realmSpecific = this.randomChoice(["Aquabyssos", "Aethermoor", "Both"]);
        
        this.displayLoot({
            name: baseName,
            type: itemType,
            rarity: rarity,
            value: value,
            description: `A ${baseName.toLowerCase()} with ${properties.map(p => p.toLowerCase()).join(', ')}`,
            properties: properties,
            realmSpecific: realmSpecific
        });
    }
    
    generateTactics(encounterType, creatures) {
        if (encounterType === "Combat") {
            return `${creatures[0]} leads with aggressive assault while others provide support`;
        } else if (encounterType === "Social") {
            return "Uses charm and negotiation, escalates to threats if needed";
        } else if (encounterType === "Stealth") {
            return "Patrols in predictable patterns, vulnerable during shift changes";
        } else {
            return "Adapts to party actions, uses environment to advantage";
        }
    }
    
    generateHooks(encounterType, environment) {
        const baseHooks = [
            `Information about Shadow Conspiracy activities in ${environment}`,
            "Clues to Queen Seraphina's crystal corruption",
            "Deep Mother cult recruitment attempt",
            "Trade route disruption evidence",
            "Parliamentary corruption scandal"
        ];
        return this.randomSample(baseHooks, Math.floor(Math.random() * 3) + 1);
    }
    
    generateTreasure(difficulty) {
        const treasure = [];
        
        // Base coins
        if (difficulty === "Easy") {
            treasure.push(`${Math.floor(Math.random() * 40) + 10} gold pieces`);
        } else if (difficulty === "Medium") {
            treasure.push(`${Math.floor(Math.random() * 100) + 50} gold pieces`);
        } else if (difficulty === "Hard") {
            treasure.push(`${Math.floor(Math.random() * 250) + 150} gold pieces`);
        } else {
            treasure.push(`${Math.floor(Math.random() * 600) + 400} gold pieces`);
        }
        
        // Add items based on difficulty
        if (difficulty === "Easy" || difficulty === "Medium") {
            treasure.push(this.randomChoice(this.generatorData.loot.common));
        } else if (difficulty === "Hard") {
            treasure.push(this.randomChoice(this.generatorData.loot.uncommon));
        } else {
            treasure.push(this.randomChoice(this.generatorData.loot.rare));
        }
        
        return treasure;
    }
    
    generateBatch() {
        const type = document.getElementById('batch-type').value;
        const count = parseInt(document.getElementById('batch-count').value) || 3;
        
        let results = [];
        for (let i = 0; i < count; i++) {
            if (type === "npc") {
                // Generate NPC data without displaying
                // This is a simplified version for batch generation
                results.push({
                    type: "NPC",
                    name: `${this.randomChoice([...this.generatorData.aquabyssosNames, 
                                              ...this.generatorData.aethermoorNames])} ${this.randomChoice(["Deepcurrent", "Stormwind", "Crystalheart"])}`,
                    title: this.randomChoice(this.generatorData.titles),
                    faction: this.randomChoice(this.generatorData.factions)
                });
            } else if (type === "encounter") {
                results.push({
                    type: "Encounter",
                    name: `${this.randomChoice(this.generatorData.encounters.environments)} ${this.randomChoice(this.generatorData.encounters.types)}`,
                    difficulty: this.randomChoice(this.generatorData.encounters.difficulties),
                    creatures: this.randomSample([...this.generatorData.encounters.aquabyssosCreatures, 
                                                ...this.generatorData.encounters.aethermoorCreatures], 2)
                });
            } else if (type === "loot") {
                const rarity = this.randomChoice(["Common", "Uncommon", "Rare"]);
                let item;
                if (rarity === "Common") {
                    item = this.randomChoice(this.generatorData.loot.common);
                } else if (rarity === "Uncommon") {
                    item = this.randomChoice(this.generatorData.loot.uncommon);
                } else {
                    item = this.randomChoice(this.generatorData.loot.rare);
                }
                results.push({
                    type: "Loot",
                    name: item,
                    rarity: rarity,
                    value: rarity === "Common" ? Math.floor(Math.random() * 90) + 10 : 
                           rarity === "Uncommon" ? Math.floor(Math.random() * 400) + 100 :
                           Math.floor(Math.random() * 4500) + 500
                });
            }
        }
        
        this.displayBatch(results);
    }
    
    generateQuickEncounter() {
        const creatures = this.randomSample([...this.generatorData.encounters.aquabyssosCreatures, 
                                           ...this.generatorData.encounters.aethermoorCreatures], 
                                          Math.floor(Math.random() * 2) + 1);
        const environment = this.randomChoice(this.generatorData.encounters.environments);
        const difficulty = this.randomChoice(this.generatorData.encounters.difficulties);
        
        this.displayQuickResult("Quick Combat", {
            creatures: creatures.join(", "),
            environment: environment,
            difficulty: difficulty,
            initiative: `Roll 1d20+DEX for each creature`,
            quickTactic: `${creatures[0]} focuses on strongest threat`
        });
    }
    
    generateTreasureHoard() {
        const coins = Math.floor(Math.random() * 1000) + 100;
        const gems = Math.floor(Math.random() * 5) + 1;
        const items = this.randomSample([...this.generatorData.loot.common, 
                                       ...this.generatorData.loot.uncommon], 3);
        
        this.displayQuickResult("Treasure Hoard", {
            coins: `${coins} gold pieces`,
            gems: `${gems} gems worth ${Math.floor(Math.random() * 500) + 50} gp each`,
            items: items.join(", "),
            totalValue: `Approximately ${coins + (gems * 200) + 300} gp`
        });
    }
    
    generateRumors() {
        const rumors = [
            "Strange lights have been seen in the Abyssal Depths",
            "Queen Seraphina hasn't been seen in public for weeks",
            "The Shadow Conspiracy is recruiting new members",
            "A new trade route to Aethermoor has opened",
            "The Deep Mother cult is planning something big",
            "Parliament sessions have been unusually secretive",
            "Crystal corruption is spreading to new areas",
            "Ancient artifacts are surfacing in the markets"
        ];
        
        const selectedRumors = this.randomSample(rumors, 3);
        
        this.displayQuickResult("Random Rumors", {
            rumor1: selectedRumors[0],
            rumor2: selectedRumors[1],
            rumor3: selectedRumors[2],
            source: "Tavern gossip, market chatter, or overheard conversations"
        });
    }
    
    displayNPC(npc) {
        const html = `
            <div class="generated-item">
                <div class="item-header">🧙‍♀️ ${npc.name}</div>
                <div class="item-detail"><strong>Title:</strong> ${npc.title}</div>
                <div class="item-detail"><strong>Faction:</strong> ${npc.faction}</div>
                <div class="item-detail"><strong>Realm:</strong> ${npc.realm}</div>
                <div class="item-detail"><strong>Appearance:</strong> ${npc.appearance}</div>
                <div class="item-detail"><strong>Personality:</strong> ${npc.personality}</div>
                <div class="item-detail"><strong>Motivation:</strong> ${npc.motivation}</div>
                <div class="item-detail"><strong>Secret:</strong> ${npc.secret}</div>
                <div class="item-detail"><strong>Challenge Rating:</strong> ${npc.challengeRating}</div>
                <div class="item-detail"><strong>Abilities:</strong> ${npc.abilities.join(', ')}</div>
                <div class="item-detail"><strong>Equipment:</strong> ${npc.equipment.join(', ')}</div>
            </div>
        `;
        
        this.outputElement.innerHTML = html;
        this.currentGeneration = { type: 'npc', data: npc };
        this.enableExport();
    }
    
    displayEncounter(encounter) {
        const html = `
            <div class="generated-item">
                <div class="item-header">⚔️ ${encounter.name}</div>
                <div class="item-detail"><strong>Type:</strong> ${encounter.type}</div>
                <div class="item-detail"><strong>Difficulty:</strong> ${encounter.difficulty}</div>
                <div class="item-detail"><strong>Level Range:</strong> ${encounter.levelRange}</div>
                <div class="item-detail"><strong>Environment:</strong> ${encounter.environment}</div>
                <div class="item-detail"><strong>Realm:</strong> ${encounter.realm}</div>
                <div class="item-detail"><strong>Creatures:</strong> ${encounter.creatures.join(', ')}</div>
                <div class="item-detail"><strong>Tactics:</strong> ${encounter.tactics}</div>
                <div class="item-detail"><strong>Treasure:</strong> ${encounter.treasure.join(', ')}</div>
                <div class="item-detail"><strong>Story Hooks:</strong> ${encounter.hooks.join('; ')}</div>
            </div>
        `;
        
        this.outputElement.innerHTML = html;
        this.currentGeneration = { type: 'encounter', data: encounter };
        this.enableExport();
    }
    
    displayLoot(item) {
        const html = `
            <div class="generated-item">
                <div class="item-header">💎 ${item.name}</div>
                <div class="item-detail"><strong>Type:</strong> ${item.type}</div>
                <div class="item-detail"><strong>Rarity:</strong> ${item.rarity}</div>
                <div class="item-detail"><strong>Value:</strong> ${item.value} gold pieces</div>
                <div class="item-detail"><strong>Realm:</strong> ${item.realmSpecific}</div>
                <div class="item-detail"><strong>Description:</strong> ${item.description}</div>
                <div class="item-detail"><strong>Properties:</strong> ${item.properties.join(', ')}</div>
            </div>
        `;
        
        this.outputElement.innerHTML = html;
        this.currentGeneration = { type: 'loot', data: item };
        this.enableExport();
    }
    
    displayBatch(results) {
        let html = `<div class="item-header">📋 Batch Generation (${results.length} items)</div>`;
        
        results.forEach((item, index) => {
            html += `
                <div class="generated-item" style="margin: 10px 0; padding: 10px;">
                    <strong>${index + 1}. ${item.type}: ${item.name}</strong><br>
            `;
            
            if (item.type === "NPC") {
                html += `Title: ${item.title}, Faction: ${item.faction}`;
            } else if (item.type === "Encounter") {
                html += `Difficulty: ${item.difficulty}, Creatures: ${item.creatures.join(', ')}`;
            } else if (item.type === "Loot") {
                html += `Rarity: ${item.rarity}, Value: ${item.value} gp`;
            }
            
            html += `</div>`;
        });
        
        this.outputElement.innerHTML = html;
        this.currentGeneration = { type: 'batch', data: results };
        this.enableExport();
    }
    
    displayQuickResult(title, data) {
        let html = `<div class="generated-item">
                      <div class="item-header">🎯 ${title}</div>`;
        
        Object.entries(data).forEach(([key, value]) => {
            const label = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            html += `<div class="item-detail"><strong>${label}:</strong> ${value}</div>`;
        });
        
        html += `</div>`;
        
        this.outputElement.innerHTML = html;
        this.currentGeneration = { type: 'quick', title: title, data: data };
        this.enableExport();
    }
    
    enableExport() {
        const exportButton = document.querySelector('.export-button');
        exportButton.disabled = false;
    }
    
    exportToMarkdown() {
        if (!this.currentGeneration) {
            alert("No content to export!");
            return;
        }
        
        let markdown = "";
        const timestamp = new Date().toISOString();
        
        if (this.currentGeneration.type === 'npc') {
            const npc = this.currentGeneration.data;
            const safeName = npc.name.replace(/[^\w\s-]/g, '').replace(/\s+/g, '_');
            
            markdown = `---
created: '${new Date().toISOString().split('T')[0]}'
status: generated
tags:
- generated
- npc
- ${npc.realm.toLowerCase()}
- ${npc.faction.toLowerCase().replace(/\s+/g, '-')}
type: People
world: ${npc.realm}
updated: '${timestamp}'
---

# ${npc.name}

## Basic Information
- **Title**: ${npc.title}
- **Faction**: [[${npc.faction}]]
- **Realm**: ${npc.realm}
- **Challenge Rating**: ${npc.challengeRating}

## Physical Description
${npc.appearance}

## Personality & Motivation
**Personality**: ${npc.personality}
**Primary Motivation**: ${npc.motivation}

## Background & Secrets
**Secret**: ${npc.secret}

## Abilities
${npc.abilities.map(ability => `- ${ability}`).join('\n')}

## Equipment
${npc.equipment.map(item => `- ${item}`).join('\n')}

## Relationships
*To be developed through play*

## Plot Hooks
- Investigate their connection to ${npc.faction}
- Uncover the truth behind their secret
- Leverage their motivation for party goals

## GM Notes
*Generated NPC - expand as needed for campaign use*
`;
            
            this.downloadMarkdown(markdown, `${safeName}.md`);
        } 
        // Add other export types as needed
        else {
            // Simple text export for other types
            markdown = `# Generated Content\n\nGenerated on: ${timestamp}\n\n${this.outputElement.textContent}`;
            this.downloadMarkdown(markdown, 'generated_content.md');
        }
    }
    
    downloadMarkdown(content, filename) {
        const blob = new Blob([content], { type: 'text/markdown' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
    
    clearOutput() {
        this.outputElement.innerHTML = `
            <p>Generated content will appear here...</p>
            <p>Select a generator above and click to begin!</p>
        `;
        this.currentGeneration = null;
        const exportButton = document.querySelector('.export-button');
        exportButton.disabled = true;
    }
}

// Initialize the interface when DOM is ready
let rgi;
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        rgi = new RandomGeneratorInterface();
    });
} else {
    rgi = new RandomGeneratorInterface();
}

// Export for use in other contexts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = RandomGeneratorInterface;
}