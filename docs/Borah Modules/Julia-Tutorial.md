# Julia Tutorial

This tutorial will guide you through the process of using Julia, a high-level, high-performance programming language, on Borah.

## Step 1: Log into the Borah Cluster

First, you need to access the Borah cluster. Use SSH (Secure Shell) to connect to the cluster. You'll need your username and the cluster's address for this. 

```
ssh yourusername@borah-login.boisestate.edu
```
Replace `yourusername` with your actual username. 

## Step 2: Load the Julia Module

Borah uses a system called "modules" to manage software. To use Julia, you need to load its module. 

```bash
module load julia
```

## Step 3: Confirm Julia Module is Loaded

You can see a list of currently loaded modules with the `module list` command. 

```bash
module list
```
Check that `Julia` is in the list of loaded modules. 

# Step 4: Create a test file

```vim test.jl```

```julia
# Function to calculate the sum of two numbers
function sum_numbers(a, b)
    return a + b
end

# Main program
println("Welcome to the Sum Calculator!")
println("Enter the first number:")
number1 = parse(Float64, readline())
println("Enter the second number:")
number2 = parse(Float64, readline())

# Calculate the sum and display the result
result = sum_numbers(number1, number2)
println("The sum of $number1 and $number2 is: $result")
```

# Step 5: Run the test using Julia
```bash
julia test.jl
```

# Extra Notes
1. Julia Documentation: The official Julia documentation provides comprehensive guides, tutorials, and reference materials to help you learn and use Julia effectively. It covers various topics, including language syntax, standard library functions, package development, and more. 
    -  [Julia Documentation](https://docs.julialang.org/)

2. Julia By Example: Julia By Example is a collection of example programs that demonstrate the usage of Julia in various domains. It covers topics such as data analysis, machine learning, optimization, and plotting. It can be a great resource to explore practical Julia programming. 
    -  [Julia By Example](https://juliabyexample.helpmanual.io/)

3. Julia Discourse: Julia Discourse is an online community forum where Julia users and developers interact, share knowledge, ask questions, and discuss various Julia-related topics. It's a great place to seek help, share ideas, and learn from the community. 
    -  [Julia Discourse](https://discourse.julialang.org/)

4. JuliaHub: JuliaHub is a platform that hosts interactive Julia notebooks (Jupyter notebooks) where you can experiment, run code, and learn Julia in a browser-based environment. It provides a collection of notebooks covering a wide range of topics. 
    -  [JuliaHub](https://juliahub.com/)

5. Julia Academy: Julia Academy offers online courses and tutorials to help you learn Julia at your own pace. It provides interactive courses, exercises, and guided projects to enhance your Julia skills. Some courses are available for free, while others require a subscription. 
    -  [Julia Academy](https://juliaacademy.com/)
