// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import { MutationResolvers, Scalars, QueryResolvers } from '../types';
import { sequelize, Models } from 'orm';
import { QueryTypes } from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const artistResolvers: Resolvers = {
  Query: {
    artists: async (_parent, _args, ctx): Promise<Models.Artist[]> => {
      return await ctx.models.Artist.findAll();
    },
    artistById: async (_parent, args, ctx): Promise<Models.Artist> => {
      const { id } = args;
      const result = await ctx.models.Artist.findByPk(id, {
        include: [
          {
            model: Models.Album,
            as: 'albums',
            include: [
              {
                model: Models.Song,
                as: 'songs',
                include: [
                  {
                    model: Models.Artist,
                    as: 'artist'
                  },
                  {
                    model: Models.Album,
                    as: 'album'
                  }
                ]
              }
            ]
          },
          {
            model: Models.Song,
            as: 'songs',
            include: [
              {
                model: Models.Artist,
                as: 'artist'
              },
              {
                model: Models.Album,
                as: 'album'
              }
            ]
          },
          {
            model: Models.User,
            as: 'usersFollowing'
          }
        ]
      });
      return result;
    },
    artistsById: async (_parent, args, ctx): Promise<Models.Artist[]> => {
      const { ids } = args;
      return await ctx.models.Artist.findAll({
        where: {
          id: ids
        }
      });
    },
    searchArtists: async (_parent, args, _ctx): Promise<Models.Artist[]> => {
      const { query } = args;
      return await sequelize.query(
        `SELECT * FROM artists AS artist WHERE artist ==> '${query}';`,
        { type: QueryTypes.SELECT }
      );
    }
  },
  Mutation: {
    createNewArtist: async (_parent, args, ctx): Promise<Models.Artist> => {
      return await ctx.models.Artist.create(args);
    },
    deleteArtist: async (
      _parent,
      args,
      { models }
    ): Promise<Scalars['Int']> => {
      const { id } = args;
      return await models.artist.destroy({
        where: { id }
      });
    }
  }
};
