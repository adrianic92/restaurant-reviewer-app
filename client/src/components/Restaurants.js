import React from "react";
import RestaurantDetail from "./RestaurantDetail";
import {Link} from "react-router-dom"

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
            <h3>Don't see your restaurant? Click Below to add a new restaurant!</h3>
            <Link to={`/restaurants/new`}>Add a New Restaurant</Link>
            <p><br></br></p>
        </div>
    )
}

export default Restaurants