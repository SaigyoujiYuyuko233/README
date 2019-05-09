#!/usr/bin/env sh
set -e
yarn
yarn run build
cd .vuepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:nanahagrad/README.git master:gh-pages

cd -
