# MOOSE Framework Tutorial on Borah Cluster

This tutorial will guide you through the process of installing and running an application using the MOOSE (Multiphysics Object-Oriented Simulation Environment) framework on the Borah cluster.

## Step 1: Log into Borah Cluster

First, you need to access the Borah cluster. Use SSH (Secure Shell) to connect to the cluster. You'll need your username and the cluster's address for this.

```bash
ssh yourusername@borah-login.boisestate.edu
```

Replace `yourusername` with your actual username.

## Step 2: Run dev-session-bsu

Run the dev-session-bsu command on your terminal:

```bash
dev-session-bsu
```

## Step 3: Clone MOOSE Repository
First, you'll need to clone the MOOSE repository from GitHub. This requires that you've set up SSH with GitHub.

```bash
git clone git@github.com:idaholab/moose.git
```

If SSH hasn't been set up, you can use HTTPS instead:

```bash
git clone https://github.com/idaholab/moose.git
```

This will create a directory called `moose` in your current directory.

## Step 4: Run the MOOSE script to install dependencies

MOOSE has a script that will install all necessary dependencies for you. Run it with the following command:

```bash
cd moose
./scripts/update_and_rebuild_libmesh.sh
```

This script might take a while to run, as it needs to download and build several packages.

Step 5: Test MOOSE Installation

To ensure that MOOSE is working correctly, run the test suite included with it:

```bash
./run_tests
```

## Step 6: Clone and build a MOOSE application

For the purposes of this tutorial, we'll clone and build a simple MOOSE application called "BISON"

```bash
git clone https://github.com/idaholab/bison.git
cd bison
```

Step 7: Run a MOOSE application

To run the application, navigate to the example directory and use the application executable (here bison-opt) to run an input file.

```bash
cd examples
../bison-opt -i input-file-name.i
```

Replace `input-file-name.i` with the name of the input file you want to run.

## Further Learning

1. **MOOSE Framework**: Understand the MOOSE Framework, its architecture, and its usage for developing simulation software. You can explore more about the MOOSE Framework [here](https://mooseframework.inl.gov/).

2. **MOOSE Tutorials**: There are several tutorials available on the official MOOSE website that you can use to get a practical understanding of MOOSE. You can find the tutorials [here](https://mooseframework.inl.gov/getting_started/tutorials_and_examples/).

3. **MOOSE User Manual**: Go through the MOOSE user manual to understand how to use MOOSE effectively. The user manual can be found [here](https://mooseframework.inl.gov/application_usage/index.html).

4. **MOOSE API Documentation**: The API documentation for MOOSE is available on the official website. The documentation contains the technical details about the functions, classes, and modules in MOOSE. You can find the API documentation [here](https://mooseframework.inl.gov/doxygen/).

5. **C++ Programming**: MOOSE is written in C++, so a good understanding of C++ programming is required. You can learn C++ [here](http://www.cplusplus.com/doc/tutorial/).

6. **PETSc**: MOOSE heavily relies on PETSc for its underlying data structures and parallel computations. Understanding PETSc can help you understand how MOOSE works. Learn more about PETSc [here](https://www.mcs.anl.gov/petsc/).

7. **libMesh**: libMesh is another library that MOOSE uses. It is a finite element library that provides functionality for the numerical solution of partial differential equations. Learn more about libMesh [here](http://libmesh.github.io/).
