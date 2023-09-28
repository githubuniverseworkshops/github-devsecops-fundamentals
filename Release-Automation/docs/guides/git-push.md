---
description:
  The `git push` command uploads all local branch commits to the corresponding
  remote branch.
---

# `git push`

```bash
git push
```

## What does `git push` do?

`git push` updates the remote branch with local commits. It is one of the four
commands in Git that prompts interaction with the remote repository. You can
also think of `git push` as _update_ or _publish_.

By default, `git push` only updates the corresponding branch on the remote. So,
if you are checked out to the `main` branch when you invoke `git push`, only the
`main` branch will be updated. It's always a good idea to use `git status` to
see what branch you are on before pushing to the remote.

## How do you use `git push`?

After you make and commit changes locally, you can share them with the remote
repository using `git push`. Pushing changes to the remote makes your commits
accessible to others who you may be collaborating with. This will also update
any open pull requests with the branch that you're working on.

As best practice, it's important to run the `git pull` command before you push
any new changes to the remote branch. This will update your local branch with
any new changes that may have been pushed to the remote from other contributors.
Pulling before you push can reduce the amount of merge conflicts you create on
GitHub – allowing you to resolve them locally before pushing your changes to the
remote branch.

| Command                       | Description                                           |
| ----------------------------- | ----------------------------------------------------- |
| `git push -f`                 | Force a push that would otherwise be blocked          |
|                               | _(Use with caution!)_                                 |
| `git push -u origin <branch>` | Create an upstream tracking branch                    |
| `git push --all`              | Push all branches                                     |
| `git push --tags`             | Publish tags that aren't yet in the remote repository |

You can see all of the options with `git push` in the
[git-scm documentation](https://git-scm.com/docs/git-push).

## Why can't I push?

If you are trying to `git push` but are running into problems, there are a few
common solutions.

### Check the Branch

Check what branch you are currently on with `git status`. If you are working on
a protected branch, like `main`, you may be unable to push commits directly to
the remote. If this happens to you, it's OK! You can fix this a few ways.

#### Create a new Branch

1. Create and checkout to a new branch from your current commit

   ```bash
   git checkout -b <branch>
   ```

1. Push the new branch to the remote

   ```bash
   git push -u origin <branch>
   ```

#### Committed to the Wrong Branch

1. Checkout to the branch that you intended to commit to

   ```bash
   git checkout <branch>
   ```

1. Merge the commits from the branch that you accidentally committed to

   ```bash
   git merge <other-branch>
   ```

1. Push your changes to the remote

   ```bash
   git push
   ```

1. Checkout the branch you accidentally committed to

   ```bash
   git checkout <other-branch>
   ```

1. Determine the commit it _should_ be pointing to

   ```bash
   git log
   ```

1. Reset to that commit

   ```bash
   git reset --hard <commit>
   ```

## Related

| Command                     | Description                                               |
| --------------------------- | --------------------------------------------------------- |
| `git commit -m "<message>"` | Commit to version control                                 |
| `git clone [url]`           | Clone an existing repository                              |
| `git status`                | Show information about your local repository              |
| `git pull`                  | Update your local branch with new commits from the remote |
