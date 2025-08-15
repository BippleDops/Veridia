#!/bin/bash

echo "🚀 Setting up PM2 for 24/7 Vault Automation"
echo "==========================================="
echo ""

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "📦 Installing PM2..."
    npm install -g pm2
else
    echo "✅ PM2 is already installed"
fi

echo ""
echo "🔧 Configuring PM2..."

# Stop any existing processes
pm2 stop all 2>/dev/null
pm2 delete all 2>/dev/null

# Start the ecosystem
echo "🚀 Starting all automation agents..."
pm2 start ecosystem.config.js

# Save the process list
pm2 save

# Setup startup script
echo ""
echo "⚙️  Setting up auto-start on system boot..."
pm2 startup

echo ""
echo "📊 Current status:"
pm2 status

echo ""
echo "✅ PM2 Automation Setup Complete!"
echo ""
echo "Useful PM2 commands:"
echo "  pm2 status          - View all processes"
echo "  pm2 logs            - View all logs"
echo "  pm2 logs [name]     - View specific agent logs"
echo "  pm2 restart all     - Restart all agents"
echo "  pm2 stop all        - Stop all agents"
echo "  pm2 monit           - Interactive monitoring"
echo "  pm2 web             - Web dashboard (port 9615)"
echo ""
echo "Your vault is now being continuously improved 24/7! 🎉"
