# Using Python on the cluster

When using Python, you may find you need to use various libraries (e.g., numpy for numerical analysis or matplotlib for plotting). 
Installing and managing these different libraries and their dependencies can be problematic, especially when you run into conflicts.
Conda is a package manager that helps you create and naviagate "environments" to help automatically handle these conflicts. 
To learn more, we recommend this [conda tutorial](https://carpentries-incubator.github.io/introduction-to-conda-for-data-scientists/).

## Installing conda

For using conda on the clusters, we recommend [Miniconda](https://docs.conda.io/en/latest/miniconda.html#linux-installers).
To install Miniconda, select one of the download links on that page, right-click the link, and select copy link.

![copy link screenshot](images/copylink.png)

Then paste that link into the terminal to download the installer script: (replace `PASTE_LINK_HERE` with the link you copied) 
```bash
wget PASTE_LINK_HERE
```

And run the installer script: (replace `USE_DOWNLOADED_FILENAME_HERE` with the name of the file you downloaded usually something starting with "Miniconda" and ending with ".sh"
```
bash USE_DOWNLOADED_FILENAME_HERE
```

For example:
```bash
wget https://repo.anaconda.com/miniconda/Miniconda3-py39_4.12.0-Linux-x86_64.sh
bash Miniconda3-py39_4.12.0-Linux-x86_64.sh
```

The following prompts will ask you if the default installation location (typically in your home directory) is alright (it is) and whether you want to initialize conda each time you log in (generally a good idea).

# Creating a conda environment

Now 

# Using a conda environment with Open OnDemand

Currently Open OnDemand is only available for R2: [https://r2-gui.boisestate.edu](https://r2-gui.boisestate.edu)

In order to use your conda environment in a Jupyter Notebook through Open OnDemand, you'll need to install some additional packages. With the conda environment you want to use active, install `jupyter` and `ipykernel`:
```bash
conda install jupyter ipykernel
```

Then run ipykernel to create the custom Jupyter kernel: (replace `ENVIRONMENT_NAME` with the environment name and `PYTHON ENV NAME` with the name you will select for the kernel)
```bash
python -m ipykernel install --user --name ENVIRONMENT_NAME --display-name "PYTHON ENV NAME"
```

Then navigate to the Jupyter Notebook App on [https://r2-gui.boisestate.edu](https://r2-gui.boisestate.edu):

![Navigate to the Jupyter Notebook App](images/ood-notebook.png)

Once your Jupyter session starts, select the kernel you just made (It will be listed under the name you put in `PYTHON ENV NAME`):

![Select the right Jupyter kernel](images/jupyter-kernel.png)
