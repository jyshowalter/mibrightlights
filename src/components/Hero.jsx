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
          <h1 className="mb-5 text-7xl font-heading text-secondary">
            Michigan's Brightest Christmas Light Show
          </h1>
          <a href="https://app.gopassage.com/venues/7938">
            <button className="btn px-5 py-2.5 me-2 mb-2 w-30 h-10 items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
              Buy Your Tickets Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
