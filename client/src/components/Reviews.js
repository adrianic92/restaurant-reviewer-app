import React, { useEffect, useState } from "react";
import ReviewList from "./ReviewList";

function Reviews({title, reviews}) {

    return (
        <div>
            {title}
            <ReviewList reviews={reviews}/>
        </div>
    )
}

export default Reviews;