FROM node:10

WORKDIR /migration
COPY ./package.json ./
RUN yarn global add sequelize sequelize-cli pg
RUN yarn install
COPY . .
RUN chmod +x /migration/wait-for-it.sh
# need to run make sure that es and postgresql are running before migrations
# also need to make sure the zombodb extension and the table are created, then seeded, then the index is created
CMD ["sh","-c", "./wait-for-it.sh -t 30 es01:9200 && ./wait-for-it.sh postgresql:5432 && yarn run migrate migrations/20191226230620-create-zombodb-extension.js && yarn run migrate migrations/20191226230623-create-songs.js && yarn run seed && yarn run migrate migrations/20191525230625-create-idxSongs.js"]
