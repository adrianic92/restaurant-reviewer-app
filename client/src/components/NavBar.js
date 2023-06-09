import React from "react";
import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <div>
            <li>
                <Link to="/">Home</Link>
            </li>
        </div>
    )
}

export default NavBar;