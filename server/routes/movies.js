import express from 'express';
import Movie from '../models/movie.js';

const router = express.Router();

router.get('/', async (req, res) => {
  const movies = await Movie.findAll();
  res.json(movies);
});

router.post('/', async (req, res) => {
  const movie = await Movie.create(req.body);
  res.json(movie);
});

router.put('/:id', async (req, res) => {
  const movie = await Movie.update(req.body, {
    where: { id: req.params.id },
  });
  res.json(movie);
});

router.delete('/:id', async (req, res) => {
  await Movie.destroy({
    where: { id: req.params.id },
  });
  res.sendStatus(204);
});

export default router;
