import {
  BelongsToMany,
  Column,
  CreatedAt,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table
} from 'sequelize-typescript';
import { Song } from './song';
import { SongPlaylist } from './songPlaylist';
import { User } from './user';
import { UserPlaylist } from './userPlaylist';

@Table({ tableName: 'playlists' })
export class Playlist extends Model<Playlist> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  title: string;

  @Column
  description: string;

  @Column
  image: string;

  @BelongsToMany(
    () => Song,
    () => SongPlaylist
  )
  songs: Array<Song & { SongPlaylist: SongPlaylist }>;

  @BelongsToMany(
    () => User,
    () => UserPlaylist
  )
  users: Array<User & { UserPlaylist: UserPlaylist }>;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
