'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    'Song',
    {
      title: DataTypes.STRING,
      artist: DataTypes.STRING,
      url: DataTypes.STRING,
      album: DataTypes.STRING,
      genres: DataTypes.ARRAY,
      artwork: DataTypes.STRING,
      duration: DataTypes.INTEGER,
      date: DataTypes.DATE
    },
    {}
  );
  Song.associate = function(models) {
    // associations can be defined here
    // Song.belongsTo(models.Artist);
    // Song.belongsTo(models.Album);
  };
  return Song;
};
