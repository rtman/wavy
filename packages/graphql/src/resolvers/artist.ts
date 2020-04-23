import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType()
class CreateArtistArgs implements Partial<Models.Artist> {
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

  @Query(() => [Models.Artist])
  async searchArtists(
    @Arg('query') query: string
  ): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .createQueryBuilder()
        .select('artist')
        .from(Models.Artist, 'artist')
        .leftJoinAndSelect('artist.usersFollowing', 'usersFollowing')
        .leftJoinAndSelect('usersFollowing.user', 'user')
        // Here is the zdb query and syntax
        .where('artist ==> :query', { query })
        .getMany();

      if (artists) {
        return artists;
      }

      console.log('searchArtists query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchArtists error', error);

      return;
    }
  }

  @Mutation(() => Models.Artist)
  async createArtist(
    @Arg('input') payload: CreateArtistArgs
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

  // TODO: need to consider where this artist would be referenced
  // songs, albums
  @Mutation(() => Boolean)
  async deleteArtist(@Arg('id') id: string): Promise<boolean> {
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
