# dir or ls => see files in a folder
# cd folder1 => go to folder1
# cd folder1/folder1.1/folder1.1.1 => go to folder1.1.1
# cd / => go to the root folder

# cd .. => go to the previous folder

 d: for c to d drive


type nul > my_file.txt
echo "This is some text." >> my_file.txt
echo "Another line of text." >> my_file.txt
type my_file.txt

# 1. Navigation:

cd (Change Directory): Navigates to a specific folder.

cd C:\Users\YourName\Documents: Goes to the 'Documents' folder.
cd ..: Moves one level up in the directory structure.
cd \: Goes to the root directory of your drive.
dir (Directory): Lists the files and folders in the current directory.

dir /a: Shows all files, including hidden ones.
dir /b: Lists only filenames, without extra details.
cls (Clear Screen): Clears the command prompt window.

# 2. File Management:

# copy: Copies files.

copy file1.txt file2.txt: Copies 'file1.txt' to 'file2.txt'.

copy *.* D:\Backup: Copies all files from the current directory to 'D:\Backup'.

# move: Moves or renames files.

move file1.txt D:\Backup: Moves 'file1.txt' to 'D:\Backup'.

move file1.txt file2.txt: Renames 'file1.txt' to 'file2.txt'.

  
# del (Delete): Deletes files.

del file1.txt: Deletes 'file1.txt'.
del *.txt: Deletes all files with the '.txt' extension.
mkdir (Make Directory): Creates a new folder.

mkdir newfolder: Creates a folder named 'newfolder' in the current directory.
rmdir (Remove Directory): Deletes a folder.

rmdir newfolder: Deletes the 'newfolder' folder (must be empty).
  
#ren (Rename): Renames a file or folder.

ren file1.txt file2.txt: Renames 'file1.txt' to 'file2.txt'.


# 3. Running Programs:

# start: Starts a program.

start notepad.exe: Opens Notepad.
exit: Closes the command prompt.


 