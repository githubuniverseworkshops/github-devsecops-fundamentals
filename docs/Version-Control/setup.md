# Version Control - Setup

Now that you have the lab code, you can start working on your application! This
document will walk you through the initial setup steps so that you can start
developing.

## Step 1: Install Dependencies

Before you can run the sample app locally (or in your Codespace), you will need
to install some dependencies.

1. Run the following command to install the project requirements:

   ```bash
   python3 -m pip install --requirement requirements.txt
   ```

1. If you would like Codespaces to automatically do this for you next time you start working on the project you may add the following declaration into the root of the Codespaces configuration object:

    ```json
    {
        ...
        "postStartCommand": "python3 -m pip install --requirement requirements.txt"
        ...
    }
    ```

1. Confirm that the site building tool is available by running the following command

   ```bash
   python3 -m mkdocs serve
   ```

## Next Steps

Now that you have rapidly onboarded yourself to the project, it time to [Implement Features](./implement-features.md)!