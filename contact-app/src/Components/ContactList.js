import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  // console.log(props);
  const renderContactList = props.contacts.map((contact, id) => {
    return <ContactCard key={id} contact={contact} />;
  });
  return (
    <>
      <div className="ui celled list">{renderContactList}</div>
    </>
  );
};

export default ContactList;
