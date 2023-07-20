import React, {useContext} from "react";

function RestaurantList({reviews}) {

    const restaurants = reviews.map( rest => {
        return (
            <span key={rest.id}>| {rest.restaurant.name} |</span>
        )
    })

    return (
        <div className="bottomH1">
            <br/>
            <h2>Restaurants Reviewed:</h2>
            <br/>
            {restaurants}
        </div>
    )

}

export default RestaurantList;