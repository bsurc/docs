# Logging In
When on the Boise State campus, the campus clusters can be accessed from most wired computers or from the secured Eduroam Wi-Fi network.
If you are off campus, a VPN connection must be used. The Boise State VPN is a virtual network connection that allows users to be on the
internal network from off campus. More info on it can be found here: 
[<ins>vpn-services</ins>](https://www.boisestate.edu/oit-network/vpn-services/). The VPN is only accessible to current employees and 
student employees of Boise State, so if you need VPN access, please have your faculty advisor/PI contact the help desk to request VPN 
access on your behalf.

After getting your account from Research Computing, follow the process of your respective operating system below to connect. Note that
with any of the methods listed, your password will not be shown as you enter it, so it’s normal to not see any characters being entered
as you type your password.

### Windows:

**1.** Go to [<ins>download.html</ins>](https://mobaxterm.mobatek.net/download.html) and download the “Home” edition of MobaXTerm.
This software is an emulator for a Linux shell that will allow you to utilize a Linux shell on Windows. There’s a tutorial available
for this software on the [<ins>MobaXterm</ins>](https://mobaxterm.mobatek.net/demo.html).

**2.** Install the software.

**3.** Open the software and type <code>ssh -XC (your R2 username)@r2-login.boisestate.edu</code> for R2 or <code>ssh -XC 
(your Borah username)@borah-login.boisestate.edu</code> for Borah. Keep in mind the above note about the VPN/Onyx.

**4.** Enter the password provided to you by Research Computing.

**5.** You will now be connected to the cluster. If it’s your first time connecting, use the passwd command to change your password.

### Mac and Linux

As Mac and Linux both already have terminals built in, the same instructions as above sans the downloading and installing of MobaXTerm
can be used to connect from either of those operating systems.
