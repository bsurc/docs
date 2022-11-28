# Transferring Files

## MobaXTerm FTP Browser
On Windows, if MobaXTerm is being used to connect the cluster, the file browser built into it can be used to quickly upload or download files. 
Once logged into the cluster, a view will appear on the left hand side of the screen showing a list of files. 
To download, click a file to select it and then click the blue download arrow at the top of where the files are displayed. 
Multiple files can be downloaded at once by holding the control key and selecting multiple files and then pressing the same download button. 
To upload files, click the green upload arrow at the top of where files are displayed (next to the download arrow) and select the files to be uploaded.
**Be aware that this process is destructive and will overwrite anything on the destination machine with the same name as the uploaded file.**

This method should not be used for file transfers in excess of 50 GB – please see “Globus” section below if this is the case.

## Secure Copy Protocol (scp)
[scp](https://linux.die.net/man/1/scp) is an alternative to the MobaXTerm method that can be used if on Mac or Linux. 
It’s a built in command with the syntax:
```bash
scp <source file> <dest file>
```
where the source and destination are located on different servers. 
For example, to download a file from R2 to your current directory on your local machine, you would use:

`scp (R2 username)@r2-login.boisestate.edu:(name of file)`

To upload you would use:

`scp (name of local file) (R2 username)@r2-login.boisestate.edu:(destination file)`

For Borah, replace the server with:

`(Borah username)@borah-login.boisestate.edu`

**Be aware that this process is destructive and will overwrite anything on the destination machine with the same name as the uploaded file.** 
This method should not be used for file transfers in excess of 50 GB – please see “Globus” section below if this is the case.

## Globus
Globus is recommended for large (> 50GB), routine data transfers. 
Unlike copy, SCP, SFTP, etc. Globus transfers will recover from errors caused by network/host interruptions, so it’s a “fire and forget” service.

To get started using Globus, use the instructions below to login. 
Use the Globus File Manager to begin using the transfer services between existing endpoints.

You can also download the client software called Globus Connect Personal to create a personal endpoint for sharing data that’s on your computer or downloading data directly to your computer. 
When you do this, you will give your endpoint a name and search for that endpoint in the Globus File Manager.

While we give some basic instructions below, please email researchcomputing@boisestate.edu if you want to use Globus to share data on your computer with an outside collaborator.

### Log in to Globus Using Your Boise State Credentials
1. Go to [www.globus.org](www.globus.org)

2. Click Login (upper right)

3. Find Boise State University in the organization dropdown list

4. Enter your Boise State username and password in the standard Boise State login screen.

5. Once logged in, you’ll be directed to the Globus “File Manager” screen.

## Using File Manager to Transfer Data between Existing Endpoints
The Globus File Manager interface is similar in look to something like Filezilla. 
 You select two endpoints, highlight files/directories, and copy them. 
 When in the File Manager screen, you can search for the Boise State Primary and Secondary endpoints listed below and transfer/copy files between them.

If your data is on an OIT Research Share, please contact Research Computing so we can help make it available on the Globus-VM endpoint for transfer to other existing endpoints. 
Or, if your data is on your desktop, see instructions “C. Installing a Personal Endpoint” or contact Research Computing, and we can help.

## Primary Boise State Endpoints
- Globus-VM (connected to Boise State’s network)
- Borah-DTN (connected to Borah at C3 in Idaho Falls)
- DTN-R2 (connected to R2 at CCP in downtown Boise)

## Using Globus Personal Endpoint to Transfer Data from Your Desktop to Existing Endpoints
1. Install Globus Personal Connect by going to: [https://www.globus.org/globus-connect-personal](https://www.globus.org/globus-connect-personal)
    - Windows: [https://docs.globus.org/how-to/globus-connect-personal-windows](https://docs.globus.org/how-to/globus-connect-personal-windows)
    - macOS:   [https://docs.globus.org/how-to/globus-connect-personal-mac](https://docs.globus.org/how-to/globus-connect-personal-mac)
    - Linux:   [https://docs.globus.org/how-to/globus-connect-personal-linux](https://docs.globus.org/how-to/globus-connect-personal-linux)
2. Log in using Boise State username and password. **NOTE:** Do not mark computer as having sensitive personal files.
3. Follow the instructions of step 2, except change the Research Share collection to the new personal collection that was created when setting up Globus Personal Connect.

For more information, visit Globus’s documentation contents page [https://docs.globus.org/how-to/](https://docs.globus.org/how-to/) or email researchcomputing@boisestate.edu.

## Rclone
Coming soon.
