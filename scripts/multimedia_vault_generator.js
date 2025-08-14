#!/usr/bin/env node

/**
 * MULTIMEDIA VAULT GENERATOR
 * ==========================
 * Integrated system for generating images, videos, and audio for the entire vault
 */

const fs = require('fs');
const path = require('path');
const EnhancedPromptGenerator = require('./enhanced_prompt_generator');
const VideoGenerator = require('./video_generator');
const AudioGenerator = require('./audio_generator');
const { generateImageViaComfy } = require('./comfy_client');

class MultimediaVaultGenerator {
  constructor() {
    this.promptGenerator = new EnhancedPromptGenerator();
    this.videoGenerator = new VideoGenerator();
    this.audioGenerator = new AudioGenerator();
    
    this.config = {
      outputDir: path.join(process.cwd(), '04_Resources/Assets/Generated'),
      batchSize: 5,
      generateVideo: true,
      generateAudio: true,
      videoTypes: ['combat', 'location', 'scene'],
      audioTypes: ['location', 'scene', 'combat']
    };
    
    this.stats = {
      images: 0,
      videos: 0,
      audio: 0,
      failed: 0,
      startTime: Date.now()
    };
  }

  /**
   * Process a single asset with all multimedia types
   */
  async processAsset(context) {
    const { title, type, filePath } = context;
    console.log(`\n🎨 Processing: ${title}`);
    console.log(`   Type: ${type}`);
    
    const results = {
      image: null,
      video: null,
      audio: null
    };
    
    try {
      // 1. Generate base image
      const imageResult = await this.generateImage(context);
      if (imageResult) {
        results.image = imageResult;
        this.stats.images++;
        
        // 2. Generate video from image (if applicable)
        if (this.config.generateVideo && this.shouldGenerateVideo(context)) {
          const videoResult = await this.generateVideo(context, imageResult);
          if (videoResult) {
            results.video = videoResult;
            this.stats.videos++;
          }
        }
      }
      
      // 3. Generate audio (independent of image)
      if (this.config.generateAudio && this.shouldGenerateAudio(context)) {
        const audioResult = await this.generateAudio(context);
        if (audioResult) {
          results.audio = audioResult;
          this.stats.audio++;
        }
      }
      
      // 4. Update markdown file with all assets
      await this.updateMarkdownFile(filePath, results);
      
      console.log(`   ✅ Complete: Image:${results.image ? '✓' : '✗'} Video:${results.video ? '✓' : '✗'} Audio:${results.audio ? '✓' : '✗'}`);
      
    } catch (error) {
      console.error(`   ❌ Error: ${error.message}`);
      this.stats.failed++;
    }
    
    return results;
  }

  /**
   * Generate image asset
   */
  async generateImage(context) {
    console.log(`   📸 Generating image...`);
    
    const promptData = this.promptGenerator.generatePrompt(context);
    
    try {
      const imageBuffer = await generateImageViaComfy({
        prompt: promptData.prompt,
        width: promptData.settings.width,
        height: promptData.settings.height,
        seed: Math.floor(Math.random() * 1000000)
      });
      
      if (!imageBuffer || imageBuffer.length === 0) {
        throw new Error('No image data received');
      }
      
      // Save image
      const outputPath = this.getOutputPath(context, 'image');
      fs.writeFileSync(outputPath, imageBuffer);
      
      // Save metadata
      const metadataPath = outputPath.replace('.png', '_metadata.json');
      fs.writeFileSync(metadataPath, JSON.stringify({
        ...context,
        prompt: promptData.prompt,
        negative: promptData.negative,
        settings: promptData.settings,
        generated: new Date().toISOString()
      }, null, 2));
      
      console.log(`      ✓ Image saved: ${path.basename(outputPath)}`);
      return outputPath;
      
    } catch (error) {
      console.error(`      ✗ Image failed: ${error.message}`);
      return null;
    }
  }

  /**
   * Generate video from image
   */
  async generateVideo(context, imagePath) {
    console.log(`   🎬 Generating video...`);
    
    const motionPrompt = this.videoGenerator.generateMotionPrompt(context);
    const outputPath = this.getOutputPath(context, 'video');
    
    try {
      const result = await this.videoGenerator.generateVideoFromImage(
        imagePath,
        motionPrompt,
        outputPath
      );
      
      if (result) {
        console.log(`      ✓ Video saved: ${path.basename(outputPath)}`);
        return outputPath;
      }
    } catch (error) {
      console.error(`      ✗ Video failed: ${error.message}`);
    }
    
    return null;
  }

  /**
   * Generate audio
   */
  async generateAudio(context) {
    console.log(`   🔊 Generating audio...`);
    
    const outputPath = this.getOutputPath(context, 'audio');
    
    try {
      const result = await this.audioGenerator.generateAmbientAudio(
        context,
        outputPath
      );
      
      if (result) {
        console.log(`      ✓ Audio saved: ${path.basename(outputPath)}`);
        
        // Also generate background music for important scenes
        if (context.type === 'scene' || context.tags.includes('important')) {
          const musicPath = outputPath.replace('_ambient.mp3', '_music.mp3');
          const musicStyle = this.getMusicStyle(context);
          await this.audioGenerator.generateBackgroundMusic(context, musicStyle, musicPath);
          console.log(`      ✓ Music saved: ${path.basename(musicPath)}`);
        }
        
        return outputPath;
      }
    } catch (error) {
      console.error(`      ✗ Audio failed: ${error.message}`);
    }
    
    return null;
  }

  /**
   * Determine if video should be generated
   */
  shouldGenerateVideo(context) {
    const { type, tags, description } = context;
    
    // Always generate for certain types
    if (this.config.videoTypes.includes(type)) return true;
    
    // Check for action keywords
    const actionKeywords = ['combat', 'battle', 'fight', 'magic', 'spell', 'transformation'];
    return actionKeywords.some(keyword => 
      description.toLowerCase().includes(keyword) || 
      tags.some(tag => tag.includes(keyword))
    );
  }

  /**
   * Determine if audio should be generated
   */
  shouldGenerateAudio(context) {
    const { type, tags } = context;
    
    // Always generate for certain types
    if (this.config.audioTypes.includes(type)) return true;
    
    // Check for audio-relevant tags
    const audioTags = ['ambient', 'music', 'sound', 'atmosphere'];
    return tags.some(tag => audioTags.includes(tag));
  }

  /**
   * Get music style based on context
   */
  getMusicStyle(context) {
    const { description, tags } = context;
    
    if (description.includes('battle') || description.includes('combat')) return 'battle';
    if (description.includes('mysterious') || description.includes('puzzle')) return 'mysterious';
    if (description.includes('sad') || description.includes('tragic')) return 'emotional';
    if (description.includes('victory') || description.includes('celebration')) return 'celebration';
    if (description.includes('epic') || tags.includes('boss')) return 'epic';
    
    return 'peaceful';
  }

  /**
   * Get output path for asset
   */
  getOutputPath(context, assetType) {
    const { title, type } = context;
    
    // Determine subdirectory
    const typeMap = {
      character: 'Portraits',
      location: 'Locations',
      item: 'Items',
      creature: 'Creatures',
      scene: 'Scenes',
      combat: 'Combat'
    };
    
    const subdir = typeMap[type] || 'Misc';
    const dir = path.join(this.config.outputDir, subdir);
    
    // Create directory if needed
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    
    // Generate filename
    const safeName = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    const extensions = {
      image: '.png',
      video: '.mp4',
      audio: '_ambient.mp3'
    };
    
    return path.join(dir, `${safeName}${extensions[assetType]}`);
  }

  /**
   * Update markdown file with asset references
   */
  async updateMarkdownFile(filePath, results) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      const insertions = [];
      
      // Prepare asset references
      if (results.image) {
        const imagePath = path.relative(path.dirname(filePath), results.image);
        insertions.push(`![Image](${imagePath})`);
      }
      
      if (results.video) {
        const videoPath = path.relative(path.dirname(filePath), results.video);
        insertions.push(`🎬 [View Animation](${videoPath})`);
      }
      
      if (results.audio) {
        const audioPath = path.relative(path.dirname(filePath), results.audio);
        insertions.push(`🔊 [Ambient Audio](${audioPath})`);
      }
      
      if (insertions.length === 0) return;
      
      // Insert after frontmatter or at beginning
      const assetBlock = '\n## Assets\n\n' + insertions.join('\n\n') + '\n\n';
      
      if (content.startsWith('---')) {
        const frontmatterEnd = content.indexOf('---', 3);
        if (frontmatterEnd > 0) {
          content = content.substring(0, frontmatterEnd + 3) + '\n' + assetBlock + 
                   content.substring(frontmatterEnd + 3);
        }
      } else {
        content = assetBlock + content;
      }
      
      fs.writeFileSync(filePath, content);
      console.log(`   📝 Updated markdown file`);
      
    } catch (error) {
      console.error(`   ⚠️ Could not update markdown: ${error.message}`);
    }
  }

  /**
   * Show statistics
   */
  showStats() {
    const elapsed = (Date.now() - this.stats.startTime) / 1000 / 60;
    
    console.log('\n📊 Generation Statistics');
    console.log('========================');
    console.log(`Images generated: ${this.stats.images}`);
    console.log(`Videos generated: ${this.stats.videos}`);
    console.log(`Audio generated: ${this.stats.audio}`);
    console.log(`Failed: ${this.stats.failed}`);
    console.log(`Time elapsed: ${elapsed.toFixed(1)} minutes`);
    console.log(`Rate: ${(this.stats.images / elapsed).toFixed(1)} assets/min`);
  }
}

// Export for use
module.exports = MultimediaVaultGenerator;

// CLI usage
if (require.main === module) {
  const generator = new MultimediaVaultGenerator();
  
  // Test with example context
  const testContext = {
    title: "Epic Dragon Battle",
    description: "A massive dragon breathing fire in an ancient temple during an epic battle",
    tags: ["combat", "dragon", "epic", "fire"],
    type: "combat",
    filePath: path.join(process.cwd(), "test_dragon_battle.md")
  };
  
  console.log('🎭 MULTIMEDIA VAULT GENERATOR');
  console.log('=============================\n');
  
  generator.processAsset(testContext)
    .then(results => {
      generator.showStats();
      console.log('\n✨ Test complete!');
    })
    .catch(console.error);
}
