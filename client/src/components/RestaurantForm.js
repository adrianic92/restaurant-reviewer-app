import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function RestaurantForm({restaurants, setRestaurants}) {
    const history = useHistory()
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const newRestaurant = {
            name: name,
            location: location,
            image: image
        }

        fetch('/restaurants', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newRestaurant)
        })
        .then(resp => resp.json())
        .then(data => {
            setRestaurants([...restaurants, data])
            history.push(`/restaurants/${data.id}`)
        })
    };

  return (
    <div>
      <h2>Add Your Restaurant Info:</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
        <label>Image URL:</label>
        <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
        <label>Location:</label>
        <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default RestaurantForm;