rm -rf lib || true

npx tsc src/inferno-cli.ts -d --outDir lib
npx terser lib/inferno-cli.js -o lib/inferno-cli.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js

npx rollup -c