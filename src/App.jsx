import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesList from './pages/MoviesList';
import ReviewsList from './pages/ReviewsList';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <Router>
      <NavBar />
      <div>
        <section className="section">
          <div className="container">
            <Routes>
              <Route path="/" element={<MoviesList />} />
              <Route path="/reviews" element={<ReviewsList />} />
            </Routes>
          </div>
        </section>
      </div>
    </Router>
  );
};

export default App;
