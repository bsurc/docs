# R Tutorial on Borah Cluster

## Starting Information

R is a programming language and free software environment for statistical computing and graphics supported by the R Foundation for Statistical Computing. R provides a wide variety of statistical (linear and nonlinear modeling, classical statistical tests, time-series analysis, classification, clustering) and graphical techniques, and is highly extensible.

## Step 1: Login into the Borah cluster
```ssh yourusername@borah-login.boisestate.edu```

## Step 2: Run the development session
```dev-session-bsu```

## Step 3: Load the necessary modules to run R
```
module load borah-misc r/4.2.2/gcc/12.1.0 libpng/1.6.41/gcc/12.1.0 cmake/3.25.0/gcc/12.1.0
```

## Step 4: Start the R terminal
You can now start the R terminal by simply typing:
```
R
```

## Step 5: Writing and Running a Simple R Script

Navigate to your desired directory and create a simple R script, which we'll name `sample.R`:

### sample.R
```
print("Hello, Borah!")
mean_value <- mean(c(1,2,3,4,5))
print(paste("The mean value is:", mean_value))
```

To run this script, exit the R terminal (`quit()`) and then use the Rscript command:

```
Rscript sample.R
```

This will display:
```
[1] "Hello, Borah!"
[1] "The mean value is: 3"
```

## Step 6: Installing R Packages (Optional)

While in the R terminal, you can install packages using the `install.packages` command. For instance, to install the `ggplot2` package:

```R
install.packages("ggplot2")
```

## Additional Resources

1. **Official Documentation**: The [R Project official website](https://www.r-project.org/) provides comprehensive documentation, including guides to installation, packages, and general R programming.

2. **Tutorials**: There are numerous R tutorials online catering to all skill levels. [R-bloggers](https://www.r-bloggers.com/) and [RStudio's resources page](https://rstudio.com/resources/) are great places to start.

3. **Community**: The [R community](https://community.rstudio.com/) is vast and active. It's a great place to ask questions and learn from others' experiences.

4. **Workshops and Training**: Check for workshops and training sessions on R at your institution or nearby research centers. Many universities offer courses and workshops on R.
