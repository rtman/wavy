import {} from 'graphql';
import {
  User,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
} from '../types';
import {sequelize} from '../sequelize';
import {QueryTypes} from 'sequelize';
import {TimeoutError} from 'bluebird';
import {Models} from '../sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const userResolvers: Resolvers = {
  Query: {
    // users: async (_parent, _args): Promise<Query['users']> => {
    //   return await Models.User.findAll();
    // },
    // userById: async (_parent, args): Promise<Query['userById']> => {
    //   const {user_id} = args;
    //   const result = await Models.User.findByPk(user_id, {
    //     include: [
    //       {
    //         model: Models.Playlist,
    //         // where: {user_id: user_id},
    //         as: 'user_playlists',
    //         // required: false,
    //         attributes: ['playlist_id', 'playlist_title'],
    //       },
    //     ],
    //   });
    //   return result;
    // },
    // userByIdWithPlaylistsJoined: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Query['userByIdWithPlaylistsJoined']> => {
    //   const {id} = args;
    //   const result = await ctx.models.User.findByPk(id);
    //   const playListResult = await ctx.models.Playlist.findAll({
    //     where: {
    //       id: result.playlists,
    //     },
    //   });
    //   result.playlists = playListResult;
    //   return result;
    // },
  },
  Mutation: {
    // createUser: async (_parent, args): Promise<User> => {
    //   return await Models.User.create(args);
    // },
    //TODO: Update all returns to return the full data, for usage in onCompleted
    // updateFollowing: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {id, artistId} = args;
    //     const user = await User.findByPk(id);
    //     let newFollowing = [...user.user_following];
    //     //TODO: temp cast to number for testing, remove, make all ids uuid
    //     if (newFollowing.includes(Number(artistId))) {
    //       const index = newFollowing.indexOf(Number(artistId));
    //       newFollowing.splice(index, 1);
    //     } else {
    //       newFollowing.push(artistId);
    //     }
    //     await user.update({following: newFollowing});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    // updateFavourites: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {id, songId} = args;
    //     const user = await User.findByPk(id);
    //     let newFavourites = [...user.user_favourites];
    //     if (newFavourites.includes(Number(songId))) {
    //       const index = newFavourites.indexOf(Number(songId));
    //       newFavourites.splice(index, 1);
    //     } else {
    //       newFavourites.push(songId);
    //     }
    //     await user.update({favourites: newFavourites});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    // updatePlaylists: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {id, playlistId} = args;
    //     const user = await User.findByPk(id);
    //     let newPlaylists = [...user.playlists];
    //     if (newPlaylists.includes(Number(playlistId))) {
    //       const index = newPlaylists.indexOf(Number(playlistId));
    //       newPlaylists.splice(index, 1);
    //     } else {
    //       newPlaylists.push(playlistId);
    //     }
    //     await user.update({playlists: newPlaylists});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    // updateRecentlyPlayed: async (
    //   _parent,
    //   args,
    //   ctx,
    // ): Promise<Scalars['Boolean']> => {
    //   try {
    //     const {id, songId} = args;
    //     const user = await User.findByPk(id);
    //     let newRecentlyPlayed = [...user.recentlyPlayed];
    //     if (newRecentlyPlayed.includes(songId)) {
    //       const index = newRecentlyPlayed.indexOf(songId);
    //       newRecentlyPlayed.splice(index, 1);
    //     } else {
    //       newRecentlyPlayed.push(songId);
    //     }
    //     await user.update({recentlyPlayed: newRecentlyPlayed});
    //     return true;
    //   } catch (error) {
    //     return false;
    //   }
    // },
    // deleteUser: async (_parent, args): Promise<Scalars['Boolean']> => {
    //   const {id} = args;
    //   return await Models.User.destroy({
    //     where: {id},
    //   });
  },
};
