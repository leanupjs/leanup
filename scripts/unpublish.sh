echo
echo npm access restricted @leanup/$1
npm access restricted @leanup/$1

for (( i=$(($3)); i<=$(($4)); i++ ))
do
    echo npm unpublish "@leanup/$1@$2.$i" --force
    npm unpublish "@leanup/$1@$2.$i" --force
done

echo npm access public @leanup/$1
npm access public @leanup/$1