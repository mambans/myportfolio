echo "Started: `date`"

aws cloudformation deploy --template-file cloudformation.yaml --stack-name myportfolio

set -e

npm run build

aws s3 sync --delete ./build s3://myportfolio.mambans.com

echo "Done: `date`"
