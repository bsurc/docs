# Loading Software
Software on the clusters is not directly installed as you would do normally.
Rather, it’s installed as self-contained packages called modules, which can then be loaded and unloaded by users.
There are already a wide variety of modules on the clusters that can be used, but more can be added.
If you need a specific piece of software, send an email to researchcomputing@boisestate.edu with the name of the software, the version you need, and why you need it.

On a more technical side, modules work by manipulating environmental variables.
An environmental variable is just a variable set through the shell that stores some information.
For example, the `PATH` variable stores different directory paths to the executables that can be run on the system (like the commands we went over earlier), while another, `LD_LIBRARY_PATH`, stores directory paths to library files.
Thus, when a module is loaded, certain file paths are added to different environmental variables (like `PATH` and `LD_LIBRARY_PATH`), which then allows the system to find the software that the module is for.
This, in turn, allows the user to utilize the software.

Relevant commands for the module system:

`module load (name of module)` - loads a module into your environment

`module unload (name of module)` – unloads a module from your environment

`module av` – lists all available modules

`module li` – lists all currently loaded modules

`module purge` – unloads all currently loaded modules.

In addition to the module system, software will sometimes be built within your own home or scratch space for ease of use.
When we at Research Computing receive your software request, we’ll work with you to build a solution that will meet your needs.

## BSURC-provided canonical builds of software

Beginning in 2022, Boise State University Research Computing started providing canonical builds of commonly-used software packages, including compilers, MPI stacks, libraries, and applications. Previous software installations have not been removed, however it is strongly advised to use these canonical builds moving forward, as they are comprised of newer versions, and have been engineered for consistency in linking, especially for software with large dependency graphs.

These canonical builds are available by first loading meta-modules (modules which make other modules available) in the following categories:

### base

The base module set contains compilers and MPI built with these compilers, as well as tools for building software (e.g. CMake). Versions here are well-ahead of the OS-provided versions and should always be used for non-trivial builds. If you are building an HPC package yourself, these are the tools you will need.

### libraries

The libraries module set contains optimized builds of commonly used libraries, such as FFTW, HDF5, NETCDF, etc. and are organized hierarchically as:
`<library>/<version>/<mpi>/<mpi-version>/<compiler>/<compiler-version>`
Note that these libraries are build using the base compilers and MPI stacks. It is  recommended to always build and link codes using the same compiler and compiler version, and also with the same exact builds of any dependencies.

### applications

The applications here are typically built on top of the libraries module, using the tools in the base module, and they are hard-coded to find their correct dependencies using the RPATH mechanism. Advanced users should be aware that these settings *cannot* be overridden by LD_LIBRARY_PATH, and that this is by design. They can, however, be pre-empted using the LD_PRELOAD mechanism.

### misc

Not every piece of software fits easily into a category, and this set of modules is designed to capture those, while still being as consistent as possible in building against the above dependencies.

### Using the canonical builds

By first loading the meta-module, you can query what is available. On **Borah** these are named `borah-base`, `borah-libraries`, etc.

As an example, a user looking for gromacs on **Borah** might try:

```bash
module load borah-applications
```

```bash
module avail gromacs
```

And see the available builds:

```
------------------ /cm/shared/software/modules/borah-applications -------------------

gromacs/2021.5/openmpi/4.1.3/gcc/12.1.0  gromacs/2022.3/openmpi/4.1.3/gcc/12.1.0
gromacs/2022.3/mpich/3.4.3/gcc/12.1.0
```

From which they decide on the newest build, and the openmpi stack:

```bash
module load gromacs/2022.3/openmpi/4.1.3/gcc/12.1.0
```

If they're curious, they can see the whole path:

```bash
which gmx_mpi
```

```
/cm/shared/software/spack/opt/spack/linux-centos7-cascadelake/gcc-12.1.0/gromacs-2022.3-glpifvpytlwhdmxdby2ldmi3unjcigvr/bin/gmx_mpi
```

And if they're *really* curious, they can see what it links:

```bash
ldd $(which gmx_mpi)
```

This will give a complete list of the libraries it uses to satisfy its dependencies, which in this case includes libraries available from the borah-libraries module.
