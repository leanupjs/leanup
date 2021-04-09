# Configuration

The `@leanup stack` contains coordinated and preconfigured tools for developing, building, formatting, linting and testing Single-Web-Applications.

## General

### Extends configurations

The `@leanup stack` provides minimal default configurations for all included tools. And it enables the configuration files to be adapted or expanded to suit the specifics of the project.

For example, add an additional webpack plugin: [Copy Webpack Plugin](../guide/migration/#if-you-need-the-frame-material)

### TypeScript

The hole stack is focused on `TypeScript` with the following `tsconfig.json`:

```json
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "pretty": true,
    "target": "esnext",
    "module": "esnext",
    "preserveConstEnums": true,
    "sourceMap": true,
    "moduleResolution": "node",
    "lib": ["es2017", "dom"],
    "types": ["mocha", "node"],
    "typeRoots": ["node_modules/@types", "src/types"],
    "noUnusedLocals": true,
    "resolveJsonModule": true,
    "noEmit": true,
    "skipLibCheck": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true,
    "importHelpers": true,
    "removeComments": true,
    "strict": true
  },
  "include": ["src/**/*", "tests/**/*", "node_modules/@leanup/**/*"],
  "exclude": ["node_modules/@leanup/**/template/**/*"]
}
```

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

We chose `prettier` for the code formatting with the following configuration:

```js
module.exports = {
  printWidth: 120,
  singleQuote: true,
};
```

### Lint

We chose primary `eslint` for the static code checking. In addition to `eslint`, we provide a `tsc` command.

#### ESLint

```js
/**
 * https://www.npmjs.com/package/eslint
 */
module.exports = {
  root: false,
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  overrides: [
    /**
     * - https://www.npmjs.com/package/@typescript-eslint/eslint-plugin
     * - https://www.npmjs.com/package/@typescript-eslint/parser
     */
    {
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
      ],
      files: ['**/*.ts', '**/*.tsx'],
      parserOptions: {
        ecmaVersion: 2018,
        project: './tsconfig.json',
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/explicit-member-accessibility': ['warn'],
      },
    },
    /**
     * - https://www.npmjs.com/package/eslint-plugin-html
     */
    {
      files: ['**/*.html'],
      plugins: ['html'],
    },
    /**
     * - https://www.npmjs.com/package/eslint-plugin-json
     */
    {
      extends: ['plugin:json/recommended'],
      files: ['**/*.json'],
      plugins: ['json'],
    },
    {
      env: {
        mocha: true,
      },
      files: ['tests/**/*', '**/*.spec.*', '**/*.test.*'],
    },
  ],
  parser: '@typescript-eslint/parser',
  rules: {
    'no-empty': 'off',
    'no-prototype-builtins': 'off',
    'space-before-function-paren': 'off',
  },
};
```

#### TSC

If you want you can execute a addition test with `tsc -p tsconfig.json`.

### Test

Our test strategy focuses on unit- and e2e-testing.

#### Unit-Test

The unit test framework is `moche` in addition with `chai` and `sinon`.

#### E2E-Test

The unit test framework is `nightwatch.js` in addition with `cucumber`.
