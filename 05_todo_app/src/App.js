// input, button
// toDo, todos

import { useEffect, useState } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault(); // Check what is submit and event.preventDefault()
    if (toDo === "")
      return ;
    setToDos(current => [toDo, ...current]);
    setToDo("");
  }
  const onClick = () => setToDos([]);
    return (
    <div>
      <h1>My toDo: {toDos.length} </h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" placeholder="Type your to do..."></input>
        <button>Add toDo </button>
        <button onClick={onClick}>Reset</button>
      </form>
      <hr />
      <ul>
        {toDos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      
    </div>
  );
}

export default App;
