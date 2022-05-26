import React, { Component } from "react";

export default class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
    };
  }
  add = (e) => {
    e.preventDefault();
    if (this.state.name === "" && this.state.email === "") {
      return alert("This field is required.");
    }
    this.props.addContactHandler(this.state);
    this.setState({ name: "", email: "" });
    // console.log(this.state);
  };
  render() {
    return (
      <div className="ui main">
        <h3>Add Contact</h3>
        <form className="ui form" onSubmit={this.add}>
          <div className="field">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
            />
          </div>
          <div className="field">
            <label>email</label>
            <input
              type="email"
              name="email"
              placeholder="email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
          </div>
          <button className="ui button blue">Add</button>
        </form>
      </div>
    );
  }
}
