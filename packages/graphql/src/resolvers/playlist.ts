import {} from 'graphql';
import {
  Playlist,
  MutationResolvers,
  Scalars,
  SongsWithAlbumArtistsJoined,
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

      // const playlistResult = await sequelize.query<Playlist>(
      //   `SELECT *
      //    FROM playlists
      //    WHERE id = ${id}`,
      //   {type: QueryTypes.SELECT},
      // );
      const playlistResult = await ctx.models.Song.findByPk(id);

      const songsResult = await sequelize.query<SongsWithAlbumArtistsJoined>(
        `SELECT songs.*,
        artists.name AS artist_name,
        albums.title AS album_title
        FROM songs INNER JOIN albums ON albums.id = songs.album_id INNER JOIN artists ON artists.id = songs.artist_id 
        WHERE songs.id = ANY ('{${playlistResult[0].songs}}');`,
        {type: QueryTypes.SELECT},
      );

      const formattedResult = {
        title: playlistResult[0].title,
        description: playlistResult[0].description,
        image: playlistResult[0].image,
        user_ids: playlistResult[0].user_ids,
        songs: [],
      };

      const songsList = songsResult.map(s => {
        return {
          title: s.song_title,
          id: s.song_id,
          genres: s.song_genres,
          url: s.song_url,
          image: s.song_image,
          date: s.song_date,
        };
      });
      formattedResult.songs = songsList;
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
