import React from "react";

const Navbar = () => {
  return (
    <div className="navbar absolute top-0 left-0 w-full z-10 bg-gradient-to-b from-black to-transparent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/">
                <img src="assets/logo.png" alt="Logo"></img>
              </a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/FAQ">FAQ</a>
            </li>
            <li>
              <a href="/sponsors">Sponsors</a>
            </li>
          </ul>
        </div>
        <a href="/" className="">
          <img className="h-32" src="assets/logo.png" alt="Logo"></img>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="/contact">CONTACT</a>
          </li>
          <li>
            <a href="/faq">FAQ</a>
          </li>
          <li>
            <a href="/sponsors">SPONSORS</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://app.gopassage.com/venues/7938"
          className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80"
        >
          <span className="relative z-20">PURCHASE TICKETS</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
