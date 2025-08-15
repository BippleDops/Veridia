#!/usr/bin/env node

/**
 * ADVANCED SVG REPLACER - August 2025
 * ===================================
 * Replaces all SVG files in the vault with context-aware,
 * beautifully designed vector graphics
 */

const fs = require('fs');
const path = require('path');

class AdvancedSVGReplacer {
  constructor() {
    // SVG design themes
    this.themes = {
      aquabyssos: {
        colors: ['#0066CC', '#003D7A', '#00A3E0', '#004C99', '#1E90FF'],
        gradients: {
          ocean: ['#001F3F', '#003D7A', '#0066CC'],
          depth: ['#000033', '#001F3F', '#003366'],
          coral: ['#FF6B6B', '#FF8E53', '#FE6B8B']
        },
        patterns: ['waves', 'bubbles', 'scales', 'currents'],
        elements: ['water', 'fish', 'coral', 'shells', 'tentacles']
      },
      
      aethermoor: {
        colors: ['#87CEEB', '#FFD700', '#F0E68C', '#B8860B', '#DAA520'],
        gradients: {
          sky: ['#87CEEB', '#98D8E8', '#B0E0E6'],
          sunset: ['#FF6B6B', '#FFD93D', '#6BCB77'],
          brass: ['#B8860B', '#DAA520', '#FFD700']
        },
        patterns: ['clouds', 'gears', 'steam', 'propellers'],
        elements: ['airships', 'clockwork', 'wings', 'compass', 'telescope']
      },
      
      void: {
        colors: ['#1A0033', '#330066', '#4B0082', '#6A0DAD', '#8B008B'],
        gradients: {
          void: ['#000000', '#1A0033', '#330066'],
          corruption: ['#4B0082', '#6A0DAD', '#8B008B'],
          madness: ['#8B008B', '#9400D3', '#9932CC']
        },
        patterns: ['fractals', 'tentacles', 'eyes', 'distortion'],
        elements: ['portals', 'shadows', 'whispers', 'chaos', 'stars']
      },
      
      forest: {
        colors: ['#228B22', '#32CD32', '#00FF00', '#006400', '#8FBC8F'],
        gradients: {
          canopy: ['#006400', '#228B22', '#32CD32'],
          moss: ['#8FBC8F', '#9ACD32', '#ADFF2F'],
          bark: ['#8B4513', '#A0522D', '#D2691E']
        },
        patterns: ['leaves', 'branches', 'roots', 'vines'],
        elements: ['trees', 'flowers', 'mushrooms', 'animals', 'paths']
      },
      
      dungeon: {
        colors: ['#696969', '#808080', '#A9A9A9', '#2F4F4F', '#708090'],
        gradients: {
          stone: ['#2F4F4F', '#696969', '#808080'],
          shadow: ['#000000', '#1C1C1C', '#363636'],
          torch: ['#FF4500', '#FF6347', '#FF7F50']
        },
        patterns: ['bricks', 'cracks', 'moss', 'chains'],
        elements: ['doors', 'traps', 'treasures', 'monsters', 'torches']
      }
    };
    
    // SVG generation templates
    this.templates = {
      map: this.generateMapSVG.bind(this),
      icon: this.generateIconSVG.bind(this),
      portrait: this.generatePortraitSVG.bind(this),
      item: this.generateItemSVG.bind(this),
      location: this.generateLocationSVG.bind(this),
      banner: this.generateBannerSVG.bind(this),
      diagram: this.generateDiagramSVG.bind(this)
    };
    
    // Advanced SVG effects
    this.effects = {
      glow: (id, color) => `
        <filter id="${id}">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>`,
      
      shadow: (id) => `
        <filter id="${id}">
          <feDropShadow dx="2" dy="2" stdDeviation="3" flood-opacity="0.3"/>
        </filter>`,
      
      texture: (id, type) => `
        <filter id="${id}">
          <feTurbulence type="${type}" baseFrequency="0.02" numOctaves="3" result="turbulence"/>
          <feComposite in="turbulence" in2="SourceGraphic" operator="multiply"/>
        </filter>`,
      
      gradient: (id, colors) => `
        <linearGradient id="${id}" x1="0%" y1="0%" x2="100%" y2="100%">
          ${colors.map((c, i) => 
            `<stop offset="${i * 100 / (colors.length - 1)}%" stop-color="${c}"/>`
          ).join('')}
        </linearGradient>`
    };
  }

  /**
   * Replace all SVGs in the vault
   */
  async replaceAllSVGs() {
    console.log('🎨 ADVANCED SVG REPLACER');
    console.log('========================');
    console.log('Finding all SVG files...\n');
    
    // Find all SVG files
    const svgFiles = await this.findAllSVGs();
    console.log(`Found ${svgFiles.length} SVG files to replace\n`);
    
    // Process in batches
    const batchSize = 50;
    let replaced = 0;
    
    for (let i = 0; i < svgFiles.length; i += batchSize) {
      const batch = svgFiles.slice(i, i + batchSize);
      console.log(`\nProcessing batch ${Math.floor(i/batchSize) + 1}/${Math.ceil(svgFiles.length/batchSize)}...`);
      
      for (const svgPath of batch) {
        try {
          await this.replaceSVG(svgPath);
          replaced++;
          
          if (replaced % 10 === 0) {
            console.log(`  Progress: ${replaced}/${svgFiles.length} SVGs replaced`);
          }
        } catch (error) {
          console.error(`  Failed ${svgPath}: ${error.message}`);
        }
        
        // Small delay to prevent system overload
        await new Promise(r => setTimeout(r, 100));
      }
      
      // Pause between batches
      console.log(`  Batch complete. Pausing...`);
      await new Promise(r => setTimeout(r, 2000));
    }
    
    console.log(`\n✅ Replaced ${replaced} SVG files!`);
    
    // Generate report
    await this.generateReport(svgFiles, replaced);
  }

  /**
   * Find all SVG files
   */
  async findAllSVGs() {
    const svgFiles = [];
    
    const scanDir = (dir) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        
        if (entry.isDirectory() && !entry.name.startsWith('.') && 
            entry.name !== 'node_modules' && !fullPath.includes('.obsidian')) {
          scanDir(fullPath);
        } else if (entry.name.endsWith('.svg')) {
          svgFiles.push(fullPath);
        }
      }
    };
    
    scanDir(process.cwd());
    return svgFiles;
  }

  /**
   * Replace a single SVG
   */
  async replaceSVG(svgPath) {
    // Analyze context
    const context = this.analyzeContext(svgPath);
    
    // Generate new SVG
    const newSVG = this.generateSVG(context);
    
    // Backup original
    const backupPath = svgPath + '.backup';
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(svgPath, backupPath);
    }
    
    // Write new SVG
    fs.writeFileSync(svgPath, newSVG);
  }

  /**
   * Analyze SVG context
   */
  analyzeContext(svgPath) {
    const fileName = path.basename(svgPath, '.svg');
    const dirName = path.dirname(svgPath);
    
    // Detect type
    let type = 'generic';
    if (fileName.includes('map-')) type = 'map';
    else if (fileName.includes('icon-')) type = 'icon';
    else if (fileName.includes('portrait-')) type = 'portrait';
    else if (fileName.includes('item-')) type = 'item';
    else if (fileName.includes('location-')) type = 'location';
    else if (fileName.includes('banner-')) type = 'banner';
    else if (dirName.includes('Maps')) type = 'map';
    else if (dirName.includes('Portraits')) type = 'portrait';
    else if (dirName.includes('items')) type = 'item';
    
    // Detect theme
    let theme = 'dungeon'; // default
    const fileNameLower = fileName.toLowerCase();
    const dirNameLower = dirName.toLowerCase();
    
    if (fileNameLower.includes('aqua') || fileNameLower.includes('water') || 
        fileNameLower.includes('ocean') || fileNameLower.includes('underwater')) {
      theme = 'aquabyssos';
    } else if (fileNameLower.includes('aether') || fileNameLower.includes('air') || 
               fileNameLower.includes('sky') || fileNameLower.includes('float')) {
      theme = 'aethermoor';
    } else if (fileNameLower.includes('void') || fileNameLower.includes('shadow') || 
               fileNameLower.includes('dark')) {
      theme = 'void';
    } else if (fileNameLower.includes('forest') || fileNameLower.includes('tree') || 
               fileNameLower.includes('nature')) {
      theme = 'forest';
    }
    
    // Extract details from filename
    const parts = fileName.split('-');
    const title = parts[parts.length - 1].replace(/_/g, ' ');
    
    return {
      path: svgPath,
      fileName,
      type,
      theme,
      title,
      width: type === 'map' ? 800 : type === 'banner' ? 1200 : 400,
      height: type === 'map' ? 600 : type === 'banner' ? 300 : 400
    };
  }

  /**
   * Generate SVG based on context
   */
  generateSVG(context) {
    const { type, theme, title, width, height } = context;
    
    // Get template function
    const templateFn = this.templates[type] || this.templates.icon;
    
    // Generate SVG
    return templateFn(context);
  }

  /**
   * Generate Map SVG
   */
  generateMapSVG(context) {
    const { theme, title, width, height } = context;
    const themeData = this.themes[theme];
    
    const svg = [];
    svg.push(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Add defs
    svg.push('<defs>');
    
    // Gradients
    Object.entries(themeData.gradients).forEach(([name, colors]) => {
      svg.push(this.effects.gradient(`${theme}-${name}`, colors));
    });
    
    // Patterns
    svg.push(this.generatePattern(theme, themeData.patterns[0]));
    
    // Filters
    svg.push(this.effects.shadow('map-shadow'));
    svg.push(this.effects.glow('map-glow', themeData.colors[0]));
    
    svg.push('</defs>');
    
    // Background
    svg.push(`<rect width="${width}" height="${height}" fill="url(#${theme}-${Object.keys(themeData.gradients)[0]})"/>`);
    
    // Generate map elements
    const numRooms = 5 + Math.floor(Math.random() * 10);
    const rooms = [];
    
    for (let i = 0; i < numRooms; i++) {
      const room = {
        x: Math.random() * (width - 100) + 50,
        y: Math.random() * (height - 100) + 50,
        width: 60 + Math.random() * 120,
        height: 60 + Math.random() * 120
      };
      rooms.push(room);
      
      // Room shape
      if (Math.random() > 0.5) {
        // Rectangle room
        svg.push(`<rect x="${room.x}" y="${room.y}" width="${room.width}" height="${room.height}" 
                  fill="${themeData.colors[2]}" stroke="${themeData.colors[0]}" stroke-width="3"
                  filter="url(#map-shadow)"/>`);
      } else {
        // Circular room
        const r = Math.min(room.width, room.height) / 2;
        svg.push(`<circle cx="${room.x + room.width/2}" cy="${room.y + room.height/2}" r="${r}"
                  fill="${themeData.colors[2]}" stroke="${themeData.colors[0]}" stroke-width="3"
                  filter="url(#map-shadow)"/>`);
      }
    }
    
    // Connect rooms with corridors
    for (let i = 0; i < rooms.length - 1; i++) {
      const r1 = rooms[i];
      const r2 = rooms[i + 1];
      
      svg.push(`<path d="M ${r1.x + r1.width/2} ${r1.y + r1.height/2} 
                        L ${r2.x + r2.width/2} ${r2.y + r2.height/2}"
                stroke="${themeData.colors[1]}" stroke-width="20" fill="none"/>`);
    }
    
    // Add details
    rooms.forEach((room, i) => {
      // Door
      svg.push(`<rect x="${room.x + room.width/2 - 10}" y="${room.y - 5}" 
                width="20" height="10" fill="${themeData.colors[4]}"/>`);
      
      // Room number
      svg.push(`<text x="${room.x + room.width/2}" y="${room.y + room.height/2}" 
                text-anchor="middle" font-size="20" fill="white">${i + 1}</text>`);
    });
    
    // Title
    svg.push(`<text x="${width/2}" y="30" text-anchor="middle" font-size="24" 
              fill="${themeData.colors[0]}" filter="url(#map-glow)">${title}</text>`);
    
    // Scale
    svg.push(`<line x1="50" y1="${height - 30}" x2="150" y2="${height - 30}" 
              stroke="${themeData.colors[0]}" stroke-width="2"/>`);
    svg.push(`<text x="100" y="${height - 10}" text-anchor="middle" font-size="12" 
              fill="${themeData.colors[0]}">10 ft</text>`);
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate Icon SVG
   */
  generateIconSVG(context) {
    const { theme, title } = context;
    const themeData = this.themes[theme];
    const size = 100;
    
    const svg = [];
    svg.push(`<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Defs
    svg.push('<defs>');
    svg.push(this.effects.gradient('icon-grad', themeData.gradients[Object.keys(themeData.gradients)[0]]));
    svg.push(this.effects.glow('icon-glow', themeData.colors[0]));
    svg.push('</defs>');
    
    // Background circle
    svg.push(`<circle cx="50" cy="50" r="45" fill="url(#icon-grad)" filter="url(#icon-glow)"/>`);
    
    // Icon symbol based on theme
    const symbols = {
      aquabyssos: () => {
        // Wave symbol
        svg.push(`<path d="M 20 50 Q 35 30 50 50 T 80 50" 
                  stroke="white" stroke-width="3" fill="none"/>`);
        svg.push(`<path d="M 20 60 Q 35 40 50 60 T 80 60" 
                  stroke="white" stroke-width="3" fill="none"/>`);
      },
      aethermoor: () => {
        // Gear symbol
        const teeth = 8;
        const outerRadius = 30;
        const innerRadius = 20;
        let path = 'M ';
        
        for (let i = 0; i < teeth * 2; i++) {
          const angle = (i * Math.PI) / teeth;
          const radius = i % 2 === 0 ? outerRadius : innerRadius;
          const x = 50 + radius * Math.cos(angle);
          const y = 50 + radius * Math.sin(angle);
          path += `${x} ${y} `;
        }
        path += 'Z';
        
        svg.push(`<path d="${path}" fill="white"/>`);
        svg.push(`<circle cx="50" cy="50" r="10" fill="${themeData.colors[0]}"/>`);
      },
      void: () => {
        // Eye symbol
        svg.push(`<ellipse cx="50" cy="50" rx="30" ry="15" 
                  stroke="white" stroke-width="3" fill="none"/>`);
        svg.push(`<circle cx="50" cy="50" r="12" fill="white"/>`);
        svg.push(`<circle cx="50" cy="50" r="6" fill="${themeData.colors[0]}"/>`);
      },
      forest: () => {
        // Tree symbol
        svg.push(`<path d="M 50 70 L 50 40 M 40 50 L 50 40 L 60 50 
                  M 35 60 L 50 45 L 65 60" 
                  stroke="white" stroke-width="3" fill="none"/>`);
      },
      dungeon: () => {
        // Key symbol
        svg.push(`<circle cx="35" cy="50" r="10" stroke="white" 
                  stroke-width="3" fill="none"/>`);
        svg.push(`<line x1="45" y1="50" x2="70" y2="50" 
                  stroke="white" stroke-width="3"/>`);
        svg.push(`<line x1="65" y1="50" x2="65" y2="55" 
                  stroke="white" stroke-width="3"/>`);
        svg.push(`<line x1="70" y1="50" x2="70" y2="55" 
                  stroke="white" stroke-width="3"/>`);
      }
    };
    
    (symbols[theme] || symbols.dungeon)();
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate Portrait SVG
   */
  generatePortraitSVG(context) {
    const { theme, title } = context;
    const themeData = this.themes[theme];
    const width = 300;
    const height = 400;
    
    const svg = [];
    svg.push(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Defs
    svg.push('<defs>');
    svg.push(this.effects.gradient('portrait-bg', themeData.gradients[Object.keys(themeData.gradients)[0]]));
    svg.push(this.effects.shadow('portrait-shadow'));
    svg.push('</defs>');
    
    // Background
    svg.push(`<rect width="${width}" height="${height}" fill="url(#portrait-bg)"/>`);
    
    // Frame
    svg.push(`<rect x="10" y="10" width="${width-20}" height="${height-20}" 
              stroke="${themeData.colors[0]}" stroke-width="5" fill="none"/>`);
    
    // Stylized portrait
    const cx = width / 2;
    const cy = height / 2 - 30;
    
    // Head
    svg.push(`<ellipse cx="${cx}" cy="${cy}" rx="80" ry="100" 
              fill="${themeData.colors[2]}" filter="url(#portrait-shadow)"/>`);
    
    // Eyes
    svg.push(`<ellipse cx="${cx-30}" cy="${cy-20}" rx="15" ry="20" fill="white"/>`);
    svg.push(`<ellipse cx="${cx+30}" cy="${cy-20}" rx="15" ry="20" fill="white"/>`);
    svg.push(`<circle cx="${cx-30}" cy="${cy-20}" r="10" fill="${themeData.colors[0]}"/>`);
    svg.push(`<circle cx="${cx+30}" cy="${cy-20}" r="10" fill="${themeData.colors[0]}"/>`);
    
    // Theme-specific features
    if (theme === 'aquabyssos') {
      // Gills
      svg.push(`<path d="M ${cx-60} ${cy} Q ${cx-70} ${cy+10} ${cx-60} ${cy+20}" 
                stroke="${themeData.colors[1]}" stroke-width="3" fill="none"/>`);
      svg.push(`<path d="M ${cx+60} ${cy} Q ${cx+70} ${cy+10} ${cx+60} ${cy+20}" 
                stroke="${themeData.colors[1]}" stroke-width="3" fill="none"/>`);
    } else if (theme === 'void') {
      // Tentacles
      for (let i = 0; i < 4; i++) {
        const angle = (i * Math.PI) / 2;
        const x1 = cx + 50 * Math.cos(angle);
        const y1 = cy + 50 * Math.sin(angle);
        const x2 = cx + 100 * Math.cos(angle + 0.3);
        const y2 = cy + 100 * Math.sin(angle + 0.3);
        svg.push(`<path d="M ${x1} ${y1} Q ${x2} ${y2} ${x2+20} ${y2+20}" 
                  stroke="${themeData.colors[3]}" stroke-width="4" fill="none"/>`);
      }
    }
    
    // Name plate
    svg.push(`<rect x="30" y="${height-70}" width="${width-60}" height="40" 
              fill="${themeData.colors[0]}"/>`);
    svg.push(`<text x="${cx}" y="${height-40}" text-anchor="middle" 
              font-size="18" fill="white">${title}</text>`);
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate Item SVG
   */
  generateItemSVG(context) {
    const { theme, title } = context;
    const themeData = this.themes[theme];
    const size = 200;
    
    const svg = [];
    svg.push(`<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Defs
    svg.push('<defs>');
    svg.push(this.effects.gradient('item-grad', themeData.gradients[Object.keys(themeData.gradients)[0]]));
    svg.push(this.effects.glow('item-glow', themeData.colors[0]));
    svg.push(this.effects.texture('item-texture', 'fractalNoise'));
    svg.push('</defs>');
    
    // Background
    svg.push(`<circle cx="100" cy="100" r="90" fill="url(#item-grad)" opacity="0.3"/>`);
    
    // Random item shape
    const itemTypes = ['sword', 'potion', 'gem', 'scroll', 'ring'];
    const itemType = itemTypes[Math.floor(Math.random() * itemTypes.length)];
    
    switch (itemType) {
      case 'sword':
        // Blade
        svg.push(`<rect x="95" y="30" width="10" height="100" 
                  fill="${themeData.colors[1]}" filter="url(#item-glow)"/>`);
        // Guard
        svg.push(`<rect x="70" y="120" width="60" height="10" 
                  fill="${themeData.colors[0]}"/>`);
        // Handle
        svg.push(`<rect x="95" y="130" width="10" height="30" 
                  fill="${themeData.colors[4]}"/>`);
        break;
        
      case 'potion':
        // Bottle
        svg.push(`<path d="M 80 140 Q 80 160 100 160 Q 120 160 120 140 
                  L 120 80 Q 120 60 110 60 L 90 60 Q 80 60 80 80 Z" 
                  fill="${themeData.colors[2]}" stroke="${themeData.colors[0]}" 
                  stroke-width="3"/>`);
        // Cork
        svg.push(`<rect x="90" y="50" width="20" height="15" 
                  fill="${themeData.colors[4]}"/>`);
        // Liquid
        svg.push(`<path d="M 85 140 Q 85 150 100 150 Q 115 150 115 140 L 115 100 L 85 100 Z" 
                  fill="${themeData.colors[3]}" opacity="0.7"/>`);
        break;
        
      case 'gem':
        // Faceted gem
        const facets = 6;
        let gemPath = 'M ';
        for (let i = 0; i < facets; i++) {
          const angle = (i * 2 * Math.PI) / facets;
          const x = 100 + 40 * Math.cos(angle);
          const y = 100 + 40 * Math.sin(angle);
          gemPath += `${x} ${y} `;
        }
        gemPath += 'Z';
        svg.push(`<path d="${gemPath}" fill="${themeData.colors[2]}" 
                  stroke="${themeData.colors[0]}" stroke-width="2" 
                  filter="url(#item-glow)"/>`);
        // Inner facets
        for (let i = 0; i < facets; i++) {
          const angle = (i * 2 * Math.PI) / facets;
          const x = 100 + 40 * Math.cos(angle);
          const y = 100 + 40 * Math.sin(angle);
          svg.push(`<line x1="100" y1="100" x2="${x}" y2="${y}" 
                    stroke="${themeData.colors[0]}" stroke-width="1" opacity="0.5"/>`);
        }
        break;
        
      case 'scroll':
        // Parchment
        svg.push(`<rect x="60" y="60" width="80" height="100" rx="5" 
                  fill="${themeData.colors[4]}" filter="url(#item-texture)"/>`);
        // Text lines
        for (let i = 0; i < 5; i++) {
          svg.push(`<line x1="70" y1="${80 + i*15}" x2="130" y2="${80 + i*15}" 
                    stroke="${themeData.colors[0]}" stroke-width="1" opacity="0.5"/>`);
        }
        // Seal
        svg.push(`<circle cx="100" cy="150" r="15" fill="${themeData.colors[3]}"/>`);
        break;
        
      case 'ring':
        // Ring shape
        svg.push(`<circle cx="100" cy="100" r="40" stroke="${themeData.colors[1]}" 
                  stroke-width="15" fill="none" filter="url(#item-glow)"/>`);
        // Gem setting
        svg.push(`<circle cx="100" cy="60" r="10" fill="${themeData.colors[3]}"/>`);
        break;
    }
    
    // Label
    svg.push(`<text x="100" y="190" text-anchor="middle" font-size="14" 
              fill="${themeData.colors[0]}">${title}</text>`);
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate Location SVG
   */
  generateLocationSVG(context) {
    const { theme, title, width, height } = context;
    const themeData = this.themes[theme];
    
    const svg = [];
    svg.push(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Defs
    svg.push('<defs>');
    Object.entries(themeData.gradients).forEach(([name, colors]) => {
      svg.push(this.effects.gradient(`loc-${name}`, colors));
    });
    svg.push(this.effects.shadow('loc-shadow'));
    svg.push('</defs>');
    
    // Sky/Background
    svg.push(`<rect width="${width}" height="${height}" fill="url(#loc-${Object.keys(themeData.gradients)[0]})"/>`);
    
    // Theme-specific landscape
    if (theme === 'aquabyssos') {
      // Underwater scene
      // Coral
      for (let i = 0; i < 5; i++) {
        const x = Math.random() * width;
        const y = height - 50 - Math.random() * 100;
        svg.push(`<ellipse cx="${x}" cy="${y}" rx="${20 + Math.random()*30}" 
                  ry="${30 + Math.random()*40}" fill="${themeData.colors[3]}" 
                  opacity="0.7"/>`);
      }
      // Fish
      for (let i = 0; i < 8; i++) {
        const x = Math.random() * width;
        const y = Math.random() * (height - 100) + 50;
        svg.push(`<ellipse cx="${x}" cy="${y}" rx="15" ry="8" 
                  fill="${themeData.colors[2]}" transform="rotate(${Math.random()*30-15} ${x} ${y})"/>`);
      }
      // Bubbles
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const r = 2 + Math.random() * 5;
        svg.push(`<circle cx="${x}" cy="${y}" r="${r}" fill="white" opacity="0.3"/>`);
      }
    } else if (theme === 'aethermoor') {
      // Sky city
      // Floating islands
      for (let i = 0; i < 3; i++) {
        const x = 100 + i * 150;
        const y = 100 + Math.random() * 100;
        svg.push(`<ellipse cx="${x}" cy="${y}" rx="60" ry="20" 
                  fill="${themeData.colors[4]}" filter="url(#loc-shadow)"/>`);
        // Buildings
        svg.push(`<rect x="${x-30}" y="${y-40}" width="20" height="40" 
                  fill="${themeData.colors[3]}"/>`);
        svg.push(`<rect x="${x-5}" y="${y-50}" width="25" height="50" 
                  fill="${themeData.colors[2]}"/>`);
        svg.push(`<rect x="${x+20}" y="${y-35}" width="15" height="35" 
                  fill="${themeData.colors[3]}"/>`);
      }
      // Airship
      svg.push(`<ellipse cx="300" cy="80" rx="40" ry="15" 
                fill="${themeData.colors[1]}"/>`);
      svg.push(`<rect x="280" y="85" width="40" height="20" 
                fill="${themeData.colors[4]}"/>`);
    } else if (theme === 'forest') {
      // Trees
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * width;
        const y = height - 50 - Math.random() * 150;
        const h = 60 + Math.random() * 80;
        // Trunk
        svg.push(`<rect x="${x-5}" y="${y}" width="10" height="${h}" 
                  fill="${themeData.colors[4]}"/>`);
        // Leaves
        svg.push(`<circle cx="${x}" cy="${y-20}" r="30" fill="${themeData.colors[1]}"/>`);
        svg.push(`<circle cx="${x-15}" cy="${y-10}" r="25" fill="${themeData.colors[2]}"/>`);
        svg.push(`<circle cx="${x+15}" cy="${y-10}" r="25" fill="${themeData.colors[2]}"/>`);
      }
    }
    
    // Title banner
    svg.push(`<rect x="${width/2-100}" y="20" width="200" height="40" 
              fill="${themeData.colors[0]}" opacity="0.8"/>`);
    svg.push(`<text x="${width/2}" y="45" text-anchor="middle" font-size="20" 
              fill="white">${title}</text>`);
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate Banner SVG
   */
  generateBannerSVG(context) {
    const { theme, title } = context;
    const themeData = this.themes[theme];
    const width = 1200;
    const height = 300;
    
    const svg = [];
    svg.push(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Defs
    svg.push('<defs>');
    svg.push(this.effects.gradient('banner-grad', themeData.gradients[Object.keys(themeData.gradients)[0]]));
    svg.push(this.generatePattern(theme, themeData.patterns[0]));
    svg.push('</defs>');
    
    // Background
    svg.push(`<rect width="${width}" height="${height}" fill="url(#banner-grad)"/>`);
    
    // Pattern overlay
    svg.push(`<rect width="${width}" height="${height}" fill="url(#${theme}-pattern)" opacity="0.2"/>`);
    
    // Decorative elements
    const elementCount = 5;
    for (let i = 0; i < elementCount; i++) {
      const x = (i + 0.5) * (width / elementCount);
      const element = themeData.elements[i % themeData.elements.length];
      
      // Draw stylized element
      this.drawThemeElement(svg, element, x, height/2, themeData.colors);
    }
    
    // Title area
    svg.push(`<rect x="${width/2-200}" y="${height/2-40}" width="400" height="80" 
              fill="${themeData.colors[0]}" opacity="0.9"/>`);
    svg.push(`<text x="${width/2}" y="${height/2+10}" text-anchor="middle" 
              font-size="36" fill="white" font-weight="bold">${title}</text>`);
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate Diagram SVG
   */
  generateDiagramSVG(context) {
    const { theme, title, width, height } = context;
    const themeData = this.themes[theme];
    
    const svg = [];
    svg.push(`<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">`);
    
    // Grid background
    svg.push('<defs>');
    svg.push(`<pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="${themeData.colors[0]}" 
                    stroke-width="1" opacity="0.2"/>
              </pattern>`);
    svg.push('</defs>');
    
    svg.push(`<rect width="${width}" height="${height}" fill="white"/>`);
    svg.push(`<rect width="${width}" height="${height}" fill="url(#grid)"/>`);
    
    // Generate node diagram
    const nodes = [];
    const nodeCount = 5 + Math.floor(Math.random() * 5);
    
    for (let i = 0; i < nodeCount; i++) {
      const node = {
        x: 100 + Math.random() * (width - 200),
        y: 100 + Math.random() * (height - 200),
        r: 30 + Math.random() * 20,
        label: `Node ${i + 1}`
      };
      nodes.push(node);
    }
    
    // Draw connections
    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        if (Math.random() > 0.6) {
          svg.push(`<line x1="${nodes[i].x}" y1="${nodes[i].y}" 
                    x2="${nodes[j].x}" y2="${nodes[j].y}" 
                    stroke="${themeData.colors[1]}" stroke-width="2" opacity="0.5"/>`);
        }
      }
    }
    
    // Draw nodes
    nodes.forEach(node => {
      svg.push(`<circle cx="${node.x}" cy="${node.y}" r="${node.r}" 
                fill="${themeData.colors[2]}" stroke="${themeData.colors[0]}" 
                stroke-width="3"/>`);
      svg.push(`<text x="${node.x}" y="${node.y + 5}" text-anchor="middle" 
                font-size="14" fill="white">${node.label}</text>`);
    });
    
    // Title
    svg.push(`<text x="${width/2}" y="40" text-anchor="middle" font-size="24" 
              fill="${themeData.colors[0]}">${title}</text>`);
    
    svg.push('</svg>');
    return svg.join('\n');
  }

  /**
   * Generate pattern
   */
  generatePattern(theme, patternType) {
    const patterns = {
      waves: `<pattern id="${theme}-pattern" x="0" y="0" width="100" height="20" patternUnits="userSpaceOnUse">
              <path d="M0,10 Q25,0 50,10 T100,10" stroke="white" fill="none" stroke-width="2"/>
              </pattern>`,
      
      bubbles: `<pattern id="${theme}-pattern" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="3" fill="white"/>
                <circle cx="30" cy="25" r="4" fill="white"/>
                <circle cx="40" cy="40" r="2" fill="white"/>
                </pattern>`,
      
      gears: `<pattern id="${theme}-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="20" fill="none" stroke="white" stroke-width="2"/>
              <circle cx="30" cy="30" r="10" fill="white"/>
              </pattern>`,
      
      leaves: `<pattern id="${theme}-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
               <ellipse cx="20" cy="20" rx="15" ry="8" fill="white" transform="rotate(45 20 20)"/>
               </pattern>`
    };
    
    return patterns[patternType] || patterns.bubbles;
  }

  /**
   * Draw theme element
   */
  drawThemeElement(svg, element, x, y, colors) {
    const elements = {
      water: () => {
        svg.push(`<path d="M ${x-20} ${y} Q ${x} ${y-20} ${x+20} ${y} T ${x+40} ${y}" 
                  stroke="${colors[2]}" stroke-width="3" fill="none"/>`);
      },
      airship: () => {
        svg.push(`<ellipse cx="${x}" cy="${y}" rx="30" ry="10" fill="${colors[3]}"/>`);
        svg.push(`<rect x="${x-20}" y="${y+5}" width="40" height="15" fill="${colors[4]}"/>`);
      },
      portal: () => {
        svg.push(`<ellipse cx="${x}" cy="${y}" rx="25" ry="35" fill="none" 
                  stroke="${colors[3]}" stroke-width="3"/>`);
        svg.push(`<ellipse cx="${x}" cy="${y}" rx="15" ry="25" fill="${colors[4]}" 
                  opacity="0.5"/>`);
      },
      tree: () => {
        svg.push(`<rect x="${x-5}" y="${y}" width="10" height="30" fill="${colors[4]}"/>`);
        svg.push(`<circle cx="${x}" cy="${y-10}" r="20" fill="${colors[2]}"/>`);
      },
      key: () => {
        svg.push(`<circle cx="${x-10}" cy="${y}" r="10" fill="none" 
                  stroke="${colors[3]}" stroke-width="3"/>`);
        svg.push(`<line x1="${x}" y1="${y}" x2="${x+20}" y2="${y}" 
                  stroke="${colors[3]}" stroke-width="3"/>`);
      }
    };
    
    (elements[element] || elements.water)();
  }

  /**
   * Generate report
   */
  async generateReport(svgFiles, replaced) {
    const reportPath = path.join(process.cwd(), '09_Performance/SVG_REPLACEMENT_REPORT.md');
    
    let content = '# SVG Replacement Report\n\n';
    content += `Generated: ${new Date().toISOString()}\n\n`;
    content += '## Summary\n\n';
    content += `- Total SVG files found: ${svgFiles.length}\n`;
    content += `- Successfully replaced: ${replaced}\n`;
    content += `- Success rate: ${((replaced/svgFiles.length)*100).toFixed(1)}%\n\n`;
    
    content += '## Replacement Details\n\n';
    
    // Group by type
    const byType = {};
    svgFiles.forEach(file => {
      const context = this.analyzeContext(file);
      if (!byType[context.type]) byType[context.type] = [];
      byType[context.type].push(file);
    });
    
    Object.entries(byType).forEach(([type, files]) => {
      content += `### ${type} (${files.length} files)\n\n`;
      files.slice(0, 10).forEach(file => {
        content += `- ${path.relative(process.cwd(), file)}\n`;
      });
      if (files.length > 10) {
        content += `- ... and ${files.length - 10} more\n`;
      }
      content += '\n';
    });
    
    content += '## Design Themes Used\n\n';
    Object.keys(this.themes).forEach(theme => {
      content += `- **${theme}**: ${Object.keys(this.themes[theme].gradients).join(', ')}\n`;
    });
    
    fs.writeFileSync(reportPath, content);
    console.log(`\n📊 Report saved to: ${reportPath}`);
  }
}

// Run if called directly
if (require.main === module) {
  const replacer = new AdvancedSVGReplacer();
  replacer.replaceAllSVGs().catch(console.error);
}

module.exports = AdvancedSVGReplacer;
