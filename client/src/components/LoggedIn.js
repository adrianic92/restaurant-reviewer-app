import Home from './Home';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Reviews from './Reviews';
import Restaurants from './Restaurants';
import ReviewForm from './ReviewForm';
import RestaurantForm from './RestaurantForm';
import EditReview from './EditReview';


function LoggedIn({user, setUser}) {
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

console.log(myReviews)

  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/allreviews">
          <Reviews reviews={allReviews} change={true} deleteAll={deleteAll}/>
        </Route>
        <Route exact path="/myreviews">
          <Reviews reviews={myReviews} change={false} deleteAll={deleteAll}/>
        </Route>
        <Route exact path="/myreviews/edit/:id">
          <EditReview reviews={myReviews}/>
        </Route>
        <Route exact path="/restaurants">
          <Restaurants user={user} restaurants={restaurants} />
        </Route>
        <Route exact path="/restaurants/new">
          <RestaurantForm setRestaurants={setRestaurants} restaurants={restaurants}/>
        </Route>
        <Route exact path="/restaurants/:id">
          <ReviewForm restaurants={restaurants} user={user} addAll={addAll}/>
        </Route>
        <Route path="*">
          <h1>404 NOT FOUND</h1>
        </Route>
      </Switch>
      
    </div>
  );
}

export default LoggedIn;
