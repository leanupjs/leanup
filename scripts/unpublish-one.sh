bash ./access.sh restricted $1

# version="1.0.0-rc"
# for (( i=500; i<=512; i++ ))
# do
#     bash ./deprecate.sh "$1" "$version.$i" "The version $version.$i of the package @leanup/$1 is no longer maintained and will be removed from the registry shortly. Instead, please switch to a newer, well-maintained version."

#     echo
#     echo npm unpublish --force "@leanup/$1@$version.$i"
#     npm unpublish --force "@leanup/$1@$version.$i"
# done

# version="1.0.22-webpack"
# for (( i=2; i<=4; i++ ))
# do
#     bash ./deprecate.sh "$1" "$version.$i" "The version $version.$i of the package @leanup/$1 is no longer maintained and will be removed from the registry shortly. Instead, please switch to a newer, well-maintained version."

#     echo
#     echo npm unpublish --force "@leanup/$1@$version.$i"
#     npm unpublish --force "@leanup/$1@$version.$i"
# done

# version="1.1.0-webpack"
# for (( i=3; i<=15; i++ ))
# do
#     bash ./deprecate.sh "$1" "$version.$i" "The version $version.$i of the package @leanup/$1 is no longer maintained and will be removed from the registry shortly. Instead, please switch to a newer, well-maintained version."

#     echo
#     echo npm unpublish --force "@leanup/$1@$version.$i"
#     npm unpublish --force "@leanup/$1@$version.$i"
# done

# version="1.1.0-rc"
# for (( i=162; i<=230; i++ ))
# do
#     bash ./deprecate.sh "$1" "$version.$i" "The version $version.$i of the package @leanup/$1 is no longer maintained and will be removed from the registry shortly. Instead, please switch to a newer, well-maintained version."

#     echo
#     echo npm unpublish --force "@leanup/$1@$version.$i"
#     npm unpublish --force "@leanup/$1@$version.$i"
# done

bash ./access.sh public $1