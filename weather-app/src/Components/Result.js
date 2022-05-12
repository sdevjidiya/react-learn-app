import React from "react";
import Loader from "./Loader";
import Recent from "./Recent";

export default function Result(props) {
  const { weatherData: data } = props;

  function kToc(k) {
    return (k - 273.15).toFixed(2);
  }

  let isShow;
  if (data === "") {
    if (props.isSearch === true) {
      isShow = <Loader />;
    } else {
      isShow = (
        <>
          <div style={{ padding: "30px", textAlign: "center" }}>
            <h2>Please search city....</h2>
          </div>
        </>
      );
    }
  } else {
    isShow = (
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
            <div className="forecast">
              <Recent recent={props.recent} reasearch={props.recentReaserach} />
            </div>
            <div className="today forecast">
              <div className="forecast-header">
                <div className="day">Monday</div>
                <div className="date">6 Oct</div>
              </div>
              <div className="forecast-content">
                <div className="location">
                  {data.name} ( {data.weather[0].description} )
                </div>
                <div className="degree">
                  <div className="num">
                    {kToc(data.main.temp)}
                    <sup>o</sup>C
                  </div>
                  <div className="forecast-icon">
                    <img
                      src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
                      alt=""
                      width={90}
                    />
                  </div>
                </div>
                <span>
                  <img src="assets/images/icon-umberella.png" alt="" />
                  20%
                </span>
                <span>
                  <img src="assets/images/icon-wind.png" alt="" />
                  18km/h
                </span>
                <span>
                  <img src="assets/images/icon-compass.png" alt="" />
                  East
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return <>{isShow}</>;
}
