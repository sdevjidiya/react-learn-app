import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "con";
  const [contactsData, setContacts] = useState([]);

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
    // console.log(contacts);
    setContacts([...contactsData, contact]);
  };

  useEffect(() => {
    // console.log("contacts", setContacts);
    const retriveContact = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setContacts(retriveContact);
  }, []);

  useEffect(() => {
    console.log("contacts", setContacts);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contactsData));
  }, [contactsData]);

  return (
    <div className="ui container">
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contactsData} />
    </div>
  );
}

export default App;
