// import jwt from 'jsonwebtoken';
// import { combineResolvers } from 'graphql-resolvers';
// import { AuthenticationError, UserInputError } from 'apollo-server';
import {} from 'graphql';
import {
  Song,
  MutationResolvers,
  Scalars,
  QueryResolvers,
  Query,
  // SubscriptionResolvers
} from '../types';
import {sequelize} from '../models';
import {QueryTypes} from 'sequelize';

interface Resolvers {
  Query: QueryResolvers;
  Mutation: MutationResolvers;
}

export const songResolvers: Resolvers = {
  Query: {
    songs: async (_parent, _args, ctx): Promise<Query['songs']> => {
      return await ctx.models.Song.findAll();
    },
    song: async (_parent, args, ctx): Promise<Query['song']> => {
      const {id} = args;
      return await ctx.models.Song.findByPk(id);
    },
    searchSongs: async (_parent, args): Promise<Query['searchSongs']> => {
      const {query} = args;
      return await sequelize.query(
        `SELECT * FROM songs AS song WHERE song ==> '${query}';`,
        {type: QueryTypes.SELECT},
      );
      // query with LEFT JOIN
      // return await sequelize.query(
      //   `SELECT songs.*, artists.name FROM songs LEFT JOIN artists ON ("artist_id" = artists.id) WHERE songs ==> '${query}';`,
      //   {type: QueryTypes.SELECT},
      // );
    },
    searchSongsWithArtistsAlbums: async (
      _parent,
      args,
    ): Promise<Query['searchSongsWithArtistsAlbums']> => {
      const {query} = args;
      // const result = await sequelize.query(
      //
      // searches artist table but doesnt show the data/columns from there
      // SELECT songs.* FROM songs
      // WHERE songs ==> dsl.join('artist_id', 'idxArtists', 'id', '*${query}*');`,
      //   {type: QueryTypes.SELECT},
      // );

      // doesnt work yet, shows duplicates of everything
      // const result = await sequelize.query(
      //   `
      //   SELECT songs.*, artists.*
      //   FROM songs, artists
      //   WHERE songs  ==> dsl.join('artist_id', 'idxArtists', 'id', '*Raf*');
      // `,
      //   {type: QueryTypes.SELECT},
      // );
      const result = await sequelize.query(
        `
        SELECT songs.id AS song_id,
        songs.title,
        songs.genres,
        songs.duration,
        songs.url,
        songs.image,
        artists.id AS artist_id,
        artists.name AS artist_name,
        albums.id AS album_id,
        albums.title AS album_title
        FROM songs, artists, albums 
        WHERE songs.artist_id = artists.id AND songs.album_id = albums.id 
        AND (artists ==> '*${query}*' OR songs ==> '*${query}*' OR albums ==> '*${query}*');
      `,
        {type: QueryTypes.SELECT},
      );
      // const result = await sequelize.query(
      //   `
      //   SELECT songs.*, artists.* FROM songs, artists WHERE songs.artist_id = artists.id AND (artists ==> '*${query}*' OR songs ==> '*${query}*');
      // `,
      //   {type: QueryTypes.SELECT},
      // );
      return result;
    },
  },
  Mutation: {
    createNewSong: async (_parent, args, ctx): Promise<Song> => {
      return await ctx.models.Song.create(args);
    },
    updateSongTitle: async (_parent, args, ctx): Promise<Song> => {
      const {title, id} = args;
      const song = await ctx.models.Song.findByPk(id);
      return await song.update({title});
    },
    deleteSong: async (
      _parent,
      args,
      {models},
    ): Promise<Scalars['Boolean']> => {
      const {id} = args;
      return await models.Song.destroy({
        where: {id},
      });
    },
  },
};
