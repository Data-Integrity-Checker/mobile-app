import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const navbar = props => (
    <nav className="navbar">
        <h3>DIC</h3>
        <ul className="nav-links">
            <Link className="white" to="/">
                <li>Devices</li>
            </Link>
            <Link className="white" to="/alerts">
                <li>Alerts ({props.alerts})</li>
            </Link>
            <Link className="white" to="/settings">
                <li>Settings</li>
            </Link>
        </ul>
    </nav>
);

export default navbar;