import React from "react";

function gtag_report_conversion(url) {
  const callback = function () {
    if (typeof url !== "undefined") {
      window.location = url;
    }
  };
  window.gtag("event", "conversion", {
    send_to: "AW-16785110478/OnkECM2EvOwZEM7r4cM-",
    event_callback: callback,
  });
  return false;
}

const Navbar = () => {
  const handlePurchaseClick = (event) => {
    gtag_report_conversion(
      "https://app.gopassage.com/events/mi-bright-lights/event_times"
    );
  };

  return (
    <div className="navbar fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-black to-transparent">
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
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-40 mt-3 w-52 p-2 shadow"
          >
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
              <a href="/FAQ">FAQ</a>
            </li>
            {/* <li>
              <a href="santaland">SANTA LAND</a>
            </li> */}
          </ul>
        </div>
        <a href="/" className="">
          <img className="h-32" src="assets/logoupdated.png" alt="Logo"></img>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-accent">
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
          {/* <li>
            <a href="santaland">SANTA LAND</a>
          </li> */}
        </ul>
      </div>
      <div className="navbar-end">
        <a
          href="https://app.gopassage.com/events/mi-bright-lights/event_times"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handlePurchaseClick}
          className="btn w-30 h-10 flex justify-center items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]"
        >
          <span className="relative z-20">PURCHASE TICKETS</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
