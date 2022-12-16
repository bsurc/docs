# Using Software on the Clusters

There are a number of different software packages available on R2 and Borah. Below are guides to the use of some packages on the clusters:

## Singularity
### Singularity
Software is sometimes containerized for ease of ease of installation and use on the clusters, typically when there are numerous dependencies needed for the software. A container is a self-sufficient package containing an entire Linux operating system with the required software and dependencies installed inside of it. On the campus clusters, the software used to make these containers is called Singularity. If a singularity container is being built for your workflow, instructions on its use will be provided. 

## MOOSE
### MOOSE
Getting started with MOOSE on Borah

**1.** Login to Borah and type **module load petsc**. This statement must also be in your sbatch file when you run Moose. 

**2.** Navigate to the directory you want to install Moose in. Your scratch directory you want to install Moose in. Your scratch directory is a common place to put it as Moose and data files can grow to be very large. Then, run the following commands on the command line:

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
The preferred way to run Matlab is with a wrapper script and then running that through a Slurm script. In **/cm/shared/examples/Matlab2019/CPU**, there are example files you can copy to run your  own Matlab programs. **wrapper.m** is very short and should follow the template below. 

```bash
c=parcluster;
c.AdditionalProperties.AdditionalSubmitArgs= ' -p shortq ';
job=batch(c, 'myParallelAlgorithmFcn', 1, {}, 'Pool", 54, 'CurrentFolder', '.'); 
```

The first line should be verbatim in all scripts. The second line has the -p parameter like is used in Slurm files. This should be set to whichever queue you want to run in. The third line runs Matlab's **batch** command which has several parameters.

c is your cluster variable

Replace **myParallelAlgorithmFcn** with the name of the script you want to run (note your file will have a .m suffic but do not include that here). Even 

- [Gaussian](https://www.boisestate.edu/rcs/cluster-guides/using-software-on-the-clusters/gaussian/)

## Contact Info:

|RESEARCH COMPUTING SUPPORT| researchcomputing@boisestate.edu|(208) 426-3904| Riverfront Hall, Suite 319, 1987 W Cesar Chavez Ln, Boise, ID 83725 |
| :---                     | :---                            | :---         | :---                                                                | 
