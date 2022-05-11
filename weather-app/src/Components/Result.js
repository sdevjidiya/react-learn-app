import React from "react";
import Loader from "./Loader";

export default function Result(props) {
  const { weatherData: data } = props;

  function kToc(k) {
    return (k - 273.15).toFixed(2);
  }

  let isShow;
  if (data === "") {
    isShow = <Loader />;
  } else {
    isShow = (
      <div className="forecast-table">
        <div className="container">
          <div className="forecast-container">
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
            {/* <div className="forecast">
              <div className="forecast-header">
                <div className="day">Tuesday</div>
              </div>
              <div className="forecast-content">
                <div className="forecast-icon">
                  <img src="assets/images/icons/icon-3.svg" alt="" width={48} />
                </div>
                <div className="degree">
                  23<sup>o</sup>C
                </div>
                <small>
                  18<sup>o</sup>
                </small>
              </div>
            </div>
            <div className="forecast">
              <div className="forecast-header">
                <div className="day">Wednesday</div>
              </div>
              <div className="forecast-content">
                <div className="forecast-icon">
                  <img src="assets/images/icons/icon-5.svg" alt="" width={48} />
                </div>
                <div className="degree">
                  23<sup>o</sup>C
                </div>
                <small>
                  18<sup>o</sup>
                </small>
              </div>
            </div>
            <div className="forecast">
              <div className="forecast-header">
                <div className="day">Thursday</div>
              </div>
              <div className="forecast-content">
                <div className="forecast-icon">
                  <img src="assets/images/icons/icon-7.svg" alt="" width={48} />
                </div>
                <div className="degree">
                  23<sup>o</sup>C
                </div>
                <small>
                  18<sup>o</sup>
                </small>
              </div>
            </div>
            <div className="forecast">
              <div className="forecast-header">
                <div className="day">Friday</div>
              </div>
              <div className="forecast-content">
                <div className="forecast-icon">
                  <img
                    src="assets/images/icons/icon-12.svg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="degree">
                  23<sup>o</sup>C
                </div>
                <small>
                  18<sup>o</sup>
                </small>
              </div>
            </div>
            <div className="forecast">
              <div className="forecast-header">
                <div className="day">Saturday</div>
              </div>
              <div className="forecast-content">
                <div className="forecast-icon">
                  <img
                    src="assets/images/icons/icon-13.svg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="degree">
                  23<sup>o</sup>C
                </div>
                <small>
                  18<sup>o</sup>
                </small>
              </div>
            </div>
            <div className="forecast">
              <div className="forecast-header">
                <div className="day">Sunday</div>
              </div>
              <div className="forecast-content">
                <div className="forecast-icon">
                  <img
                    src="assets/images/icons/icon-14.svg"
                    alt=""
                    width={48}
                  />
                </div>
                <div className="degree">
                  23<sup>o</sup>C
                </div>
                <small>
                  18<sup>o</sup>
                </small>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
  return <>{isShow}</>;
}
