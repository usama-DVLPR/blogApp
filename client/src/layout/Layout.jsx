import React from "react";
import Header from "../components/header/Header";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main>
      <Header />
      <Outlet />
    </main>
  );
};
