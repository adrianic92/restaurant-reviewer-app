import React, {useState} from 'react';
import {Link} from "react-router-dom"
import ShowReviews from './ShowReviews';

function RestaurantDetail({ restaurant }) {

  const [show, setShow] = useState(false)

  return (
    <div className='card'>
      
      <div className='container'>
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      </div>
      <div className='details'>
        <h3>{restaurant.name}</h3>
        <p>Location: {restaurant.location}</p>
        <button className='button' onClick={() => setShow(!show)}>{!show? <span>Show Reviews</span> : "Hide Reviews"}</button>
        {show ? <ShowReviews reviews={restaurant.reviews} /> : null}
        <Link to={`/restaurants/${restaurant.id}`}>Write a Review!</Link>
      </div>
    </div>
  );
};

export default RestaurantDetail;