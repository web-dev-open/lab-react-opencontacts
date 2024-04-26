import "./App.css";
import React, { useState } from "react";
import contacts from "./contacts.json";
import "./style.css";
function App() {
  const [displayedContacts, setDisplayedContacts] = useState(
    contacts.slice(0, 5)
  );
  const [remainingContacts, setRemainingContacts] = useState(contacts.slice(5));

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more contacts to add!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    setDisplayedContacts([...displayedContacts, randomContact]);
    setRemainingContacts(
      remainingContacts.filter((contact) => contact.id !== randomContact.id)
    );
  };

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDisplayedContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort(
      (a, b) => b.popularity - a.popularity
    );
    setDisplayedContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = displayedContacts.filter(
      (contact) => contact.id !== id
    );
    setDisplayedContacts(updatedContacts);
  };

  return (
    <div className="App">
      <h1>
        <b>STARS-LIST</b>
      </h1>
      <div>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <button onClick={sortByName}>Sort by Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img
                  src={contact.pictureUrl}
                  alt={contact.name}
                  style={{ width: "50px", height: "50px", borderRadius: "50%" }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : "❌"}</td>
              <td>{contact.wonEmmy ? "🏆" : "❌"}</td>
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
