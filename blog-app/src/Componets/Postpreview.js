import React from "react";
import { Link } from "react-router-dom";

export default function Postpreview(props) {
  return (
    <>
      <div className="post-preview">
        <button className="btn btn-danger" onClick={props.delete}>
          Delete
        </button>
        <Link to="">
          <h2 className="post-title">{props.title}</h2>
          <h3 className="post-subtitle">{props.body}</h3>
        </Link>
        <p className="post-meta">
          Posted by
          <Link to="">Start Bootstrap</Link>
          on September 24, 2022
        </p>
      </div>
      <hr />
    </>
  );
}
