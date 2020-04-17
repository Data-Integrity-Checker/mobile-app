import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const navbar = props => (
    <nav className="navbar">
        <h3>Logo</h3>
        <ul className="nav-links">
            <Link className="white" to="/">
                <li>Devices</li>
            </Link>
            <Link className="white" to="/alerts">
                <li>Alerts</li>
            </Link>
            <Link className="white" to="/settings">
                <li>Settigs</li>
            </Link>
        </ul>
    </nav>
);

export default navbar;