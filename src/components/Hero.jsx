import React from "react";

const Hero = () => {
  return (
    <div
      className="hero relative min-h-screen"
      style={{
        backgroundImage:
          "url(https://assets.goaaa.com/image/upload/w_auto,q_auto:best,f_auto/v1647566594/singularity-migrated-images/holiday-drive-thru-light-display-arizona-utah-nevada-via-magazine-courtesy-christmas-in-color-1x2-2.jpg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-7xl font-heading">
            Michigan's Brightest Christmas Light Show
          </h1>
          <a href="https://app.gopassage.com/venues/7938">
            <button className="btn text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80">
              Buy Your Tickets Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
