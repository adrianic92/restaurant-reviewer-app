import '../App.css';
import Home from './Home';
import Login from './Login';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import Reviews from './Reviews';


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("/me")
    .then( resp => {
      if (resp.ok) {
        resp.json()
        .then((user) => setUser(user))
      } else {console.log("Not Authorized")}
    })
  }, []);

  if (!user) {
    return <Login setUser={setUser} />
  }



  return (
    <div className="App">
      <NavBar setUser={setUser}/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/reviews">
          <Reviews/>
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
