// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {MutationResolvers, Scalars, QueryResolvers, Query} from '../types';
import {Models, sequelize} from '../sequelize';
import {QueryTypes} from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const songResolvers: Resolvers = {
  Query: {
    songs: async (_parent, _args): Promise<Query['songs']> => {
      return await Models.Song.findAll();
    },
    songById: async (_parent, args): Promise<Models.Song> => {
      const {id} = args;
      return await Models.Song.findByPk(id, {
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
    searchSongs: async (_parent, args): Promise<Query['searchSongs']> => {
      const {query} = args;
      const result = await sequelize.query(
        `
        SELECT songs.id,
        songs.title,
        songs.genres,
        songs.duration,
        songs.url,
        songs.image,
        artists.id AS artist_id,
        artists.name AS artist_name,
        albums.id AS album_id,
        albums.title AS album_title
        FROM songs, artists, albums
        WHERE songs.artist_id = artists.id AND songs.album_id = albums.id
        AND (artists ==> '*${query}*' OR songs ==> '*${query}*' OR albums ==> '*${query}*');
      `,
        {type: QueryTypes.SELECT},
      );
      return result;
    },
  },
  Mutation: {
    createNewSong: async (_parent, args): Promise<Models.Song> => {
      return await Models.Song.create(args);
    },
    updateSongTitle: async (_parent, args): Promise<Models.Song> => {
      const {id, title} = args;
      const song = await Models.Song.findByPk(id);
      return await song.update({title});
    },
    deleteSong: async (_parent, args): Promise<Scalars['Int']> => {
      const {id} = args;
      return await Models.Song.destroy({
        where: {id},
      });
    },
  },
};
