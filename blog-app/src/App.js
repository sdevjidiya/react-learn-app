import React, { Component } from "react";
import NavBar from "./Componets/NavBar";
import Header from "./Componets/Header";
import Footer from "./Componets/Footer";
import Home from "./Componets/Home";
import About from "./Componets/About";
import Post from "./Componets/Post";
import Contact from "./Componets/Contact";
import Postpreview from "./Componets/Postpreview";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import axios from "axios";
import Create from "./Componets/Create";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: true,
      posts: null,
    };
  }

  loginHandler = () => {
    this.setState({ auth: !this.state.auth });
  };

  deleteHandler = (id) => {
    // alert(id);
    axios
      .delete("/posts/" + id)
      .then((r) => {
        console.log(r);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  componentDidMount() {
    // console.log("componentDidMount");
    axios
      .get("/posts")
      .then((response) => {
        this.setState({ posts: response.data });
        // console.log(this.state);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    let postData = null;
    if (this.state.posts != null) {
      const tenPosts = this.state.posts.splice(0, 10);
      postData = tenPosts.map((post) => {
        return (
          <Postpreview
            delete={() => this.deleteHandler(post.id)}
            key={post.id}
            title={post.title}
            body={post.body}
          />
        );
      });
    }
    return (
      <>
        <Router>
          <NavBar login={this.loginHandler} status={this.state.auth} />
          <Routes>
            <Route
              exact
              path="/post-create"
              element={
                <>
                  <Header
                    title="Create Post"
                    desc="new post create"
                    img="contact-bg.jpg"
                  />
                  <Create />
                </>
              }
            ></Route>
            <Route
              exact
              path="/contact"
              element={
                <>
                  <Header
                    title="Contact Me"
                    desc="Have questions? I have answers."
                    img="contact-bg.jpg"
                  />
                  <Contact />
                </>
              }
            ></Route>
            <Route
              exact
              path="/post/*"
              element={
                this.state.auth === false ? (
                  <Navigate to="/" replace />
                ) : (
                  <>
                    <Header
                      title="Man must explore, and this is exploration at its greatest"
                      desc="Posted by Start Bootstrap on August 24, 2022"
                      img="post-bg.jpg"
                    />
                    <Post />
                  </>
                )
              }
            ></Route>
            <Route
              exact
              path="/about"
              element={
                <>
                  <Header
                    title="About Us"
                    desc="This is what I do."
                    img="about-bg.jpg"
                  />
                  <About />
                </>
              }
            ></Route>
            <Route
              exact
              path="/"
              element={
                <div>
                  <Header
                    title="Blog App"
                    desc="A Blog Theme by Start Bootstrap"
                    img="home-bg.jpg"
                  />
                  <Home>{postData}</Home>
                </div>
              }
            ></Route>
            <Route
              exact
              path="*"
              element={
                <>
                  <Header title="404" desc="Page not found" img="404-bg.jpg" />
                </>
              }
            ></Route>
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}
