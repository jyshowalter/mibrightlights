import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer footer-center bg-base-200 text-base-content rounded p-10">
        {/* <nav className="grid grid-flow-col gap-4">
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">FAQ</a>
          <a className="link link-hover">Sponsors</a>
        </nav> */}
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://www.tiktok.com/@bostickfamilylightshow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30" // Increased size
                height="30" // Increased size
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M12.96 2v1.55a5.467 5.467 0 0 0 4.27 1.43v2.1a7.684 7.684 0 0 1-3.85-.98v6.95a4.3 4.3 0 1 1-4.3-4.3c.16 0 .31.02.47.05v2.3a2 2 0 1 0 1.14 1.82V2h2.26Z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/c/BostickFamilyLightShow"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a
              href="https://www.facebook.com/BostickFamilyLightShow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/bostick_family_lightshow/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current w-7 h-7"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.85a1.15 1.15 0 1 1 0 2.3 1.15 1.15 0 0 1 0-2.3Z" />
              </svg>
            </a>
          </div>
        </nav>
        <aside>
          <p>Located at: 30712 Michigan Ave Westland, MI 48186</p>
          <p>Starting 11/22/24</p>
          <p>HOURS OF OPERATION 5:00pm to 10:00pm Every Day</p>
          <p>
            Copyright © {new Date().getFullYear()} - All rights reserved by MI
            Bright Lights
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
