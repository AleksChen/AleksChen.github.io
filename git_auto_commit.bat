@echo off

title Update
echo ---------------START---------------
git add .  
git add -A  
git add -u  
git commit -m "blog update: %date% %time%"  
git pull --rebase origin master 
git push origin master
echo ---------------END!---------------