import React from 'react';

function AllReviewList({ review, change, deleteAll, setSelectedReview, setShow }) {
  
  function handleEdit() {
    setSelectedReview(review)
    setShow(true)
  }

  function handleDelete() {
    fetch(`/reviews/${review.id}`, {
      method: "DELETE"
    })
    .then(() => deleteAll(review))
  }

  return (
    <div className='block'>
        <div className='details' key={review.id}>
        
            <h2>{review.restaurant.name}</h2>
            <h3>
            {review.description}
            <br/>
            <span className='stars'>{"★".repeat(review.rating)}</span>
            </h3>
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