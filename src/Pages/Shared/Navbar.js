import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, NavLink } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
  };
  const menuItems = (
    <>
      <li>
        <NavLink to="/" className="rounded-lg">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/products" className="rounded-lg">
          Products
        </NavLink>
      </li>
      <li>
        <Link to="/myportfolio"> Portfolio</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>
      {user && (
        <li>
          <NavLink to="/dashboard" className="rounded-lg">
            Dashboard
          </NavLink>
        </li>
      )}

      <li>
        {user ? (
          <button onClick={logout} className="btn btn-ghost">
            Sign Out
          </button>
        ) : (
          <NavLink to="/login" className="rounded-lg">
            Login
          </NavLink>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar  bg-base-300 ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabindex="0" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItems}
          </ul>
        </div>
        <NavLink className="italic font-bold text-2xl" to="/">
          Woodworkers
        </NavLink>
      </div>

      <div className="navbar-end">
        <label
          tabindex="1"
          for="dashboard-sidebar"
          className="btn btn-ghost lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;
