'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING
  }, {});
  Song.associate = function(models) {
    // associations can be defined here
  };
  return Song;
};