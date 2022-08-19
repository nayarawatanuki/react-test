FROM node:16.13.1

RUN mkdir -p /home/app/ && chown -R node:node /home/app
WORKDIR /home/app

COPY tsconfig.json ./
COPY package*.json ./

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "start"]