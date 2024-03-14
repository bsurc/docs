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

## Prerequisites
1. **Basic Knowledge of Computational Physics and Engineering:**
    - Understanding of the principles behind multiphysics simulations.
    - Familiarity with the types of problems MOOSE can solve.
2. **Programming Skills:**
    - Proficiency in C++ programming is essential as MOOSE is built using C++.
    - Familiarity with Python for scripting and automating tasks.
3. **Experience with Linux/Unix Systems:**
    - Comfortable with command-line interface (CLI) operations.
    - Knowledge of basic Linux commands and file system navigation.
4. **Understanding of Version Control Systems:**
    - Basic knowledge of Git for cloning repositories.

## Further Learning and Resources
1. **MOOSE Framework:**
    - Visit the [MOOSE Framework](https://mooseframework.inl.gov/) website for detailed information and updates.
2. **MOOSE Tutorials:**
    - Start with [MOOSE Examples & Tutorials](https://mooseframework.inl.gov/getting_started/) for hands-on learning.
3. **MOOSE User Manual:**
    - Consult the [MOOSE User Manual](https://mooseframework.inl.gov/application_usage/index.html) for application usage guidelines.
4. **MOOSE API Documentation:**
    - Explore the [MOOSE API Documentation](https://mooseframework.inl.gov/) for API references.
5. **C++ Programming:**
    - Brush up on C++ with tutorials from [cplusplus.com](http://www.cplusplus.com/doc/tutorial/).
6. **PETSc Documentation:**
    - Review the [PETSc Documentation](https://www.mcs.anl.gov/petsc/) for information on the PETSc library.
7. **libMesh Documentation:**
    - Familiarize yourself with [libMesh](http://libmesh.github.io/), a library used by MOOSE.
8. **Community Engagement:**
    - Participate in MOOSE-related forums, user groups, or mailing lists for community support.
9. **Workshops and Conferences:**
    - Attend MOOSE-related workshops or conferences for advanced learning and networking.
10. **Collaboration and Projects:**
    - Engage in collaborative projects or research using MOOSE for practical experience.

Remember, you will need to use an `sbatch` file to run your jobs on Borah. An example file can be found at `/cm/shared/examples/slurm_moose.bash`.

