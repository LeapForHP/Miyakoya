# Deploy script for manual build
echo "Building project..."
npm run build

echo "Copying 404.html for SPA support..."
cp docs/index.html docs/404.html

echo "Checking CNAME file..."
if [ ! -f docs/CNAME ]; then
  echo "www.leaders-co.jp" > docs/CNAME
fi

echo "Build completed! Ready to commit and push."
echo ""
echo "Next steps:"
echo "  git add ."
echo "  git commit -m 'Update site content'"
echo "  git push"