import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

let globalUser = null; // Declare global variable outside of component

const setGlobalUser = (user) => {
  globalUser = user;
};

import loginAccounts from "./loginAccounts";
const Login = ({ loggedIn, setLoggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 0; i < loginAccounts.length; i++) {
      const user = loginAccounts[i];
      if (user.USERNAME === username && user.PASSWORD === password) {
        setLoggedIn(true);
        user.loggedIn = true;
        setGlobalUser(user); // Update global variable with matched user
        navigate("/accountsList");
        return;
      } else {
        setLoggedIn(false);
        user.loggedIn = false;
        navigate("/login");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input
          type="text"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log In</button>
    </form>
  );
};

export { Login, globalUser, setGlobalUser };
