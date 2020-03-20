// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  Artist,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
  SongsWithAlbumArtistsJoined,
  // SubscriptionResolvers
} from '../types';
import {sequelize} from '../sequelize.config';
import {QueryTypes} from 'sequelize';
import {TimeoutError} from 'bluebird';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const artistResolvers: Resolvers = {
  Query: {
    artists: async (_parent, _args, ctx): Promise<Query['artists']> => {
      return await ctx.models.Artist.findAll();
    },
    artistById: async (_parent, args, ctx): Promise<Query['artistById']> => {
      const {id} = args;
      const result = await ctx.models.Artist.findByPk(id);
      return result;
      // return await sequelize.query(
      //   `
      //   SELECT artists.id AS artist_id,
      //   artists.name,
      //   artists.image,
      //   songs.id AS song_id,
      //   songs.title AS song_title,
      //   songs.url AS song_url,
      //   albums.id AS album_id,
      //   albums.title AS album_title,
      //   albums.image AS album_image
      //   FROM artists, songs, albums
      //   WHERE artists.id = ${id} AND albums.id::VARCHAR = ANY (artists.album_ids) AND songs.id::VARCHAR = ANY (artists.song_ids);
      // `,
      //   {type: QueryTypes.SELECT},
      // );
    },
    artistsById: async (_parent, args, ctx): Promise<Query['artistsById']> => {
      const {ids} = args;
      return await ctx.models.Artist.findAll({
        where: {
          id: ids,
        },
      });
    },
    artistWithSongsAlbumsJoined: async (
      _parent,
      args,
      ctx,
    ): Promise<Query['artistWithSongsAlbumsJoined']> => {
      const {id} = args;
      const result = await sequelize.query<SongsWithAlbumArtistsJoined>(
        `
        SELECT artists.id AS artist_id,
        artists.name AS artist_name,
        artists.image AS artist_image,
        artists.description AS artist_description,
        songs.id AS song_id,
        songs.genres AS song_genres,
        songs.title AS song_title,
        songs.url AS song_url,
        songs.image AS song_image,
        songs.date AS song_date,
        albums.id AS album_id,
        albums.title AS album_title,
        albums.image AS album_image
        FROM songs INNER JOIN albums ON albums.id = songs.album_id INNER JOIN artists ON artists.id = songs.artist_id WHERE artists.id = ${id};
      `,
        {type: QueryTypes.SELECT},
      );
      // songs.createdAt AS song_createdAt,
      // songs.updatedAt AS song_updatedAt,

      let formattedResult = {
        name: '',
        image: '',
        createdAt: '',
        updatedAt: '',
        description: '',
        albums: [],
      };
      if (result.length > 0) {
        formattedResult.name = result[0].artist_name;
        formattedResult.image = result[0].artist_image;
        formattedResult.description = result[0].artist_description;
        formattedResult.createdAt = result[0].artist_createdAt;
        formattedResult.updatedAt = result[0].artist_updatedAt;

        result.forEach(item => {
          const albumIndex = formattedResult.albums.findIndex(
            album => item.album_id === album.id,
          );

          const song = {
            artist_id: item.artist_id,
            artist_name: formattedResult.name,
            album_id: item.album_id,
            album_title: item.album_title,
            genres: item.song_genres,
            url: item.song_url,
            title: item.song_title,
            image: item.song_image,
            date: item.song_date,
            id: item.song_id,
            createdAt: item.song_createdAt,
            updatedAt: item.song_updatedAt,
          };
          if (albumIndex >= 0) {
            formattedResult.albums[albumIndex].songs.push(song);
          } else {
            formattedResult.albums.push({
              title: item.album_title,
              image: item.album_image,
              id: item.album_id,
              createdAt: item.album_createdAt,
              updatedAt: item.album_updatedAt,
              songs: [song],
            });
          }
        });
      }
      return formattedResult;
    },
    searchArtists: async (_parent, args): Promise<Query['searchArtists']> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM artists AS artist WHERE artist ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
      // query with LEFT JOIN
      // return await sequelize.query(
      //   `SELECT artists.*, artists.name FROM artists LEFT JOIN artists ON ("artist_id" = artists.id) WHERE artists ==> '${query}';`,
      //   {type: QueryTypes.SELECT},
      // );
    },
  },
  Mutation: {
    createNewArtist: async (_parent, args, ctx): Promise<Artist> => {
      return await ctx.models.artist.create(args);
    },
    deleteArtist: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.artist.destroy({
        where: {id},
      });
    },
  },
};
