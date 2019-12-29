// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';

export default {
  Query: {
    songs: async (parent, args, { models }) => {
      console.log('resolvers songs parent', parent);
      console.log('resolvers songs args', args);
      console.log('resolvers songs models', models);
      return await models.Song.findAll();
    },
    song: async (parent, { id }, { models }) => {
      console.log('resolvers song parent', parent);
      console.log('resolvers song id', id);
      console.log('resolvers song models', models);

      return await models.Song.findByPk(id);
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
