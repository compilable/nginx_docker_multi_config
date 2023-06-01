FROM node:alpine

WORKDIR /file_server


COPY ./package*.json ./
RUN npm install
COPY ./server.js ./

CMD ["npm","start"]