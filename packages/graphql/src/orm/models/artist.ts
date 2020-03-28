import {
  BelongsToMany,
  CreatedAt,
  Column,
  HasMany,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
} from 'sequelize-typescript';
import {Album} from './album';
import {Song} from './song';
import {User} from './user';
import {UserArtistFollowing} from './userArtistFollowing';

@Table({tableName: 'artists'})
export class Artist extends Model<Artist> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  id: string;

  @Column
  name: string;

  @HasMany(() => Album)
  albums: Album[];

  @HasMany(() => Song)
  songs: Song[];

  @Column
  image: string;

  @Column
  description: string;

  @BelongsToMany(
    () => User,
    () => UserArtistFollowing,
  )
  usersFollowing: Array<User & {UserArtistFollowing: UserArtistFollowing}>;

  @CreatedAt
  @Column
  createdAt!: Date;

  @UpdatedAt
  @Column
  updatedAt!: Date;
}
