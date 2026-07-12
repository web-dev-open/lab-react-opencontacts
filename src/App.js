import { useState } from "react";
import allContacts from "./contacts.json";
import "./App.css";

function App() {
  const [contacts, setContacts] = useState(allContacts.slice(0, 5));

  
  const addRandomContact = () => {
    
    const currentIds = contacts.map(c => c.id);
    const remainingContacts = allContacts.filter(c => !currentIds.includes(c.id));

    
    if (remainingContacts.length === 0) {
      alert("All available contacts have been added!");
      return;
    }

   
    const randomIndex = Math.floor(Math.random() * remainingContacts.length);
    const randomContact = remainingContacts[randomIndex];

    
    setContacts([...contacts, randomContact]);
  };

  
  const sortByName = () => {
    const sorted = [...contacts].sort((a, b) => a.name.localeCompare(b.name));
    setContacts(sorted);
  };

  
  const sortByPopularity = () => {
    const sorted = [...contacts].sort((a, b) => b.popularity - a.popularity);
    setContacts(sorted);
  };

  
  const deleteContact = (contactId) => {
    const filtered = contacts.filter(c => c.id !== contactId);
    setContacts(filtered);
  };

  return (
    <div className="App" style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>IronContacts</h1>

      <div style={{ marginBottom: "30px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <button className="action-btn" onClick={addRandomContact}>Add Random Contact</button>
        <button className="action-btn" onClick={sortByPopularity}>Sort by Popularity</button>
        <button className="action-btn" onClick={sortByName}>Sort by Name</button>
      </div>
      <table className="contact-table">
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
                  style={{ width: "60px", height: "80px", objectFit: "cover", borderRadius: "4px" }}
                />
              </td>
              <td style={{ fontWeight: "600" }}>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? "🏆" : ""}</td>
              <td>{contact.wonEmmy ? "🏆" : ""}</td>
              <td>
                <button className="delete-btn" onClick={() => deleteContact(contact.id)}>
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