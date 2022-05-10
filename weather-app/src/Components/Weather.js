import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      lat: "",
      lon: "",
      city: "",
      weatherData: "",
    };
  }

  changeHandler = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.city.value);
    const name = e.target.name;
    console.log(name);
    if (name === "city") {
      this.setState({
        city: e.target.value,
      });
    } else if (name === "lat") {
      this.setState({
        lat: e.target.value,
      });
    } else if (name === "lon") {
      this.setState({
        lon: e.target.value,
      });
    }
    console.log(this.state);
  };

  locationHandler = () => {
    // this.setState({
    //   lat: "",
    //   lon: "",
    //   city: "",
    //   weatherData: "",
    // }
    navigator.geolocation.getCurrentPosition(
      (res) => {
        this.setState({
          lat: res.coords.latitude,
          lon: res.coords.longitude,
        });
      },
      (error) => {
        console.log(error);
      }
    );
  };

  render() {
    return (
      <>
        <div className="site-content">
          <Search
            lat={this.state.lat}
            lon={this.state.lon}
            city={this.state.city}
            weatherData={this.state.weatherData}
            change={this.changeHandler}
            getLocation={this.locationHandler}
          />
          <Result />
        </div>
      </>
    );
  }
}
