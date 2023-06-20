import React, {useState} from 'react';
import {Link} from "react-router-dom"
import ShowReviews from './ShowReviews';

function RestaurantDetail({ restaurant }) {

  const [show, setShow] = useState(false)

  return (
    <div>
      <p><strong>{restaurant.name}</strong></p>
      <p>Location: {restaurant.location}</p>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <button className='button' onClick={() => setShow(!show)}>{!show? <span>Show Reviews</span> : "Hide Reviews"}</button>
      {show ? <ShowReviews reviews={restaurant.reviews} /> : null}
      <Link to={`/restaurants/${restaurant.id}`}>Write a Review!</Link>
    </div>
  );
};

export default RestaurantDetail;