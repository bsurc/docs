# ABySS Tutorial on Borah Cluster

This tutorial will guide you through the process of performing a de novo assembly using ABySS(Assembly By Short Sequences) on the Borah cluster.

## Step 1: Load the ABySS Module

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

## Further Learning

ABySS is a de novo, parallel, paired-end sequence assembler that is designed for short reads. It can handle very large data sets and was one of the first assemblers to demonstrate the use of the de Bruijn graph technique. 

1. **Official Documentation**: The official [ABySS Documentation](https://www.bcgsc.ca/abyss) is a comprehensive resource that covers all aspects of the assembler.

2. **GitHub Repository**: The [ABySS GitHub Repository](https://github.com/bcgsc/abyss) provides the latest version of ABySS, including source code, release notes, and additional documentation.

3. **Research Papers**: The original paper introducing ABySS, "De novo assembly of the ABySS", was published in 2009 and provides detailed information about the techniques used in the assembler. Many other papers have since cited and expanded upon this work. These can be found in scientific databases like PubMed.

4. **Online Forums and Communities**: Online resources such as [SeqAnswers](http://seqanswers.com/) and [Biostars](https://www.biostars.org/) often have threads discussing issues, solutions, and best practices related to ABySS and other bioinformatics tools.

5. **Workshops and Conferences**: There are many workshops, webinars, and conferences related to bioinformatics that may provide training or sessions specific to ABySS or genome assembly in general. These may be offered by universities, research institutions, or companies in the bioinformatics field.

Remember, like any tool, the key to mastering ABySS is practice. Use it regularly and don't be afraid to experiment and troubleshoot when issues arise.

