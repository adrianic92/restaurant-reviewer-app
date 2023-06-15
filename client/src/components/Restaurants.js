import React from "react";
import RestaurantDetail from "./RestaurantDetail";

function Restaurants({restaurants}) {
    
    if (!restaurants) { return (<h1>Loading...</h1>)}

    const allRestaurants = restaurants.map(restaurant => {
        return (
            <RestaurantDetail key={restaurant.id} restaurant={restaurant}/>
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