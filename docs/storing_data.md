# Storing Data

There are different storage spaces available on the campus clusters each with
their own purpose.

## Home
Your home directory is where you’re placed upon logging in.
Home directories are not visible to other users and are intended for personal
storage, not for collaborative storage.
Home directories are backed up each night, so we can recover files from your
home if they are deleted accidentally.
The home space for each user on Borah is located at `/bsuhome/(Borah username)`.
**Home directories are limited to 75 GB.** If you hit this limit, you will
recieve an email notification letting you know you have 4 weeks to get below
the limit before your home directory is locked and you will no longer be able
to write to it. There is also a hard limit at 100 GB which will immediately
prevent you from writing to your home directory.

## Scratch
Scratch space, conversely, should be the target of all job output or
input/output heavy processes when using the cluster.
While scratch space can accommodate much larger data sets, it is meant for
short-term storage and we ask that you watch utilization.
Scratch space is not backed up and is subject to clean-up if it gets close
to capacity.
If the scratch space approaches its useful capacity, the automated process will start removing files that have not been accessed for 4 weeks.
If the system exceeds its useful capacity, there is risk of failure.
The scratch space for each user on Borah is located at `/bsuscratch/(Borah username)`.
There’s also a symbolic link (a file that represents a “shortcut” to another spot on the file system) to scratch space placed in your home directory, so scratch can be accessed by running `cd scratch` from your home directory.

## Shared project space
Shared project space is available upon request. Like scratch, the shared space
is not backed up and is subject to clean-up if the file system nears its useful
capacity. As such, the shared project space is intended for active
collaboration, not long term storage or archival. To request a shared directory,
please email
[researchcomputing@boisestate.edu](mailto:researchcomputing@boisestate.edu)
with the following information:

- BSU email address of the project PI
- Expected project end date
- Amount of space in GB or TB
- Plan for long term data storage (if needed) once the project is over

