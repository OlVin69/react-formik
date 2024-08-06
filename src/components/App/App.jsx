import { useState, useEffect } from "react";

import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import contacts from "./../../contacts.json"

import "./App.css";

const App = () => {
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList contacts={contacts}/>
    </>
  );
};

export default App;
