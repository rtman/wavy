import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Song} from './song';

@Table({tableName: 'userSongFavourites'})
export class UserSongFavourites extends Model<UserSongFavourites> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId: string;

  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  songId: string;
}
