const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Movie = require('./movie');

const Review = sequelize.define('Review', {
  movie_id: {
    type: DataTypes.INTEGER,
    references: {
      model: Movie,
      key: 'id',
    },
  },
  user: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  review: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  rating: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

module.exports = Review;
