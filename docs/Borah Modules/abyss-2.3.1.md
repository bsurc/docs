# ABySS Tutorial on Borah Cluster

This tutorial will guide you through the process of performing a de novo assembly using ABySS(Assembly By Short Sequences) on the Borah cluster.

## Step 1: Log into Borah Cluster

First, you need to access the Borah cluster. Use SSH (Secure Shell) to connect to the cluster. You'll need your username and the cluster's address for this. 

```
ssh yourusername@borah-login.boisestate.edu
```
Replace `yourusername` with your actual username. 

## Step 2: Load the ABySS Module

Borah uses a system called "modules" to manage software. To use ABySS, you need to load its module. 

```bash
module add abyss
```

## Step 3: Confirm ABySS Module is Loaded

You can see a list of currently loaded modules with the `module list` command. 

```bash
module list
```
Check that `abyss` is in the list of loaded modules. 

## Step 4: Prepare Input Files

ABySS requires paired-end sequencing data as input, typically in FASTQ format. Make sure you have your input files ready in the cluster. For this tutorial, we'll assume that your files are named `reads1.fastq` and `reads2.fastq`.

An example of what the content should look like is shown below:

```bash
@SEQ_ID
GATTTGGGGTTCAAAGCAGTATCGATCAAATAGTAAATCCATTTGTTCAACTCACAGTTT
+
!''*((((***+))%%%++)(%%%%).1***-+*''))**55CCF>>>>>>CCCCCCC65
```

Each read in a FASTQ file is represented by four lines:

1. Begins with '@' and is followed by the sequence identifier.
2. The raw sequence.
3. Begins with '+' and is optionally followed by the same sequence identifier.
4. Quality scores of the raw sequence. Each character represents a quality score.

Your actual input files will be much larger and contain many such reads.

## Step 5: Run ABySS

You can now run ABySS with the `abyss-pe` command. You'll need to set several parameters, including the k-mer size (`k`), the name of the output (`name`), and the input files (`in`). 

```bash
abyss-pe k=64 name=my_assembly in='reads1.fastq reads2.fastq'
```

Replace `64` with the k-mer size appropriate for your data, `my_assembly` with the name you want for your output, and `'reads1.fastq reads2.fastq'` with the names of your actual input files. 

## Step 6: Check Output

ABySS will create several output files. The main output is a FASTA file containing the assembled sequences, which will have the name you specified (e.g., `my_assembly-contigs.fa`).

```bash
ls -l my_assembly*
```

## Additional Information

ABySS has many other parameters that users can adjust to better suit their data and needs. For those who want to explore beyond this basic usage, refer to the [ABySS user manual](https://www.bcgsc.ca/abyss).
