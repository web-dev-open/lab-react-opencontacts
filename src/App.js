import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import contactsJson from "./contacts.json"
import Contacts from './component/contacts';


function App() {

  let [contacts, setContacts] = useState(contactsJson.slice(0,5))


  const handleAdd = () => {
    let randomIndex = Math.floor(Math.random() * contactsJson.length)
    let randomcontact = contactsJson[randomIndex]

    setContacts([...contacts, randomcontact ])
  }

  const btnSortName = () => {
    let clonedContacts = structuredClone(contacts)
    clonedContacts.sort((a, b) => {
    if (a.name > b.name) {
      return 1
    }
    else if (a.name < b.name) {
      return -1
    }
    else {
      return 0
    }
  }).slice(0,5)

  setContacts(clonedContacts)

  }
 
  const btnSortPop = () => {
    let clonedContacts = structuredClone(contacts)
    clonedContacts.sort((a, b) => {
    if (a.popularity > b.popularity) {
      return 1
    }
    else if (a.popularity < b.popularity) {
      return -1
    }
    else {
      return 0
    }
  }).slice(0,5)

  setContacts(clonedContacts)

  }



  const handleDelete = (index) => {
    let clonedContacts = structuredClone(contacts)
    clonedContacts.splice(index, 1)
    setContacts(clonedContacts)
  }




  return (
    <>
      
      <button onClick={btnSortName}>Sort by Name</button>
      <button onClick={btnSortPop}>Sort by Popularity</button>
      <button onClick={handleAdd}>Add Ranmdom Contact</button>
      
   
      {
        contacts.map((contacts, i) => {
          return <Contacts
            key={`${i}${contacts.name}`}
            name={contacts.name}
            popularity = {contacts.popularity}
            pictureUrl = {contacts.pictureUrl}
            wonEmmy = {contacts.wonEmmy}
            wonOscar = {contacts.wonOscar}
            deleteFn= {handleDelete}
            
            
          />
        })
      }
    </>
  );
}
export  default App;