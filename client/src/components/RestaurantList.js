import React from "react";

function RestaurantList({restaurants}) {

    const allRestaurants = restaurants.map( rest => {
        return (
            <span key={rest.id}>| {rest.name} |</span>
        )
    })

    return (
        <div className="bottomH1">
            <br/>
            <h2>Restaurants Reviewed:</h2>
            <br/>
            {allRestaurants}
        </div>
    )

}

export default RestaurantList;