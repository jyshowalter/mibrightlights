import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col md:flex-row items-start justify-center pb-20">
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 card-bordered border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] mt-12">
        <figure className="px-10 pt-20">
          <img
            src="assets\ticketpic.png"
            alt="Tickets"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center py-4">
          <h2 className="card-title text-xl font-bold justify-center">
            Tickets
          </h2>
          <p className="text-info">
            Each vehicle needs a ticket for entry. Recommend purchasing tickets
            online to secure your spot. Click the "Purchase Tickets" button to
            buy your ticket(s). Note one ticket for one vehicle entry.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 card-bordered border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] mx-20 mt-12">
        <figure className="px-10 pt-20">
          <img
            src="assets\gatepic.png"
            alt="Go to gate"
            className="rounded-xl"
          />
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
      <div className="card bg-base-100 w-full sm:w-80 md:w-96 card-bordered border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] mt-12">
        <figure className="px-10 pt-20">
          <img
            src="assets\popcornpic.png"
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
