import React, { Component } from 'react';
import Details from './Details';
import Questions from './Questions';
import Success from './Success';
import '../App.css';
import { v4 as uuidv4 } from 'uuid';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAjwl4kK-CKwJ-yLLXt8thGj_CyczoGUSU",
  authDomain: "react-survey-app-c8bf0.firebaseapp.com",
  databaseURL: "https://react-survey-app-c8bf0-default-rtdb.firebaseio.com",
  projectId: "react-survey-app-c8bf0",
  storageBucket: "react-survey-app-c8bf0.appspot.com",
  messagingSenderId: "924936868748",
  appId: "1:924936868748:web:be3e180dc2dd42f61b3ca9"
};

const app = initializeApp(firebaseConfig);

export default class Container extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      id: uuidv4(),
      name: null,
      email: null,
      questions : {
        q1 : null,
        q2 : null,
        q3 : null,
      },
      isSubmitted : false
    }
  }

  detailsSubmitHandler = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    // console.log(this.state);
    this.setState({name,email}, () => {
      // console.log(this.state);
    });
  }

  questionSubmitHandler = (e) => {
    e.preventDefault();
    const questions = {};
    const isSubmitted = this.state.isSubmitted;
    questions.q1 = e.target.q1.value;
    questions.q2 = e.target.q2.value;
    questions.q3 = e.target.q3.value;
    // console.log(questions);
    this.setState({questions,isSubmitted : true}, () => {
      // console.log(this.state);
      const db = getDatabase(app);
      set(ref(db, 'survey/' + this.state.id), {
        name: this.state.name,
        email: this.state.email,
        questions: this.state.questions
      });
    });
  }

  render() {
    return (
      <>
        <div className='container mb-4 mt-2'>
          <div className='card shadow bg-card-custom text-center p-2 border-0'>
            <h1>React Survey App</h1>
          </div>
        </div>
        {this.state.isSubmitted ? (<Success/>
        ): 
        (this.state.name === null && this.state.email === null) ? (
          <Details submit = {this.detailsSubmitHandler} />
          ) : (
          <Questions submit = {this.questionSubmitHandler} />
        )}
      </>
    )
  }
}
