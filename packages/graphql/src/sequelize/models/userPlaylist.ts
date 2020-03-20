import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Playlist} from './playlist';

@Table({tableName: 'user_playlist'})
export class UserPlaylist extends Model<UserPlaylist> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  user_id: string;

  @ForeignKey(() => Playlist)
  @PrimaryKey
  @Column
  playlist_id: string;
}
