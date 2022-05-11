import React from "react";
import loaderCss from "../Assets/loader.module.css";

export default function Loader() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        <div class={loaderCss.loader}></div>
      </div>
    </>
  );
}
