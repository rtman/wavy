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
  USER = 'User',
}

registerEnumType(EntityType, {
  name: 'EntityType',
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

  @Field(() => EntityType)
  @Column()
  entityType: EntityType;

  @Field(() => SubscriptionType)
  @Column()
  subscriptionType: SubscriptionType;

  @Field({ nullable: true })
  @Column({ nullable: true })
  tag: string;

  @Field()
  @Column({ default: false })
  followerSubscription: boolean;

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
