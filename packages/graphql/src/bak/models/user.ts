// import {User} from '../types';
// import {Playlist} from './playlist';
// import {DataTypes, Model} from 'sequelize';
// import {sequelize} from './index';
// import {Table, Column, Model, HasMany} from 'sequelize-typescript';

// // We need to declare an interface for our model that is basically what our class would be
// interface UserModel extends Sequelize.Model, User {}

// // Need to declare the static model so `findOne` etc. use correct types.
// type UserModelStatic = typeof Sequelize.Model & {
//   new (values?: object, options?: Sequelize.BuildOptions): UserModel;
// };

// const user = (
//   sequelize: Sequelize.Sequelize,
//   DataTypes: typeof Sequelize.DataTypes,
// ): Sequelize.Model => {
//   const User_ = sequelize.define('user', {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//     },
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     //TODO: change to UUID datatypes
//     favourites: DataTypes.ARRAY(DataTypes.INTEGER),
//     following: DataTypes.ARRAY(DataTypes.INTEGER),
//     recentlyPlayed: DataTypes.ARRAY(DataTypes.INTEGER),
//   }) as UserModelStatic;

//   User_.belongsToMany('playlist', {
//     through: 'playlistUser',
//   });

//   return User_;
// };

// export default user;

// export class User extends Model {
//   public id!: string;
//   public firstName: string;
//   public lastName: string;
//   public email: string;
//   public password: string;
//   public favourites: number[];
//   public following: number[];
//   public recentlyPlayed: number[]; // timestamps!
//   public readonly createdAt!: Date;
//   public readonly updatedAt!: Date;
// }

// User.init(
//   {
//     id: {
//       type: DataTypes.STRING,
//       primaryKey: true,
//     },
//     firstName: DataTypes.STRING,
//     lastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     favourites: DataTypes.ARRAY(DataTypes.INTEGER),
//     following: DataTypes.ARRAY(DataTypes.INTEGER),
//     recentlyPlayed: DataTypes.ARRAY(DataTypes.INTEGER),
//   },
//   {
//     sequelize,
//     tableName: 'user',
//   },
// );

// User.belongsToMany(Playlist, {targetKey: 'id', through: 'userPlaylists'});
import {
  Table,
  CreatedAt,
  UpdatedAt,
  Column,
  Model,
  PrimaryKey,
} from 'sequelize-typescript';

@Table
export class User extends Model<User> {
  @PrimaryKey
  @Column
  id: string;
  @Column
  firstName: string;
  @Column
  lastName: string;
  @Column
  email: string;
  @Column
  password: string;
  @Column
  favourites: string[];
  @Column
  following: string[];
  @Column
  recentlyPlayed: string[];
  @CreatedAt
  @Column
  createdAt!: Date;
  @UpdatedAt
  @Column
  updatedAt!: Date;
}
