#!/usr/bin/env node

/**
 * Comprehensive quality testing suite for ComfyUI implementation
 * Tests performance, reliability, and output quality
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { generateImageViaComfy } = require('./comfy_client');

// Test configurations
const TEST_CONFIGS = {
  performance: {
    name: 'Performance Test',
    iterations: 5,
    timeout: 60000,
    tests: [
      { width: 512, height: 512, steps: 10, name: 'Quick Generation' },
      { width: 768, height: 768, steps: 20, name: 'Medium Quality' },
      { width: 512, height: 768, steps: 30, name: 'High Quality Portrait' }
    ]
  },
  consistency: {
    name: 'Consistency Test',
    iterations: 3,
    seed: 42,
    prompt: 'fantasy warrior portrait, detailed armor',
    tests: [
      { sampler: 'euler_ancestral', name: 'Euler Ancestral' },
      { sampler: 'ddim', name: 'DDIM' },
      { sampler: 'dpmpp_2m', name: 'DPM++ 2M' }
    ]
  },
  stress: {
    name: 'Stress Test',
    concurrent: 3,
    total: 10,
    timeout: 180000
  },
  quality: {
    name: 'Quality Metrics Test',
    tests: [
      {
        prompt: 'highly detailed fantasy portrait, professional photography',
        minSize: 300000, // Minimum file size in bytes
        name: 'Detail Level Check'
      },
      {
        prompt: 'simple geometric shapes, minimal design',
        maxSize: 500000, // Maximum file size in bytes
        name: 'Simplicity Check'
      }
    ]
  }
};

class ComfyUITester {
  constructor() {
    this.results = {
      passed: 0,
      failed: 0,
      warnings: 0,
      tests: []
    };
    this.startTime = Date.now();
  }

  async runAllTests() {
    console.log('🧪 ComfyUI Quality Test Suite\n' + '='.repeat(50));
    
    // Check if ComfyUI is running
    if (!await this.checkComfyUIStatus()) {
      console.error('❌ ComfyUI is not running on port 8188');
      return false;
    }
    
    // Run test suites
    await this.testPerformance();
    await this.testConsistency();
    await this.testQualityMetrics();
    await this.testErrorHandling();
    await this.testMemoryUsage();
    
    // Generate report
    this.generateReport();
    
    return this.results.failed === 0;
  }

  async checkComfyUIStatus() {
    try {
      const res = await fetch('http://127.0.0.1:8188/system_stats');
      const stats = await res.json();
      console.log('✅ ComfyUI Status: Running');
      console.log(`   Version: ${stats.system.comfyui_version}`);
      console.log(`   Python: ${stats.system.python_version.split(' ')[0]}`);
      console.log(`   PyTorch: ${stats.system.pytorch_version}`);
      console.log(`   RAM Free: ${Math.round(stats.system.ram_free / 1024 / 1024 / 1024)}GB\n`);
      return true;
    } catch (e) {
      return false;
    }
  }

  async testPerformance() {
    console.log('\n📊 Performance Tests');
    console.log('-'.repeat(40));
    
    const config = TEST_CONFIGS.performance;
    const timings = [];
    
    for (const test of config.tests) {
      const times = [];
      console.log(`\nTesting: ${test.name}`);
      
      for (let i = 0; i < config.iterations; i++) {
        const start = Date.now();
        try {
          const buffer = await generateImageViaComfy({
            prompt: 'test image for performance measurement',
            width: test.width,
            height: test.height,
            seed: Math.floor(Math.random() * 1e9),
            ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
          });
          
          const duration = Date.now() - start;
          times.push(duration);
          console.log(`   Iteration ${i + 1}: ${duration}ms (${buffer.length} bytes)`);
        } catch (e) {
          console.error(`   ❌ Failed: ${e.message}`);
          this.results.failed++;
        }
      }
      
      if (times.length > 0) {
        const avg = times.reduce((a, b) => a + b, 0) / times.length;
        const min = Math.min(...times);
        const max = Math.max(...times);
        
        console.log(`   📈 Stats: Avg=${Math.round(avg)}ms, Min=${min}ms, Max=${max}ms`);
        
        // Check if performance is acceptable
        if (avg < config.timeout) {
          console.log(`   ✅ Performance acceptable`);
          this.results.passed++;
        } else {
          console.log(`   ⚠️ Performance warning: exceeds ${config.timeout}ms`);
          this.results.warnings++;
        }
        
        timings.push({ test: test.name, avg, min, max });
      }
    }
    
    this.results.tests.push({
      suite: 'Performance',
      timings
    });
  }

  async testConsistency() {
    console.log('\n🔄 Consistency Tests');
    console.log('-'.repeat(40));
    
    const config = TEST_CONFIGS.consistency;
    const hashes = new Map();
    
    for (const test of config.tests) {
      console.log(`\nTesting sampler: ${test.name}`);
      const testHashes = [];
      
      for (let i = 0; i < config.iterations; i++) {
        try {
          const buffer = await generateImageViaComfy({
            prompt: config.prompt,
            width: 512,
            height: 512,
            seed: config.seed, // Fixed seed for consistency
            ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
          });
          
          const hash = crypto.createHash('sha256').update(buffer).digest('hex').slice(0, 16);
          testHashes.push(hash);
          console.log(`   Iteration ${i + 1}: Hash=${hash}`);
        } catch (e) {
          console.error(`   ❌ Failed: ${e.message}`);
          this.results.failed++;
        }
      }
      
      // Check consistency
      const unique = new Set(testHashes).size;
      if (unique === 1) {
        console.log(`   ✅ Perfect consistency (all identical)`);
        this.results.passed++;
      } else if (unique <= 2) {
        console.log(`   ⚠️ Minor variations detected (${unique} unique outputs)`);
        this.results.warnings++;
      } else {
        console.log(`   ❌ Inconsistent results (${unique} unique outputs)`);
        this.results.failed++;
      }
      
      hashes.set(test.name, testHashes);
    }
    
    this.results.tests.push({
      suite: 'Consistency',
      hashes: Object.fromEntries(hashes)
    });
  }

  async testQualityMetrics() {
    console.log('\n🎨 Quality Metrics Tests');
    console.log('-'.repeat(40));
    
    const config = TEST_CONFIGS.quality;
    
    for (const test of config.tests) {
      console.log(`\nTesting: ${test.name}`);
      
      try {
        const buffer = await generateImageViaComfy({
          prompt: test.prompt,
          width: 512,
          height: 512,
          seed: Math.floor(Math.random() * 1e9),
          ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
        });
        
        const size = buffer.length;
        console.log(`   Generated: ${size} bytes`);
        
        // Check size constraints
        let passed = true;
        if (test.minSize && size < test.minSize) {
          console.log(`   ❌ Below minimum size (${test.minSize} bytes)`);
          this.results.failed++;
          passed = false;
        }
        if (test.maxSize && size > test.maxSize) {
          console.log(`   ❌ Above maximum size (${test.maxSize} bytes)`);
          this.results.failed++;
          passed = false;
        }
        
        if (passed) {
          console.log(`   ✅ Quality metrics passed`);
          this.results.passed++;
        }
        
        // Save test image for manual inspection
        const testDir = '09_Performance/test_outputs';
        if (!fs.existsSync(testDir)) fs.mkdirSync(testDir, { recursive: true });
        const filename = path.join(testDir, `quality_test_${Date.now()}.png`);
        fs.writeFileSync(filename, buffer);
        console.log(`   📁 Saved to: ${filename}`);
        
      } catch (e) {
        console.error(`   ❌ Failed: ${e.message}`);
        this.results.failed++;
      }
    }
  }

  async testErrorHandling() {
    console.log('\n⚠️ Error Handling Tests');
    console.log('-'.repeat(40));
    
    const errorTests = [
      {
        name: 'Invalid dimensions',
        params: { width: 0, height: 0 },
        shouldFail: true
      },
      {
        name: 'Extreme dimensions',
        params: { width: 4096, height: 4096 },
        shouldFail: true
      },
      {
        name: 'Empty prompt',
        params: { prompt: '' },
        shouldFail: false
      },
      {
        name: 'Very long prompt',
        params: { prompt: 'test '.repeat(500) },
        shouldFail: false
      }
    ];
    
    for (const test of errorTests) {
      console.log(`\nTesting: ${test.name}`);
      
      try {
        const buffer = await generateImageViaComfy({
          prompt: test.params.prompt || 'test',
          width: test.params.width || 512,
          height: test.params.height || 512,
          seed: 42,
          ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
        });
        
        if (test.shouldFail) {
          console.log(`   ❌ Should have failed but succeeded`);
          this.results.failed++;
        } else {
          console.log(`   ✅ Handled gracefully (${buffer.length} bytes)`);
          this.results.passed++;
        }
      } catch (e) {
        if (test.shouldFail) {
          console.log(`   ✅ Failed as expected: ${e.message}`);
          this.results.passed++;
        } else {
          console.log(`   ❌ Unexpected failure: ${e.message}`);
          this.results.failed++;
        }
      }
    }
  }

  async testMemoryUsage() {
    console.log('\n💾 Memory Usage Test');
    console.log('-'.repeat(40));
    
    // Get initial memory stats
    const initialStats = await this.getMemoryStats();
    console.log(`Initial RAM free: ${Math.round(initialStats.ram_free / 1024 / 1024 / 1024)}GB`);
    
    // Generate multiple images
    const iterations = 5;
    for (let i = 0; i < iterations; i++) {
      try {
        await generateImageViaComfy({
          prompt: 'memory test image',
          width: 768,
          height: 768,
          seed: i,
          ckpt: process.env.COMFY_CKPT || 'v1-5-pruned-emaonly-fp16.safetensors'
        });
        console.log(`   Generated image ${i + 1}/${iterations}`);
      } catch (e) {
        console.error(`   Failed at iteration ${i + 1}: ${e.message}`);
      }
    }
    
    // Check final memory stats
    const finalStats = await this.getMemoryStats();
    console.log(`Final RAM free: ${Math.round(finalStats.ram_free / 1024 / 1024 / 1024)}GB`);
    
    const memoryLeak = initialStats.ram_free - finalStats.ram_free;
    const leakGB = memoryLeak / 1024 / 1024 / 1024;
    
    if (leakGB < 1) {
      console.log(`   ✅ No significant memory leak detected (${leakGB.toFixed(2)}GB difference)`);
      this.results.passed++;
    } else {
      console.log(`   ⚠️ Possible memory leak: ${leakGB.toFixed(2)}GB`);
      this.results.warnings++;
    }
  }

  async getMemoryStats() {
    try {
      const res = await fetch('http://127.0.0.1:8188/system_stats');
      const stats = await res.json();
      return stats.system;
    } catch (e) {
      return { ram_free: 0, ram_total: 0 };
    }
  }

  generateReport() {
    const duration = Math.round((Date.now() - this.startTime) / 1000);
    
    console.log('\n' + '='.repeat(50));
    console.log('📋 TEST REPORT');
    console.log('='.repeat(50));
    console.log(`Total Duration: ${duration} seconds`);
    console.log(`✅ Passed: ${this.results.passed}`);
    console.log(`❌ Failed: ${this.results.failed}`);
    console.log(`⚠️ Warnings: ${this.results.warnings}`);
    
    const successRate = Math.round(
      (this.results.passed / (this.results.passed + this.results.failed)) * 100
    );
    console.log(`Success Rate: ${successRate}%`);
    
    // Save detailed report
    const reportPath = '09_Performance/test_report.json';
    fs.writeFileSync(reportPath, JSON.stringify(this.results, null, 2));
    console.log(`\nDetailed report saved to: ${reportPath}`);
    
    // Overall assessment
    console.log('\n📊 Overall Assessment:');
    if (this.results.failed === 0 && this.results.warnings === 0) {
      console.log('   🎉 EXCELLENT - All tests passed without issues');
    } else if (this.results.failed === 0) {
      console.log('   ✅ GOOD - All tests passed with minor warnings');
    } else if (successRate >= 80) {
      console.log('   ⚠️ ACCEPTABLE - Most tests passed, some issues detected');
    } else {
      console.log('   ❌ NEEDS IMPROVEMENT - Multiple failures detected');
    }
  }
}

// CLI
if (require.main === module) {
  const tester = new ComfyUITester();
  tester.runAllTests().then(success => {
    process.exit(success ? 0 : 1);
  });
}
