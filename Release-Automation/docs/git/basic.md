---
description:
  Git is the open source distributed version control system that facilitates
  GitHub activities on your laptop or desktop. This cheatsheet summarizes
  commonly used Git command line instructions for quick reference.
---

# Basic Git

## Glossary

| Term              | Definition                                               |
| ----------------- | -------------------------------------------------------- |
| Git               | Open source, distributed version-control system          |
| GitHub            | Platform for hosting/collaborating on Git repositories   |
| Commit            | Snapshot of your entire repository indicated by a SHA    |
| Branch            | Lightweight, movable pointer to a commit                 |
| Clone             | Local version of a repository                            |
| Remote            | Common repository on GitHub that all team members use    |
| Fork              | Copy of a repository on GitHub owned by a different user |
| Pull Request (PR) | Place to discuss and make changes between branches       |
| `HEAD`            | The pointer referenced by your current working directory |

## Installation

### GitHub Desktop

[desktop.github.com](https://desktop.github.com)

### Git for All Platforms

[git-scm.com](https://git-scm.com)

## Configuration

Configure user information for all local repositories:

### Sets the name you want attached to your commit transactions

```bash
git config --global user.name "<name>"
```

### Sets the email you want attached to your commit transactions

```bash
git config --global user.email "<email address>"
```

### Enables helpful colorization of command line output

```bash
git config --global color.ui auto
```

## Branches

Branches are an important part of working with Git. Any commits you make will be
made on the branch you currently haved "checked out." Use `git status` to see
which branch that is.

### Create a new branch

```bash
git branch <branch-name>
```

### Switch to the specified branch and update the working directory

```bash
git checkout <branch-name>
```

### Combine the specified branch's history into the current branch

```bash
git merge <branch-name>
```

This is usually done in pull requests, but is an important Git operation.

### Delete the specified branch

```bash
git branch -d <branch-name>
```

## Repository Creation

A new repository can either be created locally, or an existing repository can be
cloned. When a repository is initialized locally, you must push it to GitHub
afterwards.

### Initialize the current directory as a Git repository

```bash
git init
```

The `git init` command turns the current directory into a new Git repository.

### Configure the repository at `<url>` as a Git remote

```bash
git remote add origin <url>
```

The `<url>` value points to a repository on GitHub.

### Clone (download) a repository that already exists on GitHub

```bash
git clone <url>
```

This includes all of the files, branches, and commits

### The `.gitignore` File

Sometimes it may be a good idea to exclude files from being tracked with Git.
This is typically done in a special file named `.gitignore`. You can find
helpful templates for `.gitignore` files at
[`github/gitignore`](https://github.com/github/gitignore).

## Synchronize Changes

Synchronize your local repository with the remote repository on GitHub.com:

### Downloads all history from the remote tracking branches

```bash
git fetch
```

This command does not update the current working directory.

### Combines remote tracking branches into current local branch

```bash
git merge
```

### Upload all local branch commits to GitHub

```bash
git push
```

### Updates your current local working branch

```bash
git pull
```

This command is a combination of `git fetch` and `git merge`.

## Make changes

Browse and inspect the evolution of project files:

### List commit history for the current branch

```bash
git log
```

### List commit history for a single file (beyond renames)

```bash
git log --follow <file>
```

### Shows content differences between two branches

```bash
git diff <first-branch>...<second-branch>
```

### Output metadata and content changes of the specified commit

```bash
git show <commit>
```

### Snapshots the file in preparation for versioning

```bash
git add <file>
```

### Record file snapshots permanently in version history

```bash
git commit -m "<descriptive message>"
```

## Redo commits

Erase mistakes and craft replacement history:

### Undoes all commits after `<commit>`

```bash
git reset <commit>
```

### Discard all history and changes back to the specified `<commit>`

```bash
git reset --hard <commit>
```

> **WARNING!**
>
> Changing history can have nasty side effects. If you need to change commits
> that exist on GitHub (the remote), proceed with caution. If you need help,
> reach out at [github.community](https://github.community) or contact support.
