// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  // Song,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
  // SubscriptionResolvers
} from '../types';
import {Models, sequelize} from '../sequelize';
import {QueryTypes} from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const songResolvers: Resolvers = {
  Query: {
    // songs: async (_parent, _args): Promise<Query['songs']> => {
    //   return await Models.Song.findAll();
    // },
    // songsByIdWithAlbumArtistsJoined: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Query['songsByIdWithAlbumArtistsJoined']> => {
    //   const {ids} = args;
    //   return await sequelize.query(
    //     `SELECT songs.*,
    //     artists.name AS artist_name,
    //     albums.title AS album_title
    //     FROM songs INNER JOIN albums ON albums.id = songs.album_id INNER JOIN artists ON artists.id = songs.artist_id
    //     WHERE songs.id = ANY ('{${ids}}');`,
    //     {type: QueryTypes.SELECT},
    //   );
    // },
    // songById: async (_parent, args): Promise<Query['songById']> => {
    //   const {id} = args;
    //   return await Models.Song.findByPk(id);
    // },
    // searchSongs: async (_parent, args): Promise<Query['searchSongs']> => {
    //   const {query} = args;
    //   // const result = await sequelize.query(
    //   //
    //   // searches artist table but doesnt show the data/columns from there
    //   // SELECT songs.* FROM songs
    //   // WHERE songs ==> dsl.join('artist_id', 'idxArtists', 'id', '*${query}*');`,
    //   //   {type: QueryTypes.SELECT},
    //   // );
    //   // doesnt work yet, shows duplicates of everything
    //   // const result = await sequelize.query(
    //   //   `
    //   //   SELECT songs.*, artists.*
    //   //   FROM songs, artists
    //   //   WHERE songs  ==> dsl.join('artist_id', 'idxArtists', 'id', '*Raf*');
    //   // `,
    //   //   {type: QueryTypes.SELECT},
    //   // );
    //   const result = await sequelize.query(
    //     `
    //     SELECT songs.id,
    //     songs.title,
    //     songs.genres,
    //     songs.duration,
    //     songs.url,
    //     songs.image,
    //     artists.id AS artist_id,
    //     artists.name AS artist_name,
    //     albums.id AS album_id,
    //     albums.title AS album_title
    //     FROM songs, artists, albums
    //     WHERE songs.artist_id = artists.id AND songs.album_id = albums.id
    //     AND (artists ==> '*${query}*' OR songs ==> '*${query}*' OR albums ==> '*${query}*');
    //   `,
    //     {type: QueryTypes.SELECT},
    //   );
    //   // const result = await sequelize.query(
    //   //   `
    //   //   SELECT songs.*, artists.* FROM songs, artists WHERE songs.artist_id = artists.id AND (artists ==> '*${query}*' OR songs ==> '*${query}*');
    //   // `,
    //   //   {type: QueryTypes.SELECT},
    //   // );
    //   return result;
    // },
  },
  Mutation: {
    //   createNewSong: async (_parent, args): Promise<Song> => {
    //     return await Models.Song.create(args);
    //   },
    //   updateSongTitle: async (_parent, args): Promise<Song> => {
    //     const {title, id} = args;
    //     const song = await Models.Song.findByPk(id);
    //     return await song.update({title});
    //   },
    //   deleteSong: async (
    //     _parent,
    //     args,
    //     {models},
    //   ): Promise<Scalars['Boolean']> => {
    //     const {id} = args;
    //     return await models.Song.destroy({
    //       where: {id},
    //     });
    //   },
  },
};
