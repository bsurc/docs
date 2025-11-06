# Apptainer

[Apptainer](https://apptainer.org){:target="_blank"} is a containerization tool specifically
designed for HPC systems.  The HPC administrators can build a container if it is
the right fit for your software stack.  This is typically the case if your
software has complex dependencies, or requires very specific versions of tools
or dependencies.

Currently, users cannot build containers.

## Usage

Apptainer containers can be used in two main ways:

- interactively, using `apptainer shell`
- in batch mode using `apptainer exec`

The `shell` mode is used for testing and interacting with the container software
interactively, for example to enter into a `bash` shell in a container that has
`bash`:

    apptainer shell mycontainer.sif

will drop you into a shell in the container environment:

    Apptainer>

The batch mode, usually used to run scripts or jobs, is similar to the shell
command, but the trailing arguments are the command that you'd like to run:

    apptainer exec mycontainer.sif ./myscript.sh

## Accessing Scratch

In order to read/write data to your scratch directory, you _must_ bind the path
to the container via the command line.  This is done by providing the `-B`
argument to Apptainer:

    apptainer exec -B /bsuscratch mycontainer.sif ./myscript.sh

## Further Reading

The [Apptainer Documentation](https://apptainer.org/docs/user/latest/){:target="_blank"} has more
information for users, and please email
[us](mailto:researchcomputing@boisestate.edu) with any questions.
