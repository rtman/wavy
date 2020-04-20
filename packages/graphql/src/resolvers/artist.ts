import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType({ description: 'Create a new artist' })
class CreateArtist implements Partial<Models.Artist> {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;
}

@Resolver(Models.Artist)
export class ArtistResolvers {
  @Query(() => [Models.Artist])
  async artists(): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .getRepository(Models.Artist)
        .find();

      if (artists) {
        return artists;
      } else {
        console.log('No artists found');

        return;
      }
    } catch (error) {
      console.log('Find artists error', error);

      return;
    }
  }
  @Query(() => Models.Artist)
  async artistById(@Arg('id') id: string): Promise<Models.Artist | undefined> {
    try {
      const artist = await getManager()
        .getRepository(Models.Artist)
        .findOne({
          where: { id },
          relations: [
            'songs',
            'songs.album',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
            'songs.usersRecentlyPlayed',
            'songs.usersRecentlyPlayed.user',
            'albums',
            'albums.songs',
            'albums.songs.supportingArtists',
            'albums.songs.supportingArtists.artist',
            'supportingArtistOn',
            'supportingArtistOn.song',
            'usersFollowing',
            'usersFollowing.user',
          ],
        });

      if (artist) {
        return artist;
      }
      console.log('Artist not found', id);

      return artist;
    } catch (error) {
      console.log('artistById error', error);

      return;
    }
  }

  @Query(() => [Models.Artist])
  async artistsById(
    @Arg('ids', () => [String]) ids: string[]
  ): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .getRepository(Models.Artist)
        .findByIds(ids);
      if (artists) {
        return artists;
      } else {
        console.log('artistsById - no artists found', ids);

        return;
      }
    } catch (error) {
      console.log('artistsById error', error);
      return;
    }
  }
  // TODO: implement, figure out how to incorporate zdb search
  // searchArtists: async (_parent, args, _ctx): Promise<Models.Artist[]> => {
  //   const { query } = args;
  //   return await sequelizeInstance.query(
  //     `SELECT * FROM artists AS artist WHERE artist ==> '${query}';`,
  //     { type: QueryTypes.SELECT }
  //   );
  // },

  @Mutation(() => Models.Artist)
  async createArtist(
    @Arg('data') payload: CreateArtist
  ): Promise<Models.Artist | undefined> {
    try {
      const repository = getManager().getRepository(Models.Artist);
      const artist = repository.create(payload);

      if (artist) {
        await repository.save(artist);
        return artist;
      }

      console.log('CreateUser failed', payload);
      return;
    } catch (error) {
      console.log('createArtist error', error);
      return;
    }
  }

  @Mutation(() => Models.Artist)
  async deleteArtist(@Arg('id') id: string): Promise<Boolean> {
    try {
      const repository = getManager().getRepository(Models.Artist);
      const artistToDelete = await repository.findOne({ where: { id } });
      if (artistToDelete) {
        await repository.remove(artistToDelete);
        return true;
      } else {
        console.log('deleteArtist - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteArtist error', error);
      return false;
    }
  }
}
