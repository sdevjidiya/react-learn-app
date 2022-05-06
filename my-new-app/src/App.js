import React, { Component } from 'react'
import { Person } from './Component/Person';
import Form from './Component/Form';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      persons : [
        {
          id : 0,
          name : "John Doe",
          age: 22
        },
        {
          id : 1,
          name : "James Roy",
          age: 25
        },
        {
          id : 2,
          name : "Peter jack",
          age: 28
        },
        {
          id : 3,
          name : "Henry jam",
          age: 24
        },
      ],
      isShow : true,
    };

    this.togglehandler = this.togglehandler.bind(this);
  }

  togglehandler(){
    console.log(this.state);
    this.setState({ isShow : !this.state.isShow });
  }

  removeHandler = (id) => {
    const personsCopy = this.state.persons;
    // console.table(personsCopy);
    // console.log(personsCopy[id]);
    personsCopy.splice(id,1);
    this.setState({ persons : personsCopy });
    // console.table(personsCopy);
  }

  render() {
    let persons;
    // second way to toggle
    if(this.state.isShow){
      persons = this.state.persons.map( (p,index) => {
        return <Person key={index} name={p.name} age={p.age} remove = { () => this.removeHandler(index) }/>;
      });
    }
    else{
      persons = '';
    }
    return (
      <div className='App'>
        <button type='button' onClick={this.togglehandler}>Toggle</button>
        <h3>Users</h3>
        {persons}
        <Form/>
      </div>
    )
  }
}
