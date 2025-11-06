# Scheduling a Job

## Slurm

The clusters run jobs based on a queue system provided by the software Slurm.
Jobs are submitted to this scheduling software, assessed for priority, and then
run on that cluster in order of priority.
Priority is decided based on a few factors, such as how many jobs the user has
run during that month on that cluster, how much time is requested for the job,
how many cores and nodes are requested, and how long the job has waited.
Individual user priority is reset at the start of every month.

Jobs must be run through the scheduler – those not run through the scheduler
will be automatically stopped by the system as the high CPU usage from a
computational task could cause instability and crashes when other vital system
processes then have to compete for resources.


## Writing a Basic Submission Script

Jobs scripts can be submitted to the scheduler using the command `sbatch`.
These job scripts (sometimes called "batch scripts", "sbatch scripts", or
"submission scripts") start with a header containing slurm parameters; the
lines read by sbatch all start with `#SBATCH`.
These slurm parameters tell the scheduler how to allocate resources,
and terminal commands, which encompasses what you actually want to run:
including shell commands, running scripts through other programs like R or
Python, or calling specific software.
Here we will discuss the slurm parameters and provide some basic options to help
you get started, but please see the
[Slurm sbatch documentation](https://slurm.schedmd.com/sbatch.html){:target="_blank"} for a
full list of options.

## Queues

The queue (or partition) parameter tells the scheduler which queue the job
should be submitted to and is specified as follows:
```
#SBATCH -p (partition name)
```
You can view the queues available to you from the command line using `sinfo`.
The following table provides information about the queues on Borah:

!!! warning

    “Preemptable” means that jobs submitted to this queue can be stopped and
    requeued if a higher priority job needs the resources. If the software you
    are using makes use of checkpointing, i.e., writing out intermediate data so
    the job doesn't need to restart from the beginning, you can make the best
    use of these queues.


| Queue    | Node Type | Max Nodes/User | Time limit (days) | Preemptable? | Total nodes |
| :---     | :---      | :---           | :---              | :---         | :---        |
| bsudfq   | CPU       | 8              | 28                | No           | 38          |
| bigmem   | CPU (768 GB of RAM)| 1     | 7                 | No           | 1           |
| short    | CPU       | no limit       | 7                 | Yes          | 39          |
| gpu              | GPU | 2            | 7                 | No           | 6           |
| gpu-l40          | GPU | 1            | 7                 | No           | 2           |
| gpu-p100         | GPU | no limit     | 7                 | No           | 1           |
| gpu-v100         | GPU | 2            | 7                 | No           | 4           |
| shortgpu         | GPU | no limit     | 7                 | Yes          | 9           |
| shortgpu-a30     | GPU | no limit     | 7                 | Yes          | 1           |
| shortgpu-l40     | GPU | no limit     | 7                 | Yes          | 2           |
| shortgpu-p100    | GPU | no limit     | 7                 | Yes          | 1           |
| shortgpu-rtx8000 | GPU | no limit     | 7                 | Yes          | 1           |
| shortgpu-v100    | GPU | no limit     | 7                 | Yes          | 4           |


!!! info "Borah hardware specifications"

    The default queue on Borah is `bsudfq`. Each node in this queue has 48 CPU
    cores and 192GB of memory. See
    [Borah's Specifications](hpc_resources.md#specifications) for more information.

!!! note "Note about the gpu and shortgpu queues"

    The `gpu` and `shortgpu` partitions have heterogeneous node configurations; the
    `gpu` queue contains nodes with V100 (2/node) and L40 (4/node) GPUs with 48
    and 64 CPU cores, respectively. The `shortgpu` queue contains, in addition to
    the nodes in the `gpu` queue, nodes with A30 (2/node), P100 (2/node), and
    RTX8000 (8/node) GPUs with 64, 28, and 48 CPU cores, respectively.
    If you would like to run on a specific GPU type, you can add the following
    to your slurm scripts:

    To request a specific GPU type when submitting to the `gpu` or `shortgpu`
    queue, for example an L40:

    `--gres=gpu:L40:1`

    and for one GPU regardless of type:

    `--gres=gpu:1`

    Or you can just submit to the specific GPU queue; e.g., submitting to the
    `gpu-v100` queue will ensure that you get on a node with a V100 GPU.

The above table provides information about the specifications of nodes in
the available queues, but you can also see these resources from the
command-line using sinfo.
The following example queries the node name, CPU cores, memory, and resources
of all the nodes in the `shortgpu` queue:
```bash
sinfo -p shortgpu -o "%n %c %m %G"
```

## Requesting Resources

In order to know how many resources you should request for your job, it helps to
understand a little about the different resources.

!!! info "Node vs. CPU vs. task"

    A **node** is a computer or server within the cluster, e.g., the login node
    or a compute node like cpu101.
    When we talk about the node we are talking about the entire machine; this
    encompasses the memory, network card, CPU(s), GPU(s), hard drive, etc.

    A **CPU**, generally, is the processing unit of a computer, but slurm kind
    of fudges this definition to be the sockets, cores, or threads of a CPU.
    [This Slurm resource](https://slurm.schedmd.com/cpu_management.html){:target="_blank"} provides
    more information.

    A **task** is a part of a job parallelized using a distributed memory model,
    e.g., using MPI.
    For an overview of shared and distributed memory models, please check out
    [Cornell Virtual Workshop: Memory Access](https://cvw.cac.cornell.edu/parallel/memory-access/index){:target="_blank"}.

If you are not sure how many resources to request, in general,  we recommend
requesting 1 node, 1 task, and a full node's worth of cores working on that
task. For the default queue on Borah, this request would look like this:

```
#SBATCH --nodes=1
#SBATCH --ntasks=1
#SBATCH --cpus-per-task=48
```

If you are using a distributed memory framework, e.g., MPI, you may want to use
more tasks with one or more core(s) per task.
This can also distribute your job across multiple nodes by setting the nodes
count to greater than one and the tasks count to greater than the number of cores
per node.
We recommend scaling multi-node jobs in increments of the number of cores per
node; e.g., request a number of cores that can be evenly divided by the number
of cores per node ($n_{cores/node} \times N$).

In addtion to nodes and cores, you can also request that your job run on a GPU.
To request a GPU, add the following to your submission script:
```
#SBATCH --gres=gpu:(number of GPUs requested)
```

## Timing, Output, and Naming

The scheduler relies on the the submission script to estimate how long a job
will take. You can set a time limit for your job with the following line:
```
#SBATCH -t DD-HH:MM:SS
```
For example, one day and twenty hours would be 1-20:00:00, twelve hours and
fifty minutes would be 12:50:00, and a half hour would be 00:30:00.
This time limit is a hard stop for your job, and when it is reached, your job
will be terminated regardless of whether your script has finished.
Ideally, you want to choose a time limit that is just longer than you expect
your job to run.
If no time limit is specified, a default of twelve hours will be set.
You can update the job's time limit by running:
```bash
scontrol update job JOBID timelimit=NEWTIMELIMIT
```
where `JOBID` is the job id of the job you want to update and `NEWTIMELIMIT` is
the new time limit.

!!! note "Updating time limits"

    You will only be able to increase the time limit of a job that is still
    queued. Once a job is running, you will only be able to _decrease_ the
    time limit.

    If you need more time on a currently running job, please email us at
    researchcomputing@boisestate.edu.


If you want to change the name of the file where the script output is logged,
you can use the following line:
```
#SBATCH -o (output file name)
```
This will redirect any terminal output that the job produces to a file in the
current working directory with the name you specify; if this parameter is
omitted, the output is logged to a text file named `slurm-(job number).out`.

If you want to give your job a unique name to identify it in the `squeue`
output, you can do so by adding the following line to your script:
```
#SBATCH -J (job name)
```

Finally, if you want to make sure that your job has exclusive access to an
entire node--regardless of how many resources it is using--you can add the
following line to your submission script:
```
#SBATCH --exclusive
```
This will claim the entire compute node (and all its resources) for just your
job, stopping other jobs from running on the node. This is useful if you’re
actually utilizing all 48 cores (on Borah) and/or a significant portion of the
node’s memory, but it can make the job take a little longer to get through
the queue.

## Example submission scripts

The final component of an sbatch script is the set of commands that will be run
after the slurm parameters are parsed.
These can be any shell command, e.g., loading modules, setting environment
variables, or calling executables.
Let's say you've created an [MPI executable](software/c_cpp.md); you could
use the following script to submit this job to the scheduler requesting 48 cores
on a single CPU node:

```bash title="hello_world_slurm.sh"
#!/bin/bash
#SBATCH -J HELLOWORLD    # job name
#SBATCH -o log_slurm.o%j # output and error file name (%j expands to jobID)
#SBATCH -n 48            # total number of tasks requested
#SBATCH -N 1             # number of nodes you want to run on
#SBATCH -p bsudfq        # queue (partition)
#SBATCH -t 00:05:00      # run time (hh:mm:ss) - 5 minutes in this example

# (optional) Print some debugging information
echo "Date              = $(date)"
echo "Hostname          = $(hostname -s)"
echo "Working Directory = $(pwd)"
echo ""
echo "Number of Nodes Allocated  = $SLURM_JOB_NUM_NODES"
echo "Number of Tasks Allocated  = $SLURM_NTASKS"
echo ""

# Run the program
module load borah-base openmpi/4.1.3/gcc/12.1.0
mpirun -n 48 ./hello_world
```

As another example, here’s a job script requesting a GPU node and then running
`nvidia-smi` to see information about the GPU:

```bash title="gpu_slurm.sh"
#!/bin/bash
#SBATCH -J NVIDIASMI        # job name
#SBATCH -o log_slurm.o%j    # output and error file name (%j expands to jobID)
#SBATCH -c 1                # cpus per task
#SBATCH -N 1                # number of nodes you want to run on
#SBATCH --gres=gpu:1        # request a gpu
#SBATCH -p gpu              # queue (partition)
#SBATCH -t 00:05:00         # run time (hh:mm:ss)

# (optional) Print some debugging information
echo "Date              = $(date)"
echo "Hostname          = $(hostname -s)"
echo "Working Directory = $(pwd)"
echo ""
echo "Number of Nodes Allocated  = $SLURM_JOB_NUM_NODES"
echo "Number of Tasks Allocated  = $SLURM_NTASKS"
echo "GPU Allocated              = $SLURM_JOB_GPUS"
echo ""
nvidia-smi
```

These commands will differ from job to job.
If you need any help setting up a submission script, please don't hesitate to
email us at ResearchComputing@boisestate.edu--we're happy to help!

Once your script is ready, you can submit it using
```
sbatch (job script filename)
```
You will get an output message saying `Submitted batch job (job number)`, which
tells you that your job was successfully submitted.

## Job Arrays

A common task on an HPC system is to run some piece of code many times: this
could be a parameter sweep or running an analysis on a large number of input
files.
Anytime you find yourself repeating the same job with minor tweaks, this is
when you should think "Job Array".

In the following example, we need to run a python workflow
(`my_python_workflow.py`) using some variety of parameters including sample ID,
threshold, number of steps, and whether or not the run is a "dry run" or not.

First we collect all the necessary parameters for each run in a csv file--if you
were analyzing different files, this file could contain the path to those files:
```bash title="parameters.csv"
sampleA,0.10,128,true
sampleB,0.20,256,false
sampleC,0.05,064,true
sampleD,0.50,032,false
sampleE,0.75,512,true
```

Then we can use the following slurm submission script to parse through that csv
file and run the analysis for each array job--the environment variable
`$SLURM_ARRAY_TASK_ID` will update for each array job:
```bash title="array-slurm.sh"
#!/bin/bash
#SBATCH -p bsudfq
#SBATCH -J myarray
#SBATCH -t 12:00:00
#SBATCH -N 1
#SBATCH -c 1

# Parse one row of CSV for each array job
ROW="$(sed -n "${SLURM_ARRAY_TASK_ID}p" parameters.csv)"

# Signifiy the delimiter, put the values into the bash shell $ENV
IFS=',' read -r ID THRESHOLD STEPS DRYRUN <<<"$ROW"

# Check how it is interpreted as new bash variables
echo "task=${SLURM_ARRAY_TASK_ID} id=${ID} thr=${THRESHOLD} steps=${STEPS} dry=${DRYRUN}"

# Run one command with one set of parameters, repeated n times for each --array value
python3 my_python_workflow.py \
    --id "${ID}" \
    --threshold "${THRESHOLD}" \
    --steps "${STEPS}" \
    --dry-run "${DRYRUN}
```

Finally, since there are 5 samples in the `parameters.csv`, we can submit all 5
array jobs as follows:
```bash
sbatch --array=1-5 array-slurm.sh
```


## Useful Slurm Commands

`scancel (job number)` : cancels a job; you can only cancel your own jobs.

`squeue` : shows the current Slurm queue and all jobs in it.

`squeue --me` : shows only your jobs in the current Slurm queue.

!!! note "How to read squeue"

    A job that is currently running will have a state (`ST`) code of `R`.
    The `NODELIST (REASON)` column will tell you what nodes the job is running
    on, or if it is not yet running, why it is waiting.
    If a job has something like `(Resources)` or `(Priority)` in that column,
    then it’s currently sitting in the queue waiting to be run.
    `(Resources)` means that the job has priority over other jobs in the queue
    and is just waiting on resources to become available, while `(Priority)`
    means that there are other jobs in the queue with a higher priority that
    must be run before that job will run.

`scontrol show job (job number)` : shows detailed job information.
