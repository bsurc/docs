# Open OnDemand

Open OnDemand is a web portal that provides a graphical user interface (GUI) to a supercomputer cluster.
This open-source project is developed and maintained by the Ohio Supercomputer Center (OSC); you can learn more at  [https://openondemand.org/](https://openondemand.org/).
You can access the Open OnDemand portal for Borah at [https://borah-ondemand.boisestate.edu](https://borah-ondemand.boisestate.edu).
(You'll need to be on VPN and log in with your Borah username and password.)

![borah-ondemand login screen](images/ood-login.png "Borah OnDemand login screen")

## The Dashboard

When you first login you'll see the OnDemand Dashboard:
![Borah OnDemand dashboard](images/ood-dashboard.png "Borah OnDemand dashboard")
The services available can be accessed through the tabs at the top of the page.

## File Explorer

![Borah OnDemand dashboard with Files tab highlighted](images/ood-dash-files.png "Borah OnDemand dashboard with Files tab highlighted")

The file explorer tab provides a graphical explorer where you can upload, download, move, copy, delete, and create files and directories. 
There is even a graphical text editor to modify files:
![The file dropdown to access the text editor](images/ood-file-edit.png "The file dropdown to access the text editor")

## Shell Access

Through the "Clusters" tab you can access a terminal (shell) on Borah's login node:
![Borah OnDemand dashboard with Clusters tab highlighted](images/ood-dash-shell.png "Borah OnDemand dashboard with Clusters tab highlighted")
This allows access to Borah without needing to download an ssh client or terminal emulator. 

## Interactive Apps

Perhaps the most useful service on Borah OnDemand are the interactive apps, shown here:
![Borah OnDemand dashboard with Interactive Apps tab highlighted](images/ood-dash-apps.png "Borah OnDemand dashboard with Interactive Apps tab highlighted")

!!! info "Note"

    You may see additional apps if you are an authorized user of proprietary licensed software.

After selecting an interactive app, you will be taken to the "My Interactive Sessions" page.
This page will display cards for each current session with links to open the app in a new tab.
Cards for expired or failed sessions will also be shown.
You can also get to the "My Interactive Sessions" page by clicking the two pages icon to the right of the "Interactive Apps" tab on the top of the screen:
![Borah OnDemand showing the My Interactive Sessions page with the icon highlighted](images/ood-sessions.png "Borah OnDemand showing the My Interactive Sessions page with the icon highlighted")

### Desktop

### Jupyter Notebook

[python conda environment](conda.md#using-a-conda-environment-with-open-ondemand)

[Julia environment](julia.md)
