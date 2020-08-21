// rollup.config.js

import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import shebang from 'rollup-plugin-add-shebang';

export default {
  input: 'src/cli.ts',
  output: {
    dir: 'lib',
    format: 'cjs',
  },
  plugins: [typescript(), terser(), shebang()],
};
