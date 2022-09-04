import { useEffect, useState } from "react";
import { loginApi } from './network/axios/axios.custom';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onEmail = (event) => setEmail(event.target.value);
  const onPassword = (event) => setPassword(event.target.value);

  const onLogin = async function (event) {
    event.preventDefault();
    const res = loginApi.loginUser(email, password); // Object 객체 받음.
    console.log(res);
 };
    return (
    <div>
      <h1> Login API </h1>
      <div>
        <input value={email} onChange={onEmail} type="text" placeholder="Type your email"></input>
        <hr />
        <input value={password} onChange={onPassword} type="text" placeholder="Type your password"></input>
        <hr />
        <button onClick={onLogin}>Login</button>
      </div>
    </div>
  );
}

export default App;