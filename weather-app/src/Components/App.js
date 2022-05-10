import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Home from "./Home";
import Weather from "./Weather";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Router className="site-content">
          <Header />
          <Routes>
            <Route path="/weather" element={<Weather />}></Route>
            <Route path="/" element={<Home />}></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
