FROM node:10

WORKDIR /graphql
COPY ./package.json ./
RUN yarn global add nodemon ts-node
RUN yarn install
COPY . .
# CMD [ "yarn", "run", "start" ] 

CMD ["sh","-c", "yarn start:local"]