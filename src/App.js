import React, { useState, useEffect } from 'react';
import contactsData from './contacts.json';
import './App.css';

function App() {
  const [contacts, setContacts] = useState([]);
  const [remainingContacts, setRemainingContacts] = useState([]);

  useEffect(() => {
    setRemainingContacts(contactsData.slice(5));
    setContacts(contactsData.slice(0, 5));
  }, []);

  const addRandomContact = () => {
    if(remainingContacts.length > 0) {
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setContacts((prevContacts) => [...prevContacts, randomContact]);
      
      setRemainingContacts((prevRemainingContacts) =>
        prevRemainingContacts.filter((contact) => contact.id !== randomContact.id)
      );
    }
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sortedContacts);
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sortedContacts);
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);

    const deletedContact = contacts.find((contact) => contact.id === id);
    if (deletedContact) {
      setRemainingContacts((prevRemainingContacts) => [...prevRemainingContacts, deletedContact]);
    }
  };

  return (
    <div className="App">
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <button onClick={sortByName}>Sort by Name</button>
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
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
                  style={{ width: '55px', height: '80px' }}
                />
              </td>
              <td>{contact.name}</td>
              <td>{parseFloat(contact.popularity).toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : null}</td>
              <td>{contact.wonEmmy ? '🌟' : null}</td>
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
