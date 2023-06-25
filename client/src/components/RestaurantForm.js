import React, {useState} from "react";
import { useHistory } from "react-router-dom";

function RestaurantForm({restaurants, setRestaurants}) {
    const history = useHistory()
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [err, setErr] = useState([])

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
        .then(resp => {
          if (resp.ok) {
            resp.json()
            .then(data => {
              setRestaurants([...restaurants, data])
              history.push(`/restaurants/${data.id}`)
            }
          )} else {
            resp.json()
            .then( error => setErr(error.errors))
          }
        })}
        
        const errorMessage = err.map( message => <p key={message} className="errorMessage">{message}</p>)
  return (
    <div className="center">
          <h1>Add A New Restaurant:</h1>
          <form onSubmit={handleSubmit}>
            <div className="field">
              <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)}/>
              <span></span>
              <label>Name:</label>
            </div>
            <div className="field">
              <input type="text" name="image" value={image} onChange={(e) => setImage(e.target.value)}/>
              <span></span>
              <label>Image URL:</label>
            </div>
            <div className="field">
              <input type="text" name="location" value={location} onChange={(e) => setLocation(e.target.value)}/>
              <span></span>
              <label>Location:</label>
            </div>
            {errorMessage}
            <button className="loginButton" type="submit">Submit</button>
          </form>
        </div>
  );
}

export default RestaurantForm;