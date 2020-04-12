import { Artist } from './artist';
import { Playlist } from './playlist';
import { Song } from './song';
// import { UserPlaylist } from './userPlaylist';
// import { UserSongFavourites } from './userSongFavourites';
// import { UserArtistFollowing } from './userArtistFollowing';
// import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { ObjectType, Field, ID } from 'type-graphql';

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

  @Field(() => [Song], { nullable: true })
  @ManyToMany(() => Song)
  @JoinTable({ name: 'userSongFavourites' })
  favourites: Song[];

  @Field(() => [Artist], { nullable: true })
  @ManyToMany(() => Artist)
  @JoinTable({ name: 'userArtistFollowing' })
  following: Artist[];

  @Field(() => [Song], { nullable: true })
  @ManyToMany(() => Song)
  @JoinTable({ name: 'userSongRecentlyPlayed' })
  recentlyPlayed: Song[];

  @Field(() => Date)
  @CreateDateColumn()
  createdAt!: Date;

  @Field(() => Date)
  @UpdateDateColumn()
  updatedAt!: Date;

  @Field(() => [Playlist], { nullable: true })
  @ManyToMany(() => Playlist)
  @JoinTable({ name: 'userPlaylist' })
  playlists: Playlist[];
}
