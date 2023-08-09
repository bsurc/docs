
# HPC Resources
## Borah
Borah was rolled out in October 2020 and is the third centrally-shared cluster Boise State has purchased.
The cluster is located at the Idaho National Laboratory’s Collaborative Computing Center (C3) and built through a partnership between Boise State, the Idaho National Laboratory (INL), and Idaho Power (IPC).

### Specifications
| Category     | Login Nodes                                               | Head Nodes                                                                                  | Compute Nodes                                                                               | GPU Nodes                                                                                   | High Memory Nodes                                                                           |
| :---         | :---                                                      | :---                                                                                        | :---                                                                                        | :---                                                                                        | :---                                                                                        |
| Motherboard  | PowerEdge R340, V2                                        | PowerEdge R440                                                                              | PowerEdge C6420                                                                             | PowerEdge R740XD                                                                            | PowerEdge R640MLK                                                                           | 
| CPU          | Intel Xeon E-2146G 3.5GHz, 12M cache, 6C/12T, turbo (80W) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | Intel Xeon Gold 6252 2.1G, 24C/48T, 10.4GT/s, 35.75M Cache, Turbo, HT (150W) DDR4-2933 (x2) | 
| Memory       | 64 GB                                                     | 64 GB                                                                                       | 192 GB                                                                                      | 384 GB                                                                                      | 768 GB                                                                                      |
| GPU          | N/A                                                       | N/A                                                                                         | N/A                                                                                         | NVIDIA Tesla V100 (x2)                                                                      | N/A                                                                                         |
| Interconnect | Mellanox Non-Blocking HDR200/HDR100 Infiniband            | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              | Mellanox Non-Blocking HDR200/HDR100 Infiniband                                              |
| Cores        | 6                                                         | 48                                                                                          | 1,968                                                                                       | 20,480 CUDA  + 192 CPU                                                                      | 48                                                                                          |
In addition to the above infrastructure, the Borah system also has another 68 CPU nodes owned by our industry partner, Idaho Power. When not in use by Idaho Power, Boise State researchers have access to up to 34 Idaho Power CPU nodes for their research.

## R2
R2 is a heterogeneous compute cluster provided by the Vice President of Research. It consists of 31 compute nodes and 5 GPU nodes, each with dual Intel Xeon E5-2680 CPUs. The GPU nodes each have dual NVIDIA P100 GPUs.
!!! warning "R2 will be decommissioned September 30th 2023"

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

## Falcon
Idaho National Laboratory makes the Top 500 supercomputer known as “Falcon” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Falcon, contact the Research Computing Support Department at: Help@c3plus3.org.

## Lemhi
Idaho National Laboratory makes the Top 500 supercomputer known as “Lemhi” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Sawtooth, contact the Research Computing Support Department at: researchcomputing@boisestate.edu.

### Specifications
See Lemhi’s [TOP 500](https://www.top500.org/system/179570/) page.

## Summit
The Summit Supercomputer is funded by an award from the National Science Foundation (NSF) to the University of Colorado (CU) and the University of Colorado Boulder (CU Boulder). The supercomputer is hosted in a CU Boulder data center and is available to members of RMACC (Rocky Mountain Advanced Computing Consortium), which includes Boise State researchers. To access Summit, contact the Research Computing Support Department at: researchcomputing@boisestate.edu

Summit also has GPU nodes, high-memory nodes, and Intel Phi/Knight’s Landing nodes. See the Summit specifications for detailed information.

## Specifications
See Summit’s [specification](https://www.colorado.edu/rc/resources/summit/specifications) page for system details.

### ACCESS
ACCESS is the successor to the XSEDE program which provides a variety of cyberinfrastructure resources. More information on ACCESS can be found [here](https://access-ci.org/).

