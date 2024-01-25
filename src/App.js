import React, { useState } from 'react';
import './App.css';
import contacts from './contacts.json';

function App() {
  const [contactsList, setContactsList] = useState(contacts.slice(0, 7));
  const remainingContacts = contacts.slice(5);

  //function to add a random contact
  const addRandomContact = () => {
    if (remainingContacts.length === 0) {
      // Handling the case where there are no more remaining contacts
      alert('No more remaining contacts');
      return;
    }

    // Randomly selecting a contact from the remaining contacts
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    // Adding the selected contact to the array in the state
    setContactsList((prevContacts) => [...prevContacts, randomContact]);

    // Removing the selected contact from the remaining contacts
    const updatedRemainingContacts = [
      ...remainingContacts.slice(0, randomIndex),
      ...remainingContacts.slice(randomIndex + 1),
    ];

    // Updating the state of remaining contacts if needed
    // setRemainingContacts(updatedRemainingContacts);
  };
  //function to sort by name alphabetically
  const sortByName = () => {
        //create new array and updating state with sorted array
    const sortedByName = [...contactsList].sort((a,b)=> a.name.localeCompare(b.name));
    setContactsList(sortedByName);
  }
  //fucntion to sort by popularity in descending order
  const sortByPopularity = () => {
    //create new array and updating state with sorted array
    const sortedByPopularity = [...contactsList].sort((a,b)=> b.popularity - a.popularity);
    setContactsList(sortedByPopularity);
  }

  const removeContact = (id) =>{
    //finding the index of the contact with the given ID
    const contactIndex =contactsList.findIndex((contact) => contact.id === id);

     if (contactIndex !== -1){
      //creating a new array exluding the contact to be removed
      const updateContactsList = [
        ...contactsList.slice(0, contactIndex),
        ...contactsList.slice(contactIndex + 1)
      ];

      //updating the stae variable with the modified new array of contacts list
      setContactsList(updateContactsList)
     }


  }

  return (
    <div className="App">
      <h1>Contacts List</h1>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={sortByName}>Sort By Name</button>
      <button onClick={sortByPopularity}>Sort By Popularity</button>
      <table>
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
          {contactsList.map((contact, index) => (
            <tr key={index}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td>
                <button onClick={()=> removeContact(contact.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
