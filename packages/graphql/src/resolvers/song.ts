// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  Song,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query
  // SubscriptionResolvers
} from '../types';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const songResolvers: Resolvers = {
  Query: {
    songs: async (_parent, _args, ctx): Promise<Query['songs']> => {
      return await ctx.models.Song.findAll();
    },
    song: async (_parent, args, ctx): Promise<Query['song']> => {
      const { id } = args;
      return await ctx.models.Song.findByPk(id);
    }
  },
  Mutation: {
    createNewSong: async (_parent, args, ctx): Promise<Song> => {
      const { artist, title } = args;
      return await ctx.models.Song.create({
        title,
        artist
      });
    },
    updateSongTitle: async (_parent, args, ctx): Promise<Song> => {
      const { title, id } = args;
      const song = await ctx.models.Song.findByPk(id);
      return await song.update({ title });
    },
    deleteSong: async (_parent, args, { models }): Promise<Scalars['Boolean']> => {
      const { id } = args;
      return await models.Song.destroy({
        where: { id }
      });
    }
  }
};
