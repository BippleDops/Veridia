#!/usr/bin/env node

/**
 * ADVANCED PROMPT SYSTEM - August 2025
 * ====================================
 * State-of-the-art prompt engineering with latest techniques
 */

class AdvancedPromptSystem {
  constructor() {
    // Latest prompt engineering techniques (Aug 2025)
    this.techniques = {
      // Prompt structure optimization
      structuredPrompting: true,
      semanticLayering: true,
      contextualAnchoring: true,
      dynamicWeighting: true,
      
      // Quality enhancers
      detailAmplification: true,
      styleConsistency: true,
      moodAlignment: true,
      
      // Advanced techniques
      promptChaining: true,
      negativeGuidance: true,
      aspectRatioOptimization: true,
      tokenEfficiency: true
    };

    // Enhanced style library with 2025 best practices
    this.styleLibrary = {
      portrait: {
        base: "masterpiece portrait, character design, concept art",
        detail: "intricate details, sharp focus, professional lighting, subsurface scattering",
        style: "trending on artstation, by greg rutkowski and alphonse mucha",
        technical: "8k uhd, dslr, soft lighting, high quality, film grain, Fujifilm XT3",
        enhancement: "(best quality:1.4), (masterpiece:1.4), detailed skin texture, detailed cloth texture",
        negative: "BadDream, UnrealisticDream, bad-hands-5, easynegative, verybadimagenegative_v1.3"
      },
      
      location: {
        base: "establishing shot, environmental concept art, matte painting",
        detail: "atmospheric perspective, volumetric fog, ray tracing, global illumination",
        style: "by andreas rocha and james gurney, fantasy landscape",
        technical: "octane render, unreal engine 5, photorealistic, 8k resolution",
        enhancement: "(wide angle:1.2), cinematic composition, golden ratio",
        negative: "blurry, low quality, oversaturated, flat lighting, 2d, cartoon"
      },
      
      item: {
        base: "game asset, item showcase, hero prop, artifact design",
        detail: "pbr textures, studio lighting, turntable presentation",
        style: "fantasy rpg style, magical item, detailed ornaments",
        technical: "substance painter, keyshot render, product photography",
        enhancement: "centered composition, (glowing:0.8), enchanted, pristine condition",
        negative: "low poly, bad topology, stretched uvs, amateur 3d"
      },
      
      creature: {
        base: "creature concept, monster design, bestiary illustration",
        detail: "anatomically coherent, dynamic pose, intimidating presence",
        style: "dark fantasy, by wayne barlowe and h.r. giger",
        technical: "zbrush sculpt, detailed textures, cinematic lighting",
        enhancement: "(ferocious:1.2), (detailed scales/fur/skin:1.3), action shot",
        negative: "cute, chibi, cartoon, friendly, low detail"
      },
      
      scene: {
        base: "narrative illustration, storyboard art, key frame",
        detail: "dynamic composition, multiple focal points, environmental storytelling",
        style: "cinematic, epic fantasy, by marc simonetti",
        technical: "digital painting, photobash, color grading",
        enhancement: "dramatic lighting, (epic scale:1.3), atmospheric",
        negative: "static, boring composition, no story"
      }
    };

    // Campaign-specific style modifiers (Aug 2025 enhanced)
    this.campaignStyles = {
      aquabyssos: {
        modifiers: "underwater, bioluminescent, deep sea, pressure",
        palette: "(teal and purple color scheme:1.2), caustics, bubbles",
        atmosphere: "mysterious depths, ancient underwater civilization",
        technical: "subsurface scattering, volumetric water",
        special: "abyssal creatures, coral architecture, pressure suits"
      },
      
      aethermoor: {
        modifiers: "steampunk, Victorian, floating islands, airships",
        palette: "(brass and copper:1.1), steam, clouds, golden hour",
        atmosphere: "adventure, sky pirates, clockwork mechanisms",
        technical: "mechanical details, gear systems, steam effects",
        special: "ornithopters, sky whales, floating cities"
      },
      
      voidtouched: {
        modifiers: "eldritch horror, cosmic void, corruption",
        palette: "(purple and black:1.3), void energy, tentacles",
        atmosphere: "otherworldly, sanity-breaking, incomprehensible",
        technical: "non-euclidean geometry, reality distortion",
        special: "void portals, corrupted flesh, psychic emanations"
      }
    };

    // Advanced prompt templates
    this.templates = {
      character: {
        structure: "[SUBJECT], [POSE/ACTION], [CLOTHING/ARMOR], [EXPRESSION], [BACKGROUND]",
        quality: "[DETAIL_LEVEL], [STYLE_REFERENCE], [LIGHTING], [TECHNICAL_SPECS]",
        enhancement: "[FOCAL_POINT], [MOOD], [COLOR_HARMONY]"
      },
      
      environment: {
        structure: "[LOCATION_TYPE], [TIME_OF_DAY], [WEATHER], [ARCHITECTURAL_STYLE]",
        quality: "[ATMOSPHERE], [SCALE], [DETAIL_AREAS], [LIGHTING_SETUP]",
        enhancement: "[COMPOSITION_RULE], [DEPTH_LAYERS], [VISUAL_FLOW]"
      }
    };

    // Token optimization patterns
    this.tokenPatterns = {
      emphasis: {
        high: "(keyword:1.3)",
        medium: "(keyword:1.1)", 
        low: "(keyword:0.8)"
      },
      
      alternation: "[option1|option2|option3]",
      
      nesting: "((very detailed:1.2) face:1.1)",
      
      ordering: "subject first, then modifiers, then quality, then style"
    };
  }

  /**
   * Generate advanced prompt with all optimizations
   */
  generateAdvancedPrompt(context) {
    const { title, type, description, tags, campaign } = context;
    
    // Start with structured base
    let promptComponents = {
      subject: this.extractSubject(title, description),
      style: this.selectStyle(type),
      campaign: this.applyCampaignStyle(campaign || this.detectCampaign(context)),
      quality: this.buildQualityLayer(type),
      details: this.extractDetails(description),
      enhancement: this.addEnhancements(type, tags),
      technical: this.getTechnicalSpecs(type)
    };
    
    // Build layered prompt
    const prompt = this.buildLayeredPrompt(promptComponents);
    const negative = this.buildNegativePrompt(type, promptComponents);
    
    // Optimize tokens
    const optimized = this.optimizeTokens(prompt);
    
    return {
      prompt: optimized.prompt,
      negative: optimized.negative || negative,
      settings: this.getOptimalSettings(type, context),
      workflow: this.selectWorkflow(type, context)
    };
  }

  /**
   * Build layered prompt with proper structure
   */
  buildLayeredPrompt(components) {
    const layers = [];
    
    // Layer 1: Core subject (highest weight)
    layers.push(`(${components.subject}:1.3)`);
    
    // Layer 2: Style and campaign
    if (components.campaign) {
      layers.push(components.campaign.modifiers);
      layers.push(components.campaign.palette);
    }
    layers.push(components.style.base);
    
    // Layer 3: Details and quality
    layers.push(components.details);
    layers.push(components.quality);
    
    // Layer 4: Technical and enhancement
    layers.push(components.technical);
    layers.push(components.enhancement);
    
    // Layer 5: Style references
    layers.push(components.style.style);
    
    return layers.filter(l => l).join(', ');
  }

  /**
   * Extract intelligent subject from context
   */
  extractSubject(title, description) {
    // Clean title
    let subject = title.replace(/_/g, ' ').toLowerCase();
    
    // Enhance based on description keywords
    const keywords = this.extractKeywords(description);
    
    // Add descriptive modifiers
    if (keywords.includes('captain')) subject = `${subject}, ship captain, naval uniform`;
    if (keywords.includes('wizard')) subject = `${subject}, arcane robes, magical staff`;
    if (keywords.includes('ancient')) subject = `ancient ${subject}, weathered, mysterious`;
    if (keywords.includes('corrupted')) subject = `corrupted ${subject}, void-touched`;
    
    return subject;
  }

  /**
   * Extract keywords intelligently
   */
  extractKeywords(text) {
    const important = [
      'ancient', 'corrupted', 'magical', 'divine', 'cursed',
      'captain', 'wizard', 'warrior', 'merchant', 'noble',
      'underwater', 'floating', 'crystal', 'void', 'shadow'
    ];
    
    return important.filter(word => 
      text.toLowerCase().includes(word)
    );
  }

  /**
   * Detect campaign from context
   */
  detectCampaign(context) {
    const { filePath, description, tags } = context;
    const combined = `${filePath} ${description} ${tags.join(' ')}`.toLowerCase();
    
    if (combined.includes('aquabyssos') || combined.includes('underwater')) {
      return 'aquabyssos';
    }
    if (combined.includes('aethermoor') || combined.includes('airship')) {
      return 'aethermoor';
    }
    if (combined.includes('void') || combined.includes('corrupted')) {
      return 'voidtouched';
    }
    
    return null;
  }

  /**
   * Select optimal style
   */
  selectStyle(type) {
    return this.styleLibrary[type] || this.styleLibrary.scene;
  }

  /**
   * Apply campaign-specific styling
   */
  applyCampaignStyle(campaign) {
    return this.campaignStyles[campaign] || null;
  }

  /**
   * Build quality layer
   */
  buildQualityLayer(type) {
    const style = this.styleLibrary[type];
    return `${style.detail}, ${style.technical}, ${style.enhancement}`;
  }

  /**
   * Extract and enhance details
   */
  extractDetails(description) {
    const details = [];
    
    // Environmental details
    if (description.includes('temple')) details.push('temple architecture, sacred geometry');
    if (description.includes('market')) details.push('bustling marketplace, merchant stalls');
    if (description.includes('forest')) details.push('dense foliage, dappled sunlight');
    
    // Character details
    if (description.includes('battle')) details.push('battle-scarred, weathered armor');
    if (description.includes('noble')) details.push('fine clothing, regal bearing');
    if (description.includes('scholar')) details.push('books, scrolls, scholarly robes');
    
    return details.join(', ');
  }

  /**
   * Add enhancements based on context
   */
  addEnhancements(type, tags) {
    const enhancements = [];
    
    // Tag-based enhancements
    if (tags.includes('epic')) enhancements.push('(epic scale:1.2)');
    if (tags.includes('magical')) enhancements.push('(magical aura:1.1)');
    if (tags.includes('dark')) enhancements.push('(dark atmosphere:1.2)');
    
    // Type-based enhancements
    const style = this.styleLibrary[type];
    if (style && style.enhancement) {
      enhancements.push(style.enhancement);
    }
    
    return enhancements.join(', ');
  }

  /**
   * Get technical specifications
   */
  getTechnicalSpecs(type) {
    const style = this.styleLibrary[type];
    return style ? style.technical : '8k, high quality';
  }

  /**
   * Build comprehensive negative prompt
   */
  buildNegativePrompt(type, components) {
    const style = this.styleLibrary[type];
    const baseNegative = style ? style.negative : 'low quality, blurry';
    
    // Add context-specific negatives
    const contextNegatives = [];
    
    if (type === 'portrait') {
      contextNegatives.push('bad anatomy, extra limbs, malformed');
    }
    if (type === 'location') {
      contextNegatives.push('flat perspective, no depth');
    }
    
    return [baseNegative, ...contextNegatives].join(', ');
  }

  /**
   * Optimize tokens for efficiency
   */
  optimizeTokens(prompt) {
    // Remove redundancies
    let optimized = prompt
      .split(', ')
      .filter((item, index, self) => self.indexOf(item) === index)
      .join(', ');
    
    // Apply token patterns
    optimized = optimized.replace(/very\s+/g, '(');
    optimized = optimized.replace(/\s+style/g, ':1.1) style');
    
    // Ensure proper weighting syntax
    optimized = optimized.replace(/\(([^:)]+)\)/g, '($1:1.1)');
    
    return {
      prompt: optimized,
      tokenCount: optimized.split(/\s+/).length
    };
  }

  /**
   * Get optimal generation settings
   */
  getOptimalSettings(type, context) {
    const baseSettings = {
      portrait: { width: 768, height: 1024, steps: 20, cfg: 7 },
      location: { width: 1024, height: 768, steps: 25, cfg: 8 },
      item: { width: 768, height: 768, steps: 20, cfg: 7 },
      creature: { width: 896, height: 896, steps: 25, cfg: 7.5 },
      scene: { width: 1024, height: 768, steps: 30, cfg: 8 }
    };
    
    const settings = baseSettings[type] || baseSettings.scene;
    
    // Adjust for turbo mode
    if (context.turboMode) {
      settings.steps = 4;
      settings.cfg = 1.0;
    }
    
    return settings;
  }

  /**
   * Select optimal workflow
   */
  selectWorkflow(type, context) {
    if (context.turboMode) return 'turbo';
    if (type === 'portrait') return 'portrait_optimized';
    if (type === 'location') return 'environment_hdr';
    return 'standard_quality';
  }
}

module.exports = AdvancedPromptSystem;
