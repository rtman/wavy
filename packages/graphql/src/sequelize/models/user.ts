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
    () => UserSongFavourites,
  )
  user_favourites: Song[];

  @BelongsToMany(
    () => Artist,
    () => UserArtistFollowing,
  )
  user_following: Artist[];

  @BelongsToMany(
    () => Song,
    () => UserSongRecentlyPlayed,
  )
  user_recently_played: Song[];

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
