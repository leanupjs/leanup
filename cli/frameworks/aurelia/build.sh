rm -rf lib || true

npx tsc src/aurelia-cli.ts -d --outDir lib
npx terser lib/aurelia-cli.js -o lib/aurelia-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c