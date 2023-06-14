import React from 'react';
import '../RestaurantDetail.css';

function RestaurantDetail({ restaurant }) {
  return (
    <div className="restaurant-detail-container">
      <p><strong>{restaurant.name}</strong></p>
      <p>Location: {restaurant.location}</p>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
    </div>
  );
};

export default RestaurantDetail;