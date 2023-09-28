# About this Repository

## GitHub Actions

### [`codeql.yml`](../.github/workflows/codeql.yml)

This workflow will run any time:

- A pull request is created that targets the default branch
- A push is made directly to the default branch

This workflow is responsible for running code security analysis using CodeQL.
For more information, see
[Configure GitHub Advanced Security (GHAS)](https://gitops-handbook.usps.gov/start/quick-start/security/configure-ghas)
in the Cloud Quick Start Guide.

### [`continuous-integration.yml`](../.github/workflows/continuous-integration.yml)

> **Warning**
>
> You are responsible for defining your project's test steps in this file.

This workflow runs any time a commit is made to a branch other than `main`. It
is responsible for ensuring that the Python project and container image build
successfully before being merged into `main`.

### [`publish.yml`](../.github/workflows/publish.yml)

> **Warning**
>
> You are responsible for defining your project's test steps in this file.

This workflow will run any time a pull request is merged into `main`. This
workflow builds, tests, and scans the container image defined by this
repository. If all tests pass, the container image is pushed to the configured
container registry. By default, this is GitHub Container Registry (GHCR).

The following secrets must be set in the repository or inherited from the
organization secrets:

| Name                          | Description                         |
| ----------------------------- | ----------------------------------- |
| `CONTAINER_REGISTRY`          | Container registry (e.g. `ghcr.io`) |
| `CONTAINER_REGISTRY_USERNAME` | User for authentication             |
|                               | Defaults to authenticated user      |
| `CONTAINER_REGISTRY_PASSWORD` | Password for authentication         |
|                               | Defaults to the `GITHUB_TOKEN`      |

## Dependabot

### [`dependabot.yml`](../.github/dependabot.yml)

This file defines the settings for Dependabot to track and report on outdated
dependencies. For more information, see
[Configuration options for the dependabot.yml file](https://docs.github.com/en/code-security/dependabot/dependabot-version-updates/configuration-options-for-the-dependabot.yml-file).

## Docker

### [`Dockerfile`](../Dockerfile)

This file defines the container image for the sample app. For more information,
see [Dockerfile reference](https://docs.docker.com/engine/reference/builder/).

## Python

### [`requirements.txt`](../requirements.txt)

This file defines the Python dependencies for the sample app. For more
information, see
[`requirements.txt`](https://pip.pypa.io/en/stable/reference/requirements-file-format/)
in the Pip documentation.

> **Warning**
>
> At minimum, you will need to update the `name`, `version`, and `description`
> fields in this file to match your project.

### [`src/app.py`](../src/app.py)

This file defines the entrypoint for the sample app. For more information, see
[Python modules](https://docs.python.org/3/tutorial/modules.html).
