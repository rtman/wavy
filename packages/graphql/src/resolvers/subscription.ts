import * as admin from 'firebase-admin';
import {
  Arg,
  Field,
  InputType,
  Mutation,
  ObjectType,
  Query,
  Resolver,
} from 'type-graphql';
import { createUnionType } from 'type-graphql';
import { getRepository, SelectQueryBuilder } from 'typeorm';

import * as commonTypes from '../commonTypes';
import { Models } from '../orm';
import { PlayHistoryUserDoc } from './listeningStats';

@InputType()
class NewSubscriptionArgs implements Partial<Models.UserSubscription> {
  @Field()
  userId: string;

  @Field(() => Models.SubscriptionEntity, { nullable: true })
  entity?: Models.SubscriptionEntity;

  @Field(() => Models.SubscriptionSortBy, { nullable: true })
  sortBy?: Models.SubscriptionSortBy;

  @Field(() => Models.SubscriptionType)
  type: Models.SubscriptionType;

  @Field({ nullable: true })
  payload?: string;
}

@InputType()
class UpdateSubscriptionArgs implements Partial<Models.UserSubscription> {
  @Field()
  id: string;

  @Field({ nullable: true })
  active?: boolean;

  @Field({ nullable: true })
  favourited?: boolean;
}

const SubscriptionData = createUnionType({
  name: 'SubscriptionData',
  types: () => [
    Models.Album,
    Models.Artist,
    Models.Label,
    Models.Playlist,
    Models.Song,
    Models.User,
  ],
  resolveType: (value) => {
    switch (value.type) {
      case Models.SubscriptionEntity.ALBUM:
        return Models.Album;
      case Models.SubscriptionEntity.ARTIST:
        return Models.Artist;
      case Models.SubscriptionEntity.LABEL:
        return Models.Label;
      case Models.SubscriptionEntity.PLAYLIST:
        return Models.Playlist;
      case Models.SubscriptionEntity.SONG:
        return Models.Song;
      case Models.SubscriptionEntity.USER:
        return Models.User;
    }
  },
});

@ObjectType()
export class SubscriptionResult extends Models.UserSubscription {
  @Field(() => [SubscriptionData])
  data: typeof SubscriptionData[];
}

@ObjectType()
class Success extends commonTypes.Base {
  @Field(() => [SubscriptionResult])
  body: SubscriptionResult[];
}

// TODO: create specific types for each query, as there are certain params that are optional for some and not others. Each sub type requires a specific combination

@Resolver()
export class SubscriptionResolvers {
  @Query(() => [SubscriptionResult])
  async getSubscriptions(
    @Arg('userId') userId: string
  ): Promise<SubscriptionResult[] | commonTypes.Fail> {
    try {
      const user = await getRepository(Models.User).findOne({
        where: { id: userId },
        relations: ['subscriptions', 'artistFollows', 'labelFollows'],
      });

      if (!user) {
        console.log('No user found for userId', userId);
        return {
          ok: false,
          error: { message: `No user found for userId ${userId}` },
        };
      }

      const subscriptions = user?.subscriptions;

      if (subscriptions.length === 0) {
        console.log(
          'User has no subscriptions - subscriptions.length =',
          subscriptions.length
        );

        return {
          ok: false,
          error: {
            message: `User has no subscriptions - subscriptions.length = ${subscriptions.length}`,
          },
        };
      }

      const activeSubscriptions = subscriptions.filter(
        (subscription) => subscription.active
      );

      if (activeSubscriptions.length === 0) {
        console.log(
          'No active subscriptions - activeSubscriptions.length =',
          activeSubscriptions.length
        );
        return {
          ok: false,
          error: {
            message: `No active subscriptions - activeSubscriptions.length = ${activeSubscriptions.length}`,
          },
        };
      }

      const favouritedSubscriptions = activeSubscriptions.filter(
        (subscription) => subscription.favourited
      );
      const nonFavouritedSubscriptions = activeSubscriptions.filter(
        (subscription) => !subscription.favourited
      );
      const randomizedNonFavouritedSubscriptions = shuffleArray(
        nonFavouritedSubscriptions
      );

      const sortedSubscriptions = [
        ...favouritedSubscriptions,
        ...randomizedNonFavouritedSubscriptions,
      ];

      const subscriptionPromises: Promise<typeof SubscriptionData[]>[] = [];

      for (const subscription of sortedSubscriptions) {
        const { entity, payload, sortBy, type } = subscription;

        switch (type) {
          case Models.SubscriptionType.TAG:
            if (!payload || !entity || !sortBy) {
              console.log(
                `Tag subscription without correct options - payload = ${payload} - entity = ${entity} - sortBy = ${sortBy}`
              );
              break;
            }

            subscriptionPromises.push(
              makeTagPromise({
                entity,
                payload,
                sortBy,
              })
            );
            break;
          case Models.SubscriptionType.FOLLOWING:
            // Top is not done yet for Following
            if (sortBy === Models.SubscriptionSortBy.TOP) {
              break;
            }

            if (!sortBy) {
              console.log('Following subscription without sortBy = ', sortBy);
              break;
            }

            subscriptionPromises.push(makeFollowerPromise({ user, sortBy }));
            break;

          case Models.SubscriptionType.USER_STATS:
            subscriptionPromises.push(makeUserStatsPromise({ userId }));
            break;

          case Models.SubscriptionType.PLAY_HISTORY:
            subscriptionPromises.push(makePlayHistoryPromise({ userId }));
            break;

          case Models.SubscriptionType.DEFAULT:
            if (!entity || !sortBy) {
              console.log(
                `Subscription without correct options - entity = ${entity} - sortBy = ${sortBy}`
              );
              break;
            }
            subscriptionPromises.push(makeDefaultPromise({ entity, sortBy }));
            break;
        }
      }

      if (subscriptionPromises.length === 0) {
        console.log('No subscription queries created');
        return {
          ok: false,
          error: { message: 'No subscription queries created' },
        };
      }
      const subscriptionQueryResults = await Promise.all(subscriptionPromises);
      const subscriptionResults: SubscriptionResult[] = [];

      for (const [index, subscription] of sortedSubscriptions.entries()) {
        subscriptionResults.push({
          ...subscription,
          data: subscriptionQueryResults[index],
        });
      }

      return subscriptionResults;
    } catch (error) {
      console.log('Get Subscriptions error', error);
      return {
        ok: false,
        error: { message: error },
      };
    }
  }

  @Mutation(() => Boolean)
  async newSubscription(
    @Arg('input') payload: NewSubscriptionArgs
  ): Promise<boolean> {
    try {
      const newSubscription = await getRepository(
        Models.UserSubscription
      ).insert({ ...payload, active: true, favourited: false });

      if (newSubscription) {
        return true;
      }

      console.log('ERROR: failed to insert newSubscription failed');

      return false;
    } catch (error) {
      console.log('ERROR: newSubscription', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async bulkNewSubscription(
    @Arg('input', () => [NewSubscriptionArgs]) payload: NewSubscriptionArgs[]
  ): Promise<boolean> {
    try {
      const newSubscriptions = await getRepository(
        Models.UserSubscription
      ).insert(payload);

      if (newSubscriptions) {
        return true;
      }

      console.log('ERROR: failed to insert bulkNewSubscription failed');

      return false;
    } catch (error) {
      console.log('ERROR: bulkNewSubscription', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateSubscription(
    @Arg('input') payload: UpdateSubscriptionArgs
  ): Promise<boolean> {
    try {
      const { id, ...rest } = payload;

      if (payload.active || payload.favourited) {
        const updateSubscription = await getRepository(
          Models.UserSubscription
        ).update(id, rest);

        if (updateSubscription) {
          return true;
        }
        console.log('ERROR: failed to update subscription ');
        return false;
      }

      console.log('ERROR: UpdateSubscription - payload incomplete', payload);

      return false;
    } catch (error) {
      console.log('ERROR: updateSubscription', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deleteSubscription(
    @Arg('subscriptionId') subscriptionId: string
  ): Promise<boolean> {
    try {
      const updateSubscription = await getRepository(
        Models.UserSubscription
      ).delete(subscriptionId);

      if (updateSubscription) {
        return true;
      }

      console.log('ERROR: failed to delete subscription');

      return false;
    } catch (error) {
      console.log('ERROR: deleteSubscription', error);
      return false;
    }
  }
}

// Subscription Functions

const makePlayHistoryPromise = (props: { userId: string }) => {
  const { userId } = props;

  return new Promise<Models.Song[]>((resolve, reject) => {
    try {
      admin
        .firestore()
        .collection(Models.SubscriptionType.PLAY_HISTORY)
        .doc(userId)
        .get()
        .then((result) => {
          if (result.exists) {
            const playHistoryUserDoc: PlayHistoryUserDoc = result.data() ?? {};

            const { songs } = playHistoryUserDoc;

            if (songs) {
              const songIds = songs.map((entry) => entry.songId);

              resolve(
                getRepository(Models.Song).findByIds(songIds, {
                  relations: ['album', 'album.label'],
                })
              );
            }
            reject({
              ok: false,
              error: `No songs found for userId - ${userId}`,
            });
          }

          reject({
            ok: false,
            error: `No user stats found for userId - ${userId}`,
          });
        });
    } catch (error) {
      reject(error);
    }
  });
};

const makeUserStatsPromise = (props: { userId: string }) => {
  const { userId } = props;

  const numberOfResults = 20;

  return new Promise<Models.Song[]>((resolve, reject) => {
    try {
      admin
        .firestore()
        .collectionGroup(Models.SubscriptionType.USER_STATS)
        .where('userId', '==', userId)
        .orderBy('plays', 'desc')
        .limit(numberOfResults)
        .get()
        .then((result) => {
          if (!result.empty) {
            const songIds = result.docs.map((snapshot) => {
              // We know what the firestore data shape is so this is ok
              const data = (snapshot.data() as unknown) as Models.ListeningStats;
              return data.songId;
            });

            resolve(
              getRepository(Models.Song).findByIds(songIds, {
                relations: ['album', 'album.label'],
              })
            );
          }

          reject({
            ok: false,
            error: `No play history found for userId - ${userId}`,
          });
        });
    } catch (error) {
      reject(error);
    }
  });
};

const makeTagPromise = (props: {
  entity: Models.SubscriptionEntity;
  payload: string;
  sortBy: Models.SubscriptionSortBy;
}) => {
  const { entity, payload, sortBy } = props;

  const numberOfResults = 20;
  const model = Models[entity];
  const formattedQuery = payload.trim().replace(/ /g, ' & ');

  switch (sortBy) {
    case Models.SubscriptionSortBy.NEW: {
      const query = getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .where(
          `to_tsvector('simple',${entity.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .orderBy(`${entity.toLowerCase()}.createdAt`, 'DESC');

      makeLeftJoinAndSelect(query, entity);

      return query.take(numberOfResults).getMany();
    }

    case Models.SubscriptionSortBy.TOP: {
      const query = getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .where(
          `to_tsvector('simple',${entity.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .orderBy(
          `${entity.toLowerCase()}.${getMetricForTopQuery(entity)}`,
          'DESC'
        );

      makeLeftJoinAndSelect(query, entity);

      return query.take(numberOfResults).getMany();
    }

    case Models.SubscriptionSortBy.RANDOM: {
      const query = getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .where(
          `to_tsvector('simple',${entity.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        )
        .orderBy('RANDOM()');

      makeLeftJoinAndSelect(query, entity);

      return query.take(numberOfResults).getMany();
    }
  }
};

// TODO: Need to consider merging playlist/label/artist follows into one (union type), would make this easy
const makeFollowerPromise = (props: {
  user: Models.User;
  sortBy: Models.SubscriptionSortBy;
}) => {
  const { sortBy, user } = props;

  const numberOfResults = 20;
  const artistFollowIds = user.artistFollows.map(
    (userArtistFollowing) => userArtistFollowing.artistId
  );
  const labelFollowIds = user.labelFollows.map(
    (userLabelFollowing) => userLabelFollowing.labelId
  );

  switch (sortBy) {
    case Models.SubscriptionSortBy.NEW: {
      return new Promise<Models.Album[]>((resolve, reject) => {
        try {
          const artistAlbums = getRepository(Models.Artist)
            .createQueryBuilder('artist')
            .where('artist.id IN (:...artistFollowIds)', { artistFollowIds })
            .leftJoinAndSelect('artist.albums', 'albums')
            .orderBy('albums.createdAt', 'DESC')
            .limit(numberOfResults / 2)
            .getMany();

          const labelAlbums = getRepository(Models.Label)
            .createQueryBuilder('label')
            .where('label.id IN (:...labelFollowIds)', { labelFollowIds })
            .leftJoinAndSelect('label.albums', 'albums')
            .orderBy('albums.createdAt', 'DESC')
            .limit(numberOfResults / 2)
            .getMany();

          Promise.all([artistAlbums, labelAlbums]).then((result) => {
            resolve(mergeUniqueSortAlbums(result));
          });
        } catch (error) {
          reject(error);
        }
      });
    }
    // TODO: Need way of determining playCount for album
    // case Models.SubscriptionSortBy.TOP:
    //   return getRepository(model)
    //     .find({
    //       order: {
    //         [getMetricForTopQuery(entity)]: 'DESC',
    //       },
    //       take: numberOfResults,
    //     });
    // For now just returning empty to satisfy typescript
    case Models.SubscriptionSortBy.TOP:
      return new Promise<Models.Album[]>((resolve) => resolve([]));

    case Models.SubscriptionSortBy.RANDOM:
      return new Promise<Models.Album[]>((resolve, reject) => {
        try {
          const artistAlbums = getRepository(Models.Artist)
            .createQueryBuilder('artist')
            .where('artist.id IN (:...artistFollowIds)', { artistFollowIds })
            .leftJoinAndSelect('artist.albums', 'albums')
            .orderBy('RANDOM()')
            .limit(numberOfResults / 2)
            .getMany();

          const labelAlbums = getRepository(Models.Label)
            .createQueryBuilder('label')
            .where('label.id IN (:...labelFollowIds)', { labelFollowIds })
            .leftJoinAndSelect('label.albums', 'albums')
            .orderBy('RANDOM()')
            .limit(numberOfResults / 2)
            .getMany();

          Promise.all([artistAlbums, labelAlbums]).then((result) => {
            resolve(mergeUniqueSortAlbums(result));
          });
        } catch (error) {
          reject(error);
        }
      });
  }
};

const makeDefaultPromise = (props: {
  entity: Models.SubscriptionEntity;
  sortBy: Models.SubscriptionSortBy;
}) => {
  const { entity, sortBy } = props;

  const numberOfResults = 20;
  const model = Models[entity];

  switch (sortBy) {
    case Models.SubscriptionSortBy.NEW:
      return getRepository(model).find({
        order: {
          createdAt: 'DESC',
        },
        take: numberOfResults,
        relations: makeRelations(entity),
      });

    case Models.SubscriptionSortBy.TOP:
      return getRepository(model).find({
        order: {
          [getMetricForTopQuery(entity)]: 'DESC',
        },
        take: numberOfResults,
        relations: makeRelations(entity),
      });

    case Models.SubscriptionSortBy.RANDOM:
      return getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .orderBy('RANDOM()')
        .take(numberOfResults)
        .getMany();
  }
};

// Utility Functions

const makeRelations = (entity: Models.SubscriptionEntity) => {
  switch (entity) {
    case Models.SubscriptionEntity.ALBUM:
      return ['songs', 'label'];
    case Models.SubscriptionEntity.ARTIST:
      return ['albums', 'albums.songs'];
    case Models.SubscriptionEntity.LABEL:
      return ['albums', 'albums.songs'];
    case Models.SubscriptionEntity.PLAYLIST:
      return ['songs', 'songs.song', 'songs.song.album'];
    case Models.SubscriptionEntity.SONG:
      return ['album', 'album.label'];
    case Models.SubscriptionEntity.USER:
      return undefined;
  }
};

const makeLeftJoinAndSelect = <T>(
  query: SelectQueryBuilder<T>,
  entity: Models.SubscriptionEntity
) => {
  switch (entity) {
    case Models.SubscriptionEntity.ALBUM:
      query.leftJoinAndSelect('album.songs', 'songs');
      break;
    case Models.SubscriptionEntity.ARTIST:
      query.leftJoinAndSelect('artist.albums', 'albums');
      query.leftJoinAndSelect('albums.songs', 'songs');
      break;
    case Models.SubscriptionEntity.LABEL:
      query.leftJoinAndSelect('label.albums', 'albums');
      query.leftJoinAndSelect('albums.songs', 'songs');
      break;
    case Models.SubscriptionEntity.PLAYLIST:
      query.leftJoinAndSelect('playlist.songs', 'songs');
      query.leftJoinAndSelect('songs.song', 'song');
      query.leftJoinAndSelect('song.album', 'album');
      break;
    case Models.SubscriptionEntity.SONG:
      query.leftJoinAndSelect('song.album', 'album');
      break;
    case Models.SubscriptionEntity.USER:
      break;
  }
};

const mergeUniqueSortAlbums = (result: [Models.Artist[], Models.Label[]]) => {
  const [artistResults, labelResults] = result;

  const albums: Models.Album[] = [];

  [...artistResults, ...labelResults].forEach((item) =>
    item.albums.forEach((album) => albums.push(album))
  );

  // Uniquify
  const uniqueResults = albums.filter(
    (v, i, a) => a.findIndex((t) => t.id === v.id) === i
  );

  // sort DESC
  const sortedUniqueResults = uniqueResults.sort((a, b) =>
    a.createdAt > b.createdAt ? -1 : 1
  );
  return sortedUniqueResults;
};

const getMetricForTopQuery = (entity: Models.SubscriptionEntity) => {
  switch (entity) {
    case Models.SubscriptionEntity.ALBUM:
      // TODO: this is incorrect, need a real metric
      return 'createdAt';
    case Models.SubscriptionEntity.ARTIST:
      return 'followers';
    case Models.SubscriptionEntity.LABEL:
      return 'followers';
    case Models.SubscriptionEntity.PLAYLIST:
      return 'followers';
    case Models.SubscriptionEntity.SONG:
      return 'playCount';
    default:
      return 'followers';
  }
};

const shuffleArray = <T>(array: T[]): T[] => {
  const clonedArray = [...array];
  for (let i = clonedArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [clonedArray[i], clonedArray[j]] = [clonedArray[j], clonedArray[i]];
  }
  return clonedArray;
};
