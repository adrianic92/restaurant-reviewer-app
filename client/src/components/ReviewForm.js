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
    const [err, setErr] = useState([])

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
        .then(resp => {
          if (resp.ok) {
            resp.json()
            .then(data => {
              addAll(data);
              history.push('/myreviews')
            })
          } else {
            resp.json()
            .then( error => setErr(error.errors))
          }
        })
    };

    if (!restaurant) { return (<h1>Loading...</h1>)}

    const errorMessage = err.map( message => <p key={message} className="errorMessage">{message}</p>)

  return (
    <div>
      <div className="editor">
        <div className="grid1">
          <div className="imageContainer">
            <img alt={restaurant.name}src={restaurant.image}/>
          </div>
        </div>
        <div className="grid2">
          <div className="infoContainer">
            <h1>Write a Review for <br/>{restaurant.name}</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="description">Describe your experience here:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
              </div>
              <br/>
              <div>
              <label htmlFor="rating">Rating:</label>
                <select style={{textAlign: "center"}}
                  id="rating"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}>
                  <option value="">Select rating</option>
                  <option value="1">1 Star</option>
                  <option value="2">2 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="5">5 Stars</option>
                </select>
                
              </div>
              {errorMessage}
              <button className="submitButton" type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewForm;