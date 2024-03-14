# Gromacs Tutorial on Borah Cluster 

## Starting Information

GROMACS is a versatile package to perform molecular dynamics simulations, i.e., compute the Newtonian equations of motion for systems with hundreds to millions of particles. It is primarily designed for biochemical molecules like proteins and lipids that have many complicated bonded interactions, but since GROMACS is extremely fast at calculating the nonbonded interactions (that usually dominate simulations), many groups are also using it for research on non-biological systems.

## Step 1: Login into the Borah cluster
```ssh yourusername@borah-login.boisestate.edu```

## Step 2: Run the development session
```dev-session-bsu```

## Step 3: Navigate to the scratch directory and create a new directory for running GROMACS
```
cd /scratch

mkdir gromacs_test

cd gromacs_test
```

## Step 4: Create the necessary files with correct formatting

### water.gro
```
Water molecule
3
    1WAT     OW    1   0.000   0.000   0.000
    1WAT    HW1    2   0.000   0.100   0.000
    1WAT    HW2    3   0.100   0.000   0.000
   0.200   0.200   0.200
EOL
```
### water.mdp
```
; Run parameters
integrator               = md
dt                       = 0.002
nsteps                   = 500000
; Output parameters
nstxout                  = 500
nstvout                  = 500
nstenergy                = 500
nstlog                   = 500
; Bond parameters
continuation             = no
constraint_algorithm     = lincs
lincs_iter               = 1
lincs_order              = 4
```
### water.top
```
; Include forcefield parameters
#include "oplsaa.ff/forcefield.itp"
[ system ]
; Name
Water molecule
[ molecules ]
; Compound        #mols
SOL               1
```

## Step 5: Run the commands to get the processed.gro file and the grompp file
module load gromacs/2020
```
gmx_mpi pdb2gmx -f water.pdb -o water_processed.gro -water spce
gmx_mpi grompp -f water.mdp -c water_processed.gro -p water.top -o water.tpr
```

## Step 6: Example of an sbatch file that's more about the GROMACS run properties

## job.sh
```
#!/bin/bash
#SBATCH --job-name=gromacs_test
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=48
#SBATCH --time=01:00:00
#SBATCH --partition=bsudfq

gmx_mpi pdb2gmx -f water.pdb -o water_processed.gro -water spce
gmx_mpi grompp -f water.mdp -c water_processed.gro -p water.top -o water.tpr

module load gromacs/2020
srun gmx_mpi mdrun -v -deffnm water
```

## Submit the job
```
sbatch job.sh
```

## Prerequisites
1. **Background in Molecular Dynamics and Computational Chemistry:**
    - Basic understanding of molecular dynamics simulations and their applications in scientific research.
    - Familiarity with key concepts in computational chemistry and biophysics.
2. **Technical Skills:**
    - Proficiency in using command line interfaces and navigating Linux/Unix environments.
    - Understanding of high-performance computing (HPC) environments and job scheduling systems, like SLURM.
3. **Mathematics and Physics Knowledge (optional but helpful):**
    - Basic grasp of physical principles underlying molecular dynamics, such as forces, energy, and statistical mechanics.
    - Understanding of numerical methods and algorithms used in simulations.


## Further Learning
1. **Official GROMACS Documentation:**
    -  Comprehensive guides, installation instructions, and detailed usage instructions are available on the [GROMACS online manual](http://manual.gromacs.org/documentation/).
2. **Step-by-Step Tutorials:**
    - The [GROMACS tutorials](http://www.mdtutorials.com/gmx/) provide practical, step-by-step instructions for various types of simulations, from beginner to advanced levels.
3. **Community Support and Discussion Forums:**
    - Engage with the [GROMACS user forum](http://gromacs.bioexcel.eu/) to ask questions, share experiences, and learn from other users' challenges and solutions.
4. **Educational Webinars and Videos:**
    - Explore webinars and instructional videos from [BioExcel](https://www.youtube.com/@BioExcelCoE) and other platforms for visual and detailed explanations of GROMACS features and applications.
5. **Workshops and Hands-on Training:**
    - Look for workshops and training sessions offered by universities, research institutions, and conferences. These often provide valuable hands-on experience and networking opportunities.
6. **Research Papers and Case Studies:**
    - Review academic literature and case studies involving GROMACS to understand its application in cutting-edge research.


