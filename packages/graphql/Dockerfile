FROM node:10

WORKDIR /graphql
COPY ./package.json ./
RUN yarn global add nodemon ts-node
RUN yarn install
COPY . .
# CMD [ "yarn", "run", "start" ] 

CMD ["sh","-c", "./wait-for-it.sh -t 30 127.0.0.1:5432 && yarn start:local"]