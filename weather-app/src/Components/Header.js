import React from "react";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <>
      <div className="site-header">
        <div className="container">
          <Link to="/" className="branding">
            <img src="assets/images/logo.png" alt="" className="logo" />
            <div className="logo-type">
              <h1 className="site-title">Company name</h1>
              <small className="site-description">tagline goes here</small>
            </div>
          </Link>

          <div className="main-navigation">
            <button type="button" className="menu-toggle">
              <i className="fa fa-bars"></i>
            </button>
            <ul className="menu">
              <li className="menu-item current-menu-item">
                <Link to="/">Home</Link>
              </li>
              <li className="menu-item">
                <Link to="/weather">Weather</Link>
              </li>
            </ul>
          </div>

          <div className="mobile-navigation"></div>
        </div>
      </div>
    </>
  );
}
