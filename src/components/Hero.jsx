import React from "react";

const Hero = () => {
  return (
    <div className="hero relative min-h-screen">
      {/* Video Background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="assets/flythrough.mov"
        autoPlay
        loop
        muted
      />

      {/* Overlay for video */}
      <div className="hero-overlay bg-opacity-60 absolute inset-0"></div>

      {/* Hero Content */}
      <div className="hero-content text-neutral-content flex flex-col items-center justify-center min-h-screen text-center relative z-10">
        <div className="max-w-md pb-32 flex flex-col items-center">
          {/* <h1 className="mb-5 text-7xl font-heading text-secondary">
            Michigan's Brightest Christmas Light Show
          </h1> */}
          <img className="pt-20" src="assets/opendaily.png" alt="Open Daily" />
          <img
            className="mb-4 max-w lg:max-w-5xl"
            src="assets/herotext.png"
            alt="Hero Text"
          />
          <img
            src="assets/mibrightlights.png"
            className="max-w-96 lg:max-w-3xl"
            alt="Bright Lights"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
