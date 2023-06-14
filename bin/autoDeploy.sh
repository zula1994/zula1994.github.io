call yarn docs:build
cd .vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f master:gh-pages
