rm -rf workspace || { echo 'command failed' ; exit 1; }
mkdir workspace || { echo 'command failed' ; exit 1; }
cd workspace || { echo 'command failed' ; exit 1; }
npm install @leanup/cli@$2 @leanup/cli-$1@$2 --no-save || { echo 'command failed' ; exit 1; }
# npx lean create -o -n template || { echo 'command failed' ; exit 1; }
npx $1 create -o -n template || { echo 'command failed' ; exit 1; }
npm update || { echo 'command failed' ; exit 1; }
# npx lean lint || { echo 'command failed' ; exit 1; }
npx $1 lint || { echo 'command failed' ; exit 1; }
# npx lean format || { echo 'command failed' ; exit 1; }
npx $1 format || { echo 'command failed' ; exit 1; }
# npx lean test || { echo 'command failed' ; exit 1; }
# npx $1 test || { echo 'command failed' ; exit 1; }
# npx lean coverage || { echo 'command failed' ; exit 1; }
npx $1 coverage || { echo 'command failed' ; exit 1; }
# npx lean build --gzip || { echo 'command failed' ; exit 1; }
npx $1 build --gzip || { echo 'command failed' ; exit 1; }
cp dist/app.css ../dist/app.css || { echo 'command failed' ; exit 1; }
cp dist/app.js ../dist/$1.js || { echo 'command failed' ; exit 1; }
cp dist/app.js.gz ../dist/$1.js.gz || { echo 'command failed' ; exit 1; }
# npx lean serve -o -m production || { echo 'command failed' ; exit 1; }
# npx $1 serve -o -m production || { echo 'command failed' ; exit 1; }
# npx lean e2e -e chrome || { echo 'command failed' ; exit 1; }
# npx $1 e2e -e chrome || { echo 'command failed' ; exit 1; }
npm outdated || true
npm list --depth=0 || true
cd .. || { echo 'command failed' ; exit 1; }
rm -rf workspace || { echo 'command failed' ; exit 1; }
