import { useState } from "react";
import { puppyList } from "./data.js";


function App() {

  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null)

  function handleClick(puppy) {
    setFeatPupId(puppy.id)
    
  }
  const featuredPup = puppies.find((pup)=> pup.id === featPupId
  )
  console.log(featuredPup)
  console.log("puppyList: ", puppyList);

  return (
    <div className="App">
      {
        featPupId && (
          <div>
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
             <p onClick={handleClick} key={puppy.id}>{puppy.name}</p>
             );
           })
        
       }
      
    </div>
  );
}

export default App;
