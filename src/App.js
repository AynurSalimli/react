import { useState } from "react";

function App(props) {
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [friends, setFriends] = useState(["Aynur", "Zuleykha", "Gunel"]);
  const [address, setAddress] = useState({ title: "Baku", zip: 1053 });
  return (
    <div className="App">
      {/* To change name and age */}
      <h1>
        Good morning {name} {age}
      </h1>
      <button
        onClick={() => {
          setName("Aynur");
          setAge(19);
        }}
      >
        Change
      </button>
      <button
        onClick={() => {
          setAge(25);
        }}
      >
        secondbtn
      </button>

      <hr />

      <h2>Friends:</h2>
      {friends.map((friend, index) => (
        <div key={index}>{friend}</div>
      ))}

      <button onClick={() => setFriends([...friends, "Angelina"])}>
        Add new friend
      </button>
      <hr />

      <h2>Address</h2>
    
    <div>{address.title}</div>
    <div>{address.zip}</div>

    <button onClick={()=>setAddress({...address, title: "Istanbul"})}>change the address</button>
    </div>
  );
}

export default App;
