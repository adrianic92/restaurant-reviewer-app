import React from 'react';
import '../RestaurantDetail.css';
import {Link} from "react-router-dom"

function RestaurantDetail({ restaurant }) {

  return (
    <div className="restaurant-detail-container">
      <p><strong>{restaurant.name}</strong></p>
      <p>Location: {restaurant.location}</p>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      <Link to={`/restaurants/${restaurant.id}`}>Write a Review!</Link>
    </div>
  );
};

export default RestaurantDetail;