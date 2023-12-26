import contacts from "./contacts.json";

import logo from './logo.svg';
import './App.css';

const [contacts, setContacts] = useState(contacts.slice(0, 5));

return (
  <div className="App">
    <table>
      <thead>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map(contact => (
          <tr key={contact.id}>
            <td><img src={contact.pictureUrl} alt={contact.name} /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const addRandomContact = () => {
  // Logic to get a random contact from the remaining contacts
  // Update the state using setContacts([...contacts, newContact]);
};
const sortByName = () => {
  // Logic to sort contacts by name
  // Update the state using setContacts([...sortedContacts]);
};

const sortByPopularity = () => {
  // Logic to sort contacts by popularity
  // Update the state using setContacts([...sortedContacts]);
};
const removeContact = (id) => {
  // Logic to remove the contact with the given id
  // Update the state using setContacts([...updatedContacts]);
};

function App() {
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
    </div>
  );
}

export default App;
