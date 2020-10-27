import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from './user';

export enum SubscriptionType {
  DEFAULT = 'default',
  TAG = 'tag',
  FOLLOWING = 'following',
  USER_STATS = 'userStats',
  PLAY_HISTORY = 'playHistory',
}

registerEnumType(SubscriptionType, {
  name: 'SubscriptionType',
});

export enum SubscriptionSortBy {
  TOP = 'top',
  NEW = 'new',
  RANDOM = 'random',
}

registerEnumType(SubscriptionSortBy, {
  name: 'SortBy',
});

export enum SubscriptionEntity {
  ALBUM = 'Album',
  ARTIST = 'Artist',
  LABEL = 'Label',
  PLAYLIST = 'Playlist',
  SONG = 'Song',
  USER = 'User',
}

registerEnumType(SubscriptionEntity, {
  name: 'SubscriptionEntity',
});

@Entity('userSubscription')
@ObjectType()
export class UserSubscription {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => ID)
  @PrimaryColumn()
  userId: string;

  @Field(() => SubscriptionEntity, { nullable: true })
  @Column({ nullable: true })
  entity?: SubscriptionEntity;

  @Field(() => SubscriptionSortBy, { nullable: true })
  @Column({ nullable: true })
  sortBy?: SubscriptionSortBy;

  @Field(() => SubscriptionType)
  @Column()
  type: SubscriptionType;

  @Field({ nullable: true })
  @Column({ nullable: true })
  payload?: string;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field()
  @Column()
  favourited: boolean;

  @ManyToOne(
    () => User,
    (user) => user.subscriptions
  )
  @Field(() => User)
  user!: User;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
