rm -rf lib || true

npx tsc src/preact-cli.ts -d --outDir lib
npx terser lib/preact-cli.js -o lib/preact-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c