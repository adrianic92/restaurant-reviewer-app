import Home from './Home';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';
import { Route, Switch } from "react-router-dom";
import Reviews from './Reviews';
import Restaurants from './Restaurants';
import ReviewForm from './ReviewForm';


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

  
  const userReviewsTitle = <h1>All Reviews</h1>
  const myReviewsTitle = <h1>My Reviews</h1>


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/allreviews">
          <Reviews reviews={allReviews} title={userReviewsTitle} />
        </Route>
        <Route exact path="/myreviews">
          <Reviews reviews={myReviews} title={myReviewsTitle}/>
        </Route>
        <Route exact path="/restaurants">
          <Restaurants restaurants={restaurants} />
        </Route>
        <Route exact path="/restaurants/:id">
          <ReviewForm user={user} restaurants={restaurants} />
        </Route>
      </Switch>
      
    </div>
  );
}

export default LoggedIn;
