# C

The information in this guide has been cherry picked from Wes Kendall's *[MPI Hello World](https://mpitutorial.com/tutorials/mpi-hello-world/){:target="_blank"}* and refined to suit our Borah cluster. We will focus more compiling using the modules on Borah. Please refer to Kendall's article for an explanation of how the code is working.
## Hello World Example
```C
#include <mpi.h>
#include <stdio.h>

int main(int argc, char** argv) {
    // Initialize the MPI environment
    MPI_Init(NULL, NULL);

    // Get the number of processes
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    // Get the rank of the process
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    // Get the name of the processor
    char processor_name[MPI_MAX_PROCESSOR_NAME];
    int name_len;
    MPI_Get_processor_name(processor_name, &name_len);

    // Print off a hello world message
    printf("Hello world from processor %s, rank %d out of %d processors\n",
           processor_name, world_rank, world_size);

    // Finalize the MPI environment.
    MPI_Finalize();
}
```


## Compiling the Code on Borah

To compile the MPI code on Borah, you must first load the appropriate compiler and MPI modules. The exact module names may vary, but typically you'll want to load an MPI implementation such as OpenMPI or Intel MPI, and a compiler like GCC or Intel.

### Step 1: Load Modules

Log into Borah and load the modules you need. For example:

```bash
module purge
module load borah-base
module load openmpi/4.1.3/gcc/12.1.0
```

!!! Tip "You can check available modules using `module avail`."

### Step 2: Compile the Code

Assuming your code is saved in a file called `hello_world.c`, compile it using `mpicc`, which is the MPI C compiler wrapper:

```bash
mpicc -o hello_world hello_world.c
```

This will produce an executable named `hello_world`. You can use this executable to [schedule a job](../scheduling.md#example-submission-scripts), and run it across multiple nodes.

---