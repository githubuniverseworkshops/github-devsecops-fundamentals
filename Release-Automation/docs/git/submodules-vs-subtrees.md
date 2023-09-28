---
description:
  Submodules and subtrees are Git tools that allow subprojects to be included as
  a subdirectory within a project. The implementation of each is very different.
---

# Submodules vs Subtrees

## Submodules

The `submodule add` command adds a new file called `.gitmodules` along with a
subdirectory containing the files from `githubtraining/example-submodule`. Both
are added to your index (staging area) and you simply need to commit them. The
submodule's history remains independent of the parent project.

```bash
git submodule add https://github.com/githubtraining/example-submodule
git commit -m "Adding new submodule"
```

To view a diff of the submodule:

```bash
# Show changes to the submodule
git diff example-submodule

# Show oneline log of new commits in the submodule
git diff --submodule example-submodule

# Show changes to the files in the submodule
git diff --submodule=diff
```

## Subtrees

The `subtree` command adds a subdirectory containing the files from
`example-submodule`. The most common practice is to use the `--squash` option to
combine the subproject's history into a single commit, which is then grafted
onto the existing tree of the parent project. You can omit the `--squash` option
to maintain all of the history from the designated branch of the subproject.

```bash
git subtree add \
    --prefix=example-submodule \
    https://github.com/githubtraining/example-submodule main \
    --squash
```

No special command is required to view the diff of a subtree.

### Cloning a Repository with Submodules

To clone a repository along with its submodules:

```bash
git clone --recurse-submodules URL
```

If you forgot `--recurse-submodules`, you can clone and initialize all
submodules using the following:

```bash
git submodule update --init --recursive
```

Adding `--recursive` is only required if any submodule itself has submodules.

### Cloning a Repository with Subtrees

No special command is required.

## Pulling in Updates

### Pulling in Submodule Updates

By default, the submodule repository is fetched, but not updated, when you run
`git pull` in the main project. You need to use one of the following to update
submodules:

| Command | Description | | ---------------------------------### |
--------------------------------### | | `git submodule update` | Update
submodules | | `git submodule update --init` | Required if adding new submodules
| | `git submodule update --recursive` | Required if nested submodules | |
`git pull --recurse-submodules` | |

If the main project changes the submodule URL, you must do the following:

```bash
# Copy the new URL to your local config
git submodule sync --recursive

# Update the submodule from the new URL
git submodule update --init --recursive
```

> The `--recursive` flag is only needed if a submodule has submodules

### Pulling in Subtree Updates

No special commands are required.

## Changing Branches

### Changing Submodule Branches

By default, the submodule working tree is not updated to match the commit
recorded in the main when changing branches. You need to use either of the
following commands:

First, switch branches, then update the submodule(s):

```bash
git switch <branch>
git submodule update --recursive
```

Or, do both in one command:

```bash
git switch --recurse-submodules <branch>
```

### Changing Subtree Branches

No special commands are required.

## Making Changes to a Subproject

In most cases, it is considered best practice to make changes in a separate
clone of the subproject repository and pull them in to the parent project. When
this is not practical, follow these instructions:

### Making Changes to a Submodule

Access the submodule directory and create a branch:

```bash
cd example-submodule
git checkout -b <branch-name>
```

Changes require two commits, one in the subproject repository and one in the
parent repository. Don't forget to push in both the submodule and the main
project!

### Making Changes to a Subtree

No special commands are required! Changes will be committed on the parent
project branch. It is possible to create commits mixing changes to the
subproject and the parent project, but this is generally discouraged.

## Pushing Changes to the Subproject Repository

### Pushing Changes to a Submodule

While in the submodule directory:

```bash
git push
```

Or while in the parent directory:

```bash
git push --recurse-submodules=on-demand
```

### Pushing Changes to a Subtree

```bash
git subtree push \
    --prefix=example-submodule \
    https://github.com/githubtraining/example-submodule main
```

## Helpful Configs for Submodules

### Always show the submodule log when you diff:

```bash
git config --global diff.submodule log
```

### Show a short summary of submodule changes in your `git status` message:

```bash
git config --global status.submoduleSummary true
```

### Make `push` default to `--recurse-submodules=on-demand`:

```bash
git config --global push.recurseSubmodules on-demand
```

### Make all commands (except `clone`) default to `--recurse-submodules`

```bash
git config --global submodule.recurse true
```
