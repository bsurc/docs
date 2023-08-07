## Troubleshooting & Software Services
HPC support services include provisioning accounts, troubleshooting, and optimizing job runs.

Our HPC engineers will also assist users with evaluating system requirements for both open source and licensed software if users are considering purchasing software. Research Computing does not purchase software but can help you find the right channels to procure software. 

Our HPC engineers also help with software installation, troubleshooting, and updating. To request help with software you’re using or would like to use on the cluster, email researchcomputing@boisestate.edu and provide basic information, including name of software, any known dependencies and issues and whether or not it’s open source or proprietary. **Many commonly used HPC software packages are already installed on our centrally-shared clusters. Check if your package is installed with 'module avail' and let us know if there is something you would like installed.** We’re happy to discuss any software needs you have. Please contact researchcomputing@boisestate.edu.

For more information on specific systems, see HPC Resources.

## **Rclone**

`rclone` is a command-line program that syncs files and directories between different cloud storage providers or between your local machine and a cloud provider. Some reasons to use `rclone` over other methods like `scp`, Globus, or FTP include:

- **Wide Range of Supported Providers**: `rclone` supports over 40 different cloud storage providers, including popular services like Google Drive, Amazon S3, Dropbox, and more. This makes it a versatile tool for managing files across various platforms.
- **Efficient Synchronization**: `rclone` provides powerful synchronization options, allowing for incremental transfers, checksum verification, and more. This can be more efficient than traditional methods, especially for large datasets or complex directory structures.
- **Ease of Automation**: `rclone` offers numerous flags and configuration options, making it easy to script and automate repetitive tasks.
- **Cross-Platform Support**: `rclone` works on Windows, macOS, and Linux, providing a consistent experience across different operating systems.

### Example Usage of rclone

Here's a simple example of how `rclone` could be used to synchronize a local directory with a remote Google Drive folder:

1. **Configure a Remote Connection**: First, you would configure a connection to Google Drive by running:

   ```bash
   rclone config
   ```

   This interactive process guides you through setting up the connection.

2. **Synchronize a Local Directory with Google Drive**: Once configured, you can sync a local directory (e.g., `my_folder`) with a remote Google Drive folder (e.g., `my_drive`) using:

   ```bash
   rclone sync /path/to/my_folder my_drive:/path/in/drive
   ```

   This command will ensure that the contents of the local directory and the remote Google Drive folder are identical, copying any new or modified files as needed.

`rclone` provides a robust and flexible way to manage files across different storage systems, making it an appealing option for those working with diverse cloud environments or seeking advanced synchronization capabilities.


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

### Falcon
Idaho National Laboratory makes the Top 500 supercomputer known as “Falcon” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Falcon, contact the Research Computing Support Department at: Help@c3plus3.org.

### Lemhi
Idaho National Laboratory makes the Top 500 supercomputer known as “Lemhi” available to Boise State researchers. For help setting up accounts, requesting allocations or access to Sawtooth, contact the Research Computing Support Department at: researchcomputing@boisestate.edu.

### Specifications
See Lemhi’s [TOP 500](https://www.top500.org/system/179570/) page.

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
