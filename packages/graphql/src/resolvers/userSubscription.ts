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
import { getRepository } from 'typeorm';

import * as commonTypes from '../commonTypes';
import { Models } from '../orm';
import { PlayHistoryUserDoc } from './listeningStats';

@InputType()
class NewUserSubscriptionArgs implements Partial<Models.UserSubscription> {
  @Field()
  userId: string;

  @Field(() => Models.UserSubscriptionEntity, { nullable: true })
  entity?: Models.UserSubscriptionEntity;

  @Field(() => Models.UserSubscriptionSortBy, { nullable: true })
  sortBy?: Models.UserSubscriptionSortBy;

  @Field(() => Models.UserSubscriptionType)
  type: Models.UserSubscriptionType;

  @Field({ nullable: true })
  payload?: string;
}

@InputType()
class UpdateUserSubscriptionArgs implements Partial<Models.UserSubscription> {
  @Field()
  id: string;

  @Field({ nullable: true })
  active?: boolean;

  @Field({ nullable: true })
  favourited?: boolean;

  @Field({ nullable: true })
  title?: string;
}

const UserSubscriptionData = createUnionType({
  name: 'UserSubscriptionData',
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
      case Models.UserSubscriptionEntity.ALBUM:
        return Models.Album;
      case Models.UserSubscriptionEntity.ARTIST:
        return Models.Artist;
      case Models.UserSubscriptionEntity.LABEL:
        return Models.Label;
      case Models.UserSubscriptionEntity.PLAYLIST:
        return Models.Playlist;
      case Models.UserSubscriptionEntity.SONG:
        return Models.Song;
      case Models.UserSubscriptionEntity.USER:
        return Models.User;
    }
  },
});

@ObjectType()
export class UserSubscriptionResult extends Models.UserSubscription {
  @Field(() => [UserSubscriptionData])
  data: typeof UserSubscriptionData[];
}

@ObjectType()
class Success extends commonTypes.Base {
  @Field(() => [UserSubscriptionResult])
  body: UserSubscriptionResult[];
}

// TODO: create specific types for each query, as there are certain params that are optional for some and not others. Each sub type requires a specific combination

@Resolver()
export class UserSubscriptionResolvers {
  @Query(() => [UserSubscriptionResult])
  async getUserSubscriptions(
    @Arg('userId') userId: string
  ): Promise<UserSubscriptionResult[] | commonTypes.Fail> {
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

      const subscriptionPromises: Promise<typeof UserSubscriptionData[]>[] = [];

      for (const subscription of sortedSubscriptions) {
        const { entity, payload, sortBy, type } = subscription;

        switch (type) {
          case Models.UserSubscriptionType.TAG:
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
          case Models.UserSubscriptionType.FOLLOWING:
            // Top is not done yet for Following
            if (sortBy === Models.UserSubscriptionSortBy.TOP) {
              break;
            }

            if (!sortBy) {
              console.log('Following subscription without sortBy = ', sortBy);
              break;
            }

            subscriptionPromises.push(makeFollowerPromise({ user, sortBy }));
            break;

          case Models.UserSubscriptionType.USER_STATS:
            subscriptionPromises.push(makeUserStatsPromise({ userId }));
            break;

          case Models.UserSubscriptionType.PLAY_HISTORY:
            subscriptionPromises.push(makePlayHistoryPromise({ userId }));
            break;

          case Models.UserSubscriptionType.DEFAULT:
            if (!entity || !sortBy) {
              console.log(
                `UserSubscription without correct options - entity = ${entity} - sortBy = ${sortBy}`
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
      const subscriptionResults: UserSubscriptionResult[] = [];

      for (const [index, subscription] of sortedSubscriptions.entries()) {
        subscriptionResults.push({
          ...subscription,
          data: subscriptionQueryResults[index],
        });
      }

      return subscriptionResults;
    } catch (error) {
      console.log('Get UserSubscriptions error', error);
      return {
        ok: false,
        error: { message: error },
      };
    }
  }

  @Mutation(() => Boolean)
  async newUserSubscription(
    @Arg('input') payload: NewUserSubscriptionArgs
  ): Promise<boolean> {
    try {
      const newSubscription = await getRepository(
        Models.UserSubscription
      ).insert({ ...payload, active: true, favourited: false });

      if (newSubscription) {
        return true;
      }

      console.log('ERROR: failed to insert newUserSubscription failed');

      return false;
    } catch (error) {
      console.log('ERROR: newUserSubscription', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async bulkNewUserSubscription(
    @Arg('input', () => [NewUserSubscriptionArgs])
    payload: NewUserSubscriptionArgs[]
  ): Promise<boolean> {
    try {
      const newSubscriptions = await getRepository(
        Models.UserSubscription
      ).insert(payload);

      if (newSubscriptions) {
        return true;
      }

      console.log('ERROR: failed to insert bulkNewUserSubscription failed');

      return false;
    } catch (error) {
      console.log('ERROR: bulkNewUserSubscription', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async updateUserSubscription(
    @Arg('input') payload: UpdateUserSubscriptionArgs
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

      console.log(
        'ERROR: UpdateUserSubscription - payload incomplete',
        payload
      );

      return false;
    } catch (error) {
      console.log('ERROR: updateUserSubscription', error);
      return false;
    }
  }

  @Mutation(() => Boolean)
  async deleteUserSubscription(
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
      console.log('ERROR: deleteUserSubscription', error);
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
        .collection(Models.UserSubscriptionType.PLAY_HISTORY)
        .doc(userId)
        .get()
        .then((result) => {
          if (result.exists) {
            const playHistoryUserDoc: PlayHistoryUserDoc = result.data() ?? {};

            const { songs } = playHistoryUserDoc;

            if (songs) {
              const songIds = songs.map((entry) => entry.songId);
              const sortedSongIds = songIds.reverse();

              resolve(
                getRepository(Models.Song).findByIds(sortedSongIds, {
                  relations: makeRelations(Models.UserSubscriptionEntity.SONG),
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
        .collectionGroup(Models.UserSubscriptionType.USER_STATS)
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
                relations: makeRelations(Models.UserSubscriptionEntity.SONG),
              })
            );
          }

          reject({
            ok: false,
            error: `No userStats found for userId - ${userId}`,
          });
        });
    } catch (error) {
      reject(error);
    }
  });
};

const makeTagPromise = (props: {
  entity: Models.UserSubscriptionEntity;
  payload: string;
  sortBy: Models.UserSubscriptionSortBy;
}) => {
  const { entity, payload, sortBy } = props;

  const numberOfResults = 20;
  const model = Models[entity];
  const formattedQuery = payload.trim().replace(/ /g, ' & ');

  switch (sortBy) {
    case Models.UserSubscriptionSortBy.NEW: {
      let query = getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .where(
          `to_tsvector('simple',${entity.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        );

      const leftJoinAndSelectConfig = makeLeftJoinAndSelectConfig(entity);
      leftJoinAndSelectConfig.forEach((params) => {
        if (params.relation.length > 0 && params.alias.length > 0) {
          query = query.leftJoinAndSelect(params.relation, params.alias);
        }
      });

      return query
        .orderBy(`${entity.toLowerCase()}.createdAt`, 'DESC')
        .take(numberOfResults)
        .getMany();
    }

    case Models.UserSubscriptionSortBy.TOP: {
      let query = getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .where(
          `to_tsvector('simple',${entity.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        );

      const leftJoinAndSelectConfig = makeLeftJoinAndSelectConfig(entity);
      leftJoinAndSelectConfig.forEach((params) => {
        if (params.relation.length > 0 && params.alias.length > 0) {
          query = query.leftJoinAndSelect(params.relation, params.alias);
        }
      });

      return query
        .orderBy(
          `${entity.toLowerCase()}.${getMetricForTopQuery(entity)}`,
          'DESC'
        )
        .take(numberOfResults)
        .getMany();
    }

    case Models.UserSubscriptionSortBy.RANDOM: {
      let query = getRepository(model)
        .createQueryBuilder(entity.toLowerCase())
        .where(
          `to_tsvector('simple',${entity.toLowerCase()}."tagSearchString") @@ to_tsquery('simple', :query)`,
          { query: `${formattedQuery}:*` }
        );

      const leftJoinAndSelectConfig = makeLeftJoinAndSelectConfig(entity);
      leftJoinAndSelectConfig.forEach((params) => {
        if (params.relation.length > 0 && params.alias.length > 0) {
          query = query.leftJoinAndSelect(params.relation, params.alias);
        }
      });

      // NOTE: for orderBy('RANDOM()'), take doesnt work, limit seems to though. Even though the doc says it may not work correctly
      return query
        .orderBy('RANDOM()')
        .limit(numberOfResults)
        .getMany();
    }
  }
};

// TODO: Need to consider merging playlist/label/artist follows into one (union type), would make this easy
// this function differs from the rest in that it only returns albums, for now
const makeFollowerPromise = (props: {
  user: Models.User;
  sortBy: Models.UserSubscriptionSortBy;
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
    case Models.UserSubscriptionSortBy.NEW: {
      return new Promise<Models.Album[]>((resolve, reject) => {
        try {
          const artistAlbums = getRepository(Models.Artist)
            .createQueryBuilder('artist')
            .where('artist.id IN (:...artistFollowIds)', { artistFollowIds })
            .leftJoinAndSelect('artist.albums', 'albums')
            .leftJoinAndSelect('albums.label', 'label')
            .leftJoinAndSelect('albums.songs', 'songs')
            .leftJoinAndSelect('songs.artist', 'songs.artist')
            .orderBy('albums.createdAt', 'DESC')
            .limit(numberOfResults / 2)
            .getMany();

          const labelAlbums = getRepository(Models.Label)
            .createQueryBuilder('label')
            .where('label.id IN (:...labelFollowIds)', { labelFollowIds })
            .leftJoinAndSelect('label.albums', 'albums')
            .leftJoinAndSelect('albums.artist', 'albums.artist')
            .leftJoinAndSelect('albums.songs', 'songs')
            .leftJoinAndSelect('songs.artist', 'songs.artist')
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
    // case Models.UserSubscriptionSortBy.TOP:
    //   return getRepository(model)
    //     .find({
    //       order: {
    //         [getMetricForTopQuery(entity)]: 'DESC',
    //       },
    //       take: numberOfResults,
    //     });
    // For now just returning empty to satisfy typescript
    case Models.UserSubscriptionSortBy.TOP:
      return new Promise<Models.Album[]>((resolve) => resolve([]));

    case Models.UserSubscriptionSortBy.RANDOM:
      return new Promise<Models.Album[]>((resolve, reject) => {
        try {
          const artistAlbums = getRepository(Models.Artist)
            .createQueryBuilder('artist')
            .where('artist.id IN (:...artistFollowIds)', { artistFollowIds })
            .leftJoinAndSelect('artist.albums', 'albums')
            .leftJoinAndSelect('albums.songs', 'songs')
            .leftJoinAndSelect('albums.label', 'label')
            .leftJoinAndSelect('songs.artist', 'songs.artist')
            .orderBy('RANDOM()')
            .limit(numberOfResults / 2)
            .getMany();

          const labelAlbums = getRepository(Models.Label)
            .createQueryBuilder('label')
            .where('label.id IN (:...labelFollowIds)', { labelFollowIds })
            .leftJoinAndSelect('label.albums', 'albums')
            .leftJoinAndSelect('albums.artist', 'albums.artist')
            .leftJoinAndSelect('albums.songs', 'songs')
            .leftJoinAndSelect('songs.artist', 'songs.artist')
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
  entity: Models.UserSubscriptionEntity;
  sortBy: Models.UserSubscriptionSortBy;
}) => {
  const { entity, sortBy } = props;

  const numberOfResults = 20;
  const model = Models[entity];

  switch (sortBy) {
    case Models.UserSubscriptionSortBy.NEW:
      return getRepository(model).find({
        order: {
          createdAt: 'DESC',
        },
        take: numberOfResults,
        relations: makeRelations(entity),
      });

    case Models.UserSubscriptionSortBy.TOP:
      return getRepository(model).find({
        order: {
          [getMetricForTopQuery(entity)]: 'DESC',
        },
        take: numberOfResults,
        relations: makeRelations(entity),
      });

    case Models.UserSubscriptionSortBy.RANDOM: {
      let query = getRepository(model).createQueryBuilder(entity.toLowerCase());

      const leftJoinAndSelectConfig = makeLeftJoinAndSelectConfig(entity);
      leftJoinAndSelectConfig.forEach((params) => {
        if (params.relation.length > 0 && params.alias.length > 0) {
          query = query.leftJoinAndSelect(params.relation, params.alias);
        }
      });

      // NOTE: for orderBy('RANDOM()'), take doesnt work, limit seems to though. Even though the doc says it may not work correctly
      return query
        .orderBy('RANDOM()')
        .limit(numberOfResults)
        .getMany();
    }
  }
};

// Utility Functions

const makeRelations = (entity: Models.UserSubscriptionEntity) => {
  switch (entity) {
    case Models.UserSubscriptionEntity.ALBUM:
      return ['songs', 'label', 'artist', 'songs.artist'];
    case Models.UserSubscriptionEntity.ARTIST:
      return ['albums', 'albums.songs', 'albums.songs.artist'];
    case Models.UserSubscriptionEntity.LABEL:
      return ['albums', 'albums.songs', 'albums.songs.artist'];
    case Models.UserSubscriptionEntity.PLAYLIST:
      return ['songs', 'songs.song', 'songs.song.album', 'songs.song.artist'];
    case Models.UserSubscriptionEntity.SONG:
      return ['album', 'album.label', 'artist'];
    case Models.UserSubscriptionEntity.USER:
      return undefined;
  }
};

const makeLeftJoinAndSelectConfig = (entity: Models.UserSubscriptionEntity) => {
  switch (entity) {
    case Models.UserSubscriptionEntity.ALBUM:
      return [
        { relation: 'album.songs', alias: 'songs' },
        { relation: 'album.artist', alias: 'artist' },
        { relation: 'album.label', alias: 'label' },
        { relation: 'songs.artist', alias: 'songs.artist' },
      ];
    case Models.UserSubscriptionEntity.ARTIST:
      return [
        { relation: 'artist.albums', alias: 'albums' },
        { relation: 'albums.songs', alias: 'songs' },
        { relation: 'songs.artist', alias: 'songs.artist' },
      ];
    case Models.UserSubscriptionEntity.LABEL:
      return [
        { relation: 'label.albums', alias: 'albums' },
        { relation: 'albums.songs', alias: 'songs' },
        { relation: 'songs.artist', alias: 'songs.artist' },
      ];
    case Models.UserSubscriptionEntity.PLAYLIST:
      return [
        { relation: 'playlist.songs', alias: 'songs' },
        { relation: 'songs.song', alias: 'song' },
        { relation: 'song.album', alias: 'album' },
        { relation: 'song.artist', alias: 'artist' },
        // { relation: 'playlist.user', alias: 'user'}
      ];
    case Models.UserSubscriptionEntity.SONG:
      return [
        { relation: 'song.album', alias: 'album' },
        { relation: 'song.label', alias: 'label' },
        { relation: 'song.artist', alias: 'artist' },
      ];
    case Models.UserSubscriptionEntity.USER:
      // TODO: add user leftJoins when ready
      return [{ relation: '', alias: '' }];
  }
};

const mergeUniqueSortAlbums = (result: [Models.Artist[], Models.Label[]]) => {
  const [artistResults, labelResults] = result;

  const albums: Models.Album[] = [];

  [...artistResults, ...labelResults].forEach((item) => {
    let artist: Models.Artist;
    let label: Models.Label | undefined;

    item.albums.forEach((album) => {
      // artist and label must be manually added to fit the graphql schema
      if (item.type === Models.UserSubscriptionEntity.ARTIST) {
        artist = { ...item } as Models.Artist;
        label = album.label;
      }

      if (item.type === Models.UserSubscriptionEntity.LABEL) {
        label = { ...item } as Models.Label;
        artist = album.artist;
      }
      const resolvedAlbum = { ...album, artist, label };
      albums.push(resolvedAlbum);
    });
  });

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

const getMetricForTopQuery = (entity: Models.UserSubscriptionEntity) => {
  switch (entity) {
    case Models.UserSubscriptionEntity.ALBUM:
      // TODO: this is incorrect, need a real metric
      return 'createdAt';
    case Models.UserSubscriptionEntity.ARTIST:
      return 'followers';
    case Models.UserSubscriptionEntity.LABEL:
      return 'followers';
    case Models.UserSubscriptionEntity.PLAYLIST:
      return 'followers';
    case Models.UserSubscriptionEntity.SONG:
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
