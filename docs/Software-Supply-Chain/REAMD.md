
### Step 1: Create new `tag`

GitHub Actions can be used to create a new tag for the next version. The following example shows how to create a new tag for the next version.

```yaml
# This is a GitHub Actions workflow for versioning. It is triggered on every push to the main branch.
# It reads the content of the repository, retrieves the last version number, calculates the next version number, and creates a new git tag for the next version.
name: Versioning

on:
  push:
    branches:
      - main

jobs:
  versioning:
    runs-on: ubuntu-latest
    steps:
      # The first step is to checkout the repository.
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
      # The next step is to get the last version number.
      - name: Get last version number
        id: get_last_version
        run: |
          # Retrieve the last git tag, as we will only be processing one delivery line.
          last_version=$(git describe --tags --abbrev=0 2>/dev/null || echo "0.0.0")
          echo "Last version is $last_version"
          echo "last_version=$last_version" >> "$GITHUB_OUTPUT"
      # The next step is to calculate the next version number.
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
      # The final step is to create a new git tag for the next version.

      - name: Create tag for the next version
        run: |
          git config --global user.name "${GITHUB_ACTOR}"
          git config --global user.email "${GITHUB_ACTOR}@users.noreply.github.com"
          git tag -a "$next_version" -m "Version $next_version"
          git push origin "$next_version"
        env:
          next_version: ${{ steps.get_next_version.outputs.next_version }}-pre-release
```

### Step 2: Create Integration Checks

The next step is to create a new integration check for the next version. The following example shows how to create a new integration check for the next version.

#### Install dependencies

```yaml
# This workflow is named "Preliminary Checks"
name: Preliminary Checks

# This workflow gets triggered on pull requests to the main branch and on workflow calls
on:
  pull_request:
    branches:
      - main
  push:
    branches:
      - main
  workflow_call: {}

# This workflow has read permissions for the contents
permissions:
  contents: read

# This workflow consists of a single job named "lint-analyze-and-test-pass-01"
jobs:
  lint-analyze-and-test-pass-01:
    # This job runs on the latest version of Ubuntu
    runs-on: ubuntu-latest

    # The steps that this job will execute
    steps:
      # This step checks out the repository
      - name: Checkout repository
        uses: actions/checkout@v3

      # This step sets up Python 3.11
      - name: Set up Python 3.11
        uses: actions/setup-python@v4
        with:
          python-version: 3.11

      # This step installs the Python dependencies needed for CI
      - name: Install CI Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r requirements.txt
```

#### Lint the source code

```yaml
      # This step lints the Python source code
      - name: Lint Python source
        run: |
          ruff check --format=github --select=E9,F63,F7,F82 --target-version=py311 .
```

#### Run CodeQL analysis

```yaml
      # This step runs CodeQL analysis
      - name: Run CodeQL analysis
        uses: ./.github/actions/codeql-analysis
```

#### Run unit and integration tests

```yaml
      # This step runs unit and integration tests
      - name: Run unit and integration tests
        run: |
          pytest --cov=ui/src ui/tests
```

#### Build GitHub Pages

```yaml
      # This step sets up GitHub Pages
      - name: Setup GitHub Pages
        uses: actions/configure-pages@v3

      # This step builds GitHub Pages
      - name: Build GitHub Pages
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./docs
          destination: ./_site

      # This step uploads the GitHub Pages artifact
      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./_site
```

### Complete Example

```yaml
# This workflow is named "Preliminary Checks"
name: Preliminary Checks

# This workflow gets triggered on pull requests to the main branch and on workflow calls
on:
  pull_request:
    branches:
        - main
  workflow_call: {}

# This workflow has read permissions for the contents
permissions:
  contents: read

# This workflow consists of a single job named "lint-analyze-and-test-pass-01"
jobs:
  lint-analyze-and-test-pass-01:
    # This job runs on the latest version of Ubuntu
    runs-on: ubuntu-latest

    # The steps that this job will execute
    steps:
      # This step checks out the repository
      - name: Checkout repository
        uses: actions/checkout@v3

      # This step sets up Python 3.11
      - name: Set up Python 3.11
        uses: actions/setup-python@v4
        with:
          python-version: 3.11

      # This step installs the Python dependencies needed for CI
      - name: Install CI Python dependencies
        run: |
          python -m pip install --upgrade pip
          pip install -r ui/requirements.ci.txt

      # This step reviews the dependencies
      - name: "Dependency Review"
        uses: actions/dependency-review-action@v3
        with:
          config-file: >-
            ./.github/dependency-review-config.yml

      # This step lints the Python source code
      - name: Lint Python source
        run: |
          ruff check --format=github --select=E9,F63,F7,F82 --target-version=py311 .

      # This step runs CodeQL analysis
      - name: Run CodeQL analysis
        uses: ./.github/actions/codeql-analysis

      # This step runs unit and integration tests
      - name: Run unit and integration tests
        run: |
          pytest --cov=ui/src ui/tests

      # This step sets up GitHub Pages
      - name: Setup GitHub Pages
        uses: actions/configure-pages@v3

      # This step builds GitHub Pages
      - name: Build GitHub Pages
        uses: actions/jekyll-build-pages@v1
        with:
          source: ./docs
          destination: ./_site

      # This step uploads the GitHub Pages artifact
      - name: Upload GitHub Pages artifact
        uses: actions/upload-pages-artifact@v1
        with:
          path: ./_site

      # This step deploys to GitHub Pages (currently commented out)
      # - name: Deploy to GitHub Pages
      #   id: deployment
      #   uses: actions/deploy-pages@v2
``````
