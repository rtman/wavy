import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

import { SongPlaylist } from './songPlaylist';
import { UserPlaylist } from './userPlaylist';
import { UserPlaylistFollowing } from './userPlaylistFollowing';
import { UserSubscriptionEntity } from './userSubscription';

@Entity('playlist')
@ObjectType()
export class Playlist {
  @Field(() => ID)
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Field(() => String)
  @Column()
  title: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageStoragePathLarge?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageStoragePathSmall?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageStoragePathThumb?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlLarge?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlSmall?: string;

  @Field({ nullable: true })
  @Column({ nullable: true })
  profileImageUrlThumb?: string;

  @Field(() => [SongPlaylist], { nullable: true })
  @OneToMany(
    () => SongPlaylist,
    (songPlaylist) => songPlaylist.playlist
  )
  songs: SongPlaylist[];

  @Field(() => [UserPlaylist], { nullable: true })
  @OneToMany(
    () => UserPlaylist,
    (userPlaylist) => userPlaylist.playlist
  )
  users: UserPlaylist[];

  @Field(() => [UserPlaylistFollowing], { nullable: true })
  @OneToMany(
    () => UserPlaylistFollowing,
    (userPlaylistFollowing) => userPlaylistFollowing.playlist
  )
  usersFollowing: UserPlaylistFollowing[];

  @Field(() => Number)
  @Column({ default: 0 })
  followers: number;

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => UserSubscriptionEntity)
  @Column({ default: UserSubscriptionEntity.PLAYLIST, update: false })
  type: UserSubscriptionEntity;
}
