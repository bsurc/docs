# Logging In
After getting your account from Research Computing, you will typically use a terminal to connect to the cluster via Secure Shell (ssh). The process for using the terminal varies depending on your operating system:

!!! warning "Important VPN Notice"

    When connecting to the clusters while off campus, using the [Boise State VPN](https://www.boisestate.edu/oit/network/vpn-services/) is required. All active university faculty, staff, and student employees have access to Boise State’s VPN service. Students and affiliates can get access per their instructor's or affiliate sponsor's request. Please reach out to the [Help Desk](https://www.boisestate.edu/oit/assistance/) to request access, or get help using the VPN.

### Windows:

There are many options, but we recommend MobaXTerm for terminal access on Windows. Go to the [MobaXTerm download page](https://mobaxterm.mobatek.net/download.html) and download the “Home” edition of MobaXTerm.
This software is an emulator for a Linux shell that will allow you to utilize a Linux shell on Windows.
There’s a tutorial available on the [MobaXterm demo page](https://mobaxterm.mobatek.net/demo.html).

### Mac and Linux:

Mac and Linux both have built-in terminals, just search "terminal".

### Web Browser or IDE:

Alternatively, you can connect to Borah by using [Open OnDemand](open_ondemand.md) in your web browser. This is the best option for mobile devices, like iPads or Chromebooks.

For using an IDE on Borah, please use the Open OnDemand interactive app: [VS Code-Server](open_ondemand.md#vs-code-server).


## Connecting to the cluster
Once you have installed or located your terminal, you can connect to the cluster as follows:

1. Open the terminal and type `ssh -XC (your Borah username)@borah-login.boisestate.edu` for Borah.

    !!! note "Reminder"

        If you are off campus, you need to be connected to the [VPN](https://www.boisestate.edu/oit-network/vpn-services/) in order to access Borah.

2. Enter the password provided to you by Research Computing.

    !!! info

        Your password will not be shown as you type it, so it’s normal to see an empty prompt even though you are entering characters.

3. You will now be connected to the cluster.
If it’s your first time connecting, use the `passwd` command to change your password.
