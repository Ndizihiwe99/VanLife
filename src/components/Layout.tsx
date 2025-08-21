import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <div className="bg-gray-900 w-full h-32 place-self-center">
        <footer className="p-14 text-center text-gray-500">
          &copy; 2022#VANLIFE
        </footer>
      </div>
    </div>
  );
}

export default Layout;
