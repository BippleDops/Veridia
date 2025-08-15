const fs = require('fs').promises;
const path = require('path');

class ContinuousQualityMonitor {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Quality Monitor: Running quality checks...`);
    
    try {
      const report = {
        timestamp,
        brokenLinks: 0,
        stubFiles: 0,
        missingMetadata: 0,
        duplicates: 0,
        totalFiles: 0
      };
      
      // Scan all files
      const files = await this.getAllMarkdownFiles();
      report.totalFiles = files.length;
      
      for (const file of files) {
        const content = await fs.readFile(file, 'utf-8');
        
        // Check for broken links
        const links = content.match(/\[\[([^\]]+)\]\]/g) || [];
        for (const link of links) {
          const target = link.slice(2, -2).split('|')[0];
          if (!(await this.fileExists(target))) {
            report.brokenLinks++;
          }
        }
        
        // Check for stubs
        if (content.length < 500 || content.includes('placeholder') || content.includes('stub')) {
          report.stubFiles++;
        }
        
        // Check for missing metadata
        if (!content.startsWith('---')) {
          report.missingMetadata++;
        }
      }
      
      // Save report
      await this.saveReport(report);
      
      console.log(`[${timestamp}] Quality Monitor: Check complete - ${report.brokenLinks} broken links, ${report.stubFiles} stubs`);
      
    } catch (error) {
      console.error(`[${timestamp}] Quality Monitor Error:`, error.message);
    }
  }
  
  async getAllMarkdownFiles() {
    const files = [];
    const walk = async (dir) => {
      try {
        const entries = await fs.readdir(dir, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = path.join(dir, entry.name);
          if (entry.isDirectory() && !entry.name.startsWith('.')) {
            await walk(fullPath);
          } else if (entry.isFile() && entry.name.endsWith('.md')) {
            files.push(fullPath);
          }
        }
      } catch {
        // Skip inaccessible directories
      }
    };
    await walk(process.cwd());
    return files;
  }
  
  async fileExists(target) {
    try {
      await fs.access(path.join(process.cwd(), target + '.md'));
      return true;
    } catch {
      return false;
    }
  }
  
  async saveReport(report) {
    const reportPath = path.join(process.cwd(), '09_Performance', 'quality_report.json');
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));
  }
}

const monitor = new ContinuousQualityMonitor();
monitor.run();