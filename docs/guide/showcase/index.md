# Showcase

You can watch a full showcase on you maschine, if you download the following bash script and execute it like this: `sh demo.sh react latest-1.1`

Download: <a href="/1.1/assets/demo.sh" target="leanup-demo-sh">demo.sh</a>

```bash
clear
echo Cleanup demo folder ./$1-$2
sleep 2
rm -rf $1-$2
mkdir $1-$2
cd $1-$2
sleep 3

clear
echo \> npx lup --help
sleep 2
npx lup --help
sleep 3

clear
echo \> npm install --no-save @leanup$3/cli@$2 @leanup$3/cli-$1@$2
sleep 2
npm install --no-save @leanup$3/cli@$2 @leanup$3/cli-$1@$2
sleep 3

clear
echo \> $1 create
sleep 2
npx $1 create
sleep 3

clear
echo \> npm run format -- --write
sleep 2
npm run format -- --write
sleep 3

clear
echo \> npm run lint -- --fix
sleep 2
npm run lint -- --fix
sleep 3

clear
echo \> npx tsc -p tsconfig.json
sleep 2
npx tsc -p tsconfig.json
sleep 3

clear
echo \> npm run test
sleep 2
npm run test
sleep 3

clear
echo \> npm run coverage -- --check-coverage
sleep 2
npm run coverage -- --check-coverage
sleep 3

clear
echo \> npm run build
sleep 2
npm run build
sleep 3

# clear
# echo \> npm start &
# sleep 2
# npm start &
# sleep 30

# clear
# echo \> npm run e2e -- --env=chrome
# sleep 2
# npm run e2e -- --env=chrome
# sleep 3

# clear
# echo \> npm install -D @leanup/cli-cucumber@$2
# sleep 2
# npm install -D @leanup/cli-cucumber@$2
# sleep 3

# clear
# echo \> $1 create
# sleep 2
# $1 create
# sleep 3

# clear
# echo \> npm run cucumber -- --env=chrome
# sleep 2
# npm run cucumber -- --env=chrome
# sleep 3
```
