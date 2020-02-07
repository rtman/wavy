'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define('Artist', {
    name: DataTypes.STRING,
    genres: DataTypes.ARRAY,
    songs: DataTypes.STRING,
    description: DataTypes.STRING,
    albums: DataTypes.ARRAY
  }, {});
  Artist.associate = function(models) {
    // associations can be defined here
  };
  return Artist;
};