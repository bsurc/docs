# **Loading Software**
Software on the clusters is not directly installed as you would do normally. Rather, it’s installed as self-contained packages called modules, which can then be loaded and unloaded by users. There are already a wide variety of modules on the clusters that can be used, but more can be added. If you need a specific piece of software, send an email to [<ins>researchcomputing@boisestate.edu</ins>](researchcomputing@boisestate.edu) with the name of the software, the version you need, and why you need it.

On a more technical side, modules work by manipulating environmental variables. An environmental variable is just a variable set through the shell that stores some information. For example, the PATH variable stores different directory paths to the executables that can be run on the system (like the commands we went over earlier), while another, LD_LIBRARY_PATH, stores directory paths to library files. Thus, when a module is loaded, certain file paths are added to different environmental variables (like PATH and LD_LIBRARY_PATH), which then allows the system to find the software that the module is for. This, in turn, allows the user to utilize the software.

Relevant commands for the module system:

<code>module load (name of module)</code> - loads a module into your

<code>module unload (name of module)</code> – unloads a module from your

<code>module av</code> – lists all available modules

<code>module li</code> – lists all currently loaded modules

<code>module purge</code> – unloads all currently loaded modules.

In addition to the module system, software will sometimes be built within your own home or scratch space for ease of use. When we at Research Computing receive your software request, we’ll work with you to build a solution that will meet your needs.
