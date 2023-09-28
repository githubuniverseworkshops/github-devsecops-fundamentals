---
description:
  The `git commit` command creates a commit, which is like a snapshot of your
  repository. These commits are snapshots of your entire repository at specific
  times. You should make new commits often, based around logical units of
  change. Over time, commits should tell a story of the history of your
  repository and how it came to be the way that it currently is. Commits include
  lots of metadata in addition to the contents and message, like the author,
  timestamp, and more.
---

# `git commit`

```bash
git commit -m "Add a contributing guide link to README.md"
```

## How does `git commit` work?

Commits are the building blocks of "save points" within Git's version control.

### Commits Shape History

By using commits, you're able to craft history intentionally and safely. You can
make commits to different branches, and specify exactly what changes you want to
include. Commits are created on the branch that you've currently checked out to
(wherever `HEAD` is pointing) so it's always a good idea to run `git status`
before making a commit, to verify that you've checked out the correct branch.
Before you commit, you will need to stage any new changes that you'd like to
include in the commit using `git add`.

Commits are objects referenced by lightweight SHA hashes. As long as you're
working with text files, you won't need to worry about how many files you have,
how big they are, or how many commits you make. Git can handle it!

### Commits Have Two Phases

Commits have two phases to help you craft them properly. Commits should be
logical, atomic units of change that represent a specific idea. You may get
carried away and end up solving two or three problems before you remember to
commit! That's OK – Git can handle that. Once you're ready to craft your
commits, you'll use `git add <FILENAME>` to specify the files that you'd like to
"stage" for commit. Without adding any files, the command `git commit` won't
work. Git only looks to the staging area to find out what to commit. Staging, or
adding, files, is possible through the command line, and also possible with most
Git interfaces like GitHub Desktop by selecting the lines or files that you'd
like to stage.

You can also use a handy command, `git add -p`, to walk through the changes and
separate them, even if they're in the same file.

## How do you use `git commit`?

| Command                      | Description                                           |
| ---------------------------- | ----------------------------------------------------- |
| `git commit`                 | Start the commit process                              |
|                              | Opens your default editor to write the commit message |
| `git commit -m "<message>"`  | Start the commit process                              |
|                              | Includes a commit message                             |
| `git commit -am "<message>"` | Start the commit process                              |
|                              | Includes a commit message                             |
|                              | Stages all edited files already tracked by Git        |
| `git commit --amend`         | Replace the most recent commit with a new commit      |

To see all of the possible options you have with `git commit`, check out the
[git-scm documentation](https://git-scm.com/docs/git-commit).

## Undo Commits

Sometimes you may need to undo a commit. If you find yourself in this situation,
there are a few very important things to remember:

- If you are undoing a commit that exists on the remote, you could create big
  problems for your collaborators!
- Undoing a commit on work that you only have locally is much safer.

## What can go wrong while changing history?

Changing history for collaborators can be problematic in a few ways. Imagine –
You and another collaborator have the same repository, with the same history.
But, they make a change that _deletes_ the most recent commit. They continue new
commits from the commit directly before that. Meanwhile, you keep working _with_
the commit that the collaborator tried to delete. When they push, they'll have
to 'force push', which should show to them that they're changing history. **What
do you think will happen when you try to push?**

In dramatic cases, Git may decide that the histories are too different and the
projects are no longer related. This is uncommon, but a big problem.

The most common result is that your `git push` would return the "deleted" commit
to a shared history. (First, you would `git pull` if you were working on the
same branch, and then merge, but the results would be the same.) This means that
whatever was so important to delete is now back in the repository. A password,
token, or large binary file may return without ever alerting you.

### `git revert`

`git revert` is the safest way to change history with Git. Instead of deleting
existing commits, `git revert` looks at the changes introduced in a specific
commit, then applies the inverse of those changes in a new commit. It functions
as an "undo commit" command, without sacrificing the integrity of your
repository's history. **`git revert` is always the recommended way to change
history when it's possible**.

### `git reset`

Sometimes, a commit includes sensitive information that actually needs to be
deleted. `git reset` is a very powerful command that may cause you to lose work.
By resetting, you move the `HEAD` pointer and the branch pointer to another
point in time – maybe making it seem like the commits in between never happened!
Before using `git reset`:

- Make sure to talk with your team about any shared commits
- Research the three types of reset to see which is right for you (`--soft`,
  `--mixed`, and `--hard`)
- Commit any work that you don't want to be lost intentionally – work that is
  committed can be gotten back, but uncommitted work cannot

### `git reflog`

If you're changing history and undoing commits, you should know about
`git reflog`. If you get into trouble, the reflog could get you out of trouble.
The reflog is a log of every commit that `HEAD` has pointed to. So, for example,
if you use `git reset` and unintentionally lose commits, you can find and access
them with `git reflog`.

## `git commit --amend`

While `git commit --amend` does change history, it only changes the most recent
commit on your current branch. This can be an extremely useful command for
commits that:

- Haven't been pushed to the remote yet
- Have a spelling error in the commit message
- Don't contain the changes that you'd like to contain

## Examples of Commit Messages

Once you've staged the files that you want to include in your commit, you're
ready. Whether you commit in a tool like GitHub Desktop, or through your command
line, the commit message is important. Commit messages should be short and
descriptive of your change. If you are looking through your repository's
history, you'll be guided by the commit messages, so they should tell a story.
Commits in the command line can include the message with the following format:

- `git commit -m "<message>"`

Commit messages should be present tense and directive, like the following
examples:

- `git commit -m "Create file structure for Git guides"`
- `git commit -m "Translate Git cheatsheet into German"`
- `git commit -m "Update broken URL to Git resources"`

If you'd like to include more context in your commit messages, you can also
include an extended commit message.

## Related

| Command          | Description                                       |
| ---------------- | ------------------------------------------------- |
| `git add <file>` | Add a file to the staging area                    |
| `git status`     | Check the status of the local repository          |
| `git push`       | Upload all local branch commits to the remote     |
| `git log`        | Browse and inspect the evolution of project files |
