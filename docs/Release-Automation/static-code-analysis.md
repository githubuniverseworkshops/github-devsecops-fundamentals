# Static Code Analysis

As the final step of this lab, you are going to integrate GitHub Advanced
Security (GHAS) into your CI/CD pipeline. GHAS uses CodeQL static analysis to
detect potential security vulnerabilities in a project. Combined with automation
using GitHub Actions, GHAS can provide fast notification of vulnerabilities and
potential remediation steps.

> [!NOTE]
>
> GHAS requires additional licensing! If you are running this lab in a
> company-managed GitHub account, you may not be able to complete this step.

## Step 1: Create a New Branch

1. Open your repository locally or in Codespaces
1. Create a new branch

   ```bash
   git checkout -b codeql-workflow
   ```

1. Create a new file, `.github/workflows/codeql.yml` with the following
   contents:

   ```yaml
   name: CodeQL

   on:
     push:
       branches:
         - main
     pull_request:
       branches:
         - main

   jobs:
     analyze:
       name: Analyze
       runs-on: ubuntu-latest

       permissions:
         actions: read
         contents: read
         security-events: write

       strategy:
         fail-fast: false
         matrix:
           language: ['python']

       steps:
         - name: Checkout repository
           id: checkout
           uses: actions/checkout@v4

         - name: Initialize CodeQL
           id: initialize
           uses: github/codeql-action/init@v2
           with:
             languages: ${{ matrix.language }}

         - name: Autobuild
           id: autobuild
           uses: github/codeql-action/autobuild@v2

         - name: Perform CodeQL Analysis
           id: analyze
           uses: github/codeql-action/analyze@v2
           with:
             category: '/language:${{matrix.language}}'
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
