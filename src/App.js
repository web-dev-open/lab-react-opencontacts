import React, { useState } from 'react';
import contactsData from './contacts.json';
import './App.css';

function App() {
  const [contactsList, setContactsList] = useState(contactsData.slice(0, 5));
  const [remainingContacts, setRemainingContacts] = useState(contactsData.slice(5));

  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      alert("No more contacts to add!");
      return;
    }

    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];
    
    setContactsList([...contactsList, randomContact]);
    // No need to modify remainingContacts, as we are not removing contacts
  };

  const sortByName = () => {
    const sortedList = [...contactsList].sort((a, b) => a.name.localeCompare(b.name));
    setContactsList(sortedList);
  };

  const sortByPopularity = () => {
    const sortedList = [...contactsList].sort((a, b) => b.popularity - a.popularity);
    setContactsList(sortedList);
  };

  const deleteContact = (id) => {
    const updatedContacts = contactsList.filter(contact => contact.id !== id);
    setContactsList(updatedContacts);
  };

  return (
    <div className="App">
      <h1>Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPopularity}>Sort by Popularity</button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Picture</th>
            <th>Popularity</th>
            <th>Won an Oscar</th>
            <th>Won an Emmy</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {contactsList.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px' }} />
              </td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ""}</td>
              <td>{contact.wonEmmy ? '🏆' : ""}</td>
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