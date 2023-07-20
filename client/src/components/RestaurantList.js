import React, {useContext} from "react";
import { UserContext } from "./App";

function RestaurantList() {
    const [user, setUser] = useContext(UserContext)

    const restaurants = user.restaurants.map( rest => {
        return (
            <span key={rest.id}>|{rest.name}|</span>
        )
    })

    console.log(user.restaurants, "user")

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