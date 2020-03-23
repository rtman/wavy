// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {MutationResolvers, Scalars, QueryResolvers, Query} from '../types';
import {sequelize, Models} from '../sequelize';
import {QueryTypes} from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const artistResolvers: Resolvers = {
  Query: {
    artists: async (_parent, _args): Promise<Query['artists']> => {
      return await Models.Artist.findAll();
    },
    artistById: async (_parent, args): Promise<Models.Artist> => {
      const {id} = args;
      const result = await Models.Artist.findByPk(id, {
        include: [
          {
            model: Models.Album,
            as: 'artist_albums',
            attributes: ['album_id', 'album_title', 'album_image'],
          },
          {
            model: Models.Song,
            as: 'artist_songs',
            attributes: ['song_id', 'song_title', 'song_url', 'song_image'],
          },
          {
            model: Models.User,
            as: 'artist_users_following',
            attributes: ['user_id'],
          },
        ],
      });
      return result;
    },
    artistsById: async (_parent, args): Promise<Query['artistsById']> => {
      const {ids} = args;
      return await Models.Artist.findAll({
        where: {
          id: ids,
        },
      });
    },
    searchArtists: async (_parent, args): Promise<Query['searchArtists']> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM artists AS artist WHERE artist ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
    },
  },
  Mutation: {
    createNewArtist: async (_parent, args): Promise<Models.Artist> => {
      return await Models.Artist.create(args);
    },
    deleteArtist: async (_parent, args, {models}): Promise<Scalars['Int']> => {
      const {artist_id} = args;
      return await models.artist.destroy({
        where: {artist_id},
      });
    },
  },
};
