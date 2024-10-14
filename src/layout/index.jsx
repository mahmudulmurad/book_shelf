import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Layout = ({ children }) => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/wishlist" className="nav-link">
              Wishlist
            </Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="content">{children}</div>
    </div>
  );
};

export default Layout;
