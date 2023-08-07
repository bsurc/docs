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

## Further Learning

MATLAB is a high-level language and interactive environment that enables you to perform computationally intensive tasks faster than with traditional programming languages.

1. **Official Documentation**: The official [MATLAB Documentation](https://www.mathworks.com/help/matlab/) is a comprehensive resource that covers all aspects of the language.

2. **MATLAB Central**: The [MATLAB Central](https://www.mathworks.com/matlabcentral/) is a great place to ask questions and learn from other MATLAB users and experts. 

3. **Online Courses**: Websites like Coursera, edX, Udemy, and LinkedIn Learning offer courses on MATLAB that can help you understand the language more deeply. A popular one is the [MATLAB Onramp](https://www.mathworks.com/learn/tutorials/matlab-onramp.html) which is a free two-hour introductory tutorial that allows you to learn and practice using MATLAB interactively.

4. **Books**: There are several books available that cover MATLAB, like "MATLAB for Dummies" by Jim Sizemore, and "MATLAB: A Practical Introduction to Programming and Problem Solving" by Stormy Attaway.

5. **MATLAB Examples**: The [MATLAB Examples](https://www.mathworks.com/examples/matlab) is a collection of code examples for a variety of MATLAB functions. It can be a great source of learning and inspiration.

Remember, like any language, the key to learning MATLAB is practice. Try to use MATLAB regularly for a variety of tasks to get the hang of it.

## More documentation

After opening the terminal application on the desktop, here is an example of the commands to open MATLAB:
```bash
module load matlab
matlab
```
And the resulting MATLAB GUI will open in a new window as shown here:
[Borah OnDemand desktop with MATLAB GUI open](images/ood-desktop-matlab.png) "Borah OnDemand desktop with MATLAB GUI open")

- [MATLAB](https://www.boisestate.edu/rcs/matlab/)

