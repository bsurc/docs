# Using Python on the cluster

Often when using Python, you may find you need an additional
Conda is a package manager that helps you create and naviagate "environments". 
To learn more, we recommend this [conda tutorial](https://carpentries-incubator.github.io/introduction-to-conda-for-data-scientists/).
For using conda on the clusters, we recommend [Miniconda](https://docs.conda.io/en/latest/miniconda.html#linux-installers).

## Installing Miniconda

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

# Creating a conda environment
