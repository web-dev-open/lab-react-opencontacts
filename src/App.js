import contactsJson from "./contacts.json";
import "./App.css";
import { useState } from "react";

function App() {
  let [contacts, setContacts] = useState(contactsJson.slice(0, 5));
  let [randomContacts, setrandomContacts] = useState(contactsJson.slice(6));

  // const getRandomEle = (array) => {
  //   return array[Math.floor(Math.random) * array.length];
  // };

  const addElement = () => {
    let contactsForRandomElement = structuredClone(randomContacts);
    let randomIdx = Math.floor(Math.random()*contactsForRandomElement.length);
    let randomContact = contactsForRandomElement[randomIdx];
    setContacts([...contacts, randomContact ]);
  };

  const sortByName = () => {
    let cloneContacts = structuredClone(contacts);
    cloneContacts
      .sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      })
      .slice(0, 5);
    setContacts(cloneContacts);
  };

  const sortByPopularity = () => {
    let cloneContacts1 = structuredClone(contacts);
    cloneContacts1
      .sort((a, b) => {
        if (a.popularity > b.popularity) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        } else {
          return 0;
        }
      })
      .slice(0, 5);
    setContacts(cloneContacts1);
  };

  const removeContact = (contact) => {
    let cloneContacts2 = structuredClone(contacts);
    cloneContacts2.splice(contact, 1)
    setContacts(cloneContacts2)
  };

  const checkOscar = (Boolean) => {
    if (Boolean === "true") {
      return "🏆";
    }
  };

  const checkEmmy = (Boolean) => {
    if (Boolean === "true") {
      return "🏆";
    }
  };

  return (
    <div className="App overflow-x-auto scrollbar-hide relative shadow-md sm:rounded-lg mt-2">
      <button
        onClick={addElement}
        type="button"
        class="text-white uppercase bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 "
      >
        Add Random Contact
      </button>
      <button
        onClick={sortByName}
        type="button"
        class="text-white uppercase bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Sort By Name
      </button>
      <button
        onClick={sortByPopularity}
        type="button"
        class="text-white uppercase bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
      >
        Sort By Popularity
      </button>
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="py-3 px-6">
              <span className="sr-only">Image</span>
              Picture
            </th>
            <th scope="col" className="py-3 px-6">
              Name
            </th>
            <th scope="col" className="py-3 px-6">
              Popularity
            </th>
            <th scope="col" className="py-3 px-6">
              Won Oscar
            </th>
            <th scope="col" className="py-3 px-6">
              Won Emmy
            </th>
            {/* <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Image</span>
                    Picture
                </th> */}
          </tr>
        </thead>
        <tbody>
          {/* {contacts.slice(0, 5).map((value, key) => {  Iteration-1 */}
          {/* {contacts.slice(0, 5).map((value, key) => {  Iteration-2 with 5 contacts */}
          {/* {contacts.map((value, key) => { Iteration-2 with all contacts */}
          {/* {contacts.slice(0, 5).map((value, key) => { */}
          {contacts.map((value, key) => {
            return (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className=" p-6 w-36 border ">
                  <img
                    src={value.pictureUrl}
                    alt=""
                    className="rounded-full border"
                  />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white border">
                  {value.name}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white border">
                  {value.popularity}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white border">
                  {checkOscar(`${value.wonOscar}`)}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white border">
                  {checkEmmy(`${value.wonEmmy}`)}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white border">
                <button
                  onClick={() => removeContact(key)}
                  type="button"
                  class="text-white uppercase bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Delete Contact
                </button>
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
