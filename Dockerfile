FROM node:18

RUN npm install -g ts-node

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3000

CMD [ "npm", "start" ]