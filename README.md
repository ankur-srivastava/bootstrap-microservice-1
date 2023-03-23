# microservice
A simple microservice using node.js

$ npm install
$ export PORT=3000
$ npm run start-dev

for production or testing

$ npm start


### Docker Commands

    docker build -t video-streaming --file Dockerfile .
    docker run -d -p 4001:4001 video-streaming
    docker image list
    docker container list
    docker ps
    docker logs 42bd1
    docker stop 51d44
    docker kill 51d44 => for container
    docker rm 51d44 => for container
    docker rmi 455fa3f2c84b --force => for image

### Azure Registry

    ankurs.azurecr.io

### To publish image

    docker login <registry-url> --username <your-login> --password <your-pwd>
    docker tag video-streaming ankurs.azurecr.io/video-streaming:latest
    docker push ankurs.azurecr.io/video-streaming:latest
    docker run -d -p <host-port>:<container-port> <registry-url>/<image-name>:<version>
    
### Azure CLI for K8S

    az account show // current default subscription
    az account list // all subscriptions
    az aks get-versions --location westus --output table // list of K8S versions

