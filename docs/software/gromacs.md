# Gromacs

GROMACS is a package to perform molecular dynamics simulations, i.e., compute the Newtonian equations of motion for systems with hundreds to millions of particles. It is primarily designed for biochemical molecules like proteins and lipids that have many complicated bonded interactions, but since GROMACS is extremely fast at calculating the nonbonded interactions (that usually dominate simulations), many groups are also using it for research on non-biological systems.

## How to use

1. Create the input files:

    ```bash title="water.gro"
    Water molecule
    3
        1WAT     OW    1   0.000   0.000   0.000
        1WAT    HW1    2   0.000   0.100   0.000
        1WAT    HW2    3   0.100   0.000   0.000
       0.200   0.200   0.200
    EOL
    ```

    ```bash title="water.mdp"
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

    ```bash title="water.top"
    ; Include forcefield parameters
    #include "oplsaa.ff/forcefield.itp"
    [ system ]
    ; Name
    Water molecule
    [ molecules ]
    ; Compound        #mols
    SOL               1
    ```
    For more information about these files and what the options mean, we highly recommened the [GROMACS tutorials](http://www.mdtutorials.com/gmx/){:target="_blank"}.

2. Create your submission script and submit your job to the scheduler

    ```bash title="gromacs-slurm.sh"
    #!/bin/bash
    #SBATCH --job-name=gromacs_test
    #SBATCH --nodes=1
    #SBATCH --ntasks-per-node=48
    #SBATCH --time=01:00:00
    #SBATCH --partition=bsudfq


    module load borah-applications gromacs/2022.3/openmpi/4.1.3/gcc/12.1.0

    gmx_mpi pdb2gmx -f water.pdb -o water_processed.gro -water spce
    gmx_mpi grompp -f water.mdp -c water_processed.gro -p water.top -o water.tpr

    mpirun gmx_mpi mdrun -v -deffnm water
    ```

    Submit the job
```bash
sbatch gromacs-slurm.sh
```

## Resources
- [GROMACS online manual](http://manual.gromacs.org/documentation/){:target="_blank"}: Official documentation.
- [GROMACS tutorials](http://www.mdtutorials.com/gmx/){:target="_blank"}: Step-by-step guide to running simulations, from basic setups to more advanced topics.
- [GROMACS user forum](http://gromacs.bioexcel.eu/){:target="_blank"}: Forum to ask questions and learn from other users' experiences.
- [BioExcel](https://www.youtube.com/playlist?list=PLBQ5BPNzjS5IvMhTvA9LQBJsC0_fJUIiB){:target="_blank"}: Video tutorials on using GROMACS and other tools.
