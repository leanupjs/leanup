rm -rf workspace || { echo 'command failed' ; exit 1; }
mkdir workspace || { echo 'command failed' ; exit 1; }
cd workspace || { echo 'command failed' ; exit 1; }
npm install @leanup/cli@$2 @leanup/cli-$1@$2 --no-save || { echo 'command failed' ; exit 1; }
npx $1 create -o -n template || { echo 'command failed' ; exit 1; }
npm audit || { echo 'command failed' ; exit 1; }
npm run lint || { echo 'command failed' ; exit 1; }
npm run format || { echo 'command failed' ; exit 1; }
npm run test || { echo 'command failed' ; exit 1; }
npm run coverage || { echo 'command failed' ; exit 1; }
npm run build || { echo 'command failed' ; exit 1; }
# npm run serve -o -m production || { echo 'command failed' ; exit 1; }
# npm run e2e -e chrome || { echo 'command failed' ; exit 1; }
npm outdated || true
npm list --depth=0 || true
cd .. || { echo 'command failed' ; exit 1; }
rm -rf workspace || { echo 'command failed' ; exit 1; }
