import React, { useEffect, useState } from "react";
import AllReviewList from "./AllReviewList";

function Reviews({title, reviews, setAll}) {
    
    const allReviews = reviews.map((review) => {
        return(
            <AllReviewList key={review.id} review={review}/>
        )})

    if (title.props.children === 'All Reviews') {
        console.log(true)
    } else { console.log(false)}

    return (
        <div>
            {title}
            {allReviews}
        </div>
    )
}

export default Reviews;