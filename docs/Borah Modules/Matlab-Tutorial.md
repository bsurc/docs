# MATLAB Tutorial

This tutorial will guide you through the process of using MATLAB in the terminal.

## Step 1: Load the Matlab Module

Borah uses a system called "modules" to manage software. To use Matlab, you need to load its module. 

```bash
module load matlab
```

## Step 2: Confirm Matlab Module is Loaded

You can see a list of currently loaded modules with the `module list` command. 

```bash
module list
```
Check that `Matlab` is in the list of loaded modules. 


## Step 3: Create a MATLAB Script

First, you need to create a MATLAB script (a .m file). You can use a text editor to do this. For this tutorial, we'll create a file named `myscript.m` with the following content:

```matlab
% MATLAB Script
disp('Hello, World!')

x = 5;
y = 6;
disp(x*y)
```

## Step 4: Save the Mathematica Script
Save your script as `myscript.m.`. 

## Step 5: Run the Script
Run the following command in the terminal 

`matlab -nodisplay -nosplash -nodesktop -r "run('myscript.m'); exit;"`

## Step 6: Check Output

```
Hello, World!
30
```

## Accessing MATLAB GUI

For GUI access on Borah, open the terminal and use:
```bash
module load matlab
matlab
```

This opens the MATLAB GUI in a new window

- For more details, visit the [MATLAB](https://www.boisestate.edu/rcs/matlab/)

## Prerequisites
1. **Basic Knowledge of MATLAB:**
    - Familiarity with MATLAB's environment and syntax.
    - Understanding of basic programming concepts like variables, loops, and functions in MATLAB.
2. **Computational Skills:**
    - Proficiency in using the command line interface (CLI).
    - Basic understanding of Linux/Unix operating systems, as you will be using MATLAB in a terminal environment.
3. **Programming Experience:**
    - Experience in programming, preferably in MATLAB, but knowledge in other languages can be beneficial.

## Further Learning

MATLAB is a high-level language and interactive environment that enables you to perform computationally intensive tasks faster than with traditional programming languages.

1. **Official Documentation**: 
    - Consult the [MATLAB Documentation](https://www.mathworks.com/help/matlab/) for detailed language reference.
2. **MATLAB Central**: 
    - Visit [MATLAB Central](https://www.mathworks.com/matlabcentral/) for community support and expert advice.
3. **Online Courses**: 
    -  Explore courses on Coursera, edX, Udemy, and LinkedIn Learning. Start with the [MATLAB Onramp](https://www.mathworks.com/learn/tutorials/matlab-onramp.html) for a free introductory tutorial.
4. **Books**: 
    - Read "MATLAB for Dummies" by Jim Sizemore, and "MATLAB: A Practical Introduction to Programming and Problem Solving" by Stormy Attaway.
5. **MATLAB Examples**:
    - Check out [MATLAB Examples](https://www.mathworks.com/examples/matlab) for a variety of code samples.
6. **Interactive Tutorials and Workshops:**
    - Participate in MATLAB workshops or webinars offered by educational institutions or MATLAB itself.
7. Community Forums and Groups:
    - Join forums or social media groups dedicated to MATLAB for discussions and networking.
8. **Hands-on Practice:**
    - Apply MATLAB to different types of problems and projects. Experiment with various functions and toolboxes to enhance your understanding.
9. **Collaboration:**
    - Work with peers or mentors on MATLAB projects to gain practical experience and insights.
  
Remember, like any language, the key to learning MATLAB is practice. Try to use MATLAB regularly for a variety of tasks to get the hang of it.


