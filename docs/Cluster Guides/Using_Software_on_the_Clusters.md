# Using Software on the Clusters

There are a number of different software packages available on R2 and Borah. Below are guides to the use of some packages on the clusters:

## Singularity
### Singularity
Software is sometimes containerized for ease of installation and use on the clusters, typically when there are numerous dependencies needed for the software. A container is a self-sufficient package containing an entire Linux operating system with the required software and dependencies installed inside of it. On the campus clusters, the software used to make these containers is called Singularity. If a singularity container is being built for your workflow, instructions on its use will be provided. 

## MOOSE
### MOOSE
Getting started with MOOSE on Borah

**1.** Login to Borah and type **module load petsc**. This statement must also be in your sbatch file when you run Moose. 

**2.** Navigate to the directory you want to install Moose in. Your scratch directory is a common place to put it as Moose and data files can grow to be very large. Then, run the following commands on the command line:

**3.** **mkdir projects**

**4.** **cd projects**

**5.** **git clone https://github.com/idaholab/moose.git**

**6.** **cd moose**

**7.** **git checkout master**

**8.** **./scripts/update_and_rebuild_libmesh.sh**

**9.** Step 8 may take 1-2 hours to complete. When it is finished, do **cd test** and then: 

**10.** **make**

**11.** **./run_tests**

**12.** Remember you will need to use a sbatch file to run your jobs on Borah. An example file that you can copy and modify can be found at **/cm/shared/examples/slurm_moose.bash**


## MATLAB
### MATLAB
Getting Started with Parallel Computing using MATLAB at Boise State University:

This document provides the steps to configure MATLAB to submit jobs to a cluster, retrieve results, and debug errors.

### CONFIGURATION - MATLAB client on the cluster
After logging into the cluster, start Matlab. Configure Matlab to run parallel jobs on your cluster by calling **configCluster**, which only needs to be called once per version of Matlab. You only need to call this once and then never need to call it again. Start Matlab with

$ **matlab -nodisplay - nodesktop**

And then type

- **configCluster**

This will copy Matlab support files to a hidden local directory to allow Matlab to run parallel jobs better and over multiple cores. If you experience errors running **configCluster**, you may need to delete all settings from previous Matlab versions. These settings directories are in the .matlab directory in your home directory and these directories (.matlab/local_cluster_settings, R2017a, R2018a) may be safely removed. After **configCluster** has been succesfully run, you may exit Matlab by typing:

- **exit**

### RUNNING MATLAB ON OUR CLUSTERS WITH SLURM - CPU nodes
The preferred way to run Matlab is with a wrapper script and then running that through a Slurm script. In **/cm/shared/examples/Matlab2019/CPU**, there are example files you can copy to run your own Matlab programs. **wrapper.m** is very short and should follow the template below. 

```bash
c=parcluster;
c.AdditionalProperties.AdditionalSubmitArgs= ' -p shortq ';
job=batch(c, 'myParallelAlgorithmFcn', 1, {}, 'Pool", 54, 'CurrentFolder', '.'); 
```

The first line should be verbatim in all scripts. The second line has the -p parameter similar to the Slurm files. This should be set to whichever queue you want to run in. The third line runs Matlab's **batch** command which has several parameters.

c is your cluster variable

Replace **myParallelAlgorithmFcn** with the name of the script you want to run (note your file will have a .m suffic but do not include that here). Even if your script is not a function, you will need to define it as a function which can easily be done by placing a **function** definition at the beginning of your script and adding **end** as the last line. 

Keep 1 and {} for the next set of parameters. This corresponds to your program's number of outputs but doesn't matter in this context because Matlab jobs run through Slurm don't display output. You should always save your results to a .mat or .txt file. The next parameter is how many cores you want to use. Keep Pool but the next numbers (54 in the example) is the number of cores you want to use minus two. For instance, a 54 here will actually use 56 cores because Matlab doesn't count the master thread that runs your process and the launching thread that Slurm uses to launch your job. Matlab will automatically figure out how many nodes you need for the number of cores you select. Because Boise State runs a shared cluster, the more resources you request, the more likely you are to have a longer wait time before your job can be run.

The last file you have to concern yourself with is the sbatch file that you need to use to properly submit the job to our scheduler. This is **wrapSlur.batch**. You should not need to modify anything in this script except if you change the name of the wrapping script, you will need to change it here. **sbatch wrapSlurm.batch** will submit your job to the cluster.

### RUNNING MATLAB WITH SLURM - GPU nodes
Running Matlab scripts on GPU nodes can be considerably more complex. Each GPU node has 2 GPUs. If you are staying on one node, you can use **parfor** statements like you would expect. If you are using more than one node, you must use **spmd blocks**. Example files are in **/cm/shared/examples/Matlab2019/GPU/**

GPU work on Matlab uses a Slurm file like all work on Matlab does. The file **stockPrice.m** is customized for a multinode job. The following lines are important:

```bash
setSchedulerMessageHandler(@disp) % Required by Matlab
c.AdditionalProperties.GpusPerNode=2; % This line will automatically put you job in gpuq
c.AdditionalProperties.AdditionalsubmitArgs = '--nodes=2 --ntasks-per-node=2'; % This is typically for multinode work only. 
If you wanted only one node, replace the nodes=2 with nodes=1 parpool(c,4); % Note the 4 refers to GPUs, not CPU cores. For one node, you could put 2 or 1 here if that is all you need. 
```

The next two lines are only needed if you are running on multiple GPU nodes. Scripts that need to run on other nodes need to be listed but this line is not necessary if you are only using one node (2GPUs orless).

```bash
poolobj = gcp;
addAttachedFiles(poolobj, {'runSimulationOnOneGpu.m', 'simulateStockPrice.m'})
```

like before, you would use the sbatch command to submit your job to the cluster.

There are other ways to do this, but these are the ways that have been tested on our clusters. 

### DEEP LEARNING WITH MATLAB AND GPUs
Note: Matlab's **gpuArray** is bounded by the memory in 1 GPU (12 Gigabytes).

if you are running deep learning training with Matlab, you typically define training options with a line like the following:

```bash
options = trainingOptions('sgdm', ...
  'LearnRateSchedule', 'piecewise', ...
  'LearnRateDropFactor', 0.2, ...
  'LearnRateDropPeriod', 5, ...
  'MaxEpochs' , 20, ...
  'MiniBatchSize', 64, ...
  'ExecutionEnvironment', 'gpu', ...
  'Plots', 'training-progress')
```

The ExecutionEnvironment line is particularly important here. Matlab only supports using all the GPUs on one node or even one GPU only for certain solvers (e.g. sgdm). ExecutionEnvironment can be set to multi-gpu but your mileage will vary depending on the capabilities of Matlab with certain solvers.

Matlab has many capabilities, some helpful links are listed below and you can always email Research Computing at:
researchcomputing@boisestate.edu
- [Parallel Computing Coding Examples](http://www.mathworks.com/products/parallel-computing/code-examples.html)
- [Parallel Computing Documentation](http://www.mathworks.com/help/distcomp/index.html)
- [Parallel Computing Overview](http://www.mathworks.com/products/parallel-computing/index.html)
- [Parallel Computing Tutorials](http://www.mathworks.com/products/parallel-computing/tutorials.html)
- [Parallel Computing Videos](http://www.mathworks.com/products/parallel-computing/videos.html)
- [Parallel Computing Webinars](http://www.mathworks.com/products/parallel-computing/webinars.html)

## Gaussian
### Gaussian
Getting started with Gaussian on Borah

**1.** You must be a member of the gaussian group to be able to run Gaussian on Borah. You can type the **id** command to see what groups you are in. If you are not in theGaussian group, please contact researchcomputing@boisestate.edu for assistance.

**2.** You will need to add the following lines to your .bashrc file using a text editor like vim:export
```bash
g16root=/cm/shared/apps/gaussian16
export GAUSS_SCRDIR=/bsuscratch/gaussian
. $g16root/g16/bsd/g16.profile
```

Let us now if you need assistance with this step

**3.** Nodes on Borah have 48 cores so to run Gaussian at its best, include the following lines in your Slurm job submission file:**#SBATCH -N 1 #SBATCH -n 48**

**4.** In your Slurm job submission file, typically Gaussian is run with a command looking like the following:**g16 input.gwf** Add **-p=48** so you would have:
**g16 -p=48 input.gwf

**5.** If you also want to continue working on R2, all of these instructions still apply but change all instances of 48 to 28 because nodes on R2 have 28 cores. 

## Contact Info:

|RESEARCH COMPUTING SUPPORT| researchcomputing@boisestate.edu|(208) 426-3904| Riverfront Hall, Suite 319, 1987 W Cesar Chavez Ln, Boise, ID 83725 |
| :---                     | :---                            | :---         | :---                                                                | 
