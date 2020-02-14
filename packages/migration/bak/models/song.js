'use strict';
module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define(
    'Song',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      artist_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'artists',
          key: 'id'
        }
      }
    },
    {}
  );
  Song.associate = function(models) {
    // associations can be defined here
    // Song.belongsTo(models.Artist, {
    //   foreignKey: 'songId'
    //   // type: DataTypes.UUID
    // });
    // Song.belongsTo(models.Album);
  };
  return Song;
};
