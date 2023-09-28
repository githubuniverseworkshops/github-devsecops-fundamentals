# Initial Setup

Now that you have a Codespace, you can start working on your application! This
document will walk you through the initial setup steps so that you can start
developing.

- [ ] [Step 1: Build and Push the Container Image](#step-1-build-and-push-the-container-image)
- [ ] [Step 2: Create a Codespace](#step-2-create-a-codespace)
- [ ] [Step 3: Install Dependencies](#step-3-install-dependencies)
- [ ] [Step 4: Start the Sample App](#step-4-start-the-sample-app)
- [ ] [Step 5: Test the Sample App](#step-5-test-the-sample-app)
- [ ] [What's Next?](#whats-next)

## Step 1: Build and Push the Container Image

In this step, you will review and merge the pull request (PR) that has been
created in this repository. Once merged, GitHub Actions will build and push a
container image to GitHub Container Registry (GHCR).

1. Click the **Pull requests** tab
1. Open the PR titled `[REQUIRED] Update README`
1. Open the **Files changed** tab
1. Click **Review changes**
1. In the expanded window, enter a comment and select **Approve**
1. Click **Submit review**

   ![Approve PR](./img/approve-pr.png)

1. Return to the **Conversation** tab of the PR
1. Click **Merge pull request**
1. Click **Confirm merge**
1. If the temporary branch is not automatically deleted, click **Delete branch**

## Step 2: Create a Codespace

It's time to create your Codespace and start working on your application!

1. Open the **Code** tab of **this** repository
1. Click **Code**
1. Click **Create codespace on main**

   A new browser tab will open asking you to authorize this codespace to access
   other repositories in the `USPS` organization. This is required to access
   shared infrastructure configuration.

1. Click **Authorize and continue**

   Once the codespace finishes setting up, you will have a fully-functional VS
   Code environment in the cloud! All the core tools are already installed.

## Step 3: Install Dependencies

Before you can run the sample app locally (in your Codespace), you will need to
install some dependencies.

1. Run the following command to install [`poetry`](https://python-poetry.org/),
   a tool for dependency management and packaging

   ```bash
   pip install poetry
   ```

1. Run the following command to install
   [Flask](https://flask.palletsprojects.com/en/2.3.x/)

   ```bash
   pip install flask
   ```

Next, you will need to install the dependencies for the application itself. This
can be done from the terminal or the command palette:

From the terminal:

1. In the terminal of your codespace, run the following command

   ```bash
   poetry install
   ```

From the command palette:

1. Press **Ctrl + Shift + P** to open the command palette
1. Enter `Tasks: Run Task`
1. Press **Enter**
1. Select `Python: Install Dependencies` from the list of options

## Step 4: Start the Sample App

> [!NOTE]
>
> The Flask app name is set via the `FLASK_APP` environment variable. By
> default, this is set to `cloud_starter_app_python` in your codespace. You can
> change this by modifying
> [`devcontainer.json`](../.devcontainer/devcontainer.json).

The sample app can be started from the terminal or the command palette.

From the terminal:

1. Run the following command

   ```bash
   poetry run flask run --host=0.0.0.0 --port=3000
   ```

From the command palette:

1. Press **Ctrl + Shift + P** to open the command palette
1. Enter `Tasks: Run Task`
1. Press **Enter**
1. Select `Python: Run App` from the list of options

You should see output like this:

Codespaces will detect that your app is running and prompt you to open it in a
new browser tab.

1. Click **Open in Browser**

## Step 5: Test the Sample App

All tests are defined in the [`tests/`](../tests/) directory. The sample app
uses [PyTest](https://docs.pytest.org/) as the test runner.

From the terminal:

1. In the terminal, run the following command to run tests:

   ```bash
   poetry run pytest
   ```

From the command palette:

1. Press **Ctrl + Shift + P** to open the command palette
1. Enter `Tasks: Run Task`
1. Press **Enter**
1. Select `Python: Test` from the list of options

## What's Next?

Now that you have a Codespace, you can start working on your application! Check
out the [End-to-End Workflow](./workflow.md) document to learn more about the
end-to-end workflow of developing, testing, and deploying your application.
