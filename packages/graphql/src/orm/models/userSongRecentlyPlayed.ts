import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Song} from './song';

@Table({tableName: 'userSongRecentlyPlayed'})
export class UserSongRecentlyPlayed extends Model<UserSongRecentlyPlayed> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId: string;

  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  songId: string;

  @Column
  timeStamp: Date;
}
