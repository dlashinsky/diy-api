'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.song.belongsTo(models.album)
    }
  };
  song.init({
    song_title: DataTypes.STRING,
    song_length: DataTypes.TIME
  }, {
    sequelize,
    modelName: 'song',
  });
  return song;
};