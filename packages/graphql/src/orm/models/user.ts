import {
  Entity,
  Column,
  PrimaryColumn,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';
import { UserPlaylist } from './userPlaylist';
import { UserSongFavourites } from './userSongFavourites';
import { UserArtistFollowing } from './userArtistFollowing';
import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

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
  favourites: UserSongFavourites[];

  @Field(() => [UserArtistFollowing], { nullable: true })
  @OneToMany(
    () => UserArtistFollowing,
    (userArtistFollowing) => userArtistFollowing.user
  )
  following: UserArtistFollowing[];

  @Field(() => [UserSongRecentlyPlayed], { nullable: true })
  @OneToMany(
    () => UserSongRecentlyPlayed,
    (userSongRecentlyPlayed) => userSongRecentlyPlayed.user
  )
  recentlyPlayed: UserSongRecentlyPlayed[];

  @Field(() => [UserPlaylist], { nullable: true })
  @OneToMany(
    () => UserPlaylist,
    (userPlaylist) => userPlaylist.user
  )
  playlists: UserPlaylist[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;
}
