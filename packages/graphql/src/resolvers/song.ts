// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';

export default {
  Query: {
    songs: async (parent, args, { models }) => {
      return await models.Song.findAll();
    },

    song: async (parent, { id }, { models }) => {
      return await models.Song.findById(id);
    }
  }
  // Mutation: {
  //   createNewSong: async (parent, { text }, { models }) => {
  //     return await models.Song.create({
  //       text
  //     });
  //   },

  //   deleteSong: async (parent, { id }, { models }) => {
  //     return await models.Song.destroy({
  //       where: {
  //         id
  //       }
  //     });
  //   },
  //   updateSong: async (parent, { id, text }, { models }) => {
  //     await models.Song.update(
  //       {
  //         text
  //       },
  //       {
  //         where: {
  //           id: id
  //         }
  //       }
  //     );
  //     const updatedSong = await models.Song.findByPk(id, {
  //       include
  //     });
  //     return updatedSong;
  //   }
  // }
};
