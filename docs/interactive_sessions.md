# Interactive Sessions

!!! warning

    Please **DO NOT** run code on the login node!
    The login node is a shared resource.
    Resource-intensive processes on the login node degrade performance for everyone, so we run a service that will kill processes if they use too much memory or CPU.


If you need an environment to test code or job submissions, there are three commands available: `dev-session`, `gpu-session`, and `debug-session`.
Running either of the two former commands will put you into a 4-hour long session on a CPU (`dev-session`) or GPU (`gpu-session`) node, while running the latter (`debug-session`) will place you into a half-hour long session on a CPU node.
While in a session, you can freely run jobs directly from the command line (without using Slurm) in order to test and optimize them.

!!! info

    If you are waiting in the queue for an interactive session, please consider using [https://borah-ondemand.boisestate.edu](https://borah-ondemand.boisestate.edu) as an alternative to an interactive session.
    [More info about Borah-OnDemand](open_ondemand.md)
