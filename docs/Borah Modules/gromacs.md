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

# Submit the job
```
sbatch job.sh
```

**Note:** Remember to adjust the parameters in the job script (e.g., time, partition, nodes, ntasks) according to the resources required by your task.
