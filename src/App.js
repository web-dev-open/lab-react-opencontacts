import { useState } from 'react';

import logo from './logo.svg';
import './App.css';
import contactsFile from './contacts.json';

function App() {

  const [contacts, setContacts] = useState(contactsFile.slice(0, 5));

  function wonOscar(contact) {
    const oscar = contact.wonOscar;

    return oscar;
  }

  function wonEmmy(contact) {
    const emmy = contact.wonEmmy;

    return emmy;
  }

  function addRandomContact() {
    //select a random contact from the remaining contacts
    const randomIndex = Math.floor((Math.random()) * (contactsFile.length - 5));
    const randomContact = [...contactsFile.slice(5)][randomIndex];

    setContacts((prevContacts) => [...prevContacts, randomContact]);
  }

  function sortByPopularity() {
    const sortedArrayByPopularity = contacts.toSorted((a, b) => {
      return b.popularity - a.popularity;
    });
    setContacts(sortedArrayByPopularity);
  }

  function sortByName() {
    const sortedArrayByName = contacts.toSorted((a, b) => {
      return a.name.localeCompare(b.name);
    });
    setContacts(sortedArrayByName);
  }

  function deleteContact(event) {
    const key = event.target.getAttribute('data-key');
    console.log(key);
    let filteredArray = contacts.filter((contact) => {
      return contact.id !== key;
    });
    setContacts(filteredArray);
  }

  return (
    <div className="App">
      <div className='appHeader'>
        <h1 className='appHeading'>Contact Manager</h1>
        <div className='buttons'>
          <button type="button" class="btn btn-primary button" onClick={addRandomContact}>Add random contact</button>
          <button type="button" class="btn btn-primary button" onClick={sortByPopularity}>Sort by popularity</button>
          <button type="button" class="btn btn-primary button" onClick={sortByName}>Sort by name</button>
        </div>
      </div>

      <table className='contactsTable'>
        <thead>
          <tr className='tableHeader aRow'>
            <td className='headerColumn'>Picture</td>
            <td className='headerColumn'>Name</td>
            <td className='headerColumn'>Popularity</td>
            <td className='headerColumn'>Oscar</td>
            <td className='headerColumn'>Emmy</td>
            <td className='headerColumn'>Action</td>
          </tr>
        </thead>

        <tbody>
          {contacts.map((contact) => {
            return (
              <tr className='contactRow aRow'>
                <div><td className='contactColumn'><img src={contact.pictureUrl} className='picture' /></td></div>
                <div><td className='contactColumn'>{contact.name}</td></div>
                <div><td className='contactColumn'>{contact.popularity}</td></div>
                <div>
                  <td className='contactColumn'>
                    {wonOscar(contact) ? '🏆' : ''}
                  </td>
                </div>
                <div>
                  <td className='contactColumn'>
                    {wonEmmy(contact) ? '🏆' : ''}
                  </td>
                </div>
                <div>
                  <td className='contactColumn'>
                    <button type="button" data-key={contact.id} class="btn btn-danger button deleteButton" onClick={deleteContact}>Delete</button>
                  </td>
                </div>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
