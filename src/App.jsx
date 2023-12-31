import { useState } from "react";
import { puppyList } from "./data.js";
import './App.css'
import './index.css'


function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick(id) {
    setFeatPupId(id)
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId
  )
  console.log(featuredPup)
  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        featPupId && (
          <div className="card">
            <h1>🐶</h1>
            <h2>{featuredPup.name}</h2>
            <ul>
              <li>Age: {featuredPup.age}</li>
              <li>Email: {featuredPup.email}</li>
            </ul>
          </div>
        )
      }
      {
        puppies.map((puppy) => {
             return (
              <p className="logo" onClick={() => handleClick(puppy.id)} key={puppy.id}>
              {puppy.name}
            </p>
             );
           })
       }
    </div>
  );
}

export default App;
