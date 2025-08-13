#!/usr/bin/env python3
"""
Role-Based Permissions System (#22)
Sprint 2 - Collaboration Core

A lightweight permission system for TTRPG vault content with GM/Player/Observer roles
and granular content visibility controls. Built following lean/agile MVI principles.
"""

import json
import os
import argparse
import hashlib
import time
from pathlib import Path
from typing import Dict, List, Set, Optional, Tuple
from dataclasses import dataclass, asdict
from datetime import datetime


@dataclass
class User:
    """User profile with role and permissions"""
    username: str
    display_name: str
    email: Optional[str]
    role: str  # GM, Player, Observer
    permissions: List[str]
    created_at: str
    last_login: Optional[str] = None
    session_token: Optional[str] = None


@dataclass
class ContentPermission:
    """Permission rule for specific content"""
    path_pattern: str  # File path or glob pattern
    roles_allowed: List[str]  # Roles that can access
    permission_type: str  # read, write, admin
    created_by: str
    reason: str  # Why this permission exists


class PermissionManager:
    """Core permission management system"""
    
    def __init__(self, vault_path: str):
        self.vault_path = Path(vault_path)
        self.data_dir = self.vault_path / "scripts" / "permission_data"
        self.data_dir.mkdir(exist_ok=True)
        
        self.users_file = self.data_dir / "users.json"
        self.permissions_file = self.data_dir / "content_permissions.json"
        self.sessions_file = self.data_dir / "active_sessions.json"
        
        # Load existing data
        self.users = self._load_users()
        self.permissions = self._load_permissions()
        self.sessions = self._load_sessions()
        
        # Default permission rules
        self._setup_default_permissions()
    
    def _load_users(self) -> Dict[str, User]:
        """Load user profiles from storage"""
        if not self.users_file.exists():
            return {}
        
        try:
            with open(self.users_file, 'r') as f:
                data = json.load(f)
            return {username: User(**user_data) for username, user_data in data.items()}
        except (json.JSONDecodeError, TypeError):
            return {}
    
    def _load_permissions(self) -> List[ContentPermission]:
        """Load content permissions from storage"""
        if not self.permissions_file.exists():
            return []
        
        try:
            with open(self.permissions_file, 'r') as f:
                data = json.load(f)
            return [ContentPermission(**perm) for perm in data]
        except (json.JSONDecodeError, TypeError):
            return []
    
    def _load_sessions(self) -> Dict[str, Dict]:
        """Load active sessions"""
        if not self.sessions_file.exists():
            return {}
        
        try:
            with open(self.sessions_file, 'r') as f:
                return json.load(f)
        except (json.JSONDecodeError, TypeError):
            return {}
    
    def _save_users(self):
        """Save users to storage"""
        with open(self.users_file, 'w') as f:
            data = {username: asdict(user) for username, user in self.users.items()}
            json.dump(data, f, indent=2)
    
    def _save_permissions(self):
        """Save permissions to storage"""
        with open(self.permissions_file, 'w') as f:
            data = [asdict(perm) for perm in self.permissions]
            json.dump(data, f, indent=2)
    
    def _save_sessions(self):
        """Save active sessions"""
        with open(self.sessions_file, 'w') as f:
            json.dump(self.sessions, f, indent=2)
    
    def _setup_default_permissions(self):
        """Setup default permission rules for Cordelia vault"""
        if not self.permissions:
            default_perms = [
                ContentPermission(
                    path_pattern="06_GM_Resources/**",
                    roles_allowed=["GM"],
                    permission_type="read",
                    created_by="system",
                    reason="GM-only resources and campaign secrets"
                ),
                ContentPermission(
                    path_pattern="**/Shadow_Conspiracy/**",
                    roles_allowed=["GM"],
                    permission_type="read", 
                    created_by="system",
                    reason="Major campaign spoilers for players"
                ),
                ContentPermission(
                    path_pattern="**/Deep_Mother*",
                    roles_allowed=["GM"],
                    permission_type="read",
                    created_by="system", 
                    reason="End-game campaign secrets"
                ),
                ContentPermission(
                    path_pattern="07_Player_Resources/**",
                    roles_allowed=["GM", "Player", "Observer"],
                    permission_type="read",
                    created_by="system",
                    reason="Content designed for all players"
                ),
                ContentPermission(
                    path_pattern="02_Worldbuilding/**",
                    roles_allowed=["GM", "Player"],
                    permission_type="read",
                    created_by="system",
                    reason="General world lore accessible to players"
                ),
                ContentPermission(
                    path_pattern="01_Adventures/**",
                    roles_allowed=["GM"],
                    permission_type="read",
                    created_by="system",
                    reason="Campaign adventures contain spoilers"
                )
            ]
            self.permissions.extend(default_perms)
            self._save_permissions()
    
    def create_user(self, username: str, display_name: str, role: str, 
                   email: Optional[str] = None) -> bool:
        """Create a new user with specified role"""
        if username in self.users:
            return False
        
        # Define role permissions
        role_permissions = {
            "GM": ["read_all", "write_all", "admin", "create_content", "manage_users"],
            "Player": ["read_player", "write_own", "participate"],
            "Observer": ["read_public", "observe"]
        }
        
        user = User(
            username=username,
            display_name=display_name,
            email=email,
            role=role,
            permissions=role_permissions.get(role, ["read_public"]),
            created_at=datetime.now().isoformat()
        )
        
        self.users[username] = user
        self._save_users()
        return True
    
    def authenticate_user(self, username: str) -> Optional[str]:
        """Simple authentication - generates session token"""
        if username not in self.users:
            return None
        
        # Generate session token
        token_data = f"{username}{time.time()}"
        token = hashlib.sha256(token_data.encode()).hexdigest()[:32]
        
        # Store session
        self.sessions[token] = {
            "username": username,
            "created_at": datetime.now().isoformat(),
            "expires_at": datetime.fromtimestamp(time.time() + 86400).isoformat()  # 24 hours
        }
        
        # Update user
        self.users[username].session_token = token
        self.users[username].last_login = datetime.now().isoformat()
        
        self._save_users()
        self._save_sessions()
        return token
    
    def get_user_by_token(self, token: str) -> Optional[User]:
        """Get user from session token"""
        if token not in self.sessions:
            return None
        
        session = self.sessions[token]
        username = session["username"]
        
        # Check if session expired
        expires_at = datetime.fromisoformat(session["expires_at"])
        if datetime.now() > expires_at:
            del self.sessions[token]
            self._save_sessions()
            return None
        
        return self.users.get(username)
    
    def check_access(self, user: User, file_path: str, permission_type: str = "read") -> bool:
        """Check if user can access specific file"""
        relative_path = str(Path(file_path).relative_to(self.vault_path))
        
        # GMs have access to everything
        if user.role == "GM":
            return True
        
        # Check specific permission rules
        for perm in self.permissions:
            if self._match_pattern(relative_path, perm.path_pattern):
                if user.role in perm.roles_allowed:
                    return True
                else:
                    return False  # Explicit denial
        
        # Default permissions by role
        if user.role == "Player":
            # Players can read general content but not GM secrets
            restricted_patterns = [
                "06_GM_Resources/**",
                "**/Shadow_Conspiracy/**", 
                "**/Deep_Mother*",
                "01_Adventures/**"
            ]
            for pattern in restricted_patterns:
                if self._match_pattern(relative_path, pattern):
                    return False
            return True
        
        elif user.role == "Observer":
            # Observers can only read public content
            public_patterns = [
                "07_Player_Resources/**",
                "02_Worldbuilding/Lore/**",
                "02_Worldbuilding/Items/**"
            ]
            for pattern in public_patterns:
                if self._match_pattern(relative_path, pattern):
                    return True
            return False
        
        return False
    
    def _match_pattern(self, path: str, pattern: str) -> bool:
        """Simple glob-style pattern matching"""
        from fnmatch import fnmatch
        return fnmatch(path, pattern)
    
    def get_accessible_files(self, user: User) -> List[str]:
        """Get list of all files user can access"""
        accessible = []
        
        for root, dirs, files in os.walk(self.vault_path):
            for file in files:
                if file.endswith('.md'):
                    file_path = os.path.join(root, file)
                    if self.check_access(user, file_path):
                        relative_path = str(Path(file_path).relative_to(self.vault_path))
                        accessible.append(relative_path)
        
        return sorted(accessible)
    
    def add_permission_rule(self, path_pattern: str, roles: List[str], 
                          permission_type: str, created_by: str, reason: str):
        """Add new permission rule"""
        perm = ContentPermission(
            path_pattern=path_pattern,
            roles_allowed=roles,
            permission_type=permission_type,
            created_by=created_by,
            reason=reason
        )
        self.permissions.append(perm)
        self._save_permissions()
    
    def list_users(self) -> List[Dict]:
        """List all users with safe information"""
        return [
            {
                "username": user.username,
                "display_name": user.display_name,
                "role": user.role,
                "last_login": user.last_login,
                "created_at": user.created_at
            }
            for user in self.users.values()
        ]
    
    def get_user_stats(self) -> Dict:
        """Get permission system statistics"""
        role_counts = {}
        for user in self.users.values():
            role_counts[user.role] = role_counts.get(user.role, 0) + 1
        
        active_sessions = len([s for s in self.sessions.values() 
                             if datetime.now() < datetime.fromisoformat(s["expires_at"])])
        
        return {
            "total_users": len(self.users),
            "role_distribution": role_counts,
            "active_sessions": active_sessions,
            "permission_rules": len(self.permissions),
            "last_updated": datetime.now().isoformat()
        }


def main():
    """Command line interface for permission management"""
    parser = argparse.ArgumentParser(description="Role-Based Permissions System")
    parser.add_argument("--vault", default=".", help="Vault directory path")
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # Create user command
    create_user = subparsers.add_parser("create-user", help="Create new user")
    create_user.add_argument("username", help="Username")
    create_user.add_argument("display_name", help="Display name")
    create_user.add_argument("role", choices=["GM", "Player", "Observer"], help="User role")
    create_user.add_argument("--email", help="Email address")
    
    # Login command
    login = subparsers.add_parser("login", help="Authenticate user")
    login.add_argument("username", help="Username")
    
    # Check access command
    check_access = subparsers.add_parser("check-access", help="Check file access")
    check_access.add_argument("token", help="Session token")
    check_access.add_argument("file_path", help="File to check")
    
    # List accessible command
    list_files = subparsers.add_parser("list-accessible", help="List accessible files")
    list_files.add_argument("token", help="Session token")
    
    # Add permission command
    add_perm = subparsers.add_parser("add-permission", help="Add permission rule")
    add_perm.add_argument("pattern", help="Path pattern")
    add_perm.add_argument("roles", help="Allowed roles (comma-separated)")
    add_perm.add_argument("--type", default="read", help="Permission type")
    add_perm.add_argument("--created-by", required=True, help="Creator username")
    add_perm.add_argument("--reason", required=True, help="Reason for permission")
    
    # Stats command
    subparsers.add_parser("stats", help="Show system statistics")
    
    # List users command
    subparsers.add_parser("list-users", help="List all users")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return
    
    # Initialize permission manager
    perm_manager = PermissionManager(args.vault)
    
    if args.command == "create-user":
        success = perm_manager.create_user(
            args.username, 
            args.display_name, 
            args.role,
            args.email
        )
        if success:
            print(f"✅ Created user '{args.username}' with role '{args.role}'")
        else:
            print(f"❌ User '{args.username}' already exists")
    
    elif args.command == "login":
        token = perm_manager.authenticate_user(args.username)
        if token:
            print(f"✅ Login successful")
            print(f"Session Token: {token}")
        else:
            print(f"❌ User '{args.username}' not found")
    
    elif args.command == "check-access":
        user = perm_manager.get_user_by_token(args.token)
        if not user:
            print("❌ Invalid or expired session token")
            return
        
        can_access = perm_manager.check_access(user, args.file_path)
        print(f"{'✅' if can_access else '❌'} User '{user.username}' {'can' if can_access else 'cannot'} access '{args.file_path}'")
    
    elif args.command == "list-accessible":
        user = perm_manager.get_user_by_token(args.token)
        if not user:
            print("❌ Invalid or expired session token")
            return
        
        files = perm_manager.get_accessible_files(user)
        print(f"📁 Accessible files for {user.username} ({user.role}):")
        for file_path in files[:50]:  # Limit output
            print(f"  {file_path}")
        
        if len(files) > 50:
            print(f"  ... and {len(files) - 50} more files")
        
        print(f"\nTotal: {len(files)} accessible files")
    
    elif args.command == "add-permission":
        roles = [role.strip() for role in args.roles.split(",")]
        perm_manager.add_permission_rule(
            args.pattern, 
            roles, 
            args.type,
            args.created_by,
            args.reason
        )
        print(f"✅ Added permission rule for pattern '{args.pattern}'")
    
    elif args.command == "stats":
        stats = perm_manager.get_user_stats()
        print("📊 Permission System Statistics:")
        print(f"  Total Users: {stats['total_users']}")
        print(f"  Active Sessions: {stats['active_sessions']}")
        print(f"  Permission Rules: {stats['permission_rules']}")
        print(f"  Role Distribution:")
        for role, count in stats['role_distribution'].items():
            print(f"    {role}: {count}")
    
    elif args.command == "list-users":
        users = perm_manager.list_users()
        print("👥 Registered Users:")
        for user in users:
            last_login = user['last_login'][:10] if user['last_login'] else 'Never'
            print(f"  {user['username']} ({user['display_name']}) - {user['role']} - Last: {last_login}")


if __name__ == "__main__":
    main()