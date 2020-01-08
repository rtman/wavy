import { Song } from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface SongModel extends Sequelize.Model {
  readonly title: Song['title'];
  readonly artist: Song['artist'];
}

// Need to declare the static model so `findOne` etc. use correct types.
type SongModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): SongModel;
};

const song = (sequelize: Sequelize.Sequelize, DataTypes: Sequelize.DataTypes): SongModelStatic => {
  const Song_ = sequelize.define('song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING
  }) as SongModelStatic;

  return Song_;
};

export default song;
