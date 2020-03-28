import {} from 'graphql';
import {Playlist, MutationResolvers, Scalars, QueryResolvers} from '../types';
import {Models} from 'orm';

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
    playlists: async (_parent, _args, ctx): Promise<Models.Playlist[]> => {
      return await ctx.models.Playlist.findAll();
    },
    playlistById: async (_parent, args, ctx): Promise<Models.Playlist> => {
      const {id} = args;
      const result = await ctx.models.Playlist.findByPk(id, {
        include: [
          {
            model: Models.Song,
            as: 'songs',
            include: [
              {
                model: Models.Artist,
                as: 'artist',
              },
              {model: Models.Album, as: 'album'},
            ],
          },
          {
            model: Models.User,
            as: 'users',
          },
        ],
      });
      return result;
    },
    playlistsByUserId: async (
      _parent,
      args,
      ctx,
    ): Promise<Models.Playlist[]> => {
      const {userId} = args;
      const result = await ctx.models.Playlist.findAll({
        include: [
          {
            model: Models.Song,
            as: 'songs',
            include: [
              {
                model: Models.Artist,
                as: 'artist',
              },
              {model: Models.Album, as: 'album'},
            ],
          },
          {
            model: Models.User,
            as: 'users',
            where: {
              id: userId,
            },
          },
        ],
      });
      return result;
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
        return {};
      }
    },
    addPlaylistSongs: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, songIds} = args;
        const records = songIds.map(sId => {
          return {playlistId: id, songId: sId};
        });
        await ctx.models.SongPlaylist.bulkCreate(records, {
          ignoreDuplicates: true,
        });
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
        const {id, songIds} = args;
        await ctx.models.SongPlaylist.destroy({
          where: {songId: songIds, playlistId: id},
        });
        return true;
      } catch (error) {
        return false;
      }
    },
    deletePlaylist: async (_parent, args, ctx): Promise<Scalars['Int']> => {
      const {id} = args;
      return await ctx.models.SongPlaylist.destroy({
        where: {playlistId: id},
      });
    },
  },
};
