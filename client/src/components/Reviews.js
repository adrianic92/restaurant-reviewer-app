import React from "react";
import AllReviewList from "./AllReviewList";

function Reviews({title, reviews}) {
    
    if (!reviews) { return ( <h1>Loading...</h1>)}

    const allReviews = reviews.map((review) => {
        return(
            <AllReviewList key={review.id} review={review}/>
        )})

    return (
        <div>
            {title}
            {allReviews}
        </div>
    )
}

export default Reviews;