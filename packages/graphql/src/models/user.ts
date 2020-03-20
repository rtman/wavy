import {
  BelongsToMany,
  CreatedAt,
  Column,
  Model,
  PrimaryKey,
  UpdatedAt,
  Table,
} from 'sequelize-typescript';
import {DataTypes} from 'sequelize';
import {Playlist} from './playlist';
import {UserPlaylist} from './userPlaylist';

@Table({tableName: 'users'})
export class User extends Model<User> {
  @PrimaryKey
  @Column
  user_id: string;
  @Column
  user_firstName: string;
  @Column
  user_lastName: string;
  @Column
  user_email: string;
  @Column
  user_password: string;
  @Column({type: DataTypes.ARRAY(DataTypes.INTEGER)})
  user_favourites: number[];
  @Column({type: DataTypes.ARRAY(DataTypes.INTEGER)})
  user_following: number[];
  @Column({type: DataTypes.ARRAY(DataTypes.INTEGER)})
  user_recentlyPlayed: number[];
  @CreatedAt
  @Column
  user_createdAt!: Date;
  @UpdatedAt
  @Column
  user_updatedAt!: Date;
  @BelongsToMany(() => Playlist, {
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE',
    through: () => UserPlaylist,
  })
  playlists: Array<Playlist & {UserPlaylist: UserPlaylist}>;
}
