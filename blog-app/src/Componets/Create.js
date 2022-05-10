import axios from "axios";
import React from "react";

export default function Create() {
  const submitHandler = (e) => {
    // alert();
    e.preventDefault();
    const title = e.target.title.value;
    const body = e.target.body.value;
    const auth = e.target.author.value;
    // const datas = {title,body,auth,}
    axios
      .post("https://jsonplaceholder.typicode.com/posts", {
        title,
        body,
        auth,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <main className="mb-4">
        <div className="container px-4 px-lg-5">
          <div className="row gx-4 gx-lg-5 justify-content-center">
            <div className="col-md-10 col-lg-8 col-xl-7">
              <p>Create Post</p>
              <div className="my-5">
                <form id="contactForm" onSubmit={submitHandler}>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      type="text"
                      name="title"
                      placeholder="Enter your title..."
                    />
                    <label htmlFor="name">Title</label>
                  </div>
                  <div className="form-floating">
                    <textarea
                      className="form-control"
                      id="message"
                      placeholder="Enter your description here..."
                      name="body"
                      style={{ height: "12rem" }}
                    ></textarea>
                    <label htmlFor="message">Body</label>
                  </div>
                  <div className="form-floating">
                    <input
                      className="form-control"
                      id="author"
                      type="text"
                      name="author"
                      placeholder="Enter author name"
                    />
                    <label htmlFor="author">Author</label>
                  </div>
                  <br />
                  <button
                    className="btn btn-primary text-uppercase"
                    type="submit"
                  >
                    Send
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
