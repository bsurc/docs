# Mathematica Tutorial

This tutorial will guide you through the process of using Mathematica in the terminal.

## Step 1: Log into Borah Cluster

First, you need to access the Borah cluster. Use SSH (Secure Shell) to connect to the cluster. You'll need your username and the cluster's address for this. 

```
ssh yourusername@borah-login.boisestate.edu
```
Replace `yourusername` with your actual username. 

## Step 2: Load the Mathmatica Module

Borah uses a system called "modules" to manage software. To use ABySS, you need to load its module. 

```bash
module load mathmatica
```

## Step 3: Confirm the Mathmatica Module is Loaded

You can see a list of currently loaded modules with the `module list` command. 

```bash
module list
```
Check that `mathmatica` is in the list of loaded modules.

## Step 4: Access your activation key

1. run ```math -h```
2. go to http://user.wolfram.com to register your activation key and obtain the password
3. Login in through ```math -h```

## Step 5: Create a Mathematica Script

First, you need to create a Mathematica script (a .m file). You can use a text editor to do this. For this tutorial, we'll create a file named `myscript.m` with the following content:

```mathematica
(* Mathematica Script *)
Print["Hello, World!"]

x = 5;
y = 6;
Print[x*y]
```
## Step 6: Save the Mathematica Script
Save your script as `myscript.m.`. This can be done by pushing ```Esc, :, wq```

## Step 7: Run the Script
```math -script myscript.m```

## Further Learning

Mathematica is a very powerful language with a wide array of uses in scientific computing, machine learning, image processing, data visualization, and much more.

1. **Official Documentation**: The official [Mathematica & Wolfram Language documentation](https://reference.wolfram.com/language/) is a comprehensive resource that covers all aspects of the language.

2. **Wolfram Community**: The [Wolfram Community](http://community.wolfram.com/) is a great place to ask questions and learn from other Mathematica users and experts.

3. **Online Courses**: Websites like Coursera, Udemy, and LinkedIn Learning offer courses on Mathematica that can help you understand the language more deeply. A popular one is the [Wolfram U's Mathematica programming: an advanced introduction](https://www.wolfram.com/wolfram-u/catalog/gen005/).

4. **Books**: There are several books available that cover Mathematica, like "Programming with Mathematica: An Introduction" by Paul Wellin, and "Mathematica: A Problem-Centered Approach" by Roozbeh Hazrat.

5. **Wolfram Demonstrations Project**: The [Wolfram Demonstrations Project](https://demonstrations.wolfram.com/) is a collection of interactive illustrations created by Mathematica users from around the world, which can provide both learning and inspiration.

Remember, like any language, the key to learning Mathematica is practice. Try to use Mathematica regularly for a variety of tasks to get the hang of it.

