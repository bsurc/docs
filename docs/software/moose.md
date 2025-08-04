# MOOSE

MOOSE (Multiphysics Object-Oriented Simulation Environment) is a powerful simulation framework.

## How to use

We recommend following the [Conda MOOSE Environment](https://mooseframework.inl.gov/getting_started/installation/conda.html){:target="_blank"} instructions provided by INL.

You will need to request an interactive session on a compute node to complete the MOOSE installation. You can do this using
```bash
dev-session-bsu
```

When you are ready to submit a MOOSE job, here is an example submission script to get you started:
```bash title="moose-slurm.sh"
#!/bin/bash

#SBATCH -J MOOSE          # job name
#SBATCH -o log_slurm.o%j  # output and error file name (%j expands to jobID)
#SBATCH -n 48             # total number of tasks requested
#SBATCH -N 1              # number of nodes you want to run on
#SBATCH -p bsudfq         # queue (partition) -- defq, eduq, gpuq, shortq
#SBATCH -t 12:00:00       # run time (hh:mm:ss) - 12.0 hours in this example.


. ~/.bashrc
conda activate moose

mpiexec -n 48 ./mooseExe -i inputFile.i
```
Don't forget to replace the environment name (`moose`), the executable (`mooseExe`), and the input file (`inputFile.i`) names with the names of the environment, executable, and input file you are using.

## Resources

- [MOOSE Framework](https://mooseframework.inl.gov/){:target="_blank"}
- [MOOSE User Manual](https://mooseframework.inl.gov/application_usage/index.html){:target="_blank"}
- [PETSc Documentation](https://www.mcs.anl.gov/petsc/){:target="_blank"}
- [libMesh Documentation](http://libmesh.github.io/){:target="_blank"}
