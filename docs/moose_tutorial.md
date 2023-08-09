# Getting Started with MOOSE on Borah Cluster

MOOSE (Multiphysics Object-Oriented Simulation Environment) is a powerful simulation framework, and this guide will walk you through installing and running MOOSE on the Borah cluster.

## Step 1: Log into Borah Cluster and Load PETSc

Login to Borah using SSH:

```bash
ssh yourusername@borah-login.boisestate.edu
```

Load the required PETSc module:

```bash
module load petsc
```

This statement must also be in your `sbatch` file when you run MOOSE.

## Step 2: Create Directory and Clone MOOSE Repository

Navigate to the directory where you want to install MOOSE, such as your scratch directory. Then, run the following commands:

```bash
mkdir projects
cd projects
git clone https://github.com/idaholab/moose.git
cd moose
git checkout master
```

## Step 3: Run MOOSE Installation Script

Execute the MOOSE script to install dependencies:

```bash
./scripts/update_and_rebuild_libmesh.sh
```

This step may take 1-2 hours to complete.

## Step 4: Test MOOSE Installation

Navigate to the test directory and run:

```bash
cd test
make
./run_tests
```

## Step 5: Clone and Build a MOOSE Application (Optional)

For example, you can clone and build a MOOSE application called "BISON":

```bash
git clone https://github.com/idaholab/bison.git
cd bison
```

## Step 6: Run a MOOSE Application

Navigate to the example directory and use the application executable to run an input file:

```bash
cd examples
../bison-opt -i input-file-name.i
```

Replace `input-file-name.i` with the name of the input file you want to run.

## Further Learning and Resources

1. [MOOSE Framework](https://mooseframework.inl.gov/)
2. [MOOSE Tutorials](https://mooseframework.inl.gov/getting_started/tutorials_and_examples/)
3. [MOOSE User Manual](https://mooseframework.inl.gov/application_usage/index.html)
4. [MOOSE API Documentation](https://mooseframework.inl.gov/doxygen/)
5. [C++ Programming Tutorial](http://www.cplusplus.com/doc/tutorial/)
6. [PETSc Documentation](https://www.mcs.anl.gov/petsc/)
7. [libMesh Documentation](http://libmesh.github.io/)

Remember, you will need to use an `sbatch` file to run your jobs on Borah. An example file can be found at `/cm/shared/examples/slurm_moose.bash`.
