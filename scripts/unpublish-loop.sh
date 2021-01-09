for (( i=$(($2)); i<=$(($3)); i++ ))
do
   sh unpublish-all.sh $1.$i
done