import { Models } from '../orm';
import { Arg, Field, InputType, Resolver, Query, Mutation } from 'type-graphql';
import { getManager } from 'typeorm';

@InputType()
class CreateLabelArgs implements Partial<Models.Label> {
  @Field()
  name: string;

  @Field()
  description: string;

  @Field()
  image: string;
}

@Resolver(Models.Label)
export class LabelResolvers {
  @Query(() => [Models.Label])
  async labels(): Promise<Models.Label[] | undefined> {
    try {
      const labels = await getManager()
        .getRepository(Models.Label)
        .find();

      if (labels) {
        return labels;
      } else {
        console.log('No labels found');

        return;
      }
    } catch (error) {
      console.log('Find labels error', error);

      return;
    }
  }

  @Query(() => Models.Label)
  async labelById(@Arg('id') id: string): Promise<Models.Label | undefined> {
    try {
      const label = await getManager()
        .getRepository(Models.Label)
        .findOne({
          where: { id },
          relations: [
            'artists',
            'artists.artist',
            'albums',
            'albums.songs',
            'albums.songs.supportingArtists',
            'albums.songs.supportingArtists.artist',
            'songs',
            'songs.album',
            'songs.supportingArtists',
            'songs.supportingArtists.artist',
            'songs.usersFavourited',
            'songs.usersFavourited.user',
            'songs.usersRecentlyPlayed',
            'songs.usersRecentlyPlayed.user',
          ],
        });

      if (label) {
        return label;
      }
      console.log('Label not found', id);

      return label;
    } catch (error) {
      console.log('labelById error', error);

      return;
    }
  }

  @Query(() => [Models.Label])
  async searchLabels(
    @Arg('query') query: string
  ): Promise<Models.Label[] | undefined> {
    try {
      const labels = await getManager()
        .createQueryBuilder()
        .select('label')
        .from(Models.Label, 'label')
        // Here is the zdb query and syntax
        .where('label ==> :query', { query })
        .getMany();

      if (labels) {
        return labels;
      }

      console.log('searchLabels query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchLabels error', error);

      return;
    }
  }

  @Mutation(() => Models.Label)
  async createLabel(
    @Arg('input') payload: CreateLabelArgs
  ): Promise<Models.Label | undefined> {
    try {
      const repository = getManager().getRepository(Models.Label);
      const label = repository.create(payload);

      if (label) {
        await repository.save(label);
        return label;
      }

      console.log('createLabel failed', payload);
      return;
    } catch (error) {
      console.log('createLabel error', error);
      return;
    }
  }

  // TODO: need to consider where this label would be referenced
  @Mutation(() => Boolean)
  async deleteLabel(@Arg('id') id: string): Promise<boolean> {
    try {
      const repository = getManager().getRepository(Models.Label);
      const labelToDelete = await repository.findOne({ where: { id } });
      if (labelToDelete) {
        await repository.remove(labelToDelete);
        return true;
      } else {
        console.log('deleteLabel - User not found');
        return false;
      }
    } catch (error) {
      console.log('deleteLabel error', error);
      return false;
    }
  }
}
