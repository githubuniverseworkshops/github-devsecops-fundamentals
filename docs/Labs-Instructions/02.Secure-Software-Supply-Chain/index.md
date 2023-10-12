# Software Supply Chain Workshop

## Introduction

The goal of this lab is to create a software supply chain for the `Tetris` app. The software supply chain will consist of the following steps:

1. Create Integration Checks
2. Continuous Delivery
3. Pre-Release
4. Compliance

## Prerequisites

The same prerequisites as [Lab 1](../Lab-1/README.md) apply.

## Objectives

The objectives of this lab are to:

1. Create Integration Checks for the `Tetris` app using GitHub Actions.
2. Create a Continuous Delivery workflow for the `Tetris` app using GitHub Actions.
3. Create a new pre-release `tag` for the `Tetris` app using GitHub Actions.
4. Create a Compliance using CodeQL, Dependcy Review, and Dependabot.

## Lab Outcomes

The outcomes of this lab are:

1. Get familiar with GitHub Actions.
2. Get familiar with GitHub Packages.
5. Get familiar with the GitHub CodeQL analysis.
6. Get familiar with the GitHub Dependency Review Action.
7. Get familiar with the GitHub Dependabot.

## Step 1.1: Create Integration Checks

The first step is to create a new integration check for the next version. Follow these steps:

1. Navigate to `.github/workflows` and create a new file with the name `01.1.continuous.integration.yml`.
2. Copy and paste the provided YAML code for running quality checks, UI tests, and security checks.
3. Save the file and commit it to your repository.

### Complete Example 
```yaml
name: Run Checks

on:
  pull_request:
    branches:
      - main
  workflow_call: {}

permissions:
  actions: write
  contents: read
  security-events: write
  checks: write

env:
  CI: 1
  SITE_DIR: _site
  TETRIS_APP_HOST: "127.0.0.1"
  TETRIS_APP_PORT: "8080"
  TETRIS_APP_PATH: "pages/githubuniverseworkshops/github-devsecops-fundamentals"

jobs:
  quality-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.11
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - name: Install Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.ci.txt
      - name: Install NodeJS dependencies
        run: npm ci
      - name: Lint Python source
        run: |
          ruff check --format=github --select=E9,F63,F7,F82 --target-version=py311 .

  ui-tests:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.11
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - name: Install Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.ci.txt
      - name: Install node dependencies
        run: npm ci
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run Playwright tests
        run: npx playwright test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

## Step 1.2: Continuous Delivery

In this step, you will create a new continuous delivery workflow for the next version. Follow these steps:

1. Create a new file named `01.2.continuous.integration.yml` in the `.github/workflows` directory.
2. Copy and paste the provided YAML code for running acceptance tests.
3. Save the file and commit it to your repository.

### Complete Example
```yaml
name: Run Acceptance Tests

on:
  pull_request:
    branches: [ main ]
  workflow_call: {}

permissions:
  actions: write
  contents: read
  security-events: write

env:
  CI: 1
  SITE_DIR: _site
  TETRIS_APP_HOST: "127.0.0.1"
  TETRIS_APP_PORT: "8080"
  TETRIS_APP_PATH: "pages/githubuniverseworkshops/github-devsecops-fundamentals"

jobs:
  run-acceptance:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.11
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - name: Install Python Dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.ci.txt
      - name: Install NodeJS Dependencies
        run: npm ci
      - name: Test Site Build
        run: |
          mkdocs build --clean --strict --verbose --site-dir '${{ env.SITE_DIR }}'
      - name: Install Playwright Browsers
        run: npx playwright install --with-deps
      - name: Run UI Test
        continue-on-error: true
        run: npx playwright test
      - name: Upload UI Test Report
        uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
          retention-days: 30
```

## Step 2: Create Pre-Release Tag

GitHub Actions can be used to create a new tag for the next version. Follow these steps:

1. Create a new file named `02.create.pre-release-tag.yml` in the `.github/workflows` directory.
2. Copy and paste the provided YAML code for versioning the main branch.
3. Save the file and commit it to your repository.

### Complete Example
```yaml
name: Version Changes to the Main Branch

on:
  push:
    branches:
      - main
  workflow_call: {}

jobs:
  version-main-branch-changes:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      - name: Get last version number
        id: get_last_version
        run: |
          # Retrieve the last git tag, as we will only be processing one delivery line.
          last_version=$(git describe --tags --abbrev=0 2>/dev/null || echo "0.0.0")
          echo "Last version is $last_version"
          echo "last_version=$last_version" >> "$GITHUB_OUTPUT"
      - name: Get next version number
        id: get_next_version
        run: |
          major=$(echo $last_version | cut -d. -f1)
          minor=$(echo $last_version | cut -d. -f2)
          patch=$(echo $last_version | cut -d. -f3)

          next_patch=$((patch+1))

          next_version="$major.$minor.$next_patch"

          echo "Next version is $next_version"
          echo "next_version=$next_version" >> "$GITHUB_OUTPUT"
        env:
          last_version: ${{ steps.get_last_version.outputs.last_version }}
      - name: Create tag for the next version
        run: |
          git config --global user.name "${GITHUB_ACTOR}"
          git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"
          git tag -a "$next_version" -m "Version $next_version"
          git push origin "$next_version"
        env:
          next_version: ${{ steps.get_next_version.outputs.next_version }}-pre-release

```

## Step 3: Build and Push Docker Image

The next step is to create a Docker container image and push it to GitHub Container Registry (GHCR). Follow these steps:

1. Create a new file named `03.build-and-push-docker.yml` in the `.github/workflows` directory.
2. Copy and paste the provided YAML code for building and pushing the Docker image.
3. Save the file and commit it to your repository.

### Complete Example
```yaml
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

## Step 4: Complaince
_optional during the dry-run to check the time and stick with 15 minutes_

In this step, you will create a new Dependabot configuration file. Follow these steps:

1. Create a new file named `04.dependabot.yml` in the root directory of your repository.
2. Copy and paste the provided YAML code for configuring Dependabot.
3. Save the file.

### Complete Example
```yaml
name: Complaince

on:
  pull_request:
    branches:
      - main
  workflow_call: {}

permissions:
  actions: write
  contents: read
  security-events: write
  checks: write

env:
  CI: 1
  SITE_DIR: _site
  TETRIS_APP_HOST: "127.0.0.1"
  TETRIS_APP_PORT: "8080"
  TETRIS_APP_PATH: "pages/githubuniverseworkshops/github-devsecops-fundamentals"

jobs:
  security-checks:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-python@v4
        with:
          python-version: 3.11
      - uses: actions/setup-node@v3
        with:
          node-version: 20
      - name: Install Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
      - name: Install node dependencies
        run: npm ci
      - name: Dependency Review
        uses: actions/dependency-review-action@v3
        with:
          config-file: >-
            ./.github/dependency-review-config.yml
      - name: Initialize CodeQL
        uses: github/codeql-action/init@v2
        with:
          languages: python,javascript
          setup-python-dependencies: "false"
      - name: Perform CodeQL Analysis
        uses: github/codeql-action/analyze@v2
```

Congratulations! You have completed the steps to set up a software supply chain for the `Tetris` app using GitHub Actions.

