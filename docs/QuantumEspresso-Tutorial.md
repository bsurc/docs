# Quantum ESPRESSO Tutorial on Borah Cluster

This tutorial will guide you through the process of performing electronic structure calculations using Quantum ESPRESSO on the Borah cluster.

## Step 1: Load the Quantum ESPRESSO Module

Borah uses a module system to manage software environments. To use Quantum ESPRESSO, you need to load its module.

```bash
module load quantum-espresso/7.1/gcc/12.1.0
```

## Step 2: Confirm Quantum ESPRESSO Module is Loaded

Verify that the Quantum ESPRESSO module is loaded using:

```bash
module list
```

Check that `quantum-espresso` is in the list of loaded modules.

## Step 3: Download Pseudopotential

Quantum ESPRESSO requires pseudopotentials for calculations. To download a Silicon pseudopotential:

- Visit: [Quantum ESPRESSO Pseudopotentials](https://pseudopotentials.quantum-espresso.org/legacy_tables)
- Click on Silicon (or the element you're analyzing).
- Use `wget` to download the pseudopotential directly into your directory:

  ```bash
  wget [pseudopotential_download_link]
  ```

  Replace `[pseudopotential_download_link]` with the actual link to the Silicon pseudopotential.

## Step 4: Prepare Input Files

Quantum ESPRESSO requires specific input files for calculations. Prepare your input file (e.g., `input.in`) with the necessary parameters for your calculation.

An example of what the content might look like for Silicon is shown below:

```plaintext
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

## Step 5: Run Quantum ESPRESSO

Submit your job to the cluster using a SLURM script as follows:

```bash
#!/bin/bash
#SBATCH -J test
#SBATCH -o output.out
#SBATCH -n 1
#SBATCH -N 1
#SBATCH --cpus-per-task 48
#SBATCH -p bsudfq
#SBATCH -t 12:00:00
module load borah-applications quantum-espresso/
pw.x < silicon.in > output.out
```

Replace `silicon.in` with your input file's name and `output.out` with the desired output file's name.

## Step 6: Check Output

Quantum ESPRESSO will generate output files containing the results of your calculation. For example, `output.out` will contain information about the electronic structure of Silicon.

## Prerequisites
1. **Basic Understanding of Computational Physics:**
   - Knowledge of electronic structure methods and density-functional theory (DFT).
2. **Familiarity with Linux/Unix Command Line:**
   - Comfortable with command-line interface (CLI) and basic Linux commands.
3. **Experience with High-Performance Computing (HPC) Environments:**
   - Understanding of how to use HPC clusters and job scheduling systems (like SLURM).

## Further Learning and Resources
1. **Official Documentation**: 
   - Refer to the [Quantum ESPRESSO Documentation](https://www.quantum-espresso.org/resources/users-manual) for comprehensive details on its usage.
2. **Tutorials and Examples**: 
   - Explore the [Quantum ESPRESSO Tutorials](https://www.quantum-espresso.org/resources/tutorials) for step-by-step guides and example calculations.
3. **Online Forums and Communities**: 
   - Join forums and mailing lists like the [Quantum ESPRESSO Google Group](https://groups.google.com/g/quantum-environ-users) for community support and discussions.
4. **Research Papers**: 
   - Review scientific publications utilizing Quantum ESPRESSO on platforms like [ResearchGate](https://www.researchgate.net/) and [Google Scholar](https://scholar.google.com/).
5. **Workshops and Webinars**: 
   - Participate in Quantum ESPRESSO workshops or webinars for hands-on learning and networking with experts.
6. **Collaborative Projects**: 
   - Engage in collaborative projects or research using Quantum ESPRESSO to gain practical experience.

