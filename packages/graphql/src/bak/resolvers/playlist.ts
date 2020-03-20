import {} from 'graphql';
import {
  Playlist,
  MutationResolvers,
  Scalars,
  SongsWithAlbumArtistsJoined,
  Song,
  QueryResolvers,
  Query,
} from '../types';
import {sequelize} from '../sequelize';
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
    playlists: async (_parent, _args, ctx): Promise<Query['playlists']> => {
      return await ctx.models.Playlist.findAll();
    },
    playlistsByIds: async (
      _parent,
      args,
      ctx,
    ): Promise<Query['playlistsByIds']> => {
      const {ids} = args;
      const result = await sequelize.query<Playlist>(
        `SELECT *
         FROM playlists
         WHERE id = ANY ('{${ids}}');`,
        {type: QueryTypes.SELECT},
      );
      return result;
    },
    playlistsByUserId: async (
      _parent,
      args,
      ctx,
    ): Promise<Query['playlistsByUserId']> => {
      const {userId} = args;
      return await sequelize.query<Playlist>(
        `SELECT *
         FROM playlists
         WHERE '${userId}' = ANY (user_ids);`,
        {type: QueryTypes.SELECT},
      );
    },
    playlistByIdWithSongs: async (
      _parent,
      args,
      ctx,
    ): Promise<Query['playlistByIdWithSongs']> => {
      const {id} = args;

      const playlistResult = await ctx.models.Playlist.findByPk(id);
      const playlistData = playlistResult?.dataValues;

      const songsResult = await sequelize.query<Song>(
        `SELECT songs.*,
        artists.name AS artist_name,
        artists.id AS artist_id,
        albums.id AS album_id,
        albums.title AS album_title
        FROM songs INNER JOIN albums ON albums.id = songs.album_id INNER JOIN artists ON artists.id = songs.artist_id 
        WHERE songs.id = ANY ('{${playlistData.songs}}');`,
        {type: QueryTypes.SELECT},
      );

      const formattedResult = {
        title: playlistData.title,
        description: playlistData.description,
        image: playlistData.image,
        user_ids: playlistData.user_ids,
        songs: songsResult,
      };

      return formattedResult;
    },
  },
  Mutation: {
    createPlaylist: async (_parent, args, ctx): Promise<Playlist> => {
      return await ctx.models.Playlist.create(args);
    },
    updatePlaylistInfo: async (_parent, args, ctx): Promise<Playlist> => {
      //TODO: if arg is optional, probably just pass args object instead of processing
      const {id, title, description, image} = args;
      if (title || description || image) {
        let update: UpdatePlaylistInfoUpdate = {};
        title ? (update.title = title) : null;
        description ? (update.description = description) : null;
        image ? (update.image = image) : null;
        const playlist = await ctx.models.Playlist.findByPk(id);

        return await playlist.update(update);
      } else {
        return null;
      }
    },
    addPlaylistSongs: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, song_ids} = args;
        const playlist = await ctx.models.Playlist.findByPk(id);
        const newSongIds = [...playlist.songs, ...song_ids];
        await playlist.update({songs: newSongIds});

        return true;
      } catch (error) {
        return false;
      }
    },
    removePlaylistSongs: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, song_ids} = args;
        const playlist = await ctx.models.Playlist.findByPk(id);
        let newSongIds = playlist.songs.filter(
          item => !song_ids.includes(item),
        );
        await playlist.update({songs: newSongIds});

        return true;
      } catch (error) {
        return false;
      }
    },
    deletePlaylist: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.playlist.destroy({
        where: {id},
      });
    },
  },
};
