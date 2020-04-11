// import {
//   BelongsToMany,
//   CreatedAt,
//   Column,
//   Model,
//   PrimaryKey,
//   UpdatedAt,
//   Table,
// } from 'sequelize-typescript';
import { Artist } from './artist';
import { Playlist } from './playlist';
import { Song } from './song';
import { UserPlaylist } from './userPlaylist';
import { UserSongFavourites } from './userSongFavourites';
import { UserArtistFollowing } from './userArtistFollowing';
import { UserSongRecentlyPlayed } from './userSongRecentlyPlayed';

import {
  Entity,
  Column,
  PrimaryColumn,
  ManyToMany,
  JoinTable,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
// import { ObjectType, Field, ID } from 'type-graphql';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @ManyToMany(() => Song)
  @JoinTable({ name: 'userSongFavourites' })
  favourites: Song[];

  @ManyToMany(() => Artist)
  @JoinTable({ name: 'userArtistFollowing' })
  following: Artist[];

  @ManyToMany(() => Song)
  @JoinTable({ name: 'userSongRecentlyPlayed' })
  recentlyPlayed: Song[];

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  @ManyToMany(() => Playlist)
  @JoinTable({ name: 'userPlaylist' })
  playlists: Playlist[];
}
