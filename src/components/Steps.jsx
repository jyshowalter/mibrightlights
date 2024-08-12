import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen gap-4 px-4">
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img src="assets\ticket.png" alt="Tickets" className="rounded-xl" />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold">Tickets</h2>
          <p>
            Each vehicle needs a ticket for entry. Recommend purchasing tickets
            online to secure your spot. Click the "Purchase Tickets" button to
            buy your ticket(s). Note one ticket for one vehicle entry.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="assets\toll-road.png"
            alt="Go to gate"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold">Go to gate</h2>
          <p>
            After you purchase your ticket(s), head to our location at Eloise
            Asylum. You will redeem your ticket(s) at the gate.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src="assets\popcorn-box.png"
            alt="Sit back and relax"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold">Sit back and relax</h2>
          <p>
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
