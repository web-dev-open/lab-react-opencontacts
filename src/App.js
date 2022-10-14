import contacts from "./contacts.json";
import "./App.css";

function App() {
  return (
    <div className="App overflow-x-auto relative shadow-md sm:rounded-lg">
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
            {/* <th scope="col" className="py-3 px-6">
                    <span className="sr-only">Image</span>
                    Picture
                </th> */}
          </tr>
        </thead>
        <tbody>
          {contacts.slice(0, 5).map((value, key) => {
            return (
              <tr
                key={key}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="p-4 w-32">
                  <img src={value.pictureUrl} alt="" />
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {value.name}
                </td>
                <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
                  {value.popularity}
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
