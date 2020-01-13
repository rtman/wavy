import {Song} from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface SongModel extends Sequelize.Model {
  readonly title: Song['title'];
  readonly artist: Song['artist'];
  readonly album: Song['album'];
  readonly genre: Song['genre'];
  readonly url: Song['url'];
  readonly artwork: Song['artwork'];
  readonly darte: Song['date'];
}

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
    artist: DataTypes.STRING,
    album: DataTypes.STRING,
    genre: DataTypes.STRING,
    url: DataTypes.STRING,
    artwork: DataTypes.STRING,
    date: DataTypes.DATE,
  }) as SongModelStatic;

  return Song_;
};

export default song;
