import { useState, useEffect } from "react";

import SearchBox from "./SearchBox/SearchBox";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";

import "./App.css";

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("saved-contacts");

    if (savedContacts) {
      try {
        const parsedContacts = JSON.parse(savedContacts);
        if (Array.isArray(parsedContacts) && parsedContacts.length > 0) {
          return parsedContacts;
        }
      } catch (e) {
        console.error("Failed to parse saved contacts:", e);
      }
    }
    return [];
  });
  const [filter, setFilter] = useState("");

  const addContacts = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const deleteContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  useEffect(() => {
    localStorage.setItem("saved-contacts", JSON.stringify(contacts));
  }, [contacts]);

  const filteredContacts = contacts.filter((contact) =>
    contact.name?.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </>
  );
};

export default App;
