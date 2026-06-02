#!/bin/bash
# Simple script to save work automatically
# Usage: ./save-work.sh "commit message"

MESSAGE=${1:-"Auto-save work $(date '+%Y-%m-%d %H:%M:%S')"}

cd "$(dirname "$0")"
git add .
git commit -m "$MESSAGE"
echo "Work saved with message: $MESSAGE"
