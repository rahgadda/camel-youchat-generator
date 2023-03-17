#!/bin/bash

# Generate API https://api.betterapi.net/about/

cd 02-RestAPI/youchat-camel

npm install
npm start

docker build -t rahgadda/youchat-camel .
docker run rahgadda/youchat-camel
docker push rahgadda/youchat-camel
