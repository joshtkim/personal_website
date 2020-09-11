import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
    // HandleClick for NavLinks
    const handleClick = (evt) => {
        props.history.push("/")
    };
    
    return (
        <div className="navbar">
            <NavLink
                to="/" exact
                onClick={handleClick}
            >About Me</NavLink>
            <NavLink
                to="/resume" exact
                onClick={handleClick}
            >Resume</NavLink>
            <NavLink
                to="/projects" exact
                onClick={handleClick}
            >Projects</NavLink>
        </div>
    );
};

export default NavBar;