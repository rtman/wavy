import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Song} from './song';

@Table({tableName: 'user_song_favourites'})
export class UserSongFavourites extends Model<UserSongFavourites> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  user_id: string;

  @ForeignKey(() => Song)
  @PrimaryKey
  @Column
  song_id: string;
}
