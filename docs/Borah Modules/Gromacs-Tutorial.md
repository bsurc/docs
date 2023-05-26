# Step 1: Login into the Borah cluster
```ssh yourusername@borah-login.boisestate.edu```

# Step 2: Run the development session
```dev-session-bsu```

# Step 3: Navigate to the scratch directory and create a new directory for running GROMACS
```
cd /scratch

mkdir gromacs_tes

cd gromacs_test
```

# Step 4: Create the necessary files with correct formatting

## water.gro
```
Water molecule
3
    1WAT     OW    1   0.000   0.000   0.000
    1WAT    HW1    2   0.000   0.100   0.000
    1WAT    HW2    3   0.100   0.000   0.000
   0.200   0.200   0.200
EOL
```
## water.mdp
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
## water.top
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

# Step 5: Run the commands to get the processed.gro file and the grompp file
module load gromacs/2020
```
gmx_mpi pdb2gmx -f water.pdb -o water_processed.gro -water spce
gmx_mpi grompp -f water.mdp -c water_processed.gro -p water.top -o water.tpr
```

# Step 6: Example of an sbatch file that's more about the GROMACS run properties

## job.sh
```
#!/bin/bash
#SBATCH --job-name=gromacs_test
#SBATCH --nodes=1
#SBATCH --ntasks-per-node=28
#SBATCH --time=01:00:00
#SBATCH --partition=cpu

module load gromacs/2020
srun gmx_mpi mdrun -v -deffnm water
```

## Submit the job
```
sbatch job.sh
```

**Note:** Remember to adjust the parameters in the job script (e.g., time, partition, nodes, ntasks) according to the resources required by your task.

## Additional Information

GROMACS is a versatile package to perform molecular dynamics simulations, i.e., compute the Newtonian equations of motion for systems with hundreds to millions of particles. It is primarily designed for biochemical molecules like proteins and lipids that have many complicated bonded interactions, but since GROMACS is extremely fast at calculating the nonbonded interactions (that usually dominate simulations), many groups are also using it for research on non-biological systems.

1. **Official Documentation**: The [GROMACS online manual](http://manual.gromacs.org/documentation/) provides a comprehensive guide to the program, covering installation, basic usage, and more advanced features.

2. **Tutorials**: The [GROMACS tutorials](http://www.mdtutorials.com/gmx/) offer a step-by-step guide to running simulations, from basic setups to more advanced topics.

3. **User Forum**: The [GROMACS user forum](http://gromacs.bioexcel.eu/) is a great place to ask questions and learn from other users' experiences.

4. **BioExcel Webinars**: [BioExcel](https://www.youtube.com/playlist?list=PLBQ5BPNzjS5IvMhTvA9LQBJsC0_fJUIiB), the leading European Centre of Excellence for Computational Biomolecular Research, offers webinars on using GROMACS and other tools.

5. **Workshops and Training**: Many universities and institutes offer GROMACS workshops, which can provide hands-on experience. Check for opportunities at your institution or nearby research centers.

Remember, mastering GROMACS, like any computational tool, comes with practice and familiarity. Use it frequently, experiment with its features, and don't hesitate to seek help when needed.

