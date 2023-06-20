import React, {useState} from "react";
import AllReviewList from "./AllReviewList";
import EditReview from "./EditReview";

function Reviews({reviews, change, deleteAll, updateAll}) {
    const [selectedReview, setSelectedReview] = useState(null)
    const [show, setShow] = useState(false)
    
    if (!reviews) { return ( <h1>Loading...</h1>)}

    const allReviews = reviews.map((review) => {
        return(
            <AllReviewList key={review.id} review={review} deleteAll={deleteAll} setSelectedReview={setSelectedReview} change={change} setShow={setShow}/>
        )})

    function handleChangeForm(name, value) {
        setSelectedReview({
            ...selectedReview,
            [name]: value,
        })
    }

    return (
        <div>
            {change ? <h1>All Reviews</h1> : 
            <div><h1>My Reviews</h1></div>}
            {show ? <EditReview review={selectedReview} handleChangeForm={handleChangeForm} updateAll={updateAll} setShow={setShow}/> : null}
            {allReviews}
        </div>
    )
}

export default Reviews;