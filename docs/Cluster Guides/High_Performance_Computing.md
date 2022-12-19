# High Performance Computing
Boise State offers support for the several HPC resources. For access instructions email researchcomputing@boisestate.edu with the following information:

- Request Account on the HPC SYSTEM: system name
- Project: Project Name or Grant Information
- Description of Research: Short description of research to be done on the cluster.
- Software: To determine whether or not the software you need is available on the cluster, use “module avail.” If you need further assistance with software, please email us.
- Project PI Name: PI’s-Name.
- Email Address of Requestor: user@boisestate.edu

## Troubleshooting & Software Services
HPC support services include provisioning accounts troubleshooting and optimizing job runs.

Our HPC engineers will also assist users with evaluating system requirements for both open source and licensed software if users are considering purchasing software. Research Computing currently does not purchase software other than what’s needed to manage and administer the cluster (e.g. Bright Cluster Manager, Intel Compiler, and Globus for transferring/sharing data).

Our HPC engineers also help with software installation, troubleshooting, and updating. To request help with software you’re using or would like to use on the cluster, email researchcomputing@boisestate.edu and provide basic information, including name of software, any known dependencies and issues and whether or not it’s open source or proprietary. **Many commonly used HPC software packages are already installed on our centrally-shared clusters. Check if your package is installed with “module avail” and let us know if there is something you would like installed.** We’re happy to discuss any software needs you have. Please contact researchcomputing@boisestate.edu.

For more information on specific systems, see HPC Resources.

## HPC Resources
### Borah
| Category     | Login Nodes                                               | Head Nodes                                                                                  | Compute Nodes                                                                               | GPU Nodes                                                                                   | High Memory Nodes                                                                           |
| :---         | :---                                                      | :---                                                                                        | :---                                                                                        | :---                                                                                        | :---                                                                                        |
| Motherboard  | PowerEdge R340, V2                                        | PowerEdge R440                                                                              | PowerEdge C6420                                                                             | PowerEdge R740XD                                                                            | PowerEdge R640MLK                                                                           | 
| CPU          | Intel Xeon E-2146G 3.5GHz, 12M cache, 6C/12T, turbo (80W) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | 
| Memory       | 64 GB                                                     | 64 GB                                                                                       | 192 GB                                                                                      | 384 GB                                                                                      | 768 GB                                                                                      |
| GPU          | N/A                                                       | N/A                                                                                         | N/A                                                                                         | NVIDIA Tesla V100 (x2)                                                                      | N/A                                                                                         |
| Interconnect | Mellanox Non-Blocking HDR200/HDR100 Infiniband            | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              |
| Cores        | 6                                                         | 48                                                                                          | 1,968                                                                                       | 20,480 CUDA  + 192 CPU                                                                      | 48                                                                                          |

### R2
R2 is a heterogeneous compute cluster provided by the Vice President of Research. It consists of 31 compute nodes and 5 GPU nodes, each with dual Intel Xeon E5-2680 CPUs. The GPU nodes each have dual NVIDIA P100 GPUs.

### Specifications
| Category     | Login Nodes | Head Nodes                                 | Compute Nodes                             | GPU Nodes                   |
| :---         | :---        | :---                                       | :---                                      | :---                        |
| Mother Board |             | Dell PE R730/xd                            | Dell PE R630                              | Dell PE R730/xd             |
| CPU          |             | Intel Xeon E5-2623 v4 14 core 2.6GHz (x2)  | Intel Xeon E5-2680 v4 14 core 2.4GHz (x2) |                             |
| Memory       |             | 64 GB                                      | 192 GB                                    |	256 GB                      |
| GPU          | N/A         |                                            |                                           | NVIDIA Tesla NVLink P100 x2 |
| Ethernet     |             | Dual 10GigE                                | Quad Port GigE                            |                             |
| Infiniband   |             | Mellanox ConnectX-3 VPIFDR, QSFP+ 40/56GbE |                                           |                             |
| Storage      |             | Dell MD3460 12G SAS [60 TB] Raid-6 XFS     |                                           |                             |
| Storage      |             | Dell MD3000 6G SAS [360 TB] Raid-6 XFS     |                                           |                             |
| Cores        |             | 16                                         | 28                                        | 3584 GPU + 28 CPU           |

### Sawtooth
Idaho National Laboratory makes the Top 500 supercomputer known as “Sawtooth” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Sawtooth, contact the Research Computing Support Department at: researchcomputing@boisestate.edu.

### Specifications
See Sawtooths’s [TOP 500](https://www.top500.org/system/179708/) page or [INL’s HPC web page](https://hpc.inl.gov/SitePages/Home.aspx) for more information:

### Lemhi
Idaho National Laboratory makes the Top 500 supercomputer known as “Lemhi” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Sawtooth, contact the Research Computing Support Department at: researchcomputing@boisestate.edu.

### Specifications
See Lemhi’s [TOP 500](https://www.top500.org/system/179570/) page.

### Falcon
Idaho National Laboratory makes the Top 500 supercomputer known as “Falcon” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Falcon, contact the Research Computing Support Department at: researchcomputing@boisestate.edu.

### Specifications
See Lemhi’s [TOP 500](https://www.top500.org/system/179570/) page.

### Summit
The Summit Supercomputer is funded by an award from the National Science Foundation (NSF) to the University of Colorado (CU) and the University of Colorado Boulder (CU Boulder). The supercomputer is hosted in a CU Boulder data center and is available to members of RMACC (Rocky Mountain Advanced Computing Consortium), which includes Boise State researchers. To access Summit, contact the Research Computing Support Department at: researchcomputing@boisestate.

Summit also has GPU nodes, high-memory nodes, and Intel Phi/Knight’s Landing nodes. See the Summit specifications for detailed information.

### Specifications
See Summit’s [specification](https://www.colorado.edu/rc/resources/summit/specifications) page for system details.

### ACCESS
ACCESS is the successor to the XSEDE program which provides a variety of cyberinfrastructure resources. More information on ACCESS can be found [here](https://access-ci.org/).

In addition to the above infrastructure, the Borah system also has another 68 CPU nodes owned by our industry partner, Idaho Power. When not in use by Idaho Power, Boise State researchers have access to up to 34 Idaho Power CPU nodes for their research.

| RESEARCH COMPUTING SUPPORT | researchcomputing@boisestate.edu |(208) 426-3904 | Riverfront Hall, Suite 319, 1987 W Cesar Chavez Ln, Boise, ID 83725 |
| :---                       | :---                             | :---          | :---                                                                | 
