# R

R is a free software environment for statistical computing and graphics.

## Using R in a Jupyter notebook

Through [Borah-OnDemand](https://borah-ondemand.boisestate.edu) you can access a Jupyter notebook running on Borah.
(More info about [Borah-OnDemand](open_ondemand.md).)
Jupyter notebooks can be used to run R, but first you'll need to create a conda environment and install the R-kernel.

0. Before we can do any of the next steps, we'll need to install a conda/mamba distribution. We recommend mambaforge: [Installing mambaforge](conda.md#installing-condamamba). 

    !!! info 
        You may want to run the next steps in an interactive session, so your process is not killed on the login node. Use `dev-session` to request an interactive session. 

1. Once mamba/conda is installed, we'll use it to create a new environment:
    ```bash
    mamba create -n r-env -c conda forge r-recommended r-irkernel jupyter
    ```
    In this example, we're creating an environment called `r-env` and pulling the packages `r-recommended`, `r-irkernel`, and `jupyter` from the `conda-forge` channel.

    !!! info 
        If you installed a different conda/mamba distribution (e.g., miniconda), you may need to replace `mamba` with `conda`.

2. After the environment is created, we'll activate it and install the interactive R kernel:
    ```bash
    mamba activate r-env
    R -e 'IRkernel::installspec()'
    ```

And that concludes the installation! 
To use the newly-installed R-kernel, navigate to [Borah-OnDemand](https://borah-ondemand.boisestate.edu) and request a Jupyter Notebook session through the Interactive Apps tab.
On the notebook screen, open the dropdown for a "New" notebook and select "R".

## Installing R packages

There are many R packages beyond the standard library. 
If you find yourself getting an error like `there is no package called ‘PACKAGENAME’`, you probably need to install a package.
Here is how you can install packages in R:

1. Load an R module **or** activate the conda environment containing your R installation:
    ```bash
    module load borah-misc r/4.2.2
    ```
    or 
    ```bash
    conda activate r-env
    ```
    See [above](#using-r-in-a-jupyter-notebook) for how to install R in a conda environment.
2. Start an R terminal and install your desired package:
    ```bash
    R
    ```
    ```r
    install.packages("mypackagename")
    ```
    where `mypackagename` is the name of the package you want to install. 
    If you are using an R module, it will ask if you want to install into a personal library in your home directory. 
    Both options will ask you to select a mirror--you can just choose the closest one.

Once the package is finished installing, you're ready to go.
If you run into issues installing a package, please contact [researchcomputing@boisestate.edu](mailto:researchccomputing@boisestate.edu).

## Submitting an R job to the scheduler

Once you have your R packages installed you're ready to submit a job to the scheduler. 
(More info about [scheduling a job](scheduling.md).)

Below is an example submission script if you are using R from a module:

```bash title="r-slurm.sh" linenums="1" hl_lines="9 10"
#!/bin/bash
#SBATCH -J R_job       		# job name
#SBATCH -o log_slurm.o%j    # output and error file name (%j expands to jobID)
#SBATCH -n 48 			    # total number of tasks requested
#SBATCH -N 1 			    # number of nodes you want to run on
#SBATCH -p bsudfq			# queue (partition)
#SBATCH -t 12:00:00 		# run time (hh:mm:ss)

# Load the module
module load borah-misc r/4.2.2

# Replace myscript.R with the name of the script
Rscript myscript.R
```

This script can be submitted using `sbatch`:
```bash
sbatch r-slurm.sh
```

If you are using R from a conda environment, just replace lines 9 and 10 in the above script (highlighted) with the following:

```bash title="r-slurm.sh" linenums="9"
# Activate your environment
~/.bashrc
conda activate r-env
```
