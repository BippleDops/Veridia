const { exec } = require('child_process');
const util = require('util');
const execPromise = util.promisify(exec);

class ContinuousGitSync {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Git Sync: Starting synchronization...`);
    
    try {
      // Check for changes
      const { stdout: status } = await execPromise('git status --porcelain');
      
      if (status.trim()) {
        // Add all changes
        await execPromise('git add -A');
        
        // Commit with timestamp
        const message = `Auto-commit: Continuous improvements - ${timestamp}`;
        await execPromise(`git commit -m "${message}"`);
        
        // Push if remote exists
        try {
          await execPromise('git push');
          console.log(`[${timestamp}] Git Sync: Pushed changes to remote`);
        } catch {
          console.log(`[${timestamp}] Git Sync: Committed locally (no remote or push failed)`);
        }
      } else {
        console.log(`[${timestamp}] Git Sync: No changes to commit`);
      }
      
    } catch (error) {
      console.error(`[${timestamp}] Git Sync Error:`, error.message);
    }
  }
}

const syncer = new ContinuousGitSync();
syncer.run();