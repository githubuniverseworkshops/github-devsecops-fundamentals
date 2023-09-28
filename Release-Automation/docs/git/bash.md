---
description:
  Bash is the GNU Project's shell. Bash is the Bourne Again SHell. Bash is an
  sh-compatible shell that incorporates useful features from the Korn shell
  (`ksh`) and C shell (`csh`). It is intended to conform to the IEEE POSIX
  P1003.2/ISO 9945.2 Shell and Tools standard. It offers functional improvements
  over `sh` for both programming and interactive use. In addition, most `sh`
  scripts can be run by Bash without modification.
---

# Bash Cheatsheet

## Installation

Bash is typically a native application on Linux/Unix based machines; however, if
installation is necessary you can find links to downloads below.

### Bash for Windows

Because bash isn't native to Windows, an application like
[Cygwin](https://www.cygwin.com) would be necessary to gain the same features
readily available in linux/macOS.

### Bash for macOS and Linux

Bash is natively installed on Linux/Unix based machines.

## Configuration

Configure bash aliases:

### Set the `ls` command to `list`, colorize, and provide file size suffixes

```bash
alias ls='ls -lGh'
```

## Working with Directories

Navigate, create, and delete directory folders and files:

### Display path of current working directory

```bash
pwd
```

#### Change working directory to `<directory>`

```bash
cd <directory>
```

#### Navigate to the parent directory

```bash
cd ..
```

#### List directory contents

```bash
ls
```

#### List detailed directory contents, including hidden files

```bash
ls -la
```

#### Create a new directory named `<directory>`

```bash
mkdir <directory>
```

## Handling Output

Control the flow of data from a file:

### Output the contents of `<file>`

```bash
cat <file>
```

### Output the contents of `<file>` (supports pagination)

```bash
less <file>
```

### Output the first 10 lines of `<file>`

```bash
head <file>
```

### Direct the output of `<cmd>` into `<file>`

```bash
<cmd> > <file>
```

### Append the output of `<cmd>` to `<file>`

```bash
<cmd> >> <file>
```

### Direct the output of `<cmd1>` to the input of `<cmd2>`

```bash
<cmd1> | <cmd2>
```

### Clear the terminal window

```bash
clear
```

## Working with files

Moving, renaming, creating and deleting files:

### Delete `<file>`

```bash
rm <file>
```

### Delete `<directory>`

```bash
rm -r <directory>
```

### Force-delete `<file>` (add `-r` to force-delete a directory)

```bash
rm -f <file>
```

### Rename `<file-old>` to `<file-new>`

```bash
mv <file-old> <file-new>
```

### Copy `<file>` to `<directory>` (possibly overwriting an existing file)

```bash
cp <file> <directory>
```

### Copy `<src-directory>` and it's contents

```bash
cp -r <src-directory> <dest-directory>
```

### Update file access and modification time

```bash
touch <file>
```

## File and folder permissions

Change read, write, and execute permissions on files and folders:

The octal representation of permissions are grouped by User (`u`), Group (`g`),
and Others (`o`). Values are represented as the sum of read (`4`), write (`2`)
and execute (`1`) permissions. For example, `755` is:

| Group  | Permission | Description                              |
| ------ | ---------- | ---------------------------------------- |
| Owner  | `7`        | read (`4`) + write (`2`) + execute (`1`) |
| Group  | `5`        | read (`4`) + execute (`1`)               |
| Others | `5`        | read (`4`) + execute (`1`)               |

### Change permissions of `<file>` to 755

```bash
chmod 755 <file>
```

### Change permissions of `<directory>` (and its contents) to `600`

```bash
chmod -R 600
```

### Change ownership

```bash
chown <user>:<group> <file>
```

## Networking and Internet

### Ping the `<host>` and display time (among other things)

```bash
ping <host>
```

### Downloads `<url>` to current working directory

```bash
curl -O <url>
```

### Starts an SSH connection to `<host>` as `<user>`

```bash
ssh <user>@<host>
```

### Adds your SSH key to the host file

```bash
ssh-copy-id <user>@<host>
```

### Securely copy `<file>` to a remote `<host>` at the location `/path/to/file`

```bash
scp <file> <user>@<host>:/path/to/file
```

### Downloads `<file>` to your current working directory

```bash
wget <file>
```

## System Tasks

Find important information related to your currently running system:

### List currently running processes

```bash
ps ax
```

### Displays live information on your currently running processes

```bash
top
```

### Ends the process using the provided process ID `<pid>`

```bash
kill <pid>
```

### Ends all processes with the given `<processname>`

```bash
killall `<processname>`
```

### Shows disk usage

```bash
df
```

### Shows disk usage of all files and folders in `<filename>`

```bash
du <filename>
```
