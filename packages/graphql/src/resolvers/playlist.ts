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
          playlist_id: ids,
        },
        include: [
          {
            model: Models.Song,
            as: 'playlist_songs',
            attributes: ['song_id', 'song_title', 'song_image', 'song_url'],
          },
          {
            model: Models.User,
            as: 'playlist_users',
            attributes: ['user_id', 'user_firstName', 'user_lastName'],
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
      const {
        playlist_id,
        playlist_title,
        playlist_description,
        playlist_image,
      } = args;
      if (playlist_title || playlist_description || playlist_image) {
        let update: UpdatePlaylistInfoUpdate = {};
        playlist_title ? (update.title = playlist_title) : null;
        playlist_description
          ? (update.description = playlist_description)
          : null;
        playlist_image ? (update.image = playlist_image) : null;
        const playlist = await Models.Playlist.findByPk(playlist_id);
        return await playlist.update(update);
      } else {
        return null;
      }
    },
    // addPlaylistSongs: async (_parent, args): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {playlist_id, song_ids} = args;
    //     const playlist = await Models.Playlist.findByPk(playlist_id);
    //     const newSongIds = [...playlist.playlist_songs, ...song_ids];
    //     await playlist.update({playlist_songs: newSongIds});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    // removePlaylistSongs: async (_parent, args): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {playlist_id, song_ids} = args;
    //     const playlist = await Models.Playlist.findByPk(playlist_id);
    //     let newSongIds = playlist.playlist_songs.filter(
    //       item => !song_ids.includes(item),
    //     );
    //     await playlist.update({playlist_songs: newSongIds});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    deletePlaylist: async (_parent, args): Promise<Scalars['Int']> => {
      const {playlist_id} = args;
      return await Models.Playlist.destroy({
        where: {playlist_id},
      });
    },
  },
};
