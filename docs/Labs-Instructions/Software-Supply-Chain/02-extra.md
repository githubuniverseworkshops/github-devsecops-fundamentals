# Extra: Packing The Application

In this step we will containerize the application using Docker and push to GitHub Container Registry.

- _**Objective:**_ Containerize the application using Docker and push to GitHub Container Registry.
- _**Estimated completion time:**_ 5 minutes
- _**Outcome:**_ The application will be containerized and pushed to GitHub Container Registry.

> [!NOTE]
> We will continue working on the same branch `contiuous-integration-deployment`.

## Prerequisites

- [GitHub Codespaces](#)
- [GitHub Container Registry](#)
- [GitHub Actions](#)

## :books: Resources

- [Docker](https://www.docker.com/)
- [GitHub Container Registry](https://docs.github.com/en/packages/guides/about-github-container-registry)

## :pencil: Lab

1. Navigate to `.github/workflows` and open the file `03.extra.container.image.packaging.yml`.
2. Add the following content to the file:

    ```yml
        name: Package Container Image

        on:
        pull_request:
            branches:
            - main
        workflow_dispatch: {}

        permissions:
        contents: read
        packages: write


        jobs:
        build-and-push:
            runs-on: ubuntu-latest
            steps:
            - uses: actions/checkout@v3

            # Connect to GitHub Container Registry (ghcr)
            - name: Login to GitHub Container Registry
                uses: docker/login-action@v3
                with:
                registry: ghcr.io
                username: ${{ github.actor }}
                password: ${{ secrets.GITHUB_TOKEN }}

            - name: Build and push to GHCR
                uses: docker/build-push-action@v2
                with:
                push: true
                context: ${{ github.workspace }}
                tags: ghcr.io/${{ github.repository }}:${{ github.sha }}
    ```

3. Save the file and commit the changes to the branch `continuous-integration-deployment`.

    ```bash
        git add .
        git commit -m "feat: add container image packaging workflow"
        git push origin continuous-integration-deployment
    ```

4. Navigate to the repository on GitHub and open a pull request.
5. After the workflow is finished, navigate to the [GitHub Container Registry](https://docs.github.com/en/packages/guides/about-github-container-registry) and verify that the container image was pushed successfully.

    ![packages](../../assets/img/packages.png)
