# Deploys built version to s3

yarn build

aws s3 cp build/ s3://cfrias-xii-simposio-web/ --recursive
