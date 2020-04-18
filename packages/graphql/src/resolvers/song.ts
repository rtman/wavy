import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType()
class CreateSong implements Partial<Models.Song> {
  @Field()
  title: string;

  @Field()
  artistId: string;

  @Field()
  image: string;
}

// @InputType()
// class UpdateSongTitle implements Partial<Models.Song> {
//   @Field()
//   title: string;

//   @Field()
//   id: string;
// }

@Resolver(Models.Song)
export class SongResolvers {
  @Query(() => [Models.Song])
  async songs(): Promise<Models.Song[] | undefined> {
    try {
      const songs = await getManager()
        .getRepository(Models.Song)
        .find();

      if (songs) {
        return songs;
      } else {
        console.log('No songs found');
        return;
      }
    } catch (error) {
      console.log('Find songs error', error);
    }
  }
  @Query(() => Models.Song)
  async songById(@Arg('id') id: string): Promise<Models.Song | undefined> {
    try {
      const song = await getManager()
        .getRepository(Models.Song)
        .findOne({
          where: { id },
          join: {
            alias: 'song',
            leftJoinAndSelect: {
              album: 'song.album',
              artist: 'song.artist',
              supportingArtists: 'song.supportingArtists',
              playlists: 'song.playlists',
              usersFavourited: 'song.usersFavourited',
              usersRecentlyPlayed: 'song.usersRecentlyPlayed',
            },
          },
        });

      if (song) {
        return song;
      }
      console.log('songById - Song not found', id);

      return song;
    } catch (error) {
      console.log('songById error', error);

      return;
    }
  }

  @Query(() => [Models.Song])
  async songsById(
    @Arg('ids', () => [String]) ids: string[]
  ): Promise<Models.Song[] | undefined> {
    try {
      const songs = await getManager()
        .getRepository(Models.Song)
        .findByIds(ids);
      if (songs) {
        return songs;
      } else {
        return;
      }
    } catch (error) {
      console.log('songsById error', error);

      return;
    }
  }
  // searchSongs: async (_parent, args, ctx): Promise<Models.Song[]> => {
  //   const { query } = args;
  //   // const result = await sequelizeInstance.query(
  //   //   `
  //   //   SELECT songs.id,
  //   //   songs.title,
  //   //   songs.genres,
  //   //   songs.duration,
  //   //   songs.url,
  //   //   songs.image,
  //   //   artists.id AS artist_id,
  //   //   artists.name AS artist_name,
  //   //   albums.id AS album_id,
  //   //   albums.title AS album_title
  //   //   FROM songs, artists, albums
  //   //   WHERE songs.artist_id = artists.id AND songs.album_id = albums.id
  //   //   AND (artists ==> '*${query}*' OR songs ==> '*${query}*' OR albums ==> '*${query}*');
  //   // `,
  //   //   { type: QueryTypes.SELECT }
  //   // );
  //   // // TODO: fix with proper typing
  //   // // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   // return result as any;

  //   const sqlQuery = `
  //   SELECT *
  //   FROM songs
  //   WHERE songs ==> '*${query}*';`;
  //   //   const options = {
  //   //     // model: Models.Song,
  //   //     // hasJoin: true,
  //   //     type: QueryTypes.SELECT,
  //   //     include: [
  //   //       {
  //   //         model: Models.Artist,
  //   //         as: 'artist',
  //   //       },
  //   //       {
  //   //         model: Models.Album,
  //   //         as: 'album',
  //   //       },
  //   //       {
  //   //         model: Models.User,
  //   //         as: 'usersFavourited',
  //   //       },
  //   //       {
  //   //         model: Models.Artist,
  //   //         as: 'supportingArtists',
  //   //       },
  //   //     ],
  //   //   };
  //   //   ctx.models.Song._validateIncludedElements(options);
  //   //   const result = await sequelizeInstance.query(sqlQuery, options);

  //   //   // TODO: fix with proper typing
  //   //   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //   //   return result as any;

  //   const result = await ctx.models.Song.findAll({
  //     // attributes: [ctx.models.sequelize.literal(sqlQuery)],
  //     where: { id: sequelize.literal(sqlQuery) },
  //     include: [
  //       {
  //         model: Models.Artist,
  //         as: 'artist',
  //       },
  //       {
  //         model: Models.Album,
  //         as: 'album',
  //       },
  //       {
  //         model: Models.User,
  //         as: 'usersFavourited',
  //       },
  //       {
  //         model: Models.Artist,
  //         as: 'supportingArtists',
  //       },
  //     ],
  //   });
  //   return result;
  // },

  @Mutation(() => Models.Song)
  async createSong(
    @Arg('data') payload: CreateSong
  ): Promise<Models.Song | undefined> {
    try {
      const repository = getManager().getRepository(Models.Song);
      const song = repository.create(payload);

      if (song) {
        await repository.save(song);
        return song;
      }

      console.log('createSong failed', payload);

      return;
    } catch (error) {
      console.log('createSong error', error);

      return;
    }
  }
  //TODO: finish this
  // @Mutation(() => Models.Song)
  // async updateSongTitle(
  //   @Arg('data') payload: UpdateSongTitle
  // ): Promise<Boolean> {
  //   try {
  //     const repository = getManager().getRepository(Models.Song);
  //     const song = repository.findOne({ where: { id: payload.id } });

  //     if (song) {
  //       return true;
  //     }
  //     console.log('updateSongTitle failed', payload);

  //     return false;
  //   } catch (error) {
  //     console.log('updateSongTitle error', error);
  //     return false;
  //   }
  // }

  @Mutation(() => Models.Song)
  async deleteSong(@Arg('id') id: string): Promise<Boolean> {
    try {
      const repository = getManager().getRepository(Models.Song);
      const songToDelete = await repository.findOne({ where: { id } });
      if (songToDelete) {
        await repository.remove(songToDelete);
        return true;
      } else {
        console.log('deleteSong - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteSong error', error);
      return false;
    }
  }
}
