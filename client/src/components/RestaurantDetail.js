import React from 'react';
import '../RestaurantDetail.css';

function RestaurantDetail({ restaurant }) {
  return (
    <div className="restaurant-detail-container">
      <h2 className="restaurant-detail-heading">Restaurant Detail</h2>
      <p><strong>Name:</strong> {restaurant.name}</p>
      <p><strong>Location:</strong> {restaurant.location}</p>
      <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
      {/* Additional restaurant details */}
    </div>
  );
};

export default RestaurantDetail;