import {Column, ForeignKey, Model, Table} from 'sequelize-typescript';
import {User} from './user';
import {Playlist} from './playlist';

@Table({tableName: 'user_playlist'})
export class UserPlaylist extends Model<UserPlaylist> {
  @ForeignKey(() => User)
  @Column
  user_id: string;

  @ForeignKey(() => Playlist)
  @Column
  playlist_id: number;
}
