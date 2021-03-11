# Configuration

The `@leanup stack` contains coordinated and preconfigured tools for developing, building, formatting, linting and testing Single-Web-Applications.

## General

### Extends configurations

The `@leanup stack` provides minimal default configurations for all included tools. And it enables the configuration files to be adapted or expanded to suit the specifics of the project.

For example, add an additional webpack plugin: [Copy Webpack Plugin](/1.1/guide/migration/#if-you-need-the-frame-material)

### Bundler

The main legacy bundler is `webpack`. In addition to `webpack`, we have expanded the `@leanup stack` to include the alternatives `vite` and `snowpack`.

**List:**

- [Snowpack](https://www.snowpack.dev/)
- [Vite](https://vitejs.dev/)
- [Webpack](https://webpack.js.org/)

### Transpiler

The main transpiler is `esbuild`. In addition to `esbuild`, we have provide a `babel` transpiler package for the `@leanup stack`. It is needed by `AngularJS` and `Inferno`.

**List:**

- [Babel](https://babeljs.io/)
- [ESBuild](https://esbuild.github.io/)

## At work

### Develop

To develop an application, there must be an entry file `main.ts` in the `src` directory.

For example, if you develop a React application the content of the `main.ts` looks like:

```ts
import 'react.tsx';
```

### Build

The main legacy bundler is `webpack`. In addition to `webpack`, we have expanded the `@leanup stack` to include the alternatives `vite` and `snowpack`.

**List:**

- Snowpack
- Vite
- Webpack

### Format

We chose `prettier` for the code formatting.

### Lint

We chose primary `eslint` for the static code checking. In addition to `eslint`, we provide a `tsc` command.

#### ESLint

#### TSC

### Test

Our test strategy focuses on unit- and e2e-testing.

#### Unit-Test

#### E2E-Test

##### Nightwatch.js

##### Cucumber
