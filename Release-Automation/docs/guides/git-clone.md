---
description:
  The `git clone` command is used to create a copy of a specific repository or
  branch within a repository. Git is a distributed version control system.
  Maximize the advantages of a full repository on your own machine by cloning.
---

# `git clone`

```bash
git clone https://github.com/github/training-kit.git
```

## What does `git clone` do?

When you clone a repository, you don't get one file, as you may in other
centralized version control systems. By cloning with Git, you get the entire
repository – all files, all branches, and all commits.

Cloning a repository is typically only done once, at the beginning of your
interaction with a project. Once a repository already exists on GitHub, then you
would clone that repository so you could interact with it locally. Once you have
cloned the repository, you won't need to clone it again to do regular
development.

The ability to work with the entire repository means that all developers can
work more freely. Without being limited by which files you can work on, you can
safely work on your feature branch.

- Use `git push` to share your branch with the remote repository
- Open a pull request to compare the changes with your collaborators
- Test and deploy from your feature branch
- Merge your feature branch into `main`

## How do you use `git clone`?

| Command                                      | Description                                                      |
| -------------------------------------------- | ---------------------------------------------------------------- |
| `git clone <url>`                            | Clone a repository that already exists on GitHub                 |
| `git clone --mirror`                         | Clone a repository, without the ability to edit any of the files |
|                                              | This includes the refs or branches                               |
| `git clone --single-branch`                  | Clone only a single branch                                       |
| `git clone --sparse`                         | Only clone the files present in the root directory               |
|                                              | Helps with performance when cloning large repositories           |
| `git clone --recurse-submodules[=<pathspec]` | Initialize and clone submodules                                  |

You can see all of the many options with `git clone` in the
[git-scm documentation](https://git-scm.com/docs/git-clone).

## Examples of `git clone`

### `git clone <url>`

The most common usage of cloning is to simply clone a repository. This is only
done once, when you begin working on a project.

```bash
git clone [url]
```

### `git clone --single-branch`

By default, `git clone` will create remote tracking branches for all of the
branches currently present in the remote which is being cloned. The only local
branch that is created is the default branch.

If you would like to _only_ get a remote tracking branch for one specific
branch, or clone one branch which _isn't_ the default branch. Both of these
things happen when you use `--single-branch` with `git clone`.

This will create a clone that only has commits included in the current line of
history. This means no other branches will be cloned. You can specify a certain
branch to clone. By default, the default branch, usually `main`, will be
selected.

```bash
git clone <url> --branch <branch> --single-branch
```

_Cloning only one branch does not add any benefits unless the repository is very
large and contains binary files that slow down the performance of the
repository. The recommended solution is to optimize the performance of the
repository before relying on single branch cloning strategies._

### `git clone` with SSH

Depending on how you authenticate with the remote server, you may choose to
clone using SSH. If you choose to clone with SSH, you would use a specific SSH
path for the repository instead of a URL. Typically, developers are
authenticated with SSH from the machine level. This means that you would
probably clone with HTTPS or with SSH – not a mix of both for your repositories.

## Related

| Command         | Description                                                                   |
| --------------- | ----------------------------------------------------------------------------- |
| `git branch`    | This shows the existing branches in your local repository                     |
| `git pull`      | Update your current local working branch with all new commits from the remote |
| `git push`      | Uploads all local branch commits to the remote                                |
| `git remote -v` | Show the remote repositories and their stored name                            |
