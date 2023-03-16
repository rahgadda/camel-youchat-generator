#!/bin/bash

# Generate API https://api.betterapi.net/about/

npm install youchat-camel
npm start

cd camel-youchat-generator/02-RestAPI/youchat-camel
docker build -t rahgadda/youchat-camel .
docker run rahgadda/youchat-camel
docker push rahgadda/youchat-camel
