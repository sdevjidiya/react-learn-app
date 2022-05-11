import React, { Component } from "react";
import Search from "./Search";
import Result from "./Result";
import axios from "axios";

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
  };

  searchHandler = () => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${this.state.lat}&lon=${this.state.lon}&appid=3863efe004b3c4ccbd77c534f524d164`
      )
      .then((result) => {
        console.log(result);
        this.setState({
          city: result.data.name,
          weatherData: result.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  locationHandler = () => {
    this.setState({
      lat: "",
      lon: "",
      city: "",
      weatherData: "",
    });

    navigator.geolocation.getCurrentPosition(
      (res) => {
        setTimeout(() => {
          this.setState({
            lat: res.coords.latitude,
            lon: res.coords.longitude,
          });
          axios
            .get(
              `https://api.openweathermap.org/data/2.5/weather?lat=${res.coords.latitude}&lon=${res.coords.longitude}&appid=3863efe004b3c4ccbd77c534f524d164`
            )
            .then((result) => {
              console.log(result);
              this.setState({
                city: result.data.name,
                weatherData: result.data,
              });
            })
            .catch((error) => {
              console.log(error);
            });
        }, 500);
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
            searchbtn={this.searchHandler}
          />
          <Result weatherData={this.state.weatherData} />
        </div>
      </>
    );
  }
}
