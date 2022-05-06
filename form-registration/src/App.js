import React, { Component } from 'react'
import Register from './Components/Register';
import Greet from './Components/Greet';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isRegister : false,
      username: null,
      email: null,
      password: null,
      showPassword : false
    }
  }

  submitHandler = (e) => {
    e.preventDefault();
    // console.log(e.target);
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const conpassword = e.target.conpassword.value;
    if(password !== conpassword){
      return alert('Password are not match');
    }
    this.setState({username,email,password,isRegister : true}, () => {
      console.table(this.state);
    });
  }

  showPasswordhandler = () => {
    console.log(this.state);
    this.setState({showPassword : !this.state.showPassword}, () => {
      console.log(this.state);
    });
  }

  render() {
    return (
      <div>
        {
          (this.state.isRegister) ? 
          <Greet name={this.state.username} email={this.state.email}></Greet> : 
          <Register submit = {this.submitHandler} showPassword = {this.state.showPassword} click={this.showPasswordhandler}></Register> 
        }
      </div>
    )
  }
}

