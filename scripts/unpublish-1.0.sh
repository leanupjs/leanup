for i in {0..4}
do
   sh unpublish-all.sh "1.0.0-beta.$i"
done

bash ./unpublish-all.sh "1.0.0-rc.0"

for i in {500..527}
do
   sh unpublish-all.sh "1.0.0-rc.$i"
done

for i in {0..3}
do
   sh unpublish-all.sh "1.0.22-webpack.$i"
done

for i in {0..15}
do
   sh unpublish-all.sh "1.1.0-webpack.$i"
done