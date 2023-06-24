import Home from './Home';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Reviews from './Reviews';
import Restaurants from './Restaurants';
import ReviewForm from './ReviewForm';
import RestaurantForm from './RestaurantForm';


function LoggedIn() {
  const [restaurants, setRestaurants] = useState([]);
  const [allReviews, setAllReviews] = useState([])
  const [myReviews, setMyReviews] = useState([])
   
  useEffect( () => {
      fetch('/reviews')
      .then(resp => resp.json())
      .then(data => setAllReviews(data))
  }, [] )

  useEffect( () => {
    fetch('/myreviews')
    .then(resp => resp.json())
    .then(data => setMyReviews(data))
}, [] )

  useEffect( () => {
    fetch('/restaurants')
    .then(resp => resp.json())
    .then(data => setRestaurants(data))
}, [] )

function addAll(review) {
  setAllReviews([...allReviews, review])
  setMyReviews([...myReviews, review])
  const addedRestaurants = restaurants.map( restaurant => {
    if (restaurant.id === parseInt(review.restaurant_id)) {
      const updatedReview = Object.assign({}, restaurant)
      updatedReview.reviews.push(review)
      return updatedReview;
  }
      return restaurant;
  })
  setRestaurants(addedRestaurants)

}

function deleteAll(review) {
  const updatedAllReviews = allReviews.filter( rev => parseInt(rev.id) !== parseInt(review.id))
  setAllReviews(updatedAllReviews)

  const updatedMyReviews = myReviews.filter( rev => parseInt(rev.id) !== parseInt(review.id))
  setMyReviews(updatedMyReviews)

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
  const updatedAllReviews = allReviews.map( rev => {
    if (rev.id === review.id) {
      return review
    } else {return rev}
  })
  setAllReviews(updatedAllReviews)

  const updatedMyReviews = myReviews.map ( rev => {
    if (rev.id === review.id) {
      return review
    } else { return rev }
  })
  setMyReviews(updatedMyReviews)

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
          <Reviews reviews={myReviews} change={false} deleteAll={deleteAll} updateAll={updateAll}/>
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
