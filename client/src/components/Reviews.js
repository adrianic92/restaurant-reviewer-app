import React, {useState} from "react";
import AllReviewList from "./AllReviewList";

function Reviews({reviews, change, deleteAll}) {
    
    const [edit, setEdit] = useState(false)

    function handleEdit() {
      setEdit(edit => !edit)
      console.log(edit)
    }

    if (!reviews) { return ( <h1>Loading...</h1>)}

    const allReviews = reviews.map((review) => {
        return(
            <AllReviewList key={review.id} review={review} change={change} deleteAll={deleteAll} handleEdit={handleEdit}/>
        )})

    return (
        <div>
            {change ? <h1>All Reviews</h1> : <h1>My Reviews</h1>}
            {allReviews}
        </div>
    )
}

export default Reviews;