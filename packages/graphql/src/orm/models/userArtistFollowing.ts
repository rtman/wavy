import {
  Column,
  ForeignKey,
  Model,
  Table,
  PrimaryKey
} from 'sequelize-typescript';
import { User } from './user';
import { Artist } from './artist';

@Table({ tableName: 'userArtistFollowing' })
export class UserArtistFollowing extends Model<UserArtistFollowing> {
  @ForeignKey(() => User)
  @PrimaryKey
  @Column
  userId: string;

  @ForeignKey(() => Artist)
  @PrimaryKey
  @Column
  artistId: string;
}
