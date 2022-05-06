import React, { Component } from 'react'
import Register from './Components/Register';
import Greet from './Components/Greet';
import './App.css';

export default class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      isRegister : false,
    }
  }

  render() {
    return (
      <div>
        {
          (this.state.isRegister) ? <Greet></Greet> : <Register></Register> 
        }
      </div>
    )
  }
}

