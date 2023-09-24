import React from "react";

export const LoginPage = () => {
  return (
    <>
      <h1 className="form__heading">Login</h1>
      <form action="">
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>Login</button>
      </form>
    </>
  );
};
