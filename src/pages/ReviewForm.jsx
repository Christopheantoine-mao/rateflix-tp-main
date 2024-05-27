import { useState } from 'react';
import PropTypes from 'prop-types';
import { addReview, updateReview } from '../api';

const ReviewForm = ({ review, onSave }) => {
  const [movieId, setMovieId] = useState(review ? review.movie_id : '');
  const [user, setUser] = useState(review ? review.user : '');
  const [reviewText, setReviewText] = useState(review ? review.review : '');
  const [rating, setRating] = useState(review ? review.rating : '');
  const [createdAt, setCreatedAt] = useState(review ? review.created_at : '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const reviewData = { movie_id: movieId, user, review: reviewText, rating, created_at: createdAt };
    if (review) {
      await updateReview(review.id, reviewData);
    } else {
      await addReview(reviewData);
    }
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="container my-4">
      <div className="mb-3">
        <label className="form-label">Movie/Show ID</label>
        <input
          type="number"
          className="form-control"
          value={movieId}
          onChange={(e) => setMovieId(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">User</label>
        <input
          type="text"
          className="form-control"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Review</label>
        <textarea
          className="form-control"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        ></textarea>
      </div>
      <div className="mb-3">
        <label className="form-label">Rating</label>
        <input
          type="number"
          className="form-control"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Created At</label>
        <input
          type="datetime-local"
          className="form-control"
          value={createdAt}
          onChange={(e) => setCreatedAt(e.target.value)}
        />
      </div>
      <button type="submit" className="btn btn-primary">Save</button>
    </form>
  );
};

ReviewForm.propTypes = {
  review: PropTypes.shape({
    id: PropTypes.number,
    movie_id: PropTypes.number,
    user: PropTypes.string,
    review: PropTypes.string,
    rating: PropTypes.number,
    created_at: PropTypes.string,
  }),
  onSave: PropTypes.func.isRequired,
};

export default ReviewForm;
