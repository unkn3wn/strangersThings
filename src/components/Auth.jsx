import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react"
import { loginUser, registerUser } from "../api/auth"
import LogoutUser from "./Logout";


const Login = ({ setToken }) => {
  const { method } = useParams();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (

    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();

          let result;
          if (method === 'register') {
            result = await registerUser(username, password);
          } else {
            result = await loginUser(username, password);
          }
          console.log(result);
          const token = result.data.token;
          localStorage.setItem("token", token);
          setToken(token);
        }}
      >
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>

  )

}

export default Login