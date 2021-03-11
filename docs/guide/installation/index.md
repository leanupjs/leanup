# Installation

The easiest way to get started is to generate our boilerplate project. Alternatively, only the configuration files can be added/updated to an existing project.

## Install the tiny CLI

**You only need the CLI to be saddled up.** Use the follow command to install the CLI on you system or in you existing project.

`npm i -D @leanup/cli @leanup/cli-<framework>`

Available Frameworks: `angular`, `angularjs`, ~~`aurelia`~~\*, `inferno`, `lit-element`, `preact`, `react`,`svelte`,`vanilla`,`vue` and `vue3`

> <small style="color: #d00">\* Aurelia is not Webpack v5 compatible.</small>

For react:

`npm i -D @leanup/cli @leanup/cli-react`

## Create a full boilerplate project

Enter the following command to generate our boilerplate project:

`npx react create`

## Reconfigure you existing project

Enter the following command to reconfigure you existing project:

`npx react create --only-config --no-config --overwrite`

After that, it is important to check the changes with regard to your project. It is possible that some changes can be undone.
