import React from 'react';

function AllReviewList({ review, change, deleteAll }) {
  
  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(() => deleteAll(review))
  }

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
            {change ? `By: ${review.user.name}` : <button onClick={handleDelete}>Delete Review</button>}
          </p>
        </div>
    </div>
  );
};

export default AllReviewList;