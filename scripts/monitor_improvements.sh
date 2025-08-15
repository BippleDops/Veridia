#!/bin/bash

echo "📊 Monitoring Lean Improvements Progress..."
echo ""

while true; do
    # Count various improvements
    INDEXES=$(find . -name "INDEX.md" -o -name "MASTER_INDEX.md" 2>/dev/null | wc -l)
    STUBS=$(find . -path "*/Stubs/*" -name "*.md" 2>/dev/null | wc -l)
    BACKLINKS=$(grep -l "## References" $(find . -name "*.md" 2>/dev/null) 2>/dev/null | wc -l)
    TAGGED=$(grep -l "^tags:" $(find . -name "*.md" 2>/dev/null) 2>/dev/null | wc -l)
    
    clear
    echo "🚀 LEAN IMPROVEMENTS PROGRESS"
    echo "============================"
    echo ""
    echo "📑 Indexes Created: $INDEXES"
    echo "🏷️  Files Tagged: $TAGGED"
    echo "🔗 Files with Backlinks: $BACKLINKS"
    echo "📄 Stub Articles: $STUBS"
    echo ""
    echo "Last Update: $(date '+%H:%M:%S')"
    echo ""
    echo "Press Ctrl+C to stop monitoring"
    
    sleep 5
done
