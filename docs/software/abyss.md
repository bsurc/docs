# ABySS

ABySS is a de novo, parallel, paired-end sequence assembler that is designed for short reads. It can handle very large data sets and was one of the first assemblers to demonstrate the use of the de Bruijn graph technique.

1. Prepare Input Files

    ABySS requires paired-end sequencing data as input, typically in [FASTQ format](https://compgenomr.github.io/book/fasta-and-fastq-formats.html){:target="_blank"}. Make sure you have your input files ready in the cluster. For this tutorial, we'll assume that your files are named `reads1.fastq` and `reads2.fastq`.

2. Submit Abyss job

    First create the following submission file `abyss-slurm.sh` using a text editor:
```bash title="abyss-slurm.sh"
#!/bin/bash
#SBATCH -J abyss            # job name
#SBATCH -o log_slurm.o%j    # output and error file name (%j expands to jobID)
#SBATCH -n 1                # total number of tasks requested
#SBATCH -N 1                # number of nodes you want to run on
#SBATCH --cpus-per-task 48
#SBATCH -p bsudfq           # queue (partition)
#SBATCH -t 12:00:00         # run time (hh:mm:ss)


# Load the abyss module
module load abyss

# Run abyss
abyss-pe k=64 name=my_assembly in='reads1.fastq reads2.fastq'
```

    Replace `64` with the k-mer size appropriate for your data, `my_assembly` with the name you want for your output, and `'reads1.fastq reads2.fastq'` with the names of your actual input files.

    Then submit your job to the scheduler:
```bash
sbatch abyss-slurm.sh
```

3. Check Output

    ABySS will create several output files. The main output is a FASTA file containing the assembled sequences, which will have the name you specified (e.g., `my_assembly-contigs.fa`).
```bash
ls -l my_assembly*
```

## Resources

- [ABySS Documentation](https://www.bcgsc.ca/abyss){:target="_blank"}: Official documentation.
- [ABySS GitHub Repository](https://github.com/bcgsc/abyss){:target="_blank"}: Provides the latest version of ABySS, including source code, release notes, and additional documentation.
- [ABySS: A parallel assembler for short read sequence data](https://genome.cshlp.org/content/19/6/1117){:target="_blank"}: Paper introducing ABySS.
- [SeqAnswers](http://seqanswers.com/){:target="_blank"} and [Biostars](https://www.biostars.org/){:target="_blank"}: Bioinformatics forums.

