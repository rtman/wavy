import { Arg, Field, InputType, Mutation, Query, Resolver } from 'type-graphql';
import { getManager } from 'typeorm';

import { Models } from '../orm';

@InputType()
class CreateArtistArgs implements Partial<Models.Artist> {
  @Field()
  artistId: string;

  @Field()
  userId: string;

  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  imageRef: string;

  @Field()
  imageUrl: string;
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

  @Query(() => [Models.Artist])
  async newArtists(): Promise<Models.Artist[] | undefined> {
    try {
      const artists = await getManager()
        .getRepository(Models.Artist)
        .find({
          order: {
            createdAt: 'DESC',
          },
          take: 20,
          relations: [
            'songs',
            'songs.album',
            'songs.artist',
            'songs.label',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
            // 'songs.usersRecentlyPlayed',
            // 'songs.usersRecentlyPlayed.user',
            'labels',
            'labels.label',
            'albums',
            'albums.label',
            'albums.songs',
            'albums.songs.label',
            'albums.songs.supportingArtists',
            'albums.songs.supportingArtists.artist',
            'supportingArtistOn',
            'supportingArtistOn.song',
            'usersFollowing',
            'usersFollowing.user',
          ],
        });

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
            'songs.artist',
            'songs.label',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
            // 'songs.usersRecentlyPlayed',
            // 'songs.usersRecentlyPlayed.user',
            'labels',
            'labels.label',
            'albums',
            'albums.label',
            'albums.songs',
            'albums.songs.label',
            'albums.songs.supportingArtists',
            'albums.songs.supportingArtists.artist',
            'supportingArtistOn',
            'supportingArtistOn.song',
            'usersFollowing',
            'usersFollowing.user',
            'users',
            'users.user',
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
        .leftJoinAndSelect('artist.labels', 'labels')
        .leftJoinAndSelect('labels.label', 'label')
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
      const { userId, artistId, ...rest } = payload;
      const artistRepository = getManager().getRepository(Models.Artist);
      const artist = artistRepository.create({ id: artistId, ...rest });

      const userArtistRepository = getManager().getRepository(
        Models.UserArtist
      );
      const userArtist = userArtistRepository.create({ userId, artistId });

      if (artist && userArtist) {
        await artistRepository.save(artist);
        await userArtistRepository.save(userArtist);

        return artist;
      }

      console.log('CreateArtist failed', payload);
      return;
    } catch (error) {
      console.log('createArtist error', error);
      return;
    }
  }

  // TODO: need to consider where this artist would be referenced
  // songs, albums, in order to delete all references
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
