#!/usr/bin/env sh

# abort on errors
set -e

# build
cd client

npm run build

# navigate into the build output directory
cd dist

# git config --global user.email "$GH_EMAIL" > /dev/null 2>&1
# git config --global user.name "$GH_NAME" > /dev/null 2>&1

git init
git add -A
git commit -m "Deploy client"

git push -f git@github.com:iamstevendao/email-sender.git master:gh-pages

cd ../../server

git init
git add -A
git commit -m "Deploy server"

git push -f git@github.com:iamstevendao/email-sender.git master:heroku
