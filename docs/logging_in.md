# Logging In
On the Boise State campus, the campus clusters can be accessed from most wired computers or from the secured Eduroam Wi-Fi network.
If you are off campus, a VPN connection must be used. 
The Boise State VPN is a virtual network connection that allows users to access the internal network from off campus. 
More information can be found on the [VPN services page](https://www.boisestate.edu/oit-network/vpn-services/). 
The VPN is only accessible to current employees and student employees of Boise State, so if you need VPN access, please have your faculty advisor/PI contact the help desk to request VPN access on your behalf.

After getting your account from Research Computing, follow the process of your respective operating system below to connect. 
!!! info

    Your password will not be shown as you type it, so it’s normal to see an empty prompt even though you are entering characters.

### Windows:

1. Go to the [MobaXTerm download page](https://mobaxterm.mobatek.net/download.html) and download the “Home” edition of MobaXTerm.
This software is an emulator for a Linux shell that will allow you to utilize a Linux shell on Windows. 
There’s a tutorial available on the [MobaXterm demo page](https://mobaxterm.mobatek.net/demo.html).

2. Install the software.

3. Open the software and type `ssh -XC (your R2 username)@r2-login.boisestate.edu` for R2 or `ssh -XC (your Borah username)@borah-login.boisestate.edu` for Borah. 

    !!! info

        Remember: if you are off campus, you need to be connected to the VPN in order to access R2 and Borah.

4. Enter the password provided to you by Research Computing.

5. You will now be connected to the cluster. 
If it’s your first time connecting, use the `passwd` command to change your password.

### Mac and Linux

As Mac and Linux both have built-in terminals, the same instructions as above (skipping steps 1 and 2) can be used to connect from either of those operating systems.
