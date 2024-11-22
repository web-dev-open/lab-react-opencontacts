import React, { useState } from "react";
import contacts from "./contacts.json";
import ContactTable from "./components/ContactTable";
import Buttons from "./components/Buttons";

function App() {
  const [contactList, setContactList] = useState(contacts.slice(0, 5));

  function addRandomContact() {
    const remainingContacts = contacts.filter(
      (contact) => !contactList.includes(contact)
    );
    if (remainingContacts.length > 0) {
      const randomContact =
        remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContactList([...contactList, randomContact]);
    }
  }

  function sortByName() {
    const sorted = [...contactList].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sorted);
  }

  function sortByPopularity() {
    const sorted = [...contactList].sort((a, b) => b.popularity - a.popularity);
    setContactList(sorted);
  }

  function deleteContact(id) {
    const filteredContacts = contactList.filter((contact) => contact.id !== id);
    setContactList(filteredContacts);
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>IronContacts</h1>
      <Buttons
        onAddRandom={addRandomContact}
        onSortByName={sortByName}
        onSortByPopularity={sortByPopularity}
      />
      <ContactTable contacts={contactList} onDelete={deleteContact} />
    </div>
  );
}

export default App;
