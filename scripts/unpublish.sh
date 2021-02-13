bash ./access.sh restricted $1

bash ./deprecate.sh "$1" "$2" "The version $2 of the package @leanup/$1 is no longer maintained and will be removed from the registry shortly. Instead, please switch to a newer, well-maintained version."
# bash ./deprecate.sh "$1" "$2" "This version $2 of the package @leanup/$1 contains a bug and is marked as deprecated. Instead, please switch to a newer, well-maintained version."

echo
echo npm unpublish --force "@leanup/$1@$2"
npm unpublish --force "@leanup/$1@$2"

bash ./access.sh public $1