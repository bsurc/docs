# Quantum ESPRESSO

Quantum ESPRESSO is used to perform electronic structure calculations on atomic
structures.

1. Obtain Pseudopotential

    Quantum ESPRESSO requires pseudopotentials for calculations.
To download pseudopotentials:

    - Visit: [Quantum ESPRESSO Pseudopotentials](
        https://pseudopotentials.quantum-espresso.org/legacy_tables) to get a
    link to download the pseudopotential for your atom(s) of interest.
    - Use `wget` to download the pseudopotential via the command line:
        ```bash
        wget [pseudopotential_url]
        ```

    Replace `[pseudopotential_url]` with the actual pseudopotential link.

2. Prepare Input Files

    Quantum ESPRESSO requires specific input files for calculations.
Prepare your input file (e.g., `silicon.in`) with the necessary parameters for
your calculation.

    An example of what the content might look like for Silicon is shown below:

    ```plaintext title="silicon.in"
    &CONTROL
      calculation = 'scf',
      outdir = './',
      prefix = 'silicon',
      pseudo_dir = './',
    /
    &SYSTEM
      ibrav =  2,
      celldm(1) = 10.26,
      nat =  2,
      ntyp = 1,
      ecutwfc = 30.0,
      ecutrho = 300.0,
    /
    &ELECTRONS
      conv_thr =  1.0d-8,
    /
    ATOMIC_SPECIES
      Si  28.0855  Si.pbe-n-kjpaw_psl.1.0.0.UPF
    /
    ATOMIC_POSITIONS {crystal}
      Si 0.00 0.00 0.00
      Si 0.25 0.25 0.25
    /
    K_POINTS {automatic}
      4 4 4 0 0 0
    ```

3. Submit a Quantum ESPRESSO job

    Submit your job to the cluster using a SLURM script as follows:

    ```bash title="quantumespresso-slurm.sh"
    #!/bin/bash
    #SBATCH -J quantum-espresso     # job name
    #SBATCH -o qe_out.o%j           # output file name (%j expands to jobID)
    #SBATCH -N 1                    # number of nodes
    #SBATCH --cpus-per-task 48
    #SBATCH -p bsudfq               # partition name
    #SBATCH -t 12:00:00             # time (hh:mm:ss)

    module load borah-applications quantum-espresso
    pw.x < silicon.in > output.out
    ```

    Replace `silicon.in` with your input file's name and `output.out` with the
desired output file's name.

## Resources
- [Quantum ESPRESSO Documentation](https://www.quantum-espresso.org/resources/users-manual):
Official user manual.
- [Quantum ESPRESSO Tutorials](https://www.quantum-espresso.org/resources/tutorials):
Step-by-step guides and example calculations.
- [Quantum ESPRESSO Google Group](https://groups.google.com/g/quantum-environ-users):
Community support and discussions.

