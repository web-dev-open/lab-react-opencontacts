// src/App.js
import { useState } from "react";
import contactsData from "./contacts.json";
import "./App.css";

function App() {
  // Start with first 5 contacts
  const [contacts, setContacts] = useState(contactsData.slice(0, 5));

  // Iteration 3: Add random contact
  const addRandomContact = () => {
    // Find remaining contacts not in current list
    const remainingContacts = contactsData.filter(
      (c) => !contacts.find((contact) => contact.id === c.id)
    );

    if (remainingContacts.length === 0) return; // no more contacts to add

    const randomContact =
      remainingContacts[Math.floor(Math.random() * remainingContacts.length)];

    setContacts([...contacts, randomContact]);
  };

  // Iteration 4: Sort by name
  const sortByName = () => {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  };

  // Iteration 4: Sort by popularity
  const sortByPopularity = () => {
    const sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  };

  // Iteration 5: Delete contact
  const deleteContact = (id) => {
    const filtered = contacts.filter((contact) => contact.id !== id);
    setContacts(filtered);
  };

  return (
    <div className="App">
      <h1>Contacts</h1>

      {/* Action buttons */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
      </div>

      {/* Contact Table */}
      <table border="1" cellPadding="10">
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
                  height="100px"
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
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
