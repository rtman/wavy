import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey,
} from 'sequelize-typescript';
import {User} from './user';
import {Artist} from './artist';

@Table({tableName: 'user_artist_following'})
export class UserArtistFollowing extends Model<UserArtistFollowing> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  user_id: string;

  @ForeignKey(() => Artist)
  @PrimaryKey
  @Column
  artist_id: string;
}
