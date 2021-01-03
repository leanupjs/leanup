rm -rf workspace || { echo 'command failed' ; exit 1; }
mkdir workspace || { echo 'command failed' ; exit 1; }
cd workspace || { echo 'command failed' ; exit 1; }

npm install --no-save @leanup/cli-$1@$2 || { echo 'command failed' ; exit 1; }
# npx lean create -n template -o || { echo 'command failed' ; exit 1; }
npx $1 create -n template -o || { echo 'command failed' ; exit 1; }

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

# # npx lean serve -o -m production || { echo 'command failed' ; exit 1; }
# # npx $1 serve -o -m production || { echo 'command failed' ; exit 1; }

# # npx lean e2e -e chrome || { echo 'command failed' ; exit 1; }
# # npx $1 e2e -e chrome || { echo 'command failed' ; exit 1; }

npm outdated || true
npm list --depth=0 || true

cd .. || { echo 'command failed' ; exit 1; }
rm -rf workspace || { echo 'command failed' ; exit 1; }
