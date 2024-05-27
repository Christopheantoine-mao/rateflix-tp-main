import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('rateflix', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  logging: false, // ou true si besoin
  // port : 8889, pour les Mac
});

export default sequelize;
