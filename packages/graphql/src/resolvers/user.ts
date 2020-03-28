import { MutationResolvers, Scalars, QueryResolvers } from '../types';

import { Models } from 'orm';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const userResolvers: Resolvers = {
  Query: {
    // users: async (_parent, _args): Promise<Models.User> => {
    //   return await Models.User.findAll();
    // },
    userById: async (_parent, args, ctx): Promise<Models.User> => {
      const { id } = args;
      const result = await ctx.models.User.findByPk(id, {
        include: [
          {
            model: Models.Playlist,
            as: 'playlists',
            include: [
              {
                model: Models.Song,
                as: 'songs',
                include: [
                  {
                    model: Models.Artist,
                    as: 'artist'
                  },
                  { model: Models.Album, as: 'album' }
                ]
              },
              { model: Models.User, as: 'users' }
            ]
          },
          {
            model: Models.Song,
            as: 'favourites',
            include: [
              {
                model: Models.Artist,
                as: 'artist'
              },
              { model: Models.Album, as: 'album' }
            ]
          },
          {
            model: Models.Artist,
            as: 'following'
          },
          {
            model: Models.Song,
            as: 'recentlyPlayed',
            include: [
              {
                model: Models.Artist,
                as: 'artist'
              },
              { model: Models.Album, as: 'album' }
            ]
          }
        ]
      });
      return result;
    }
  },
  Mutation: {
    createUser: async (_parent, args, ctx): Promise<Models.User> => {
      return await ctx.models.User.create(args);
    },
    // TODO: Update all returns to return the full data, for usage in onCompleted
    updateFollowing: async (
      _parent,
      args,
      ctx
    ): Promise<Scalars['Boolean']> => {
      try {
        const { id, artistId } = args;
        const following = await ctx.models.UserArtistFollowing.findOne({
          where: {
            userId: id,
            artistId
          }
        });
        if (following) {
          await following.destroy();
        } else {
          await ctx.models.UserArtistFollowing.create({ userId: id, artistId });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    updateFavourites: async (
      _parent,
      args,
      ctx
    ): Promise<Scalars['Boolean']> => {
      try {
        const { id, songId } = args;
        const favourite = await ctx.models.UserSongFavourites.findOne({
          where: {
            userId: id,
            songId
          }
        });
        if (favourite) {
          await favourite.destroy();
        } else {
          await ctx.models.UserSongFavourites.create({ userId: id, songId });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    updatePlaylists: async (
      _parent,
      args,
      ctx
    ): Promise<Scalars['Boolean']> => {
      try {
        const { id, playlistId } = args;
        const playlist = await ctx.models.UserPlaylist.findOne({
          where: {
            userId: id,
            playlistId
          }
        });
        if (playlist) {
          await playlist.destroy();
        } else {
          await ctx.models.UserPlaylist.create({ userId: id, playlistId });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    updateRecentlyPlayed: async (
      _parent,
      args,
      ctx
    ): Promise<Scalars['Boolean']> => {
      try {
        const { id, songId } = args;
        const song = await ctx.models.UserSongRecentlyPlayed.findOne({
          where: {
            userId: id,
            songId
          }
        });
        if (song) {
          await song.destroy();
        } else {
          await ctx.models.UserSongRecentlyPlayed.create({
            userId: id,
            songId
          });
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    deleteUser: async (_parent, args, ctx): Promise<Scalars['Int']> => {
      const { id } = args;
      return await ctx.models.User.destroy({
        where: { id }
      });
    }
  }
};
