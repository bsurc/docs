# Interactive Sessions

!!! warning

    Please **DO NOT** run code on the login node!
    The login node is a shared resource.
    Resource-intensive processes on the login node degrade performance for everyone, so we run a service that will kill processes if they use too much memory or CPU.


If you need an environment to test code or job submissions, we provide the aliases `dev-session` and `gpu-session`.
These commands will put you into a 4-hour long session on a CPU (`dev-session`) or GPU (`gpu-session`) node.
While in a session, you can freely run jobs directly from the command line (without using Slurm) in order to test and optimize them.

!!! info

    If you are waiting in the queue for an interactive session, please consider
    using [ondemand.boisestate.edu](https://ondemand.boisestate.edu){:target="_blank"}
    as an alternative to an interactive session.
    [More info about OnDemand](open_ondemand.md)
