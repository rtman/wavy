FROM node:10

WORKDIR /app
COPY ./package.json ./
RUN yarn install
COPY . .
CMD [ "npm", "start" ] 