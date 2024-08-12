import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage:
          "url(https://assets.goaaa.com/image/upload/w_auto,q_auto:best,f_auto/v1647566594/singularity-migrated-images/holiday-drive-thru-light-display-arizona-utah-nevada-via-magazine-courtesy-christmas-in-color-1x2-2.jpg.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            Michigan's Brightest Christmas Light Show
          </h1>
          <a href="https://app.gopassage.com/venues/7938">
            <button className="btn btn-primary">Buy Your Tickets Now</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
