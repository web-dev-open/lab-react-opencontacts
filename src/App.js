import contacts from "./contacts.json";
import "./App.css";

function App() {
  
  const checkOscar = (Boolean) => {
    if(Boolean === 'true'){
      return "🏆";
  }
  
  }
  
  const checkEmmy = (Boolean) => {
    if(Boolean === 'true'){
      return "🏆";
    }
  
  }

  return (
    
    <div className="App overflow-x-auto relative shadow-md sm:rounded-lg">
      
<button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">Add Random Contact</button>
<button type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sort By Name</button>
<button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Sort By Popularity</button>
<button type="button" class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Delete Contact</button> */
{/* {/* <button type="button" class="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Teal</button>
<button type="button" class="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 shadow-lg shadow-lime-500/50 dark:shadow-lg dark:shadow-lime-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Lime</button>
<button type="button" class="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Red</button>
<button type="button" class="text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Pink</button> */}


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
                <td className=" p-4 w-32 border ">
                  <img src={value.pictureUrl} alt="" className="rounded-full border" />
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
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
