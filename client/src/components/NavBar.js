import React from "react";
import {Link} from 'react-router-dom'

function NavBar({setUser}) {

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
            <Link className="navbar-link" to="/reviews">Reviews</Link>
            <Link className="navbar-link" to="/" onClick={handleLogout}>Log Out</Link>
        </div>
    )
}

export default NavBar;