import {
  BelongsToMany,
  CreatedAt,
  Column,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
} from 'sequelize-typescript';
import {Artist} from './artist';
import {Playlist} from './playlist';
import {Song} from './song';
import {UserPlaylist} from './userPlaylist';
import {UserSongFavourites} from './userSongFavourites';
import {UserArtistFollowing} from './userArtistFollowing';
import {UserSongRecentlyPlayed} from './userSongRecentlyPlayed';

@Table({tableName: 'users'})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: string;

  @Column
  firstName: string;

  @Column
  lastName: string;

  @Column
  email: string;

  @Column
  password: string;

  @BelongsToMany(
    () => Song,
    () => UserSongFavourites,
  )
  favourites: Song[];

  @BelongsToMany(
    () => Artist,
    () => UserArtistFollowing,
  )
  following: Artist[];

  @BelongsToMany(
    () => Song,
    () => UserSongRecentlyPlayed,
  )
  recentlyPlayed: Song[];

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;

  @BelongsToMany(
    () => Playlist,
    () => UserPlaylist,
  )
  playlists: Playlist[];
}
