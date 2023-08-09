# Mathematica

Mathematica is a very powerful language with a wide array of uses in scientific computing, machine learning, image processing, data visualization, and much more.

## Activate Mathematica

1. Load the Mathematica module
```bash
module load mathematica
```
2. Go to [http://user.wolfram.com](http://user.wolfram.com) and log in using Single Sign ON (SSO) with your Boise State email. 
1. Run Mathematica to start the activation process
```bash
math
```
You'll get a message about needing to log in and 

## Submit a job to the scheduler

First, you need to create a Mathematica script (a .m file). 
You can use a text editor to do this. 
For this tutorial, we'll create a file named `myscript.m` with the following content:

```mathematica title="myscript.m"
(* Mathematica Script *)
Print["Hello, World!"]

x = 5;
y = 6;
Print[x*y]
```

And a submission script called `mathematica-slurm.sh`:

```bash title="mathematica-slurm.sh"
#!/bin/bash                                                                        
#SBATCH -J mathematica      # job name                                             
#SBATCH -o log_slurm.o%j    # output and error file name (%j expands to jobID)  
#SBATCH -n 1                # total number of tasks requested                      
#SBATCH -N 1                # number of nodes you want to run on                   
#SBATCH --cpus-per-task 1                                                         
#SBATCH -p bsudfq           # queue (partition)                                    
#SBATCH -t 12:00:00         # run time (hh:mm:ss)                                  
                                                                                   

# Load the mathematica module
module load mathematica
                                                                                   
# Run your script
math -script myscript.m
```

This can be submitted using:
```bash
sbatch mathematica-slurm.sh
```

## Resources

- [Mathematica & Wolfram Language documentation](https://reference.wolfram.com/language/): Comprehensive resource that covers all aspects of the language.
- [Wolfram Community](http://community.wolfram.com/): Forum to ask questions and learn from other Mathematica users and experts.
- [Wolfram U's Mathematica programming: an advanced introduction](https://www.wolfram.com/wolfram-u/catalog/gen005/): Fifteen minute video introduction to Mathematica.
- [Wolfram Demonstrations Project](https://demonstrations.wolfram.com/): A collection of interactive illustrations created by Mathematica users from around the world.
