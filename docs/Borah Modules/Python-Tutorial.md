# Python Script Execution Tutorial on Borah Cluster

This tutorial outlines the steps for running Python scripts on the Borah cluster. The Borah cluster offers an environment for high-performance computing tasks, and this guide will help you navigate running your Python code efficiently on the cluster.

## Step 1: Load the Python Module

Load the Python module to ensure that the Python environment is available in your session:

```module add python```

## Step 2: Access Python Interactive Terminal

You can now access the Python interactive terminal by simply typing:

```python```

You are now inside the Python terminal where you can execute Python commands interactively.

To exit the Python interactive terminal, you can type:

```exit()```

or

```quit()```

## Step 3: Create a Python Script

Exit the Python interactive terminal to return to the command line of the cluster. Now, you can create Python .py files to run scripts. Use a text editor like nano, vim, or emacs to write your Python script:

```vim my_script.py```

Add your Python code to the file. For example:

```
# my_script.py
print("Hello, Borah Cluster!")
```

After writing your script, save and exit the text editor with typing :wq and pushing enter. 

## Step 4: Run the Python Script

To execute the Python script you've created, use the following command:

```python my_script.py```

Replace my_script.py with the name of your actual Python script file.

Your Python script will now execute in the Borah cluster environment.

## Conclusion

By following the above steps, you've successfully run a Python script on the Borah cluster. For longer or resource-intensive scripts, you may need to submit your job to the cluster's job scheduling system instead of running it in a development session.

Remember to check the Borah cluster documentation for specific details on job submission, as it might have particular commands or scripts for job management.
