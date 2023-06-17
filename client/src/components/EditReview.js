import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";

function EditReview({reviews}) {
    const {id} = useParams()
    const history = useHistory()
    
    const [desc, setDescription] = useState(``);
    const [rate, setRating] = useState(``);

    if (!reviews) { return (<h1>Loading...</h1>)}
    
    const review = reviews.find( rev => rev.id === parseInt(id))

    if (!review) { return null }

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedReview = {
          "description": description,
          "rating": rating
        }
        fetch('/reviews', {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(updatedReview)
        })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          history.push('/myreviews')
        })
    };

    const { description, rating } = review

  return (
    <div>
      <h2>Edit Review for {review.restaurant.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Describe your experience here:</label>
          <textarea
            id="description"
            value={desc}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="rating">Rating:</label>
          <select
            id="rating"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          >
            <option value="">Select rating</option>
            <option value="1">1 Star</option>
            <option value="2">2 Stars</option>
            <option value="3">3 Stars</option>
            <option value="4">4 Stars</option>
            <option value="5">5 Stars</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default EditReview;