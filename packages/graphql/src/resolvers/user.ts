import {} from 'graphql';
import {
  // User,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
} from '../types';
import {sequelize} from '../sequelize';
import {QueryTypes} from 'sequelize';
import {TimeoutError} from 'bluebird';
import {Playlist, User} from '../models';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const userResolvers: Resolvers = {
  Query: {
    users: async (_parent, _args, ctx): Promise<Query['users']> => {
      return await User.findAll();
    },
    userById: async (_parent, args, ctx): Promise<Query['userById']> => {
      const {id} = args;
      const result = await User.findByPk(id);
      return result;
    },
    userByIdWithPlaylists: async (
      _parent,
      args,
      ctx,
    ): Promise<Query['userByIdWithPlaylists']> => {
      const {id} = args;
      const result = await User.findByPk(id, {
        raw: false,
        include: [
          {
            model: Playlist,
            where: {user_id: id},
            as: 'user_playlists',
            required: false,
            attributes: ['playlist_id', 'playlist_title'],
          },
        ],
      });

      // const result = await sequelize.query(
      //   `SELECT "User"."user_id", "User"."user_firstName", "User"."user_lastName", "User"."user_email", "User"."user_password", "User"."user_favourites", "User"."user_following", "User"."user_recentlyPlayed", "User"."user_createdAt", "User"."user_updatedAt", "user_playlists"."playlist_id" AS "user_playlists.playlist_id", "user_playlists"."playlist_title" AS "user_playlists.playlist_title", "user_playlists->UserPlaylist"."user_id" AS "user_playlists.UserPlaylist.user_id", "user_playlists->UserPlaylist"."playlist_id" AS "user_playlists.UserPlaylist.playlist_id", "user_playlists->UserPlaylist"."createdAt" AS "user_playlists.UserPlaylist.createdAt", "user_playlists->UserPlaylist"."updatedAt" AS "user_playlists.UserPlaylist.updatedAt" FROM "users" AS "User" LEFT OUTER JOIN ( "user_playlist" AS "user_playlists->UserPlaylist" INNER JOIN "playlists" AS "user_playlists" ON "user_playlists"."playlist_id" = "user_playlists->UserPlaylist"."playlist_id") ON "User"."user_id" = "user_playlists->UserPlaylist"."user_id"  WHERE "User"."user_id" = 'H2qAdR0c81c3xGFk5PmgDXKAjis1';`,
      //   {type: QueryTypes.SELECT},
      // );

      console.log('result', result);

      return {};
    },
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
    createUser: async (_parent, args, ctx): Promise<User> => {
      return await User.create(args);
    },
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
