import './App.css';
import data from './contacts.json'
import React from 'react'
function App() {

  const [list, setList]=React.useState(data.slice(0,5))
  function createRow(r)
  {
    return <tr>
              <td><img src={r.pictureUrl} alt='pic'></img></td>
              <td><h3>{r.name}</h3></td>
              <td><h3>{(r.popularity).toFixed(2)}</h3></td>
              <td><h3>{r.wonOscar ? '🏆' : "-"}</h3></td>
              <td><h3>{r.wonEmmy ? "🏆" : "-"}</h3></td>
              <td><button onClick={()=>deleteContact(r.id)}>Delete</button></td>
           </tr>
  }
  function addRandom()
  {
    let i=parseInt(Math.random()*(data.length))
    let p=data[i]
    while(list.includes(p))
    {
      i=Math.random()*(data.length)
      p=data[i]
    }
    console.log(i,p)
    setList([...list, p])
  }
  function deleteContact(i)
  {
    let filter=list.filter((l) => l.id!==i)
    setList(filter)
  }
  function sortName()
  {
    let copy=[...list]
      copy.sort((a, b) => {
      let nameA = a.name.toUpperCase();
      let nameB = b.name.toUpperCase();
      
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setList(copy)
  }
  function sortPop()
  {
    let copy=[...list]
      copy.sort((a, b) => {
      let popA = a.popularity;
      let popB = b.popularity;
      
      if (popA < popB) {
        return -1;
      }
      if (popA > popB) {
        return 1;
      }
      return 0;
    });
    setList(copy)
  }
  return (
    <div className="App">
        <button onClick={addRandom}>Add Random Contact</button>
        <button onClick={sortName}>Sort by Name</button>
        <button onClick={sortPop}>Sort by popularity</button>
        <table>
        <thead>
          <th>Picture</th>
          <th>Name</th>
          <th>popularity</th>
          <th>Oscar Won</th>
          <th>Emmy Won</th>
        </thead>
          {list.map((l) => createRow(l))}
        </table>
    </div>
  );
}

export default App;
