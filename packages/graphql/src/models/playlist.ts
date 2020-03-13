import {Playlist} from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface PlaylistModel extends Sequelize.Model, Playlist {}

// Need to declare the static model so `findOne` etc. use correct types.
type PlaylistModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): PlaylistModel;
};

const playlist = (
  sequelize: Sequelize.Sequelize,
  DataTypes: typeof Sequelize.DataTypes,
): PlaylistModelStatic => {
  const Playlist_ = sequelize.define('playlist', {
    id: {
      type: DataTypes.UUIDV4,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    user_ids: DataTypes.ARRAY(DataTypes.INTEGER),
    songs: DataTypes.ARRAY(DataTypes.INTEGER),
  }) as PlaylistModelStatic;

  return Playlist_;
};

export default playlist;
