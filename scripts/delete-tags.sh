git tag -l | grep v1.
git tag -l | grep alpha
git tag -l | grep beta
git tag -l | grep webpack

git tag --delete "$1"
git push --delete origin "$1"

# for i in {0..80}
# do
#    git tag --delete "v1.0.$i"
#    git push --delete origin "v1.0.$i"
# done

# git tag -l | grep v1.1.0-rc.
# for i in {240..300}
# do
#    git tag --delete "v1.1.0-rc.$i"
#    git push --delete origin "v1.1.0-rc.$i"
# done

# git tag -l | grep 1.0.0-beta.
# for i in {0..8}
# do
#    git tag --delete "1.0.0-beta.$i"
#    git push --delete origin "1.0.0-beta.$i"
#    git tag --delete "v1.0.0-beta.$i"
#    git push --delete origin "v1.0.0-beta.$i"
# done

# git tag -l | grep v1.0.0-rc.
# for i in {501..509}
# do
#    git tag --delete "v1.0.0-rc.$i"
#    git push --delete origin "v1.0.0-rc.$i"
# done

# git tag --delete "v1.0.60-alpha.0"
# git push --delete origin "v1.0.60-alpha.0"