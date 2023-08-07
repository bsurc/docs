# AlphaFold Guide on Borah Cluster

This tutorial will guide you through the process of running protein structure prediction using AlphaFold on the Borah cluster.

## Step 1: Prepare Directories

Create two new directory for AlphaFold, as well as input and output directories.

```bash
mkdir alphafoldTest
mkdir alphafold_output

cd alphafoldTest

mkdir input
mkdir output
```

## Step 3: Load Necessary Modules

Borah uses a system called "modules" to manage software. You need to load the necessary modules for AlphaFold.

```bash
module load slurm
module load alphafold
```

## Step 4: Set Environment Variables

Set the DATA_DIR and OUTPUT_DIR environment variables.

```bash
export DATA_DIR=/bsuscratch/alphafold_data
export OUTPUT_DIR=/bsuscratch/${USER}/alphafold_output
```

## Step 5: Prepare Input Files

You need to create a `query.fasta` file in the `input` directory and put your sequences in it. The content should be in FASTA format, as shown below:

```bash
>dummy_sequence
GWSTELEKHREELKEFLKKEGITNVEIRIDNGRLEVRVEGGTERLKRFLEELRQKLEKKGYTVDIKIE
```

## Step 6: Submit the Job

Below is the content of an example job submission script. You can use this as a template to create your own job submission script.

```bash
#!/bin/bash
#SBATCH -J Alphafold      # job name
#SBATCH -o log_slurm.o%j  # output and error file name (%j expands to jobID)
#SBATCH -N 1              # number of nodes you want to run on
#SBATCH --gres=gpu:2
#SBATCH -p gpu            # queue (partition) -- bsudfq, eduq, gpuq, shortq
#SBATCH -t 12:00:00       # run time (hh:mm:ss) - 12.0 hours in this example.

# Load the necessary modules
module load slurm
module load alphafold

# Set the environment variables
export OUTPUT_DIR=/bsuscratch/${USER}/alphafold_output
export DATA_DIR=/bsuscratch/alphafold_data

# Execute the program:
run_alphafold.sh -d $DATA_DIR -o $OUTPUT_DIR -m model_1 -f ./input/query.fasta -t 2020-05-14

# Exit if mpirun errored:
status=$?
if [ $status -ne 0 ]; then
    exit $status
fi
# Do some post processing.
```

## Step 7: Check the Output

After the job is finished, you can find the predicted protein structures in the OUTPUT_DIR directory.

## Further Learning

AlphaFold is a protein structure prediction system developed by DeepMind. It uses machine learning techniques to accurately predict protein structures, which is an important task in computational biology.

1. **Official Documentation**: The official [AlphaFold Documentation](https://www.alphafold.ebi.ac.uk/) is a comprehensive resource that covers all aspects of AlphaFold.

2. **GitHub Repository**: The [AlphaFold GitHub Repository](https://github.com/deepmind/alphafold) provides the latest version of AlphaFold, including source code, release notes, and additional documentation.

3. **Research Papers**: The original paper introducing AlphaFold, "Highly accurate protein structure prediction for the human proteome", was published in 2021 and provides detailed information about the techniques used in AlphaFold. Many other papers have since cited and expanded upon this work. These can be found in scientific databases like PubMed.

4. **Online Forums and Communities**: Online resources such as [Bioinformatics Stack Exchange](https://bioinformatics.stackexchange.com/) and [Biostars](https://www.biostars.org/) often have threads discussing issues, solutions, and best practices related to AlphaFold and other bioinformatics tools.

5. **Workshops and Conferences**: There are many workshops, webinars, and conferences related to bioinformatics that may provide training or sessions specific to AlphaFold or protein structure prediction in general. These may be offered by universities, research institutions, or companies in the bioinformatics field.
