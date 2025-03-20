# Loading Software
You do not install software on the clusters the same way you would on a local system. Instead, the cluster provides software as self-contained packages called modules, which you can load and unload. The clusters already offer a wide variety of modules, but you (or Research Computing) can add more. If you need specific software, send an email to [researchcomputing@boisestate.edu](mailto:researchcomputing@boisestate.edu) with the software name, the required version, and the reason you need it.

On a more technical side, modules manipulate environment variables. An environment variable is a shell variable that stores information. For example, the `PATH` variable stores directory paths to executables, while `LD_LIBRARY_PATH` stores directory paths to library files. When you load a module, it adds relevant file paths to these variables, which allows the system to locate and run the software in that module.

Use these commands for the module system:

- `module load (name of module)` – Load a module into your environment.  
- `module unload (name of module)` – Unload a module from your environment.  
- `module av` – List all available modules.  
- `module li` – List all currently loaded modules.  
- `module purge` – Unload all currently loaded modules.

Sometimes, you build software in your home or scratch space for convenience. When Research Computing receives your software request, we work with you to build a solution that meets your needs.

---

## BSURC-Provided Canonical Builds of Software

Starting in 2022, Boise State University Research Computing began providing canonical builds of commonly used software packages, including compilers, MPI stacks, libraries, and applications. Older software installations remain available, but you should use the canonical builds going forward because they include newer versions and maintain consistent linking, especially for software with large dependency graphs.

The cluster provides these canonical builds through meta-modules (modules that make other modules available) in the following categories:

### base

The base module set includes compilers, MPI stacks built with those compilers, and tools for building software (e.g., CMake). These versions are significantly newer than those provided by the operating system. Always use these for non-trivial builds. If you plan to build an HPC package, start by loading the base modules.

### libraries

The libraries module set provides optimized builds of commonly used libraries, such as FFTW, HDF5, and NETCDF, in a hierarchical format:
```
<library>/<version>/<mpi>/<mpi-version>/<compiler>/<compiler-version>
```
These libraries use the base compilers and MPI stacks. Always build and link codes with the same compiler and compiler version, and with the exact builds of any dependencies.

### applications

The applications in this set typically build on top of the libraries module and use tools in the base module. They use RPATH to locate their dependencies, which means `LD_LIBRARY_PATH` cannot override them (by design). However, advanced users can pre-empt these settings with the `LD_PRELOAD` mechanism.

### misc

Not all software fits neatly into other categories, so this set captures everything else. Research Computing still builds these packages as consistently as possible against the same dependencies.

---

### Using the Canonical Builds

First, load the meta-module to see which builds are available. On **Borah**, these modules have names like `borah-base` or `borah-libraries`.

For example, to find GROMACS on **Borah**, you might run:
```bash
module load borah-applications
module avail gromacs
```
You then see:
```
------------------ /cm/shared/software/modules/borah-applications -------------------

gromacs/2021.5/openmpi/4.1.3/gcc/12.1.0  gromacs/2022.3/openmpi/4.1.3/gcc/12.1.0
gromacs/2022.3/mpich/3.4.3/gcc/12.1.0
```
Choose the newest build with the OpenMPI stack:
```bash
module load gromacs/2022.3/openmpi/4.1.3/gcc/12.1.0
```
If you want to see the path, run:
```bash
which gmx_mpi
```
Which might return something like:
```
/cm/shared/software/spack/opt/spack/linux-centos7-cascadelake/gcc-12.1.0/gromacs-2022.3-glpifvpytlwhdmxdby2ldmi3unjcigvr/bin/gmx_mpi
```
If you want to see library dependencies, run:
```bash
ldd $(which gmx_mpi)
```
This command lists the libraries that satisfy GROMACS’s dependencies, including those from the `borah-libraries` module.