import React, {useState} from 'react';
import {useHistory} from "react-router-dom"
import ShowReviews from './ShowReviews';

function RestaurantDetail({ restaurant }) {
  const history = useHistory()
  const [show, setShow] = useState(false)



  return (
    <div className='card'>
      
      <div className='container'>
        <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      </div>
      <div className='details'>
        <h3>{restaurant.name}</h3>
        <p>Location: {restaurant.location}</p>
        <button className='showButton' onClick={() => setShow(!show)}>{!show? <span>Show Reviews</span> : "Hide Reviews"}</button>
        <button className='showButton' onClick={() => history.push(`/restaurants/${restaurant.id}`)}>Write a Review</button>
        {show ? <ShowReviews reviews={restaurant.reviews} /> : null}
      </div>
    </div>
  );
};

export default RestaurantDetail;