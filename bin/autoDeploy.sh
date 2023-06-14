call yarn docs:build
cd .vitepress/dist

git init
git add -A
git commit -m "auto construct blog"

git push -f https://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@github.com/zula1994/zula1994.github.io.git master:gh-pages
