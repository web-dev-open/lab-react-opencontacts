import { useState } from 'react';
import './App.css';
import jsonData from "./contacts.json";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const [contacts,setContacts] = useState(jsonData.slice(0,5))

  const notify = (del) => toast(del);

 function randomContact(){
  const remainingContacts = jsonData.slice(6,jsonData.length);


  while(remainingContacts.length>0){
    const newContact = remainingContacts[Math.floor(Math.random()*remainingContacts.length)];

    if(!contacts.some((contact)=>contact.id===newContact.id)){
      setContacts((prev)=>[newContact,...prev])
      return;
    }
  
    remainingContacts.splice(remainingContacts.indexOf(newContact),1)
  }
notify("No more contacts are left to added")
 }

 function sortByPopularity(){
  
  setContacts((prev)=>prev.slice().sort((a,b)=>b.popularity-a.popularity))
 }

 function sortByName(){
  setContacts((prev)=>prev.slice().sort((a,b)=>a.name.localeCompare(b.name)))
 }


 function deleteContact(id){



  setContacts((prev)=>prev.filter((contact)=>contact.id!==id))

      notify("contacts get delete "+id)
 }


  
  return (
    <div className="App container mx-auto my-8">
  
  
    <button
     onClick={randomContact}
     className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 my-2 "
    >Add Random Contact</button>
    <button 
       className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 mx-2"
    onClick={sortByPopularity}
    >sort by popularity</button>
    <button 
        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
    onClick={sortByName}
    >sort by name</button>


    <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4">Picture</th>
            <th className="py-2 px-4">Name</th>
            <th className="py-2 px-4">Popularity</th>
            <th className="py-2 px-4">Won an Oscar</th>
            <th className="py-2 px-4">Won an Emmy</th>
            <th className="py-2 px-4">Actions</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.id} className="border-t border-gray-300 text-center ">
              <td className="py-2 px-4">
                <img src={contact.pictureUrl} alt={contact.name} className="w-20 h-20  object-cover rounded" />
              </td>
              <td className="py-2 px-4 text-2xl">{contact.name}</td>
              <td className="py-2 px-4 text-xl">{contact.popularity.toFixed(2)}</td>
              <td className="py-2 px-4">{contact.wonOscar ? "🏆" : ""}</td>
              <td className="py-2 px-4">{contact.wonEmmy ? "🏆" : ""}</td>
              <td className="py-2 px-4">
                <button
                  onClick={() => deleteContact(contact.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Delete
                  <ToastContainer />
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
