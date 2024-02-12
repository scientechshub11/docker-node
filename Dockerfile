FROM node:20-alpine as builder
ENV NODE_ENV = production
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . .
RUN npm install
EXPOSE 5000
CMD [ "node", "app.js" ]

