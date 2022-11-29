# Scheduling a Job

## Slurm

The clusters run jobs based on a queue system provided by the software Slurm. 
Jobs are submitted on a cluster to this scheduling software, assessed for priority, and then run on that cluster in order of priority. 
Priority is decided based on a few factors, such as how many jobs the user has run during that month on that cluster, how much time is requested for the job, how many cores and nodes are requested, and how long the job has waited. 
Individual user priority is reset at the start of every month.

Jobs must be run through the job scheduler – those not run through the scheduler will be automatically stopped by the system as the high CPU usage from a computational task could cause instability and crashes when other vital system processes then have to compete for resources.

Jobs submitted to Slurm are specified with what’s called an “sbatch script”, which is essentially a set of commands and parameters that are passed to and then run by Slurm that become the job. 
These commands can include shell commands, the running of script files by other programs like R or Python, or running specific pieces of software.

## Writing a Basic sbatch Script

An sbatch script contains two components: a set of sbatch parameters and the commands to be executed. 
The first of these tells Slurm some of the parameters about how the job should be run, the second tells it what to run. 
There are a wide variety of different sbatch parameters that can be specified, but only a few are relevant in most cases.

## Queues 

The first of these parameters is the queue, also known as partition, parameter. 
Specified by the line `#SBATCH -p (partition name)` in the sbatch script, this parameter tells Slurm which queue (or partition) the job should be run in. 
You can view the queues available to you using the `sinfo` command.

!!! warning

    “Preemptable” means that jobs submitted to this queue can be stopped and requeued if a higher priority job needs the resources. If the software you are using makes use of checkpointing, i.e., writing out intermediate data so the job doesn't need to restart from the beginning, you can make the best use of these queues.

The following are the queues available on R2:

| Queue     | Node Type | Max Nodes/User | Time limit (days) | Preemptable? | Total nodes |
| :---      | :---      | :---           | :---              | :---         | :---        |
| defq      | CPU       | 8              | infinite          | No           | 21          | 
| shortq    | CPU       | 35             | 2                 | Yes          | 35          | 
| gpuq      | GPU       | 2              | infinite          | No           | 4           |
| shortgpuq | GPU       | 5              | 7                 | Yes          | 5           |

!!! info "R2 hardware specifications"

    Each CPU node has two Intel Xeon E5-2680 v4 14 core 2.4GHz processors, for a total of 28 cores per node, with 192GB of memory. Each GPU node has 2 gpus per node.

The following are the queues available on Borah:

| Queue    | Node Type | Max Nodes/User | Time limit (days) | Preemptable? | Total nodes |
| :---     | :---      | :---           | :---              | :---         | :---        |
| bsudfq   | CPU       | 8              | inifinite         | No           | 40          |
| short    | CPU       | 72             | 2                 | Yes          | 72          |
| gpu      | GPU       | 2              | infinite          | No           | 4           |
| shortgpu | GPU       | 5              | 7                 | Yes          | 5           |
| bigmem   | CPU (768 GB of RAM)| 1     | infinite          | No           | 1           |

!!! info "Borah hardware specifications"

    CPU nodes have 48 cores per node and GPU nodes have 2 gpus per node.

!!! note "Note about shortgpu queue"

    The shortgpu partition contains 8 NVidia V100 gpus and 8 NVidia Quadro RTX8000 gpus. If you would like to run on a specific gpu type, you can add the following to your slurm scripts:
    for one RTX8000:

    `--gres=gpu:RTX8000:1`

    for one V100:

    `--gres=gpu:V100:1`

    and for one gpu regardless of type:

    `--gres=gpu:1`

## Nodes and Cores

The next parameter is for specifying the number of nodes wanted and is set with `#SBATCH -N (number of nodes)`. 
This is used if CPU nodes are requested and tells Slurm how many overall nodes you want your job to use. 
The `#SBATCH -n (tasks per node)` parameter is used in conjunction with the number of nodes parameter to tell Slurm how many tasks (aka CPU cores) you want to use on each node. 
This can be used to request more cores than available on one node by setting the nodes count to greater than one and the tasks count to the number of cores per node (28 on R2, 48 on Borah).

The equivalent command for GPUs is `#SBATCH --gres=gpu:(number of GPUs requested)`. 
This parameter can be set to a maximum of two on R2, and a maximum of one on Borah.

## Naming, Timing, and Output

The last three standard parameters you’ll need are `#SBATCH -t DD-HH:MM:SS, #SBATCH -o (output file name), and #SBATCH -J (job name)`. 
The first of these is mandatory and tells Slurm how much time you’re requesting for your job. 
This is formatted as DD-HH:MM:SS. 
So, for example, running a job for one day and twenty hours would be 1-20:00:00, running for twelve hours and fifty minutes would be 12:50:00, and running for a half hour would be 00:30:00. 
This is the maximum amount of time you expect your job to run; if a job runs for beyond this specified amount, the scheduler will terminate it. 
If you have a job that looks like it will exceed the amount of time you’ve specified for it here, please reach out to Research Computing so we can add more time to the job to avoid it being cancelled. 
The second parameter is the optional output file specifier. 
This will redirect any terminal output that the job produces to a file with the name you put in the parameter; if this parameter is left out, the output will go into a text file named slurm-(job number).out. 
The last parameter is the mandatory job name that shows up when the Slurm queue is viewed.

One more parameter that warrants mention is `#SBATCH --exclusive`. 
Using this parameter will claim the entire compute node (and all its resources) for just your job, stopping other jobs from running on the node. 
This is useful if you’re actually utilizing all 28 or 48 (on R2 and Borah, respectively) cores on a node and/or a significant portion of the node’s memory, but it can make the job take a little bit longer to get through the queue.

## What to Run

The other component of an sbatch script is a set of arbitrary commands that will be run after the parameters are parsed. 
These can be essentially any shell commands you could normally run, though obviously only some are useful. 
As an example, here’s a full sbatch script for an MPI job running a Mandelbrot fractal generator across 28 CPU cores on a single CPU node:


``` bash title="slurm_mandelbrot.sh"
#!/bin/bash
#SBATCH -J MPI_TEST # job name
#SBATCH -o log_slurm.o%j # output and error file name (%j expands to jobID)
#SBATCH -n 28 # total number of tasks requested
#SBATCH -N 1 # number of nodes you want to run on
#SBATCH -p defq # queue (partition)
#SBATCH -t 12:00:00 # run time (hh:mm:ss) - 12.0 hours in this example.

module load slurm
module load gcc
module load mpich/ge/gcc/64/3.2.1
mpirun -np 28 ./mandelbrot
```

As another example, here’s a full sbatch script for a CUDA job running a Mandelbrot fractal generator on a single GPU node:

``` bash title="slurm_cumandy.sh"
#!/bin/bash
#SBATCH -J CUDA_TEST # job name
#SBATCH -o log_slurm.o%j # output and error file name (%j expands to jobID)
#SBATCH -n 1 # total number of tasks requested
#SBATCH -N 1 # number of nodes you want to run on
#SBATCH -p gpuq # queue (partition) -- defq, eduq, gpuq, shortq
#SBATCH --gres=gpu:1 # request one gpu
#SBATCH -t 12:00:00 # run time (hh:mm:ss) - 12.0 hours in this example.

module load slurm
module load cuda10.0

# Execute the program
./cudaMandy
```

The first parts of these scripts are the parameters we discussed above. 
Below those begin the shell commands; the first of these, the module load commands, are just loading certain modules into the environment. 
These modules are the Slurm scheduler (slurm), the gcc compiler (gcc), an MPI framework called “mpich” (mpich/ge/gcc/64/3.2.1), and the CUDA version 10 toolkit (cuda10.0). 
Note that Slurm is necessary in both (and in all) sbatch scripts as this loads the job scheduler. 
gcc is also required for many programs to run correctly – mpich and CUDA are job dependent, however. 
In the first example, the `mpirun -np 28 ./mandelbrot` command invokes the loaded mpich MPI interface and runs the program with it across 28 cores. 
In the second example, the `./cudaMandy` command runs a program with CUDA that generates the fractal using a GPU on a GPU node. 
In your own scripts, the section with commands like the mpirun is where you would, for example, run your parallel R or Python script that’s meant to utilize the computing resources. 
This is also where you’d invoke commands from programs like GROMACS, BLAST, or whatever software you’re using.

These other commands will differ from job to job. 
As can be seen, these scripts are somewhat nuanced, so contact Research Computing if you need any help putting them together.

Once your script is ready, use the command `sbatch (job script filename)` to run the job. 
You will get an output message saying `Submitted batch job (job number)`, which tells you that your job was successfully submitted.

## Other Useful Slurm Commands

`scancel (job number)` cancels a job based on its number; you can, for obvious reasons, only cancel jobs that you’ve submitted. 
`squeue` shows the current Slurm queue and all jobs in it. 
Jobs that have something like `r2-cpu-01` (on R2) or `cpu102` (on Borah) at their far right are jobs that are currently running. 
If a job has something like `(Resources)` or `(Priority)` on the far right, then it’s currently sitting in the queue waiting to be run. 
`(Resources)` means that the job has priority over other jobs in the queue and is just waiting on node(s) to become available, while `(Priority)` means that there are other jobs in the queue with a higher priority that must be run before that job will run.

The command `scontrol` also allows for detailed job information to be viewed, and can be used with `scontrol show job (job number)`.
