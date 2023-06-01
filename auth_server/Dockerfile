FROM node:alpine

WORKDIR /auth_server

COPY ./package.json ./
RUN npm install
COPY ./server.js ./

CMD ["npm","start"]  