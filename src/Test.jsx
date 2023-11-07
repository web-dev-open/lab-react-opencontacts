// import React from "react";
// import contacts from './contacts.json'
// const Test = () => {
//   return (
//     <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
//       <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
//         <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
//           <tr>
//             <th scope="col" className="py-3 px-6">
//               <span className="sr-only">Image</span>
//               Picture
//             </th>
//             <th scope="col" className="py-3 px-6">
//               Name
//             </th>
//             <th scope="col" className="py-3 px-6">
//               Popularity
//             </th>
//             {/* <th scope="col" className="py-3 px-6">
//                     <span className="sr-only">Image</span>
//                     Picture
//                 </th> */}
//           </tr>
//         </thead>
//         <tbody>
//           {contacts.slice(0,5).map((value, key) => {
//             return(
//               <tr
//               key={key}
//               className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
//             >
//               <td className="p-4 w-32">
//                 <img src={value.pictureUrl} alt="" />
//               </td>
//               <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
//                 {value.name}
//               </td>
//               <td className="py-4 px-6 font-semibold text-gray-900 dark:text-white">
//                 {value.popularity}
//               </td>
//               {/* <td className="py-4 px-6">
//                                 <a href="#" className="font-medium text-red-600 dark:text-red-500 hover:underline">Remove</a>
//                             </td> */}
//             </tr>;
//             )
      
//           })}
          
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Test;


// const checkOscar = (Boolean) => {
//   if(`${elem.wonOscar}` === Boolean){
//     return "🏆";
// }

// }

// const checkEmmy = (Boolean) => {
//   if(`${elem.wonEmmy}` === Boolean){
//     return "🏆";
//   }

// }

const getRandomEle = (array) => {
  return array[Math.floor(Math.random)*array.length];
}

