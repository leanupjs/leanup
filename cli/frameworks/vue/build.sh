rm -rf lib || true

npx tsc src/vue-cli.ts -d --outDir lib
npx terser lib/vue-cli.js -o lib/vue-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c