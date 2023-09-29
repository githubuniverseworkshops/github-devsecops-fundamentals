# Continuous Deployment

Now that you have your repository and are able to run the app locally, it's time
to set up automatic deployments. Following
[GitHub flow](https://docs.github.com/en/get-started/quickstart/github-flow),
our goal is to configure automatic deployment to GitHub Pages any time a pull
request (PR) is successfully reviewed and merged into our default branch,
`main`. To do this, we will need to configure a continuous deployment workflow.

## Step 1: Create a New Branch

1. Open your repository locally or in Codespaces
1. Create a new branch

   ```bash
   git checkout -b cd-workflow
   ```

1. Create a new file, `.github/workflows/continuous-deployment.yml` with the
   following contents:

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

         # Deploy the updated content to the `github-pages` branch and update
         # the currently-running site.
         - name: Deploy to GitHub Pages
           id: deploy
           run: |
             poetry run mkdocs gh-deploy --force --theme material
   ```

1. Stage and commit the new file

   ```bash
   git add .github/workflows/continuous-deployment.yml
   git commit -m 'Add Continuous Deployment workflow'
   ```

1. Push the new branch to the remote repository on GitHub

   ```bash
   git push -u origin cd-workflow
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

1. Make some changes to the site (try updating the following text!)

   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
   tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
   quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
   consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
   cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
   proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

1. Stage and commit your changes

   ```bash
   git add .
   git commit -m 'Updating site contents'
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
invoked!

## Step 7: Monitor GitHub Actions

1. Navigate to your repository on GitHub.com
1. Click the **Actions** tab
1. Locate and open the currently-running **Continuous Deployment** action
1. Click the **Deploy** step and review the log outputs

In the logs, you should see a log line similar to the below:

```plain
INFO    -  Your documentation should shortly be available at: https://githubuniverseworkshops.github.io/github-devsecops-fundamentals/
```

1. Open the link from the logs to view your site!

## Next Steps

Congratulations! You have now enabled continuous deployment to GitHub Pages!
Next, it's time to configure [Release Management](./release-management.md).
