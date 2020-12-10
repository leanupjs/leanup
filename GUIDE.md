<p style="text-align: center; background: white;">
  <a href="https://leanupjs.org">
    <img src="https://leanupjs.org/assets/logo.svg" height="250">
  </a><br>
  <h2 style="text-align: center;">
    <cite><b>Make things pure</b> ... to become lean.</cite>
  </h2>
</p>

# Getting Started

## Installation

### CLI

The CLI can be installed globally (since version ^1.1) as well as locally in the project.

#### CLI Core

| Location \* | Command                     |
| ----------- | --------------------------- |
| global      | `npm i -g @leanup/cli@next` |
| local       | `npm i @leanup/cli@next`    |

#### CLI Framework

| Location \* | Command                                 |
| ----------- | --------------------------------------- |
| global      | `npm i -g @leanup/cli-<framework>@next` |
| local       | `npm i @leanup/cli-<framework>@next`    |

The following framework adapter are available:

| Framework  | Package                      |
| ---------- | ---------------------------- |
| angular    | `@leanup/cli-angular@next`   |
| angularjs  | `@leanup/cli-angularjs@next` |
| inferno    | `@leanup/cli-inferno@next`   |
| aurelia    | `@leanup/cli-aurelia@next`   |
| preact     | `@leanup/cli-preact@next`    |
| react      | `@leanup/cli-react@next`     |
| svelte     | `@leanup/cli-svelte@next`    |
| vanilla    | `@leanup/cli-vanilla@next`   |
| vuejs (v2) | `@leanup/cli-vue@next`       |
| vuejs (v3) | `@leanup/cli-vue3@next`      |

## Usage

### Create a project

Using the example of a global CLI for `react`.

1. Install die CLI<br>
   `npm i -g @leanup/cli@next @leanup/cli-react@next`
2. Create a project folder<br>
   `mkdir project-folder`
3. Move in project folder<br>
   `cd project-folder`
4. Generate a `react` app inside the project-folder<br>
   `react create`
5. Serve the app to develop<br>
   `react serve --open`
6. Build the app artifacts to deliver<br>
   `react build`
7. Format the code<br>
   `react format --fix`
8. Lint the code<br>
   `react lint --fix`
9. Run the unit-tests<br>
   `react test`
10. Run the unit-tests with coverage watermarks<br>
    `react coverage --check-coverage`
11. Run the e2e-tests in the chrome browser<br>
    `react e2e -e chrome`
12. Run the e2e-tests with cucumber in the chrome browser<br>
    `react cucumber -e chrome`

### Using parallel a other framework

Using the example of a global CLI for `vuejs` (v3).

`npm i -g @leanup/cli-vue3@next --force`<br>
`mkdir project-folder`<br>
`cd project-folder`<br>
`vue3 create`<br>
`vue3 serve --open`<br>
`vue3 build`<br>
`vue3 format --fix`<br>
`vue3 lint --fix`<br>
`vue3 test`<br>
`vue3 coverage --check-coverage`<br>
`vue3 e2e -e chrome`<br>
`vue3 cucumber -e chrome`
