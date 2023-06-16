import React from "react";

function ShowReviews({reviews}) {
    

    const allReviews = reviews.map(review => {
        console.log(review)
        return (
            <li key={review.id}>"{review.description}" {"★".repeat(review.rating)} - {review.user.name}</li>
        )
      })
    return (
        <div>{allReviews}</div>
    )
}

export default ShowReviews;