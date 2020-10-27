import { Field, ID, ObjectType } from 'type-graphql';
import {
  Column,
  CreateDateColumn,
  Entity,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

import { UserArtist } from './userArtist';
import { UserArtistFollowing } from './userArtistFollowing';
import { UserLabel } from './userLabel';
import { UserLabelFollowing } from './userLabelFollowing';
import { UserPlaylist } from './userPlaylist';
import { UserPlaylistFollowing } from './userPlaylistFollowing';
import { UserSongFavourites } from './userSongFavourites';
import { UserSubscription } from './userSubscription';
import { SubscriptionEntity } from './userSubscription';

@Entity('user')
@ObjectType()
export class User {
  @Field(() => ID)
  @PrimaryColumn()
  id: string;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => [UserSongFavourites], { nullable: true })
  @OneToMany(
    () => UserSongFavourites,
    (userSongFavourites) => userSongFavourites.user
  )
  songFavourites: UserSongFavourites[];

  @Field(() => [UserArtistFollowing], { nullable: true })
  @OneToMany(
    () => UserArtistFollowing,
    (userArtistFollowing) => userArtistFollowing.user
  )
  artistFollows: UserArtistFollowing[];

  @Field(() => [UserLabelFollowing], { nullable: true })
  @OneToMany(
    () => UserLabelFollowing,
    (userLabelFollowing) => userLabelFollowing.user
  )
  labelFollows: UserLabelFollowing[];

  @Field(() => [UserPlaylistFollowing], { nullable: true })
  @OneToMany(
    () => UserPlaylistFollowing,
    (userPlaylistFollowing) => userPlaylistFollowing.user
  )
  playlistFollows: UserPlaylistFollowing[];

  @Field(() => [UserPlaylist], { nullable: true })
  @OneToMany(
    () => UserPlaylist,
    (userPlaylist) => userPlaylist.user
  )
  playlists: UserPlaylist[];

  @Field(() => [UserArtist], { nullable: true })
  @OneToMany(
    () => UserArtist,
    (userArtist) => userArtist.user
  )
  artists: UserArtist[];

  @Field(() => [UserLabel], { nullable: true })
  @OneToMany(
    () => UserLabel,
    (userLabel) => userLabel.user
  )
  labels: UserLabel[];

  @Field(() => [UserSubscription], { nullable: true })
  @OneToMany(
    () => UserSubscription,
    (userSubscription) => userSubscription.user
  )
  subscriptions: UserSubscription[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => SubscriptionEntity)
  @Column({ default: SubscriptionEntity.USER, update: false })
  type: SubscriptionEntity;
}
