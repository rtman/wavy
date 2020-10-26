import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { User } from './user';

export enum SubscriptionType {
  TOP = 'Top',
  NEW = 'New',
  RANDOM = 'Random',
}

registerEnumType(SubscriptionType, {
  name: 'SubscriptionType',
});

export enum EntityType {
  ALBUM = 'Album',
  ARTIST = 'Artist',
  LABEL = 'Label',
  PLAYLIST = 'Playlist',
  SONG = 'Song',
}

registerEnumType(EntityType, {
  name: 'EntityType',
});

@Entity('userSubscription')
@ObjectType()
export class UserSubscription {
  @Field(() => ID)
  @Generated('uuid')
  id: string;

  @Field(() => ID)
  @PrimaryColumn()
  userId: string;

  @Field(() => EntityType)
  @Column()
  entityType: EntityType;

  @Field(() => SubscriptionType)
  @Column()
  subscriptionType: SubscriptionType;

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
