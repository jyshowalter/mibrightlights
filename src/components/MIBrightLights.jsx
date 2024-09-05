import React from "react";

const MIBrightLights = () => {
  return (
    <div className="flex flex-col items-center pb-12">
      <a
        className="flex justify-center"
        href="https://app.gopassage.com/venues/7938"
      >
        <button className="btn px-5 py-2.5 me-2 mb-2 w-30 h-10 items-center text-sky-200 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]">
          Buy Your Tickets Now
        </button>
      </a>
      <img
        src="assets/mibrightlights.png"
        className="max-w-96 lg:max-w-3xl"
        alt="Bright Lights"
      />
      <p className="text-center mx-6 pt-2 lg:text-3xl">
        Presented by{" "}
        <a className="link text-blue-400" href="https://yourpixelstore.com/">
          Your Pixel Store
        </a>{" "}
        and Bostick Family Light Show
      </p>
    </div>
  );
};

export default MIBrightLights;
