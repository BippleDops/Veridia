#!/usr/bin/env python3
"""
Compress all backup directories to save space and prevent issues
"""

import os
import shutil
from pathlib import Path
import zipfile
from datetime import datetime
import json

class BackupCompressor:
    def __init__(self, vault_path: Path = Path(".")):
        self.vault_path = vault_path
        self.compressed = []
        self.errors = []
        
    def compress_directory(self, dir_path: Path, archive_name: str = None) -> bool:
        """Compress a directory into a zip file"""
        try:
            if not dir_path.exists() or not dir_path.is_dir():
                print(f"⚠️ Directory not found: {dir_path}")
                return False
                
            # Count files
            file_count = sum(1 for _ in dir_path.rglob("*") if _.is_file())
            if file_count == 0:
                print(f"⚠️ Directory empty: {dir_path}")
                return False
                
            # Create archive name
            if not archive_name:
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                archive_name = f"{dir_path.name}_{timestamp}.zip"
                
            archive_path = dir_path.parent / archive_name
            
            print(f"📦 Compressing {dir_path.name} ({file_count} files)...")
            
            # Create zip file
            with zipfile.ZipFile(archive_path, 'w', zipfile.ZIP_DEFLATED) as zipf:
                for file_path in dir_path.rglob("*"):
                    if file_path.is_file():
                        arcname = file_path.relative_to(dir_path.parent)
                        zipf.write(file_path, arcname)
                        
            # Verify archive
            with zipfile.ZipFile(archive_path, 'r') as zipf:
                if len(zipf.namelist()) != file_count:
                    raise ValueError(f"Archive verification failed: expected {file_count} files, got {len(zipf.namelist())}")
                    
            # Calculate compression ratio
            original_size = sum(f.stat().st_size for f in dir_path.rglob("*") if f.is_file())
            compressed_size = archive_path.stat().st_size
            ratio = (1 - compressed_size / original_size) * 100 if original_size > 0 else 0
            
            print(f"✅ Compressed to {archive_path.name} (saved {ratio:.1f}% space)")
            
            # Remove original directory
            shutil.rmtree(dir_path)
            print(f"🗑️ Removed original directory: {dir_path.name}")
            
            self.compressed.append({
                "original": str(dir_path),
                "archive": str(archive_path),
                "files": file_count,
                "original_size_mb": original_size / (1024*1024),
                "compressed_size_mb": compressed_size / (1024*1024),
                "compression_ratio": ratio
            })
            
            return True
            
        except Exception as e:
            print(f"❌ Error compressing {dir_path}: {e}")
            self.errors.append(f"{dir_path}: {e}")
            return False
            
    def compress_all_backups(self):
        """Compress all identified backup directories"""
        print("🔍 Finding backup directories to compress...")
        print("="*60)
        
        targets = []
        
        # 1. 08_Archive subdirectories
        archive_dir = self.vault_path / "08_Archive"
        if archive_dir.exists():
            for subdir in archive_dir.iterdir():
                if subdir.is_dir() and "backup" in subdir.name.lower():
                    targets.append(subdir)
                    
        # 2. Root backups directory
        backups_dir = self.vault_path / "backups"
        if backups_dir.exists() and backups_dir.is_dir():
            targets.append(backups_dir)
            
        # 3. Data directory large JSON files
        data_dir = self.vault_path / "data"
        if data_dir.exists():
            for json_file in data_dir.glob("*.json"):
                if json_file.stat().st_size > 5 * 1024 * 1024:  # > 5MB
                    print(f"📊 Large JSON found: {json_file.name} ({json_file.stat().st_size / (1024*1024):.1f} MB)")
                    # Create temp directory for this file
                    temp_dir = data_dir / f"temp_{json_file.stem}"
                    temp_dir.mkdir(exist_ok=True)
                    shutil.move(str(json_file), str(temp_dir / json_file.name))
                    targets.append(temp_dir)
                    
        # 4. Any other unzipped backup directories
        for pattern in ["*backup*", "*archive*", "*old*"]:
            for found_dir in self.vault_path.glob(f"**/{pattern}"):
                if found_dir.is_dir() and found_dir not in targets:
                    # Skip if already in 08_Archive or if it's the 08_Archive itself
                    if "08_Archive" not in str(found_dir.parent) and found_dir.name != "08_Archive":
                        file_count = sum(1 for _ in found_dir.rglob("*") if _.is_file())
                        if file_count > 100:  # Only compress if significant number of files
                            targets.append(found_dir)
                            
        print(f"Found {len(targets)} directories to compress:\n")
        for target in targets:
            file_count = sum(1 for _ in target.rglob("*") if _.is_file())
            size_mb = sum(f.stat().st_size for f in target.rglob("*") if f.is_file()) / (1024*1024)
            print(f"  • {target.relative_to(self.vault_path)}: {file_count} files, {size_mb:.1f} MB")
            
        if not targets:
            print("✅ No uncompressed backup directories found!")
            return
            
        print("\n" + "="*60)
        print("Starting compression...\n")
        
        # Compress each target
        for target in targets:
            self.compress_directory(target)
            
        # Generate report
        self.generate_report()
        
    def generate_report(self):
        """Generate compression report"""
        
        report = {
            "timestamp": datetime.now().isoformat(),
            "compressed": self.compressed,
            "errors": self.errors,
            "summary": {
                "directories_compressed": len(self.compressed),
                "total_files": sum(c["files"] for c in self.compressed),
                "original_size_mb": sum(c["original_size_mb"] for c in self.compressed),
                "compressed_size_mb": sum(c["compressed_size_mb"] for c in self.compressed),
                "space_saved_mb": sum(c["original_size_mb"] - c["compressed_size_mb"] for c in self.compressed)
            }
        }
        
        # Save report
        report_dir = self.vault_path / "reports"
        report_dir.mkdir(exist_ok=True)
        report_path = report_dir / f"backup_compression_{datetime.now().strftime('%Y%m%d_%H%M%S')}.json"
        
        with open(report_path, 'w') as f:
            json.dump(report, f, indent=2)
            
        # Print summary
        print("\n" + "="*60)
        print("📦 COMPRESSION COMPLETE")
        print("="*60)
        print(f"Directories compressed: {report['summary']['directories_compressed']}")
        print(f"Total files: {report['summary']['total_files']:,}")
        print(f"Original size: {report['summary']['original_size_mb']:.1f} MB")
        print(f"Compressed size: {report['summary']['compressed_size_mb']:.1f} MB")
        print(f"Space saved: {report['summary']['space_saved_mb']:.1f} MB")
        
        if self.errors:
            print(f"\n⚠️ Errors encountered: {len(self.errors)}")
            for error in self.errors[:5]:
                print(f"  • {error}")
                
        print(f"\n📄 Report saved: {report_path}")

def main():
    compressor = BackupCompressor()
    compressor.compress_all_backups()

if __name__ == "__main__":
    main()