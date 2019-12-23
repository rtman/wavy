FROM node:10

WORKDIR /graphql
COPY ./package.json ./
RUN yarn install
COPY . .
CMD [ "yarn", "run", "start" ] 