rm -rf lib || true

npx tsc src/react-cli.ts -d --outDir lib
npx terser lib/react-cli.js -o lib/react-cli.js

npx rollup -c