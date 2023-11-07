import React from 'react'

function Contacts(props) {

    const 
    { name, 
      pictureUrl, 
      popularity, 
      children, 
      wonOscar, 
      wonEmmy,
      deleteFn,
      index
    } = props



    const wonEm = () => {
        if (wonEmmy) {
            return "🏆"
        } else {
          return "none"
        }
    }


    const wonOs = () => {
        if (wonOscar) {
            return "🏆"
        } else {
          return "none"
        }
    }


  return (

    
    <div> 
    <table>
    <tr>
      <th>Picture</th>
      <th>Name</th>
      <th>Popularity</th>
      <th>Won Oscar</th>
      <th>Won Emmy </th>
    </tr>
    <tr>
        <td><img style={{height: "100px"}} src= {pictureUrl} alt="in"/></td>
      <td>{name}</td>
      <td>{popularity}</td>
      <td>{wonOs()}</td>
      <td>{wonEm()}</td>
      <td><button onClick={() => { deleteFn(index)} }>Delete</button></td>
      
      
    </tr>
  </table>
  {children}
  </div>
  )
}

export default Contacts
