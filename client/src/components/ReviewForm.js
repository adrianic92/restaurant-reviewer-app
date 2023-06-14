import React, {useState} from "react";

function ReviewForm({user}) {
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [restaurant, setRestaurant] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

  return (
    <div>
      <h2>Write a Review</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label htmlFor="restaurant">Restaurant:</label>
          <select
            id="restaurant"
            value={restaurant}
            onChange={(e) => setRestaurant(e.target.value)}
          >
            <option value="">Select restaurant</option>
            {/* Render options dynamically based on restaurant data */}
            {/* {restaurants.map((restaurant) => (
              <option key={restaurant.id} value={restaurant.id}>
                {restaurant.name}
              </option>
            ))} */}
          </select>
        </div>
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