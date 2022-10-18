import React from "react";
import { useParams } from "react-router-dom";
import{useState, useEffect} from "react-dom"
import {registerUser, loginUser} from "../api/auth"
import Authhook from "../Hooks/Authhook"
// import Register from "../components/Register"

const Login=()=>{

  const {method} = useParams();
  const {setToken} = Authhook();

  return(

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

  )




}

export default Login