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
      const {song_id} = args;
      return await Models.Song.findByPk(song_id, {
        include: [
          {
            model: Models.Artist,
            as: 'song_artist',
            attributes: ['artist_id', 'artist_name', 'artist_image'],
          },
          {
            model: Models.Album,
            as: 'song_album',
            attributes: ['album_id', 'album_title', 'album_image'],
          },
          {
            model: Models.User,
            as: 'song_users_favourited',
            attributes: ['user_id', 'user_firstName', 'user_lastName'],
          },
          {
            model: Models.Artist,
            as: 'song_supporting_artists',
            attributes: ['artist_id', 'artist_name', 'artist_image'],
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
      const {song_title, song_id} = args;
      const song = await Models.Song.findByPk(song_id);
      return await song.update({song_title});
    },
    deleteSong: async (_parent, args): Promise<Scalars['Int']> => {
      const {song_id} = args;
      return await Models.Song.destroy({
        where: {song_id},
      });
    },
  },
};
