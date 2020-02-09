'use strict';
module.exports = (sequelize, DataTypes) => {
  const Artist = sequelize.define(
    'Artist',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: DataTypes.STRING,
      // genres: DataTypes.ARRAY(DataTypes.STRING),
      genres: DataTypes.ARRAY(DataTypes.STRING),
      // songs: DataTypes.STRING,
      description: DataTypes.STRING,
      albums: DataTypes.STRING
    },
    {}
  );
  Artist.associate = function(models) {
    // associations can be defined here
    // Artist.hasMany(models.Song, {
    //   foreignKey: 'artistId'
    //   // type: DataTypes.UUID
    // });
  };
  return Artist;
};
