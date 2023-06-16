import React, {useState} from 'react';
import '../RestaurantDetail.css';
import {Link} from "react-router-dom"
import ShowReviews from './ShowReviews';

function RestaurantDetail({ restaurant }) {

  const [show, setShow] = useState(false)

  return (
    <div className="restaurant-detail-container">
      <p><strong>{restaurant.name}</strong></p>
      <p>Location: {restaurant.location}</p>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <button onClick={() => setShow(!show)}>Show Reviews</button>
      {show ? <ShowReviews reviews={restaurant.reviews} /> : null}
      <Link to={`/restaurants/${restaurant.id}`}>Write a Review!</Link>
    </div>
  );
};

export default RestaurantDetail;