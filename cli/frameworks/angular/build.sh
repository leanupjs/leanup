rm -rf lib || true

npx tsc src/angular-cli.ts -d --outDir lib
npx terser lib/angular-cli.js -o lib/angular-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c