# Transferring Files

## **MobaXTerm FTP Browser**
On Windows, if MobaXTerm is being used to connect the cluster, the file browser built into it can be used to quickly upload or download files. Once logged into the cluster, a view will appear on the left hand side of the screen showing a list of files. To download, click a file to select it and then click the blue download arrow at the top of where the files are displayed. Multiple files can be downloaded at once by holding the control key and selecting multiple files and then pressing the same download button. To upload files, click the green upload arrow at the top of where files are displayed (next to the download arrow) and select the files to be uploaded.
**Be aware that this process is destructive and will overwrite anything on the destination machine with the same name as the uploaded file.**

This method should not be used for file transfers in excess of 50 GB – please see “Globus” section below if this is the case.

## **scp**
[scp](https://linux.die.net/man/1/scp) is an alternative to the MobaXTerm method that can be used if on Mac or Linux. It’s a built in command with the syntax:
`scp <source file> <dest file>`

where the source and destination are located on different servers. For example, to download a file from R2 to your current directory on your local machine, you would use:

`scp (R2 username)@r2-login.boisestate.edu:(name of file)`

To upload you would use:

`scp (name of local file) (R2 username)@r2-login.boisestate.edu:(destination file)`

For Borah, replace the server with:

`(Borah username)@borah-login.boisestate.edu`

**Be aware that this process is destructive and will overwrite anything on the destination machine with the same name as the uploaded file.** This method should not be used for file transfers in excess of 50 GB – please see “Globus” section below if this is the case.

## **Globus**
Globus is recommended for large (> 50GB), routine data transfers. Unlike copy, SCP, SFTP, etc. Globus transfers will recover from errors caused by network/host interruptions, so it’s a “fire and forget” service.

To get started using Globus, use the instructions below to login. Use the Globus File Manager to begin using the transfer services between existing endpoints.

You can also download the client software called Globus Connect Personal to create a personal endpoint for sharing data that’s on your computer or downloading data directly to your computer. When you do this, you will give your endpoint a name and search for that endpoint in the Globus File Manager.

While we give some basic instructions below, please email researchcomputing@boisestate.edu if you want to use Globus to share data on your computer with an outside collaborator.

### **Log in to Globus Using Your Boise State Credentials**
**1.** Go to [www.globus.org](www.globus.org)

**2.** Click Login (upper right)

**3.** Find Boise State University in the organization dropdown list

**4.** Enter your Boise State username and password in the standard Boise State login screen.

**5.** Once logged in, you’ll be directed to the Globus “File Manager” screen.

## **Using File Manager to Transfer Data between Existing Endpoints**
The Globus File Manager interface is similar in look to something like Filezilla.  You select two endpoints, highlight files/directories, and copy them.  When in the File Manager screen, you can search for the Boise State Primary and Secondary endpoints listed below and transfer/copy files between them.

If your data is on an OIT Research Share, please contact Research Computing so we can help make it available on the Globus-VM endpoint for transfer to other existing endpoints. Or, if your data is on your desktop, see instructions “C. Installing a Personal Endpoint” or contact Research Computing, and we can help.

## **Primary Boise State Endpoints**
- Globus-VM (connected to Boise State’s network)
- Borah-DTN (connected to Borah at C3 in Idaho Falls)
- DTN-R2 (connected to R2 at CCP in downtown Boise)

## **Using Globus Personal Endpoint to Transfer Data from Your Desktop to Existing Endpoints**
1. Install Globus Personal Connect by going to: [https://www.globus.org/globus-connect-personal](https://www.globus.org/globus-connect-personal)
    - Windows: [https://docs.globus.org/how-to/globus-connect-personal-windows](https://docs.globus.org/how-to/globus-connect-personal-windows)
    - macOS:   [https://docs.globus.org/how-to/globus-connect-personal-mac](https://docs.globus.org/how-to/globus-connect-personal-mac)
    - Linux:   [https://docs.globus.org/how-to/globus-connect-personal-linux](https://docs.globus.org/how-to/globus-connect-personal-linux)
2. Log in using Boise State username and password. **NOTE:** Do not mark computer as having sensitive personal files
3. Follow the instructions of step B, except change the Research Share collection to the new personal collection that was created when setting up Globus Personal Connect.

For more information, visit Globus’s documentation contents page [https://docs.globus.org/how-to/](https://docs.globus.org/how-to/) or email researchcomputing@boisestate.edu.

## **Rclone**

### [R2 Documentation](https://rclone.org/docs/)

Below is an index of all commands in rclone. Run **rclone command --help** to see the help for that command.

| Command                                                                                   | Description                                                             |
| :---                                                                                      | :---                                                                    |
| [rclone](https://rclone.org/commands/rclone/)                                             | Show help for rclone commands, flags and backends.                      |
| [rcloneabout](https://rclone.org/commands/rclone_about/)                                  | Get quota information from the remote.                                  |
| [rclone authorize](https://rclone.org/commands/rclone_authorize/)                         | Remote authorization.                                                   |
| [rclone backend](https://rclone.org/commands/rclone_backend/)                             | Run a backend-specific command.                                         | 
| [rclone bisync](https://rclone.org/commands/rclone_bisync/)                               | Perform bidirectional synchronization between two paths.                |
| [rclone cat](https://rclone.org/commands/rclone_cat/)                                     | Concatenates any files and sends them to stdout.                        | 
| [rclone check](https://rclone.org/commands/rclone_check/)                                 | Checks the files in the source and destination match.                   |
| [rclone checksum](https://rclone.org/commands/rclone_checksum/)                           | Checks the files in the source against a SUM file.                      |
| [rclone cleanup](https://rclone.org/commands/rclone_cleanup/)                             | Clean up the remote if possible.                                        |
| [rclone completion](https://rclone.org/commands/rclone_completion/)                       | Generate the autocompletion script for the specified shell              | 
| [rclone completion bash](https://rclone.org/commands/rclone_completion/)                  | Generate the autocompletion script for bash                             |
| [rclone completion fish](https://rclone.org/commands/rclone_completion_fish/)             | Generate the autocompletion script for fish                             |
| [rclone completion powershell](https://rclone.org/commands/rclone_completion_powershell/) | Generate the autocompletion script for powershell                       |
| [rclone completion zsh](https://rclone.org/commands/rclone_completion_zsh/)               | Generate the autocompletion script for zsh                              |
| [rclone config](https://rclone.org/commands/rclone_config/)                               | Enter an interactive configuration session.                             |
| [rclone config create](https://rclone.org/commands/rclone_config_create/)                 | Create a new remote with name, type and options.                        |
| [rclone config disconnect](https://rclone.org/commands/rclone_config_disconnect/)         | Disconnects user from remote                                            |
| [rclone config dump](https://rclone.org/commands/rclone_config_dump/)                     | Dump the config file as JSON.                                           |
| [rclone config edit](https://rclone.org/commands/rclone_config_edit/)                     | Enter an interactive configuration session.                             |
| [rclone config file](https://rclone.org/commands/rclone_config_file/)                     | Show path of configuration file in use.                                 |
| [rclone config password](https://rclone.org/commands/rclone_config_password/)             | Update password in an existing remote.                                  |
| [rclone config paths](https://rclone.org/commands/rclone_config_paths/)                   | Show paths used for configuration, cache, temp etc.                     |
| [rclone config providers](https://rclone.org/commands/rclone_config_providers/)           | List in JSON format all the providers and options.                      |
| [rclone config reconnect](https://rclone.org/commands/rclone_config_reconnect/)           | Re-authenticates user with remote.                                      |
| [rclone config show](https://rclone.org/commands/rclone_config_show/)                     | Print (decrypted) config file, or the config for a single remote.       |
| [rclone config touch](https://rclone.org/commands/rclone_config_touch/)                   | Ensure configuration file exists.                                       |
| [rclone config update](https://rclone.org/commands/rclone_config_update/)                 | Update options in an existing remote.                                   |
| [rclone config userinfo](https://rclone.org/commands/rclone_config_userinfo/)             | Prints info about logged in user of remote.                             |
| [rclone copy](https://rclone.org/commands/rclone_copy/)                                   | Copy files from source to dest, skipping identical files.               |
| [rclone copyto](https://rclone.org/commands/rclone_copyto/)                               | Copy files from source to dest, skipping identical files.               |
| [rclone copyurl](https://rclone.org/commands/rclone_copyurl/)                             | Copy url content to dest.                                               |
| [rclone cryptcheck](https://rclone.org/commands/rclone_cryptcheck/)                       | Cryptcheck checks the integrity of a crypted remote.                    |
| [rclone cryptdecode](https://rclone.org/commands/rclone_cryptdecode/)                     | Cryptdecode returns unencrypted file names.                             |
| [rclone dedupe](https://rclone.org/commands/rclone_dedupe/)                               | Interactively find duplicate filenames and delete/rename them.          |
| [rclone delete](https://rclone.org/commands/rclone_delete/)                               | Remove the files in path.                                               |
| [rclone deletefile](https://rclone.org/commands/rclone_deletefile/)                       | Remove a single file from remote.                                       |
| [rclone genautocomplete](https://rclone.org/commands/rclone_genautocomplete/)             | Output completion script for a given shell.                             |
| [rclone genautocomplete bash](https://rclone.org/commands/rclone_genautocomplete_bash/)   | Output bash completion script for rclone.                               |
| [rclone genautocomplete fish](https://rclone.org/commands/rclone_genautocomplete_fish/)   | Output fish completion script for rclone.                               |
| [rclone genautocomplete zsh](https://rclone.org/commands/rclone_genautocomplete_zsh/)     | Output zsh completion script for rclone.                                |
| [rclone gendocs](https://rclone.org/commands/rclone_gendocs/)                             | Output markdown docs for rclone to the directory supplied.              |
| [rclone hashsum](https://rclone.org/commands/rclone_hashsum/)                             | Produces a hashsum file for all the objects in the path.                |
| [rclone link](https://rclone.org/commands/rclone_link/)                                   | Generate public link to file/folder.                                    |
| [rclone listremotes](https://rclone.org/commands/rclone_listremotes/)                     | List all the remotes in the config file.                                |
| [rclone ls](https://rclone.org/commands/rclone_ls/)                                       | List the objects in the path with size and path.                        |
| [rclone lsd](https://rclone.org/commands/rclone_lsd/)                                     | List all directories/containers/buckets in the path.                    |
| [rclone lsf](https://rclone.org/commands/rclone_lsf/)                                     | List directories and objects in remote:path formatted for parsing.      |
| [rclone lsjson](https://rclone.org/commands/rclone_lsjson/)                               | List directories and objects in the path in JSON format.                |
| [rclone lsl](https://rclone.org/commands/rclone_lsl/)                                     | List the objects in path with modification time, size and path.         |
| [rclone md5sum](https://rclone.org/commands/rclone_md5sum/)                               | Produces an md5sum file for all the objects in the path.                |
| [rclone mkdir](https://rclone.org/commands/rclone_mkdir/)                                 | Make the path if it doesn't already exist.                              |
| [rclone mount](https://rclone.org/commands/rclone_mount/)                                 | Mount the remote as file system on a mountpoint.                        |
| [rclone move](https://rclone.org/commands/rclone_move/)                                   | Move files from source to dest.                                         |
| [rclone moveto](https://rclone.org/commands/rclone_moveto/)                               | Move file or directory from source to dest.                             |
| [rclone ncdu](https://rclone.org/commands/rclone_ncdu/)                                   | Explore a remote with a text based user interface.                      |
| [rclone obscure](https://rclone.org/commands/rclone_obscure/)                             | Obscure password for use in the rclone config file.                     |
| [rclone purge](https://rclone.org/commands/rclone_purge/)                                 | Remove the path and all of its contents.                                |
| [rclone rc](https://rclone.org/commands/rclone_rc/)                                       | Run a command against a running rclone.                                 |
| [rclone rcat](https://rclone.org/commands/rclone_rcat/)                                   | Copies standard input to file on remote.                                |
| [rclone rcd](https://rclone.org/commands/rclone_rcd/)                                     | Run rclone listening to remote control commands only.                   |
| [rclone rmdir](https://rclone.org/commands/rclone_rmdir/)                                 | Remove the empty directory at path.                                     |
| [rclone rmdirs](https://rclone.org/commands/rclone_rmdirs/)                               | Remove empty directories under the path.                                |
| [rclone selfupdate](https://rclone.org/commands/rclone_selfupdate/)                       | Update the rclone binary.                                               |
| [rclone serve](https://rclone.org/commands/rclone_serve/)                                 | Serve a remote over a protocol.                                         |
| [rclone serve dlna](https://rclone.org/commands/rclone_serve_dlna/)                       | Serve remote:path over DLNA                                             | 
| [rclone serve docker](https://rclone.org/commands/rclone_serve_docker/)                   | Serve any remote on docker's volume plugin API.                         |
| [rclone serve ftp](https://rclone.org/commands/rclone_serve_ftp/)                         | Serve remote:path over FTP.                                             |
| [rclone serve http](https://rclone.org/commands/rclone_serve_http/)                       | Serve the remote over HTTP.                                             |
| [rclone serve restic](https://rclone.org/commands/rclone_serve_restic/)                   | Serve the remote for restic's REST API.                                 |
| [rclone serve sftp](https://rclone.org/commands/rclone_serve_sftp/)                       | Serve the remote over SFTP.                                             |
| [rclone serve webdav](https://rclone.org/commands/rclone_serve_webdav/)                   | Serve remote:path over WebDAV.                                          |
| [rclone settier](https://rclone.org/commands/rclone_settier/)                             | Changes storage class/tier of objects in remote.                        |
| [rclone sha1sum](https://rclone.org/commands/rclone_sha1sum/)                             | Produces an sha1sum file for all the objects in the path.               |
| [rclone size](https://rclone.org/commands/rclone_size/)                                   | Prints the total size and number of objects in remote:path.             |
| [rclone sync](https://rclone.org/commands/rclone_sync/)                                   | Make source and dest identical, modifying destination only.             |
| [rclone test](https://rclone.org/commands/rclone_test/)                                   | Run a test command                                                      |
| [rclone test changenotifiy](https://rclone.org/commands/rclone_test_changenotify/)        | Log any change notify requests for the remote passed in.                |
| [rclone test histogram](https://rclone.org/commands/rclone_test_histogram/)               | Makes a histogram of file name characters.                              |
| [rclone test info](https://rclone.org/commands/rclone_test_info/)                         | Discovers file name or other limitations for paths.                     |
| [rclone test makefile](https://rclone.org/commands/rclone_test_makefile/)                 | Make files with random contents of the size given                       |
| [rclone test makefiles](https://rclone.org/commands/rclone_test_makefiles/)               | Make a random file hierarchy in a directory                             |
| [rclone test memory](https://rclone.org/commands/rclone_test_memory/)                     | Load all the objects at remote:path into memory and report memory stats.|
| [rclone touch](https://rclone.org/commands/rclone_touch/)                                 | Create new file or change file modification time.                       |
| [rclone tree](https://rclone.org/commands/rclone_tree/)                                   | List the contents of the remote in a tree like fashion.                 |
| [rclone version](https://rclone.org/commands/rclone_version/)                             | Show the version number.                                                |

## Contact Info:

| RESEARCH COMPUTING SUPPORT| researchcomputing@boisestate.edu| (208) 426-3904| Riverfront Hall, Suite 319, 1987 W Cesar Chavez Ln, Boise, ID 83725 |
| :---                      | :---                            | :---          | :---                                                                | 
