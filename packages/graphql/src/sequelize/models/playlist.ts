import {DataTypes} from 'sequelize';
import {
  BelongsToMany,
  Column,
  CreatedAt,
  IsUUID,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
  HasMany,
} from 'sequelize-typescript';
import {User} from './user';
import {UserPlaylist} from './userPlaylist';

@Table({tableName: 'playlists'})
export class Playlist extends Model<Playlist> {
  @IsUUID(4)
  @PrimaryKey
  @Column
  playlist_id: string;
  @Column
  playlist_title: string;
  @Column
  playlist_description: string;
  @Column
  playlist_image: string;
  @Column({type: DataTypes.ARRAY(DataTypes.UUID)})
  playlist_songs: string[];
  @CreatedAt
  @Column
  playlist_createdAt!: Date;
  @UpdatedAt
  @Column
  playlist_updatedAt!: Date;
  @BelongsToMany(
    () => User,
    () => UserPlaylist,
  )
  playlist_users: Array<User & {UserPlaylist: UserPlaylist}>;
  // @BelongsToMany(() => User, {
  //   onUpdate: 'CASCADE',
  //   onDelete: 'CASCADE',
  //   through: () => UserPlaylist,
  // })
  // playlist_users: User[];
}
