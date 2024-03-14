# Mathematica Tutorial

This tutorial will guide you through the process of using Mathematica in the terminal.

## Step 1: Load the Mathmatica Module

Borah uses a system called "modules" to manage software. To use Mathematica, you need to load its module. 

```bash
module load mathmatica
```

## Step 2: Confirm the Mathmatica Module is Loaded

You can see a list of currently loaded modules with the `module list` command. 

```bash
module list
```
Check that `mathmatica` is in the list of loaded modules.

## Step 3: Access your activation key

1. run ```math -h```
2. go to http://user.wolfram.com to register your activation key and obtain the password
3. Login in through ```math -h```

## Step 4: Create a Mathematica Script

First, you need to create a Mathematica script (a .m file). You can use a text editor to do this. For this tutorial, we'll create a file named `myscript.m` with the following content:

```mathematica
(* Mathematica Script *)
Print["Hello, World!"]

x = 5;
y = 6;
Print[x*y]
```
## Step 5: Save the Mathematica Script
Save your script as `myscript.m.`. This can be done by pushing ```Esc, :, wq```

## Step 6: Run the Script
```math -script myscript.m```

## Prerequisites
1. **Basic Knowledge of Mathematica:**
    - Understanding of Mathematica's syntax and functions.
    - Familiarity with mathematical and computational concepts that Mathematica can handle.
2. **Computational Skills:**
    - Proficiency in using the command line interface (CLI).
    - Basic understanding of Linux/Unix operating systems, as you will be using Mathematica in a terminal environment.
3. **Programming Experience:**
    - Experience in programming, preferably in Mathematica, but knowledge in other languages like Python or R can also be beneficial.

## Further Learning

1. **Official Documentation:**
    - Explore the [Mathematica & Wolfram Language documentation](https://reference.wolfram.com/language/) for comprehensive language coverage.
2. **Wolfram Community:**
    - Join the [Wolfram Community](http://community.wolfram.com/) for discussions and expert advice.
3. **Online Courses:**
    - Platforms like Coursera, Udemy, and LinkedIn Learning offer Mathematica courses. Check out [Wolfram U's Mathematica programming: an advanced introduction](https://www.wolfram.com/wolfram-u/catalog/gen005/).
4. **Books:**
    - Read titles like "Programming with Mathematica: An Introduction" by Paul Wellin, and "Mathematica: A Problem-Centered Approach" by Roozbeh Hazrat.
5. **Wolfram Demonstrations Project:**
    - Visit [Wolfram Demonstrations Project](https://demonstrations.wolfram.com/) for interactive Mathematica examples.
6. **Practice and Projects:**
    - Regularly apply Mathematica to diverse tasks and personal projects to improve your skills.
7. **Community Engagement and Workshops:**
    -  Participate in Mathematica user groups, forums, or workshops to learn from shared experiences and insights.
8. **Collaborate on Projects:**
    - Work with peers or mentors on Mathematica projects to gain practical experience and insights.

Remember, consistent practice and exploration are key to mastering Mathematica. Don't hesitate to experiment with different features and applications of the language.

