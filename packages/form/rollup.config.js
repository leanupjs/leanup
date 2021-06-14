import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import esbuild from 'rollup-plugin-esbuild';

export default {
  input: 'src/index.ts',
  external: ['listOf', 'log', 'validator'],
  output: {
    file: 'umd/bundle.js',
    format: 'umd',
    name: 'LeanUpForm',
    sourcemap: true,
    globals: {
      listOf: 'LeanUpLib.ListOf',
      log: 'LeanUpLib.Log',
      validator: 'LeanUpLib.Validator',
    },
  },
  plugins: [
    nodeResolve({ browser: true }),
    commonjs(),
    esbuild({
      // All options are optional
      include: /\.[jt]sx?$/, // default, inferred from `loaders` option
      exclude: /node_modules/, // default
      sourceMap: true, // default
      minify: true,
      target: 'es2017', // default, or 'es20XX', 'esnext'
      jsx: 'transform', // default, or 'preserve'
      jsxFactory: 'React.createElement',
      jsxFragment: 'React.Fragment',
      // Like @rollup/plugin-replace
      define: {
        __VERSION__: '"x.y.z"',
      },
      tsconfig: 'tsconfig.json', // default
      // Add extra loaders
      loaders: {
        // Add .json files support
        // require @rollup/plugin-commonjs
        '.json': 'json',
        // Enable JSX in .js files too
        '.js': 'jsx',
      },
    }),
  ],
};
