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
      albums: DataTypes.ARRAY(DataTypes.STRING),
      // songs: DataTypes.STRING,
      description: DataTypes.STRING
    },
    {}
  );
  Artist.associate = function(models) {
    // associations can be defined here
    // Artist.hasMany(models.Song, {
    //   foreignKey: 'artist_id'
    //   // type: DataTypes.UUID
    // });
  };
  return Artist;
};
