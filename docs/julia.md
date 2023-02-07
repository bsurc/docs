# Adding the Julia Kernel to OnDemand

[Open OnDemand](https://openondemand.org/) provides users with a graphical interface to the cluster.
Currently OnDemand is only available for R2: [https://r2-gui.boisestate.edu](https://r2-gui.boisestate.edu)

In order to use Julia in a Jupyter Notebook through OnDemand, you'll first need to install the IJulia kernel from the command line on R2. 

First, load any of the available Julia modules. 
You can see the available modules using `module avail -i julia` and load the module using `module load julia/<version number here>`.
Next, load the Julia module, and open a Julia terminal:
```bash
$ module load julia
$ julia
```
After these commands, you'll see your prompt change to the Julia terminal:
```bash
julia> 
```
Then in the Julia terminal, install the IJulia kernel:
```julia
using Pkg
Pkg.add("IJulia")
```
After this, the Julia kernel is installed for you. 
(You'll only need to add the IJulia package once.)

Finally, to use Julia in a notebook, navigate to the Jupyter Notebook App on [https://r2-gui.boisestate.edu](https://r2-gui.boisestate.edu):

![Navigate to the Jupyter Notebook App](images/ood-notebook.png)

Once your Jupyter session starts, select the Julia kernel:

![Select the Julia kernel](images/julia-kernel.png)
