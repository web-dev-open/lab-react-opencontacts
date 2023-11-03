import './App.css';
import contacts from  "./contacts.json";

const firstFivos = [...contacts]
const firstFive = firstFivos.slice(0,5); 


function App() {
   
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
          {firstFive.map(contact => (
            <tr key={contact.id}>
              <td>
                <img src={contact.pictureUrl} alt={contact.name} width="50" height="50" />
              </td>
              <td>{contact.name}</td>
              <td>{contact.popularity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
