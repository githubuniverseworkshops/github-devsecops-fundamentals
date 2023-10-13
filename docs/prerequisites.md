# :footprints: Prerequisites

!!! tip "Prepare before the workshop"

    To ensure a seamless workshop experience, complete the following checklist items in order.

    1. :fontawesome-brands-github-alt:{ .lg .middle } **Set up a GitHub account**

        Login to your GitHub  You may create a new GitHub account, if you do not already have one. (1)
        { .annotate }

        1.  :bulb: Keep your @handle handy.

        <span class="md-button">[:material-mouse: Create a new GitHub account](https://github.com/signup){:target="\_blank"}</span>
        <br /><br />

    1. :material-source-repository-multiple:{ .lg .middle } **Clone the workshop project to your own account**

        1. <span class="md-button">[:material-mouse: Create workshop project](https://github.com/new?template_owner=githubuniverseworkshops&template_name=github-devsecops-fundamentals&owner=%40me&name=github-devsecops-fundamentals&description=GitHub+DevSecOps+Fundamentals+%7C+GitHub+Universe+2023+workshop&visibility=public){:target="\_blank"}</span>
        1. In the new tab, most of the prompts will automatically fill in for you.

             - For owner, choose your personal account.
             - We recommend creating a public repository. (1)
                { .annotate }

                1.  :bulb: Public repositories benefit from
                    - [Free use of GitHub Actions minutes](https://docs.github.com/en/billing/managing-billing-for-github-actions/about-billing-for-github-actions).
                    - [Free use of GitHub Advanced Security features](https://docs.github.com/en/get-started/learning-about-github/about-github-advanced-security#about-advanced-security-features).
             - Scroll down and click the **Create repository** button at the bottom of the form.

                 ![Create a new repository from a template](assets/img/create-a-new-repository.png)
        1. After your new repository is created, wait about 20 seconds, then refresh the page.
        <br /><br />

    1. :octicons-feed-discussion-16: **Enable Discussions**

        <span class="md-button">[:material-mouse: Enabling GitHub Discussions on your repository](https://docs.github.com/en/discussions/quickstart#enabling-github-discussions-on-your-repository){:target="\_blank"}</span>
        <br /><br />

    1. :material-security:{ .lg .middle } **Configure base security**

        1. Navigate to the <span style="background-color: #000; color: #fff; font-weight: bold; padding: 0.25em 0.75em;">:octicons-gear-16: Settings</span> tab on your new workshop repository.
        2. Under the <span style="background-color: white; color: #555; font-weight: bold; padding: 0.25em 0.75em;">Security</span> section of the menu, select <span style="background-color: white; color: #555; font-weight: bold; padding: 0.25em 0.75em; border-left: 0.2em solid blue">:octicons-codescan-16: Code security and analysis</span>. Then configure the settings to match as follows (by clicking <span style="background-color: #333; color: #fff; font-weight: bold; padding: 0.25em 0.75em; border-radius: 0.5em">Enable</span> where the option is/becomes available).

            ![code-security-and-analysis-configuration](assets/img/code-security-and-analysis-configuration.png)
        <br /><br />

    1. :octicons-project-16:{ .lg .middle } **Create a project board for the repository**

        1. Open the workshop repository in a new tab.

        2. Navigate to the <span style="background-color: #000; color: #fff; font-weight: bold; padding: 0.25em 0.75em;">:octicons-project-template-16: Projects</span> tab on your new workshop repository.

        3. Open the <span style="background-color: green; font-weight: bold; padding: 0.25em 0.75em; border-radius: 0.5em">:octicons-code-16: Link a project :material-menu-down:</span> dropdown menu. Then select the **New Project** option.

            ![select-new-project](assets/img/select-new-project.png)

        4. Click on the <span style="background-color: green; font-weight: bold; padding: 0.25em 0.75em; border-radius: 0.5em">:octicons-code-16: New project :material-menu-down:</span> button to start the project creation wizard.
        5. Select the **:octicons-tools-16: Feature** template.
        6. Finally click on the <span style="background-color: green; font-weight: bold; padding: 0.25em 0.75em; border-radius: 0.5em">Create</span> button.
            ![create-project](assets/img/create-project.png)

    2. :octicons-codespaces-16: **Provision a new cloud development environment for the workshop**

        GitHub Codespaces enables you to instantly start coding on the workshop project. Personal accounts on GitHub can benefit from a [free quota of GitHub Codespaces usage](https://docs.github.com/en/billing/managing-billing-for-github-codespaces/about-billing-for-github-codespaces#monthly-included-storage-and-core-hours-for-personal-accounts).

        1. Navigate to the <span style="background-color: #000; color: #fff; font-weight: bold; padding: 0.25em 0.75em;">:octicons-code-16: Code</span> tab.

        2. Open the <span style="background-color: green; font-weight: bold; padding: 0.25em 0.75em; border-radius: 0.5em">:octicons-code-16: Code :material-menu-down:</span> menu and click on :material-mouse: <span style="background-color: green; font-weight: bold; padding: 0.25em 0.75em; border-radius: 0.5em">Create codespaces on main</span>.

        3. {==

            **Leave the development environment to initialize and run, we will come back to use it later.**

           ==}


        ![Create a new GitHub Codespaces](assets/img/create-a-new-codespaces.png)
