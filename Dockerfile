FROM node:14
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm i --only=production
COPY . .
EXPOSE 4000
CMD [ "node", "src/server.js" ]