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
  ArtistSongs,
  // SubscriptionResolvers
} from '../types';
import {sequelize} from '../models';
import {QueryTypes} from 'sequelize';
import song from '../models/song';
import album from '../models/album';
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
    artist: async (_parent, args, ctx): Promise<Query['artist']> => {
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
    artistAll: async (_parent, args, ctx): Promise<Query['artistAll']> => {
      const {id} = args;
      const result = await sequelize.query<ArtistSongs>(
        `
        SELECT artists.id AS artist_id,
        artists.name,
        artists.image,
        songs.id AS song_id,
        songs.genres,
        songs.title AS song_title,
        songs.url AS song_url,
        songs.duration,
        songs.image AS song_image,
        songs.date AS song_date,
        albums.id AS album_id,
        albums.title AS album_title,
        albums.image AS album_image
        FROM artists, songs, albums
        WHERE artists.id = ${id} AND albums.id::VARCHAR = ANY (artists.album_ids) AND songs.id::VARCHAR = ANY (artists.song_ids);
      `,
        {type: QueryTypes.SELECT},
      );

      // songs.createdAt AS song_createdAt,
      // songs.updatedAt AS song_updatedAt,

      let formattedResult = {
        name: '',
        image: '',
        albums: [],
      };
      if (result.length > 0) {
        formattedResult.name = result[0].name;
        formattedResult.image = result[0].image;

        result.forEach(item => {
          const albumIndex = formattedResult.albums.findIndex(
            album => item.album_id === album.id,
          );
          const song = {
            artist_id: item.artist_id,
            album_id: item.album_id,
            genres: item.genres,
            url: item.song_url,
            title: item.song_title,
            image: item.song_image,
            duration: item.duration,
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
