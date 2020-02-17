import {Album} from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface AlbumModel extends Sequelize.Model, Album {}

// Need to declare the static model so `findOne` etc. use correct types.
type AlbumModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): AlbumModel;
};

const artist = (
  sequelize: Sequelize.Sequelize,
  DataTypes: typeof Sequelize.DataTypes,
): AlbumModelStatic => {
  const Album_ = sequelize.define('album', {
    title: DataTypes.STRING,
    artist_id: DataTypes.STRING,
    song_ids: DataTypes.ARRAY(DataTypes.STRING),
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  }) as AlbumModelStatic;

  return Album_;
};

export default artist;
