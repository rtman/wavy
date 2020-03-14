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
import {sequelize} from '../models';
import {QueryTypes} from 'sequelize';
import {TimeoutError} from 'bluebird';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
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
