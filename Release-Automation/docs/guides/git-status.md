---
description:
  The `git status` command shows the current state of your Git working directory
  and staging area.
---

# `git status`

```bash
git status
```

## What does `git status` do?

When in doubt, run `git status`. This is _always_ a good idea. The `git status`
command only outputs information, it won't modify commits or change your local
repository.

A useful feature of `git status` is that it will provide helpful information
depending on your current situation. In general, you can count on it to tell
you:

- Where `HEAD` is pointing, whether that is a branch or a commit (this is what
  you have "checked out")
- If you have any changed files in your current directory that have not yet been
  committed
- If changed files are staged or not
- If your current local branch is linked to a remote branch, `git status` will
  tell you if your local branch is behind or ahead by any commits

During merge conflicts, `git status` will also tell you exactly which files are
the source of the conflict.

## How do you use `git status`?

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `git status`    | Shows basic information listed above |
| `git status -s` | Output in short format               |
| `git status -v` | Output in verbose mode               |

You can see all of the options with `git status` in the
[git-scm documentation](https://git-scm.com/docs/git-status).

## Related

| Command                       | Description                                   |
| ----------------------------- | --------------------------------------------- |
| `git clone [url]`             | Clone (download) a repository                 |
| `git remote -v`               | Show associated remote repositories           |
| `git remote add origin <url>` | Add a remote repository                       |
| `git push`                    | Upload all local branch commits to the remote |
| `git push -u origin main`     | Upload all local branch commits to the remote |
|                               | This also creates the branch on the remote    |
