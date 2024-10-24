import React from "react";

const Sponsors = () => {
  return (
    <div>
      <div className="bg-base-100 py-12 sm:py-16 mt-20 mb-24">
        <div className="mx-auto max-w-full px-4 lg:px-6">
          <h2 className="text-center text-lg font-semibold leading-8 text-white-100">
            Want to be a sponsor? Email us at{" "}
            <a className="text-blue-400" href="mailto: info@mibrightlights.com">
              {" "}
              info@mibrightlights.com{" "}
            </a>
          </h2>
          <div className="mx-auto mt-10 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-8">
            <img
              alt="Silver and Bronze"
              src="assets/silver bronze.jpg"
              className="w-full object-contain lg:max-h-[800px]"
            />
            <img
              alt="Gold"
              src="assets/gold.jpg"
              className="w-full object-contain lg:max-h-[800px]"
            />
            <img
              alt="Platinum"
              src="assets/platinum.jpg"
              className="w-full object-contain lg:max-h-[800px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
