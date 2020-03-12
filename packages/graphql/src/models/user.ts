import {User} from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface UserModel extends Sequelize.Model, User {}

// Need to declare the static model so `findOne` etc. use correct types.
type UserModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): UserModel;
};

const user = (
  sequelize: Sequelize.Sequelize,
  DataTypes: typeof Sequelize.DataTypes,
): UserModelStatic => {
  const User_ = sequelize.define('user', {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    favourites: DataTypes.ARRAY(DataTypes.INTEGER),
    following: DataTypes.ARRAY(DataTypes.INTEGER),
    recentlyPlayed: DataTypes.ARRAY(DataTypes.INTEGER),
  }) as UserModelStatic;

  return User_;
};

export default user;
