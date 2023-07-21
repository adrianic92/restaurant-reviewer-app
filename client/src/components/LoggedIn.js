import Home from './Home';
import NavBar from './NavBar';
import {useEffect, useState, useContext} from 'react';
import { Route, Switch } from "react-router-dom";
import Reviews from './Reviews';
import Restaurants from './Restaurants';
import ReviewForm from './ReviewForm';
import RestaurantForm from './RestaurantForm';
import { UserContext } from "./App";


function LoggedIn() {
  const [restaurants, setRestaurants] = useState([]);
  const [user, setUser] = useContext(UserContext)
  
  const allReviews = restaurants.map( rest => rest.reviews).flat()

  useEffect( () => {
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setRestaurants(data))
}, [] )

function addAll(review) {
  console.log("Review", review)
  const addedReview = Object.assign({}, user)
  addedReview.reviews.push(review)
  addedReview.restaurants.push(review.restaurant)
  setUser(addedReview)
  console.log("Added Review", addedReview)

  const addedRestaurants = restaurants.map( restaurant => {
    if (restaurant.id === parseInt(review.restaurant_id)) {
      const updatedReview = Object.assign({}, restaurant)
      updatedReview.reviews.push(review)
      return updatedReview;
  }
      return restaurant;
  })
  setRestaurants(addedRestaurants)
  console.log("Added Restaurant", addedRestaurants)
}

function deleteAll(review) {
  const updatedMyReviews = user.reviews.filter( rev => parseInt(rev.id) !== parseInt(review.id))
  const updatedMyRestaurants = user.restaurants.filter( rest => rest.name !== review.restaurant_name)
  const addedReview = Object.assign({}, user)
  addedReview.reviews = updatedMyReviews
  addedReview.restaurants = updatedMyRestaurants
  setUser(addedReview)

  const updatedRestaurants = restaurants.map( restaurant => {
    if (restaurant.id === parseInt(review.restaurant_id)) {
      const updatedReviews = restaurant.reviews.filter( item => item.id !== review.id)
      const updatedRestaurant = Object.assign({}, restaurant)
      updatedRestaurant.reviews = updatedReviews
      return updatedRestaurant;
  } else {
      return restaurant;
  }})
  setRestaurants(updatedRestaurants)

}

function updateAll(review) {

  const updatedMyReviews = user.reviews.map ( rev => {
    if (rev.id === review.id) {
      return review
    } else { return rev }
  })
  const addedReview = Object.assign({}, user)
  addedReview.reviews = updatedMyReviews
  setUser(addedReview)

  const updatedRestaurants = restaurants.map( rest => {
    if (rest.id === review.restaurant_id) {
      const updatedReviews = rest.reviews.map( rev => {
        if (rev.id === review.id) {
          return review
        } else { return rev }
      } )
      const updatedRestaurant = Object.assign({}, rest)
      updatedRestaurant.reviews = updatedReviews
      return updatedRestaurant
    } else { return rest}
  })
  setRestaurants(updatedRestaurants)

}

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/allreviews">
          <Reviews reviews={allReviews} change={true} deleteAll={deleteAll}/>
        </Route>
        <Route exact path="/myreviews">
          <Reviews reviews={user.reviews} change={false} deleteAll={deleteAll} updateAll={updateAll} restaurants={user.restaurants}/>
        </Route>
        <Route exact path="/restaurants">
          <Restaurants restaurants={restaurants} />
        </Route>
        <Route exact path="/restaurants/new">
          <RestaurantForm setRestaurants={setRestaurants} restaurants={restaurants}/>
        </Route>
        <Route exact path="/restaurants/:id">
          <ReviewForm restaurants={restaurants} addAll={addAll}/>
        </Route>
        <Route path="*">
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default LoggedIn;
