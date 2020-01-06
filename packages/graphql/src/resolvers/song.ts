// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';

export default {
  Query: {
    songs: async (_parent: any, _args: any, { models }: any) => {
      return await models.Song.findAll();
    },
    song: async (_parent: any, { id }: any, { models }: any) => {
      return await models.Song.findByPk(id);
    }
  },
  Mutation: {
    createNewSong: async (_parent: any, { title, artist }: any, { models }: any) => {
      return await models.Song.create({
        title,
        artist
      });
    },
    updateSongTitle: async (_parent: any, { id, title }: any, { models }: any) => {
      const song = await models.Song.findByPk(id);
      return await song.update({ title });
    },
    deleteSong: async (_parent: any, { id }: any, { models }: any) => {
      return await models.Song.destroy({
        where: { id }
      });
    }
  }
};
