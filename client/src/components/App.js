import '../App.css';
import {useEffect, useState} from 'react';
import LoggedIn from './LoggedIn';
import Login from './Login';

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
  } else {
    return (
      <LoggedIn user={user} setUser={setUser}/>
    )
  }
}

export default App;
