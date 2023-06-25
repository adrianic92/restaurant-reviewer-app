import React, {useEffect, useState, createContext} from 'react';
import LoggedIn from './LoggedIn';
import Login from './Login';

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    fetch("/me")
    .then( resp => {
      if (resp.ok) {
        resp.json()
        .then((user) => setUser(user))
      }
    })
  }, []);

  if (!user) {
    return <Login setUser={setUser} />
  } else {
    return (
      <UserContext.Provider value={[user, setUser]}>
        <LoggedIn />
      </UserContext.Provider>
    )
  }
}

export default App;
