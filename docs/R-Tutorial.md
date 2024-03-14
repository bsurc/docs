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

## Prerequisites for R
1. **Basic Understanding of Statistics and Data Analysis:**
   - Familiarity with statistical concepts and data analysis techniques.
2. **Fundamentals of Programming:**
   - Basic knowledge of programming concepts, ideally in another language like Python or Java.
3. **Experience with Command-Line Interface:**
   - Comfort with using the command line, particularly in Linux/Unix environments.
4. **Understanding of Data Structures:**
   - Knowledge of basic data structures like vectors, lists, and data frames in the context of data analysis.

## Further Learning and Resources for R
1. **R Tutorials and Courses:**
   - Explore online courses on platforms like [Coursera](https://www.coursera.org/) and [DataCamp](https://www.datacamp.com/).
2. **R Documentation and Help:**
   - Refer to the [official R documentation](https://www.r-project.org/other-docs.html) & [W3Schools](https://www.w3schools.com/r/default.asp) for detailed information on R functions and packages.
3. **R Community Forums:**
   - Participate in forums like [Stack Overflow](https://stackoverflow.com/questions/tagged/r) and the [RStudio Community](https://community.rstudio.com/) for discussions and problem-solving.
4. **R Programming Books:**
   - Read books like "R for Data Science" by Hadley Wickham and "The Art of R Programming" by Norman Matloff.
5. **YouTube Tutorials:**
   - Watch tutorial videos on YouTube channels dedicated to R programming.
6. **R Meetups and Workshops:**
   - Join local R user groups or attend workshops to learn from and network with other R users
