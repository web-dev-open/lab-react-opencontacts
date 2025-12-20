// src/App.js

import "./App.css";
import { useState } from "react";
import contactsData from "./contacts.json";

function App() {
  // Iteration 1: store first 5 contacts in state
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  // Iteration 3: add random contact
  const addRandomContact = () => {
    const remainingContacts = contactsData.filter(
      (contact) => !contacts.some((c) => c.id === contact.id)
    );

    if (remainingContacts.length === 0) return;

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setContacts([...contacts, randomContact]);
  };

  // Iteration 4: sort by name
  const sortByName = () => {
    const sorted = [...contacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setContacts(sorted);
  };

  // Iteration 4: sort by popularity
  const sortByPopularity = () => {
    const sorted = [...contacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setContacts(sorted);
  };

  // Iteration 5: delete contact
  const deleteContact = (id) => {
    const filtered = contacts.filter((contact) => contact.id !== id);
    setContacts(filtered);
  };

  return (
    <div className="App">
      <h1>IronContacts</h1>

      <div className="buttons">
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  height="100"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar && "🏆"}</td>
              <td>{contact.wonEmmy && "🏆"}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
