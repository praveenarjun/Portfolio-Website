#!/bin/bash

# Deployment script for GitHub Pages

echo "🚀 Starting deployment process..."

# Check if changes are committed
if [[ -n $(git status -s) ]]; then
    echo "📝 Staging all changes..."
    git add .
    
    echo "💾 Committing changes..."
    git commit -m "Update portfolio: Add horizontal scroll, profile image, and new work experience"
fi

echo "📤 Pushing to GitHub..."
git push origin main

echo "🏗️  Building project..."
npm run build

echo "🚀 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌐 Your site should be live at: https://praveenarjun.github.io/Portfolio-Website/"
echo ""
echo "Note: It may take a few minutes for changes to appear."

