FROM node:20-alpine as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 8083
CMD [ "node", "app.js" ]

