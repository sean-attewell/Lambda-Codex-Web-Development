# Command-Line Interface

what if there is no GUI for a particular program? Or if you need to complete some tasks that aren't supported by the GUI? That's when we need to use a terminal interface, or terminal. The terminal is also called a command-line interface (CLI), console, or shell. We're going to focus on how to use the version control program git in the terminal

## Windows (Windows Terminal)

A new feature for Windows 10 (released in 2019) is the Windows Terminal application, which includes many useful features for command-line work, which we will be doing a lot of in this course. The Windows Terminal provides access to the original Windows Console, Windows Power Shell, and a Bash prompt, all in one program.

This free application currently needs to be downloaded (from the Microsoft Store), but we'll show an example on a computer where the application is already installed. One you have installed the application, at the Start menu, select Windows Terminal to open the application.

## Navigating in the terminal

we can use whoami to see if we're logged as the correct user:

$ whoami
Sean

$ pwd
/c/Users/Sean

ls

cd
The . directory is the current directory. The .. directory is the parent directory. Using the cd command with . we would just end up staying in our current directory. To go up a directory to the parent directory, use cd with double dots

Now that we know some of the basics, let's add in [options] and [arguments] which modify the behavior of the command. The general structure is:

$ command -options arguments

With the ls command, we can display more than just a simple list of files and directories.The -a (all) and -l (long format) options display all of the files, including the hidden . and .. files. Here's an example from the home directory:

$ ls -l
total 1768
-rw-r--r-- 1 Sean 197121 165 Sep 9 2019 '~$660 Good Ones.xlsx'
-rw-r--r-- 1 Sean 197121     162 Jun 22  2020 '~$building the Monestary.docx'
-rw-r--r-- 1 Sean 197121 162 Jan 10 2018 '~$tcoin Bullets.docx'
-rw-r--r-- 1 Sean 197121     162 Jan 26 08:30 '~$VACA.docx'

The first item listed is total 56 which is the number of 1 KB (or 1024 bytes) memory blocks used by the files in that directory.

To make a new file, we can use the touch command. This command creates a new file if one doesn't already exist. If the file does exist, touch will just change the access time stamp without altering anything else about the file

$ touch newfile.txt

we can use rm (remove) to delete it.

rm newfile.txt

We can also just rename the file with a different name using the mv (move) command. The syntax for this command is: mv oldfilename newfilename

And we can also create a copy of a file with cp (copy) where the syntax is the same as the mv command.

And we can also create a copy of a file with cp (copy) where the syntax is the same as the mv command.

$ cp newfile2.txt newfile2_copy.txt

$ mkdir testdir

As with a file, the name of a directory can be changed with the mv command. The directory doesn't have to be empty to do this.

$ mv testdir testdir2

We can also delete an empty directory with the rmdir (remove directory) command.

$ rmdir testdir2

A directory can also be deleted using the rm command with the -r option which means recursive and deletes all the files inside and then the parent directory itself

rm -r testdir3

be very careful when using rm -r; with some systems, you won't be prompted before deleting the file. You could easily lose a lot of work!

Another trick we can use while working in the command line is to use use a semicolon ; between commands. It essentially acts like an ENTER command. Using semicolons reduces the number of lines to scroll through when reviewing the command history

mkdir testing; cd testing

touch newfile1.txt; touch newfile2.txt; touch newfile3.txt

One final trick to learn is the use of the wildcard or _ character in bash commands. The _ stands in for any file name or part of a file name. The following examples demonstrate how to delete all of the files in the testing directory that begin with "new":

rm new\*

Copy all files from code directory into current directory (parent of code):

cp code/\* .

If you get stuck with the correct usage of a command, you can try to use command --help; an example would be ls --help.

clear
