#!/usr/bin/env python3
"""
Session Broadcasting (#23)
Sprint 2 - Collaboration Core

Real-time change notifications and player view synchronization for collaborative 
TTRPG sessions. Built following lean/agile MVI principles.
"""

import json
import os
import argparse
import time
import hashlib
import threading
import queue
from pathlib import Path
from typing import Dict, List, Optional, Set, Any
from dataclasses import dataclass, asdict
from datetime import datetime
import socketserver
import http.server
from urllib.parse import parse_qs, urlparse


@dataclass
class BroadcastEvent:
    """Represents a broadcast event"""
    event_id: str
    event_type: str  # file_change, cursor_move, selection_change, message
    user_id: str
    timestamp: str
    data: Dict[str, Any]
    target_users: Optional[List[str]] = None  # None = broadcast to all


@dataclass
class SessionUser:
    """Represents a connected session user"""
    user_id: str
    display_name: str
    role: str  # GM, Player, Observer
    connected_at: str
    last_seen: str
    current_file: Optional[str] = None
    cursor_position: Optional[Dict] = None
    selection: Optional[Dict] = None


class SessionBroadcaster:
    """Core session broadcasting system"""
    
    def __init__(self, vault_path: str, port: int = 8080):
        self.vault_path = Path(vault_path)
        self.port = port
        
        # Data storage
        self.broadcast_dir = self.vault_path / "scripts" / "broadcast_data"
        self.broadcast_dir.mkdir(exist_ok=True)
        
        self.users_file = self.broadcast_dir / "session_users.json"
        self.events_file = self.broadcast_dir / "broadcast_events.json"
        
        # In-memory state
        self.connected_users: Dict[str, SessionUser] = {}
        self.event_queue = queue.Queue()
        self.event_history: List[BroadcastEvent] = []
        self.file_watchers: Dict[str, float] = {}  # file -> last_modified
        
        # Server state
        self.server = None
        self.server_thread = None
        self.running = False
        
        self._load_data()
    
    def _load_data(self):
        """Load persistent data"""
        # Load users
        if self.users_file.exists():
            try:
                with open(self.users_file, 'r') as f:
                    data = json.load(f)
                self.connected_users = {
                    user_id: SessionUser(**user_data) 
                    for user_id, user_data in data.items()
                }
            except (json.JSONDecodeError, TypeError):
                self.connected_users = {}
        
        # Load recent events
        if self.events_file.exists():
            try:
                with open(self.events_file, 'r') as f:
                    data = json.load(f)
                self.event_history = [
                    BroadcastEvent(**event_data) for event_data in data[-100:]  # Keep last 100 events
                ]
            except (json.JSONDecodeError, TypeError):
                self.event_history = []
    
    def _save_users(self):
        """Save connected users"""
        with open(self.users_file, 'w') as f:
            data = {user_id: asdict(user) for user_id, user in self.connected_users.items()}
            json.dump(data, f, indent=2)
    
    def _save_events(self):
        """Save event history"""
        with open(self.events_file, 'w') as f:
            data = [asdict(event) for event in self.event_history[-100:]]  # Keep last 100
            json.dump(data, f, indent=2)
    
    def _generate_event_id(self) -> str:
        """Generate unique event ID"""
        timestamp = str(time.time())
        return hashlib.md5(timestamp.encode()).hexdigest()[:8]
    
    def connect_user(self, user_id: str, display_name: str, role: str) -> bool:
        """Connect a user to the session"""
        user = SessionUser(
            user_id=user_id,
            display_name=display_name,
            role=role,
            connected_at=datetime.now().isoformat(),
            last_seen=datetime.now().isoformat()
        )
        
        self.connected_users[user_id] = user
        self._save_users()
        
        # Broadcast user joined event
        self.broadcast_event(
            event_type="user_joined",
            user_id=user_id,
            data={
                "user_id": user_id,
                "display_name": display_name,
                "role": role
            }
        )
        
        return True
    
    def disconnect_user(self, user_id: str) -> bool:
        """Disconnect a user from the session"""
        if user_id in self.connected_users:
            user = self.connected_users[user_id]
            
            # Broadcast user left event
            self.broadcast_event(
                event_type="user_left",
                user_id=user_id,
                data={
                    "user_id": user_id,
                    "display_name": user.display_name
                }
            )
            
            del self.connected_users[user_id]
            self._save_users()
            return True
        return False
    
    def update_user_activity(self, user_id: str, activity_data: Dict):
        """Update user activity (cursor, selection, current file)"""
        if user_id not in self.connected_users:
            return False
        
        user = self.connected_users[user_id]
        user.last_seen = datetime.now().isoformat()
        
        # Update user state
        if 'current_file' in activity_data:
            user.current_file = activity_data['current_file']
        if 'cursor_position' in activity_data:
            user.cursor_position = activity_data['cursor_position']
        if 'selection' in activity_data:
            user.selection = activity_data['selection']
        
        self._save_users()
        
        # Broadcast activity update
        self.broadcast_event(
            event_type="user_activity",
            user_id=user_id,
            data=activity_data
        )
        
        return True
    
    def broadcast_event(self, event_type: str, user_id: str, data: Dict, target_users: Optional[List[str]] = None):
        """Broadcast an event to connected users"""
        event = BroadcastEvent(
            event_id=self._generate_event_id(),
            event_type=event_type,
            user_id=user_id,
            timestamp=datetime.now().isoformat(),
            data=data,
            target_users=target_users
        )
        
        # Add to history
        self.event_history.append(event)
        if len(self.event_history) > 100:
            self.event_history = self.event_history[-100:]
        
        # Queue for broadcast
        self.event_queue.put(event)
        
        # Save periodically
        if len(self.event_history) % 10 == 0:
            self._save_events()
        
        return event.event_id
    
    def get_recent_events(self, since_timestamp: Optional[str] = None, user_id: Optional[str] = None) -> List[BroadcastEvent]:
        """Get recent events, optionally filtered"""
        events = self.event_history
        
        if since_timestamp:
            try:
                since_dt = datetime.fromisoformat(since_timestamp)
                events = [e for e in events if datetime.fromisoformat(e.timestamp) > since_dt]
            except ValueError:
                pass
        
        if user_id:
            # Filter events that this user should see
            filtered_events = []
            for event in events:
                if event.target_users is None or user_id in event.target_users:
                    filtered_events.append(event)
            events = filtered_events
        
        return events
    
    def watch_file_changes(self):
        """Monitor file system changes and broadcast updates"""
        def scan_files():
            while self.running:
                try:
                    # Scan for markdown file changes
                    for file_path in self.vault_path.rglob('*.md'):
                        if file_path.name.startswith('.'):
                            continue
                        
                        file_key = str(file_path.relative_to(self.vault_path))
                        current_mtime = file_path.stat().st_mtime
                        
                        if file_key in self.file_watchers:
                            if current_mtime > self.file_watchers[file_key]:
                                # File changed
                                self.broadcast_event(
                                    event_type="file_changed",
                                    user_id="system",
                                    data={
                                        "file_path": file_key,
                                        "modified_time": datetime.fromtimestamp(current_mtime).isoformat()
                                    }
                                )
                        
                        self.file_watchers[file_key] = current_mtime
                    
                    time.sleep(2)  # Check every 2 seconds
                    
                except Exception as e:
                    print(f"Error watching files: {e}")
                    time.sleep(5)
        
        if self.running:
            threading.Thread(target=scan_files, daemon=True).start()
    
    def start_server(self):
        """Start the broadcasting server"""
        if self.running:
            return False
        
        self.running = True
        
        # Create HTTP handler
        class BroadcastHandler(http.server.SimpleHTTPRequestHandler):
            def __init__(self, *args, broadcaster=None, **kwargs):
                self.broadcaster = broadcaster
                super().__init__(*args, **kwargs)
            
            def do_GET(self):
                """Handle GET requests for events and status"""
                path = urlparse(self.path).path
                query = parse_qs(urlparse(self.path).query)
                
                if path == '/api/events':
                    self.handle_get_events(query)
                elif path == '/api/users':
                    self.handle_get_users()
                elif path == '/api/status':
                    self.handle_get_status()
                else:
                    # Serve static files
                    self.path = '/broadcast_interface.html'
                    super().do_GET()
            
            def do_POST(self):
                """Handle POST requests for broadcasting"""
                path = urlparse(self.path).path
                content_length = int(self.headers['Content-Length'])
                post_data = self.rfile.read(content_length).decode('utf-8')
                
                try:
                    data = json.loads(post_data)
                except json.JSONDecodeError:
                    self.send_error(400, "Invalid JSON")
                    return
                
                if path == '/api/connect':
                    self.handle_connect(data)
                elif path == '/api/disconnect':
                    self.handle_disconnect(data)
                elif path == '/api/activity':
                    self.handle_activity(data)
                elif path == '/api/broadcast':
                    self.handle_broadcast(data)
                else:
                    self.send_error(404, "Endpoint not found")
            
            def handle_get_events(self, query):
                """Handle events request"""
                since = query.get('since', [None])[0]
                user_id = query.get('user_id', [None])[0]
                
                events = self.broadcaster.get_recent_events(since, user_id)
                response = {
                    "events": [asdict(event) for event in events],
                    "server_time": datetime.now().isoformat()
                }
                
                self.send_json_response(response)
            
            def handle_get_users(self):
                """Handle users request"""
                users = [asdict(user) for user in self.broadcaster.connected_users.values()]
                self.send_json_response({"users": users})
            
            def handle_get_status(self):
                """Handle status request"""
                status = {
                    "running": self.broadcaster.running,
                    "connected_users": len(self.broadcaster.connected_users),
                    "recent_events": len(self.broadcaster.event_history),
                    "server_time": datetime.now().isoformat()
                }
                self.send_json_response(status)
            
            def handle_connect(self, data):
                """Handle user connect"""
                user_id = data.get('user_id')
                display_name = data.get('display_name')
                role = data.get('role', 'Observer')
                
                if not user_id or not display_name:
                    self.send_error(400, "Missing user_id or display_name")
                    return
                
                success = self.broadcaster.connect_user(user_id, display_name, role)
                self.send_json_response({"success": success})
            
            def handle_disconnect(self, data):
                """Handle user disconnect"""
                user_id = data.get('user_id')
                if not user_id:
                    self.send_error(400, "Missing user_id")
                    return
                
                success = self.broadcaster.disconnect_user(user_id)
                self.send_json_response({"success": success})
            
            def handle_activity(self, data):
                """Handle user activity update"""
                user_id = data.get('user_id')
                if not user_id:
                    self.send_error(400, "Missing user_id")
                    return
                
                success = self.broadcaster.update_user_activity(user_id, data)
                self.send_json_response({"success": success})
            
            def handle_broadcast(self, data):
                """Handle broadcast request"""
                event_type = data.get('event_type')
                user_id = data.get('user_id')
                event_data = data.get('data', {})
                target_users = data.get('target_users')
                
                if not event_type or not user_id:
                    self.send_error(400, "Missing event_type or user_id")
                    return
                
                event_id = self.broadcaster.broadcast_event(
                    event_type, user_id, event_data, target_users
                )
                self.send_json_response({"success": True, "event_id": event_id})
            
            def send_json_response(self, data):
                """Send JSON response"""
                response = json.dumps(data)
                self.send_response(200)
                self.send_header('Content-Type', 'application/json')
                self.send_header('Access-Control-Allow-Origin', '*')
                self.send_header('Content-Length', len(response))
                self.end_headers()
                self.wfile.write(response.encode())
            
            def log_message(self, format, *args):
                # Suppress default logging
                pass
        
        # Create partial handler with broadcaster instance
        handler = lambda *args, **kwargs: BroadcastHandler(*args, broadcaster=self, **kwargs)
        
        try:
            self.server = socketserver.TCPServer(("", self.port), handler)
            self.server.allow_reuse_address = True
            
            # Start file watching
            self.watch_file_changes()
            
            print(f"🔴 Session Broadcasting Server started on port {self.port}")
            print(f"Access at: http://localhost:{self.port}")
            
            # Start server in thread
            self.server_thread = threading.Thread(target=self.server.serve_forever, daemon=True)
            self.server_thread.start()
            
            return True
            
        except Exception as e:
            print(f"Failed to start server: {e}")
            self.running = False
            return False
    
    def stop_server(self):
        """Stop the broadcasting server"""
        if not self.running:
            return False
        
        self.running = False
        
        if self.server:
            self.server.shutdown()
            self.server.server_close()
        
        if self.server_thread and self.server_thread.is_alive():
            self.server_thread.join(timeout=2)
        
        print("🔴 Session Broadcasting Server stopped")
        return True
    
    def get_statistics(self) -> Dict:
        """Get broadcasting statistics"""
        return {
            "running": self.running,
            "port": self.port,
            "connected_users": len(self.connected_users),
            "total_events": len(self.event_history),
            "monitored_files": len(self.file_watchers),
            "recent_activity": len([
                e for e in self.event_history
                if datetime.fromisoformat(e.timestamp) > datetime.now().replace(hour=datetime.now().hour-1)
            ]) if self.event_history else 0
        }
    
    def send_message(self, from_user: str, message: str, target_users: Optional[List[str]] = None):
        """Send a message to users"""
        return self.broadcast_event(
            event_type="message",
            user_id=from_user,
            data={
                "message": message,
                "from_user": from_user,
                "timestamp": datetime.now().isoformat()
            },
            target_users=target_users
        )


def main():
    """Command line interface for session broadcasting"""
    parser = argparse.ArgumentParser(description="Session Broadcasting System")
    parser.add_argument("--vault", default=".", help="Vault directory path")
    parser.add_argument("--port", type=int, default=8080, help="Server port")
    
    subparsers = parser.add_subparsers(dest="command", help="Available commands")
    
    # Start server command
    start = subparsers.add_parser("start", help="Start broadcasting server")
    start.add_argument("--daemon", action="store_true", help="Run as daemon")
    
    # Stop server command
    subparsers.add_parser("stop", help="Stop broadcasting server")
    
    # Status command
    subparsers.add_parser("status", help="Show server status")
    
    # Send message command
    send_msg = subparsers.add_parser("message", help="Send message to users")
    send_msg.add_argument("user_id", help="Sender user ID")
    send_msg.add_argument("message", help="Message to send")
    send_msg.add_argument("--to", nargs="+", help="Target users (default: all)")
    
    # Connect user command
    connect = subparsers.add_parser("connect", help="Connect user to session")
    connect.add_argument("user_id", help="User ID")
    connect.add_argument("display_name", help="Display name")
    connect.add_argument("role", choices=["GM", "Player", "Observer"], help="User role")
    
    # List users command
    subparsers.add_parser("users", help="List connected users")
    
    # List events command
    list_events = subparsers.add_parser("events", help="List recent events")
    list_events.add_argument("--since", help="Show events since timestamp")
    list_events.add_argument("--user", help="Filter by user ID")
    
    args = parser.parse_args()
    
    if not args.command:
        parser.print_help()
        return
    
    # Initialize broadcaster
    broadcaster = SessionBroadcaster(args.vault, args.port)
    
    if args.command == "start":
        success = broadcaster.start_server()
        if success:
            if args.daemon:
                print("Server started in daemon mode")
                try:
                    while broadcaster.running:
                        time.sleep(1)
                except KeyboardInterrupt:
                    print("\nShutting down...")
                    broadcaster.stop_server()
            else:
                print("Server started. Press Ctrl+C to stop.")
                try:
                    while broadcaster.running:
                        time.sleep(1)
                except KeyboardInterrupt:
                    print("\nShutting down...")
                    broadcaster.stop_server()
        else:
            print("❌ Failed to start server")
    
    elif args.command == "stop":
        # In a real implementation, this would send a stop signal to a running daemon
        print("⚠️  Stop command - would terminate running daemon")
    
    elif args.command == "status":
        stats = broadcaster.get_statistics()
        print("📊 Session Broadcasting Status:")
        print(f"  Running: {'Yes' if stats['running'] else 'No'}")
        print(f"  Port: {stats['port']}")
        print(f"  Connected Users: {stats['connected_users']}")
        print(f"  Total Events: {stats['total_events']}")
        print(f"  Monitored Files: {stats['monitored_files']}")
        print(f"  Recent Activity: {stats['recent_activity']} events in last hour")
    
    elif args.command == "connect":
        success = broadcaster.connect_user(args.user_id, args.display_name, args.role)
        if success:
            print(f"✅ Connected user {args.user_id} ({args.display_name}) as {args.role}")
        else:
            print(f"❌ Failed to connect user {args.user_id}")
    
    elif args.command == "users":
        users = list(broadcaster.connected_users.values())
        if users:
            print("👥 Connected Users:")
            for user in users:
                last_seen = datetime.fromisoformat(user.last_seen)
                time_ago = (datetime.now() - last_seen).seconds
                status = "🟢 Online" if time_ago < 300 else "🟡 Away"  # 5 minutes
                print(f"  {status} {user.display_name} (@{user.user_id}) - {user.role}")
                if user.current_file:
                    print(f"      Currently viewing: {user.current_file}")
        else:
            print("No users currently connected")
    
    elif args.command == "events":
        events = broadcaster.get_recent_events(args.since, args.user)
        if events:
            print(f"📡 Recent Events ({len(events)}):")
            for event in events[-10:]:  # Show last 10
                timestamp = datetime.fromisoformat(event.timestamp).strftime("%H:%M:%S")
                print(f"  [{timestamp}] {event.event_type} - {event.user_id}")
                if event.data:
                    for key, value in list(event.data.items())[:2]:  # Show first 2 keys
                        print(f"    {key}: {str(value)[:50]}{'...' if len(str(value)) > 50 else ''}")
        else:
            print("No recent events found")
    
    elif args.command == "message":
        event_id = broadcaster.send_message(args.user_id, args.message, args.to)
        recipients = args.to if args.to else "all users"
        print(f"✅ Message sent to {recipients} (Event ID: {event_id})")


if __name__ == "__main__":
    main()