# bootstrap-microservice-1
A simple microservice using node.js

$ npm install
$ export PORT=3000
$ npm run start-dev

for production or testing

$ npm start


### Docker Commands

    docker build -t video-streaming --file Dockerfile .
    docker image list
    docker run -d -p 4001:4001 video-streaming
    docker container list
    docker logs 42bd1