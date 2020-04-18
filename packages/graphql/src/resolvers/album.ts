import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType({ description: 'Create a new album' })
class CreateAlbum implements Partial<Models.Album> {
  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  artistId: string;

  @Field()
  image: string;
}

@Resolver(Models.Album)
export class AlbumResolvers {
  @Query(() => [Models.Album])
  async albums(): Promise<Models.Album[] | undefined> {
    try {
      const albums = await getManager()
        .getRepository(Models.Album)
        .find();

      if (albums) {
        return albums;
      } else {
        console.log('No albums found');
        return;
      }
    } catch (error) {
      console.log('Find albums error', error);
    }
  }
  @Query(() => Models.Album)
  async albumById(@Arg('id') id: string): Promise<Models.Album | undefined> {
    try {
      const album = await getManager()
        .getRepository(Models.Album)
        .findOne({
          where: { id },
          join: {
            alias: 'album',
            leftJoinAndSelect: {
              album: 'album.album',
              songs: 'album.songs',
            },
          },
        });

      if (album === undefined) {
        console.log('Album not found', id);
        return;
      }
      return album;
    } catch (error) {
      console.log('albumById error', error);
      return;
    }
  }
  // TODO: figure out zdb search
  // searchAlbums: async (_parent, args, _ctx): Promise<Models.Album[]> => {
  //   const { query } = args;
  //   return await sequelizeInstance.query(
  //     `SELECT * FROM albums AS album WHERE album ==> '${query}';`,
  //     { type: QueryTypes.SELECT }
  //   );
  // },

  @Mutation(() => Models.Album)
  async createAlbum(
    @Arg('data') payload: CreateAlbum
  ): Promise<Models.Album | undefined> {
    try {
      const repository = getManager().getRepository(Models.Album);
      const album = repository.create(payload);

      if (album) {
        await repository.save(album);
        return album;
      }

      console.log('CreateUser failed', payload);
      return;
    } catch (error) {
      console.log('createAlbum error', error);
      return;
    }
  }

  @Mutation(() => Models.Album)
  async deleteAlbum(@Arg('id') id: string): Promise<Boolean> {
    try {
      const repository = getManager().getRepository(Models.Album);
      const albumToDelete = await repository.findOne({ where: { id } });
      if (albumToDelete) {
        await repository.remove(albumToDelete);
        return true;
      } else {
        console.log('deleteAlbum - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteAlbum error', error);
      return false;
    }
  }
}
