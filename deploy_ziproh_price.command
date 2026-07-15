#!/bin/zsh
cd /Users/drwashington/Documents/GitHub/ziproh-compliance
git add -A
git commit -m "Update Professional plan price to £79/mo (£950/yr)"
git push && echo "✅ Ziproh price update deployed!" || echo "❌ Push failed"
rm -- "$0"
