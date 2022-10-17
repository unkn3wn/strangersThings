import {useState, useEffect} from "react";
import registerUser from "../api/auth";

const Register = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log({ username, password });

          const result = await registerUser(username, password);

          const token = result.data.token;

          localStorage.setItem("token", token);

          setToken(token);
        }}
      >
        <input
          value={username}
          onChange={(event) => setUserName(event.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="text"
          placeholder="email"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
