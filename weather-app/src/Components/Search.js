import React from "react";

export default function Search(props) {
  return (
    <>
      <div
        className="hero"
        data-bg-image="images/banner.png"
        style={{
          backgroundImage: "url('assets/images/banner.png')",
          textAlign: "center",
        }}
      >
        <div className="container">
          <form className="find-location">
            <input
              type="text"
              placeholder="Find your city..."
              name="city"
              value={props.city}
              onChange={props.change}
            />
            <input type="submit" value="Find" />
          </form>
          <div>
            <h3>OR</h3>
          </div>
          <form>
            <div style={{ textAlign: "center", marginBottom: "20px" }}>
              <label style={{ marginRight: "20px" }}>Co-ordinate</label>
              <button type="button" onClick={props.getLocation}>
                <i className="fa fa-crosshairs" aria-hidden="true"></i>
              </button>
              <br />
            </div>
            <label className="lat-label">Lat</label>
            <input
              type="number"
              name="lat"
              value={props.lat}
              onChange={props.change}
            />
            <label className="lat-label">Lon</label>
            <input
              type="number"
              name="lon"
              value={props.lon}
              onChange={props.change}
            />
            <button
              type="button"
              onClick={props.searchbtn}
              style={{ marginLeft: "10px" }}
            >
              <i className="fa fa-search"></i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
