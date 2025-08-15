# VASP

The Vienna Ab initio Simulation Package (VASP) performs first principles
electronic structure calculation of atomic structures.

1. Prepare Input Files

    VASP requires several input files to run a calculation:

    - `INCAR`: Specifies the calculation parameters.
    - `POSCAR`: Provides the atomic positions.
    - `KPOINTS`: Defines the k-point mesh for Brillouin zone sampling.
    - `POTCAR`: Contains the pseudopotentials for the elements.

    More information about these files and their format can be found in the
[VASP wiki](https://www.vasp.at/wiki/index.php){:target="_blank"}

2. Create a Job Script

    To run VASP on the cluster, you need to create a job script for the Slurm
scheduler.
    Below is an example VASP job script:

    ```bash title="vasp-slurm.sh"
    #!/bin/bash
    #SBATCH -J vasp                 # job name
    #SBATCH -o vasp_output.o%j      # output file name (%j expands to jobID)
    #SBATCH -n 48                   # number of tasks
    #SBATCH -p bsudfq               # partition name
    #SBATCH -t 12:00:00             # time (hh:mm:ss)

    # Print some job details
    echo "Job details:"
    echo "Date: $(date)"
    echo "Hostname: $(hostname -s)"
    echo "Directory: $(pwd)"
    echo "Nodes allocated: $SLURM_JOB_NUM_NODES"
    echo "Tasks allocated: $SLURM_NTASKS"
    echo "Cores per task: $SLURM_CPUS_PER_TASK"
    echo ""

    # Load VASP module
    module load vasp/5.4.4

    # Run VASP
    mpirun vasp_std
    ```

3. Submit the Job

    In the dirctory containing your job script and input files submit the job to
the scheduler:

    ```bash
    sbatch vasp-slurm.sh
    ```

4. Analyze the Output

    After the job finishes, VASP will generate several output files including
`OUTCAR`, `CONTCAR`, `OSZICAR`, and possibly `CHGCAR` and `WAVECAR`, depending
on your calculation.
You can analyze these files to obtain results such as the total energy,
electronic structure, and optimized geometry.

## Resources

- [VASP Manual](https://www.vasp.at/wiki/index.php/The_VASP_Manual){:target="_blank"}: Official wiki.
- [VASP Forum](https://www.vasp.at/forum/){:target="_blank"}: Community support and discussions.
