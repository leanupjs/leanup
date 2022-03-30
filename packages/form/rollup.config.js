import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

export default {
  input: 'src/index.ts',
  external: ['@leanup/lib'],
  output: {
    dir: 'umd',
    format: 'umd',
    globals: {
      '@leanup/lib': 'LeanUpLib',
    },
    name: 'LeanUpForm',
    sourcemap: true,
  },
  plugins: [
    commonjs(),
    nodeResolve(),
    typescript({
      exclude: ['**/*.test.ts'],
    }),
    terser(),
  ],
};
