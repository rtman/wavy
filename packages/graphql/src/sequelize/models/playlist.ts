import {DataTypes} from 'sequelize';
import {
  BelongsToMany,
  Column,
  CreatedAt,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  HasMany,
  ForeignKey,
} from 'sequelize-typescript';
import {Song} from './song';
import {SongPlaylist} from './songPlaylist';
import {User} from './user';
import {UserPlaylist} from './userPlaylist';

@Table({tableName: 'playlists'})
export class Playlist extends Model<Playlist> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  playlist_id: string;

  @Column
  playlist_title: string;

  @Column
  playlist_description: string;

  @Column
  playlist_image: string;

  @BelongsToMany(
    () => Song,
    () => SongPlaylist,
  )
  playlist_songs: Array<Song & {SongPlaylist: SongPlaylist}>;

  @BelongsToMany(
    () => User,
    () => UserPlaylist,
  )
  playlist_users: Array<User & {UserPlaylist: UserPlaylist}>;

  @CreatedAt
  @Column
  playlist_createdAt!: Date;

  @UpdatedAt
  @Column
  playlist_updatedAt!: Date;
}
