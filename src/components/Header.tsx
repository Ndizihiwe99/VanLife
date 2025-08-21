import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="flex justify-between pt-14 pb-14 bg-[#FFF7ED] ">
      <div className="">
        <Link to="HomePage" className=" ml-5 text-3xl font-bold">
          #Vanlife
        </Link>
      </div>
      <div className="flex gap-5 mr-5">
        <NavLink
          to="Host"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-950" : undefined
          }
        >
          Host
        </NavLink>
        <NavLink
          to="About"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-950" : undefined
          }
        >
          About
        </NavLink>
        <NavLink
          to="Vans"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-950" : undefined
          }
        >
          Vans
        </NavLink>
      </div>
    </header>
  );
}

export default Header;
