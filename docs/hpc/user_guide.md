# Boise State Cluser Guide

## What is a compute cluster?

A compute cluster, also known as a "supercomputer," is a set of computers that
all work together to form one functional system. The cluster has many
individual computers in it (called compute nodes) that are all set up to run
computational jobs on. Each node can run independently or can pool resources
with other nodes to increase computing capacity. These computers are all linked
to a central controller computer with similar hardware to a compute node that
runs software like the cluster’s job scheduler.

In these guides, the terms "compute cluster," "cluster," and "supercomputer"
are all used interchangeably.  "Campus compute cluster" or "campus cluster"
refers to R2 and Borah, the two clusters Boise State has purchased.

## Why use a compute cluster?

The advantage to utilizing a cluster comes in the form of parallel computing,
or the ability to run computational jobs over many CPUs or GPUs at once. This
is implemented through two different types of parallel computing model: the
message passing interface (MPI) model and the embarrassingly parallel model.

The MPI model uses a piece of software called a “message passing interface” to
send data between individual CPU cores, which allows the program to spread
itself out over many cores and thus run faster. In the embarrassingly parallel
model, each core (or group of cores) run independently of any other. For
example, if you have 20,000 input files that each need the same bit of
processing done, you could set the job to run so that each core gets one file,
processes it, then outputs it and takes in another.

The MPI model is realized on Boise State’s clusters with MPI software like
OpenMPI and MPICH; the embarrassingly parallel model is realized with a piece
of software called `swarm`.

## Getting an Account

Connecting to R2 or Borah requires an account for that cluster provided by
Research Computing. To request an account, please email
[researchcomputing@boisestate.edu](mailto:researchcomputing@boisestate.edu)
with the following information:

- Name of requestor
- Cluster you are requesting an account on
- Research project name or grant information
- Name of your PI
- Email address of requestor

In order to grant access, the HPC administrator will verify that you are a
valid user by contacting the project’s PI. When on the Boise State campus, the
campus clusters can be accessed from most wired computers or from the secured
Eduroam Wi-Fi network. If you are off campus, a VPN connection must be used.
The Boise State VPN is a virtual network connection that allows users to be on
the internal network from off campus. More info on it can be found
[here](https://www.boisestate.edu/oit-network/vpn-services/).

## Logging In

When on the Boise State campus, the campus clusters can be accessed from most
wired computers or from the secured Eduroam Wi-Fi network. If you are off
campus, a VPN connection or the Onyx pass-through must be used. The Boise State
VPN is a virtual network connection that allows users to be on the internal
network from off campus. More info on it can be found
[here](https://www.boisestate.edu/oit-network/vpn-services/). The VPN is only
accessible to current employees and student employees of Boise State, so if you
are a non-employee student, you can log into the compute clusters by first
logging into onyx.boisestate.edu and then into the cluster from Onyx.

After getting your account from Research Computing, follow the process of your
respective operating system below to connect. Note that with any of the methods
listed, your password will not be shown as you enter it, so it’s normal to not
see any characters being entered as you type your password.

### Windows:

1. Go to the [MobaXTerm site](https://mobaxterm.mobatek.net/download.html) and
download the "Home" edition of MobaXTerm. This software is an emulator for a
Linux shell that will allow you to utilize a Linux shell on Windows.
2. Install the software.
3. Open the software and type:

    ```bash
    $ ssh -XC user@r2-login.boisestate.edu
    ```
    or
    ```bash
    $ ssh -XC user@borah-login.boisestate.edu
    ```

4. Enter the password provided to you by Research Computing.
5. You will now be connected to the cluster.

If it’s your first time connecting, use the passwd command to change your
password.  Mac and Linux: As Mac and Linux both already have terminals built
in, the same instructions as above sans the downloading and installing of
MobaXTerm can be used to connect from either of those operating systems.

## The Linux Operating System

### Linux Basics

For many people, using a compute cluster is their first exposure to the Linux
operating system. This can produce some shellshock (quite literally, as the
Linux command line is referred to as athe “shell”) as it can be vastly
different from the Windows or Mac operating systems that most people are used
to.

[Linux](https://github.com/torvalds/linux) is an open source (meaning anyone
can go in and view/modify the code behind it) operating system widely used all
over the tech world. Tons of different systems (like TVs, Internet routers, all
of the top 500 most powerful supercomputers in the world, many servers, etc.)
run Linux – you probably interact with it in some way every day and just don’t
realize it.  Relating to clusters, Linux is highly modifiable and extensible
for system administration tasks, with robust and well-documented systems for
scripting, installing/deploying software, managing users and user permissions,
etc. This is why it’s in wide use as an OS for servers and why it’s the OS of
choice for every one of the top 500 supercomputers in the world.

Linux can also be modified as an OS entirely, which leads to there being a vast
number of different versions of it in existence. These different versions are
called "distros" (short for "distributions"), and each one has different
intended use.  Some, like Ubuntu or Debian, are meant to be used on a home
computer as a desktop operating system like Windows, while others, like Red
Hat, are meant for use in enterprise server environments. The default
environment on the campus clusters (as with many servers of this nature) is
very different than what you would see in something like Windows or Mac. This
bare bones environment is called, as said earlier, the "shell," and is also
commonly called the "terminal" or "console." The shell is a combination
scripting language and command line interface that allows a user to accomplish
a wide variety of tasks without needing to have the overhead of a more
conventional graphical desktop interface. The user can run commands directly in
the shell or write them into scripts that are easily executable by the shell.
There are different flavors of shell available, but the one that matters here
is the “Bourne Again Shell,” or as it’s commonly known, Bash. Bash is installed
by default on many Linux installations, including the campus clusters, and is
in general the most widely used shell today. The differences between it and
other shells are irrelevant to this guide, so they won’t be gone over. Much
like Windows or Mac, Linux uses a tree-like hierarchical structure to store
files.  The highest level directory (analogous to, for example, the standard
C:\ drive top level directory on Windows) is simply /, with all other system
and user files being below that.

### General Commands for Linux

Now knowing what the shell is, how do we use it? The shell supports many
different commands, with some of the most commonly used/important listed below.

Note that file paths can be
relative (based on the current directory) or absolute (based on the root of the
file system) anywhere a file path is needed. For example, say you have a
directory named data in `/home/user` that you want to create another
directory named run inside of. To do this with an absolute path, you could do
`mkdir -p /home/user/data/run`. To do this with a relative path, either mkdir
run from inside the data directory or `mkdir data/run` from the `/home/user`
directory would work. These two relative paths are just examples – there are
many possible relative paths, as the path to any given spot in the file system
can be described relative to any other spot in the file system. Both types work
anywhere that a file path is needed – it just depends upon what the objective,
and sometimes personal preference of the user, is. To specify the current
directory, the "." pattern can be used, and to specify the parent directory of
the current directory, the ".." pattern can be used. For example, to run a
script in the current directory, you could do `./myscript.sh`. If the script was
in the parent directory, `../myscript.sh` could be used.

Here’s the list of useful shell commands:

`pwd` – Prints the absolute path to the directory the shell is currently in –
stands for "print working directory."

Usage: `pwd`

`ls` – Lists the contents of the current directory – stands for "list."

Usage: `ls`
