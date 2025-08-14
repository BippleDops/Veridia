#!/usr/bin/env node

/**
 * Security Audit and Code Review System
 * Performs deep security analysis of the entire implementation
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

class SecurityAuditor {
  constructor() {
    this.vulnerabilities = [];
    this.warnings = [];
    this.recommendations = [];
    this.codeMetrics = {};
  }

  async performFullAudit() {
    console.log('🔒 Security Audit & Code Review System');
    console.log('=' .repeat(60));
    
    await this.auditAPIKeys();
    await this.auditNetworkSecurity();
    await this.auditFilePermissions();
    await this.auditDependencies();
    await this.auditCodeQuality();
    await this.auditDataHandling();
    await this.auditProcessIsolation();
    await this.generateSecurityReport();
    
    return this.vulnerabilities.length === 0;
  }

  async auditAPIKeys() {
    console.log('\n🔑 API Key Security Audit');
    console.log('-'.repeat(40));
    
    const patterns = [
      { pattern: /api[_-]?key\s*=\s*["']([^"']+)["']/gi, type: 'API Key' },
      { pattern: /token\s*=\s*["']([^"']+)["']/gi, type: 'Token' },
      { pattern: /secret\s*=\s*["']([^"']+)["']/gi, type: 'Secret' },
      { pattern: /password\s*=\s*["']([^"']+)["']/gi, type: 'Password' },
      { pattern: /sk-[a-zA-Z0-9]{48}/g, type: 'OpenAI Key' }
    ];
    
    const scriptFiles = await this.getAllScriptFiles();
    
    for (const file of scriptFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      for (const { pattern, type } of patterns) {
        const matches = content.match(pattern);
        if (matches && matches.length > 0) {
          // Check if it's using environment variables
          const isEnvVar = matches.some(m => m.includes('process.env'));
          
          if (!isEnvVar) {
            this.vulnerabilities.push({
              severity: 'HIGH',
              file: path.relative(process.cwd(), file),
              issue: `Hardcoded ${type} detected`,
              line: this.getLineNumber(content, matches[0])
            });
          }
        }
      }
    }
    
    // Check for proper .gitignore
    if (fs.existsSync('.gitignore')) {
      const gitignore = fs.readFileSync('.gitignore', 'utf8');
      const requiredIgnores = ['.env', 'api_config.json', '*.key', '*.pem'];
      
      for (const pattern of requiredIgnores) {
        if (!gitignore.includes(pattern)) {
          this.warnings.push({
            severity: 'MEDIUM',
            issue: `Missing ${pattern} in .gitignore`
          });
        }
      }
    }
    
    console.log(`   ✓ Scanned ${scriptFiles.length} files`);
    console.log(`   Found ${this.vulnerabilities.filter(v => v.severity === 'HIGH').length} high-severity issues`);
  }

  async auditNetworkSecurity() {
    console.log('\n🌐 Network Security Audit');
    console.log('-'.repeat(40));
    
    const networkPatterns = [
      { pattern: /http:\/\/(?!localhost|127\.0\.0\.1)/gi, issue: 'Insecure HTTP connection' },
      { pattern: /0\.0\.0\.0/g, issue: 'Binding to all interfaces' },
      { pattern: /disable.*ssl|verify.*false/gi, issue: 'SSL verification disabled' },
      { pattern: /cors.*\*/gi, issue: 'Wildcard CORS policy' }
    ];
    
    const scriptFiles = await this.getAllScriptFiles();
    
    for (const file of scriptFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      for (const { pattern, issue } of networkPatterns) {
        if (pattern.test(content)) {
          this.warnings.push({
            severity: 'MEDIUM',
            file: path.relative(process.cwd(), file),
            issue
          });
        }
      }
    }
    
    // Check for proper port binding
    const portsInUse = [8188, 5678, 5679, 7860];
    console.log(`   Checking ports: ${portsInUse.join(', ')}`);
    
    for (const port of portsInUse) {
      try {
        const { stdout } = await execPromise(`lsof -i :${port} | grep LISTEN | head -1`);
        if (stdout && !stdout.includes('127.0.0.1')) {
          this.warnings.push({
            severity: 'HIGH',
            issue: `Port ${port} exposed to network (not bound to localhost)`
          });
        }
      } catch (e) {
        // Port not in use or lsof not available
      }
    }
    
    console.log(`   ✓ Network security checks complete`);
  }

  async auditFilePermissions() {
    console.log('\n📁 File Permission Audit');
    console.log('-'.repeat(40));
    
    const sensitiveFiles = [
      '.obsidian/api_config.json',
      'scripts/*.sh',
      '09_Performance/*.pid'
    ];
    
    for (const pattern of sensitiveFiles) {
      const files = await this.globFiles(pattern);
      
      for (const file of files) {
        try {
          const stats = fs.statSync(file);
          const mode = (stats.mode & parseInt('777', 8)).toString(8);
          
          // Check for world-readable/writable
          if (mode[2] !== '0') {
            this.vulnerabilities.push({
              severity: 'MEDIUM',
              file: path.relative(process.cwd(), file),
              issue: `World-accessible permissions (${mode})`
            });
          }
        } catch (e) {
          // File doesn't exist
        }
      }
    }
    
    console.log(`   ✓ File permission checks complete`);
  }

  async auditDependencies() {
    console.log('\n📦 Dependency Security Audit');
    console.log('-'.repeat(40));
    
    if (fs.existsSync('package.json')) {
      try {
        // Check for outdated dependencies
        const { stdout: outdated } = await execPromise('npm outdated --json || true');
        if (outdated) {
          const deps = JSON.parse(outdated || '{}');
          const criticalDeps = ['node-fetch', 'sharp', 'jimp'];
          
          for (const dep of criticalDeps) {
            if (deps[dep]) {
              this.warnings.push({
                severity: 'LOW',
                issue: `Outdated dependency: ${dep}`
              });
            }
          }
        }
        
        // Check for known vulnerabilities
        const { stdout: audit } = await execPromise('npm audit --json || true');
        if (audit) {
          const auditData = JSON.parse(audit || '{}');
          if (auditData.metadata && auditData.metadata.vulnerabilities) {
            const vulns = auditData.metadata.vulnerabilities;
            if (vulns.high > 0 || vulns.critical > 0) {
              this.vulnerabilities.push({
                severity: 'HIGH',
                issue: `npm audit: ${vulns.critical} critical, ${vulns.high} high vulnerabilities`
              });
            }
          }
        }
      } catch (e) {
        console.log(`   ⚠️ Could not run npm audit: ${e.message}`);
      }
    }
    
    console.log(`   ✓ Dependency audit complete`);
  }

  async auditCodeQuality() {
    console.log('\n📊 Code Quality Analysis');
    console.log('-'.repeat(40));
    
    const scriptFiles = await this.getAllScriptFiles();
    let totalLines = 0;
    let totalComplexity = 0;
    const issues = [];
    
    for (const file of scriptFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      totalLines += lines.length;
      
      // Check for code smells
      const checks = [
        { pattern: /eval\(/g, issue: 'Use of eval()' },
        { pattern: /innerHTML\s*=/g, issue: 'Direct innerHTML assignment' },
        { pattern: /TODO|FIXME|XXX|HACK/gi, issue: 'Unresolved TODO/FIXME' },
        { pattern: /console\.(log|error)/g, issue: 'Console logging in production' },
        { pattern: /catch\s*\(\s*\w*\s*\)\s*{\s*}/g, issue: 'Empty catch block' },
        { pattern: /function\s+\w+\s*\([^)]{100,}\)/g, issue: 'Function with too many parameters' }
      ];
      
      for (const { pattern, issue } of checks) {
        const matches = content.match(pattern);
        if (matches) {
          issues.push({
            file: path.relative(process.cwd(), file),
            issue,
            count: matches.length
          });
        }
      }
      
      // Calculate cyclomatic complexity (simplified)
      const complexity = this.calculateComplexity(content);
      totalComplexity += complexity;
      
      if (complexity > 20) {
        this.warnings.push({
          severity: 'LOW',
          file: path.relative(process.cwd(), file),
          issue: `High complexity (${complexity})`
        });
      }
    }
    
    this.codeMetrics = {
      totalFiles: scriptFiles.length,
      totalLines,
      avgComplexity: Math.round(totalComplexity / scriptFiles.length),
      codeSmells: issues.length
    };
    
    console.log(`   Files analyzed: ${scriptFiles.length}`);
    console.log(`   Total lines: ${totalLines}`);
    console.log(`   Average complexity: ${this.codeMetrics.avgComplexity}`);
    console.log(`   Code smells found: ${issues.length}`);
  }

  async auditDataHandling() {
    console.log('\n💾 Data Handling Security');
    console.log('-'.repeat(40));
    
    const scriptFiles = await this.getAllScriptFiles();
    
    for (const file of scriptFiles) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check for unsafe data handling
      if (/JSON\.parse\([^)]*\)/.test(content) && !/try\s*{[^}]*JSON\.parse/.test(content)) {
        this.warnings.push({
          severity: 'LOW',
          file: path.relative(process.cwd(), file),
          issue: 'Unprotected JSON.parse()'
        });
      }
      
      // Check for path traversal vulnerabilities
      if (/path\.join\([^)]*\.\.[^)]*\)/.test(content)) {
        this.vulnerabilities.push({
          severity: 'HIGH',
          file: path.relative(process.cwd(), file),
          issue: 'Potential path traversal vulnerability'
        });
      }
      
      // Check for command injection
      if (/exec\(|execSync\(|spawn\(/.test(content)) {
        const hasValidation = /sanitize|escape|validate/.test(content);
        if (!hasValidation) {
          this.vulnerabilities.push({
            severity: 'CRITICAL',
            file: path.relative(process.cwd(), file),
            issue: 'Potential command injection vulnerability'
          });
        }
      }
    }
    
    console.log(`   ✓ Data handling audit complete`);
  }

  async auditProcessIsolation() {
    console.log('\n🔐 Process Isolation Audit');
    console.log('-'.repeat(40));
    
    // Check for proper process isolation
    const processes = [
      { name: 'ComfyUI', port: 8188 },
      { name: 'n8n', port: 5678 },
      { name: 'Orchestrator', port: 5679 }
    ];
    
    for (const proc of processes) {
      console.log(`   Checking ${proc.name}...`);
      
      // Verify process is running with limited privileges
      try {
        const { stdout } = await execPromise(`ps aux | grep -i ${proc.port} | grep -v grep | head -1`);
        if (stdout && stdout.includes('root')) {
          this.vulnerabilities.push({
            severity: 'HIGH',
            issue: `${proc.name} running as root`
          });
        }
      } catch (e) {
        // Process not running
      }
    }
    
    // Check for resource limits
    this.recommendations.push({
      category: 'Process Isolation',
      recommendation: 'Consider using Docker containers for better isolation'
    });
    
    this.recommendations.push({
      category: 'Resource Limits',
      recommendation: 'Implement memory and CPU limits for generation processes'
    });
    
    console.log(`   ✓ Process isolation checks complete`);
  }

  async generateSecurityReport() {
    console.log('\n' + '='.repeat(60));
    console.log('📋 SECURITY AUDIT REPORT');
    console.log('='.repeat(60));
    
    // Summary
    const critical = this.vulnerabilities.filter(v => v.severity === 'CRITICAL').length;
    const high = this.vulnerabilities.filter(v => v.severity === 'HIGH').length;
    const medium = this.vulnerabilities.filter(v => v.severity === 'MEDIUM').length;
    
    console.log('\n📊 Summary:');
    console.log(`   Critical Issues: ${critical}`);
    console.log(`   High Issues: ${high}`);
    console.log(`   Medium Issues: ${medium}`);
    console.log(`   Warnings: ${this.warnings.length}`);
    
    // Critical vulnerabilities
    if (critical > 0) {
      console.log('\n🚨 CRITICAL VULNERABILITIES:');
      this.vulnerabilities
        .filter(v => v.severity === 'CRITICAL')
        .forEach(v => console.log(`   - ${v.issue} in ${v.file || 'system'}`));
    }
    
    // High vulnerabilities
    if (high > 0) {
      console.log('\n❌ HIGH SEVERITY ISSUES:');
      this.vulnerabilities
        .filter(v => v.severity === 'HIGH')
        .forEach(v => console.log(`   - ${v.issue} in ${v.file || 'system'}`));
    }
    
    // Code metrics
    console.log('\n📈 Code Metrics:');
    Object.entries(this.codeMetrics).forEach(([key, value]) => {
      console.log(`   ${key}: ${value}`);
    });
    
    // Recommendations
    console.log('\n💡 Security Recommendations:');
    this.recommendations.forEach(r => {
      console.log(`   [${r.category}] ${r.recommendation}`);
    });
    
    // Save detailed report
    const report = {
      timestamp: new Date().toISOString(),
      vulnerabilities: this.vulnerabilities,
      warnings: this.warnings,
      recommendations: this.recommendations,
      metrics: this.codeMetrics,
      score: this.calculateSecurityScore()
    };
    
    const reportPath = '09_Performance/security_audit_report.json';
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`\n📁 Detailed report saved to: ${reportPath}`);
    
    // Overall score
    const score = report.score;
    console.log(`\n🏆 Security Score: ${score}/100`);
    
    if (score >= 90) {
      console.log('   Grade: A - Excellent security posture');
    } else if (score >= 80) {
      console.log('   Grade: B - Good security, minor improvements needed');
    } else if (score >= 70) {
      console.log('   Grade: C - Acceptable, several improvements recommended');
    } else if (score >= 60) {
      console.log('   Grade: D - Poor security, immediate action required');
    } else {
      console.log('   Grade: F - Critical security issues, do not deploy');
    }
  }

  calculateSecurityScore() {
    let score = 100;
    
    // Deduct points for vulnerabilities
    this.vulnerabilities.forEach(v => {
      if (v.severity === 'CRITICAL') score -= 20;
      else if (v.severity === 'HIGH') score -= 10;
      else if (v.severity === 'MEDIUM') score -= 5;
    });
    
    // Deduct points for warnings
    score -= this.warnings.length * 2;
    
    // Ensure score doesn't go below 0
    return Math.max(0, Math.min(100, score));
  }

  async getAllScriptFiles() {
    const extensions = ['.js', '.py', '.sh'];
    const files = [];
    
    const walk = (dir) => {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      for (const entry of entries) {
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
          walk(fullPath);
        } else if (entry.isFile() && extensions.some(ext => entry.name.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walk('scripts');
    return files;
  }

  async globFiles(pattern) {
    // Simple glob implementation
    const dir = path.dirname(pattern);
    const filePattern = path.basename(pattern);
    
    if (!fs.existsSync(dir)) return [];
    
    const files = fs.readdirSync(dir);
    return files
      .filter(f => {
        if (filePattern.includes('*')) {
          const regex = new RegExp(filePattern.replace('*', '.*'));
          return regex.test(f);
        }
        return f === filePattern;
      })
      .map(f => path.join(dir, f));
  }

  getLineNumber(content, match) {
    const lines = content.substring(0, content.indexOf(match)).split('\n');
    return lines.length;
  }

  calculateComplexity(code) {
    // Simplified cyclomatic complexity calculation
    const patterns = [
      /if\s*\(/g,
      /else\s+if\s*\(/g,
      /for\s*\(/g,
      /while\s*\(/g,
      /case\s+/g,
      /catch\s*\(/g,
      /\?\s*[^:]+\s*:/g // ternary operators
    ];
    
    let complexity = 1; // Base complexity
    patterns.forEach(pattern => {
      const matches = code.match(pattern);
      if (matches) complexity += matches.length;
    });
    
    return complexity;
  }
}

// Export for use in other scripts
module.exports = SecurityAuditor;

// CLI
if (require.main === module) {
  const auditor = new SecurityAuditor();
  auditor.performFullAudit().then(success => {
    process.exit(success ? 0 : 1);
  });
}
