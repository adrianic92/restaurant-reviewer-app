import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

function Reviews() {
    const [reviews, setReviews] = useState([])
    useEffect( () => {
        fetch('/reviews')
        .then(resp => resp.json())
        .then(data => setReviews(data))
    }, [] )

    return (
        <div>
            <ReviewList reviews={reviews}/>
        </div>
    )
}

export default Reviews;