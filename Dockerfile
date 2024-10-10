FROM node:20.17.0-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]