import React from "react";

const Steps = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center align-center pt-10 pb-16">
      <div className="card bg-base-100 sm:w-80 md:w-96 card-bordered border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] mx-20 mt-12">
        <figure className="px-20 md:px-32 lg:px-20 2xl:px-32 pt-20">
          <img
            src="assets\ticketpic.png"
            alt="Tickets"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-3xl font-bold justify-center">
            Tickets
          </h2>
          <p className="text-info pb-6">
            Each vehicle needs a ticket for entry. Recommend purchasing tickets
            online to secure your spot. Click the "Purchase Tickets" button to
            buy your ticket(s). Note one ticket for one vehicle entry.
          </p>
        </div>
      </div>
      <div className="card bg-base-100 sm:w-80 md:w-96 card-bordered border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] mx-20 mt-12">
        <figure className="px-20 md:px-32 lg:px-20 2xl:px-32 pt-20">
          <img
            src="assets\gatepic.png"
            alt="Go to gate"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-3xl font-bold justify-center">
            Go To The Gate
          </h2>
          <p className="text-info">
            After you purchase your ticket(s), head to our location at The
            Iconic Eloise Venue. Use the East entrance located off Henry Ruff,
            just north of Michigan Ave. You will redeem your ticket(s) at the
            gate
          </p>
        </div>
      </div>
      <div className="card bg-base-100 sm:w-80 md:w-96 card-bordered border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f] mx-20 mt-12">
        <figure className="px-20 md:px-32 lg:px-20 2xl:px-32 pt-20">
          <img
            src="assets\popcornpic.png"
            alt="Sit back and relax"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body text-center">
          <h2 className="card-title text-3xl font-bold justify-center">
            Enjoy the show!
          </h2>
          <p className="text-info pb-12">
            Once you’re here turn your cars stereo to our radio station, and
            prepare to be mesmerized by our dazzling lights dancing to festive
            holiday music!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Steps;
