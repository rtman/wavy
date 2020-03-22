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
import {UserFavourites} from './userFavourites';
import {UserFollowing} from './userFollowing';
import {UserRecentlyPlayed} from './userRecentlyPlayed';

@Table({tableName: 'users'})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  user_id: string;

  @Column
  user_firstName: string;

  @Column
  user_lastName: string;

  @Column
  user_email: string;

  @Column
  user_password: string;

  @BelongsToMany(
    () => Song,
    () => UserFavourites,
  )
  user_favourites: Song[];

  @BelongsToMany(
    () => Artist,
    () => UserFollowing,
  )
  user_following: Artist[];

  @BelongsToMany(
    () => Song,
    () => UserRecentlyPlayed,
  )
  user_recentlyPlayed: Song[];

  @CreatedAt
  @Column
  user_createdAt!: Date;

  @UpdatedAt
  @Column
  user_updatedAt!: Date;

  @BelongsToMany(
    () => Playlist,
    () => UserPlaylist,
  )
  user_playlists: Playlist[];
}
