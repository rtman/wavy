import {Artist} from '../types';
import * as Sequelize from 'sequelize';

// We need to declare an interface for our model that is basically what our class would be
interface ArtistModel extends Sequelize.Model {
  readonly name: Artist['name'];
  readonly albums: Artist['albums'];
  readonly description: Artist['description'];
}

// Need to declare the static model so `findOne` etc. use correct types.
type ArtistModelStatic = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): ArtistModel;
};

const artist = (
  sequelize: Sequelize.Sequelize,
  DataTypes: typeof Sequelize.DataTypes,
): ArtistModelStatic => {
  const Artist_ = sequelize.define('artist', {
    name: DataTypes.STRING,
    albums: DataTypes.ARRAY(DataTypes.STRING),
    description: DataTypes.STRING,
  }) as ArtistModelStatic;

  return Artist_;
};

export default artist;
