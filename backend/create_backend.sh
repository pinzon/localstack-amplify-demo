# Add Auth Resource
amplify init --envName test --yes --use-localstack true

# Add Auth Resource
cat addAuth.json | jq -c | amplify add auth --headless

# # Add Storage Resource
# cat addStorage.json | jq -c | amplify add storage --headless

# # Add API Resource
# cat addApi.json | jq -c | amplify add api --headless

# Push Resources
amplify push --use-localstack true --yes

cp src/aws-exports.js ../frontend/demo/src     