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
      <div className="hero-content text-neutral-content flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-md pb-32 flex flex-col items-center">
          {/* <h1 className="mb-5 text-7xl font-heading text-secondary">
            Michigan's Brightest Christmas Light Show
          </h1> */}
          <img className="pt-12 pb-12" src="assets\comingnov2024.png"></img>
          <img
            className="mb-4 max-w lg:max-w-5xl"
            src="assets\herotext.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
