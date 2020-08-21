rm -rf lib || true

npx tsc src/vanilla-cli.ts -d --outDir lib
npx terser lib/vanilla-cli.js -o lib/vanilla-cli.js

npx rollup -c