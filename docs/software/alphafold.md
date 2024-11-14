# AlphaFold

AlphaFold is a protein structure prediction system developed by DeepMind.
It uses machine learning techniques to accurately predict protein structures,
which is an important task in computational biology.

## How to use

1. Prepare Directories

    Create a new directory for running AlphaFold in your scratch directory.
```bash
cd /bsuscratch/${USER}
mkdir alphafold_test

cd alphafoldTest
```

2. Prepare Input Files

    Create a `query.fasta` file, which contains your sequence in FASTA format:
```bash title="query.fasta"
>dummy_sequence
GWSTELEKHREELKEFLKKEGITNVEIRIDNGRLEVRVEGGTERLKRFLEELRQKLEKKGYTVDIKIE
```

3. Submit the Job

    Below is the content of an example job submission script. You can use this
    as a template to create your own job submission script.
```bash title="alphafold-slurm.sh"
#!/bin/bash
#SBATCH -J Alphafold      # job name
#SBATCH -o log_slurm.o%j  # output and error file name (%j expands to jobID)
#SBATCH -N 1              # number of nodes you want to run on
#SBATCH -c 24
#SBATCH --gres=gpu:1
#SBATCH -p gpu            # queue (partition)
#SBATCH -t 12:00:00       # run time (hh:mm:ss) - 12.0 hours in this example.

# Load the necessary modules
module load alphafold/2

# Set the environment variables
export OUTPUT_DIR=/bsuscratch/${USER}/alphafold_test
export DATA_DIR=/bsuscratch/alphafold_data

# Execute the program:
run_alphafold.sh -d $DATA_DIR -o $OUTPUT_DIR -m monomer -f query.fasta -t 2020-05-14 -n 24
```

    Submit the job using:
```bash
sbatch alphafold-slurm.sh
```

4. Check the Output

    After the job is finished, you can find the results in new directory called
    "query"--(the directory will have the same name as the input fasta).
    More information about the output can be found in the
    [AlphaFold README](https://github.com/google-deepmind/alphafold?tab=readme-ov-file#alphafold-output).
    Below is the highest confidence predicted structure (ranked_0.pdb) rendered
    using the [RCSB PDB viewer](https://www.rcsb.org/3d-view):

    ![ranked_0.pdb](../images/RANKED_0.PDB.png "Highest ranked PDB output rendered with RCSB PDB viewer"){ width=60% }

## Further Learning

1. **Official Documentation**: The official [AlphaFold Documentation](https://www.alphafold.ebi.ac.uk/) is a comprehensive resource that covers all aspects of AlphaFold.
2. **GitHub Repository**: The [AlphaFold GitHub Repository](https://github.com/deepmind/alphafold) provides the latest version of AlphaFold, including source code, release notes, and additional documentation.
3. **Research Papers**: The original paper introducing AlphaFold, "Highly accurate protein structure prediction for the human proteome", was published in 2021 and provides detailed information about the techniques used in AlphaFold. Many other papers have since cited and expanded upon this work. These can be found in scientific databases like PubMed.
4. **Online Forums and Communities**: Online resources such as [Bioinformatics Stack Exchange](https://bioinformatics.stackexchange.com/) and [Biostars](https://www.biostars.org/) often have threads discussing issues, solutions, and best practices related to AlphaFold and other bioinformatics tools.
