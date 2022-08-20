#! /bin/bash

nvm install 14.19.3
npm install -g aws-cdk
npm run build

cd cdk
python3 -m venv .venv --without-pip --system-site-packages
source .venv/bin/activate
pip install -r requirements.txt
export AWS_REGION="us-east-1"
cdk deploy --require-approval never -c stage="stg" -c region="us-east-1"
deactivate
rm -rf .venv

cd ..