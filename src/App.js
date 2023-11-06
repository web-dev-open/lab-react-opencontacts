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

    if (celebs.includes(randomCeleb)) {
      let randomCeleb2 = contacts[Math.floor(Math.random() * contacts.length)];
      if (!celebs.includes(randomCeleb2)) {
        setCelebs((prevValue) => {
          return [...prevValue, randomCeleb2];
        });
      }
    } else {
      setCelebs((prevValue) => {
        return [...prevValue, randomCeleb];
      });
    }
  }

  const handleSortPop = () => {
    let cloneCelebs = [...celebs];
    cloneCelebs.sort((a, b) => {
      if (a.popularity < b.popularity) {
        return 1;
      } else if (a.popularity > b.popularity) {
        return -1;
      } else {
        return 0;
      }
    });
    setCelebs(cloneCelebs);
  };

  const handleSortName = () => {
    let cloneCelebs = [...celebs];
    cloneCelebs.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      } else if (a.name < b.name) {
        return -1;
      } else {
        return 0;
      }
    });
    setCelebs(cloneCelebs);
  };

  function handleDelete(i) {
    let cloneCelebs = [...celebs];
    cloneCelebs.splice(i, 1);
    setCelebs(cloneCelebs);
  }

  return (
    <div className="App">
      <button onClick={addRandomCeleb}>Add Random Contact</button>
      <button onClick={handleSortPop}>Sort by popularity</button>
      <button onClick={handleSortName}>Sort by name</button>
      <table>
        <tbody>
          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>

            <th>Won Oscar</th>
            <th>Won Emmy</th>
            <th>Actions</th>
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
                <td>
                  <button onClick={() => handleDelete(i)}>Delete</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
