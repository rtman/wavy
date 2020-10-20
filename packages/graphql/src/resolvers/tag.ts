import {
  Arg,
  Field,
  ID,
  InputType,
  Mutation,
  Query,
  Resolver,
} from 'type-graphql';
import { getManager } from 'typeorm';

//TODO: figure out why importing the dir without ../ doesnt work, tsconfig issue
import { Models } from '../orm';

@InputType()
class CreateTagArgs implements Partial<Models.Tag> {
  @Field()
  title: string;
}

@InputType()
class AddTagToSongArgs implements Partial<Models.Tag> {
  @Field(() => ID)
  tagId: string;

  @Field(() => String)
  title: string;

  @Field(() => ID)
  songId: string;
}

@InputType()
class RemoveTagFromSongArgs implements Partial<Models.Tag> {
  @Field(() => ID)
  tagId: string;

  @Field(() => String)
  title: string;

  @Field(() => ID)
  songId: string;
}

@Resolver(Models.Tag)
export class TagResolvers {
  @Query(() => [Models.Tag])
  async tags(): Promise<Models.Tag[] | undefined> {
    try {
      const tags = await getManager()
        .getRepository(Models.Tag)
        .find();

      if (tags) {
        return tags;
      } else {
        console.log('No tags found');

        return;
      }
    } catch (error) {
      console.log('Find tags error', error);
    }
  }

  @Query(() => Models.Tag)
  async tagById(@Arg('tagId') tagId: string): Promise<Models.Tag | undefined> {
    try {
      const tag = await getManager()
        .getRepository(Models.Tag)
        .findOne({
          where: { id: tagId },
          relations: [
            'songs',
            'songs.song',
            'songs.song.artist',
            'songs.song.album',
            'songs.song.album.label',
            'songs.song.label',
            'songs.song.supportingArtists',
            'songs.song.supportingArtists.artist',
          ],
        });

      if (tag) {
        return tag;
      }

      console.log('Tag not found', tagId);

      return;
    } catch (error) {
      console.log('playlistById error', error);

      return;
    }
  }

  @Query(() => [Models.Tag])
  async tagsById(
    @Arg('tagIds', () => [String]) tagIds: string[]
  ): Promise<Models.Tag[] | undefined> {
    try {
      const tags = await getManager()
        .getRepository(Models.Tag)
        .find({
          where: {
            id: tagIds,
          },
        });

      if (tags) {
        return tags;
      } else {
        return;
      }
    } catch (error) {
      console.log('tagsById error', error);

      return;
    }
  }

  @Query(() => [Models.Tag])
  async searchtags(
    @Arg('query') query: string
  ): Promise<Models.Tag[] | undefined> {
    try {
      const formattedQuery = query.trim().replace(/ /g, ' & ');
      const tags = await getManager()
        .createQueryBuilder()
        .select('tag')
        .from(Models.Tag, 'tag')
        .leftJoinAndSelect('tag.songs', 'songs')
        .where(
          `to_tsvector('simple',tag.title) @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .getMany();

      if (tags) {
        return tags;
      }

      console.log('searchtags query returned nothing - query', query);
      return;
    } catch (error) {
      console.log('searchtags error', error);

      return;
    }
  }

  @Mutation(() => Models.Tag)
  async createTag(
    @Arg('input') payload: CreateTagArgs
  ): Promise<Models.Tag | undefined> {
    try {
      const tagRepo = getManager().getRepository(Models.Tag);
      const tag = tagRepo.create(payload);

      if (!tag) {
        console.log('CreatePlaylist tag failed', payload);
      }

      await tagRepo.save(tag);

      return tag;
    } catch (error) {
      console.log('createTag error', error);

      return;
    }
  }

  @Mutation(() => Boolean)
  async addTagToSong(
    @Arg('input') payload: AddTagToSongArgs
  ): Promise<boolean> {
    try {
      const { tagId, title, songId } = payload;
      const result = await getManager().transaction(
        async (transactionalEntityManager) => {
          const songTagRepository = transactionalEntityManager.getRepository(
            Models.SongTag
          );
          const songRepository = transactionalEntityManager.getRepository(
            Models.Song
          );

          const addedTagSongRelation = songTagRepository.create({
            tagId,
            songId,
          });
          const songToUpdate = await songRepository.findOne(songId);

          const addTagToTagSearchString = ({
            tagSearchString,
            newTag,
          }: {
            tagSearchString: string;
            newTag: string;
          }) => {
            if (tagSearchString.length > 0) {
              return tagSearchString + `,${newTag}`;
            }
            if (tagSearchString.length === 0) {
              return newTag;
            }
          };

          if (addedTagSongRelation && songToUpdate) {
            songToUpdate?.tagSearchString;

            await songTagRepository.save(addedTagSongRelation);

            if (!songToUpdate.tagSearchString.includes(title)) {
              const newTagSearchString = addTagToTagSearchString({
                tagSearchString: songToUpdate.tagSearchString,
                newTag: title,
              });

              await songRepository.update(songToUpdate, {
                tagSearchString: newTagSearchString,
              });
            }

            return true;
          }
          console.log('addTagToSong failed', payload);

          return false;
        }
      );

      return result;
    } catch (error) {
      console.log('addtagsongs error', error);

      return false;
    }
  }

  @Mutation(() => Boolean)
  async removeTagFromSong(
    @Arg('input') payload: RemoveTagFromSongArgs
  ): Promise<boolean> {
    try {
      const { tagId, title, songId } = payload;
      const result = await getManager().transaction(
        async (transactionalEntityManager) => {
          const repository = transactionalEntityManager.getRepository(
            Models.SongTag
          );
          const songRepository = transactionalEntityManager.getRepository(
            Models.Song
          );

          const removedSongTagRelation = await repository.findOne({
            where: { tagId, songId },
          });
          const songToUpdate = await songRepository.findOne(songId);

          const removeTagFromTagSearchString = (tagSearchString: string) =>
            tagSearchString
              .split(',')
              .filter((t) => t !== title)
              .join();

          if (removedSongTagRelation && songToUpdate) {
            await repository.remove(removedSongTagRelation);
            const { tagSearchString } = songToUpdate;

            if (tagSearchString.length > 0 && tagSearchString.includes(title)) {
              songRepository.update(songToUpdate, {
                tagSearchString: removeTagFromTagSearchString(tagSearchString),
              });
            }
            return true;
          }

          console.log('removeTagFromSong - no songs found for tag', payload);

          return false;
        }
      );

      return result;
    } catch (error) {
      console.log('addtagsongs error', error);

      return false;
    }
  }
}
