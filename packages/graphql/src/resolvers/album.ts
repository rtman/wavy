// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  Album,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
  AlbumSongsJoined,
  // SubscriptionResolvers
} from '../types';
import {sequelize} from '../models';
import {QueryTypes} from 'sequelize';
import {format} from 'url';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const albumResolvers: Resolvers = {
  Query: {
    albums: async (_parent, _args, ctx): Promise<Query['albums']> => {
      return await ctx.models.Album.findAll();
    },
    album: async (_parent, args, ctx): Promise<Query['album']> => {
      const {id} = args;
      return await ctx.models.Album.findByPk(id);
    },
    albumAll: async (_parent, args, ctx): Promise<Query['albumAll']> => {
      const {id} = args;
      const result = await sequelize.query<AlbumSongsJoined>(
        `
        SELECT albums.id AS album_id,
        albums.title AS album_title,
        albums.image AS album_image,
        albums.description AS album_description,        
        artists.id AS artist_id,
        artists.name AS artist_name,
        artists.image AS artist_image,
        songs.id AS song_id,
        songs.genres,
        songs.title AS song_title,
        songs.url AS song_url,
        songs.duration,
        songs.image AS song_image,
        songs.date AS song_date
        FROM songs INNER JOIN albums ON albums.id = songs.album_id INNER JOIN artists ON artists.id = songs.artist_id WHERE albums.id = ${id};
      `,
        {type: QueryTypes.SELECT},
      );

      // songs.createdAt AS song_createdAt,
      // songs.updatedAt AS song_updatedAt,

      let formattedResult = {
        title: '',
        image: '',
        description: '',
        artist_name: '',
        artist_id: '',
        songs: [],
      };
      if (result.length > 0) {
        formattedResult.title = result[0].album_title;
        formattedResult.image = result[0].album_image;
        formattedResult.description = result[0].album_description;
        formattedResult.artist_name = result[0].artist_name;
        formattedResult.artist_id = result[0].artist_id;

        result.forEach(item => {
          const song = {
            artist_id: item.artist_id,
            artist_name: formattedResult.artist_name,
            album_id: item.album_id,
            album_title: formattedResult.title,
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
          formattedResult.songs.push(song);
        });
      }
      return formattedResult;
    },
    searchAlbums: async (_parent, args): Promise<Query['searchAlbums']> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM albums AS album WHERE album ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
      // query with LEFT JOIN
      // return await sequelize.query(
      //   `SELECT albums.*, albums.name FROM albums LEFT JOIN albums ON ("album_id" = albums.id) WHERE albums ==> '${query}';`,
      //   {type: QueryTypes.SELECT},
      // );
    },
  },
  Mutation: {
    createNewAlbum: async (_parent, args, ctx): Promise<Album> => {
      return await ctx.models.album.create(args);
    },
    deleteAlbum: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.album.destroy({
        where: {id},
      });
    },
  },
};
