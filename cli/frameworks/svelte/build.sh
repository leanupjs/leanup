rm -rf lib || true

npx tsc src/svelte-cli.ts -d --outDir lib
npx terser lib/svelte-cli.js -o lib/svelte-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c