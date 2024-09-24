# //GIT bash
git -v
pwd
# cd d: chage into d
cd filename/

  cd .. #go to the previous folder
  
dir OR ls list files
  mkdir #folder/directory creation

  #create file
  touch filename.txt
  echo "Your text to add" >> filename.txt
  #read file
  cat my_file.txt
 
# Set
git config --list

  #
  ls: The command to list files and directories.
  -a: The flag to include hidden files.
ls -la   #long lositing

  git init
  #This will create a Git repository for your project. You can then start adding files, committing changes, and managing your project's history using Git.
 

git add <file>: Stages changes in a file to be committed.

git add .: Stages all changes in the current directory to be committed.

git rm -r --cached <file>: Removes a directory and all its contents from the index.

git commit -m "Commit message": Creates a commit with a specified message.

 git log #all committed changes
  # press q to quit
  git log --oneline

create .gitignore File
#in this file mention the file you don't want to track[.nodemodules, .echo]
git status #check the status of the files
git add .
git commit -m "added .gitignore"

  #Branches
git BRANCH
  git branch <branch_name>: Creates a new branch.
 **** git checkout <branch_name>: Switches to a different branch.
    git switch <branch_name>: Switches to a different branch.
    #if we swich from main or master branch and add a file to another branch 
    Switched to branch 'test'
    SHUBHRADEEP MAITY@Robin MINGW64 /d/Down10ads/Git (test)
    S git branch
    master
    * test

    SHUBHRADEEP MAITY@Robin MINGW64 /d/Down10ads/Git (test)
    $ touch testing. js
    SHUBHRADEEP MAITY@Robin MINGW64 /d/Down10ads/Git (test)
    $ echo var a=10 >>testing.js
    SHUBHRADEEP MAITY@Robin MINGW64 /d/Down10ads/Git (test)
    $ cat testing. js
    var a—10
#after add and commit => again switch to main or master branch the new added file will be dis appare

 # if you want to see the new added file point the head to the new branch where the changes occour

    git checkout master

  git merge <branch_name>: Merges changes from another branch into the current branch.

#conflict
    <<<<<<< HEAD
    var b=120
    var c=620
    =======
    var b=100
    >>>>>>> test
#resolove it manually or using VS CODE
#add . #commit -m ''

#rename
git branch -m <old_branch_name> <new_branch_name>

git branch -d <branch nasme> #del

  #temporarily saving your changes and restoring them
git stash
git stash apply

#rebase
git checkout testbranch
git rebase master


#GITHUB
git remote: Lists all remote repositories.
git remote add <name> <url>: Adds a remote repository.
  git push origin main
 # This pushes the main branch from your local repository to the origin remote.

#Change the Remote URL:
 git remote set-url origin <new_remote_url>


 git clone <url>: Creates a local copy of a remote repository.