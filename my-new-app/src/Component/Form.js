import React, { Component } from 'react'

export default class Form extends Component {

  constructor(props){
    super(props);
    this.state = {
      name : "",
      country : "",
    };
  }

  nameHandler = (e) =>{
    console.log(e.target.value);
  }

  changeHandler = (e) => {
    // alert();
    console.log(e.target.value);
  }

  submitHandler = (e) =>{
    e.preventDefault();
    console.log(this.state);
    const name = e.target.name.value;
    const country = e.target.country.value;
    this.setState({name,country}, () => {
      console.log(this.state);
      e.target.name.value = '';
      e.target.country.value = '';
    });
  }

  render() {
    return (
      <div>
        <h1>Form</h1>
        {/* event handler */}
        {/* <form>
          <div>
            <label>Name</label>
            <input type="text" name="name" onKeyUp={this.nameHandler}/>
          </div>
          <div>
            <label>Country</label>
            <select onChange={this.changeHandler}>
              <option value="india">India</option>
              <option value="usa">Usa</option>
              <option value="uk">UK</option>
            </select>
          </div>
        </form> */}
        <form onSubmit={this.submitHandler}>
          <div>
            <label>Name</label>
            <input type="text" name="name"/>
          </div>
          <div>
            <label>Country</label>
            <select name='country'>
              <option value="">Select</option>
              <option value="india">India</option>
              <option value="usa">Usa</option>
              <option value="uk">UK</option>
            </select>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}
