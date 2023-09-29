# Release Management

Having continuous deployment in place is great, but what if you're deploying to
something more distributed? For example, if you have a Node.js application that
runs in a container, and you want to deploy to Kubernetes clusters across
multiple regions, it makes sense to retain different release versions of your
application, in case you need to roll back for any reason.

In this section, you're going to configure automatic creation of release
artifacts any time there is a version change in your project. For information on
version numbering, see [Semantic Versioning](https://semver.org/).

## Step 1: Create a New Branch

1. Open your repository locally or in Codespaces
1. Create a new branch

   ```bash
   git checkout -b releases
   ```

1. Open `.github/workflows/continuous-deployment.yml` for editing and modify it
   to include the following contents:

   ```yaml
   name: Continuous Deployment

   # Run this action when PRs targeting `main` are closed.
   on:
     pull_request:
       types:
         - closed
       branches:
         - main

   # The following permissions are required to deploy to GitHub Pages.
   permissions:
     contents: write
     pages: write
     id-token: write

   # If multiple PRs are merged around the same time, this will ensure all but
   # the latest workflow run are cancelled, so that the latest content is
   # deployed to GitHub Pages.
   concurrency:
     group: pages
     cancel-in-progress: true

   jobs:
     deploy:
       name: Deploy
       runs-on: ubuntu-latest

       # Only run if the PR was merged successfully.
       if: ${{ github.event.pull_request.merged == true }}

       steps:
         # Checkout the repository onto the runner.
         - name: Checkout
           id: checkout
           uses: actions/checkout@v4

         # Install the same version of Python that is used in the project. Cache
         # dependencies to reduce workflow run time.
         - name: Setup Python
           id: setup-python
           uses: actions/setup-python@v4
           with:
             python-version: 3.11
             cache: poetry

         # Install/update any dependencies from the cache.
         - name: Install Dependencies
           id: install
           run: |
             pip install poetry
             poetry install

         # Configure GitHub Pages on the repository.
         - name: Set up Pages
           id: pages
           uses: actions/configure-pages@v3

         # Deploy the updated content to the `gh-pages` branch and update the
         # currently-running site.
         - name: Deploy to GitHub Pages
           id: deploy
           run: |
             poetry run mkdocs gh-deploy --force --theme material

         # Get the version and update the tags to use in the release
         - name: Tag Commit
           id: tag-commit
           uses: issue-ops/semver@v0.1.0
           with:
             manifest-path: pyproject.toml
             workspace: ${{ github.workspace }}
             ref: main

         # Use the version output from the previous step for the release
         # Prepend a 'v' to the beginning (e.g. 'v1.2.3')
         - name: Create Release
           id: create-release
           uses: issue-ops/releaser@v0.1.2
           with:
             tag: v${{ steps.tag-commit.outputs.version }}
   ```

1. Stage and commit the new file

   ```bash
   git add .github/workflows/continuous-deployment.yml
   git commit -m 'Add Continuous Deployment workflow'
   ```

1. Push the new branch to the remote repository on GitHub

   ```bash
   git push -u origin releases
   ```

## Step 2: Create a Pull Request

Now that your changes are ready for review, you can open a pull request!

1. Navigate to your repository on GitHub.com
1. Click the **Pull requests** tab
1. In the **compare** drop-down menu, select your branch (e.g. `cd-workflow`)
1. Click **Create pull request**
1. Enter a title and description for your PR
1. Click **Create pull request**

If possible, feel free to add someone
[as a collaborator](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
and have them review your PR! Otherwise, feel free to skip the following steps.

1. Click the cog icon next to the **Reviewers** section and add a reviewer
1. Click **assign yourself** to assign the PR to yourself
1. (Optional) Add any labels, projects, and milestones

## Step 3: Merge

Once you're ready, you can merge your PR into `main`.

1. Click **Merge pull request**
1. Click **Confirm merge**
1. Click **Delete branch**

Now that you have a workflow in place, it's time to make some changes and see it
in action!

## Step 4: Create a Branch

1. In your local repository or codespace, update your repository and create a
   new branch

   ```bash
   git checkout main
   git pull
   git checkout -b new-feature
   ```

1. Make some changes to the site
1. In `pyproject.toml`, update the **version** field (e.g. change it from
   `0.1.0` to `0.2.0`)
1. Stage and commit your changes

   ```bash
   git add .
   git commit -m 'Updating site contents v0.2.0'
   ```

1. Push your new branch to the remote on GitHub

   ```bash
   git push -u origin new-feature
   ```

## Step 5: Create a Pull Request

1. Navigate to your repository on GitHub.com
1. Click the **Pull requests** tab
1. In the **compare** drop-down menu, select your branch (e.g. `cd-workflow`)
1. Click **Create pull request**
1. Enter a title and description for your PR
1. Click **Create pull request**

As with the last PR, feel free to have another person review and approve your
changes. Otherwise, go ahead and merge them into `main`.

1. Click the cog icon next to the **Reviewers** section and add a reviewer
1. Click **assign yourself** to assign the PR to yourself
1. (Optional) Add any labels, projects, and milestones

## Step 6: Merge

Once you're ready, you can merge your PR into `main`.

1. Click **Merge pull request**
1. Click **Confirm merge**
1. Click **Delete branch**

Now that the PR has been merged, your continuous deployment action will be
invoked! Similar to the previous section, this will update the site contents on
GitHub Pages. It will also create a new release that can be used to download the
latest contents of the repository as an artifact.

## Step 7: Review the Release

1. Click the **Code** tab of the repository
1. Locate the **Releases** section
1. Click the latest release
1. Review the contents

## Next Steps

Congratulations! You have now enabled continuous releases! Next, it's time to
configure [Environment Management](./environment-management.md).
