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
  artist_id: string;

  @Column
  artist_name: string;

  @HasMany(() => Album)
  artist_albums: Album[];

  @HasMany(() => Song)
  artist_songs: Song[];

  @Column
  artist_image: string;

  @Column
  artist_description: string;

  @BelongsToMany(
    () => User,
    () => UserArtistFollowing,
  )
  artist_users_following: User[];

  @CreatedAt
  @Column
  artist_createdAt!: Date;

  @UpdatedAt
  @Column
  artist_updatedAt!: Date;
}
