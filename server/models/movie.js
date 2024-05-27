import { DataTypes } from 'sequelize';
import sequelize from '../config/database.js';

const Movie = sequelize.define('Movie', {
  type: {
    type: DataTypes.ENUM('movie', 'serie'),
    allowNull: false,
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  season: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  release_date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
});

export default Movie;
