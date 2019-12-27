FROM node:10

WORKDIR /migration
COPY ./package.json ./
RUN yarn global add sequelize-cli
RUN yarn install
COPY . .
RUN chmod +x /migration/wait-for-it.sh
CMD ["./wait-for-it.sh", "postgresql:5433", "--", "npm", "run", "migrate"]
