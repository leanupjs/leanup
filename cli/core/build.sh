rm -rf lib || true

npx tsc src/common-cli.ts -d --outDir lib
npx terser lib/abstract-cli.js -o lib/abstract-cli.js
npx terser lib/common-cli.js -o lib/common-cli.js
npx terser lib/interfaces.js -o lib/interfaces.js

npx tsc src/webpack.config.ts -d --outDir lib
npx terser lib/webpack.config.js -o lib/webpack.config.js