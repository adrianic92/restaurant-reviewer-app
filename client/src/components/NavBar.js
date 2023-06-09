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
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/" onClick={handleLogout}>Log Out</Link>
            </li>
        </div>
    )
}

export default NavBar;