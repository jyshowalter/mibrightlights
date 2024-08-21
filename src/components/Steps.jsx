import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center pb-20">
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
        <figure className="px-10 pt-20">
          <img src="assets\ticket.jpg" alt="Tickets" className="rounded-xl" />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold justify-center">
            Tickets
          </h2>
          <img
            className="card-title text-xl font-bold justify-center"
            src="assets\neontickets.jpg"
          ></img>
          <p className="text-info">
            Each vehicle needs a ticket for entry. Recommend purchasing tickets
            online to secure your spot. Click the "Purchase Tickets" button to
            buy your ticket(s). Note one ticket for one vehicle entry.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
        <figure className="px-10 pt-20">
          <img src="assets\gate.jpg" alt="Go to gate" className="rounded-xl" />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold justify-center">
            Go to gate
          </h2>
          <p className="text-info">
            After you purchase your ticket(s), head to our location at Eloise
            Asylum. You will redeem your ticket(s) at the gate.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
        <figure className="px-10 pt-20">
          <img
            src="assets\popcorn.jpg"
            alt="Sit back and relax"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold justify-center">
            Sit back and relax
          </h2>
          <p className="text-info">
            Once you're here, it's time for the whole family to experience the
            magical lights that are Mi Bright Lights! Sit back, relax, and enjoy
            the festive music and brilliant lights.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
