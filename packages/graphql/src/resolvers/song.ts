// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  QuerySongArgs,
  Song,
  MutationCreateNewSongArgs,
  MutationUpdateSongTitleArgs,
  MutationDeleteSongArgs,
  Scalars,
  Query
} from '../types';

export default {
  Query: {
    songs: async (_parent: any, _args: undefined, { models }: any): Promise<Query['songs']> => {
      return await models.Song.findAll();
    },
    song: async (_parent: any, { id }: QuerySongArgs, { models }: any): Promise<Query['song']> => {
      return await models.Song.findByPk(id);
    }
  },
  Mutation: {
    createNewSong: async (_parent: any, { title, artist }: MutationCreateNewSongArgs, { models }: any): Promise<Song> => {
      return await models.Song.create({
        title,
        artist
      });
    },
    updateSongTitle: async (_parent: any, { id, title }: MutationUpdateSongTitleArgs, { models }: any): Promise<Song> => {
      const song = await models.Song.findByPk(id);
      return await song.update({ title });
    },
    deleteSong: async (_parent: any, { id }: MutationDeleteSongArgs, { models }: any): Promise<Scalars['Boolean']> => {
      return await models.Song.destroy({
        where: { id }
      });
    }
  }
};
