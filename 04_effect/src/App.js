import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [keyword, setkeyword] = useState("");
  const onClick = () => setCounter((current) => current + 1);
  const onChange = (event) => setkeyword(event.target.value);
  console.log("I run always");
  const iRunOnlyOnce = () => console.log("I run only once");
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if (keyword !== "" && keyword.length > 5)
      console.log("I run keyword");
  }, [keyword]);
  useEffect(() => {
    console.log("I run counter");
  }, [counter]);
  useEffect(() => {
    console.log("I run keyword and counter");
  }, [keyword, counter]);
  return (
    <div>
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..."></input>
      <h1> Total count: {counter}</h1>
      <button onClick={onClick}>Click me !</button>
    </div>
  );
}

export default App;
