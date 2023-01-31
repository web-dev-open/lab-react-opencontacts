import { useState } from "react";
import "./App.css";
import contacts from "./contacts.json";
import trophy from "./trophy.png";

function App() {
  let first5Contacts = contacts.slice(0, 10);
  const [celebs, setCelebs] = useState(first5Contacts);
  // console.log(celebs);

  // first5Contacts.push("Won an Oscar");
  // console.log(first5Contacts);

  function addRandomCeleb() {
    let randomCeleb = contacts[Math.floor(Math.random() * contacts.length)];

    setCelebs((prevValue) => {
      return [...prevValue, randomCeleb];
    });
  }

  return (
    <div className="App">
      <button onClick={addRandomCeleb}>Add Random Contact</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>

            <th>Won Oscar</th>
            <th>Won Emmy</th>
          </tr>
          {celebs.map((item, i) => {
            return (
              <tr key={i}>
                <td>
                  <img alt="celeb" src={item.pictureUrl} />
                </td>
                <td>{item.name}</td>
                {/* {console.log(typeof item.popularity)} */}
                <td>
                  {item.popularity < 10
                    ? item.popularity.toString().slice(0, 4)
                    : item.popularity.toString().slice(0, 5)}
                </td>
                {/* {console.log(typeof item.wonOscar)} */}
                <td>{item.wonOscar && <img src={trophy} alt="trophy" />}</td>
                <td>{item.wonEmmy && <img src={trophy} alt="trophy" />}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
