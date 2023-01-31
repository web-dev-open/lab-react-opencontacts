import "./App.css";
import contacts from "./contacts.json";

function App() {
  let first5Contacts = contacts.slice(0, 5);
  // first5Contacts.push("Won an Oscar");
  console.log(first5Contacts);

  return (
    <div className="App">
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
          </tr>
          {first5Contacts.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <img alt="celeb" src={item.pictureUrl} />
                </td>
                <td>{item.name}</td>
                {console.log(typeof item.popularity)}
                <td>{item.popularity.toString().slice(0, 5)}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
