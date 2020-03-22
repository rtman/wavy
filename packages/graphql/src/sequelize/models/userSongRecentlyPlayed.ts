import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Song} from './song';

@Table({tableName: 'user_song_recently_played'})
export class UserSongRecentlyPlayed extends Model<UserSongRecentlyPlayed> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  user_id: string;

  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  song_id: string;

  @Column
  time_stamp: Date;
}
