import React from 'react';

function AllReviewList({ review }) {
  return (
    <div className="review-list-container">
        <div key={review.id} className="review-item">
          <p className="review-restaurant">
            {review.restaurant.name}
            <br/>
            {review.description}
            <br/>
            {"★".repeat(review.rating)}
            <br/>
            By: {review.user.name}
          </p>
        </div>
    </div>
  );
};

export default AllReviewList;