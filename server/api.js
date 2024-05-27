import express from 'express';
import cors from 'cors';
import sequelize from './config/database.js';
import './config/customConsoles.js';

import movieRoutes from './routes/movies.js';
import reviewRoutes from './routes/reviews.js';

const app = express();

// Utilisation du middleware CORS
app.use(cors());

// Utilisation du middleware pour parser les JSON
app.use(express.json());

// Utilisation des routes
app.use('/movies', movieRoutes);
app.use('/reviews', reviewRoutes);

// Connexion à la base de données
sequelize
  .authenticate()
  .then(() => {
    console.log('✅ Connection to the database has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Synchronisation des modèles avec la base de données
sequelize.sync({ force: true }).then(() => {
  console.log('✅ Database & tables created!');
});

// Définir le port d'écoute
const PORT = process.env.PORT || 5000;

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`✅ API Server is running on port ${PORT}`);
});
