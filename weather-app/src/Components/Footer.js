import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <form className="subscribe-form">
                <input
                  type="text"
                  placeholder="Enter your email to subscribe..."
                />
                <input type="submit" value="Subscribe" />
              </form>
            </div>
            <div className="col-md-3 col-md-offset-1">
              <div className="social-links">
                <Link to="/">
                  <i className="fa fa-facebook"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-twitter"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-google-plus"></i>
                </Link>
                <Link to="/">
                  <i className="fa fa-pinterest"></i>
                </Link>
              </div>
            </div>
          </div>

          <p className="colophon">
            Copyright 2014 Company name. Designed by Themezy. All rights
            reserved
          </p>
        </div>
      </footer>
    </>
  );
}
