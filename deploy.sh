#!/usr/bin/env sh

git add .  
git add -A  
git add -u  
git commit -m "blog update: $(date "+%Y-%m-%d %H:%M:%S")"  
git pull --rebase origin master 
git push origin master