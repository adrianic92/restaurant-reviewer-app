import React from "react";
import {Link} from 'react-router-dom'

function NavBar({setUser, user}) {

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
        <div className="navbar">
            <Link className="navbar-link" to="/">Home</Link>
            <Link className="navbar-link" to="/myreviews"> My Reviews</Link>
            <Link className="navbar-link" to="/allreviews"> All Reviews</Link>
            <Link className="navbar-link" to="/restaurants">Restaurants</Link>
            <Link className="navbar-link" to="/" onClick={handleLogout}>Log Out</Link>
            <h2>Welcome {user.name}</h2>
        </div>
    )
}

export default NavBar;