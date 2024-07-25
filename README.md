
# Thermos

Thermos project is based on the thermos, water bottle, stainless steel boottle.

## Tech Stack

Shopify Liquid, HTML, CSS, Javascript, jQuery



## Developing themes with Shopify CLI

Please install the dependencies required for the project setup.
 - [Node 18+ ](https://nodejs.org/en/download)
 - [Ruby+Devkit 3.0, installed using RubyInstaller for Windows (select the MSYS2 component and the MSYS2 base installation option](https://www.ruby-lang.org/en/)

 ## Installation of Shopify CLI For the Windows

 ```bash
  npm install -g @shopify/cli @shopify/theme
```
## Run Project Locally through Shopify CLI

Clone the Project From Github 
```bash
git clone https://link-to-project
```
Go to the Project Directory in your local 
```bash
cd my-project
```
Run Shopify theme 
```bash
shopify theme dev --store="thermosllc"
```
## How to setup pre-commit Hook in your Local 
Please install the dependencies required for the Pre-commit Hook.
- [Install Latest Python](https://www.python.org/downloads/)
- Set environment variables For python and PIP both.

After the setup the dependencies go to the project Directory in your local
```bash
cd my-project
```
Install the pre-commit library in your project root Directory
```bash
 pip install pre-commit
```
Open these folder in your project root Directory.
- [If ".git" folder not showing on VS code then follow this steps](https://stackoverflow.com/questions/40818354/visual-studio-code-git-folder-file-hidden)
```bash
cd > my-project > .git > hooks > pre-commit
```
Create one file in pre-commit folder with name "pre-commit" and put the below code.
```bash
#!/bin/bash

# Run the custom pre-commit script
./pre-commit.sh

# Exit with the script's exit code
exit $?
```

## GitHub Branchs & Flow
- [uat-theme](https://github.com/codal/thermos-sp/tree/uat-theme) (Production)
- [staging-wo8](https://github.com/codal/thermos-sp/tree/staging-wo8)
- [develop-wo8](https://github.com/codal/thermos-sp/tree/develop-wo8)

Developers must initiate their feature branch using the ticket name (e.g., branch name TD-500) and commit their code to this branch. 

Next, they should create a pull request from their feature branch to the development branch. 

After ensuring everything is in good in developement branch, another pull request should be created to merge the changes from the development to the staging branch.

Once everything good and QA passed in stag, another pull request should be created to merge the changes from the stag to the main branch.
## Helpfull links 

- [Shopify CLI](https://shopify.dev/docs/api/shopify-cli)
- [Shopify CLI commands](https://shopify.dev/docs/api/shopify-cli/theme)
- [Shopify Impluse theme documentation ](https://help.archetypethemes.co/)

