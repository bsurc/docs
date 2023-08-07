# FAQ

### What should I do if I need help?

Above all, the Research Computing team is here to help YOU, the researcher, make advances in your field. 
There are multiple decades worth of programming, system administration, scientific computing, and other technical experience between everyone on the RC team, so don’t be afraid to reach out and tap into this. 
Calling, emailing, and inperson vists can all be utilized and info of the following can be found at the bottom of this page. 

### How can I test my code?

Use `dev-session`, `gpu-session`, and/or `debug-session` for code testing/compiling/optimizing. 
As the login node is a shared resource, we use automatic monitoring to kill processes which would slow down the login node for all users. 
To avoid your parallel testing or compilation processes accidentally being killed, please use the sessions we’ve built for this purpose. 
You should test code before running it, especially if your job is running with MPI across multiple nodes. 
If your code is faulty and doesn’t utilize MPI correctly (by not being correctly configured to use multiple nodes), then your job can “use” nodes while actually keeping them idle, wasting the resources by keeping other users from utilizing them.

### What should I do to have good cluster etiquette toward other users?

Primarily, you should make sure that your jobs aren’t over-utilizing the resources available to the detriment of other users. 
Make sure that your jobs are actually utilizing the resources you’ve requested, don’t request more resources than you need, don’t request large portions (over 8 nodes) of the clusters for jobs that are likely to run for more than a few days, etc.

Also, don’t use the `--exclusive` use parameter unless necessary. 
This parameter will block others from using an entire node, so make sure your job actually needs an entire node to itself. 
If in doubt, consult Research Computing.

### How do you ensure fair access for everyone to the compute resources? Can someone monopolize the clusters?

The clusters run jobs based on a queue system provided by the software [Slurm](https://slurm.schedmd.com/documentation.html). 
Jobs are submitted on a cluster to this scheduling software, assessed for priority, and then run on that cluster in order of priority. 
Priority is decided based on a few factors, such as how many jobs the user has run during that month on that cluster, how much time is requested for the job, how many cores and nodes are requested, and how long the job has waited. 
Individual user priority is reset at the start of every month.

### Can I use the cluster for purposes other than education/research?

**No.** 
Using the cluster for purposes other than education or research is not allowed. 
Mining Bitcoin on the GPU nodes is as unwise as it is obvious, and the sysadmins will figure out what’s going on pretty quickly and revoke your cluster access.

### What should I do if my workflow requires me to have sudo/administrator access?

For security reasons, only admins on the campus clusters are allowed sudo access. 
Please reach out to Research Computing if you run into issues with this – we are more than happy to help get your workflow set up on the cluster.

### What about cybersecurity on the clusters?

By using university cluster resources, you agree to adhere to the university's [information technology resource use policy](https://www.boisestate.edu/policy/information-technology/information-technology-resource-use/). 
You have been granted a cluster account in trust, so standard security rules apply (for example, never give out your password). 
Use of Boise State University computing resources must be consistent with Boise State's educational goals, as well as comply with local, state and federal laws, and university policies. 
Use of the system constitutes consent to monitoring for compliance with local, state and federal laws, and university policies.

