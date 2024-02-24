import React, { useState, useEffect } from 'react';
import './App.css';

import contacts from  "./contacts.json";


function App() {
 
  const [ContactList, setContactList] = useState([]);
  const [remainingContacts, setRemainingContacts] = useState([]);
  const [displayedContacts, setDisplayedContacts] = useState([]);
  const [sortedBy, setSortedBy] = useState(null);

 



  useEffect(() => {
    fetch('./contacts.json')
      .then(response => response.json())
      .then(data => {
        setContactList(data.slice(0, 5)); 
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const addRandomContact = () => {
   
    if (remainingContacts.length === 0) {
      alert('No more remaining contacts');
      return;
    }
    
   
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    
    setDisplayedContacts(prevContacts => [...prevContacts, randomContact]);

    
    setRemainingContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== randomContact.id)
    );
  };

  const sortByName = () => {
    const sortedContacts = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContactList(sortedContacts);
    setSortedBy('name');
  };

  const sortByPopularity = () => {
    const sortedContacts = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContactList(sortedContacts);
    setSortedBy('popularity');
  };

  const deleteContact = (id) => {
    setDisplayedContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };








  return (
    <div>
      <h1>Contacts</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <div>
        <button onClick={sortByName}>Sort by Name</button>
        <button onClick={sortByPopularity}>Sort by Popularity</button>
        {sortedBy && <p>Sorted by: {sortedBy}</p>}
      </div>
     

     
      <table>
        <thead>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact, index) => (
            <tr key={index}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} style={{ width: '50px', height: '50px' }} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? <span role="img" aria-label="Oscar trophy">🏆</span> : null}</td>
            <td>{contact.wonEmmy ? <span role="img" aria-label="Emmy trophy">🏆</span> : null}</td>
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
