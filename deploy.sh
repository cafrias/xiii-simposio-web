# Deploys built version to s3

yarn build

if [ "$1" == "production" ]; then
  echo 'Pushing to production ...'
  aws s3 cp build/ s3://simposioenushuaia.com.ar/ --recursive --profile untdf
  echo 'Pushing to production ... DONE!'
else
  echo 'Pushing to development ...'
  aws s3 cp build/ s3://simposio-web.cfrias.com.ar/ --recursive
  echo 'Pushing to development ... DONE!'
fi

