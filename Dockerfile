FROM node:20-alpine

WORKDIR /usr/app

COPY . .

RUN npm install --production=false && npm run build && npm ci

CMD [ "npm", "start" ]
