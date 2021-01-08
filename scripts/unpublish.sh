#!/bin/bash

echo
echo args: $1, $2, $3, $4
# echo "sum: $(($3 + $4))"

echo
echo npm access restricted @leanup/$1
npm access restricted @leanup/$1

for i in {0..1}
# for (( i=0; i<=0; i++ ))
do
    echo npm unpublish "@leanup/$1@$2.$i" --force
    npm unpublish "@leanup/$1@$2.$i" --force
done

echo npm access public @leanup/$1
npm access public @leanup/$1