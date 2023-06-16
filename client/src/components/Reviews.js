import React from "react";
import AllReviewList from "./AllReviewList";

function Reviews({reviews, change, deleteAll}) {
    
    if (!reviews) { return ( <h1>Loading...</h1>)}

    const allReviews = reviews.map((review) => {
        return(
            <AllReviewList key={review.id} review={review} change={change} deleteAll={deleteAll}/>
        )})

    return (
        <div>
            {change ? <h1>All Reviews</h1> : <h1>My Reviews</h1>}
            {allReviews}
        </div>
    )
}

export default Reviews;