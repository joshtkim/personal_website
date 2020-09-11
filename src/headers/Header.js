import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    const handleClick = (evt) => {
        props.history.push("/")
    };

    return (
        <div className="main">
             <div className="header">
                <h1>Joshua Kim</h1>
            </div>
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
        </div>
       
    );
};

export default Header;