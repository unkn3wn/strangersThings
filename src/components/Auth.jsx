import React from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { loginUser, registerUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
import styles from "../ComponentCss/Auth.module.css";

const Login = ({ setToken }) => {
  const { method } = useParams();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          let result;
          if (method === "register") {
            result = await registerUser(username, password);
          } else {
            result = await loginUser(username, password);
          }
          const token = result.data.token;
          localStorage.setItem("token", token);
          setToken(token);
          navigate("/");
          location.reload(true)
        }}
      >
        <h1 className={styles.title}>
          {" "}
          {method === "register" ? "Register" : "Login"}
        </h1>
        <input
          className={styles.formInputs}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          placeholder="username"
        />
        <input
          className={styles.formInputs}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="text"
          placeholder="password"
        />
        <button className={styles.subButton} type="submit">
          {method === "register" ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
