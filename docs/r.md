# R

R is a free software environment for statistical computing and graphics.

## Using R in a Jupyter notebook

Through [Borah-OnDemand](https://borah-ondemand.boisestate.edu) you can access a Jupyter notebook running on Borah.
(More info about [Borah-OnDemand](open_ondemand.md).)
Jupyter notebooks can be used to run R, but first you'll need to create a conda environment and install the R-kernel.

0. Before we can do any of the next steps, we'll need to install a conda/mamba distribution. We recommend mambaforge: [Installing mambaforge](conda.md#installing-condamamba)
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
