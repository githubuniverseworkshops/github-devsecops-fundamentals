# Release Automation Lab - Prerequisites

## Step 1: Copy this Template

If you haven't done so already, you will need to create a personal repository
using this as a template.

1. Click **Use this template**
1. Click **Create a new repository**
1. In the **Owner** drop down menu, select an owner for the new repository (e.g.
   your username)
1. In the **Repository name** field, enter a name
1. Click **Create repository**

## Step 2: Open the Repository

Once your personal repository has been created, you will need to either clone it
locally or open it in GitHub Codespaces. That way, you can create branches, make
changes, and submit PRs :rocket: Choose one of the options below based on your
preference.

- [Clone Locally](#step-21-clone-locally)
- [Open in Codespaces](#step-22-open-in-codespaces)

### Step 2.1: Clone Locally

1. Click **Code**
1. Copy the **HTTPS** or **SSH** URL for the repository
1. Using one of the following, clone the repository to your local workstation

   - [Clone a repository from GitHub Desktop](https://docs.github.com/en/desktop/adding-and-cloning-repositories/cloning-a-repository-from-github-to-github-desktop)
   - Clone using the [GitHub CLI](https://cli.github.com/)

     ```bash
     gh repo clone <owner>/<repo>
     ```

   - Clone using the Git CLI

     ```bash
     git clone <url>
     ```

### Step 2.2: Open in Codespaces

It's time to create your Codespace and start working on your application!

1. Open the **Code** tab of **this** repository
1. Click **Code**
1. Click **Create codespace on main**

   Once the codespace finishes setting up, you will have a fully-functional VS
   Code environment in the cloud! All the core tools are already installed.

## Next Steps

Continue on to [Setup](./setup.md)!
