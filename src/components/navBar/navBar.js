

import React from "react";
import  "./navbar.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return(
        <nav className="nav">
                <div className="item">
                    <NavLink to="/profile">Profile</NavLink>
                </div>
                <div className="item active">
                    <NavLink to="/dialogs">Message</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/news">News</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/music">Music</NavLink>
                </div>
                <div className="item">
                    <NavLink to="/settings">Settings</NavLink>
                </div>
            </nav>

    );
}

export { NavBar };