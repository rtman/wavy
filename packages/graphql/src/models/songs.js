const songs = (sequelize, DataTypes) => {
  const Songs = sequelize.define('songs', {
    title: DataTypes.STRING
  });
  return Songs;
};

export default songs;
