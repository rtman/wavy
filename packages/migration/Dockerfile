FROM node:10

WORKDIR /migration
COPY ./package.json ./
RUN yarn global add sequelize sequelize-cli pg
RUN yarn install
COPY . .
RUN chmod +x /migration/wait-for-it.sh
# need to run make sure that es and postgresql are running before migrations
# also need to make sure the zombodb extension and the table are created, then seeded, then the index is created
CMD ["sh","-c", "./wait-for-it.sh -t 30 es01:9200 && ./wait-for-it.sh postgresql:5432 && ./wait-for-it.sh graphql:3000 && yarn run migrate --to migrations/20191226230620-create-zombodb-extension.js && yarn run seed "]

# yarn run migrate migrations/20200210062555-create-idxSongs.js migrations/20200210201356-create-idxArtists.js migrations/20200211171932-add-index-links.js migratons/20200211171933-add-views.js