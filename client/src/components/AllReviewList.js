import React from 'react';
import { Link } from 'react-router-dom';

function AllReviewList({ review, change, deleteAll, handleEdit }) {
  
  

  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(() => deleteAll(review))
  }

  return (
    <div className="review-list-container">
        <div key={review.id} className="review-item">
        
            {review.restaurant.name}
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
              <button onClick={handleEdit}>Edit Restaurant</button>
              <Link to={`/myreviews/edit/${review.id}`}>Edit Restaurant Review</Link>
            </div>
            }
        </div>
    </div>
  );
};

export default AllReviewList;