import {} from 'graphql';
import {
  User,
  MutationResolvers,
  Scalars,
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

export const userResolvers: Resolvers = {
  Query: {
    users: async (_parent, _args, ctx): Promise<Query['users']> => {
      return await ctx.models.User.findAll();
    },
    userById: async (_parent, args, ctx): Promise<Query['userById']> => {
      const {id} = args;
      const result = await ctx.models.User.findByPk(id);
      return result;
    },
  },
  Mutation: {
    createUser: async (_parent, args, ctx): Promise<User> => {
      return await ctx.models.User.create(args);
    },
    updateFollowing: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, artistId} = args;
        const user = await ctx.models.User.findByPk(id);
        let newFollowing = [...user.following];
        if (newFollowing.includes(artistId)) {
          const index = newFollowing.indexOf(artistId);
          newFollowing.splice(index, 1);
        } else {
          newFollowing.push(artistId);
        }
        await user.update({following: newFollowing});
        return true;
      } catch (error) {
        return false;
      }
    },
    updateFavourites: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, songId} = args;
        const user = await ctx.models.User.findByPk(id);
        let newFavourites = [...user.favourites];
        if (newFavourites.includes(songId)) {
          const index = newFavourites.indexOf(songId);
          newFavourites.splice(index, 1);
        } else {
          newFavourites.push(songId);
        }
        await user.update({favourites: newFavourites});
        return true;
      } catch (error) {
        return false;
      }
    },
    updatePlaylists: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, playlistId} = args;
        const user = await ctx.models.User.findByPk(id);
        let newPlaylists = [...user.playlists];
        if (newPlaylists.includes(playlistId)) {
          const index = newPlaylists.indexOf(playlistId);
          newPlaylists.splice(index, 1);
        } else {
          newPlaylists.push(playlistId);
        }
        await user.update({playlists: newPlaylists});
        return true;
      } catch (error) {
        return false;
      }
    },
    updateRecentlyPlayed: async (
      _parent,
      args,
      ctx,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, songId} = args;
        const user = await ctx.models.User.findByPk(id);
        let newRecentlyPlayed = [...user.recentlyPlayed];
        if (newRecentlyPlayed.includes(songId)) {
          const index = newRecentlyPlayed.indexOf(songId);
          newRecentlyPlayed.splice(index, 1);
        } else {
          newRecentlyPlayed.push(songId);
        }
        await user.update({recentlyPlayed: newRecentlyPlayed});
        return true;
      } catch (error) {
        return false;
      }
    },
    deleteUser: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.user.destroy({
        where: {id},
      });
    },
  },
};
