import {MutationResolvers, Scalars, QueryResolvers, Query} from '../types';

import {Models} from '../sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const userResolvers: Resolvers = {
  Query: {
    // users: async (_parent, _args): Promise<Models.User> => {
    //   return await Models.User.findAll();
    // },
    userById: async (_parent, args): Promise<Query['userById']> => {
      const {id} = args;
      const result = await Models.User.findByPk(id, {
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
                    as: 'artist',
                  },
                  {model: Models.Album, as: 'album'},
                ],
              },
              {model: Models.User, as: 'users'},
            ],
          },
          {
            model: Models.Song,
            as: 'favourites',
            include: [
              {
                model: Models.Artist,
                as: 'artist',
              },
              {model: Models.Album, as: 'album'},
            ],
          },
          {
            model: Models.Artist,
            as: 'following',
          },
          {
            model: Models.Song,
            as: 'recentlyPlayed',
            include: [
              {
                model: Models.Artist,
                as: 'artist',
              },
              {model: Models.Album, as: 'album'},
            ],
          },
        ],
      });
      return result;
    },
  },
  Mutation: {
    createUser: async (_parent, args): Promise<Models.User> => {
      return await Models.User.create(args);
    },
    // TODO: Update all returns to return the full data, for usage in onCompleted
    updateFollowing: async (_parent, args): Promise<Scalars['Boolean']> => {
      try {
        const {id, artistId} = args;
        const following = await Models.UserArtistFollowing.findOne({
          where: {
            userId: id,
            artistId,
          },
        });
        if (following) {
          await following.destroy();
        } else {
          await Models.UserArtistFollowing.create({userId: id, artistId});
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    updateFavourites: async (_parent, args): Promise<Scalars['Boolean']> => {
      try {
        const {id, songId} = args;
        const favourite = await Models.UserSongFavourites.findOne({
          where: {
            userId: id,
            songId,
          },
        });
        if (favourite) {
          await favourite.destroy();
        } else {
          await Models.UserSongFavourites.create({userId: id, songId});
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    updatePlaylists: async (_parent, args): Promise<Scalars['Boolean']> => {
      try {
        const {id, playlistId} = args;
        const playlist = await Models.UserPlaylist.findOne({
          where: {
            userId: id,
            playlistId,
          },
        });
        if (playlist) {
          await playlist.destroy();
        } else {
          await Models.UserPlaylist.create({userId: id, playlistId});
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    updateRecentlyPlayed: async (
      _parent,
      args,
    ): Promise<Scalars['Boolean']> => {
      try {
        const {id, songId} = args;
        const song = await Models.UserSongRecentlyPlayed.findOne({
          where: {
            userId: id,
            songId,
          },
        });
        if (song) {
          await song.destroy();
        } else {
          await Models.UserSongRecentlyPlayed.create({userId: id, songId});
        }
        return true;
      } catch (error) {
        return false;
      }
    },
    deleteUser: async (_parent, args, ctx): Promise<Scalars['Int']> => {
      const {id} = args;
      return await Models.User.destroy({
        where: {id},
      });
    },
  },
};
