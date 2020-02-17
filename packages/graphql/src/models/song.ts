import {Song} from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface SongModel extends Sequelize.Model, Song {}

// Need to declare the static model so `findOne` etc. use correct types.
type SongModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): SongModel;
};

const song = (
  sequelize: Sequelize.Sequelize,
  DataTypes: typeof Sequelize.DataTypes,
): SongModelStatic => {
  const Song_ = sequelize.define('song', {
    title: DataTypes.STRING,
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'artists', // name of Source model
        key: 'id', // key in Source model that we're referencing
      },
    },
    // album_id: {
    //   type: Sequelize.INTEGER,
    //   references: {
    //     model: 'albums', // name of Source model
    //     key: 'id', // key in Source model that we're referencing
    //   },
    // },
    album_id: DataTypes.INTEGER,
    genres: DataTypes.ARRAY(DataTypes.STRING),
    url: DataTypes.STRING,
    image: DataTypes.STRING,
    duration: DataTypes.INTEGER,
    date: DataTypes.DATE,
  }) as SongModelStatic;

  return Song_;
};

export default song;
