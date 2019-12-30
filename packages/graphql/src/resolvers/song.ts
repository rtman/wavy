// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';

export default {
  Query: {
    songs: async (parent, args, { models }) => {
      return await models.Song.findAll();
    },
    song: async (parent, { id }, { models }) => {
      return await models.Song.findByPk(id);
    }
  },
  Mutation: {
    createNewSong: async (parent, { title, artist }, { models }) => {
      return await models.Song.create({
        title,
        artist
      });
    },
    updateSongTitle: async (parent, { id, title }, { models }) => {
      const song = await models.Song.findByPk(id);
      return await song.update({ title });
    },
    deleteSong: async (parent, { id }, { models }) => {
      return await models.Song.destroy({
        where: { id }
      });
    }
  }
};
