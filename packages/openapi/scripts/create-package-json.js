/**
 * node create-package-json.js $GITHUB_SERVER_URL $GITHUB_REPOSITORY 0.0.0
 */
const fs = require("fs");
fs.writeFileSync(
  "dist/typescript-rxjs/package.json",
  `{
   "name": "@${process.argv[3]}",
   "version": "${process.argv[4]}",
   "description": "This package contains the OpenAPI as RxJs implementation for @${process.argv[3]}.",
   "devDependencies": {
     "typescript": "^4"
   },
   "repository": {
     "type": "git",
     "url": "${process.argv[2]}/${process.argv[3]}"
   },
   "files": [
     "dist"
   ],
   "scripts": {
     "prepack": "tsc"
   },
   "main": "dist/index.js",
   "types": "dist/index.d.ts",
   "bugs": {
     "url": "${process.argv[2]}/${process.argv[3]}/issues"
   },
   "publishConfig": {
     "access": "restricted",
     "registry": "https://npm.pkg.github.com"
   }
 }`,
  {
    encoding: "utf8",
  }
);
