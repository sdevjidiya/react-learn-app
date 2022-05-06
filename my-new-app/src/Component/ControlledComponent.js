import React, { Component } from 'react'

export default class ControlledComponent extends Component {

  constructor(props) {
    super(props)
    this.state = {
      name : "Suresh Jidiya",
    }
  }

  changeHandler = (e) => {
    console.log(this.state);
    const name = e.target.value; 
    this.setState({name},() => {
      console.log(this.state);
    })
  }

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" value={this.state.name} onChange={this.changeHandler}/>
          </div>
        </form>
      </div>
    )
  }
}
