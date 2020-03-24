import {} from 'graphql';
import {
  Playlist,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
} from '../types';
import {Models} from '../sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

interface UpdatePlaylistInfoUpdate {
  title?: string;
  description?: string;
  image?: string;
}

export const playlistResolvers: Resolvers = {
  Query: {
    playlists: async (_parent, _args): Promise<Query['playlists']> => {
      return await Models.Playlist.findAll();
    },
    playlistsByIds: async (_parent, args): Promise<Query['playlistsByIds']> => {
      const {ids} = args;
      const result = await Models.Playlist.findAll({
        where: {
          id: ids,
        },
        include: [
          {
            model: Models.Song,
            as: 'songs',
            attributes: ['id', 'title', 'image', 'url'],
          },
          {
            model: Models.User,
            as: 'users',
            attributes: ['id', 'firstName', 'lastName'],
          },
        ],
      });
      return result;
    },
  },
  Mutation: {
    createPlaylist: async (_parent, args): Promise<Playlist> => {
      return await Models.Playlist.create(args);
    },
    updatePlaylistInfo: async (_parent, args): Promise<Playlist> => {
      //TODO: if arg is optional, probably just pass args object instead of processing
      const {id, title, description, image} = args;
      if (title || description || image) {
        let update: UpdatePlaylistInfoUpdate = {};
        title ? (update.title = title) : null;
        description ? (update.description = description) : null;
        image ? (update.image = image) : null;
        const playlist = await Models.Playlist.findByPk(id);
        return await playlist.update(update);
      } else {
        return null;
      }
    },
    // addPlaylistSongs: async (_parent, args): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {id, song_ids} = args;
    //     const playlist = await Models.Playlist.findByPk(id);
    //     const newSongIds = [...playlist.songs, ...song_ids];
    //     await playlist.update({songs: newSongIds});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    // removePlaylistSongs: async (_parent, args): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {id, song_ids} = args;
    //     const playlist = await Models.Playlist.findByPk(id);
    //     let newSongIds = playlist.songs.filter(
    //       item => !song_ids.includes(item),
    //     );
    //     await playlist.update({songs: newSongIds});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    deletePlaylist: async (_parent, args): Promise<Scalars['Int']> => {
      const {id} = args;
      return await Models.Playlist.destroy({
        where: {id},
      });
    },
  },
};
