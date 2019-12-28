FROM node:10

WORKDIR /migration
COPY ./package.json ./
RUN yarn global add sequelize sequelize-cli pg
RUN yarn install
COPY . .
RUN chmod +x /migration/wait-for-it.sh
CMD ["sh","-c", "./wait-for-it.sh postgresql:5432 && yarn run migrate && yarn run seed"]
