rm -rf lib || true

npx tsc src/vue3-cli.ts -d --outDir lib
npx terser lib/vue3-cli.js -o lib/vue3-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c