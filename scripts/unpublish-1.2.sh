for i in {0..2}
do
   bash ./unpublish-all.sh "1.2.0-beta.$i"
done

for i in {0..31}
do
   bash ./unpublish-all.sh "1.2.0-rc.$i"
done