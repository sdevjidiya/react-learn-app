import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  // const contacts = [
  //   {
  //     id: 1,
  //     name: "John",
  //     email: "john@gmail.com",
  //   },
  //   {
  //     id: 2,
  //     name: "Roy",
  //     email: "roy@gmail.com",
  //   },
  //   {
  //     id: 3,
  //     name: "James",
  //     email: "james@gmail.com",
  //   },
  // ];

  const addContactHandler = (contact) => {
    setContacts([...contacts, contact]);
    // console.log(contacts);
  };

  useEffect(() => {
    const retriveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (retriveContacts) setContacts(retriveContacts);
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
