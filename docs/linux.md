# The Linux Operating System

### Linux Basics
For many people, using a compute cluster is their first exposure to the Linux operating system.
This can produce some shellshock (quite literally, as the Linux command line is referred to as the “shell”) as it can be vastly different from the Windows or Mac operating systems that most people are used to.

[Linux](https://github.com/torvalds/linux) is an open source (meaning anyone can go in and view/modify the code behind it) operating system widely used all over the tech world.
Tons of different systems (TVs, Internet routers, all of the top 500 most powerful supercomputers in the world, many servers, etc.) run Linux – you probably interact with it in some way every day and just don’t realize it.
Relating to clusters, Linux is highly modifiable and extensible for system administration tasks, with robust and well-documented systems for scripting, installing/deploying software, managing users and user permissions, etc.

Linux can also be modified as an OS entirely, which leads to there being a vast number of different versions of it in existence.
These different versions are called “distros” (short for “distributions”), and each one has different intended use.
Some, like Ubuntu or Debian, are meant to be used on a home computer as a desktop operating system like Windows, while others, like Red Hat (which our clusters use a free version of called CentOS 7), are meant for use in enterprise server environments.

The default environment on the campus clusters (as with many servers of this nature) is very different than what you would see in something like Windows or Mac.
This bare bones environment is called, as said earlier, the “shell,” and is also commonly called the “terminal” or “console.”
The shell is a combination scripting language and command line interface that allows a user to accomplish a wide variety of tasks without needing to have the overhead of a more conventional graphical desktop interface.
The user can run commands directly in the shell or write them into scripts that are easily executable by the shell.
There are different flavors of shell available, but the one that matters here is the “Bourne Again Shell,” or as it’s commonly known, Bash.
Bash is installed by default on many Linux installations, including the campus clusters, and is in general the most widely used shell today.
The differences between it and other shells are irrelevant to this guide (though it should be noted for Mac users that the default shell on Mac is zsh, so there may be minor differences between the Mac terminal environment and the cluster terminal environment), so they won’t be gone over.
Much like Windows or Mac, Linux uses a tree-like hierarchical structure to store files.
The highest level directory (analogous to the standard C:\ drive top level directory on Windows or the respective / directory on Mac) is simply /, with all other system and user files being below that.

### General Commands for Linux
Now knowing what the shell is, how do we use it?
The shell supports many different commands, with some of the most commonly used/important listed below.

Note that file paths can be relative (based on the current directory) or absolute (based on the root of the file system) anywhere a file path is needed.
For example, say you have a directory named data in `/home/(username)` that you want to create another directory named run inside of.
To do this with an absolute path, you could do `mkdir /home/(username)/data/run`.
To do this with a relative path, either `mkdir run` from inside the data directory or `mkdir data/run` from the `/home/(username)` directory would work.
These two relative paths are just examples – there are many possible relative paths, as the path to any given spot in the file system can be described relative to any other spot in the file system.
Both types work anywhere that a file path is needed – it just depends upon the objective and sometimes personal preference of the user.
To specify the current directory, the `.` pattern can be used, and to specify the parent directory of the current directory, the `..` pattern can be used.
For example, to run a script in the current directory, you could do `./myscript.sh.`
If the script was in the parent directory, `../myscript.sh` could be used.

Here’s a list of useful shell commands:

[pwd](https://man7.org/linux/man-pages/man1/pwd.1.html) – Prints the absolute path to the directory the shell is currently in – stands for “**p**rint **w**orking **d**irectory.”

Usage: `pwd`

[ls](https://man7.org/linux/man-pages/man1/ls.1.html) – Lists the contents of the current directory – stands for “**l**i**s**t.”

Usage: `ls`

[mkdir](https://man7.org/linux/man-pages/man1/mkdir.1.html) – Makes a new directory – stands for “**m**a**k**e **dir**ectory.”

Usage: `mkdir (path to and/or name of new directory)`

[touch](https://man7.org/linux/man-pages/man1/touch.1.html) – Makes a new, empty file.

Usage: `touch (path to and/or name of new file)`

[cd](https://man7.org/linux/man-pages/man1/cd.1p.html) - Changes the directory the shell is currently in – stands for “**c**hange **d**irectory.”

Usage: `cd (path to and/or name of directory)`, or just `cd` to bring you back to your home directory.

[man](https://man7.org/linux/man-pages/man1/man.1.html) – Pulls up the manual page for a given command – stands for “**man**ual page.”

Usage: `man (command name)`

[cat](https://man7.org/linux/man-pages/man1/cat.1.html) – Prints the contents of a file to the command line – stands for “con**cat**enate.”

Usage: `cat (name of file)`

[mv](https://man7.org/linux/man-pages/man1/mv.1.html) – Moves files and directories around system and also used for renaming – stands for “**m**o**v**e.”

Usage: `mv (path to and/or name of file to be moved and/or renamed) (new path to and/or name of file)`

[echo](https://man7.org/linux/man-pages/man1/echo.1.html) – Prints out text to the terminal.
Used a lot in scripts to write text to the terminal.

Usage: `echo`

[exit](https://man7.org/linux/man-pages/man3/exit.3.html) – Exits the cluster and closes your connection to it, bringing you back to your local machine.

Usage: `exit`

These commands can become far more nuanced than what’s listed here through the inclusion of command line options – see man pages or the internet for details.
This is also just a small sample of the available commands in Linux.
If you can think of a task, there’s probably a command (or a combination of other commands) that can do it.

### A Note About Vim
Vim is a command line text editor preinstalled Borah.
While very powerful and useful for work on the command line, the interface and commands used in Vim are not particularly intuitive, and sometimes downright esoteric.
[The Stack Overflow question for how to close Vim has over two million views](https://stackoverflow.com/questions/11828270/how-do-i-exit-the-vim-editor), which should say something.

That said, Vim is extremely useful if you need to write a script, edit a configuration file, read a longer text file, etc.
Despite its perceived difficulty, there are only a few things you need to know about Vim to use it successfully.
There is also a built-in Vim tutorial that can be accessed by running the `vimtutor` command.
Here are the steps necessary to open, edit, and then save a file with Vim:

1. Enter the command `vim (filename)` to open the file, where the name can be an already existing file, or a new one you’re creating.
This opens the file in command mode.

2. Press ++i++ while in command mode to enter insert mode.

3. Edit the file as necessary.

4. Press ++escape++ while in insert mode to reenter command mode.

5. To save and close while in command mode, either hold ++shift++ and press ++z++ twice, or type `:wq`

6. To close without saving while in command mode, type `:q!`

7. To undo, press ++u++ while in command mode.

This is just a handful of commands to get you started.
Vim has many more shortcuts that can help you to efficiently edit text files in the command line.
