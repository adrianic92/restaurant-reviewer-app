import React, {useState, useContext} from "react";
import { useParams, useHistory } from "react-router-dom";
import { UserContext } from "./App";

function ReviewForm({restaurants, addAll}) {
    const {id} = useParams()
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const restaurant = restaurants.find(restaurant => restaurant.id === parseInt(id))
    const history = useHistory()
    const [user] = useContext( UserContext )

    const handleSubmit = (e) => {
        e.preventDefault();
        const newReview = {
          "user_id": user.id,
          "restaurant_id": id,
          "description": description,
          "rating": rating
        }
        fetch('/reviews', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(newReview)
        })
        .then(resp => resp.json())
        .then(data => {
          addAll(data);
          history.push('/myreviews')
        })
    };

    if (!restaurant) { return (<h1>Loading...</h1>)}


  return (
    <div>
      <h2>Write a Review for {restaurant.name}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="description">Describe your experience here:</label>
          <textarea
            id="description"
            value={description}
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
  );
}

export default ReviewForm;