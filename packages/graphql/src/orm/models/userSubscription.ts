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

export enum UserSubscriptionType {
  DEFAULT = 'default',
  TAG = 'tag',
  FOLLOWING = 'following',
  USER_STATS = 'userStats',
  PLAY_HISTORY = 'playHistory',
}

registerEnumType(UserSubscriptionType, {
  name: 'UserSubscriptionType',
});

export enum UserSubscriptionSortBy {
  TOP = 'top',
  NEW = 'new',
  RANDOM = 'random',
}

registerEnumType(UserSubscriptionSortBy, {
  name: 'UserSubscriptionSortBy',
});

export enum UserSubscriptionEntity {
  ALBUM = 'Album',
  ARTIST = 'Artist',
  LABEL = 'Label',
  PLAYLIST = 'Playlist',
  SONG = 'Song',
  USER = 'User',
}

registerEnumType(UserSubscriptionEntity, {
  name: 'UserSubscriptionEntity',
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

  @Field(() => UserSubscriptionEntity, { nullable: true })
  @Column({ nullable: true })
  entity?: UserSubscriptionEntity;

  @Field(() => UserSubscriptionSortBy, { nullable: true })
  @Column({ nullable: true })
  sortBy?: UserSubscriptionSortBy;

  @Field(() => UserSubscriptionType)
  @Column()
  type: UserSubscriptionType;

  @Field({ nullable: true })
  @Column({ nullable: true })
  payload?: string;

  @Field()
  @Column()
  title: string;

  @Field()
  @Column({ default: true })
  active: boolean;

  @Field()
  @Column({ default: false })
  favourited: boolean;

  @ManyToOne(() => User, (user) => user.subscriptions)
  @Field(() => User)
  user!: User;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
