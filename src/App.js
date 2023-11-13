import React, { useState } from "react";
import contacts from "./contacts.json";

function App() {
  const firstFive = contacts.slice(0, 5);
  const [displayedContacts, setDisplayedContacts] = useState(firstFive);
  const remaining = contacts.filter((c) => !displayedContacts.includes(c));

  const getRandomContact = () => {
    if (remaining.length > 0) {
      const randomIndex = Math.floor(Math.random() * remaining.length);
      setDisplayedContacts([...displayedContacts, remaining[randomIndex]]);
    }
  };

  const sortByPopularity = () => {
    const sortedByPopularity = [...displayedContacts].sort((a, b) => b.popularity - a.popularity);
    setDisplayedContacts(sortedByPopularity);
  };

  const sortByName = () => {
    const sortedByName = [...displayedContacts].sort((a, b) => a.name.localeCompare(b.name));
    setDisplayedContacts(sortedByName);
  };

  const deleteContact = (id) => {
    const updatedContacts = displayedContacts.filter((contact) => contact.id !== id);
    setDisplayedContacts(updatedContacts);
  };

  return (
    <div className="App">
      <div className="flexit">
        <button onClick={getRandomContact}>Get Random Contact</button>
        <button onClick={sortByPopularity}>Sort By Popularity</button>
        <button onClick={sortByName}>Sort By Name</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {displayedContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="100" height="100" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : 'no'}</td>
              <td>{contact.wonEmmy ? '🏆' : 'no'}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
