import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Playlist} from './playlist';

@Table({tableName: 'userPlaylist'})
export class UserPlaylist extends Model<UserPlaylist> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId: string;

  @ForeignKey(() => Playlist)
  @PrimaryKey
  @Column
  playlistId: string;
}
