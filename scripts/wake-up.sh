rm -rf workspace
mkdir workspace
cd workspace
npm install --no-save "@$2/cli@$3" "@$2/cli-$1@$3" || { echo 'command failed' ; exit 1; }
npx $1 create -n template -o || { echo 'command failed' ; exit 1; }
find -E . -regex ".*.(js,json,svelte,ts,tsx,vue)" -type f -exec sed -E "s/@leanup/@$2/g" {} +
npx lean lint || { echo 'command failed' ; exit 1; }
npx $1 lint || { echo 'command failed' ; exit 1; }
npm run lint || { echo 'command failed' ; exit 1; }
npx lean format || { echo 'command failed' ; exit 1; }
npx $1 format || { echo 'command failed' ; exit 1; }
npm run format || { echo 'command failed' ; exit 1; }
npx lean test || { echo 'command failed' ; exit 1; }
npx $1 test || { echo 'command failed' ; exit 1; }
npm run test || { echo 'command failed' ; exit 1; }
npx lean coverage || { echo 'command failed' ; exit 1; }
npx $1 coverage || { echo 'command failed' ; exit 1; }
npm run coverage || { echo 'command failed' ; exit 1; }
npx lean build || { echo 'command failed' ; exit 1; }
npx $1 build || { echo 'command failed' ; exit 1; }
npm run build || { echo 'command failed' ; exit 1; }
# npx lean serve --port 8080 &
# npx $1 serve --port 8081 &
# npx lean serve -- --port 8082 &
# npx lean e2e -e chrome
# npx $1 e2e -e chrome
# npx lean cucumber
# npx $1 cucumber
npm outdated || true
npm list --depth=0 || true
cd ..
rm -rf workspace