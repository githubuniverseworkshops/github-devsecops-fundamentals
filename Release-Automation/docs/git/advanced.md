---
description:
  Git is the open source distributed version control system that facilitates
  GitHub activities on your laptop or desktop. This cheatsheet summarizes
  commonly used Git command line instructions for quick reference.
---

# Advanced Git

## Merge

### Abort the merge

```bash
git merge --abort
```

## Stash

### Save current changes to a stash with a particular name

```bash
git stash save <stash name>
```

### Save current changes to a stash (saves it as stash@{0})

```bash
git stash
```

### Drop the stash at the top of the stack

```bash
git stash drop
```

### Drop the stash at the nth index

```bash
git stash drop stash@{n}
```

### Apply the stash at the nth index and delete from the list

```bash
git stash pop stash@{n}
```

### Apply the stash at the nth index

```bash
git stash apply stash@{n}
```

## Checkout

### Discards all the changes

```bash
git restore .
```

### Create a new branch and switch to that branch

```bash
git switch -c <branch name>
```

### Bring a single file to the working space from the stash

```bash
git restore --source=<stash@{0}> <filename>
```

## Patch Commands

### Apply a patch file (`.diff` or `.patch`) to the repo

```bash
git apply <patch file>
```

## Log commands

### Prettify the log history of git

```bash
git log --pretty=oneline
```
