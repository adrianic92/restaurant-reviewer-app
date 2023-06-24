import React from "react";

function ShowReviews({reviews}) {
    

    const allReviews = reviews.map(review => {
        return (
            <li key={review.id} className="list-item">"{review.description}" {"★".repeat(review.rating)} - {review.user.name}</li>
        )
      })
    return (
        <ul className="list">{allReviews}</ul>
    )
}

export default ShowReviews;