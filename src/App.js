import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";

function App() {

  const [showContacts, setShowContacts] = useState(contacts.slice(0, 5));

  const addRandomContact = () => {
    const remainingContacts = contacts.filter(contact => showContacts.id !== contact.id);
    if (remainingContacts.length > 0) {
      const randomContact = remainingContacts[Math.floor(Math.random() * remainingContacts.length)];
      setShowContacts(prevContacts => [...prevContacts, randomContact]);
    }
  }

  const handleFilters = (query) => {
    if (query === "name") {
      setShowContacts([...showContacts].sort((a, b) => a.name.localeCompare(b.name)));
    }
    else if (query === "popularity") {
      setShowContacts([...showContacts].sort((a, b) => b.popularity - a.popularity));
    }
  }

  const deleteContact = (id) => {
    setShowContacts([...showContacts].filter(contact => contact.id != id));
  }

  return <div className="App">
    <div style={{ display: "flex", gap: "10px", marginBottom: "30px" }}>
      <button onClick={addRandomContact}>Add Random Contact</button>
      <button onClick={() => handleFilters("popularity")}>Sort by popularity</button>
      <button onClick={() => handleFilters("name")}>Sort by name</button>
    </div>

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
        {
          showContacts.map((contact) => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt="picture" width="40" height="40" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity.toFixed(2)}</td>
              <td>{contact.wonOscar ? '🏆' : ''}</td>
              <td>{contact.wonEmmy ? '🏆' : ''}</td>
              <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </div>;
}

export default App;
