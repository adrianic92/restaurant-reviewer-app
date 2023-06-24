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
      <div className='card'>
        <div className='details' key={review.id}>
        
            <h2>{review.restaurant.name}</h2>
            <h3>
            {review.description}
            <br/>
            <span className='stars'>{"★".repeat(review.rating)}</span>
            </h3>
            {
            change ? 
            <h4 className='by'>{review.user.name}</h4> : 
            <div>
              <button className="submitButton" onClick={handleEdit}>Edit Review</button>
              <button className="submitButton delete" onClick={handleDelete}>Delete Review</button>
            </div>
            }
        </div>
      </div>
    </div>
  );
};

export default AllReviewList;