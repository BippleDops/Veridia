#!/usr/bin/env node

/**
 * ENHANCED PROMPT GENERATOR
 * ========================
 * Generates nuanced, context-aware prompts for asset generation
 * Based on best practices from ComfyUI and Stable Diffusion communities
 */

class EnhancedPromptGenerator {
  constructor() {
    // Style presets for different asset types
    this.stylePresets = {
      portrait: {
        base: "highly detailed portrait, professional digital art, concept art, artstation quality",
        lighting: "dramatic lighting, rim lighting, volumetric lighting",
        quality: "8k resolution, hyperdetailed, masterpiece, award winning",
        negative: "blurry, low quality, amateur, distorted face, extra limbs, bad anatomy, poorly drawn"
      },
      location: {
        base: "environmental concept art, matte painting, establishing shot",
        lighting: "atmospheric lighting, golden hour, cinematic composition",
        quality: "ultra wide angle, photorealistic, octane render, unreal engine 5",
        negative: "low resolution, jpeg artifacts, oversaturated, flat lighting, amateur photography"
      },
      item: {
        base: "game asset, item showcase, centered composition, studio lighting",
        lighting: "product photography lighting, clean background, soft shadows",
        quality: "high detail, 4k texture, pbr materials, game ready",
        negative: "blurry, pixelated, low poly, stretched textures, amateur 3d"
      },
      creature: {
        base: "creature design, monster concept art, fantasy bestiary illustration",
        lighting: "dramatic pose, dynamic lighting, action shot",
        quality: "detailed anatomy, professional concept art, zbrush sculpt quality",
        negative: "cartoon, chibi, cute, low detail, amateur drawing, bad proportions"
      },
      scene: {
        base: "cinematic scene, storyboard art, narrative illustration",
        lighting: "mood lighting, atmospheric perspective, depth of field",
        quality: "epic composition, movie still quality, professional illustration",
        negative: "flat composition, no depth, amateur, cluttered, confusing perspective"
      }
    };

    // Theme modifiers based on campaign setting
    this.themeModifiers = {
      aquabyssos: {
        style: "underwater, bioluminescent, deep sea, abyssal, aquatic",
        palette: "deep blues, teal, purple, ethereal glow, underwater caustics",
        atmosphere: "mysterious, pressure, ancient, submerged civilization"
      },
      aethermoor: {
        style: "steampunk, Victorian, floating islands, airships, clockwork",
        palette: "brass, copper, sky blue, clouds, steam, golden sunlight",
        atmosphere: "adventurous, vertical cities, sky pirates, mechanical"
      },
      horror: {
        style: "cosmic horror, eldritch, lovecraftian, disturbing, otherworldly",
        palette: "dark, muted colors, sickly greens, deep purples, shadows",
        atmosphere: "unsettling, incomprehensible, ancient evil, madness"
      },
      fantasy: {
        style: "high fantasy, medieval, magical, enchanted",
        palette: "vibrant, natural colors, magical auras, mystical lighting",
        atmosphere: "epic, heroic, mystical, ancient magic"
      }
    };

    // Faction-specific styles
    this.factionStyles = {
      "Parliament of Shadows": "dark council chamber, shadowy figures, gothic architecture, purple and black",
      "Crystal Resonance Guild": "crystalline structures, prismatic light, geometric patterns, ethereal glow",
      "Void Touched": "corrupted, dark energy, tentacles, void portals, purple corruption",
      "Pressure Clans": "deep sea adapted, armored suits, pressure resistant, industrial underwater",
      "Leviathan Cults": "massive sea creatures, religious iconography, underwater temples, ancient worship",
      "Aboleth Dominion": "psychic tentacles, mind control, ancient alien, underwater horror"
    };
  }

  /**
   * Generate a nuanced prompt based on context
   */
  generatePrompt(context) {
    const { title, description, tags, type, filePath } = context;
    
    // Determine asset type and theme
    const assetType = this.determineAssetType(type, filePath);
    const theme = this.determineTheme(filePath, tags);
    const faction = this.extractFaction(title, description, tags);
    
    // Build prompt components
    const components = [];
    
    // 1. Main subject (enhanced title)
    components.push(this.enhanceSubject(title, assetType, description));
    
    // 2. Style preset
    if (this.stylePresets[assetType]) {
      components.push(this.stylePresets[assetType].base);
    }
    
    // 3. Theme modifiers
    if (this.themeModifiers[theme]) {
      components.push(this.themeModifiers[theme].style);
      components.push(this.themeModifiers[theme].palette);
    }
    
    // 4. Faction style (if applicable)
    if (faction && this.factionStyles[faction]) {
      components.push(this.factionStyles[faction]);
    }
    
    // 5. Context from description
    const contextKeywords = this.extractKeywords(description);
    if (contextKeywords.length > 0) {
      components.push(contextKeywords.join(', '));
    }
    
    // 6. Lighting and quality
    if (this.stylePresets[assetType]) {
      components.push(this.stylePresets[assetType].lighting);
      components.push(this.stylePresets[assetType].quality);
    }
    
    // Build final prompt
    const prompt = components.filter(c => c).join(', ');
    const negative = this.stylePresets[assetType]?.negative || "low quality, amateur, blurry";
    
    return {
      prompt: this.cleanPrompt(prompt),
      negative: negative,
      settings: this.getOptimalSettings(assetType)
    };
  }

  /**
   * Enhance the subject based on type
   */
  enhanceSubject(title, type, description) {
    // Remove file-system artifacts
    let enhanced = title
      .replace(/_/g, ' ')
      .replace(/\b[A-Z]/g, match => match.toLowerCase())
      .replace(/^\w/, match => match.toUpperCase());
    
    // Add type-specific enhancements
    switch (type) {
      case 'portrait':
        if (!enhanced.includes('portrait')) {
          enhanced = `portrait of ${enhanced}`;
        }
        // Add character descriptors from description
        if (description.includes('captain')) enhanced += ', ship captain, naval uniform';
        if (description.includes('wizard')) enhanced += ', wizard robes, magical aura';
        if (description.includes('merchant')) enhanced += ', wealthy merchant, fine clothes';
        if (description.includes('warrior')) enhanced += ', battle-worn armor, weapons';
        break;
        
      case 'location':
        // Add environmental context
        if (description.includes('underwater')) enhanced += ', underwater environment';
        if (description.includes('temple')) enhanced += ', ancient temple architecture';
        if (description.includes('city')) enhanced += ', cityscape, urban environment';
        if (description.includes('cave')) enhanced += ', cavern system, underground';
        break;
        
      case 'item':
        if (!enhanced.includes('item') && !enhanced.includes('artifact')) {
          enhanced = `magical ${enhanced} artifact`;
        }
        break;
        
      case 'creature':
        if (!enhanced.includes('creature') && !enhanced.includes('monster')) {
          enhanced = `${enhanced} creature`;
        }
        break;
    }
    
    return enhanced;
  }

  /**
   * Determine asset type from context
   */
  determineAssetType(type, filePath) {
    if (type) return type === 'character' ? 'portrait' : type;
    
    // Fallback to path analysis
    if (filePath.includes('/People/') || filePath.includes('/NPC')) return 'portrait';
    if (filePath.includes('/Places/') || filePath.includes('/Locations/')) return 'location';
    if (filePath.includes('/Items/') || filePath.includes('/Equipment/')) return 'item';
    if (filePath.includes('/Creatures/') || filePath.includes('/Monsters/')) return 'creature';
    if (filePath.includes('/Adventures/') || filePath.includes('/Scenes/')) return 'scene';
    
    return 'scene'; // default
  }

  /**
   * Determine theme from context
   */
  determineTheme(filePath, tags) {
    const pathLower = filePath.toLowerCase();
    
    if (pathLower.includes('aquabyssos') || tags.includes('underwater')) return 'aquabyssos';
    if (pathLower.includes('aethermoor') || tags.includes('airship')) return 'aethermoor';
    if (pathLower.includes('horror') || tags.includes('eldritch')) return 'horror';
    
    return 'fantasy'; // default
  }

  /**
   * Extract faction from context
   */
  extractFaction(title, description, tags) {
    const allText = `${title} ${description} ${tags.join(' ')}`.toLowerCase();
    
    for (const faction of Object.keys(this.factionStyles)) {
      if (allText.includes(faction.toLowerCase())) {
        return faction;
      }
    }
    
    return null;
  }

  /**
   * Extract keywords from description
   */
  extractKeywords(description) {
    const keywords = [];
    
    // Environmental keywords
    const envKeywords = ['underwater', 'floating', 'crystal', 'void', 'shadow', 'ancient', 'ruined'];
    envKeywords.forEach(keyword => {
      if (description.toLowerCase().includes(keyword)) {
        keywords.push(keyword);
      }
    });
    
    // Mood keywords
    const moodKeywords = ['mysterious', 'ominous', 'majestic', 'corrupted', 'ethereal', 'dark'];
    moodKeywords.forEach(keyword => {
      if (description.toLowerCase().includes(keyword)) {
        keywords.push(keyword);
      }
    });
    
    return keywords.slice(0, 3); // Limit to avoid prompt dilution
  }

  /**
   * Get optimal generation settings for asset type
   */
  getOptimalSettings(type) {
    const settings = {
      portrait: { width: 512, height: 768, steps: 25, cfg: 7.5 },
      location: { width: 768, height: 512, steps: 30, cfg: 8 },
      item: { width: 512, height: 512, steps: 20, cfg: 7 },
      creature: { width: 640, height: 640, steps: 25, cfg: 7.5 },
      scene: { width: 768, height: 512, steps: 30, cfg: 8 }
    };
    
    return settings[type] || { width: 512, height: 512, steps: 20, cfg: 7 };
  }

  /**
   * Clean and optimize prompt
   */
  cleanPrompt(prompt) {
    return prompt
      .replace(/,\s+,/g, ',') // Remove double commas
      .replace(/\s+/g, ' ') // Normalize whitespace
      .replace(/,\s*$/, '') // Remove trailing comma
      .substring(0, 500); // Limit length for optimal generation
  }
}

module.exports = EnhancedPromptGenerator;

// CLI usage
if (require.main === module) {
  const generator = new EnhancedPromptGenerator();
  
  // Example usage
  const context = {
    title: "Admiral_Thorne_Blackwater",
    description: "A seasoned naval commander of the Aquabyssos fleet, known for his tactical brilliance",
    tags: ["npc", "aquabyssos", "military"],
    type: "character",
    filePath: "/02_Worldbuilding/People/Admiral_Thorne_Blackwater.md"
  };
  
  const result = generator.generatePrompt(context);
  console.log("Generated Prompt:", result.prompt);
  console.log("Negative Prompt:", result.negative);
  console.log("Settings:", result.settings);
}
