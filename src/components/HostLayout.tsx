import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <div className="flex gap-5 mr-5">
        <NavLink
          to="/Host"
          end
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-950" : undefined
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="Income"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-950" : undefined
          }
        >
          Income
        </NavLink>
        <NavLink
          to="Reviews"
          className={({ isActive }) =>
            isActive ? "font-bold underline text-gray-950" : undefined
          }
        >
          Reviews
        </NavLink>
      </div>

      <Outlet />
    </>
  );
}

export default HostLayout;
