import React from 'react';

function AllReviewList({ review, change, deleteAll, setSelectedReview }) {
  
  function handleEdit() {
    setSelectedReview(review)
  }

  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(() => deleteAll(review))
  }

  return (
    <div className="review-list-container">
        <div key={review.id} className="review-item">
        
            <strong>{review.restaurant.name}</strong>
            <br/>
            {review.description}
            <br/>
            {"★".repeat(review.rating)}
            <br/>
            {
            change ? 
            `By: ${review.user.name}` : 
            <div>
              <button onClick={handleDelete}>Delete Review</button>
              <button onClick={handleEdit}>Edit Review</button>
            </div>
            }
        </div>
    </div>
  );
};

export default AllReviewList;