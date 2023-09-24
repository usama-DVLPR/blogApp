import React, { useState } from "react";

export const RegisterPage = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const registerUser = async (ev) => {
    ev.preventDefault();
    await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  };
  return (
    <>
      <h1 className="form__heading">Register</h1>

      <form onSubmit={registerUser}>
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(ev) => setUserName(ev.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
      </form>
    </>
  );
};
