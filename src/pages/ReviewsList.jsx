import { useEffect, useState } from 'react';
import { fetchMovies, deleteMovie } from '../api';
import MovieForm from './MovieForm';

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    const loadMovies = async () => {
      const moviesData = await fetchMovies();
      setMovies(moviesData);
    };
    loadMovies();
  }, []);

  const handleDelete = async (id) => {
    await deleteMovie(id);
    setMovies(movies.filter(movie => movie.id !== id));
  };

  const handleSave = async () => {
    const moviesData = await fetchMovies();
    setMovies(moviesData);
    setSelectedMovie(null);
  };

  return (
    <div className="container my-4">
      <h2 className="mb-4">Movies</h2>
      <MovieForm movie={selectedMovie} onSave={handleSave} />
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead className="thead-dark">
            <tr>
              <th>Title</th>
              <th>Genre</th>
              <th>Release Date</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {movies.map(movie => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.genre}</td>
                <td>{movie.release_date}</td>
                <td>{movie.rating}</td>
                <td>
                  <button className="btn btn-info btn-sm me-2" onClick={() => setSelectedMovie(movie)}>Edit</button>
                  <button className="btn btn-danger btn-sm" onClick={() => handleDelete(movie.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MoviesList;
