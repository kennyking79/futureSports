import React from "react";
import { Link } from "react-router-dom";
import './nav.css';


function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/players">Players</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/admin">Admin</Link></li>
        {/* Add additional links as needed */}
      </ul>
    </nav>
  );
}

export default Navigation;