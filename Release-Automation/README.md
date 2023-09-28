# Release Automation Lab

_How do I deploy artifacts/packages?_

This lab will walk through release automation as part of a DevSecOps pipeline.

## Objectives

- [ ] Continuous deployment (will do this to pages)
- [ ] GitHub Releases (API version releases)
- [ ] Use environments (Make fake deployment workflows that target each
      environment)
- [ ] Do security hardening (CodeQL)
  - [ ] Need the API to have some security error

## Prerequistes

If you haven't done so already, you will need to create a personal repository
using this as a template.

1. Click **Use this template**
1. Click **Create a new repository**
1. In the **Owner** drop down menu, select an owner for the new repository (e.g.
   your username)
1. In the **Repository name** field, enter a name
1. Click **Create repository**

Once your personal repository has been created, you will need to clone it
locally so that you can create branches, make changes, and submit PRs :rocket:

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
