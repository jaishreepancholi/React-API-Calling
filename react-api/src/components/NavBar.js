import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import '../navBar.css';

const Navbar = (props) => {

    return (
        <nav className="nav-wrapper red">
            <div className="container">
                <Link to="/" className="brand-logo">React world</Link>
                <ul className="right">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <NavLink to="/about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar);