const song = (sequelize: any, DataTypes: any) => {
  const Song = sequelize.define('song', {
    title: DataTypes.STRING,
    artist: DataTypes.STRING
  });
  return Song;
};

export default song;
