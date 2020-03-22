import {} from 'graphql';
import {
  Playlist,
  MutationResolvers,
  Scalars,
  // SongsWithAlbumArtistsJoined,
  // Song,
  QueryResolvers,
  Query,
} from '../types';
import {Models, sequelize} from '../sequelize';
import {QueryTypes} from 'sequelize';
import {TimeoutError} from 'bluebird';

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
    // playlists: async (_parent, _args): Promise<Query['playlists']> => {
    //   return await Models.Playlist.findAll();
    // },
    // playlistsByIds: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Query['playlistsByIds']> => {
    //   const {ids} = args;
    //   const result = await sequelize.query<Playlist>(
    //     `SELECT *
    //      FROM playlists
    //      WHERE id = ANY ('{${ids}}');`,
    //     {type: QueryTypes.SELECT},
    //   );
    //   return result;
    // },
    // playlistsByUserId: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Query['playlistsByUserId']> => {
    //   const {userId} = args;
    //   return await sequelize.query<Playlist>(
    //     `SELECT *
    //      FROM playlists
    //      WHERE '${userId}' = ANY (user_ids);`,
    //     {type: QueryTypes.SELECT},
    //   );
    // },
    // playlistByIdWithSongs: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Query['playlistByIdWithSongs']> => {
    //   const {id} = args;
    //   const playlistResult = await ctx.models.Playlist.findByPk(id);
    //   const playlistData = playlistResult?.dataValues;
    //   const songsResult = await sequelize.query<Song>(
    //     `SELECT songs.*,
    //     artists.name AS artist_name,
    //     artists.id AS artist_id,
    //     albums.id AS album_id,
    //     albums.title AS album_title
    //     FROM songs INNER JOIN albums ON albums.id = songs.album_id INNER JOIN artists ON artists.id = songs.artist_id
    //     WHERE songs.id = ANY ('{${playlistData.songs}}');`,
    //     {type: QueryTypes.SELECT},
    //   );
    //   const formattedResult = {
    //     title: playlistData.title,
    //     description: playlistData.description,
    //     image: playlistData.image,
    //     user_ids: playlistData.user_ids,
    //     songs: songsResult,
    //   };
    //   return formattedResult;
    // },
  },
  Mutation: {
    // createPlaylist: async (_parent, args): Promise<Playlist> => {
    //   return await Models.Playlist.create(args);
    // },
    // updatePlaylistInfo: async (_parent, args): Promise<Playlist> => {
    //   //TODO: if arg is optional, probably just pass args object instead of processing
    //   const {
    //     playlist_id,
    //     playlist_title,
    //     playlist_description,
    //     playlist_image,
    //   } = args;
    //   if (playlist_title || playlist_description || playlist_image) {
    //     let update: UpdatePlaylistInfoUpdate = {};
    //     playlist_title ? (update.title = playlist_title) : null;
    //     playlist_description
    //       ? (update.description = playlist_description)
    //       : null;
    //     playlist_image ? (update.image = playlist_image) : null;
    //     const playlist = await Models.Playlist.findByPk(playlist_id);
    //     return await playlist.update(update);
    //   } else {
    //     return null;
    //   }
    // },
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
    // deletePlaylist: async (_parent, args): Promise<Scalars['Boolean']> => {
    //   const {playlist_id} = args;
    //   const result = await Models.Playlist.destroy({
    //     where: {playlist_id},
    //   });
    //   if (result) {
    //     return true;
    //   }
    //   return false;
    // },
  },
};
