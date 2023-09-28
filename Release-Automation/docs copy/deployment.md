# Deployment

This guide will walk you through deploying your updated application to your
Kubernetes cluster. This guide assumes you have already updated your application
and created a new container image. For instructions, see the
[End-to-End Development Workflow](./workflow.md) document.

> ![NOTE]
>
> The following steps must be completed on your **infrastructure** repository.
> However, you do not need to create a new Codespace. You can update the image
> label setting directly from the GitHub UI.

By default, FastTrack repositories require the following approvals for each
environment. Running `.noop` deployments does not require any approval, and
should be done before the actual deployments to each environment.

| Action            | Environment | Approvals                            |
| ----------------- | ----------- | ------------------------------------ |
| `.deploy`         | `dev`       |                                      |
| `.deploy to sit`  | `sit`       | `CODEOWNERS`                         |
| `.deploy to cat`  | `cat`       | `CODEOWNERS`                         |
| `.deploy to prod` | `prod`      | `CODEOWNERS` and Organization Admins |

## Step 1: Update the Image Label

1. Navigate to your **infrastructure** repository
1. Open `tf/terraform.tfvars`
1. Click the pencil icon to edit the file

   ![Edit terraform.tfvars](img/edit-tfvars.png)

1. Update the `ref` variable to the new image label

   > ![WARNING]
   >
   > It is generally not recommended to use `latest` as your image label. The
   > initial deployment uses `latest` for simplicity, but you should use a
   > specific image label for your production deployments.

   ![Update Label](img/update-label.png)

1. Click **Commit changes**
1. Enter a commit message and description
1. Click **Propose changes**
1. Click **Create pull request**
1. Click the cog icon next to the **Reviewers** section and add at least 1
   reviewer from your team
1. Click **assign yourself** to assign the PR to yourself
1. (Optional) Add any labels, projects, and milestones

## Step 2: Review Checks

Whenever you create a pull request, the **Continuous Integration** and
**Linter** workflows will run. You can view the results of these workflows by
clicking the **Checks** tab of your PR, or by clicking **Details** next to a
specific check.

## Step 3: Perform a Branch Deployment

Once your PR is open, a comment will be added with instructions on how to
perform branch deployments, starting with a `noop` deployment. A `noop`
deployment will test deploying your changes, but will not actually update the
application or your cluster. This is a good first step to ensure that your
changes will deploy successfully.

![PR Comment](img/pr-comment.png)

### Step 3.1: Perform a Noop Deployment

1. Comment on your PR with the following

   ```plain
   .noop
   ```

   This will begin a _noop_ deployment to the default environment (`dev`). The
   PR will automatically be updated with a link to the deployment.

   ![noop Deployment Comment](img/noop-deploy-comment.png)

1. Once the noop deployment completes, the results will be added as a comment to
   your PR. You can review this output to ensure that the proposed changes are
   what you expect.

   ![noop Deployment Results](img/noop-deploy-results.png)

### Step 3.2: Deploy to `dev`

At this stage, you can freely deploy to your `dev` environment. Follow the below
steps to perform the deployment.

1. Comment on your PR with the following

   ```plain
   .deploy
   ```

   This will begin the "actual" deployment to the `dev` environment. The PR will
   automatically be updated with a link to the deployment.

1. Once the deployment completes, the results will be added as a comment to your
   PR. You can review this output to ensure that the changes were what you
   expected.
1. Verify the changes by navigating to the IP address of your deployment.

### Step 3.3: Deploy to `sit`

At this stage, you will need to work with your team to have the changes approved
before they can be deployed. Once approved, you can follow the below steps to
deploy to `sit`.

1. Comment on your PR with the following

   ```plain
   .noop to sit
   ```

   This will begin a _noop_ deployment to `sit`. The PR will automatically be
   updated with a link to the deployment. Once the _noop_ deployment completes,
   the results will be added as a comment to your PR. You can review this output
   to ensure that the proposed changes are what you expect.

1. Comment on your PR with the following

   ```plain
   .deploy to sit
   ```

   This will begin a deployment to `sit`. The PR will automatically be updated
   with a link to the deployment.

1. Verify the changes by navigating to the IP address of your deployment.

### Step 3.4: Deploy to `cat`

As with `dev` and `sit`, you can deploy your changes to `cat` by following the
below steps.

1. Comment on your PR with the following to perform a _noop_ deployment

   ```plain
   .noop to cat
   ```

1. Comment on your PR with the following to perform the actual deployment

   ```plain
   .deploy to cat
   ```

1. Verify the changes by navigating to the IP address of your deployment

### Step 3.5: Deploy to `prod`

The process to deploy to `prod` is the same, but with one additional step. You
will need approval from different teams to deploy changes. If you attempt to run
a `.deploy to prod`, you will see an error message similar to the following:

```plain
The following approvals are missing for deployment to prod:

* @USPS/casi-ops-approvers

Please add the above team(s) to the Reviewers list for this PR.
```

1. Perform a `noop` deployment to `prod`

   ```plain
   .noop to prod
   ```

1. Add the listed team(s) to the **Reviewers** list (as well as any other teams
   that are required for your application)
1. Wait for the required approvals
1. Perform a deployment to `prod`

   ```plain
   .deploy to prod
   ```

1. Verify the changes by navigating to the IP address of your deployment

## Step 4: Merge Your Changes

Now that the changes have been deployed to your cluster, you can merge your
feature branch into `main`! This way, `main` always contains a working version
of your application.

1. Click **Merge pull request**
1. Click **Confirm merge**
1. Click **Delete branch**

## Additional Information

### Rollback a Deployment

If, for any reason, your change is not working as expected, you can roll back to
the working version of your application by commenting on your PR with the
following:

To rollback `dev`:

```plain
.deploy main
```

To rollback other environments:

```plain
.deploy main to <environment>
```

### Terraform State Locking

If you are making a large change to your application stack, consider locking the
Terraform state to prevent any other pull requests from affecting your
deployment. This will prevent any deployments from running that are not held by
the lock owner (you).

1. Comment on your PR with the following to lock an environment:

   For the default environment (`dev`):

   ```plain
   .lock --reason <text>
   ```

   For other environments:

   ```plain
   .lock <environment> --reason <text>
   ```

   For **all** environments:

   ```plain
   .lock --global --reason <text>
   ```

1. Perform your deployment(s)
1. Comment on your PR with the following to release the lock(s):

   For the default environment (`dev`):

   ```plain
   .unlock
   ```

   ```plain
   .unlock <environment>
   ```

   For **all** environments:

   ```plain
   .unlock
   ```
