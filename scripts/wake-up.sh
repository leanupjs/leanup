echo rm -rf workspace
rm -rf workspace
echo mkdir workspace
mkdir workspace
echo cd workspace
cd workspace
echo npm install --no-save @leanup/cli@$2 @leanup/cli-$1@$2
npm install --no-save @leanup/cli@$2 @leanup/cli-$1@$2
# npx lean create -n template -o
# npx $1 create -n template -o
# npx lean lint
# npx $1 lint
# npm run lint
# npx lean format
# npx $1 format
# npm run format
# npx lean test
# npx $1 test
# npm run test
# npx lean coverage
# npx $1 coverage
# npm run coverage
# npx lean build
# npx $1 build
# npm run build
# # npx lean serve --port 8080 &
# # npx $1 serve --port 8081 &
# # npx lean serve -- --port 8082 &
# # npx lean e2e -e chrome
# # npx $1 e2e -e chrome
# npm outdated || true
# npm list --depth=0 || true
# cd ..
# rm -rf workspace