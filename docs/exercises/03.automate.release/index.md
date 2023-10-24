# :test_tube: Release Automation

!!! quote ":moneybag: Enable rapid onboarding to project development"

    1. Continuing on the existing `git` branch, implement the release automation workflow

        ```yaml title=".github/workflows/3.continuous.deployment.yml"
        --8<-- ".github.reference/workflows/3.continuous.deployment.yml"
        ```

    1. Commit the changes to a new branch and push it

        ```bash
        git add .
        git commit -m "Implement release automation"
        git push -u origin integrate-tetris-game
        ```
