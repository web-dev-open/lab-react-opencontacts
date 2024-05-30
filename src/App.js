import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import contactsData from './contacts.json';

function App() {
  const initialContacts = contactsData.slice(0, 5);
  const initialRemainingContacts = contactsData.slice(5);

  const [displayedContacts, setDisplayedContacts] = useState(initialContacts);
  const [remainingContacts, setRemainingContacts] = useState(initialRemainingContacts);

  const addRandomContact = () => {
    if (remainingContacts.length > 0) {
      const randomIndex = Math.floor(Math.random() * remainingContacts.length);
      const randomContact = remainingContacts[randomIndex];

      setDisplayedContacts((prevContacts) => [...prevContacts, randomContact]);

      const updatedRemainingContacts = remainingContacts.filter(
        (contact) => contact.id !== randomContact.id
      );

      setRemainingContacts(updatedRemainingContacts);
    } else {
      console.log('No more contacts to add!');
    }
  };

  const deleteContact = (id) => {
    const updatedDisplayedContacts = displayedContacts.filter((contact) => contact.id !== id);
    setDisplayedContacts(updatedDisplayedContacts);

    const deletedContact = displayedContacts.find((contact) => contact.id === id);
    if (deletedContact) {
      setRemainingContacts((prevRemaining) => [...prevRemaining, deletedContact]);
    }
  };

  const sortByName = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
    setDisplayedContacts(sortedContacts);
  };

  const sortByPopularity = () => {
    const sortedContacts = [...displayedContacts].sort((a, b) => b.popularity - a.popularity);
    setDisplayedContacts(sortedContacts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <h1>Contact List</h1>
        <button onClick={addRandomContact}>Add Random Contact</button>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        <table className="contacts-table">
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Popularity</th>
              <th>Won an Oscar</th>
              <th>Won an Emmy</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedContacts.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px' }} />
                </td>
                <td>{contact.name}</td>
                <td>{contact.popularity.toFixed(2)}</td>
                <td>{contact.wonOscar ? '🏆' : '-'}</td>
                <td>{contact.wonEmmy ? '🏆' : '-'}</td>
                <td>
                  <button className="delete-btn" onClick={() => deleteContact(contact.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
