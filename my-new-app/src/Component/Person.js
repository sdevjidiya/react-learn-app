import React from 'react'
import Personcss from './person.module.css';
import '../App.css';

export function Person(props) {
  return (
    <div className='App'>
      <div className={Personcss.personbox}>
        <p>Name : {props.name} Age: {props.age}</p>
        <button type='submit' className='danger-btn' onClick={props.remove}>Delete</button>
      </div>
    </div>
  )
}
