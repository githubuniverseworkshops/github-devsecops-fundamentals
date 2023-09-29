# Setup

Now that you have the lab code, you can start working on your application! This
document will walk you through the initial setup steps so that you can start
developing.

## Step 1: Install Dependencies

Before you can run the sample app locally (or in your Codespace), you will need
to install some dependencies.

1. Run the following command to install [`poetry`](https://python-poetry.org/),
   a tool for dependency management and packaging

   ```bash
   pip install poetry
   ```

Next, you will need to install the dependencies for the application itself. This
can be done from the terminal or the command palette:

**From the terminal:**

1. In the terminal of your codespace, run the following command

   ```bash
   poetry install
   ```

**From the command palette:**

1. Press **Ctrl + Shift + P** to open the command palette
1. Enter `Tasks: Run Task`
1. Press **Enter**
1. Select `Python: Install Dependencies` from the list of options

## Step 2: Start the GitHub Pages Site Locally

The sample app can be started from the terminal or the command palette.

**From the terminal:**

1. Run the following command

   ```bash
   poetry run mkdocs serve
   ```

**From the command palette:**

1. Press **Ctrl + Shift + P** to open the command palette
1. Enter `Tasks: Run Task`
1. Press **Enter**
1. Select `Python: Run App` from the list of options

If you are running this lab in Codespaces, it will detect that your app is
running and prompt you to open it in a new browser tab.

1. Click **Open in Browser**

If you are running the app locally, you will see a localhost URL in the
`Run App` task logs. It should look similar to the following:

```plain
http://127.0.0.1:8000/pages/githubuniverseworkshops/github-devsecops-fundamentals/
```

1. Copy the URL
1. Open it in your web browser

<!-- TODO
## Step 3: Test the GitHub Pages Site

All tests are defined in the `tests/` directory. The sample app uses
[PyTest](https://docs.pytest.org/) as the test runner.

**From the terminal:**

1. In the terminal, run the following command to run tests:

   ```bash
   poetry run pytest
   ```

**From the command palette:**

1. Press **Ctrl + Shift + P** to open the command palette
1. Enter `Tasks: Run Task`
1. Press **Enter**
1. Select `Python: Test` from the list of options
-->

## Next Steps

Now that you have everything, time to automate your release pipeline! Continue
on to [Continuous Deployment](./continuous-deployment.md).
