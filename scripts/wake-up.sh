rm -rf workspace || { echo 'command failed' ; exit 1; }
mkdir workspace || { echo 'command failed' ; exit 1; }
cd workspace || { echo 'command failed' ; exit 1; }
npm install @leanup/cli@$2 @leanup/cli-$1@$2 --no-save || { echo 'command failed' ; exit 1; }
npx $1 create -o -n template || { echo 'command failed' ; exit 1; }
npm audit || { echo 'command failed' ; exit 1; }
npm update || { echo 'command failed' ; exit 1; }
npx $1 lint || { echo 'command failed' ; exit 1; }
npx $1 format || { echo 'command failed' ; exit 1; }
# npx $1 test || { echo 'command failed' ; exit 1; }
npx $1 coverage || { echo 'command failed' ; exit 1; }
npx $1 build || { echo 'command failed' ; exit 1; }
# npx $1 serve -o -m production || { echo 'command failed' ; exit 1; }
# npx $1 e2e -e chrome || { echo 'command failed' ; exit 1; }
npm outdated || true
npm list --depth=0 || true
cd .. || { echo 'command failed' ; exit 1; }
rm -rf workspace || { echo 'command failed' ; exit 1; }
