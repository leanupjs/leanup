rm -rf lib || true

npx tsc src/angularjs-cli.ts -d --outDir lib
npx terser lib/angularjs-cli.js -o lib/angularjs-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c