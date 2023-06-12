import React from 'react';
import '../ReviewList.css';

function ReviewList({ reviews }) {
  return (
    <div className="review-list-container">
      {reviews.map((review) => (
        <div key={review.id} className="review-item">
          <h3>{review.title}</h3>
          <p>{review.description}</p>
          <p className="review-user">User: {review.user.name}</p>
          <p className="review-restaurant">Restaurant: {review.restaurant.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ReviewList;