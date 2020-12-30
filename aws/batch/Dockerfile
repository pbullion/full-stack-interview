# Node.js Base Image
FROM node:boron

WORKDIR /usr/src/app

COPY package.json /usr/src/app

RUN npm install

COPY . /usr/src/app

CMD [ "node", "index" ]