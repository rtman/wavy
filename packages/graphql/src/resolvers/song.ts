// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import { MutationResolvers, Scalars, QueryResolvers } from '../types';
import {
  Models,
  // sequelizeInstance,
  // sequelizeInstance
} from '../orm';
// import { QueryTypes } from 'sequelize';
import sequelize from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const songResolvers: Resolvers = {
  Query: {
    songs: async (_parent, _args, ctx): Promise<Models.Song[]> => {
      return await ctx.models.Song.findAll();
    },
    songById: async (_parent, args, ctx): Promise<Models.Song> => {
      const { id } = args;
      return await ctx.models.Song.findByPk(id, {
        include: [
          {
            model: Models.Artist,
            as: 'artist',
          },
          {
            model: Models.Album,
            as: 'album',
          },
          {
            model: Models.User,
            as: 'usersFavourited',
          },
          {
            model: Models.Artist,
            as: 'supportingArtists',
          },
        ],
      });
    },
    songsById: async (_parent, args, ctx): Promise<Models.Song[]> => {
      const { ids } = args;
      return await ctx.models.Song.findAll({
        where: {
          id: ids,
        },
        include: [
          {
            model: Models.Artist,
            as: 'artist',
          },
          {
            model: Models.Album,
            as: 'album',
          },
          {
            model: Models.User,
            as: 'usersFavourited',
          },
          {
            model: Models.Artist,
            as: 'supportingArtists',
          },
        ],
      });
    },
    searchSongs: async (_parent, args, ctx): Promise<Models.Song[]> => {
      const { query } = args;
      // const result = await sequelizeInstance.query(
      //   `
      //   SELECT songs.id,
      //   songs.title,
      //   songs.genres,
      //   songs.duration,
      //   songs.url,
      //   songs.image,
      //   artists.id AS artist_id,
      //   artists.name AS artist_name,
      //   albums.id AS album_id,
      //   albums.title AS album_title
      //   FROM songs, artists, albums
      //   WHERE songs.artist_id = artists.id AND songs.album_id = albums.id
      //   AND (artists ==> '*${query}*' OR songs ==> '*${query}*' OR albums ==> '*${query}*');
      // `,
      //   { type: QueryTypes.SELECT }
      // );
      // // TODO: fix with proper typing
      // // eslint-disable-next-line @typescript-eslint/no-explicit-any
      // return result as any;

      const sqlQuery = `
      SELECT *
      FROM songs
      WHERE songs ==> '*${query}*';`;
      //   const options = {
      //     // model: Models.Song,
      //     // hasJoin: true,
      //     type: QueryTypes.SELECT,
      //     include: [
      //       {
      //         model: Models.Artist,
      //         as: 'artist',
      //       },
      //       {
      //         model: Models.Album,
      //         as: 'album',
      //       },
      //       {
      //         model: Models.User,
      //         as: 'usersFavourited',
      //       },
      //       {
      //         model: Models.Artist,
      //         as: 'supportingArtists',
      //       },
      //     ],
      //   };
      //   ctx.models.Song._validateIncludedElements(options);
      //   const result = await sequelizeInstance.query(sqlQuery, options);

      //   // TODO: fix with proper typing
      //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
      //   return result as any;

      const result = await ctx.models.Song.findAll({
        // attributes: [ctx.models.sequelize.literal(sqlQuery)],
        where: { id: sequelize.literal(sqlQuery) },
        include: [
          {
            model: Models.Artist,
            as: 'artist',
          },
          {
            model: Models.Album,
            as: 'album',
          },
          {
            model: Models.User,
            as: 'usersFavourited',
          },
          {
            model: Models.Artist,
            as: 'supportingArtists',
          },
        ],
      });
      return result;
    },
  },
  Mutation: {
    createNewSong: async (_parent, args, ctx): Promise<Models.Song> => {
      return await ctx.models.Song.create(args);
    },
    updateSongTitle: async (_parent, args, ctx): Promise<Models.Song> => {
      const { id, title } = args;
      const song = await ctx.models.Song.findByPk(id);
      return await song.update({ title });
    },
    deleteSong: async (_parent, args, ctx): Promise<Scalars['Int']> => {
      const { id } = args;
      return await ctx.models.Song.destroy({
        where: { id },
      });
    },
  },
};
