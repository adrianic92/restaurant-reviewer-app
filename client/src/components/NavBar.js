import React, {useContext} from "react";
import {Link} from 'react-router-dom'
import { UserContext } from "./App";

function NavBar() {

    const [user, setUser] = useContext(UserContext)

    function handleLogout() {
        fetch('/logout', {
            method: "DELETE"
        })
        .then(resp => {
            if (resp.ok) {
                setUser(null);
            }
        })
    }
    return (
        <div className="navContainer">
            <div className="navbar">
                <h2 className="welcome">Welcome {user.name}</h2>
                <ul>
                    <li><Link className="navbar-link" to="/">Home</Link></li>
                    <li><Link className="navbar-link" to="/myreviews"> My Reviews</Link></li>
                    <li><Link className="navbar-link" to="/allreviews"> All Reviews</Link></li>
                    <li><Link className="navbar-link" to="/restaurants">Restaurants</Link></li>
                </ul>
                <ul>
                <li><Link className="navbar-link" to="/" onClick={handleLogout}><span>Log Out</span></Link></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;