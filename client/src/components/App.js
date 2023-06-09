import '../App.css';
import Login from './Login';
import NavBar from './NavBar';
import {useEffect, useState} from 'react';


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
  }

  return (
    <div className="App">
      <NavBar/>
    </div>
  );
}

export default App;
