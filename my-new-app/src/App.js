import React, { Component } from 'react'
import { Person } from './Component/Person';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons : [
        {
          id : 1,
          name : "John Doe",
          age: 22
        },
        {
          id : 2,
          name : "James Roy",
          age: 25
        },
        {
          id : 3,
          name : "Peter jack",
          age: 24
        },
        {
          id : 4,
          name : "Henry jam",
          age: 24
        },
      ]
    }
  }

  Togglehandler(){
    alert();
  }

  render() {
    let persons;
    persons = this.state.persons.map( (p) => {
      return <Person key={p.id} name={p.name} age={p.age}/>;
    }); 
    return (
      <div className='App'>
        <button type='button' onClick={this.Togglehandler}>Toggle</button>
        <h3>Users</h3>
        {persons}
      </div>
    )
  }
}
