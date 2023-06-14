import React from "react";
import RestaurantDetail from "./RestaurantDetail";

function Restaurants({restaurants}) {
    
    const allRestaurants = restaurants.map(restaurant => {
        return (
            <RestaurantDetail key={restaurant.id}restaurant={restaurant} />
        )
    })
    
    return (
        <div>
            <h1>Restaurants</h1>
            {allRestaurants}
        </div>
    )
}

export default Restaurants