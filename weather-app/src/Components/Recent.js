import React from "react";

export default function Recent(props) {
  let data = "";
  if (props.recent == null) {
    data = "";
  } else {
    data = props.recent.map((datas, id) => {
      return (
        <li onClick={() => props.reasearch(datas.lat, datas.lon)} key={id}>
          {datas.city}
        </li>
      );
    });
  }
  // console.log(props);
  return (
    <>
      <div className="forecast-header">
        <div className="day">Recent</div>
      </div>
      <div className="forecast-content">
        <ul>{data}</ul>
      </div>
    </>
  );
}
