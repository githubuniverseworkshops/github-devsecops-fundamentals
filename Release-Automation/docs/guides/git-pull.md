---
description:
  The `git pull` command updates your current local working branch and all of
  the remote tracking branches. It's a good idea to run `git pull` regularly on
  the branches you are working on locally.
---

# `git pull`

```bash
git pull
```

## What does `git pull` do?

`git pull` is one of the four remote operations within Git, and is responsible
for downloading and applying commits made to the remote repository. Without
running `git pull`, your local repository will never be updated with changes
from the remote. `git pull` should be used regularly when you interact with a
repository with a remote.

## `git pull` vs `git fetch`

`git pull` is a combination of `git fetch` and `git merge`. It updates some
parts of your local repository with changes from the remote repository. To
understand what is and isn't affected by `git pull`, you need to first
understand the concept of remote tracking branches. When you clone a repository,
you clone one working branch, `main`, and all of the remote tracking branches.
`git fetch` updates the remote tracking branches. `git merge` will update your
current branch with any new commits on the remote tracking branch.

However, you may want to use `git fetch` instead. One reason to do this may be
that you expect conflicts. Conflicts can occur in this way if you have new local
commits and new commits on the remote. Just like a merge conflict that would
happen between two different branches, these two different lines of history
could contain changes to the same parts of the same file. If you first operate
`git fetch`, the merge won't be initiated, and you won't be prompted to solve
the conflict. This gives you the flexibility to resolve the conflict later
without the need for network connectivity.

Another reason you may want to run `git fetch` is to update to all remote
tracking branches before losing network connectivity. If you run `git fetch`,
and then later try to run `git pull` without any network connectivity, the
`git fetch` portion of the `git pull` operation will fail.

If you do use `git fetch` instead of `git pull`, make sure you remember to
`git merge`. Merging the remote tracking branch into your own branch ensures you
will be working with any updates or changes.

## How do you use `git pull`?

| Command                      | Description                                                                             |
| ---------------------------- | --------------------------------------------------------------------------------------- |
| `git pull`                   | Update your local working branch with commits from the remote                           |
| `git pull --rebase`          | Update your local working branch with commits from the remote                           |
|                              | Rewrite history so any local commits occur after all remote commits                     |
| `git pull --force <refspec>` | Force a fetch of a specific remote tracking branch that would otherwise cause conflicts |
| `git pull --all`             | Fetch _all_ remotes                                                                     |

You can see all of the many options with `git pull` in the
[git-scm documentation](https://git-scm.com/docs/git-pull).

## Examples of `git pull`

### Working on a Branch

If you're already working on a branch, it is a good idea to run `git pull`
before starting work and introducing new commits. Even if you take a small break
from development, there's a chance that one of your collaborators has made
changes to your branch. This change could even come from updating your branch
with new changes from `main`.

It is always a good idea to run `git status` – especially before `git pull`.
Changes that are not committed can be overwritten during a `git pull`. Or, they
can block the `git merge` portion of the `git pull` from executing. If you have
files that are changed, but not committed, and the changes on the remote also
change those same parts of the same file, Git must make a choice. Since they are
not committed changes, there is no possibility for a merge conflict. Git will
either overwrite the changes in your working or staging directories, or the
`merge` will not complete, and you will not be able to include any of the
updates from the remote.

If this happens, use `git status` to identify what changes are causing the
problem. Either delete or commit those changes, then `git pull` or `git merge`
again.

### Keep `main` up to Date

Keeping the `main` branch up to date is always a good idea!

For example, let's say you have cloned a repository. After you clone, someone
merges a branch into main. Then, you'd like to create a new branch to do some
work. If you create your branch off of `main` _before_ operating `git pull`,
your branch will not have the most recent changes. You could accidentally
introduce a conflict or duplicate changes. By running `git pull` before you
create a branch, you can be sure that you will be working with the most recent
information.

### Undo a `git pull`

You cannot undo the `git fetch` – but you can undo the `git merge` that changed
your local working branch.

To do this, you will need to `git reset` to the commit you made _before_ you
merged. You can find this commit by searching the `git reflog`. The reflog is a
log of every place that HEAD has pointed – every place that you have ever been
checked out to. This reflog is only kept for 30 to 90 days, depending on the
commit, and is only stored locally. _(The reflog is a great reason not to delete
a repository if you think you've made a mistake!)_

Run `git reflog` and search for the commit that you would like to return to.
Then, run `git reset --hard <SHA>` to reset HEAD and your current branch to the
SHA of the commit from before the merge.

### Force `git pull` to Overwrite Local Files

If you have made commits locally that you regret, you may want your local branch
to match the remote branch without saving any of your work. This can be done
using `git reset`.

1. Make sure you have the most recent copy of that remote tracking branch

   ```bash
   git fetch <remote> <branch>
   ```

1. Move the `HEAD` pointer and the current branch pointer to the most recent
   commit as it exists on that remote tracking branch

   ```bash
   git reset --hard <remote>/<branch>
   ```

> **Note:** You can find the remotes with `git remote -v`, and see all available
> remote tracking branches with `git branch --all`.

### `git pull` with Rebase

If there have been new commits on both your local branch and the remote branch,
a merge commit will be created when you `git pull`. This recursive merge is the
default merge style when there are two splits in history being brought together.
But, you may want history on a branch to be only one line.

You can update your local working branch with commits from the remote, but
rewrite history so any local commits occur after all new commits coming from the
remote, avoiding a merge commit. This is done with `git pull --rebase`.

Using `git pull --rebase` does not affect the integrity of the changes or the
commits, but it does affect how history looks in the commit parent/child
relationship.

## Related

| Command             | Description                                          |
| ------------------- | ---------------------------------------------------- |
| `git clone <url>`   | Clone an existing repository                         |
| `git status`        | See information about your local repository          |
| `git branch`        | Shows the existing branches in your local repository |
| `git branch <name>` | Create a branch from your current location           |
| `git push`          | Upload all local branch commits to the remote        |
| `git log`           | Browse and inspect the evolution of project files    |
| `git remote -v`     | Show the remote repositories and their stored name   |
