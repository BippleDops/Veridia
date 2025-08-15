const { exec } = require('child_process');
const util = require('util');
const fs = require('fs').promises;
const path = require('path');
const execPromise = util.promisify(exec);

class ContinuousBackup {
  async run() {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] Backup Manager: Creating backup...`);
    
    try {
      const backupDir = path.join(process.cwd(), '08_Archive', 'backups');
      await fs.mkdir(backupDir, { recursive: true });
      
      const date = new Date().toISOString().split('T')[0];
      const backupName = `vault_backup_${date}.tar.gz`;
      const backupPath = path.join(backupDir, backupName);
      
      // Create backup excluding certain directories
      const excludes = '--exclude=node_modules --exclude=.git --exclude=08_Archive/backups';
      const command = `tar czf "${backupPath}" ${excludes} .`;
      
      await execPromise(command);
      
      // Clean old backups (keep last 7)
      const backups = await fs.readdir(backupDir);
      const sortedBackups = backups.sort().reverse();
      
      for (let i = 7; i < sortedBackups.length; i++) {
        await fs.unlink(path.join(backupDir, sortedBackups[i]));
      }
      
      console.log(`[${timestamp}] Backup Manager: Backup created successfully`);
      
    } catch (error) {
      console.error(`[${timestamp}] Backup Manager Error:`, error.message);
    }
  }
}

const backup = new ContinuousBackup();
backup.run();